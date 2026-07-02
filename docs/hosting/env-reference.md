---
sidebar_position: 7
title: Environment Variables
---

# Environment Variable Reference

All configuration is done through environment variables in your `.env` file. Copy `.env.example` to get started:

```bash
cp .env.example .env
```

## Variables

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `PORT` | `8080` | No | Internal container port. Change if 8080 conflicts with something else on your host. |
| `DB_PATH` | `/data/league.db` | No | Path to the SQLite database file inside the container. Must be inside the `/data` volume so it survives container rebuilds. |
| `WEB_DIR` | `/web` | No | Path to the web portal static files inside the container. Do not change. |
| `COMMISSIONER_TOKEN` | *(auto-generated)* | Recommended | The secret token the Mac app uses for all sync and admin calls. Generate with `openssl rand -hex 32`. If omitted, one is generated at startup and stored in the database — retrieve it with `GET /api/auth/commissioner`. |
| `TOKEN_POLICY` | `carryOver` | No | Controls what happens to coach tokens at the end of each season. `carryOver` — coaches keep their tokens and reconnect automatically. `reset` — tokens are invalidated at offseason; coaches must rejoin with a new join code. |
| `CLOUDFLARE_TUNNEL_TOKEN` | — | Only with Cloudflare overlay | The token from your Cloudflare tunnel dashboard. Only needed when running with `docker-compose.cloudflare.yml`. |
| `LOG_LEVEL` | `info` | No | Logging verbosity. `debug` \| `info` \| `warn` \| `error`. Use `debug` to see every request during setup; switch to `info` or `warn` in production. |

## Example `.env`

```bash
PORT=8080
DB_PATH=/data/league.db
WEB_DIR=/web
COMMISSIONER_TOKEN=a1b2c3d4e5f6...  # openssl rand -hex 32
TOKEN_POLICY=carryOver
CLOUDFLARE_TUNNEL_TOKEN=eyJhIjoiMT...
LOG_LEVEL=info
```

## Token Policy details

**`carryOver` (default)**
At the end of each season, coach tokens remain valid. Coaches do not need to rejoin — they open the portal and their session resumes automatically. Recommended for established leagues where coaches are known.

**`reset`**
When the season transitions to offseason, all coach tokens are invalidated and a new join code is generated. Every coach must re-enter the join code to get a new token for the next season. Useful for leagues that want to refresh membership each year or add new coaches.
