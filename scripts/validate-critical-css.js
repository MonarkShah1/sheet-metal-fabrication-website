#!/usr/bin/env node

/**
 * Critical CSS Validation Script
 * Validates that the Critical CSS implementation meets performance budgets
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Performance budgets from PRD
const PERFORMANCE_BUDGETS = {
  criticalCSS: 14 * 1024, // 14KB
  warningSize: 12 * 1024, // 12KB warning threshold
};

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

/**
 * Get gzipped size of content
 */
function getGzippedSize(content) {
  return new Promise((resolve) => {
    zlib.gzip(content, (err, result) => {
      if (err) {
        resolve(0);
      } else {
        resolve(result.length);
      }
    });
  });
}

/**
 * Extract critical CSS from configuration
 */
function extractCriticalCSS() {
  try {
    // In a real implementation, this would extract from the actual build output
    const configPath = path.join(__dirname, '../config/critical-css.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Extract the base critical CSS (simplified for validation)
    const criticalCSSMatch = configContent.match(/generateBaseCriticalCSS\(\): string \{[\s\S]*?return `([\s\S]*?)`;/);
    if (criticalCSSMatch) {
      return criticalCSSMatch[1].replace(/\\s\+/g, ' ').trim();
    }
    
    return '';
  } catch (error) {
    console.error('Error extracting critical CSS:', error.message);
    return '';
  }
}

/**
 * Validate font stack implementation
 */
function validateFontStack() {
  const globalsCSSPath = path.join(__dirname, '../app/globals.css');
  const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');
  
  const results = {
    globalCSS: false,
    tailwindConfig: false,
    issues: []
  };
  
  try {
    // Check globals.css
    const globalsContent = fs.readFileSync(globalsCSSPath, 'utf8');
    if (globalsContent.includes('-apple-system') && globalsContent.includes('BlinkMacSystemFont')) {
      results.globalCSS = true;
    } else {
      results.issues.push('System font stack not found in globals.css');
    }
    
    // Check tailwind.config.js
    const tailwindContent = fs.readFileSync(tailwindConfigPath, 'utf8');
    if (tailwindContent.includes('-apple-system') && tailwindContent.includes('BlinkMacSystemFont')) {
      results.tailwindConfig = true;
    } else {
      results.issues.push('System font stack not found in tailwind.config.js');
    }
    
  } catch (error) {
    results.issues.push(`Error reading configuration files: ${error.message}`);
  }
  
  return results;
}

/**
 * Check for Google Fonts removal
 */
function validateGoogleFontsRemoval() {
  const layoutPath = path.join(__dirname, '../app/layout.tsx');
  const globalsCSSPath = path.join(__dirname, '../app/globals.css');
  
  const results = {
    removedFromLayout: false,
    removedFromGlobals: false,
    issues: []
  };
  
  try {
    // Check layout.tsx
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    if (!layoutContent.includes('fonts.googleapis.com') && !layoutContent.includes('Inter')) {
      results.removedFromLayout = true;
    } else {
      results.issues.push('Google Fonts references still found in layout.tsx');
    }
    
    // Check globals.css
    const globalsContent = fs.readFileSync(globalsCSSPath, 'utf8');
    if (!globalsContent.includes('fonts.googleapis.com') && !globalsContent.includes('@import url')) {
      results.removedFromGlobals = true;
    } else {
      results.issues.push('Google Fonts import still found in globals.css');
    }
    
  } catch (error) {
    results.issues.push(`Error reading files: ${error.message}`);
  }
  
  return results;
}

/**
 * Main validation function
 */
async function validateImplementation() {
  console.log('🔍 Validating Critical CSS Implementation...\n');
  
  const results = {
    criticalCSS: { passed: false, size: 0, gzippedSize: 0 },
    fontStack: { passed: false },
    googleFontsRemoval: { passed: false },
    issues: [],
    score: 0
  };
  
  // 1. Validate Critical CSS size
  console.log('📏 Checking Critical CSS size budget...');
  const criticalCSS = extractCriticalCSS();
  if (criticalCSS) {
    const size = Buffer.byteLength(criticalCSS, 'utf8');
    const gzippedSize = await getGzippedSize(criticalCSS);
    
    results.criticalCSS.size = size;
    results.criticalCSS.gzippedSize = gzippedSize;
    
    if (gzippedSize <= PERFORMANCE_BUDGETS.criticalCSS) {
      results.criticalCSS.passed = true;
      console.log(`✅ Critical CSS size: ${Math.round(gzippedSize / 1024 * 100) / 100}KB (within 14KB budget)`);
      results.score += 40;
    } else {
      console.log(`❌ Critical CSS size: ${Math.round(gzippedSize / 1024 * 100) / 100}KB (exceeds 14KB budget)`);
      results.issues.push(`Critical CSS exceeds size budget by ${Math.round((gzippedSize - PERFORMANCE_BUDGETS.criticalCSS) / 1024 * 100) / 100}KB`);
    }
  } else {
    console.log('❌ Could not extract Critical CSS');
    results.issues.push('Critical CSS extraction failed');
  }
  
  // 2. Validate font stack implementation
  console.log('\n🔤 Checking system font stack implementation...');
  const fontValidation = validateFontStack();
  if (fontValidation.globalCSS && fontValidation.tailwindConfig) {
    results.fontStack.passed = true;
    console.log('✅ System font stack properly implemented');
    results.score += 30;
  } else {
    console.log('❌ System font stack implementation incomplete');
    results.issues.push(...fontValidation.issues);
  }
  
  // 3. Validate Google Fonts removal
  console.log('\n🚫 Checking Google Fonts removal...');
  const googleFontsValidation = validateGoogleFontsRemoval();
  if (googleFontsValidation.removedFromLayout && googleFontsValidation.removedFromGlobals) {
    results.googleFontsRemoval.passed = true;
    console.log('✅ Google Fonts successfully removed');
    results.score += 30;
  } else {
    console.log('❌ Google Fonts not completely removed');
    results.issues.push(...googleFontsValidation.issues);
  }
  
  // 4. Generate final report
  console.log('\n📊 Validation Results');
  console.log('=====================');
  console.log(`Overall Score: ${results.score}/100`);
  
  if (results.score >= 90) {
    console.log('🏆 Excellent! Critical CSS implementation meets all requirements');
  } else if (results.score >= 70) {
    console.log('🥈 Good! Minor issues to address');
  } else {
    console.log('🥉 Needs improvement. Several issues to fix');
  }
  
  if (results.issues.length > 0) {
    console.log('\n❗ Issues to address:');
    results.issues.forEach((issue, index) => {
      console.log(`   ${index + 1}. ${issue}`);
    });
  }
  
  // 5. Provide recommendations
  console.log('\n💡 Recommendations:');
  if (!results.criticalCSS.passed) {
    console.log('   • Reduce critical CSS size by removing non-essential styles');
    console.log('   • Use more specific selectors in critical CSS configuration');
  }
  if (!results.fontStack.passed) {
    console.log('   • Ensure system font stack is properly configured in both globals.css and tailwind.config.js');
  }
  if (!results.googleFontsRemoval.passed) {
    console.log('   • Remove all Google Fonts imports and references');
    console.log('   • Update Next.js font imports to use system fonts');
  }
  
  console.log('\n🔗 Next steps:');
  console.log('   1. Run `npm run build` to test production build');
  console.log('   2. Use `npm run analyze` to analyze bundle sizes');
  console.log('   3. Test with Lighthouse for Core Web Vitals');
  
  return results.score >= 70;
}

// Run validation
if (require.main === module) {
  validateImplementation()
    .then((passed) => {
      process.exit(passed ? 0 : 1);
    })
    .catch((error) => {
      console.error('Validation failed:', error);
      process.exit(1);
    });
}

module.exports = { validateImplementation };