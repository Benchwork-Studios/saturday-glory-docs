---
sidebar_position: 8
title: Alternative Hosting Options
---

# Alternative Hosting Options

The standard setup uses Cloudflare Tunnel because it requires no firewall configuration and handles HTTPS automatically. But there are other valid options depending on your setup.

## Tailscale

If all your coaches are on a Tailscale network, you can use a Tailscale IP instead of a public domain. No Cloudflare account required.

1. Install Tailscale on your server host
2. Get the server's Tailscale IP (e.g. `100.64.0.1`)
3. Run the server without the Cloudflare overlay: `docker compose up -d`
4. Coaches connect to `http://100.64.0.1:8080` after joining your Tailnet

This gives you a private league that's not accessible from the public internet.

## nginx or Caddy reverse proxy

If you already run a reverse proxy on your server:

**Caddy** (recommended — handles HTTPS automatically):

```
league.yourdomain.com {
    reverse_proxy localhost:8080
}
```

**nginx:**

```nginx
server {
    listen 443 ssl;
    server_name league.yourdomain.com;

    # ... SSL config ...

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Required for SSE (Server-Sent Events)
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 3600s;
    }
}
```

:::important SSE proxy settings
The `proxy_buffering off` and long `proxy_read_timeout` settings are required for Server-Sent Events (the live update stream). Without them, coach dashboards won't receive real-time updates.
:::

## Router port forwarding

If you don't have a domain or Cloudflare account, you can forward your router's port 443 (or 8080) to your server and use your public IP. This is the least recommended option — your IP may change, HTTPS requires a certificate, and your home IP is exposed.

## Cloud hosting (Fly.io, Railway)

The Docker image runs on any container platform. For Fly.io:

```bash
fly launch --image ghcr.io/benchwork-studios/saturday-glory-server:latest
fly secrets set COMMISSIONER_TOKEN=$(openssl rand -hex 32)
```

Cloud hosting costs money but gives you a reliable public URL without managing home infrastructure. Fly.io's free tier may be sufficient for a small league.
