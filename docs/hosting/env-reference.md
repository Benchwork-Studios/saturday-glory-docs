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
| `COMMISSIONER_TOKEN_1` | *(auto-generated)* | Recommended | Secret token the Mac app uses for all sync and admin calls for **League 1**. Generate with `openssl rand -hex 32`. If omitted, one is generated at startup — retrieve it with `GET /api/auth/commissioner`. |
| `COMMISSIONER_TOKEN_2` | *(auto-generated)* | Only if running League 2 | Same as above, for **League 2**. Leave blank if you are only running one league. |
| `TOKEN_POLICY` | `carryOver` | No | Controls what happens to coach tokens at the end of each season. `carryOver` — coaches keep their tokens and reconnect automatically. `reset` — tokens are invalidated at offseason; coaches must rejoin with a new join code. Applies to all league instances. |
| `CLOUDFLARE_TUNNEL_TOKEN` | — | Only with Cloudflare overlay | The token from your Cloudflare tunnel dashboard. Only needed when running with `docker-compose.cloudflare.yml`. |
| `LOG_LEVEL` | `info` | No | Logging verbosity. `debug` \| `info` \| `warn` \| `error`. Use `debug` to see every request during setup; switch to `info` or `warn` in production. Applies to all league instances. |

## Example `.env`

```bash
# League tokens — generate each with: openssl rand -hex 32
COMMISSIONER_TOKEN_1=a1b2c3d4e5f6...
COMMISSIONER_TOKEN_2=f6e5d4c3b2a1...  # leave blank if not running a second league

TOKEN_POLICY=carryOver
CLOUDFLARE_TUNNEL_TOKEN=eyJhIjoiMT...
LOG_LEVEL=info
```

## Token Policy details

**`carryOver` (default)**
At the end of each season, coach tokens remain valid. Coaches do not need to rejoin — they open the portal and their session resumes automatically. Recommended for established leagues where coaches are known.

**`reset`**
When the season transitions to offseason, all coach tokens are invalidated and a new join code is generated. Every coach must re-enter the join code to get a new token for the next season. Useful for leagues that want to refresh membership each year or add new coaches.
