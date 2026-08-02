variable "project" {
  type    = string
  default = "rootstratum"
}

variable "environment" {
  type    = string
  default = "prod"
}

variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "aws_account_id" {
  description = "AWS account ID — used to scope IAM policy ARNs"
  type        = string
  default     = "865780387311"
}

variable "github_repo" {
  description = "GitHub repo in org/repo format — OIDC trust is scoped to the main branch only"
  type        = string
  default     = "niketvjoshi/rootstratum"
}

variable "state_bucket_name" {
  description = "S3 state bucket name — GitHub Actions gets read-only access"
  type        = string
  default     = "rootstratum-tfstate-865780387311"
}
