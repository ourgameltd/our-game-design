# Age Group Hierarchy Implementation

## Overview

The application now implements a proper three-level hierarchy for organizing teams:

**Club** → **Age Group** → **Team**

This structure better reflects how football clubs organize their teams and allows for better aggregation of statistics and management.

## Hierarchy Structure

### 1. Club Level
- Represents the entire football club (e.g., Vale FC, Renton United)
- Contains multiple age groups
- Aggregates all statistics across all age groups

### 2. Age Group Level
- Represents a grouping of teams by age or level (e.g., 2014s, 2013s, Reserves, Senior)
- Contains multiple teams (e.g., Reds, Blues, Whites)
- Aggregates statistics for all teams within that age group
- Each age group has:
  - A unique ID
  - A name (e.g., "2014s", "Senior")
  - A code (e.g., "2014", "senior")
  - A level classification (youth, amateur, reserve, senior)
  - Optional coordinator assignments

### 3. Team Level
- Represents an individual team within an age group
- Contains players and has coaches
- Has its own statistics and performance metrics

## URL Structure

The new URL structure follows this pattern:

```
/clubs/{clubId}/{clubName}/age-groups/{ageGroupId}/teams/{teamId}/{teamName}
```

### Examples:
- `/clubs/club-1/vale-fc/age-groups/age-group-2014`
- `/clubs/club-1/vale-fc/age-groups/age-group-2014/teams/team-2014-reds/reds`
- `/clubs/club-1/vale-fc/age-groups/age-group-senior/teams/team-senior-first/first-team`

## Dashboard Statistics

All levels (Club, Age Group, Team) now display consistent dashboard statistics:

| Metric | Description |
|--------|-------------|
| **Goal Difference** | Total goals for minus goals against (+/-) |
| **Player Count** | Total number of registered players |
| **Matches Played** | Number of completed matches |
| **Win Rate** | Percentage of matches won |

### Additional Dashboard Sections

Each overview page includes:

1. **Upcoming Matches** - Next scheduled fixtures (+ Add button)
2. **Previous Results** - Recent match results with scores
3. **Upcoming Training** - Scheduled training sessions
4. **Top Performers** - Players with highest average ratings (minimum 3 matches)
5. **Needs Support** - Players with average ratings below 6.0

## Data Model Changes

### New Types

#### AgeGroup
```typescript
interface AgeGroup {
  id: string;
  clubId: string;
  name: string;              // e.g., '2014s', 'Senior'
  code: string;              // e.g., '2014', 'senior'
  level: 'youth' | 'amateur' | 'reserve' | 'senior';
  season: string;
  description?: string;
  coordinatorIds?: string[];
}
```

#### GroupStatistics
```typescript
interface GroupStatistics {
  goalDifference: number;
  playerCount: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  upcomingMatches: Match[];
  previousResults: Match[];
  topPerformers: Array<{
    playerId: string;
    averageRating: number;
    matchesPlayed: number;
  }>;
  underperforming: Array<{
    playerId: string;
    averageRating: number;
    matchesPlayed: number;
  }>;
}
```

### Updated Types

#### Team
The Team interface now includes an `ageGroupId` reference:

```typescript
interface Team {
  id: string;
  clubId: string;
  ageGroupId: string;        // NEW: References AgeGroup.id
  name: string;              // e.g., 'Reds', 'Blues'
  shortName?: string;
  level: 'youth' | 'amateur' | 'reserve' | 'senior';
  season: string;
  coachIds: string[];
  playerIds: string[];
  formationId?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
}
```

**Removed fields:**
- `teamGroup` (replaced by `ageGroupId`)
- `teamGroupName` (available through the age group relationship)

## New Files

### Pages
- `/src/pages/ageGroups/AgeGroupsListPage.tsx` - Lists all age groups for a club
- `/src/pages/ageGroups/AgeGroupOverviewPage.tsx` - Overview page for a specific age group

### Components
- `/src/components/ageGroup/AgeGroupCard.tsx` - Card component for displaying age group info

### Data
- `/src/data/ageGroups.ts` - Sample age groups data with helper functions
- `/src/data/statistics.ts` - Statistics calculation functions for all levels

## Statistics Calculation

The `statistics.ts` file provides functions for calculating aggregated statistics:

- `calculateGroupStatistics(teamIds, limit)` - Core calculation function
- `getClubStatistics(clubId)` - Get stats for entire club
- `getAgeGroupStatistics(ageGroupId)` - Get stats for age group
- `getTeamStatistics(teamId)` - Get stats for single team

Statistics are calculated from:
- Match results (scores, wins/draws/losses)
- Player performance ratings from match reports
- Player assignments to teams

## Navigation Flow

1. **Dashboard** → Select Club
2. **Club Overview** → View age groups or go to "Age Groups & Teams"
3. **Age Groups List** → Select an age group
4. **Age Group Overview** → View teams and aggregated stats
5. **Team Overview** → Select a team to see team-specific details

## Backwards Compatibility

Legacy routes are maintained for backwards compatibility:
- `/clubs/{clubId}/{clubName}/teams/{teamId}/{teamGroupName}/{teamName}`

However, all new links and navigation use the new hierarchy structure.

## Benefits of This Structure

1. **Better Organization**: Mirrors real-world club structure
2. **Flexible Aggregation**: Easy to view stats at club, age group, or team level
3. **Scalability**: Easy to add new age groups or reorganize teams
4. **Clear Navigation**: Intuitive drill-down from club → age group → team
5. **Consistent UI**: Same dashboard structure at all levels

## Future Enhancements

Potential improvements:
- Age group-level training sessions and formations
- Cross-team comparisons within an age group
- Age group coordinators with specific permissions
- Season archives by age group
- Inter-age-group tournaments and friendlies
