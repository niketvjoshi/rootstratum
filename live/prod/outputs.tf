output "elastic_ip" {
  description = "Set as the A record value in Cloudflare for rootstratum.com"
  value       = module.compute.elastic_ip
}

output "instance_id" {
  description = "EC2 instance ID — used in SSM send-command and Reserved Instance targeting"
  value       = module.compute.instance_id
}

output "db_endpoint" {
  description = "RDS endpoint — use as DATABASE_HOST in your app environment (EC2-only accessible)"
  value       = module.database.db_endpoint
}

output "db_name" {
  value = module.database.db_name
}

output "db_username" {
  value = module.database.db_username
}

output "github_actions_role_arn" {
  description = "Set as AWS_ROLE_ARN secret in the GitHub repo for OIDC keyless deploys"
  value       = module.iam.github_actions_role_arn
}

output "vpc_id" {
  value = module.networking.vpc_id
}

output "public_subnets" {
  description = "Map of AZ → public subnet ID"
  value       = module.networking.public_subnet_ids
}

output "private_subnets" {
  description = "Map of AZ → private subnet ID (RDS lives here)"
  value       = module.networking.private_subnet_ids
}
