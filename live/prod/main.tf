terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5"
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project     = var.project
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# IAM is created first — EC2 depends on the instance profile it produces
module "iam" {
  source = "../../modules/iam"

  project        = var.project
  environment    = var.environment
  aws_region     = var.aws_region
  aws_account_id = var.aws_account_id
  github_repo    = var.github_repo
  state_bucket_name = var.state_bucket_name
}

module "networking" {
  source = "../../modules/networking"

  project     = var.project
  environment = var.environment
  aws_region  = var.aws_region
  vpc_cidr    = var.vpc_cidr
}

module "compute" {
  source = "../../modules/compute"

  project               = var.project
  environment           = var.environment
  instance_type         = var.instance_type
  key_name              = var.key_name
  ssh_public_key        = var.ssh_public_key
  instance_profile_name = module.iam.ec2_instance_profile_name
  vpc_id                = module.networking.vpc_id
  vpc_cidr              = var.vpc_cidr
  subnet_id             = module.networking.public_subnet_ids_list[0] # ap-south-1a
  allowed_ssh_cidr      = var.allowed_ssh_cidr
  ebs_size_gb           = var.ebs_size_gb
}

module "database" {
  source = "../../modules/database"

  project               = var.project
  environment           = var.environment
  vpc_id                = module.networking.vpc_id
  db_subnet_ids         = module.networking.private_subnet_ids_list
  app_security_group_id = module.compute.security_group_id
  db_name               = var.db_name
  db_username           = var.db_username
  db_password           = var.db_password
}
