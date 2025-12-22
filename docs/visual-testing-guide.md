# Visual Testing Guide

## Quick Start - Screenshot All Pages

### Option 1: Interactive Screenshot Helper (Recommended)

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   This should start on `http://localhost:5173`

2. **Open the screenshot helper:**
   - Open `docs/screenshot-helper.html` in your browser
   - This is a standalone tool that doesn't need the dev server

3. **Use the helper to navigate:**
   - Select viewport (Desktop 1920x1080 or Mobile 375x667)
   - Click "Next ➡️" to go through each page
   - Or click "▶️ Auto Play" to automatically cycle through all pages
   - Set delay between pages (default 2000ms = 2 seconds)

4. **Take screenshots as you go:**
   - **Windows**: Press `Win + Shift + S` to capture
   - **Mac**: Press `Cmd + Shift + 4` to capture
   - Save to organized folders: `screenshots/desktop/` and `screenshots/mobile/`

5. **Keyboard shortcuts:**
   - `←` Previous page
   - `→` Next page
   - `Space` Toggle auto play
   - `R` Reset to start

### Option 2: Manual Navigation

Use the complete route list in `docs/all-routes.md` to manually navigate through each page using your browser's address bar.

---

## What to Check on Each Page

### Layout Consistency
- [ ] Header is present and properly styled
- [ ] Navigation works (mobile hamburger menu, desktop links)
- [ ] Breadcrumbs show correct hierarchy
- [ ] Content is centered and properly spaced
- [ ] Footer displays (if applicable)

