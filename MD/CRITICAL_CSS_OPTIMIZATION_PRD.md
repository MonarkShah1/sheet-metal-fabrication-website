# Critical CSS Optimization System PRD

## 1. Executive Summary

### Project Overview
Implement a comprehensive critical CSS optimization system to improve website performance by inlining above-the-fold styles and implementing system font fallbacks, resulting in faster initial page renders and reduced layout shifts.

### Business Impact
- **Improved Core Web Vitals**: Target 20-30% improvement in LCP and CLS scores
- **Better SEO Rankings**: Google prioritizes fast-loading sites
- **Enhanced User Experience**: Faster perceived load times and reduced visual shifts
- **Reduced Bandwidth**: System fonts eliminate external font downloads for initial render

## 2. Problem Statement

### Current Issues
1. **Render-Blocking CSS**: All CSS is loaded before page render begins
2. **Font Loading Delays**: External fonts cause layout shifts and delayed text rendering
3. **Large Initial Bundle**: Full stylesheet loaded for every page regardless of usage
4. **Poor FCP/LCP Scores**: First Contentful Paint and Largest Contentful Paint are suboptimal

### Performance Metrics (Current)
- Average FCP: 2.5s
- Average LCP: 3.8s
- CLS Score: 0.15
- Total Blocking Time: 450ms

## 3. Goals and Success Criteria

### Primary Goals
1. Extract and inline critical CSS for above-the-fold content
2. Implement system font stack with smooth fallbacks
3. Defer non-critical CSS loading
4. Eliminate render-blocking resources

### Success Metrics
- **FCP**: < 1.8s (28% improvement)
- **LCP**: < 2.5s (34% improvement)
- **CLS**: < 0.1 (33% improvement)
- **Lighthouse Performance Score**: > 90
- **Zero render-blocking CSS resources**

## 4. Technical Requirements

### 4.1 Critical CSS Extraction

#### Automated Extraction System
```typescript
interface CriticalCSSConfig {
  pages: string[];
  viewport: {
    width: number;
    height: number;
  };
  minify: boolean;
  inline: boolean;
}
```

#### Requirements
- Extract CSS for multiple viewport sizes (mobile, tablet, desktop)
- Identify above-the-fold elements automatically
- Generate page-specific critical CSS
- Cache extracted CSS for build optimization

### 4.2 Inline CSS Implementation

#### Strategy
1. **Build-Time Extraction**: Generate critical CSS during build process
2. **Page-Specific Inlining**: Each page gets its own critical CSS
3. **Deferred Loading**: Load full CSS asynchronously after initial render

#### Implementation Structure
```jsx
// app/layout.tsx
<head>
  {/* Inline Critical CSS */}
  <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
  
  {/* Preload full CSS */}
  <link rel="preload" href="/styles/main.css" as="style" />
  
  {/* Load full CSS asynchronously */}
  <link 
    rel="stylesheet" 
    href="/styles/main.css" 
    media="print" 
    onLoad="this.media='all'" 
  />
  
  {/* Fallback for no-JS */}
  <noscript>
    <link rel="stylesheet" href="/styles/main.css" />
  </noscript>
</head>
```

### 4.3 System Font Stack Implementation

#### Font Stack Strategy
```css
/* Optimized system font stack */
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
               "Helvetica Neue", Arial, "Noto Sans", sans-serif, 
               "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 
               "Noto Color Emoji";
  
  --font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
  
  --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, 
               "Liberation Mono", "Courier New", monospace;
}
```

#### Progressive Font Loading
```css
/* Initial render with system fonts */
body {
  font-family: var(--font-sans);
}

/* Optional: Load custom fonts for enhanced experience */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Use system font until custom loads */
  unicode-range: U+000-5FF; /* Load only needed characters */
}

/* Apply custom font when loaded */
.fonts-loaded body {
  font-family: 'CustomFont', var(--font-sans);
}
```

### 4.4 Build Pipeline Integration

