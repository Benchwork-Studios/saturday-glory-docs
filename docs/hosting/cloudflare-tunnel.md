---
sidebar_position: 3
title: Cloudflare Tunnel
---

# Exposing Your Server: Cloudflare Tunnel

This is one way to make the Saturday Glory server reachable from the internet. Cloudflare Tunnel is recommended for commissioners running the server at home — it gives you a public HTTPS URL without opening any inbound ports on your router.

The `cloudflared` container makes an outbound connection to Cloudflare's network. Traffic from coaches enters through Cloudflare and exits to your container — all encrypted, no firewall rules needed.

Looking for other options? See [Alternative Hosting →](./alternative-hosting)

## Prerequisites

- A domain managed by Cloudflare (free plan is fine)
- A Cloudflare account

## 1. Create the tunnel

1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Zero Trust** → **Networks** → **Tunnels**
3. Click **Create a tunnel**
4. Choose **Cloudflared** as the connector type
5. Name it `saturday-glory` (or anything you prefer)
6. Copy the **tunnel token** — you'll paste it into your `.env` file

## 2. Add the public hostname

While still in the tunnel config:

1. Go to the **Public Hostnames** tab
2. Click **Add a public hostname**
3. Fill in:
   - **Subdomain:** `league` (gives you `league.yourdomain.com`)
   - **Domain:** your Cloudflare-managed domain
   - **Service type:** `HTTP`
   - **URL:** `server:8080`
4. Save

Cloudflare creates the DNS record automatically.

## 3. Add the token to `.env`

```bash
CLOUDFLARE_TUNNEL_TOKEN=eyJhIjoiMTJ...  # paste your tunnel token here
```

## 4. Start with the Cloudflare overlay

```bash
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d
```

## 5. Verify

```bash
curl https://league.yourdomain.com/api/health
# → {"status":"ok","version":"1.0"}
```

The web portal is at `https://league.yourdomain.com` — coaches can join from any browser.

## Updating the URL in the Mac app

In the Mac app: **Settings** → **Multiplayer** → **League Server** → enter `https://league.yourdomain.com`.

## Troubleshooting

**`cloudflared-1` shows "failed to connect"**
- Check that `CLOUDFLARE_TUNNEL_TOKEN` is set correctly in `.env`
- Make sure you're using the token from the Cloudflare dashboard (not an API key)

**`server-1` shows "port already in use"**
- Another process is using port 8080. Change `PORT` in `.env` and update the service URL in your Cloudflare tunnel config to match.

**Coaches can reach the portal but the Mac app can't connect**
- Confirm the URL in Mac app Settings matches exactly (no trailing slash, HTTPS)
- Check `docker compose logs server` for the connection attempt
