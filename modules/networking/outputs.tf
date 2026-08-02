output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "public_subnet_ids" {
  description = "Map of AZ → public subnet ID"
  value       = { for az, subnet in aws_subnet.public : az => subnet.id }
}

output "private_subnet_ids" {
  description = "Map of AZ → private subnet ID"
  value       = { for az, subnet in aws_subnet.private : az => subnet.id }
}

output "public_subnet_ids_list" {
  description = "Ordered list of public subnet IDs (1a, 1b, 1c)"
  value       = [for az in sort(keys(aws_subnet.public)) : aws_subnet.public[az].id]
}

output "private_subnet_ids_list" {
  description = "Ordered list of private subnet IDs (1a, 1b, 1c) — used for RDS subnet group"
  value       = [for az in sort(keys(aws_subnet.private)) : aws_subnet.private[az].id]
}
