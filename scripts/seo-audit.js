#!/usr/bin/env node

/**
 * SEO Audit Script for Canadian Metal Fabricators Website
 * Run with: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath, description) {
  const exists = fs.existsSync(path.join(process.cwd(), filePath));
  if (exists) {
    log(`✅ ${description}: ${filePath}`, 'green');
  } else {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
  }
  return exists;
}

function validateMetaTags() {
  log('\n📋 Checking Meta Tags Configuration...', 'cyan');
  
  const checks = [
    { file: 'config/seo-metadata.ts', desc: 'SEO Metadata Configuration' },
    { file: 'app/layout.tsx', desc: 'Root Layout with Meta Tags' },
    { file: 'app/not-found.tsx', desc: '404 Page' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  return passed === checks.length;
}

function validateStructuredData() {
  log('\n🏗️ Checking Structured Data...', 'cyan');
  
  const checks = [
    { file: 'lib/structured-data.ts', desc: 'Structured Data Library' },
    { file: 'components/StructuredData.tsx', desc: 'Structured Data Component' },
    { file: 'components/StructuredDataScript.tsx', desc: 'Structured Data Script Component' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  return passed === checks.length;
}

function validateSitemapAndRobots() {
  log('\n🗺️ Checking Sitemap and Robots...', 'cyan');
  
  const checks = [
    { file: 'app/sitemap.ts', desc: 'Dynamic Sitemap' },
    { file: 'app/robots.ts', desc: 'Dynamic Robots.txt' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  // Check if old files are removed
  if (fs.existsSync(path.join(process.cwd(), 'public/robots.txt'))) {
    log('⚠️  Old robots.txt still exists in public/ - consider removing', 'yellow');
  }
  
  return passed === checks.length;
}

function validatePerformance() {
  log('\n⚡ Checking Performance Optimizations...', 'cyan');
  
  const checks = [
    { file: 'components/OptimizedImage.tsx', desc: 'Optimized Image Component' },
    { file: 'components/Analytics.tsx', desc: 'Analytics Component' },
    { file: 'next.config.js', desc: 'Next.js Configuration' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  // Check Next.js config for optimizations
  try {
    const config = fs.readFileSync(path.join(process.cwd(), 'next.config.js'), 'utf8');
    if (config.includes('swcMinify')) {
      log('✅ SWC Minification enabled', 'green');
    }
    if (config.includes('compress')) {
      log('✅ Compression enabled', 'green');
    }
    if (config.includes('images')) {
      log('✅ Image optimization configured', 'green');
    }
  } catch (e) {
    log('⚠️  Could not read next.config.js', 'yellow');
  }
  
  return passed === checks.length;
}

function validateAccessibility() {
  log('\n♿ Checking Accessibility...', 'cyan');
  
  const checks = [
    { file: 'components/SkipToContent.tsx', desc: 'Skip to Content Component' },
    { file: 'components/Breadcrumbs.tsx', desc: 'Breadcrumbs Component' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  return passed === checks.length;
}

function validateInternalLinking() {
  log('\n🔗 Checking Internal Linking...', 'cyan');
  
  const checks = [
    { file: 'components/InternalLinks.tsx', desc: 'Internal Links Component' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  return passed === checks.length;
}

function validatePWA() {
  log('\n📱 Checking PWA Configuration...', 'cyan');
  
  const checks = [
    { file: 'public/manifest.json', desc: 'Web App Manifest' }
  ];
  
  let passed = 0;
  checks.forEach(check => {
    if (checkFileExists(check.file, check.desc)) passed++;
  });
  
  return passed === checks.length;
}

function checkEnvironmentVariables() {
  log('\n🔐 Checking Environment Variables...', 'cyan');
  
  if (fs.existsSync(path.join(process.cwd(), '.env.example'))) {
    log('✅ .env.example file exists', 'green');
    
    const envExample = fs.readFileSync(path.join(process.cwd(), '.env.example'), 'utf8');
    const requiredVars = [
      'NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION',
      'NEXT_PUBLIC_GA_MEASUREMENT_ID'
    ];
    
    requiredVars.forEach(varName => {
      if (envExample.includes(varName)) {
        log(`✅ ${varName} documented`, 'green');
      } else {
        log(`⚠️  ${varName} not documented in .env.example`, 'yellow');
      }
    });
  } else {
    log('❌ .env.example file not found', 'red');
  }
}

function generateReport(results) {
  log('\n' + '='.repeat(50), 'bright');
  log('📊 SEO AUDIT REPORT', 'bright');
  log('='.repeat(50), 'bright');
  
  const total = Object.keys(results).length;
  const passed = Object.values(results).filter(r => r).length;
  const score = Math.round((passed / total) * 100);
  
  log(`\n📈 Overall Score: ${score}%`, score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red');
  
  log('\n📋 Summary:', 'cyan');
  Object.entries(results).forEach(([category, passed]) => {
    const icon = passed ? '✅' : '❌';
    const color = passed ? 'green' : 'red';
    log(`${icon} ${category}`, color);
  });
  
  log('\n💡 Recommendations:', 'yellow');
  
  if (score < 100) {
    log('1. Fix any missing files or configurations', 'yellow');
    log('2. Add Google Site Verification code to environment variables', 'yellow');
    log('3. Set up Google Analytics and Tag Manager', 'yellow');
    log('4. Create Open Graph images (og-image.jpg)', 'yellow');
    log('5. Test with Google Rich Results Test', 'yellow');
    log('6. Submit sitemap to Google Search Console', 'yellow');
  } else {
    log('🎉 All SEO checks passed! Great job!', 'green');
  }
  
  log('\n🔧 Next Steps:', 'cyan');
  log('1. Run "npm run build" to test the production build', 'cyan');
  log('2. Use Lighthouse to audit Core Web Vitals', 'cyan');
  log('3. Test with Google Mobile-Friendly Test', 'cyan');
  log('4. Validate structured data with Schema.org validator', 'cyan');
  log('5. Check Open Graph tags with Facebook Debugger', 'cyan');
  
  log('\n' + '='.repeat(50), 'bright');
}

// Run the audit
function runAudit() {
  log('🚀 Starting SEO Audit for Canadian Metal Fabricators...', 'bright');
  log('='.repeat(50), 'bright');
  
  const results = {
    'Meta Tags': validateMetaTags(),
    'Structured Data': validateStructuredData(),
    'Sitemap & Robots': validateSitemapAndRobots(),
    'Performance': validatePerformance(),
    'Accessibility': validateAccessibility(),
    'Internal Linking': validateInternalLinking(),
    'PWA': validatePWA()
  };
  
  checkEnvironmentVariables();
  generateReport(results);
}

// Execute
runAudit();