---
sidebar_position: 1
slug: /hosting/intro
title: Overview
---

# Hosting & Setup

The Saturday Glory league server is a self-hosted Go application packaged as a Docker container. You run it on your own hardware — a home server, a Mac mini, a cloud VPS, whatever you have — and connect it to the internet via Cloudflare Tunnel so coaches can reach it from anywhere without opening ports on your router.

## What you need

| Requirement | Notes |
|-------------|-------|
| A Linux host | Any x86-64 or arm64 machine running a modern Linux distro. macOS also works for local testing. |
| Docker + Docker Compose | v2.0 or later (`docker compose` not `docker-compose`). |
| A Cloudflare account | Free tier is fine. You need a domain managed by Cloudflare. |
| The Saturday Glory Mac app | The commissioner's Mac runs the simulation engine and pushes results to the server. |

## Architecture overview

```
Commissioner's Mac
  └── Saturday Glory app
        └── LeagueAPIClient ──── HTTPS ──▶  Go Server (Docker)
                                              └── SQLite database
                                              └── Static web portal
                                                    ▲
                                           Coaches (any browser)
```

The Go server is the always-on source of truth. The Mac app connects as a privileged commissioner client, pushes simulation results, and reads back coach submissions. Coaches connect via any browser on any platform — no app required.

## Quick links

- [Quick Start →](./quickstart) — up and running in under 10 minutes
- [Cloudflare Tunnel →](./cloudflare-tunnel) — HTTPS without opening ports
- [Connecting the Mac App →](./connecting-mac-app)
- [Environment Variable Reference →](./env-reference)
