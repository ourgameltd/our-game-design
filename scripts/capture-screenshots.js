/**
 * Automated Screenshot Capture Script
 * Captures all pages in desktop and mobile viewports
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:5173';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');
const DELAY_BETWEEN_PAGES = 2000; // 2 seconds to let page load
const DELAY_AFTER_NAVIGATION = 1500; // Extra delay for dynamic content

// Viewport configurations
const VIEWPORTS = {
  desktop: {
    name: 'desktop',
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    isMobile: false,
  },
  mobile: {
    name: 'mobile',
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  }
};

// Complete route list with categories - using actual IDs from data
const routes = [
  // Authentication
  { category: 'auth', path: '/login', name: 'login' },
  { category: 'auth', path: '/register', name: 'register' },
  { category: 'auth', path: '/password-reset', name: 'password-reset' },
  
  // Dashboard
  { category: 'dashboard', path: '/', name: 'home' },
  { category: 'dashboard', path: '/notifications', name: 'notifications' },
  { category: 'dashboard', path: '/help', name: 'help' },
  { category: 'dashboard', path: '/profile', name: 'profile' },
  
  // Club Level - Using real club ID
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b', name: 'overview' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/ethos', name: 'ethos' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/players', name: 'players' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/coaches', name: 'coaches' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/matches', name: 'matches' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/kits', name: 'kits' },
  { category: 'club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/settings', name: 'settings' },
  
  // Age Groups - Using real age group ID (2014s = 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d)
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups', name: 'list' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: '2014-overview' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players', name: '2014-players' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/coaches', name: '2014-coaches' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/matches', name: '2014-matches' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/settings', name: '2014-settings' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/new', name: 'new' },
  { category: 'age-groups', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/edit', name: '2014-edit' },
  
  // Teams - Using real team ID (Reds = a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d)
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams', name: 'list' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', name: 'reds-overview' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/squad', name: 'reds-squad' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/coaches', name: 'reds-coaches' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/matches', name: 'reds-matches' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/kits', name: 'reds-kits' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/settings', name: 'reds-settings' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/new', name: 'new' },
  { category: 'teams', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/edit', name: 'reds-edit' },
  
  // Players - Age Group Context (Oliver Thompson = p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5)
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5', name: 'profile' },
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/abilities', name: 'abilities' },
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/report-card', name: 'report-card' },
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/development-plans', name: 'development-plans' },
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/album', name: 'album' },
  { category: 'players-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/settings', name: 'settings' },
  
  // Players - Team Context
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5', name: 'profile' },
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/abilities', name: 'abilities' },
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/report-card', name: 'report-card' },
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/development-plans', name: 'development-plans' },
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/album', name: 'album' },
  { category: 'players-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/players/p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5/settings', name: 'settings' },
  
  // Coaches - Club Context (Michael Robertson = c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6)
  { category: 'coaches-club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', name: 'profile' },
  { category: 'coaches-club', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6/settings', name: 'settings' },
  
  // Coaches - Age Group Context
  { category: 'coaches-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', name: 'profile' },
  { category: 'coaches-age-group', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6/settings', name: 'settings' },
  
  // Coaches - Team Context
  { category: 'coaches-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', name: 'profile' },
  { category: 'coaches-team', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/coaches/c1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6/settings', name: 'settings' },
  
  // Matches (m1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6)
  { category: 'matches', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/matches/m1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', name: 'report' },
  { category: 'matches', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/matches/new', name: 'new' },
  { category: 'matches', path: '/clubs/8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b/age-groups/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/teams/a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d/matches/m1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6/edit', name: 'edit' },
  
  // Global Resources - Formations (f2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7 = 4-3-3)
  { category: 'formations', path: '/formations', name: 'list' },
  { category: 'formations', path: '/formations/f2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7', name: '4-3-3' },
  
  // Global Resources - Training (s1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6)
  { category: 'training', path: '/training', name: 'list' },
  { category: 'training', path: '/training/s1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', name: 'session-1' },
];

// Utility functions
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
}

async function waitForPageLoad(page) {
  try {
    await page.waitForLoadState('networkidle', { timeout: 5000 });
  } catch (e) {
    // If networkidle times out, just wait for domcontentloaded
    await page.waitForLoadState('domcontentloaded');
  }
}

async function captureScreenshot(page, route, viewport) {
  const categoryDir = path.join(SCREENSHOT_DIR, viewport.name, route.category);
  ensureDirectoryExists(categoryDir);
  
  const filename = sanitizeFilename(route.name) + '.png';
  const filepath = path.join(categoryDir, filename);
  
  const url = BASE_URL + route.path;
  
  console.log(`📸 Capturing: ${viewport.name} - ${route.category}/${route.name}`);
  
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for any dynamic content to load
    await new Promise(resolve => setTimeout(resolve, DELAY_AFTER_NAVIGATION));
    
    // Take full page screenshot
    await page.screenshot({
      path: filepath,
      fullPage: true,
    });
    
    console.log(`   ✅ Saved: ${filepath}`);
    return { success: true, route, viewport: viewport.name, filepath };
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    return { success: false, route, viewport: viewport.name, error: error.message };
  }
}

async function captureAllScreenshots() {
  console.log('🚀 Starting automated screenshot capture...\n');
  console.log(`📊 Total routes: ${routes.length}`);
  console.log(`📱 Viewports: ${Object.keys(VIEWPORTS).join(', ')}`);
  console.log(`💾 Output directory: ${SCREENSHOT_DIR}\n`);
  
  const startTime = Date.now();
  const results = {
    success: [],
    failed: [],
  };
  
  let browser;
  
  try {
    // Launch browser
    console.log('🌐 Launching browser...\n');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });
    
    // Process each viewport
    for (const [viewportName, viewport] of Object.entries(VIEWPORTS)) {
      console.log(`\n📱 Processing ${viewportName} viewport (${viewport.width}x${viewport.height})...\n`);
      
      const page = await browser.newPage();
      
      // Set viewport
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: viewport.deviceScaleFactor,
        isMobile: viewport.isMobile,
        hasTouch: viewport.hasTouch || false,
      });
      
      // Capture each route
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const result = await captureScreenshot(page, route, viewport);
        
        if (result.success) {
          results.success.push(result);
        } else {
          results.failed.push(result);
        }
        
        // Delay between pages
        if (i < routes.length - 1) {
          await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_PAGES));
        }
      }
      
      await page.close();
      console.log(`\n✅ Completed ${viewportName} viewport`);
    }
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
  
  // Summary
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 SCREENSHOT CAPTURE SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`⏱️  Duration: ${duration}s`);
  console.log(`💾 Output: ${SCREENSHOT_DIR}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed routes:');
    results.failed.forEach(result => {
      console.log(`   - ${result.viewport} - ${result.route.path}: ${result.error}`);
    });
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 Screenshot capture complete!\n');
  
  // Save results to JSON
  const resultsPath = path.join(SCREENSHOT_DIR, 'capture-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    duration: duration + 's',
    totalRoutes: routes.length,
    totalViewports: Object.keys(VIEWPORTS).length,
    totalScreenshots: results.success.length,
    results: results,
  }, null, 2));
  
  console.log(`📄 Results saved to: ${resultsPath}\n`);
}

// Check if dev server is running
async function checkServer() {
  try {
    const response = await fetch(BASE_URL);
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔍 Checking if dev server is running...\n');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.error('❌ Dev server is not running!');
    console.error(`   Please start the dev server first: npm run dev`);
    console.error(`   Expected server at: ${BASE_URL}\n`);
    process.exit(1);
  }
  
  console.log('✅ Dev server is running\n');
  
  await captureAllScreenshots();
}

main().catch(console.error);
