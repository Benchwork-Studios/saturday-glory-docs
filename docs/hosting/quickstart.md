---
sidebar_position: 2
title: Quick Start
---

# Quick Start

Get the server running locally in under 10 minutes, then expose it to the internet with Cloudflare Tunnel.

## 1. Clone the repo

```bash
git clone https://github.com/Benchwork-Studios/saturday-glory-server.git
cd saturday-glory-server
```

## 2. Create your `.env` file

```bash
cp .env.example .env
```

Open `.env` and fill in the required values:

```bash
# Required — generate with: openssl rand -hex 32
COMMISSIONER_TOKEN=your_secret_token_here

# Required for internet access — see Cloudflare Tunnel setup
CLOUDFLARE_TUNNEL_TOKEN=your_tunnel_token_here

# Optional — defaults shown
PORT=8080
DB_PATH=/data/league.db
WEB_DIR=/web
TOKEN_POLICY=carryOver
LOG_LEVEL=info
```

:::tip Commissioner Token
Run `openssl rand -hex 32` to generate a secure token. Store it in your password manager — the Mac app needs it every time it connects.
:::

## 3. Start the server

**With Cloudflare Tunnel (recommended for internet access):**

```bash
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d
```

**Local only (no tunnel):**

```bash
docker compose up -d
```

## 4. Verify it's running

```bash
docker compose ps
docker compose logs -f
```

You should see:

```
server-1      | Saturday Glory League Server listening on :8080
cloudflared-1 | ...Registered tunnel connection...
```

Check the health endpoint:

```bash
# Local
curl http://localhost:8080/api/health

# Via Cloudflare Tunnel
curl https://league.yourdomain.com/api/health
```

Expected response: `{"status":"ok","version":"1.0"}`

## 5. Get your commissioner token

```bash
docker compose exec server wget -qO- http://localhost:8080/api/auth/commissioner
# → {"token":"your-commissioner-token"}
```

This should match the `COMMISSIONER_TOKEN` you set in `.env`.

## Next steps

- [Set up Cloudflare Tunnel →](./cloudflare-tunnel) for HTTPS internet access
- [Connect the Mac app →](./connecting-mac-app) to start your first league
