---
sidebar_position: 2
title: Starting a League
---

# Starting a League

## Prerequisites

Before inviting coaches:

- The Go server is running and reachable at a public URL (see [Hosting & Setup](/hosting/intro))
- The Mac app is connected to the server — go to **Settings → Multiplayer → League Server** and enter your server URL and commissioner token

## Connecting the Mac app

1. Open **Saturday Glory** on your Mac
2. Go to **Settings → Multiplayer**
3. Enter your server URL (e.g. `https://league.yourdomain.com`)
4. Enter your **Commissioner Token** — this is the `COMMISSIONER_TOKEN` value from your `.env` file
5. Tap **Connect**

Once connected, the **League Hub** appears in the Season Hub navigation. This is your control panel for the entire multiplayer league.

## League Hub overview

The League Hub has five sections:

| Section | Purpose |
|---------|---------|
| **Server Status** | Current server URL, join code, reset and disconnect controls |
| **Connected Coaches** | All coaches who have joined, with team assignment and submission status |
| **Season Control** | Lock/unlock submissions, set advance deadlines |
| **Submissions** | Per-coach game plan and recruiting status for the current week |
| **League Chat** | Commissioner-to-coach messaging |

## Starting a new season

When you first connect, the server generates a join code automatically. Share that code with your coaches — they use it to join at your server URL.

Before the season begins:

1. **Wait for coaches to join** — watch the Connected Coaches section populate
2. **Assign each coach a team** — click the team picker dropdown next to each coach's name
3. **Confirm all coaches are assigned** — coaches without a team can still see the portal but won't appear in the Submissions section
4. **Unlock submissions** to open the first week

See [Join Codes & Team Assignment →](./join-codes-and-teams) for the full details.

## Resetting the league

**Reset League** removes all coaches, clears all submissions and chat history, and generates a new join code. Use this to start fresh with a new group of coaches, or if testing.

:::warning Irreversible
Reset cannot be undone. All coach tokens are invalidated — everyone must rejoin with the new join code.
:::

To reset: **League Hub → Server Status → Reset League → confirm**
