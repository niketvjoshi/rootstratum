#!/usr/bin/env bash
# Run once on the EC2 instance as root (or with sudo).
# Sets up: Node 20, PM2, Nginx, deploy script, SSL via Certbot.
#
# Usage:
#   sudo bash setup-ec2.sh
#
set -euo pipefail

DOMAIN="rootstratum.com"
APP_DIR="/opt/rootstratum"
REPO="https://github.com/niketvjoshi/rootstratum.git"
BRANCH="main"
PORT=3000
NODE_ENV=production

echo "==> Updating packages"
apt-get update -y
apt-get upgrade -y

echo "==> Installing Node 20 via NodeSource"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "==> Installing PM2 globally"
npm install -g pm2

echo "==> Installing Nginx"
apt-get install -y nginx

echo "==> Installing Certbot"
apt-get install -y certbot python3-certbot-nginx

echo "==> Installing Git"
apt-get install -y git

echo "==> Cloning repository to $APP_DIR"
if [[ -d "$APP_DIR/.git" ]]; then
  echo "   Repo already cloned, skipping."
else
  git clone --branch "$BRANCH" "$REPO" "$APP_DIR"
fi

echo "==> Initial build"
cd "$APP_DIR/web"
npm ci
NODE_ENV=$NODE_ENV npm run build

echo "==> Writing deploy script to $APP_DIR/deploy.sh"
cat > "$APP_DIR/deploy.sh" << 'DEPLOY'
#!/usr/bin/env bash
set -euo pipefail
APP_DIR="/opt/rootstratum"
BRANCH="main"

echo "[deploy] Pulling latest $BRANCH"
cd "$APP_DIR"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "[deploy] Installing deps & building"
cd "$APP_DIR/web"
npm ci --omit=dev
NODE_ENV=production npm run build

echo "[deploy] Reloading PM2"
if pm2 list | grep -q rootstratum; then
  pm2 reload rootstratum --update-env
else
  pm2 start npm --name rootstratum -- start --prefix /opt/rootstratum/web
fi
pm2 save

echo "[deploy] Done"
DEPLOY
chmod +x "$APP_DIR/deploy.sh"

echo "==> Starting app with PM2"
cd "$APP_DIR/web"
pm2 start npm --name rootstratum -- start --prefix "$APP_DIR/web"
pm2 save
pm2 startup systemd -u root --hp /root | tail -1 | bash   # enable on boot

echo "==> Writing Nginx config for $DOMAIN"
cat > "/etc/nginx/sites-available/$DOMAIN" << NGINX
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass         http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade \$http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host \$host;
        proxy_set_header   X-Real-IP \$remote_addr;
        proxy_set_header   X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Next.js static assets — cache aggressively
    location /_next/static/ {
        proxy_pass http://127.0.0.1:$PORT;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
NGINX

ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "==> Obtaining SSL certificate via Certbot"
echo "    (Make sure the A record $DOMAIN → $(curl -s ifconfig.me) is live first)"
read -rp "    Press ENTER to run certbot, or Ctrl-C to skip and run manually: "
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "admin@$DOMAIN"
systemctl reload nginx

echo ""
echo "✓ Setup complete. Site live at https://$DOMAIN"
