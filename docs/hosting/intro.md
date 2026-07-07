---
sidebar_position: 1
slug: /hosting/intro
title: Overview
---

# Hosting & Setup

The Saturday Glory league server is a Docker container that runs a Go web server. That container **is** the website — it serves the coach web portal and the API from the same process. You run it on any machine you control, then expose it to coaches using whatever method fits your setup.

## What the container does

When the container is running, it listens on port 8080 and serves:

- **The coach web portal** — the browser UI coaches use to join, view their team, submit game plans, and recruit
- **The REST API** — endpoints the Mac app uses for sync, simulation results, and commissioner actions
- **Server-Sent Events** — the real-time update stream coaches see in the portal

There is no separate web host or CDN involved. The container handles everything.

## Architecture

```
Commissioner's Mac
  └── Saturday Glory app
        └── LeagueAPIClient ──── HTTPS ──▶  Your Server (Docker, port 8080)
                                              ├── SQLite database
                                              └── Web portal + API
                                                    ▲
                                           Coaches (any browser)
```

The Mac app connects as a privileged commissioner client — it pushes simulation results and reads back coach submissions. Coaches connect via any browser on any platform. No app install required for coaches.

## How coaches reach the server

Once the container is running on your machine, you choose how to make it reachable from the internet. There is no single required method — pick what fits your situation:

| Method | Best for | Requires |
|--------|----------|----------|
| [Cloudflare Tunnel](./cloudflare-tunnel) | Home servers, no port forwarding | Free Cloudflare account + a domain |
| [Reverse proxy (nginx/Caddy)](./alternative-hosting#nginx-or-caddy-reverse-proxy) | VPS or dedicated server | A domain + existing proxy setup |
| [Tailscale](./alternative-hosting#tailscale) | Private leagues, all coaches on same Tailnet | Tailscale installed on all devices |
| [Cloud hosting (Fly.io)](./alternative-hosting#cloud-hosting-flyio-railway) | No home hardware | Fly.io account |
| [Port forwarding](./alternative-hosting#router-port-forwarding) | Simple home setup, static IP | Router access |

## What you need (minimum)

| Requirement | Notes |
|-------------|-------|
| A machine to run Docker | Linux (x86-64 or arm64) recommended. macOS works for local testing. |
| Docker + Docker Compose | v2.0 or later (`docker compose`, not `docker-compose`) |
| The Saturday Glory Mac app | The commissioner's Mac runs the simulation engine |
| A way to expose port 8080 | See the table above — pick one |

## Quick links

- [Quick Start →](./quickstart) — get the container running in under 10 minutes
- [Cloudflare Tunnel →](./cloudflare-tunnel) — HTTPS without opening ports (recommended for home servers)
- [Alternative Hosting →](./alternative-hosting) — all other exposure options
- [Connecting the Mac App →](./connecting-mac-app)
- [Multiple Leagues →](./multiple-leagues) — running more than one league from the same machine
- [Environment Variable Reference →](./env-reference)
