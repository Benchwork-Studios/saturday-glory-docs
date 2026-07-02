---
sidebar_position: 1
slug: /api/overview
title: API Overview
---

# API Reference

The Saturday Glory server exposes a JSON REST API and a Server-Sent Events stream. The API is used by both the coach web portal and the Mac app.

## Base URL

All endpoints are relative to your server's root URL:

```
https://league.yourdomain.com
```

## Response format

All responses are `application/json`. Error responses have the shape:

```json
{ "error": "message describing what went wrong" }
```

## Authentication

Most endpoints require a Bearer token in the `Authorization` header:

```
Authorization: Bearer <token>
```

Tokens are issued at join time (coach tokens) or set via `COMMISSIONER_TOKEN` in `.env` (commissioner token). See [Authentication →](./authentication).

## HTTP status codes used

| Code | Meaning |
|------|---------|
| `200` | Success |
| `400` | Bad request — missing or invalid fields |
| `401` | Unauthorized — no token or no team assigned |
| `403` | Forbidden — wrong join code or commissioner-only endpoint |
| `404` | Not found |
| `409` | Conflict — action already performed or AP exhausted |
| `422` | Unprocessable — e.g. swapping players at different positions |
| `423` | Locked — submissions are locked by the commissioner |
| `429` | Rate limited — too many join attempts |
| `500` | Server error |

## Endpoint groups

| Group | Description |
|-------|-------------|
| [Authentication](./authentication) | Join, restore session, get current coach info |
| [Season & Standings](./season) | Season state, standings, rankings, chat, deadline |
| [Teams](./teams) | Team list, roster, schedule, stats |
| [Coach Actions](./coach-actions) | Game plan, recruiting, portal, depth chart, ready |
| [Commissioner](./commissioner) | Admin controls, sync endpoints, exports |
| [SSE Events](./sse-events) | Real-time event stream |
