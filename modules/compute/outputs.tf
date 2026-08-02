output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.app.id
}

output "elastic_ip" {
  description = "Static public IP — set as the A record in Cloudflare for rootstratum.com"
  value       = aws_eip.app.public_ip
}

output "private_ip" {
  description = "EC2 private IP (within VPC)"
  value       = aws_instance.app.private_ip
}

output "security_group_id" {
  description = "App server SG ID — referenced by the RDS ingress rule"
  value       = aws_security_group.app.id
}
