---
sidebar_position: 6
title: Managing Coaches
---

# Managing Coaches

## Viewing connected coaches

All coaches who have joined the league appear in **League Hub → Connected Coaches**, sorted alphabetically. Each row shows:

- **Display name** — what the coach entered when they joined
- **Team** — their assigned team, or *Unassigned* if not yet assigned
- **Submission indicator** — whether they've submitted a game plan (visible if assigned to a team)
- **Commissioner badge** — shown on your own row

## Removing a coach

To remove a coach from the league:

1. Find the coach in the Connected Coaches list
2. Click the **person minus (−)** button on the right side of their row
3. Confirm the removal in the dialog

Removing a coach:
- Deletes their token — they are immediately signed out of the portal
- Removes their team assignment
- Clears their submission history
- Removes them from the Connected Coaches list

They can rejoin using the current join code if you want to readmit them.

:::note Commissioner row
Your own row (marked **Commissioner**) does not have a remove button. The commissioner cannot be removed from their own league.
:::

## Handling inactive coaches

If a coach goes inactive mid-season, you have two options:

1. **Leave them assigned** — their team advances without submissions. The simulation uses the last submitted game plan (or defaults if none).
2. **Remove them** — their team becomes unassigned. You can reassign it to another coach or manage it as an uncontrolled team.

There is no "pause" or "bot takeover" feature — you manage inactive situations manually.

## Reconnecting coaches

Coaches who need to reconnect from a new browser or device use their **session token** to restore their session. The token is shown once after joining — coaches should store it in a password manager.

To reconnect:
1. Coach navigates to the server URL
2. On the join page, opens the **Restore Session** section
3. Pastes their token and clicks **Restore**

If a coach loses their token and cannot reconnect, remove them from the league and have them rejoin with the join code. They will receive a new token. Reassign their team afterward.

## League chat

The commissioner can send messages to all coaches via **League Hub → League Chat**. Messages appear in the coach portal in real time. Use this to:

- Announce when submissions are open or locked
- Set context before advancing (e.g. "advancing in 30 minutes")
- Post results or standings notes after advancing

Coaches can also send messages from their portal — all messages are visible to everyone in the league.

## Refreshing the coach list

If the coach list looks stale, click the **refresh** (↺) button in the League Hub toolbar. This re-fetches the current coach list and submission state from the server.
