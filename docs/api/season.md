---
sidebar_position: 3
title: Season & Standings
---

# Season & Standings

All endpoints require a valid Bearer token unless noted.

---

### `GET /api/season`

Returns the current season state.

```json
{
  "seasonNumber": 1,
  "phase": "regularSeason",
  "week": 5
}
```

`phase` values: `offseason` | `springPractice` | `fallCamp` | `regularSeason` | `conferenceChampionship` | `bowlSeason`

---

### `GET /api/standings`

Returns conference standings for all conferences.

```json
[
  {
    "conference": "SEC",
    "teams": [
      {
        "teamID": "uuid",
        "name": "Alabama",
        "confWins": 5,
        "confLosses": 1,
        "overallWins": 8,
        "overallLosses": 1
      }
    ]
  }
]
```

---

### `GET /api/rankings`

Returns the current AP Poll top 25.

```json
[
  { "rank": 1, "teamID": "uuid", "name": "Georgia", "record": "9-0" },
  { "rank": 2, "teamID": "uuid", "name": "Ohio State", "record": "8-1" }
]
```

---

### `GET /api/season/deadline`

Returns the current advance deadline, or `null` if none is set.

```json
{ "deadline": "2026-07-10T20:00:00Z" }
```

or

```json
{ "deadline": null }
```

---

### `GET /api/submissions`

Returns submission status for all coaches with assigned teams.

```json
[
  {
    "coachToken": "...",
    "displayName": "Coach Smith",
    "teamID": "uuid",
    "gamePlanSubmitted": true,
    "recruitingActionsThisWeek": 3,
    "isReady": true
  }
]
```

---

### `GET /api/chat`

Returns the league chat message history.

```json
[
  {
    "displayName": "Commissioner",
    "message": "Advancing in 30 minutes.",
    "timestamp": "2026-07-02T18:00:00Z"
  }
]
```

---

### `POST /api/chat`

Posts a message to the league chat. Broadcast to all connected clients via SSE.

**Request body:**
```json
{ "message": "Good luck everyone!" }
```

**Response `200`:** `{ "status": "sent" }`
