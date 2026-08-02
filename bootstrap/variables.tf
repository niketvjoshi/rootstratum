variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "aws_profile" {
  description = "AWS CLI profile name for the rootstratum account"
  type        = string
  default     = "rootstratum-root"
}

variable "admin_username" {
  description = "IAM username for the admin user"
  type        = string
  default     = "rootstratum-admin"
}

variable "state_bucket_name" {
  description = "S3 bucket name for Terraform remote state"
  type        = string
  default     = "rootstratum-tfstate-865780387311"
}

variable "lock_table_name" {
  description = "DynamoDB table name for Terraform state locking"
  type        = string
  default     = "rootstratum-tf-lock"
}
