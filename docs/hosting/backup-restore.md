---
sidebar_position: 5
title: Backup & Restore
---

# Backup & Restore

All league data lives in a single SQLite file inside its Docker volume. Backups are a file copy.

## Backup

```bash
# League 1
docker compose cp league-server-1:/data/league1.db ./league1-backup-$(date +%Y%m%d).db

# League 2 (if running)
docker compose cp league-server-2:/data/league2.db ./league2-backup-$(date +%Y%m%d).db
```

Run this before upgrades or at the end of each season.

## Restore

```bash
# Stop the server first
docker compose down

# Restore League 1
docker run --rm \
  -v saturday-glory-server_league1_data:/data \
  -v $(pwd):/backup \
  alpine cp /backup/league1-backup-20260101.db /data/league1.db

# Start the server again
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d
```

## Automated backups

For a nightly backup via cron, add this to your crontab (`crontab -e`):

```bash
0 3 * * * cd /path/to/saturday-glory-server && docker compose cp league-server-1:/data/league1.db /backups/league1-$(date +\%Y\%m\%d).db
```

## Viewing the database directly

If you need to inspect the raw data:

```bash
# League 1
docker run --rm -it \
  -v saturday-glory-server_league1_data:/data \
  keinos/sqlite3 sqlite3 /data/league1.db
```

Useful queries:

```sql
-- List all coaches
SELECT display_name, team_id, is_commissioner FROM league_coaches;

-- Current join code
SELECT value FROM league_session WHERE key = 'join_code';

-- All seasons
SELECT id, season_number, current_phase, current_week FROM seasons;
```
