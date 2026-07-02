---
sidebar_position: 5
title: Injury System
---

# Injury System

Players can be injured during game simulation. Injuries remove a player from subsequent games for a set number of weeks and shift playing time to their backup.

## Player statuses

| Status | Meaning |
|--------|---------|
| **Healthy** | Available — full participation in simulation |
| **Injured** | Out for N weeks — backup fills their depth chart slot |
| **Suspended** | Unavailable due to discipline |
| **Transfer Portal** | Left the program |

## How injuries occur

Injuries are generated during game simulation. Higher-risk plays (option, deep pass, all-out blitz) carry a higher chance of involving an injury. Physical positions — RB, OL, LB — are more injury-prone than skill positions.

When a player is injured, the simulation records a weeks-remaining count. They return to healthy when the commissioner advances past the recovery period.

## Impact on simulation

When a starter is injured:
- Their backup takes their depth chart slot for simulated games
- The backup's ratings are used instead of the starter's
- If the backup is also injured, the third-string player fills in

Depth chart gaps matter — if a position has no backup, a position-adjacent player fills in at a rating penalty.

## Using the roster before submitting your game plan

Check the Roster page for injured players before submitting your game plan each week:

- Starting RB injured and backup is significantly lower-rated → consider shifting pass-heavy
- Star pass rusher out → avoid blitz-heavy packages that rely on individual DL ratings
- Depleted secondary → avoid man coverage schemes

The simulation uses the player who's actually available, not the listed starter.
