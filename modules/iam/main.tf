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
  common_tags = {
    Project     = var.project
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# ══════════════════════════════════════════════════════════════════════════════
# EC2 INSTANCE ROLE — enables SSM agent + CloudWatch agent on the app server
# ══════════════════════════════════════════════════════════════════════════════

resource "aws_iam_role" "ec2_app" {
  name = "${var.project}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })

  tags = merge(local.common_tags, { Name = "${var.project}-ec2-role" })
}

# Managed policies attached to EC2 role
resource "aws_iam_role_policy_attachment" "ec2_ssm" {
  role       = aws_iam_role.ec2_app.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_role_policy_attachment" "ec2_cloudwatch" {
  role       = aws_iam_role.ec2_app.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy"
}

resource "aws_iam_instance_profile" "ec2_app" {
  name = "${var.project}-ec2-profile"
  role = aws_iam_role.ec2_app.name

  tags = merge(local.common_tags, { Name = "${var.project}-ec2-profile" })
}

# ══════════════════════════════════════════════════════════════════════════════
# GITHUB ACTIONS — OIDC role for keyless CI/CD deployments
# ══════════════════════════════════════════════════════════════════════════════

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]

  tags = merge(local.common_tags, { Name = "github-oidc" })
}

resource "aws_iam_role" "github_actions" {
  name = "${var.project}-github-actions"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Federated = aws_iam_openid_connect_provider.github.arn
      }
      Action = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        }
        StringLike = {
          # Restrict to main branch only — prevents PRs from assuming this role
          "token.actions.githubusercontent.com:sub" = "repo:${var.github_repo}:ref:refs/heads/main"
        }
      }
    }]
  })

  tags = merge(local.common_tags, { Name = "${var.project}-github-actions" })
}

resource "aws_iam_policy" "github_actions_deploy" {
  name        = "${var.project}-github-actions-deploy"
  description = "Least-privilege deploy policy: SSM send-command to EC2, read TF state"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "SSMSendCommand"
        Effect = "Allow"
        Action = [
          "ssm:SendCommand",
          "ssm:GetCommandInvocation",
          "ssm:ListCommandInvocations"
        ]
        Resource = [
          "arn:aws:ec2:${var.aws_region}:${var.aws_account_id}:instance/*",
          "arn:aws:ssm:${var.aws_region}::document/AWS-RunShellScript"
        ]
        Condition = {
          StringEquals = {
            "ssm:resourceTag/Project"     = var.project
            "ssm:resourceTag/Environment" = var.environment
          }
        }
      },
      {
        Sid    = "EC2Describe"
        Effect = "Allow"
        Action = ["ec2:DescribeInstances"]
        Resource = "*"
      },
      {
        Sid    = "S3StateRead"
        Effect = "Allow"
        Action = ["s3:GetObject", "s3:ListBucket"]
        Resource = [
          "arn:aws:s3:::${var.state_bucket_name}",
          "arn:aws:s3:::${var.state_bucket_name}/*"
        ]
      }
    ]
  })

  tags = local.common_tags
}

resource "aws_iam_role_policy_attachment" "github_actions_deploy" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.github_actions_deploy.arn
}
