#!/usr/bin/env node
// scripts/analyze-css-usage.js

const { readFileSync, readdirSync, statSync } = require('fs');
const { join, extname } = require('path');

async function analyzeCSSUsage() {
  console.log('📊 Analyzing CSS usage...');
  
  const projectRoot = process.cwd();
  const cssFiles = [
    join(projectRoot, 'app/globals.css'),
    join(projectRoot, 'styles/deferred/main.css'),
  ];
  
  const contentFiles = getContentFiles(projectRoot);
  
  for (const cssFile of cssFiles) {
    if (!require('fs').existsSync(cssFile)) {
      console.log(`⚠️  CSS file not found: ${cssFile}`);
      continue;
    }
    
    console.log(`\n🔍 Analyzing ${cssFile.replace(projectRoot, '.')}...`);
    
    const originalCSS = readFileSync(cssFile, 'utf-8');
    const originalSize = Buffer.byteLength(originalCSS, 'utf8');
    
    // Skip PurgeCSS analysis in CI/Vercel environment
    if (process.env.VERCEL || process.env.CI) {
      console.log('📦 Running in CI/Vercel environment - skipping PurgeCSS analysis');
      console.log(`📏 Original size: ${formatBytes(originalSize)}`);
      console.log('💡 Run locally with `npm run analyze:css` for detailed analysis');
      continue;
    }

    try {
      // Try to load PurgeCSS dynamically
      const { PurgeCSS } = await import('purgecss');
      
      const purgeCSSResult = await new PurgeCSS().purge({
        content: contentFiles,
        css: [cssFile],
        safelist: [
          'html',
          'body',
          'fonts-loaded',
          'fonts-enhanced',
          // Tailwind classes that might be dynamically added
          'bg-white',
          'text-gray-900',
          'flex',
          'flex-col',
          'min-h-screen',
          // Critical navigation classes
          'container-custom',
          'btn-primary',
          'btn-secondary',
        ],
        blocklist: [],
        keyframes: true,
        fontFace: true,
      });
      
      if (purgeCSSResult && purgeCSSResult[0]) {
        const purgedCSS = purgeCSSResult[0].css;
        const purgedSize = Buffer.byteLength(purgedCSS, 'utf8');
        const reduction = ((originalSize - purgedSize) / originalSize * 100).toFixed(1);
        
        console.log(`📏 Original size: ${formatBytes(originalSize)}`);
        console.log(`📏 Purged size: ${formatBytes(purgedSize)}`);
        console.log(`💾 Size reduction: ${reduction}%`);
        
        // Analyze unused selectors
        const originalSelectors = extractSelectors(originalCSS);
        const purgedSelectors = extractSelectors(purgedCSS);
        const unusedSelectors = originalSelectors.filter(s => !purgedSelectors.includes(s));
        
        if (unusedSelectors.length > 0) {
          console.log(`🗑️  Unused selectors (${unusedSelectors.length}):`);
          unusedSelectors.slice(0, 10).forEach(selector => {
            console.log(`   - ${selector}`);
          });
          if (unusedSelectors.length > 10) {
            console.log(`   ... and ${unusedSelectors.length - 10} more`);
          }
        }
      }
    } catch (error) {
      console.log(`📏 Original size: ${formatBytes(originalSize)}`);
      console.log('⚠️  PurgeCSS analysis not available in this environment');
    }
  }
  
  // Analyze font usage
  console.log('\n🔤 Font Usage Analysis:');
  analyzeFont Usage(contentFiles);
  
  // CSS loading performance recommendations
  console.log('\n💡 Performance Recommendations:');
  generateRecommendations();
}

function getContentFiles(projectRoot) {
  const contentDirs = ['app', 'components', 'lib'];
  const contentFiles = [];
  
  contentDirs.forEach(dir => {
    const dirPath = join(projectRoot, dir);
    if (require('fs').existsSync(dirPath)) {
      const files = getFilesRecursively(dirPath, ['.tsx', '.ts', '.jsx', '.js']);
      contentFiles.push(...files);
    }
  });
  
  return contentFiles;
}

function getFilesRecursively(dir, extensions) {
  const files = [];
  const items = readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = join(dir, item);
    const stat = statSync(itemPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getFilesRecursively(itemPath, extensions));
    } else if (stat.isFile() && extensions.includes(extname(item))) {
      files.push(itemPath);
    }
  });
  
  return files;
}

function extractSelectors(css) {
  // Simple regex to extract CSS selectors
  const selectorRegex = /([^{}]+){[^{}]*}/g;
  const selectors = [];
  let match;
  
  while ((match = selectorRegex.exec(css)) !== null) {
    const selector = match[1].trim();
    if (selector && !selector.startsWith('@') && !selector.startsWith('/*')) {
      selectors.push(selector);
    }
  }
  
  return [...new Set(selectors)]; // Remove duplicates
}

function analyzeFontUsage(contentFiles) {
  const fontUsage = {
    inter: 0,
    system: 0,
    custom: 0,
  };
  
  contentFiles.forEach(file => {
    try {
      const content = readFileSync(file, 'utf-8');
      
      if (content.includes('Inter')) fontUsage.inter++;
      if (content.includes('system-ui') || content.includes('-apple-system')) fontUsage.system++;
      if (content.includes('font-family')) fontUsage.custom++;
      
    } catch (error) {
      // Skip files that can't be read
    }
  });
  
  console.log(`📝 Files using Inter font: ${fontUsage.inter}`);
  console.log(`📝 Files using system fonts: ${fontUsage.system}`);
  console.log(`📝 Files with custom font-family: ${fontUsage.custom}`);
}

function generateRecommendations() {
  const recommendations = [
    '🚀 Use system fonts for initial render to improve FCP',
    '📦 Split critical CSS from non-critical styles',
    '🔄 Load non-critical CSS asynchronously after page render',
    '⚡ Inline critical CSS to eliminate render-blocking resources',
    '🎯 Use font-display: swap for custom font loading',
    '📱 Optimize critical CSS for mobile-first rendering',
    '🗜️  Enable CSS minification in production builds',
    '📊 Monitor Core Web Vitals after implementing changes',
  ];
  
  recommendations.forEach(rec => console.log(`   ${rec}`));
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the analysis
if (require.main === module) {
  analyzeCSSUsage().catch(error => {
    console.error('CSS analysis failed:', error);
    process.exit(1);
  });
}

module.exports = { analyzeCSSUsage };