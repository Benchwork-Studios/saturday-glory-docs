---
sidebar_position: 3
title: Your Session Token
---

# Your Session Token

## What it is

When you join a league, the server issues you a **session token** — a 64-character hex string that identifies you. It's stored in your browser automatically, so you stay signed in as long as you use the same browser.

The token is shown **once** immediately after you join, on the token save screen. It looks like:

```
a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
```

## Why you should save it

If you ever need to connect from a **different browser or device** — a new computer, a phone, a friend's machine — you'll need this token to restore your session. Without it, you'd have to ask your commissioner to remove you and rejoin with a new token, then get reassigned to your team.

**Save your token in a password manager** (1Password, Bitwarden, Apple Keychain, etc.) right after joining. Treat it like a password.

## Restoring your session

If you need to reconnect from a new browser:

1. Navigate to your league's server URL
2. Click **Returning coach? Restore your session →** at the bottom of the join page
3. Paste your saved token into the field
4. Click **Restore Session**

The server validates the token and signs you back in. You'll land directly on your dashboard.

## If you lose your token

If you lose your token and can't restore your session:

1. Tell your commissioner
2. Your commissioner removes you from the league
3. Rejoin using the current join code — you'll get a new token
4. Your commissioner reassigns your team

Your team's game data remains intact — removing and rejoining only resets your auth token, not the simulation history.

## Token policy at season end

At the end of each season, the commissioner's **Token Policy** setting determines whether tokens remain valid:

- **Carry Over** — your token stays valid; you reconnect automatically next season
- **Reset** — tokens are invalidated; you'll need to rejoin with a new join code next season

Your commissioner will tell you which policy is in effect.
