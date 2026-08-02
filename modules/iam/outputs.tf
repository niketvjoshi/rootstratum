output "ec2_instance_profile_name" {
  description = "IAM instance profile name — attach to the EC2 instance"
  value       = aws_iam_instance_profile.ec2_app.name
}

output "ec2_role_arn" {
  description = "IAM role ARN for the EC2 app server"
  value       = aws_iam_role.ec2_app.arn
}

output "github_actions_role_arn" {
  description = "Set as AWS_ROLE_ARN secret in the GitHub repo for OIDC-based deploys"
  value       = aws_iam_role.github_actions.arn
}
