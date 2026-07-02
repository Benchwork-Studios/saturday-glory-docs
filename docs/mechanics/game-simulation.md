---
sidebar_position: 2
title: Game Simulation
---

# Game Simulation

Games are simulated play-by-play in the Mac app after the commissioner locks submissions and advances the week. Outcomes are driven by coach game plan settings, player ratings, and a risk/variance system.

## How a game is simulated

Each game runs as a sequence of plays. For each play:

1. The offense selects a play type based on the coach's run/pass ratio and down-and-distance
2. The defense selects a formation or coverage based on the coach's defensive settings
3. The result is calculated from player ratings, play risk level, and a randomized outcome within the play's yard range

Score, turnovers, and yardage accumulate until the clock expires.

## Offensive play types

| Play | Risk | Yard range |
|------|------|-----------|
| Inside Run | Low | -2 to 8 |
| Outside Run | Moderate | -3 to 15 |
| Draw | Moderate | -1 to 12 |
| Option | High | -2 to 20 |
| QB Sneak | Low | -1 to 3 |
| Short Pass | Low | -1 to 12 |
| Medium Pass | Moderate | -2 to 25 |
| Deep Pass | High | -5 to 60 |
| Screen | Moderate | -5 to 20 |
| Play Action | Moderate | -3 to 40 |
| Trick Play | High | -10 to 50 |

Higher-risk plays have wider variance — potential for big gains or significant losses.

## Defensive play types

| Formation/Scheme | Risk | Notes |
|-----------------|------|-------|
| 4-3 Base | Low | Balanced against most offenses |
| 3-4 Base | Low | Strong vs. run-heavy schemes |
| Nickel | Moderate | Good vs. pass-heavy offenses |
| Dime | Moderate | Four-receiver sets |
| Blitz | Moderate | Creates pressure; exposed to quick passes |
| All-Out Blitz | High | Big sack potential; vulnerable to big plays |
| Zone Coverage | Low | Handles route combinations |
| Man Coverage | Moderate | Effective vs. single receivers |
| Prevent | High | Effective late-game; vulnerable underneath |

## How game plan settings translate to plays

**Run/Pass Ratio** — A 70% run ratio means 70% of offensive play selections are drawn from run categories.

**Base Defense** — Sets the primary formation for most defensive snaps.

**Blitz Frequency** — Controls how often extra rushers are sent. Higher frequency increases sacks and turnovers but exposes the secondary.

**Coverage Preference** — Defaults zone or man coverage behind the pass rush.

## Player ratings that matter

- **Run plays** — RB speed/strength, OL run-blocking
- **Pass plays** — QB awareness/arm strength, WR/TE route running, OL pass-blocking
- **Pass defense** — CB/S coverage ratings, DL pass rush
- **Run defense** — LB ratings, DL strength
- **Special teams** — K accuracy (field goals), P rating (punts/field position)

The depth chart determines which player's ratings apply — injured or unavailable starters are replaced by their backup's ratings.
