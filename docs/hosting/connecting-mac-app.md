---
sidebar_position: 4
title: Connecting the Mac App
---

# Connecting the Mac App

The Saturday Glory Mac app is the commissioner's control center. Once the Go server is running and publicly accessible, you connect the app to it using your server URL and commissioner token.

## Steps

1. Open **Saturday Glory** on your Mac
2. Go to **Settings** (gear icon, main menu)
3. Scroll to **Multiplayer**
4. Under **League Server**, enter your server URL:
   ```
   https://league.yourdomain.com
   ```
5. Tap **Connect** — the status indicator turns green when the connection is established

## What happens on connect

When the Mac app connects for the first time:

1. It performs a health check (`GET /api/health`)
2. It authenticates using your commissioner token (`GET /api/auth/commissioner`)
3. It seeds the server with all game data — teams, players, coaches, season schedule — via `POST /api/sync/seed`
4. SSE stream opens for live updates

Seeding takes a few seconds. After that, coaches can join and the commissioner dashboard shows connected coaches and team assignment controls.

## Commissioner token

The Mac app reads the commissioner token from your `.env` file (`COMMISSIONER_TOKEN`). If you didn't set one, the server auto-generates one at startup. Retrieve it with:

```bash
docker compose exec server wget -qO- http://localhost:8080/api/auth/commissioner
```

Enter this token in Settings → Multiplayer → **Commissioner Token** if prompted.

## Generating a join code

After connecting:

1. In **Settings** → **Multiplayer**, tap **New Join Code**
2. A 6-character code appears (e.g. `K7MN4P`)
3. Share this code with your coaches — they enter it at your server's web portal

The join code is single-use in the sense that anyone who has it can join. Generate a new one once all coaches have joined to close the window.

## Disconnecting

Tap **Disconnect** in Settings → Multiplayer. The server keeps running and coaches retain their sessions. You can reconnect at any time — the Mac app re-authenticates and re-syncs automatically.
