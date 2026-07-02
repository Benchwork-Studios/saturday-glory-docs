---
sidebar_position: 4
title: Teams
---

# Teams

All endpoints require a valid Bearer token.

---

### `GET /api/teams`

Returns all FBS teams with current season records.

```json
[
  {
    "id": "uuid",
    "name": "Alabama",
    "conference": "SEC",
    "overallRecord": "8-1",
    "confRecord": "5-1",
    "prestige": 95
  }
]
```

---

### `GET /api/teams/{teamID}/roster`

Returns the full roster for the given team.

```json
[
  {
    "id": "player-uuid",
    "name": "John Smith",
    "position": "QB",
    "classYear": "JR",
    "starRating": 4,
    "overallRating": 84,
    "status": "healthy",
    "depthPosition": 1
  }
]
```

`status` values: `healthy` | `injured` | `suspended` | `transferPortal`

`depthPosition`: 1 = starter, 2 = backup, 3 = third string

---

### `GET /api/teams/{teamID}/schedule`

Returns the team's full season schedule.

```json
[
  {
    "week": 1,
    "homeTeamName": "Alabama",
    "awayTeamName": "Georgia",
    "homeScore": 28,
    "awayScore": 21,
    "isComplete": true,
    "gameTypeLabel": "Regular Season"
  }
]
```

Incomplete games have `null` scores and `"isComplete": false`.

---

### `GET /api/teams/{teamID}/stats`

Returns aggregated team stats for the current season.

```json
{
  "teamID": "uuid",
  "totalYards": 4821,
  "passingYards": 2940,
  "rushingYards": 1881,
  "pointsScored": 312,
  "pointsAllowed": 187,
  "turnovers": 8
}
```

---

### `GET /api/stats/leaders`

Returns individual statistical leaders across all teams.

```json
{
  "passing": [
    { "playerName": "John Smith", "teamName": "Alabama", "yards": 2840, "touchdowns": 24 }
  ],
  "rushing": [ ... ],
  "receiving": [ ... ]
}
```

---

### `GET /api/recruits`

Returns all recruits in the current recruiting class with the coach's interest data for their team.

```json
[
  {
    "id": "recruit-uuid",
    "name": "Mike Johnson",
    "position": "WR",
    "starRating": 4,
    "homeTown": "Atlanta, GA",
    "scoutedOverall": 82,
    "interestTier": "warm"
  }
]
```

`interestTier` values: `hot` | `warm` | `lukewarm` | `cold` | `none`

`scoutedOverall` is `null` until the `scout` action is taken.

---

### `GET /api/portal`

Returns open transfer portal entries with the coach's interest data.

```json
[
  {
    "id": "portal-entry-uuid",
    "playerName": "Chris Lee",
    "position": "RB",
    "previousTeam": "Auburn",
    "overallRating": 79,
    "interestTier": "cold",
    "isResolved": false
  }
]
```
