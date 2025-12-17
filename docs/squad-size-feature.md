# Squad Size Feature

## Overview
This feature allows you to select different squad sizes for matches (5-a-side, 7-a-side, 9-a-side, or 11-a-side), which drives the number of starting players and available formations.

## Changes Made

### 1. Type Definitions (`src/types/index.ts`)
- Added `SquadSize` type: `5 | 7 | 9 | 11`
- Added `squadSize?: SquadSize` property to `Match` interface
- Added `squadSize: SquadSize` property to `Formation` interface

### 2. Formations Data (`src/data/formations.ts`)
- Updated all existing 11-a-side formations with `squadSize: 11` property
- Added **3 new 9-a-side formations**:
  - 3-3-2 (Solid defensive shape)
  - 2-3-3 (Attacking with width)
  - 3-2-3 (Balanced)
- Added **3 new 7-a-side formations**:
  - 2-3-1 (Classic)
  - 2-2-2 (Balanced)
  - 3-2-1 (Defensive)
- Added **3 new 5-a-side formations**:
  - 1-2-1 (Diamond)
  - 2-1-1 (Defensive)
  - 1-1-2 (Attacking)
- Added `getFormationsBySquadSize(squadSize)` helper function to filter formations

### 3. Sample Matches (`src/data/matches.ts`)
- Updated sample matches with various squad sizes for demonstration:
  - 11-a-side matches
  - 9-a-side matches
  - 7-a-side matches
  - 5-a-side matches

### 4. Add/Edit Match Page (`src/pages/matches/AddEditMatchPage.tsx`)
- Added squad size selector dropdown in Match Details tab
- Added state management for `squadSize`
- Implemented `handleSquadSizeChange()` function that:
  - Resets formation when squad size changes
  - Warns user if lineup will be cleared
  - Prevents accidental data loss
- Updated formation selector to show only formations matching selected squad size
- Changed "Starting XI" label to dynamic "Starting {squadSize}"
- Updated validation to use `squadSize` instead of hardcoded `11`
- Added squad size to save function

### 5. Match Display Components

#### MatchCard (`src/components/match/MatchCard.tsx`)
- Added squad size badge display (e.g., "5-a-side", "11-a-side")
- Positioned next to competition information

#### MatchPreviewCard (`src/components/match/MatchPreviewCard.tsx`)
- Added "Match Format" section showing:
  - Squad size (e.g., "9-a-side")
  - Description of starting players

## User Experience

### Creating a Match
1. User creates or edits a match
2. In Match Details tab, user selects squad size (5, 7, 9, or 11-a-side)
3. When user navigates to Team Selection tab:
   - Formation dropdown shows only compatible formations
   - Starting lineup counter shows correct maximum (e.g., "Starting 7 (0/7)" for 7-a-side)
4. System validates lineup has correct number of starting players

### Changing Squad Size
- If user changes squad size after selecting formation or players:
  - System prompts for confirmation
  - Clears lineup if confirmed
  - Prevents accidental data loss

## Formation System

### 11-a-side Formations (4 total)
- 4-4-2 Classic
- 4-3-3 Attack
- 3-5-2
- 4-2-3-1

### 9-a-side Formations (3 total)
- 3-3-2 (Strong defensive shape)
- 2-3-3 (Attacking with wide players)
- 3-2-3 (Balanced with three at the back)

### 7-a-side Formations (3 total)
- 2-3-1 (Classic with lone striker)
- 2-2-2 (Balanced throughout)
- 3-2-1 (Defensive with three at back)

### 5-a-side Formations (3 total)
- 1-2-1 (Diamond formation)
- 2-1-1 (Defensive with two defenders)
- 1-1-2 (Attacking with two strikers)

## Benefits
- **Flexibility**: Supports different match formats common in youth and amateur football
- **Accuracy**: Ensures formations match the squad size
- **User-Friendly**: Clear labeling and validation prevents errors
- **Data Integrity**: Protects against selecting incompatible formations
- **Visibility**: Squad size is displayed on match cards and previews

## Technical Notes
- Squad size is optional on matches for backward compatibility
- If no squad size is specified, system defaults to 11-a-side
- Formation filtering is automatic based on selected squad size
- All formations have unique IDs and are stored globally
