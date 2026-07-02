---
sidebar_position: 5
title: Coach Actions
---

# Coach Actions

All endpoints require a valid Bearer token and an assigned team. Write endpoints return `423 Locked` when submissions are locked by the commissioner.

---

### `POST /api/gameplan`

Submits or updates the game plan for the current week.

**Request body:**
```json
{
  "runPassRatio": 60,
  "baseDefense": "base43",
  "blitzFrequency": 30,
  "coveragePreference": "zoneCoverage"
}
```

| Field | Type | Values |
|-------|------|--------|
| `runPassRatio` | integer 0–100 | % of plays that are runs |
| `baseDefense` | string | `base43` \| `base34` \| `nickel` \| `dime` |
| `blitzFrequency` | integer 0–100 | % blitz rate |
| `coveragePreference` | string | `zoneCoverage` \| `manCoverage` |

**Response `200`:** `{ "status": "submitted" }`

**Errors:** `409` if no active season; `423` if locked.

---

### `POST /api/submissions/ready`

Toggles the coach's ready status for the current week. Call once to mark ready; call again to unmark.

No request body required.

**Response `200`:**
```json
{ "isReady": true }
```

---

### `POST /api/recruiting/action`

Spends Action Points on a recruiting action for a prospect.

**Request body:**
```json
{
  "recruitID": "recruit-uuid",
  "action": "campusVisit"
}
```

`action` values: `phoneCall` (5 AP) | `scout` (10 AP) | `offer` (15 AP) | `campusVisit` (20 AP) | `homeVisit` (25 AP)

All actions except `phoneCall` are one-time per recruit. Budget is 50 AP per week.

**Response `200`:**
```json
{ "remainingAP": 25 }
```

**Errors:** `409` if AP exhausted or action already performed; `404` if recruit not found.

---

### `POST /api/portal/action`

Spends Action Points on a transfer portal player.

**Request body:**
```json
{
  "portalEntryID": "portal-entry-uuid",
  "action": "offer"
}
```

`action` values: `phoneCall` (5 AP) | `offer` (15 AP) | `campusVisit` (20 AP) | `sellOnProgram` (25 AP)

`offer`, `campusVisit`, and `sellOnProgram` are one-time per entry. Budget is 50 AP per week (separate from recruiting AP).

**Response `200`:**
```json
{ "remainingAP": 30 }
```

---

### `POST /api/depth-chart/swap`

Swaps the depth chart positions of two players. Both players must be on the coach's team and at the same position.

**Request body:**
```json
{
  "playerAID": "player-uuid-1",
  "playerBID": "player-uuid-2"
}
```

**Response `200`:** `{ "status": "swapped" }`

**Errors:** `403` if either player is not on your team; `422` if players are at different positions.
