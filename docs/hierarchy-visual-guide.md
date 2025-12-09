# Football Club Portal - Hierarchy Structure

## Visual Hierarchy

```
📋 Dashboard
│
├── 🏆 Clubs
│   │
│   └── 🏟️ Club (e.g., Vale FC)
│       │
│       ├── 📊 Club Overview
│       │   ├── Goal Difference: +15
│       │   ├── Player Count: 45
│       │   ├── Matches Played: 20
│       │   └── Win Rate: 65%
│       │
│       ├── 📜 Constitution & Ethos
│       ├── 👥 All Players
│       │
│       └── 📚 Age Groups & Teams
│           │
│           ├── 👦 Age Group: 2014s (Youth)
│           │   │
│           │   ├── 📊 Age Group Overview
│           │   │   ├── Goal Difference: +8
│           │   │   ├── Player Count: 18
│           │   │   ├── Matches Played: 8
│           │   │   └── Win Rate: 62.5%
│           │   │
│           │   └── 🔵 Teams
│           │       ├── Team: Reds
│           │       │   ├── 📊 Team Overview
│           │       │   ├── 👥 Squad Management
│           │       │   ├── ⚽ Matches
│           │       │   └── 🏃 Training
│           │       │
│           │       ├── Team: Whites
│           │       └── Team: Blues
│           │
│           ├── 👦 Age Group: 2013s (Youth)
│           │   └── Teams...
│           │
│           ├── 🎯 Age Group: Amateur
│           │   └── Teams...
│           │
│           ├── 🔵 Age Group: Reserves
│           │   └── Teams...
│           │
│           └── ⭐ Age Group: Senior
│               └── 🥇 Team: First Team
│
├── 🎨 Formations & Tactics (Global)
│   ├── Formation 1: 4-4-2
│   └── Formation 2: 4-3-3
│
└── 🏃 Training Sessions (Global)
    ├── Training Session 1
    └── Training Session 2
```

## Statistics Aggregation Flow

```
Club Statistics (All Teams)
    ↓ aggregates ↓
Age Group Statistics (Multiple Teams)
    ↓ aggregates ↓
Team Statistics (Single Team)
    ↓ calculated from ↓
Individual Match Results
```

## Example: 2014s Age Group

```
Age Group: 2014s
├── Code: "2014"
├── Level: Youth
├── Season: 2024/25
│
├── Teams (3):
│   ├── 🔴 Reds (6 players)
│   ├── ⚪ Whites (3 players)
│   └── 🔵 Blues (3 players)
│
└── Aggregated Stats:
    ├── Total Players: 12
    ├── Total Matches: 8
    ├── Total Wins: 5
    ├── Total Draws: 1
    ├── Total Losses: 2
    ├── Win Rate: 62.5%
    ├── Goals For: 15
    ├── Goals Against: 7
    └── Goal Difference: +8
```

## URL Pattern Examples

### Club Level
```
/clubs/club-1/vale-fc
```
Shows: Club overview with all age groups

### Age Group Level
```
/clubs/club-1/vale-fc/age-groups/age-group-2014
```
Shows: 2014s age group overview with all teams (Reds, Whites, Blues)

### Team Level
```
/clubs/club-1/vale-fc/age-groups/age-group-2014/teams/team-2014-reds/reds
```
Shows: Reds team overview with specific team stats

### Player Level (from team context)
```
/clubs/club-1/vale-fc/age-groups/age-group-2014/teams/team-2014-reds/reds/players/player-9/john-smith
```
Shows: Player profile in team context

### Player Level (from club context)
```
/clubs/club-1/vale-fc/players/player-9/john-smith
```
Shows: Player profile in club context

## Dashboard Layout (All Levels)

Each level (Club, Age Group, Team) displays:

### Statistics Cards (Top Row)
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Goal Difference │ │  Player Count   │ │ Matches Played  │ │    Win Rate     │
│      +15        │ │       45        │ │       20        │ │      65%        │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Content Sections
```
┌────────────────────────────┐ ┌────────────────────────────┐
│   Upcoming Matches (+Add)  │ │    Previous Results        │
│   ────────────────────────  │ │   ────────────────────────  │
│   Riverside United (H)     │ │   ✅ Won vs Parkside (3-1) │
│   Dec 8, 15:00             │ │   ❌ Lost @ Hillside (1-2) │
└────────────────────────────┘ └────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│              Upcoming Training Sessions                     │
│   ────────────────────────────────────────────────────────  │
│   Dec 10, 18:00 - Technical Skills (60 mins)              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────┐ ┌────────────────────────────┐
│     Top Performers         │ │    Needs Support           │
│   ────────────────────────  │ │   ────────────────────────  │
│   🌟 John Smith (8.5)      │ │   ⚠️ Tom Wilson (5.8)      │
│   🌟 Sarah Jones (8.2)     │ │   ⚠️ Emma Brown (5.5)      │
└────────────────────────────┘ └────────────────────────────┘
```

## Filtering Effect

As you drill down through the hierarchy, all statistics automatically filter:

**At Club Level:**
- Shows statistics for ALL teams across ALL age groups

**At Age Group Level:**
- Shows statistics for ALL teams in that age group only
- Example: All teams in 2014s (Reds + Whites + Blues)

**At Team Level:**
- Shows statistics for that specific team only
- Example: Only the Reds team

This provides a natural "zoom in" effect on the data as you navigate deeper into the hierarchy.
