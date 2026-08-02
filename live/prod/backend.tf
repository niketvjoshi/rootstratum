terraform {
  backend "s3" {
    bucket         = "rootstratum-tfstate-865780387311"
    key            = "prod/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "rootstratum-tf-lock"
    encrypt        = true
    profile        = "rootstratum-admin"
  }
}
