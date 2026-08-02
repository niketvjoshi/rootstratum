variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "aws_profile" {
  type    = string
  default = "rootstratum-admin"
}

variable "aws_account_id" {
  type    = string
  default = "865780387311"
}

variable "project" {
  type    = string
  default = "rootstratum"
}

variable "environment" {
  type    = string
  default = "prod"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "instance_type" {
  type    = string
  default = "t4g.small"
}

variable "key_name" {
  type    = string
  default = "rootstratum-key"
}

variable "ssh_public_key" {
  description = "Pass via: export TF_VAR_ssh_public_key=\"$(cat ~/.ssh/rootstratum.pub)\""
  type        = string
  sensitive   = true
}

variable "allowed_ssh_cidr" {
  type    = string
  default = "49.36.98.43/32"
}

variable "ebs_size_gb" {
  type    = number
  default = 20
}

variable "db_name" {
  type    = string
  default = "rootstratum"
}

variable "db_username" {
  type    = string
  default = "rootstratum_admin"
}

variable "db_password" {
  description = "Pass via: export TF_VAR_db_password=<password> (min 16 chars)"
  type        = string
  sensitive   = true
}

variable "github_repo" {
  type    = string
  default = "niketvjoshi/rootstratum"
}

variable "state_bucket_name" {
  type    = string
  default = "rootstratum-tfstate-865780387311"
}
