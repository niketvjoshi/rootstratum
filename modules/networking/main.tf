terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5"
}

locals {
  azs = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]

  # Public subnets: 10.x.0.0/24, 10.x.1.0/24, 10.x.2.0/24
  public_subnets = {
    for idx, az in local.azs : az => cidrsubnet(var.vpc_cidr, 8, idx)
  }

  # Private subnets: 10.x.10.0/24, 10.x.11.0/24, 10.x.12.0/24
  # Offset by 10 to leave room for future tiers (e.g. data at 20+)
  private_subnets = {
    for idx, az in local.azs : az => cidrsubnet(var.vpc_cidr, 8, idx + 10)
  }

  common_tags = {
    Project     = var.project
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# ── VPC ────────────────────────────────────────────────────────────────────────
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(local.common_tags, { Name = "${var.project}-vpc" })
}

# ── Public Subnets (3 AZs) ─────────────────────────────────────────────────────
resource "aws_subnet" "public" {
  for_each = local.public_subnets

  vpc_id                  = aws_vpc.main.id
  cidr_block              = each.value
  availability_zone       = each.key
  map_public_ip_on_launch = false

  tags = merge(local.common_tags, {
    Name = "${var.project}-public-${each.key}"
    Tier = "public"
  })
}

# ── Private Subnets (3 AZs) — RDS, future services ────────────────────────────
resource "aws_subnet" "private" {
  for_each = local.private_subnets

  vpc_id                  = aws_vpc.main.id
  cidr_block              = each.value
  availability_zone       = each.key
  map_public_ip_on_launch = false

  tags = merge(local.common_tags, {
    Name = "${var.project}-private-${each.key}"
    Tier = "private"
  })
}

# ── Internet Gateway ───────────────────────────────────────────────────────────
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = merge(local.common_tags, { Name = "${var.project}-igw" })
}

# ── Public Route Table (shared across all 3 public subnets) ───────────────────
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = merge(local.common_tags, { Name = "${var.project}-public-rt" })
}

resource "aws_route_table_association" "public" {
  for_each = aws_subnet.public

  subnet_id      = each.value.id
  route_table_id = aws_route_table.public.id
}

# ── Private Route Table (local-only — no NAT gateway, keeps costs minimal) ────
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  tags = merge(local.common_tags, { Name = "${var.project}-private-rt" })
}

resource "aws_route_table_association" "private" {
  for_each = aws_subnet.private

  subnet_id      = each.value.id
  route_table_id = aws_route_table.private.id
}
