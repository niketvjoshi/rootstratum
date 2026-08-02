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

variable "instance_type" {
  type    = string
  default = "t4g.small"

  validation {
    condition     = startswith(var.instance_type, "t4g.")
    error_message = "instance_type must be a t4g Graviton2 type to match the arm64 Ubuntu AMI."
  }
}

variable "key_name" {
  type    = string
  default = "rootstratum-key"
}

variable "ssh_public_key" {
  description = "Contents of the EC2 SSH public key (e.g. cat ~/.ssh/rootstratum.pub)"
  type        = string
  sensitive   = true
}

variable "instance_profile_name" {
  description = "IAM instance profile name to attach to the EC2 (enables SSM access)"
  type        = string
}

variable "vpc_id" {
  type = string
}

variable "vpc_cidr" {
  description = "VPC CIDR — used to restrict app ports to internal traffic only"
  type        = string
}

variable "subnet_id" {
  description = "Public subnet ID to place the EC2 in"
  type        = string
}

variable "allowed_ssh_cidr" {
  description = "Your admin IP in CIDR — update this when your IP changes"
  type        = string
  default     = "49.36.98.43/32"

  validation {
    condition     = can(cidrhost(var.allowed_ssh_cidr, 0))
    error_message = "allowed_ssh_cidr must be a valid CIDR (e.g. 1.2.3.4/32)."
  }
}

variable "ebs_size_gb" {
  type    = number
  default = 20

  validation {
    condition     = var.ebs_size_gb >= 10 && var.ebs_size_gb <= 500
    error_message = "ebs_size_gb must be between 10 and 500."
  }
}
