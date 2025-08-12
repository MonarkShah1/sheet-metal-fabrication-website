// Visual Regression Tests for Key Pages
// Tests UI consistency after copy changes and A/B test implementation

const { test, expect } = require('@playwright/test');

// Test pages that were modified
const testPages = [
  { path: '/', name: 'homepage' },
  { path: '/industries/automotive', name: 'industry-automotive' },
  { path: '/industries/manufacturing', name: 'industry-manufacturing' },
  { path: '/industries/construction', name: 'industry-construction' },
  { path: '/locations/toronto', name: 'location-toronto' },
  { path: '/locations/mississauga', name: 'location-mississauga' },
  { path: '/services/laser-cutting-bending', name: 'service-laser-cutting' },
  { path: '/services/welding', name: 'service-welding' },
  { path: '/quote', name: 'quote-page' },
  { path: '/about', name: 'about-page' },
  { path: '/contact', name: 'contact-page' }
];

// Visual regression tests for each page
testPages.forEach(({ path, name }) => {
  test.describe(`Visual regression - ${name}`, () => {
    
    test(`${name} - Full page screenshot`, async ({ page }) => {
      await page.goto(path);
      
      // Wait for content to load and animations to complete
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);
      
      // Disable animations for consistent screenshots
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `
      });
      
      // Take full page screenshot
      await expect(page).toHaveScreenshot(`${name}-full-page.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    });

    test(`${name} - Above the fold`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      // Disable animations
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
          }
        `
      });
      
      // Screenshot above the fold area
      await expect(page).toHaveScreenshot(`${name}-above-fold.png`, {
        clip: { x: 0, y: 0, width: 1280, height: 720 },
        animations: 'disabled'
      });
    });

    test(`${name} - Navigation area`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      
      const navigation = page.locator('nav');
      await expect(navigation).toBeVisible();
      
      await expect(navigation).toHaveScreenshot(`${name}-navigation.png`, {
        animations: 'disabled'
      });
    });

  });
});

// Test specific components that were modified
test.describe('Component visual regression', () => {
  
  test('Industry Hero component variations', async ({ page }) => {
    const industries = ['automotive', 'manufacturing', 'construction'];
    
    for (const industry of industries) {
      await page.goto(`/industries/${industry}`);
      await page.waitForLoadState('networkidle');
      
      const heroSection = page.locator('section').first();
      await expect(heroSection).toBeVisible();
      
      await expect(heroSection).toHaveScreenshot(`hero-${industry}.png`, {
        animations: 'disabled'
      });
    }
  });

  test('CTA buttons across different pages', async ({ page }) => {
    const pagesWithCTAs = [
      { path: '/', selector: '[data-testid*="ab-test"]' },
      { path: '/quote', selector: 'button, [role="button"]' },
      { path: '/industries/automotive', selector: '[data-testid*="ab-test"]' }
    ];
    
    for (const { path, selector } of pagesWithCTAs) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      
      const ctas = page.locator(selector).first();
      if (await ctas.isVisible()) {
        await expect(ctas).toHaveScreenshot(`cta-${path.replace(/\//g, '-')}.png`, {
          animations: 'disabled'
        });
      }
    }
  });

  test('Trust signals and credibility indicators', async ({ page }) => {
    await page.goto('/industries/automotive');
    await page.waitForLoadState('networkidle');
    
    // Look for trust signals section
    const trustSignals = page.locator('.grid').filter({ hasText: '7+ Years' }).first();
    
    if (await trustSignals.isVisible()) {
      await expect(trustSignals).toHaveScreenshot('trust-signals.png', {
        animations: 'disabled'
      });
    }
  });

  test('Mobile navigation menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Open mobile menu
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await menuButton.click();
    
    // Wait for menu to open
    await page.waitForTimeout(300);
    
    await expect(page.locator('nav')).toHaveScreenshot('mobile-menu.png', {
      animations: 'disabled'
    });
  });

});

test.describe('Responsive design consistency', () => {
  
  test('Homepage responsive breakpoints', async ({ page }) => {
    const breakpoints = [
      { width: 320, height: 568, name: 'mobile-small' },
      { width: 375, height: 667, name: 'mobile-medium' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1024, height: 768, name: 'desktop-small' },
      { width: 1440, height: 900, name: 'desktop-large' }
    ];
    
    for (const { width, height, name } of breakpoints) {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await expect(page).toHaveScreenshot(`homepage-${name}.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    }
  });

  test('Industry pages responsive layout', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1280, height: 720, name: 'desktop' }
    ];
    
    for (const { width, height, name } of viewports) {
      await page.setViewportSize({ width, height });
      await page.goto('/industries/automotive');
      await page.waitForLoadState('networkidle');
      
      await expect(page).toHaveScreenshot(`industry-automotive-${name}.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    }
  });

});

test.describe('A/B testing visual consistency', () => {
  
  test('A/B test variants render consistently', async ({ page, context }) => {
    // Test that A/B test variants don't cause layout shifts
    
    // Force specific variant by setting sessionStorage
    await context.addInitScript(() => {
      window.sessionStorage.setItem('ab_test_hero_cta_primary', 'control');
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('ab-test-control-variant.png', {
      animations: 'disabled'
    });
    
    // Test with different variant
    await context.addInitScript(() => {
      window.sessionStorage.setItem('ab_test_hero_cta_primary', 'icp_focused');
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('ab-test-variant-b.png', {
      animations: 'disabled'
    });
  });

});

test.describe('Performance impact visual tests', () => {
  
  test('Page load visual stability', async ({ page }) => {
    // Test that pages don't have visual shifts during load
    await page.goto('/');
    
    // Take screenshot immediately after navigation starts
    await page.waitForSelector('nav');
    await expect(page).toHaveScreenshot('page-load-start.png', {
      animations: 'disabled'
    });
    
    // Wait for full load and take another screenshot
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('page-load-complete.png', {
      animations: 'disabled'
    });
  });

});

// Helper function to run accessibility checks alongside visual tests
test.describe('Visual accessibility checks', () => {
  
  test('High contrast mode compatibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Simulate high contrast mode
    await page.addStyleTag({
      content: `
        @media (prefers-contrast: high) {
          * { filter: contrast(150%) !important; }
        }
      `
    });
    
    await expect(page).toHaveScreenshot('high-contrast-mode.png', {
      animations: 'disabled'
    });
  });

  test('Focus states visible in screenshots', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Focus on the main CTA
    const cta = page.locator('[data-testid*="ab-test"]').first();
    await cta.focus();
    
    await expect(cta).toHaveScreenshot('cta-focus-state.png', {
      animations: 'disabled'
    });
  });

});