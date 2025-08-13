#!/usr/bin/env node
// scripts/lighthouse-ci.js - Basic Lighthouse performance testing

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { writeFileSync } = require('fs');

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/services',
  'http://localhost:3000/quote',
];

async function runLighthouse() {
  console.log('🔍 Starting Lighthouse performance audit...');
  
  const results = [];
  
  for (const url of urls) {
    console.log(`📊 Auditing ${url}...`);
    
    try {
      const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
      const options = {
        logLevel: 'info',
        output: 'json',
        onlyCategories: ['performance'],
        port: chrome.port,
      };
      
      const runnerResult = await lighthouse(url, options);
      
      await chrome.kill();
      
      const { lhr } = runnerResult;
      const performanceScore = lhr.categories.performance.score * 100;
      
      const metrics = {
        url,
        performanceScore,
        fcp: lhr.audits['first-contentful-paint'].numericValue,
        lcp: lhr.audits['largest-contentful-paint'].numericValue,
        cls: lhr.audits['cumulative-layout-shift'].numericValue,
        tbt: lhr.audits['total-blocking-time'].numericValue,
        tti: lhr.audits['interactive'].numericValue,
        renderBlocking: lhr.audits['render-blocking-resources'].details?.items?.length || 0,
      };
      
      results.push(metrics);
      
      console.log(`✅ ${url}:`);
      console.log(`   Performance Score: ${performanceScore}/100`);
      console.log(`   FCP: ${(metrics.fcp / 1000).toFixed(2)}s`);
      console.log(`   LCP: ${(metrics.lcp / 1000).toFixed(2)}s`);
      console.log(`   CLS: ${metrics.cls.toFixed(3)}`);
      console.log(`   TBT: ${metrics.tbt}ms`);
      console.log(`   Render-blocking resources: ${metrics.renderBlocking}`);
      
    } catch (error) {
      console.error(`❌ Error auditing ${url}:`, error.message);
    }
  }
  
  // Save results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = `./lighthouse-report-${timestamp}.json`;
  writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  console.log(`\n📋 Report saved to ${reportPath}`);
  
  // Summary
  const avgScore = results.reduce((sum, r) => sum + r.performanceScore, 0) / results.length;
  console.log(`\n📈 Average Performance Score: ${avgScore.toFixed(1)}/100`);
  
  // Check if critical CSS optimization goals are met
  const goals = {
    fcp: 1800, // < 1.8s
    lcp: 2500, // < 2.5s
    cls: 0.1,  // < 0.1
    score: 90  // > 90
  };
  
  console.log('\n🎯 Goal Assessment:');
  results.forEach(result => {
    const fcpPass = result.fcp < goals.fcp;
    const lcpPass = result.lcp < goals.lcp;
    const clsPass = result.cls < goals.cls;
    const scorePass = result.performanceScore > goals.score;
    
    console.log(`\n   ${result.url}:`);
    console.log(`   FCP: ${fcpPass ? '✅' : '❌'} ${(result.fcp / 1000).toFixed(2)}s (goal: <${goals.fcp/1000}s)`);
    console.log(`   LCP: ${lcpPass ? '✅' : '❌'} ${(result.lcp / 1000).toFixed(2)}s (goal: <${goals.lcp/1000}s)`);
    console.log(`   CLS: ${clsPass ? '✅' : '❌'} ${result.cls.toFixed(3)} (goal: <${goals.cls})`);
    console.log(`   Score: ${scorePass ? '✅' : '❌'} ${result.performanceScore}/100 (goal: >${goals.score})`);
  });
  
  return results;
}

// Simple performance comparison
function compareWithBaseline(results, baselinePath = './baseline-performance.json') {
  try {
    const baseline = require(baselinePath);
    
    console.log('\n📊 Performance Comparison vs Baseline:');
    
    results.forEach((current, index) => {
      const base = baseline[index];
      if (!base) return;
      
      const fcpImprovement = ((base.fcp - current.fcp) / base.fcp * 100).toFixed(1);
      const lcpImprovement = ((base.lcp - current.lcp) / base.lcp * 100).toFixed(1);
      const scoreImprovement = (current.performanceScore - base.performanceScore).toFixed(1);
      
      console.log(`\n   ${current.url}:`);
      console.log(`   FCP: ${fcpImprovement > 0 ? '📈' : '📉'} ${fcpImprovement}%`);
      console.log(`   LCP: ${lcpImprovement > 0 ? '📈' : '📉'} ${lcpImprovement}%`);
      console.log(`   Score: ${scoreImprovement > 0 ? '📈' : '📉'} ${scoreImprovement} points`);
    });
    
  } catch (error) {
    console.log('📝 No baseline found for comparison. Current results will be used as baseline.');
    writeFileSync('./baseline-performance.json', JSON.stringify(results, null, 2));
  }
}

// Run the audit
if (require.main === module) {
  runLighthouse()
    .then(results => {
      compareWithBaseline(results);
      process.exit(0);
    })
    .catch(error => {
      console.error('Lighthouse audit failed:', error);
      process.exit(1);
    });
}

module.exports = { runLighthouse };