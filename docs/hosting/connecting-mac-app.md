---
sidebar_position: 4
title: Connecting the Mac App
---

# Connecting the Mac App

The Saturday Glory Mac app is the commissioner's control center. Once the Go server is running and publicly accessible, you add it to the Mac app using your server URL and commissioner token.

## Steps

1. Open **Saturday Glory** on your Mac
2. On the splash screen, tap **League**
3. The **League Picker** appears — tap **Add League** (top-right)
4. Fill in the three fields:
   - **League Name** — a display name for this league (e.g. "Dynasty League 2026")
   - **Server URL** — your public server address, e.g. `https://league.yourdomain.com`
   - **Commissioner Token** — the value of `COMMISSIONER_TOKEN_1` from your `.env` file
5. Tap **Connect** — the app validates the token against the server before saving
6. Once connected, the league appears in your list and you are taken into the League Hub

## What happens on connect

When the Mac app connects for the first time:

1. It validates your token (`GET /api/auth/me`)
2. It seeds the server with all game data — teams, players, coaches, season schedule — via `POST /api/sync/seed`
3. SSE stream opens for live updates

Seeding takes a few seconds. After that, coaches can join and the commissioner dashboard shows connected coaches and team assignment controls.

## Finding your commissioner token

Your commissioner token is `COMMISSIONER_TOKEN_1` in your `.env` file on the server. If you didn't set one, the server auto-generates one at startup. Retrieve it with:

```bash
docker compose exec league-server-1 wget -qO- http://localhost:8080/api/auth/commissioner
```

## Generating a join code

After connecting:

1. In the **League Hub**, open Commissioner settings
2. Tap **New Join Code**
3. A 6-character code appears (e.g. `K7MN4P`)
4. Share this code with your coaches — they enter it at your server's web portal

The join code is single-use in the sense that anyone who has it can join. Generate a new one once all coaches have joined to close the window.

## Switching between leagues

If you run multiple leagues, tap **Switch League** in the League Hub toolbar to return to the League Picker. Each league's connection is saved — tap any row to reconnect.

## Managing saved leagues

In the League Picker, swipe left on any league to delete it. This removes the saved connection from the app and deletes the stored token from Keychain. It does not affect the server or any league data.

## Disconnecting

Tap **Switch League** in the League Hub toolbar to return to the picker without fully disconnecting. The server keeps running and coaches retain their sessions. You can reconnect at any time — the Mac app re-authenticates and re-syncs automatically.
