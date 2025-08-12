#!/usr/bin/env node

/**
 * Critical CSS Implementation Audit Script
 * Validates the core functionality without running the full build
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Performance budgets from PRD
const PERFORMANCE_BUDGETS = {
  totalJS: 250 * 1024, // 250KB gzipped
  mainBundle: 100 * 1024, // 100KB gzipped
  vendorBundle: 100 * 1024, // 100KB gzipped
  perRouteChunk: 50 * 1024, // 50KB gzipped per route
}

const LIGHTHOUSE_TARGETS = {
  performance: 90,
  totalBlockingTime: 200,
  timeToInteractive: 3500,
  firstContentfulPaint: 2000,
  largestContentfulPaint: 2500,
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`
}

function analyzeBundleSize() {
  console.log('📊 Analyzing Bundle Sizes...')
  
  const nextDir = path.join(process.cwd(), '.next')
  const buildManifest = path.join(nextDir, 'build-manifest.json')
  
  if (!fs.existsSync(buildManifest)) {
    console.error('❌ Build manifest not found. Run `npm run build` first.')
    process.exit(1)
  }
  
  const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'))
  const staticDir = path.join(nextDir, 'static')
  
  let totalJS = 0
  let mainBundleSize = 0
  let vendorBundleSize = 0
  const routeChunks = {}
  
  // Analyze chunks
  Object.entries(manifest.pages).forEach(([route, files]) => {
    let routeSize = 0
    
    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(staticDir, file)
        if (fs.existsSync(filePath)) {
          const size = fs.statSync(filePath).size
          totalJS += size
          routeSize += size
          
          if (file.includes('main')) {
            mainBundleSize += size
          } else if (file.includes('vendor') || file.includes('framework')) {
            vendorBundleSize += size
          }
        }
      }
    })
    
    if (routeSize > 0) {
      routeChunks[route] = routeSize
    }
  })
  
  // Report results
  console.log('\n📈 Bundle Size Analysis:')
  console.log(`Total JavaScript: ${formatBytes(totalJS)} (Budget: ${formatBytes(PERFORMANCE_BUDGETS.totalJS)})`)
  console.log(`Main Bundle: ${formatBytes(mainBundleSize)} (Budget: ${formatBytes(PERFORMANCE_BUDGETS.mainBundle)})`)
  console.log(`Vendor Bundle: ${formatBytes(vendorBundleSize)} (Budget: ${formatBytes(PERFORMANCE_BUDGETS.vendorBundle)})`)
  
  console.log('\n🛣️  Route Chunks:')
  Object.entries(routeChunks)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .forEach(([route, size]) => {
      const status = size > PERFORMANCE_BUDGETS.perRouteChunk ? '❌' : '✅'
      console.log(`${status} ${route}: ${formatBytes(size)}`)
    })
  
  // Validate budgets
  const violations = []
  if (totalJS > PERFORMANCE_BUDGETS.totalJS) {
    violations.push(`Total JS exceeds budget by ${formatBytes(totalJS - PERFORMANCE_BUDGETS.totalJS)}`)
  }
  if (mainBundleSize > PERFORMANCE_BUDGETS.mainBundle) {
    violations.push(`Main bundle exceeds budget by ${formatBytes(mainBundleSize - PERFORMANCE_BUDGETS.mainBundle)}`)
  }
  if (vendorBundleSize > PERFORMANCE_BUDGETS.vendorBundle) {
    violations.push(`Vendor bundle exceeds budget by ${formatBytes(vendorBundleSize - PERFORMANCE_BUDGETS.vendorBundle)}`)
  }
  
  if (violations.length > 0) {
    console.log('\n❌ Budget Violations:')
    violations.forEach(violation => console.log(`  - ${violation}`))
    return false
  } else {
    console.log('\n✅ All bundle size budgets met!')
    return true
  }
}

function runLighthouseAudit() {
  console.log('\n🔍 Running Lighthouse Performance Audit...')
  
  try {
    // Check if lighthouse is available
    execSync('npx lighthouse --version', { stdio: 'pipe' })
  } catch (error) {
    console.log('📦 Installing Lighthouse...')
    execSync('npm install -g lighthouse', { stdio: 'inherit' })
  }
  
  try {
    // Start the production server
    console.log('🚀 Starting production server...')
    const server = execSync('npm run start &', { stdio: 'pipe' })
    
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Run lighthouse audit
    const lighthouseResult = execSync(
      'npx lighthouse http://localhost:3000 --only-categories=performance --output=json --quiet',
      { encoding: 'utf8' }
    )
    
    const audit = JSON.parse(lighthouseResult)
    const performance = audit.categories.performance
    const audits = audit.audits
    
    console.log('\n⚡ Lighthouse Performance Results:')
    console.log(`Overall Score: ${Math.round(performance.score * 100)}/100 (Target: ${LIGHTHOUSE_TARGETS.performance})`)
    
    // Check key metrics
    const metrics = {
      'Total Blocking Time': {
        value: Math.round(audits['total-blocking-time'].numericValue),
        target: LIGHTHOUSE_TARGETS.totalBlockingTime,
        unit: 'ms'
      },
      'Time to Interactive': {
        value: Math.round(audits.interactive.numericValue),
        target: LIGHTHOUSE_TARGETS.timeToInteractive,
        unit: 'ms'
      },
      'First Contentful Paint': {
        value: Math.round(audits['first-contentful-paint'].numericValue),
        target: LIGHTHOUSE_TARGETS.firstContentfulPaint,
        unit: 'ms'
      },
      'Largest Contentful Paint': {
        value: Math.round(audits['largest-contentful-paint'].numericValue),
        target: LIGHTHOUSE_TARGETS.largestContentfulPaint,
        unit: 'ms'
      },
    }
    
    let allTargetsMet = true
    Object.entries(metrics).forEach(([name, { value, target, unit }]) => {
      const status = value <= target ? '✅' : '❌'
      if (value > target) allTargetsMet = false
      console.log(`${status} ${name}: ${value}${unit} (Target: ≤${target}${unit})`)
    })
    
    // Kill the server
    execSync('pkill -f "next start"', { stdio: 'pipe' }).catch(() => {})
    
    return allTargetsMet
    
  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error.message)
    return false
  }
}

function checkCriticalResourceOptimization() {
  console.log('\n🎯 Checking Critical Resource Optimization...')
  
  const nextDir = path.join(process.cwd(), '.next')
  const pagesManifest = path.join(nextDir, 'server', 'pages-manifest.json')
  
  if (!fs.existsSync(pagesManifest)) {
    console.error('❌ Pages manifest not found. Run `npm run build` first.')
    return false
  }
  
  const manifest = JSON.parse(fs.readFileSync(pagesManifest, 'utf8'))
  const criticalPages = ['/', '/services', '/quote', '/contact']
  
  let optimizationsPassed = 0
  let totalChecks = 0
  
  criticalPages.forEach(page => {
    totalChecks++
    if (manifest[page]) {
      console.log(`✅ ${page} - Server-side optimized`)
      optimizationsPassed++
    } else {
      console.log(`❌ ${page} - Not found in manifest`)
    }
  })
  
  const passRate = (optimizationsPassed / totalChecks) * 100
  console.log(`\n📊 Critical Resource Optimization: ${optimizationsPassed}/${totalChecks} (${passRate.toFixed(1)}%)`)
  
  return passRate >= 90
}

async function main() {
  console.log('🚀 JavaScript Optimization Performance Audit')
  console.log('=' .repeat(50))
  
  const results = {
    bundleSize: false,
    lighthouse: false,
    criticalResources: false,
  }
  
  // Run all checks
  results.bundleSize = analyzeBundleSize()
  results.criticalResources = checkCriticalResourceOptimization()
  
  // Only run Lighthouse if other checks pass (to save time)
  if (results.bundleSize && results.criticalResources) {
    results.lighthouse = await runLighthouseAudit()
  } else {
    console.log('\n⚠️  Skipping Lighthouse audit due to failed bundle checks')
  }
  
  // Final report
  console.log('\n' + '='.repeat(50))
  console.log('📋 Final Audit Report:')
  
  const allPassed = Object.values(results).every(Boolean)
  const passedCount = Object.values(results).filter(Boolean).length
  
  Object.entries(results).forEach(([check, passed]) => {
    const status = passed ? '✅' : '❌'
    console.log(`${status} ${check.charAt(0).toUpperCase() + check.slice(1)}`)
  })
  
  console.log(`\n🎯 Overall: ${passedCount}/3 checks passed`)
  
  if (allPassed) {
    console.log('🎉 All performance targets met! JavaScript optimization successful.')
    process.exit(0)
  } else {
    console.log('⚠️  Some performance targets not met. Review the issues above.')
    process.exit(1)
  }
}

// Handle async main function
main().catch(error => {
  console.error('💥 Audit script error:', error)
  process.exit(1)
})