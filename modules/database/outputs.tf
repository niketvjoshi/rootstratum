output "db_endpoint" {
  description = "RDS endpoint — use this as DATABASE_HOST in your app environment"
  value       = aws_db_instance.main.endpoint
}

output "db_host" {
  description = "Hostname only (without port) for DATABASE_URL construction"
  value       = aws_db_instance.main.address
}

output "db_port" {
  value = aws_db_instance.main.port
}

output "db_name" {
  value = aws_db_instance.main.db_name
}

output "db_username" {
  value = aws_db_instance.main.username
}
