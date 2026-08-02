#!/bin/bash
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

apt-get update -y
apt-get upgrade -y

# Runtime dependencies
apt-get install -y \
  curl \
  git \
  unzip \
  nginx \
  certbot \
  python3-certbot-nginx \
  docker.io \
  docker-compose-plugin

# Enable and start services
systemctl enable --now nginx
systemctl enable --now docker

# Add ubuntu user to docker group
usermod -aG docker ubuntu

# Node.js 20 LTS (arm64 compatible)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Python 3 + pip for FastAPI
apt-get install -y python3-pip python3-venv

# PM2 for process management
npm install -g pm2
pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "${project} server bootstrap complete" >> /var/log/user-data.log
