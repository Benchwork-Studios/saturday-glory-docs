---
sidebar_position: 7
title: SSE Events
---

# Server-Sent Events

The server pushes real-time events to connected clients via SSE. The coach web portal uses this stream to update the UI without polling.

## Connecting

```
GET /api/events?token=<your-token>
```

Authentication uses a query parameter rather than a header because the browser's `EventSource` API does not support custom headers.

The server sends a keep-alive ping comment (`: ping`) every 25 seconds to prevent proxy timeouts. This is not visible to `EventSource` listeners.

## Event format

All events are sent as `data:` lines with a JSON payload:

```
data: {"type":"weekAdvanced","week":6,"phase":"regularSeason"}
```

The `type` field identifies the event. Additional fields vary by event type.

## Event types

### `weekAdvanced`

The commissioner has advanced the week or phase.

```json
{
  "type": "weekAdvanced",
  "week": 6,
  "phase": "regularSeason"
}
```

The portal resets the game plan form and ready button when this event is received.

---

### `gamePlanLocked`

The commissioner has locked or unlocked submissions.

```json
{
  "type": "gamePlanLocked",
  "locked": true
}
```

The game plan and recruiting pages disable their forms when `locked` is `true`.

---

### `deadlineUpdate`

The advance deadline has been set or cleared.

```json
{
  "type": "deadlineUpdate",
  "deadline": "2026-07-10T20:00:00Z"
}
```

`deadline` is `null` when cleared. The dashboard shows or hides the deadline banner accordingly.

---

### `submissionUpdate`

A coach has submitted their game plan.

```json
{
  "type": "submissionUpdate",
  "teamName": "Coach Smith",
  "submitted": true
}
```

---

### `coachReady`

A coach has toggled their ready status.

```json
{
  "type": "coachReady",
  "teamName": "Coach Smith",
  "isReady": true
}
```

---

### `coachJoined`

A new coach has joined the league.

```json
{
  "type": "coachJoined",
  "displayName": "Coach Smith"
}
```

---

### `coachRemoved`

A coach has been removed by the commissioner.

```json
{
  "type": "coachRemoved",
  "token": "coach-token"
}
```

---

### `chatMessage`

A new message was posted to the league chat.

```json
{
  "type": "chatMessage",
  "displayName": "Commissioner",
  "message": "Advancing in 30 minutes.",
  "timestamp": "2026-07-02T18:00:00Z"
}
```

---

### `leagueReset`

The commissioner has reset the league. All tokens are invalidated.

```json
{
  "type": "leagueReset",
  "joinCode": "AB3X9Z"
}
```

Clients should redirect to the join page when they receive this event.

---

### Sync events (Mac app only)

These events fire when the Mac app pushes data to the server. The web portal does not act on them directly.

| Event | When |
|-------|------|
| `seedComplete` | Initial seed finished |
| `weekComplete` | Week sync pushed |
| `recruitingComplete` | Recruiting sync pushed |
| `offseasonComplete` | Offseason sync pushed |

## JavaScript example

```javascript
const es = new EventSource(`/api/events?token=${token}`);

es.onmessage = (e) => {
  const event = JSON.parse(e.data);
  switch (event.type) {
    case 'weekAdvanced':
      // reset form, reload dashboard data
      break;
    case 'gamePlanLocked':
      setFormEnabled(!event.locked);
      break;
    case 'deadlineUpdate':
      showDeadline(event.deadline);
      break;
  }
};
```
