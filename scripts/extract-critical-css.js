#!/usr/bin/env node
// scripts/extract-critical-css.js

const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
const critical = require('critical');

const config = require('../config/critical-css.config.js');

async function extractCriticalCSS() {
  console.log('🎯 Starting critical CSS extraction...');
  
  // Ensure output directory exists
  const outputDir = join(process.cwd(), 'styles/critical');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Pages to extract critical CSS for
  const pages = [
    { route: '/', name: 'home' },
    { route: '/services', name: 'services' },
    { route: '/quote', name: 'quote' },
    { route: '/about', name: 'about' },
    { route: '/contact', name: 'contact' },
  ];

  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  
  for (const page of pages) {
    console.log(`📄 Extracting critical CSS for ${page.route}...`);
    
    try {
      // Extract critical CSS for multiple viewports
      const viewports = [
        { width: 1440, height: 900, suffix: '' },
        { width: 768, height: 1024, suffix: '-tablet' },
        { width: 375, height: 812, suffix: '-mobile' },
      ];
      
      for (const viewport of viewports) {
        const result = await critical.generate({
          inline: false,
          base: process.cwd(),
          src: `${baseUrl}${page.route}`,
          css: ['app/globals.css'],
          target: {
            css: `styles/critical/${page.name}${viewport.suffix}.css`,
            html: `styles/critical/${page.name}${viewport.suffix}.html`
          },
          width: viewport.width,
          height: viewport.height,
          timeout: 30000,
          pageLoadSkipTimeout: 5000,
          penthouse: {
            timeout: 30000,
            pageLoadSkipTimeout: 5000,
            renderWaitTime: 100,
            blockJSRequests: false,
          },
          extract: true,
          inlineImages: false,
          minify: true,
          ignore: {
            atrule: ['@font-face', '@import'],
            rule: [/leaflet/],
            decl: (node, value) => {
              // Skip non-critical animations and transitions
              if (node.prop.includes('animation') || node.prop.includes('transition')) {
                return true;
              }
              // Skip map-related styles
              if (value.includes('leaflet') || value.includes('map')) {
                return true;
              }
              return false;
            }
          }
        });
        
        console.log(`✅ Generated critical CSS for ${page.name}${viewport.suffix} (${result.css.length} chars)`);
      }
      
      // Generate combined critical CSS (responsive)
      const combinedCSS = await generateCombinedCriticalCSS(page, baseUrl);
      const combinedPath = join(outputDir, `${page.name}.css`);
      writeFileSync(combinedPath, combinedCSS);
      
      console.log(`✅ Generated combined critical CSS for ${page.name} (${combinedCSS.length} chars)`);
      
    } catch (error) {
      console.error(`❌ Failed to extract critical CSS for ${page.route}:`, error.message);
      
      // Generate fallback critical CSS
      const fallbackCSS = generateFallbackCSS();
      const fallbackPath = join(outputDir, `${page.name}.css`);
      writeFileSync(fallbackPath, fallbackCSS);
      
      console.log(`⚠️  Generated fallback critical CSS for ${page.name}`);
    }
  }
  
  console.log('🎉 Critical CSS extraction completed!');
}

async function generateCombinedCriticalCSS(page, baseUrl) {
  // This would combine responsive critical CSS
  // For now, we'll use the desktop version as base
  const desktopPath = join(process.cwd(), 'styles/critical', `${page.name}.css`);
  
  if (existsSync(desktopPath)) {
    return readFileSync(desktopPath, 'utf-8');
  }
  
  return generateFallbackCSS();
}

function generateFallbackCSS() {
  return `
    /* Fallback critical CSS */
    :root {
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    
    html {
      font-family: var(--font-sans);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body {
      margin: 0;
      background: #ffffff;
      color: #1f2937;
      font-family: var(--font-sans);
    }
    
    .min-h-screen { min-height: 100vh; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .flex-1 { flex: 1 1 0%; }
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 1rem 0;
      font-family: var(--font-sans);
    }
    
    .container-custom {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .btn-primary {
      background: #1d4ed8;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      font-family: var(--font-sans);
    }
  `.replace(/\s+/g, ' ').trim();
}

// Run the extraction
if (require.main === module) {
  extractCriticalCSS().catch(error => {
    console.error('Critical CSS extraction failed:', error);
    process.exit(1);
  });
}

module.exports = { extractCriticalCSS, generateFallbackCSS };