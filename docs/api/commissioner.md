---
sidebar_position: 6
title: Commissioner Endpoints
---

# Commissioner Endpoints

All endpoints in this section require the commissioner's Bearer token. Non-commissioner tokens receive `403 Forbidden`.

---

## Season control

### `POST /api/admin/lock`

Locks or unlocks coach submissions. When locked, all coach write endpoints return `423`.

```json
{ "lock": true }
```

Broadcasts a `gamePlanLocked` SSE event.

---

### `POST /api/season/deadline`

Sets or clears the advance deadline shown to coaches.

**Set a deadline:**
```json
{ "deadline": "2026-07-10T20:00:00Z" }
```

**Clear the deadline:**
```json
{ "deadline": null }
```

Broadcasts a `deadlineUpdate` SSE event.

---

### `POST /api/advance/week`

Marks the current week as complete and increments the week counter.

No request body. Broadcasts a `weekAdvanced` SSE event.

---

### `POST /api/advance/phase`

Advances the season to the next phase (e.g. Regular Season → Conference Championships).

No request body. Broadcasts a `weekAdvanced` SSE event.

---

## Coach management

### `GET /api/admin/coaches`

Returns all coaches currently in the league.

```json
[
  {
    "token": "...",
    "displayName": "Coach Smith",
    "teamID": "uuid-or-empty",
    "isCommissioner": false
  }
]
```

---

### `DELETE /api/admin/coaches/{coachToken}`

Removes a coach from the league. Their token is invalidated immediately.

Broadcasts a `coachRemoved` SSE event.

---

### `POST /api/admin/assign`

Assigns a coach to a team.

```json
{
  "coachToken": "...",
  "teamID": "team-uuid"
}
```

---

### `DELETE /api/admin/assign/{coachToken}`

Removes a coach's team assignment without removing them from the league.

---

### `POST /api/admin/reset`

Resets the league: removes all coaches, clears submissions and chat, generates a new join code.

No request body. Broadcasts a `leagueReset` SSE event with the new join code.

:::warning Irreversible
This cannot be undone. All coach tokens are invalidated.
:::

---

## Mac app sync

These endpoints are used exclusively by the Mac app to push simulation results to the server.

### `POST /api/sync/seed`

Seeds the server with initial league data (teams, conferences, players). Called on first setup.

### `POST /api/sync/week`

Pushes game results and updated roster/standings data after a week is simulated.

### `POST /api/sync/recruiting`

Pushes recruiting results after Signing Day is processed in the Mac app.

### `POST /api/sync/offseason`

Pushes offseason data (player progression, coaching carousel, portal resolutions).

---

## Exports

### `GET /api/export/standings`

Returns standings data in a format suitable for export.

### `GET /api/export/stats`

Returns statistical leaders data in a format suitable for export.

---

## Status

### `GET /api/admin/status`

Returns server uptime, coach count, and lock state.

### `GET /api/admin/gameplans`

Returns all submitted game plans for the current week across all coaches.
