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

# Ubuntu 22.04 LTS arm64 — required for t4g (Graviton2) instances
data "aws_ami" "ubuntu_arm64" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-arm64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "architecture"
    values = ["arm64"]
  }
}

# ── SSH Key Pair ───────────────────────────────────────────────────────────────
resource "aws_key_pair" "app" {
  key_name   = var.key_name
  public_key = var.ssh_public_key

  tags = merge(local.common_tags, { Name = var.key_name })
}

# ── Security Group ─────────────────────────────────────────────────────────────
resource "aws_security_group" "app" {
  name        = "${var.project}-app-sg"
  description = "${var.project} application server - HTTP/HTTPS public, SSH admin-only"
  vpc_id      = var.vpc_id

  ingress {
    description = "SSH - admin IP only"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ssh_cidr]
  }

  ingress {
    description = "HTTP - public"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS - public"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Next.js (internal - proxied by Nginx)"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  ingress {
    description = "FastAPI (internal - proxied by Nginx)"
    from_port   = 8011
    to_port     = 8011
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  egress {
    description = "All outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(local.common_tags, { Name = "${var.project}-app-sg" })

  lifecycle {
    create_before_destroy = true
  }
}

# ── EC2 Instance ───────────────────────────────────────────────────────────────
resource "aws_instance" "app" {
  ami                         = data.aws_ami.ubuntu_arm64.id
  instance_type               = var.instance_type
  key_name                    = aws_key_pair.app.key_name
  subnet_id                   = var.subnet_id
  vpc_security_group_ids      = [aws_security_group.app.id]
  iam_instance_profile        = var.instance_profile_name
  associate_public_ip_address = false

  # Enforce IMDSv2 — prevents SSRF-based credential theft
  metadata_options {
    http_endpoint               = "enabled"
    http_tokens                 = "required"
    http_put_response_hop_limit = 1
  }

  root_block_device {
    volume_type           = "gp3"
    volume_size           = var.ebs_size_gb
    throughput            = 125
    iops                  = 3000
    encrypted             = true
    delete_on_termination = true

    tags = merge(local.common_tags, { Name = "${var.project}-root-ebs" })
  }

  user_data = templatefile("${path.module}/user_data.sh.tpl", {
    project = var.project
  })

  tags = merge(local.common_tags, { Name = var.project })

  lifecycle {
    ignore_changes = [ami, user_data]
  }
}

# ── Elastic IP ─────────────────────────────────────────────────────────────────
resource "aws_eip" "app" {
  domain = "vpc"

  tags = merge(local.common_tags, { Name = "${var.project}-eip" })

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_eip_association" "app" {
  instance_id   = aws_instance.app.id
  allocation_id = aws_eip.app.id
}
