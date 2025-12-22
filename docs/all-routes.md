# Complete Route Map for Visual Testing

This document lists all routes in the application for comprehensive visual testing across desktop and mobile viewports.

## Testing Instructions

1. Start the dev server: `npm run dev`
2. Use browser DevTools to toggle between Desktop (1920x1080) and Mobile (375x667) viewports
3. Take screenshots of each page
4. Check for consistency in:
   - Header/navigation placement
   - Color scheme (club colors: green #2D5F2E, gold #DAA520)
   - Typography and spacing
   - Responsive layout behavior
   - Interactive elements (hover states, buttons)
   - Logo and branding consistency

---

## Authentication Pages (Public)

### Login
- **Route**: `/login`
- **Description**: User login page
- **Test Points**: Form validation, responsive layout, Vale FC branding

### Register
- **Route**: `/register`
- **Description**: User registration (invite-only)
- **Test Points**: Form fields, role assignment messaging, mobile layout

### Password Reset
- **Route**: `/password-reset`
- **Description**: Password reset request
- **Test Points**: Form validation, email input, success messaging

---

## Dashboard & Navigation

### Home/Dashboard
- **Route**: `/`
- **Description**: Main dashboard with club grid
- **Test Points**: Club cards layout, quick stats, responsive grid (2 cols mobile, 3+ desktop)

### Notifications
- **Route**: `/notifications`
- **Description**: System notifications and alerts
- **Test Points**: Notification cards, read/unread states, mobile scroll

### Help & Support
- **Route**: `/help`
- **Description**: Help documentation and support
- **Test Points**: Navigation, content readability, contact forms

### User Profile
- **Route**: `/profile`
- **Description**: Current user profile management
- **Test Points**: Form fields, avatar upload, role display

---

## Club Level Routes

### Clubs List
- **Route**: `/clubs`
- **Description**: List of all accessible clubs
- **Test Points**: Club grid, search/filter, logos display

### Club Overview
- **Route**: `/clubs/vale-fc`
- **Description**: Main club dashboard
- **Test Points**: Stats grid, quick links, age groups overview, club colors

### Club Ethos
- **Route**: `/clubs/vale-fc/ethos`
- **Description**: Club constitution, principles, and ethos
- **Test Points**: Content formatting, readability, inclusive language display

### Club Players (All)
- **Route**: `/clubs/vale-fc/players`
- **Description**: All players across all age groups
- **Test Points**: Player cards, filtering, search, pagination

### Club Coaches (All)
- **Route**: `/clubs/vale-fc/coaches`
- **Description**: All coaches in the club
- **Test Points**: Coach cards, certifications, contact info

### Club Matches (All)
- **Route**: `/clubs/vale-fc/matches`
- **Description**: All matches across all teams
- **Test Points**: Match cards, date filtering, results display

### Club Kits
- **Route**: `/clubs/vale-fc/kits`
- **Description**: Club kit management and orders
- **Test Points**: Kit builder, color picker, size selection, order form

### Club Settings
- **Route**: `/clubs/vale-fc/settings`
- **Description**: Club configuration and settings
- **Test Points**: Form fields, logo upload, color customization

---

## Age Group Level Routes

### Age Groups List
- **Route**: `/clubs/vale-fc/age-groups`
- **Description**: List of all age groups (2014, 2015, Senior, etc.)
- **Test Points**: Age group cards, player counts, team counts

### Age Group Overview
- **Route**: `/clubs/vale-fc/age-groups/2014`
- **Description**: Overview of specific age group
- **Test Points**: Teams grid, stats, upcoming matches

### Age Group Players
- **Route**: `/clubs/vale-fc/age-groups/2014/players`
- **Description**: All players in age group
- **Test Points**: Player list, team assignments, abilities display

### Age Group Coaches
- **Route**: `/clubs/vale-fc/age-groups/2014/coaches`
- **Description**: Coaches assigned to age group
- **Test Points**: Coach cards, team assignments, certifications

### Age Group Matches
- **Route**: `/clubs/vale-fc/age-groups/2014/matches`
- **Description**: All matches for teams in age group
- **Test Points**: Match schedule, results, team filtering

### Age Group Settings
- **Route**: `/clubs/vale-fc/age-groups/2014/settings`
- **Description**: Age group configuration
- **Test Points**: Form fields, coach assignments, team limits

### Add New Age Group
- **Route**: `/clubs/vale-fc/age-groups/new`
- **Description**: Create new age group
- **Test Points**: Form validation, year picker, naming

### Edit Age Group
- **Route**: `/clubs/vale-fc/age-groups/2014/edit`
- **Description**: Edit existing age group
- **Test Points**: Pre-filled forms, update validation

---

## Team Level Routes

### Teams List
- **Route**: `/clubs/vale-fc/age-groups/2014/teams`
- **Description**: All teams in age group (Reds, Blues, Whites)
- **Test Points**: Team cards, colors, squad sizes

### Team Overview
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds`
- **Description**: Main team dashboard
- **Test Points**: Formation display, top performers, recent matches, struggling players

### Team Squad
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/squad`
- **Description**: Squad management and player assignments
- **Test Points**: Player cards, position assignments, add/remove players

### Team Coaches
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/coaches`
- **Description**: Team coaching staff
- **Test Points**: Coach cards, roles, certifications

### Team Matches
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/matches`
- **Description**: Team match schedule and results
- **Test Points**: Upcoming matches, previous results, date filtering

### Team Kits
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/kits`
- **Description**: Team kit orders and management
- **Test Points**: Kit selector, sizes, orders, kit builder

### Team Settings
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/settings`
- **Description**: Team configuration
- **Test Points**: Form fields, color selection, squad size limits

### Add New Team
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/new`
- **Description**: Create new team in age group
- **Test Points**: Form validation, naming, color picker

### Edit Team
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/edit`
- **Description**: Edit existing team
- **Test Points**: Pre-filled forms, color updates

---

## Player Routes (Age Group Context)

### Player Profile
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1`
- **Description**: Player overview and recent performance
- **Test Points**: Player header, stats, recent matches, abilities snapshot

### Player Abilities
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1/abilities`
- **Description**: Detailed abilities and progress tracking
- **Test Points**: Attribute progress bars, radar chart, coach evaluations

### Player Report Card
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1/report-card`
- **Description**: Performance report and similar pro players
- **Test Points**: Stats display, pro player comparisons, improvement areas

### Player Development Plans
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1/development-plans`
- **Description**: Individual training plans and goals
- **Test Points**: Plan cards, progress tracking, goal setting

### Player Album
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1/album`
- **Description**: Photo gallery and highlights
- **Test Points**: Image grid, upload interface, captions

### Player Settings
- **Route**: `/clubs/vale-fc/age-groups/2014/players/player-1/settings`
- **Description**: Player profile management
- **Test Points**: Form fields, parent assignments, medical info

---

## Player Routes (Team Context)

All the above player routes also exist in team context:
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1`
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1/abilities`
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1/report-card`
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1/development-plans`
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1/album`
- `/clubs/vale-fc/age-groups/2014/teams/reds/players/player-1/settings`

**Test Points**: Same as age group context, verify breadcrumb navigation shows correct hierarchy

---

## Coach Routes (Club Context)

### Coach Profile
- **Route**: `/clubs/vale-fc/coaches/coach-1`
- **Description**: Coach profile and assignments
- **Test Points**: Coach header, certifications, assigned teams

### Coach Settings
- **Route**: `/clubs/vale-fc/coaches/coach-1/settings`
- **Description**: Coach profile management
- **Test Points**: Form fields, certification uploads, contact info

---

## Coach Routes (Age Group Context)

### Age Group Coach Profile
- **Route**: `/clubs/vale-fc/age-groups/2014/coaches/coach-1`
- **Description**: Coach profile in age group context
- **Test Points**: Teams within age group, player evaluations

### Age Group Coach Settings
- **Route**: `/clubs/vale-fc/age-groups/2014/coaches/coach-1/settings`
- **Description**: Coach settings in age group context
- **Test Points**: Form validation, assignment changes

---

## Coach Routes (Team Context)

### Team Coach Profile
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/coaches/coach-1`
- **Description**: Coach profile in team context
- **Test Points**: Team-specific data, session plans

### Team Coach Settings
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/coaches/coach-1/settings`
- **Description**: Coach settings in team context
- **Test Points**: Form fields, team-specific assignments

---

## Match Routes

### Match Report
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/matches/match-1`
- **Description**: Detailed match report
- **Test Points**: Score display, goal scorers, assists, bookings, player ratings, MOTM

### Add New Match
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/matches/new`
- **Description**: Schedule new match
- **Test Points**: Date/time picker, opposition input, location, formation selection

### Edit Match
- **Route**: `/clubs/vale-fc/age-groups/2014/teams/reds/matches/match-1/edit`
- **Description**: Edit match details
- **Test Points**: Pre-filled forms, lineup changes, result updates

---

## Global Resources

### Formations List
- **Route**: `/formations`
- **Description**: All shared formations and tactics
- **Test Points**: Formation cards, tactics display, share status

### Formation Detail
- **Route**: `/formations/4-3-3`
- **Description**: Specific formation viewer
- **Test Points**: Formation diagram, position details, tactical notes

---

### Training Sessions List
- **Route**: `/training`
- **Description**: All shared training sessions
- **Test Points**: Session cards, drill count, duration, focus areas

### Training Session Detail
- **Route**: `/training/session-1`
- **Description**: Specific training session detail
- **Test Points**: Drill breakdown, equipment list, timing, session builder

---

## Sample Data IDs

For testing purposes, use these IDs:

- **Club ID**: `vale-fc`
- **Age Group IDs**: `2014`, `2015`, `2016`, `senior`
- **Team IDs**: `reds`, `blues`, `whites`
- **Player IDs**: `player-1`, `player-2`, `player-3`
- **Coach IDs**: `coach-1`, `coach-2`
- **Match IDs**: `match-1`, `match-2`
- **Formation IDs**: `4-3-3`, `4-4-2`, `3-5-2`
- **Training IDs**: `session-1`, `session-2`

---

## Visual Consistency Checklist

Use this checklist for each page:

### Layout & Structure
- [ ] Header present and consistent
- [ ] Mobile navigation accessible
- [ ] Breadcrumb navigation correct (where applicable)
- [ ] Footer present (if applicable)
- [ ] Responsive breakpoints work correctly

### Branding & Colors
- [ ] Vale FC colors (green #2D5F2E, gold #DAA520) applied correctly
- [ ] Logo displays properly
- [ ] Club crest visible where appropriate
- [ ] Text contrast meets accessibility standards

### Typography
- [ ] Font sizes appropriate for viewport
- [ ] Line heights readable on mobile
- [ ] Headings have proper hierarchy
- [ ] Body text readable (14px+ on mobile)

### Interactive Elements
- [ ] Buttons have proper tap targets (44x44px minimum on mobile)
- [ ] Hover states work on desktop
- [ ] Active/focus states visible
- [ ] Loading states present
- [ ] Error states handled

### Content & Data
- [ ] Sample data displays correctly
- [ ] Images load and scale properly
- [ ] Icons render correctly
- [ ] Charts and graphs visible
- [ ] Empty states handled gracefully

### Mobile-Specific
- [ ] No horizontal scroll
- [ ] Touch targets appropriately sized
- [ ] Forms easy to fill on mobile
- [ ] Images optimized for mobile
- [ ] Navigation easy to use with one hand

### Desktop-Specific
- [ ] Content doesn't stretch too wide
- [ ] Proper use of white space
- [ ] Multi-column layouts work well
- [ ] Hover interactions functional

---

## Route Count Summary

- **Authentication**: 3 pages
- **Dashboard & Global**: 4 pages
- **Club Level**: 8 pages
- **Age Groups**: 8 pages per age group × 4 age groups = 32 pages
- **Teams**: 9 pages per team × 3 teams × 4 age groups = 108 pages
- **Players**: 6 pages per player (age group context) + 6 pages (team context) = 12 pages per player
- **Coaches**: 2 pages (club) + 2 pages (age group) + 2 pages (team) per coach
- **Matches**: 3 pages per match
- **Formations**: 2 pages + individual formations
- **Training**: 2 pages + individual sessions

**Estimated Total**: 200+ unique page states

---

## Automated Testing Alternative

For future automation, consider:
1. **Playwright** or **Puppeteer** for screenshot automation
2. **Percy.io** or **Chromatic** for visual regression testing
3. **Storybook** with Chromatic integration for component testing
4. **Cypress** with screenshot plugins

Current manual testing recommended to validate core user journeys before automation investment.