### Color Scheme
- [ ] Primary green (#2D5F2E) used for main actions
- [ ] Gold accent (#DAA520) used appropriately
- [ ] Vale FC branding visible and correct
- [ ] Good contrast ratios (text readable)

### Typography
- [ ] All text is readable
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Font sizes appropriate for viewport
- [ ] No text overflow or truncation

### Responsive Design
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets at least 44x44px on mobile
- [ ] Images scale appropriately
- [ ] Multi-column layouts stack properly on mobile
- [ ] Forms are easy to fill on mobile

### Interactive Elements
- [ ] Buttons have clear hover states
- [ ] Links are identifiable
- [ ] Forms have proper focus states
- [ ] Loading states exist (if applicable)
- [ ] Error messages are clear

### Data Display
- [ ] Stats and numbers are formatted correctly
- [ ] Charts and graphs render properly
- [ ] Player cards display consistently
- [ ] Match data is readable
- [ ] Images load correctly

---

## Common Issues to Look For

### Mobile-Specific
- Text too small (< 14px)
- Buttons too small to tap
- Horizontal scroll due to fixed widths
- Images not optimized (slow loading)
- Forms difficult to fill
- Poor use of viewport space

### Desktop-Specific
- Content stretched too wide
- Poor use of white space
- Hover states missing
- Multi-column layouts broken
- Images too large or pixelated

### All Viewports
- Inconsistent spacing
- Color scheme not applied
- Broken layouts
- Missing navigation
- Truncated text
- Missing images
- Poor contrast

---

## Organizing Screenshots

Suggested folder structure:

```
screenshots/
├── desktop/
│   ├── 01-auth/
│   │   ├── login.png
│   │   ├── register.png
│   │   └── password-reset.png
│   ├── 02-dashboard/
│   │   ├── home.png
│   │   ├── notifications.png
│   │   └── profile.png
│   ├── 03-club/
│   │   ├── overview.png
│   │   ├── ethos.png
│   │   └── ...
│   └── ...
└── mobile/
    ├── 01-auth/
    ├── 02-dashboard/
    └── ...
```

---

## Browser DevTools Tips

### Toggle Device Mode
- **Chrome/Edge**: Press `F12`, then `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
- **Firefox**: Press `F12`, then `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
- **Safari**: Enable Developer menu, then `Develop > Enter Responsive Design Mode`

### Common Viewports to Test
- **Desktop**: 1920x1080 (Full HD)
- **Laptop**: 1366x768 (Common laptop)
- **Tablet**: 768x1024 (iPad)
- **Mobile**: 375x667 (iPhone SE)
- **Mobile Large**: 414x896 (iPhone XR/11)

### Taking Full Page Screenshots
Some browsers support full-page screenshots:
- **Chrome**: Open DevTools, `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows), type "screenshot", select "Capture full size screenshot"
- **Firefox**: Right-click on page, select "Take Screenshot", then "Save full page"

---

## Storybook for Component Testing

While the screenshot helper is for full pages, Storybook is great for testing individual components:

```bash
npm run storybook
```

This opens on `http://localhost:6006` and shows:
- Individual components in isolation
- Different component states
- Interactive controls to change props
- Easier to test edge cases

**Storybook vs Full Page Testing:**
- **Storybook**: Component-level testing, props variations, states
- **Screenshot Helper**: Full page flows, navigation, real data context
- **Use both**: Storybook for component QA, Screenshot Helper for UX flows

---

## Future Automation Options

For automated visual regression testing, consider:

### 1. Playwright (Recommended)
```bash
npm install --save-dev @playwright/test
```
Then create test scripts to automatically capture all pages.

### 2. Percy.io
Visual testing platform with GitHub integration:
- Automatic screenshot comparison
- Highlights visual changes in PRs
- Free tier available

### 3. Chromatic
Storybook-focused visual testing:
- Automatically captures all stories
- Visual diff review
- Integrates with CI/CD

### 4. Cypress + Plugin
E2E testing with screenshot capabilities:
- Test user flows
- Capture screenshots during tests
- Compare against baselines

---

## Page Count Summary

Total pages to screenshot: **45+ core routes**

**By Category:**
- Authentication: 3 pages
- Dashboard: 4 pages
- Club Level: 7 pages
- Age Groups: 6 pages (per age group)
- Teams: 7 pages (per team)
- Players: 6 pages (per player context)
- Coaches: 3 pages (per context)
- Matches: 3 pages (per match)
- Global Resources: 4 pages

**Time Estimates:**
- Manual (2 min/page): ~1.5 hours per viewport
- Semi-automated (30s/page): ~25 minutes per viewport
- Fully automated: ~5 minutes per viewport

---

## Consistency Checklist

Use this checklist to ensure consistency across all pages:

### Brand Identity
- [ ] Vale FC crest visible where appropriate
- [ ] Green (#2D5F2E) and gold (#DAA520) colors used consistently
- [ ] Typography matches design system
- [ ] Spacing follows 8px grid system

### Navigation
- [ ] Header consistent across all pages
- [ ] Breadcrumbs show correct path
- [ ] Mobile navigation accessible and functional
- [ ] Back buttons work correctly

### Content Patterns
- [ ] Cards have consistent styling
- [ ] Buttons follow same patterns
- [ ] Forms have consistent layout
- [ ] Icons are from same set (Lucide)

### Data Display
- [ ] Stats cards uniform
- [ ] Player cards consistent
- [ ] Match cards follow pattern
- [ ] Tables formatted the same way

### Responsive Behavior
- [ ] Breakpoints consistent (640px, 768px, 1024px, 1280px)
- [ ] Grid columns adapt properly
- [ ] Text scales appropriately
- [ ] Images resize correctly

---

## Quick Comparison Tool

To compare desktop vs mobile side-by-side:
1. Open the screenshot helper in two browser windows
2. Set one to Desktop viewport
3. Set the other to Mobile viewport
4. Navigate in sync using keyboard shortcuts
5. Compare layout differences

---

## Need Help?

- **Route List**: See `docs/all-routes.md` for complete route documentation
- **Screenshot Helper**: Open `docs/screenshot-helper.html` in your browser
- **Component Testing**: Run `npm run storybook` for component-level testing
- **Dev Server**: Run `npm run dev` to start the application

Happy testing! 🎯
