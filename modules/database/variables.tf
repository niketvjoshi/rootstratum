variable "project" {
  type    = string
  default = "rootstratum"
}

variable "environment" {
  type    = string
  default = "prod"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "environment must be one of: dev, staging, prod."
  }
}

variable "instance_class" {
  description = "RDS instance class — db.t4g.micro is free tier eligible for 12 months"
  type        = string
  default     = "db.t4g.micro"

  validation {
    condition     = startswith(var.instance_class, "db.")
    error_message = "instance_class must be a valid RDS instance class (e.g. db.t4g.micro)."
  }
}

variable "vpc_id" {
  type = string
}

variable "db_subnet_ids" {
  description = "Private subnet IDs spanning 3 AZs for the DB subnet group"
  type        = list(string)

  validation {
    condition     = length(var.db_subnet_ids) >= 2
    error_message = "db_subnet_ids must contain at least 2 subnets in different AZs."
  }
}

variable "app_security_group_id" {
  description = "SG ID of the EC2 app server — the only source allowed to reach the DB"
  type        = string
}

variable "db_name" {
  type    = string
  default = "rootstratum"

  validation {
    condition     = can(regex("^[a-z][a-z0-9_]{0,62}$", var.db_name))
    error_message = "db_name must start with a lowercase letter and contain only lowercase letters, numbers, and underscores."
  }
}

variable "db_username" {
  type    = string
  default = "rootstratum_admin"
}

variable "db_password" {
  description = "Master password — pass via: export TF_VAR_db_password=<password>. Never hardcode."
  type        = string
  sensitive   = true

  validation {
    condition     = length(var.db_password) >= 16
    error_message = "db_password must be at least 16 characters."
  }
}
