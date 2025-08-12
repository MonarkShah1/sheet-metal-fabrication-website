module.exports = {
  ci: {
    collect: {
      // URLs to test
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/quote',
        'http://localhost:3000/contact',
        'http://localhost:3000/industries',
        'http://localhost:3000/locations',
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --headless',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // Performance assertions based on PRD targets
        'categories:performance': ['error', { minScore: 0.90 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        
        // Core Web Vitals - matching PRD targets
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'interactive': ['error', { maxNumericValue: 3500 }],
        
        // Bundle size budgets from PRD
        'mainthread-work-breakdown': ['warn', { maxNumericValue: 4000 }],
        'bootup-time': ['warn', { maxNumericValue: 2500 }],
        
        // SEO optimizations
        'meta-description': 'error',
        'viewport': 'error',
        'document-title': 'error',
        'robots-txt': 'warn',
        'hreflang': 'warn',
        
        // Accessibility requirements
        'color-contrast': 'error',
        'image-alt': 'error',
        'link-name': 'error',
        'button-name': 'error',
        
        // Modern web standards
        'uses-http2': 'warn',
        'uses-text-compression': 'error',
        'uses-responsive-images': 'warn',
        'efficient-animated-content': 'warn',
        'modern-image-formats': 'warn',
        
        // JavaScript optimizations
        'unused-javascript': ['warn', { maxNumericValue: 50000 }],
        'legacy-javascript': 'warn',
        'duplicated-javascript': 'error',
        'unminified-javascript': 'error',
        
        // CSS optimizations
        'unused-css-rules': ['warn', { maxNumericValue: 30000 }],
        'unminified-css': 'error',
        
        // Resource loading
        'render-blocking-resources': 'error',
        'uses-rel-preload': 'warn',
        'uses-rel-preconnect': 'warn',
        'prioritize-lcp-image': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      // Configuration for local testing
      command: 'npm run build && npm run start',
      port: 3000,
    },
  },
}

// Development-specific configuration
if (process.env.NODE_ENV === 'development') {
  module.exports.ci.collect.settings.chromeFlags += ' --disable-dev-shm-usage'
  
  // Relaxed thresholds for development
  module.exports.ci.assert.assertions = {
    ...module.exports.ci.assert.assertions,
    'categories:performance': ['warn', { minScore: 0.80 }],
    'total-blocking-time': ['warn', { maxNumericValue: 300 }],
    'interactive': ['warn', { maxNumericValue: 4000 }],
  }
}