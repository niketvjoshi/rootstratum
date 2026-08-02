terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5"
}

locals {
  common_tags = {
    Project     = var.project
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# ── RDS Subnet Group (all 3 AZs) ───────────────────────────────────────────────
resource "aws_db_subnet_group" "main" {
  name       = "${var.project}-db-subnet-group"
  subnet_ids = var.db_subnet_ids

  tags = merge(local.common_tags, { Name = "${var.project}-db-subnet-group" })
}

# ── Security Group — DB is reachable only from the app server ──────────────────
resource "aws_security_group" "rds" {
  name        = "${var.project}-rds-sg"
  description = "Allow PostgreSQL from ${var.project} app server only - no public access"
  vpc_id      = var.vpc_id

  ingress {
    description     = "PostgreSQL - app server SG only"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [var.app_security_group_id]
  }

  egress {
    description = "All outbound (RDS needs to reach AWS endpoints)"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(local.common_tags, { Name = "${var.project}-rds-sg" })

  lifecycle {
    create_before_destroy = true
  }
}

# ── Custom Parameter Group — production-grade PostgreSQL settings ───────────────
resource "aws_db_parameter_group" "main" {
  name        = "${var.project}-pg16"
  family      = "postgres16"
  description = "${var.project} PostgreSQL 16 parameter group"

  # Log slow queries (anything over 1 second)
  parameter {
    name  = "log_min_duration_statement"
    value = "1000"
  }

  # Audit: log new connections and disconnections
  parameter {
    name  = "log_connections"
    value = "1"
  }

  parameter {
    name  = "log_disconnections"
    value = "1"
  }

  # Enable query statistics via pg_stat_statements
  parameter {
    name         = "shared_preload_libraries"
    value        = "pg_stat_statements"
    apply_method = "pending-reboot"
  }

  parameter {
    name  = "pg_stat_statements.track"
    value = "ALL"
  }

  tags = merge(local.common_tags, { Name = "${var.project}-pg16-params" })
}

# ── RDS PostgreSQL ──────────────────────────────────────────────────────────────
resource "aws_db_instance" "main" {
  identifier = "${var.project}-db"

  engine               = "postgres"
  engine_version       = "16"
  instance_class       = var.instance_class
  parameter_group_name = aws_db_parameter_group.main.name

  db_name  = var.db_name
  username = var.db_username
  password = var.db_password

  # Free tier: 20GB gp2. max_allocated_storage = allocated = no autoscaling.
  allocated_storage     = 20
  max_allocated_storage = 20
  storage_type          = "gp2"
  storage_encrypted     = true

  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]

  multi_az            = false # single-AZ for cost — promote to true before going viral
  publicly_accessible = false

  # Backups
  backup_retention_period   = 7
  backup_window             = "02:00-03:00"
  copy_tags_to_snapshot     = true
  delete_automated_backups  = false

  # Maintenance
  maintenance_window         = "sun:04:00-sun:05:00"
  auto_minor_version_upgrade = true # auto-applies security patches

  # Performance Insights — 7 days free
  performance_insights_enabled          = true
  performance_insights_retention_period = 7

  # Export slow query + PostgreSQL logs to CloudWatch
  enabled_cloudwatch_logs_exports = ["postgresql"]

  # Enhanced monitoring disabled (monitoring_interval = 0) to avoid IAM role cost
  monitoring_interval = 0

  # Safety rails
  deletion_protection       = true
  skip_final_snapshot       = false
  final_snapshot_identifier = "${var.project}-db-final-snapshot"

  tags = merge(local.common_tags, { Name = "${var.project}-db" })

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [password] # manage password rotation outside Terraform
  }
}
