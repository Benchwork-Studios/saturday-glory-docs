---
sidebar_position: 2
title: Authentication
---

# Authentication

## Endpoints

### `GET /api/health`

No auth required. Returns server status.

```json
{ "status": "ok", "version": "1.0" }
```

---

### `POST /api/auth/join`

No auth required. Registers a new coach or re-issues a token for a returning coach.

**Rate limited:** 5 attempts per IP per minute. Returns `429` if exceeded.

**Request body:**
```json
{
  "joinCode": "AB3X9Z",
  "displayName": "Coach Smith"
}
```

**Response `200`:**
```json
{
  "token": "a1b2c3d4e5f6...",
  "teamID": "uuid-string-or-empty"
}
```

**Error responses:**
- `403` — invalid join code
- `400` — missing or blank `displayName`
- `429` — rate limited

**Reconnect behavior:** If a coach with the same `displayName` (case-insensitive) already exists, a new token is issued and the old one is invalidated. The team assignment carries over. This handles the case where a coach loses their token — the commissioner can remove them and they rejoin with the same name.

---

### `GET /api/auth/commissioner`

No auth required. Returns the commissioner's token. Used by the Mac app on initial connection.

```json
{ "token": "commissioner-token-here" }
```

Returns `404` if no commissioner exists.

---

### `GET /api/auth/me`

**Requires auth.** Returns the current coach's profile.

```json
{
  "token": "a1b2c3d4...",
  "displayName": "Coach Smith",
  "teamID": "uuid-or-empty",
  "teamName": "Alabama",
  "isCommissioner": false
}
```

## Token lifetime

Coach tokens are 64-character hex strings (32 random bytes). They remain valid until:
- The league is reset (`POST /api/admin/reset`)
- The coach is removed (`DELETE /api/admin/coaches/{token}`)
- The commissioner uses a `reset` token policy at season end (Mac app controls this)

The commissioner token is set via `COMMISSIONER_TOKEN` in `.env` and does not expire.
