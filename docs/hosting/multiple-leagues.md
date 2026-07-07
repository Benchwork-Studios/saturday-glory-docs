---
sidebar_position: 8
title: Multiple Leagues
---

# Running Multiple Leagues

A single commissioner can run multiple independent leagues from the same machine. Each league is a separate Docker service with its own port, database, commissioner token, and data volume. The Mac app manages all leagues from a single league picker screen.

## How it works

Each league is a completely independent server instance:

| | League 1 | League 2 | League 3 |
|---|---|---|---|
| Service | `league-server-1` | `league-server-2` | `league-server-3` |
| Host port | `8080` | `8081` | `8082` |
| Database | `league1.db` | `league2.db` | `league3.db` |
| Token variable | `COMMISSIONER_TOKEN_1` | `COMMISSIONER_TOKEN_2` | `COMMISSIONER_TOKEN_3` |
| Docker volume | `league1_data` | `league2_data` | `league3_data` |

Leagues do not share data. A coach connected to League 1 cannot see anything from League 2.

## League 2 is already defined

The included `docker-compose.yml` ships with `league-server-2` already configured. To activate it:

**1. Generate a token:**
```bash
openssl rand -hex 32
```

**2. Add it to your `.env` file:**
```bash
COMMISSIONER_TOKEN_2=<paste-token-here>
```

**3. Restart the stack:**
```bash
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d
```

**4. Verify:**
```bash
curl http://127.0.0.1:8081/api/health
# → {"status":"ok","version":"1.0"}
```

## Adding a third league (or beyond)

Copy any existing service block in `docker-compose.yml` and increment the numbers:

```yaml
  league-server-3:
    build: .
    restart: unless-stopped
    environment:
      - PORT=8080
      - DB_PATH=/data/league3.db
      - COMMISSIONER_TOKEN=${COMMISSIONER_TOKEN_3}
      - TOKEN_POLICY=${TOKEN_POLICY:-carryOver}
      - LOG_LEVEL=${LOG_LEVEL:-info}
    volumes:
      - league3_data:/data
    ports:
      - "127.0.0.1:8082:8080"
```

Also add `league3_data:` to the top-level `volumes:` block, and `COMMISSIONER_TOKEN_3=` to your `.env`.

## Cloudflare: pointing a second hostname at League 2

In **Cloudflare Zero Trust** → your tunnel → **Public Hostnames**, add a second entry:

| Field | Value |
|---|---|
| Subdomain | `league2` (or any name) |
| Domain | your Cloudflare-managed domain |
| Service | `http://127.0.0.1:8081` |

Save the entry. Cloudflare routes `https://league2.yourdomain.com` to the second league instance immediately — no restart needed.

## Mac app: adding leagues

In Saturday Glory, each league is a saved connection in the League Picker:

1. From the splash screen, tap **League**
2. Tap **Add League**
3. Enter the league display name, server URL, and commissioner token
4. Tap **Connect** — the app validates and saves the connection

Repeat for each league. Tap any row in the League Picker to switch leagues.

## Backup

Back up each league's database independently — see [Backup & Restore](./backup-restore).