#### Next.js Configuration
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    craCompat: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Add critical CSS plugin
      config.plugins.push(
        new CriticalCSSPlugin({
          // Configuration
        })
      );
    }
    return config;
  },
};
```

#### Build Scripts
```json
{
  "scripts": {
    "build:critical": "node scripts/extract-critical-css.js",
    "build": "npm run build:critical && next build",
    "analyze:css": "node scripts/analyze-css-usage.js"
  }
}
```

## 5. Implementation Plan

### Phase 1: Foundation (Week 1)
- [ ] Set up critical CSS extraction tooling
- [ ] Configure build pipeline for CSS optimization
- [ ] Implement system font stack variables
- [ ] Create CSS loading strategy module

### Phase 2: Critical CSS Extraction (Week 2)
- [ ] Develop page crawler for above-the-fold detection
- [ ] Implement CSS extraction for key pages
- [ ] Create caching mechanism for extracted CSS
- [ ] Build inline CSS injection system

### Phase 3: Font Optimization (Week 3)
- [ ] Replace custom fonts with system font stack
- [ ] Implement progressive font enhancement
- [ ] Add font-display strategies
- [ ] Configure preconnect hints for external fonts (if any)

### Phase 4: Testing & Optimization (Week 4)
- [ ] Performance testing across devices
- [ ] A/B testing for user experience
- [ ] Fine-tune critical CSS boundaries
- [ ] Optimize for edge cases

## 6. File Structure

```
website/
├── lib/
│   ├── critical-css/
│   │   ├── extractor.ts        # Critical CSS extraction logic
│   │   ├── injector.ts         # Inline CSS injection
│   │   ├── cache.ts            # Caching mechanism
│   │   └── config.ts           # Configuration
│   └── fonts/
│       ├── system-stack.ts     # System font definitions
│       └── loader.ts            # Font loading strategies
├── scripts/
│   ├── extract-critical-css.js # Build-time extraction
│   ├── analyze-css-usage.js    # CSS usage analysis
│   └── optimize-fonts.js       # Font optimization
├── styles/
│   ├── critical/               # Extracted critical CSS
│   │   ├── home.css
│   │   ├── services.css
│   │   └── [page].css
│   └── deferred/              # Non-critical styles
│       └── main.css
└── config/
    └── critical-css.config.js  # Configuration file
```

## 7. Component Implementation

### 7.1 Critical CSS Provider
```typescript
// components/CriticalCSSProvider.tsx
import { useEffect } from 'react';

interface CriticalCSSProviderProps {
  criticalCSS: string;
  fullCSSPath: string;
  children: React.ReactNode;
}

