---
sidebar_position: 6
title: Upgrading
---

# Upgrading the Server

## Standard upgrade

```bash
cd saturday-glory-server

# Pull latest code
git pull

# Rebuild and restart (database volume is preserved)
docker compose down
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d --build
```

The SQLite database lives in the `league_data` volume and is not affected by container rebuilds.

## Before you upgrade

- **Back up the database** — see [Backup & Restore](./backup-restore)
- Check the [CHANGELOG](https://github.com/Benchwork-Studios/saturday-glory-server/blob/main/CHANGELOG.md) for any breaking changes or migration notes
- Database schema migrations run automatically on startup — you don't need to run them manually

## Verifying the upgrade

```bash
curl https://league.yourdomain.com/api/health
# → {"status":"ok","version":"1.x"}
```

Check the version field matches the release you deployed.

## Rolling back

If something goes wrong:

```bash
# Check out the previous version
git log --oneline -10
git checkout <commit-hash>

# Rebuild
docker compose down
docker compose -f docker-compose.yml -f docker-compose.cloudflare.yml up -d --build
```

If the upgrade ran a schema migration and the rollback version doesn't support the new schema, restore from your pre-upgrade backup instead.
