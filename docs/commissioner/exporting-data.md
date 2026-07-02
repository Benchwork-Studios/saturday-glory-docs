---
sidebar_position: 7
title: Exporting & Backing Up
---

# Exporting & Backing Up

## League data lives in two places

| Location | What's stored |
|----------|--------------|
| **Mac app (Core Data)** | All simulation state — teams, players, rosters, schedules, game results, standings, recruiting |
| **Go server (SQLite)** | Coach accounts, tokens, join codes, game plan submissions, recruiting actions, chat history |

These two stores stay in sync through the API — the Mac app pushes simulation results to the server after each advance, and reads back coach submissions before each advance.

## Backing up the server database

The server database is a single SQLite file at `/data/league.db` inside the Docker volume. To back it up:

```bash
docker compose exec server cp /data/league.db /data/league.db.bak
```

Or copy it to your host machine:

```bash
docker cp $(docker compose ps -q server):/data/league.db ./league-backup.db
```

Run this before any major operation — reset, upgrade, or season transition. See [Backup & Restore →](/hosting/backup-restore) for automated backup options.

## Backing up the Mac app data

The Mac app uses Core Data with CloudKit sync. If CloudKit is enabled, your simulation state is automatically backed up to iCloud. You can also export the Core Data store manually from the Mac's Application Support directory if needed.

## What gets lost in a reset

A **Reset League** operation clears:
- All coach accounts and tokens
- All game plan submissions
- All recruiting action logs
- All chat history
- The join code (a new one is generated)

It does **not** touch the simulation state in the Mac app — your teams, players, schedules, and game results are unaffected.

## Sharing standings and results

There is no built-in export to CSV or PDF. Standings and game results are visible in the coach portal at your server URL — coaches can view and screenshot them directly. 

For more formal record-keeping, the server database is plain SQLite — you can open `league.db` with any SQLite browser (like [DB Browser for SQLite](https://sqlitebrowser.org)) and query it directly.