export function CriticalCSSProvider({ 
  criticalCSS, 
  fullCSSPath, 
  children 
}: CriticalCSSProviderProps) {
  useEffect(() => {
    // Load full CSS after initial render
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fullCSSPath;
    document.head.appendChild(link);
    
    // Mark fonts as loaded when custom fonts are ready
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, [fullCSSPath]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      {children}
    </>
  );
}
```

### 7.2 System Font Component
```typescript
// components/SystemFontOptimizer.tsx
export function SystemFontOptimizer() {
  return (
    <style jsx global>{`
      /* Optimized system font stack */
      html {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
                     Roboto, "Helvetica Neue", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Prevent font-synthesis */
      * {
        font-synthesis: none;
      }
      
      /* Optimize font loading for headings */
      h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        line-height: 1.2;
        text-wrap: balance;
      }
    `}</style>
  );
}
```

## 8. Performance Monitoring

### 8.1 Metrics Collection
```typescript
// lib/performance-monitor.ts
export class PerformanceMonitor {
  static measureCriticalCSS() {
    // Measure time to first paint
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    // Measure CSS loading time
    const resources = performance.getEntriesByType('resource');
    const cssResources = resources.filter(r => r.name.includes('.css'));
    
    return {
      fcp: fcp?.startTime,
      cssLoadTime: Math.max(...cssResources.map(r => r.responseEnd)),
      blockingTime: this.calculateBlockingTime(),
    };
  }
}
```

### 8.2 A/B Testing Configuration
```typescript
// config/ab-tests.ts
export const criticalCSSTests = {
  'critical-css-enabled': {
    id: 'critical-css-001',
    variants: {
      control: { enabled: false },
      treatment: { enabled: true }
    },
    metrics: ['FCP', 'LCP', 'CLS', 'bounce_rate'],
    traffic: 0.5
  }
};
```

## 9. Fallback Strategies

### 9.1 No JavaScript Fallback
```html
<noscript>
  <link rel="stylesheet" href="/styles/full.css">
</noscript>
```

### 9.2 Slow Network Handling
```typescript
// Detect slow connections and adjust strategy
if (navigator.connection?.effectiveType === '2g') {
  // Use minimal CSS only
  loadMinimalCSS();
} else {
  // Load full experience
  loadFullCSS();
}
```

## 10. Testing Requirements

### 10.1 Unit Tests
- Critical CSS extraction accuracy
- Font stack fallback behavior
- CSS injection timing
- Cache invalidation

### 10.2 Integration Tests
- Build pipeline integration
- Page-specific CSS generation
- Cross-browser compatibility
- Mobile device performance

### 10.3 Performance Tests
- Lighthouse CI automated testing
- Real User Monitoring (RUM)
- Synthetic monitoring
- Load testing under various network conditions

## 11. Documentation Requirements

### 11.1 Developer Documentation
- Setup and configuration guide
- CSS extraction customization
- Font stack modification
- Troubleshooting guide

### 11.2 Performance Reports
- Before/after metrics comparison
- Page-by-page performance analysis
- Browser-specific performance data
- Network condition impact analysis

## 12. Rollout Strategy

### Phase 1: Internal Testing (Week 1)
- Deploy to staging environment
- Internal team testing
- Performance benchmarking

### Phase 2: Limited Release (Week 2)
- 10% traffic rollout
- Monitor metrics closely
- Gather user feedback

### Phase 3: Gradual Rollout (Week 3-4)
- Increase to 50% traffic
- A/B test analysis
- Performance optimization based on data

### Phase 4: Full Release (Week 5)
- 100% traffic if metrics are positive
- Continuous monitoring
- Iterative improvements

## 13. Risk Assessment

### Technical Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| CSS extraction errors | High | Comprehensive testing, fallback styles |
| Build time increase | Medium | Caching, parallel processing |
| Browser incompatibility | Low | Progressive enhancement |
| Flash of unstyled content | Medium | Careful critical CSS boundaries |

## 14. Dependencies

### Tools & Libraries
- `critical`: CSS extraction tool
- `penthouse`: Above-the-fold CSS detection
- `postcss`: CSS processing
- `cssnano`: CSS minification
- `purgecss`: Unused CSS removal

### Team Resources
- Frontend Developer: Implementation
- DevOps Engineer: Build pipeline integration
- QA Engineer: Testing and validation
- Performance Engineer: Monitoring setup

## 15. Success Metrics Dashboard

### Key Performance Indicators
```typescript
interface PerformanceKPIs {
  metrics: {
    FCP: number;      // Target: < 1.8s
    LCP: number;      // Target: < 2.5s
    CLS: number;      // Target: < 0.1
    TTI: number;      // Target: < 3.5s
    TBT: number;      // Target: < 300ms
  };
  improvements: {
    renderBlockingReduction: percentage;
    cssFileSizeReduction: percentage;
    fontLoadTimeReduction: percentage;
  };
  businessMetrics: {
    bounceRateChange: percentage;
    conversionRateChange: percentage;
    pageViewsPerSession: number;
  };
}
```

## 16. Maintenance & Updates

### Ongoing Tasks
- Weekly performance audits
- Monthly CSS usage analysis
- Quarterly font stack review
- Continuous critical CSS boundary optimization

### Update Triggers
- New page templates require critical CSS extraction
- Design system updates need CSS re-extraction
- Browser updates may affect font rendering
- Performance regression alerts

## Appendix A: Example Implementation

### Complete Layout Implementation
```tsx
// app/layout.tsx
import { CriticalCSSProvider } from '@/components/CriticalCSSProvider';
import { SystemFontOptimizer } from '@/components/SystemFontOptimizer';
import { getCriticalCSS } from '@/lib/critical-css/extractor';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const criticalCSS = await getCriticalCSS('root');
  
  return (
    <html lang="en">
      <head>
        <SystemFontOptimizer />
        <CriticalCSSProvider 
          criticalCSS={criticalCSS}
          fullCSSPath="/styles/main.css"
        >
          {/* Preconnect to required origins */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        </CriticalCSSProvider>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Appendix B: Configuration Examples

### Critical CSS Config
```javascript
// config/critical-css.config.js
module.exports = {
  pages: [
    { route: '/', viewport: { width: 1440, height: 900 } },
    { route: '/services', viewport: { width: 1440, height: 900 } },
    { route: '/quote', viewport: { width: 1440, height: 900 } },
  ],
  mobile: {
    width: 375,
    height: 812,
  },
  tablet: {
    width: 768,
    height: 1024,
  },
  desktop: {
    width: 1440,
    height: 900,
  },
  minify: true,
  extract: true,
  inline: true,
  penthouse: {
    timeout: 30000,
    pageLoadSkipTimeout: 5000,
  },
};
```

---

*Document Version: 1.0*  
*Last Updated: [Current Date]*  
*Status: Ready for Implementation*
