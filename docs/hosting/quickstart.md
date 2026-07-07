---
sidebar_position: 2
title: Quick Start
---

# Quick Start

Get the server running in under 10 minutes.

## 1. Clone the repo

```bash
git clone https://github.com/Benchwork-Studios/saturday-glory-server.git
cd saturday-glory-server
```

## 2. Create your `.env` file

```bash
cp .env.example .env
```

Open `.env` and set your commissioner token for League 1:

```bash
# Generate with: openssl rand -hex 32
COMMISSIONER_TOKEN_1=your_secret_token_here

# Optional — defaults shown
TOKEN_POLICY=carryOver
LOG_LEVEL=info
```

:::tip Commissioner Token
Run `openssl rand -hex 32` to generate a secure token. Store it somewhere safe — the Mac app needs it every time it connects.
:::

## 3. Start the container

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
league-server-1-1  | Saturday Glory League Server listening on :8080
```

Check the health endpoint:

```bash
curl http://localhost:8080/api/health
# → {"status":"ok","version":"1.0"}
```

Open `http://localhost:8080` in a browser — you'll see the coach web portal. The container is serving the entire site.

## 5. Make it reachable for coaches

The container is running locally on port 8080. Now you need to decide how coaches connect from the internet. Choose the method that fits your setup:

- **[Cloudflare Tunnel →](./cloudflare-tunnel)** — Recommended for home servers. No port forwarding, HTTPS automatic, free.
- **[nginx or Caddy reverse proxy →](./alternative-hosting#nginx-or-caddy-reverse-proxy)** — If you're on a VPS or already run a proxy.
- **[Tailscale →](./alternative-hosting#tailscale)** — Private leagues where all coaches are on a shared network.
- **[Cloud hosting →](./alternative-hosting#cloud-hosting-flyio-railway)** — If you'd rather not run hardware at home.
- **[Port forwarding →](./alternative-hosting#router-port-forwarding)** — Direct router exposure (least recommended).

Once coaches can reach the server, [connect the Mac app →](./connecting-mac-app) to start your league.
