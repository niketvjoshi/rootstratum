output "admin_user_name" {
  description = "IAM admin username"
  value       = aws_iam_user.admin.name
}

output "admin_access_key_id" {
  description = "Access key ID for the admin IAM user — add this to your AWS CLI config"
  value       = aws_iam_access_key.admin.id
  sensitive   = true
}

output "admin_secret_access_key" {
  description = "Secret access key for the admin IAM user — save this immediately, shown only once"
  value       = aws_iam_access_key.admin.secret
  sensitive   = true
}

output "state_bucket_name" {
  description = "S3 bucket name for Terraform remote state"
  value       = aws_s3_bucket.tf_state.id
}

output "lock_table_name" {
  description = "DynamoDB table name for state locking"
  value       = aws_dynamodb_table.tf_lock.name
}
