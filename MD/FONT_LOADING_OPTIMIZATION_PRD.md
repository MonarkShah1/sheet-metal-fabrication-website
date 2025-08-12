# Font Loading Optimization PRD
## Async Loading, Progressive Enhancement & Fallback Strategy

### Document Information
- **Version:** 1.0
- **Date:** December 2024
- **Author:** Development Team
- **Status:** Draft

---

## 1. Executive Summary

This PRD outlines the implementation of an optimized font loading strategy for the metal fabrication website to improve Core Web Vitals, reduce layout shifts, and enhance user experience through async font loading, progressive enhancement, and intelligent fallback mechanisms.

### Key Objectives
- Eliminate render-blocking font resources
- Reduce Cumulative Layout Shift (CLS) to < 0.1
- Improve First Contentful Paint (FCP) by 20-30%
- Ensure readable text during font load
- Provide graceful fallbacks for slow connections

---

## 2. Problem Statement

### Current Issues
1. **Render Blocking:** Web fonts block initial render, delaying FCP
2. **Layout Shifts:** FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text) causing poor CLS scores
3. **Large Font Files:** Multiple font weights/variants increasing page weight
4. **No Fallback Strategy:** Poor experience on slow connections
5. **Missing Progressive Enhancement:** No optimization for repeat visitors

### Impact
- Poor Core Web Vitals scores affecting SEO
- Delayed text rendering on slow connections
- Suboptimal user experience during initial load
- Higher bounce rates due to perceived slowness

---

## 3. Proposed Solution

### 3.1 Font Loading Strategy

#### **Phase 1: Critical Font Subsetting**
```typescript
// config/fonts.ts
export const fontConfig = {
  critical: {
    // Only characters needed for above-fold content
    subset: 'latin',
    unicodeRange: 'U+0020-007F', // Basic Latin
    display: 'swap',
    preload: true
  },
  full: {
    subset: 'latin-ext',
    unicodeRange: 'U+0000-024F', // Extended Latin
    display: 'optional',
    preload: false
  }
}
```

#### **Phase 2: Progressive Loading**
1. **Preload Critical Fonts**
   - Subset fonts for above-fold content
   - Use `<link rel="preload">` for critical fonts
   - Inline critical font CSS

2. **Async Load Full Fonts**
   - Load complete font families after initial render
   - Use Intersection Observer for below-fold fonts
   - Implement font loading API

3. **Local Storage Caching**
   - Store fonts in localStorage for repeat visitors
   - Version control for cache invalidation
   - Service Worker integration for offline support

### 3.2 Implementation Architecture

```
┌─────────────────────────────────────────────┐
│                  HTML Document               │
├─────────────────────────────────────────────┤
│  1. Inline Critical CSS (font-face subset)  │
│  2. Preload Critical Fonts                  │
│  3. System Font Stack Fallback             │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│            Initial Render (< 1s)            │
├─────────────────────────────────────────────┤
│  • System fonts display immediately         │
│  • Critical subset loads in background      │
│  • No layout shift (matched metrics)        │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│         Progressive Enhancement (1-3s)       │
├─────────────────────────────────────────────┤
│  • Full fonts load asynchronously           │
│  • Smooth transition with font-display      │
│  • Cache fonts for next visit               │
└─────────────────────────────────────────────┘
```

---

## 4. Technical Specifications

### 4.1 Font Face Declaration

```css
/* Critical subset - inline in <head> */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Inter Regular'),
       url('/fonts/inter-v12-latin-regular-subset.woff2') format('woff2');
  unicode-range: U+0020-007F;
}

/* Full font - loaded async */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: local('Inter Regular'),
       url('/fonts/inter-v12-latin-regular.woff2') format('woff2');
  unicode-range: U+0000-024F;
}
```

### 4.2 Font Loading Component

```typescript
// components/FontLoader.tsx
'use client';

import { useEffect } from 'react';

export function FontLoader() {
  useEffect(() => {
    // Check if fonts are cached
    const fontsLoaded = localStorage.getItem('fontsLoaded');
    
    if (!fontsLoaded) {
      // Load fonts asynchronously
      loadFonts().then(() => {
        localStorage.setItem('fontsLoaded', 'true');
        document.documentElement.classList.add('fonts-loaded');
      });
    } else {
      // Fonts cached, apply immediately
      document.documentElement.classList.add('fonts-loaded');
    }
  }, []);

  return null;
}

async function loadFonts() {
  const fonts = [
    new FontFace('Inter', 'url(/fonts/inter-regular.woff2)', {
      weight: '400',
      style: 'normal'
    }),
    new FontFace('Inter', 'url(/fonts/inter-bold.woff2)', {
      weight: '700',
      style: 'normal'
    })
  ];

  const loadedFonts = await Promise.all(
    fonts.map(font => font.load())
  );

  loadedFonts.forEach(font => {
    document.fonts.add(font);
  });
}
```

### 4.3 Fallback Font Stack

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 
               'Segoe UI', Roboto, 'Helvetica Neue', Arial, 
               sans-serif;
  
  /* Matched metrics for zero layout shift */
  --font-size-adjust: 1.0;
  --font-ascent-override: 95%;
  --font-descent-override: 25%;
  --font-line-gap-override: 0%;
}

/* System font with matched metrics */
@font-face {
  font-family: 'Inter-fallback';
  src: local('Arial');
  size-adjust: 107%;
  ascent-override: 95%;
  descent-override: 25%;
  line-gap-override: 0%;
}
```

### 4.4 Service Worker Strategy

```javascript
// public/sw.js
const FONT_CACHE = 'fonts-v1';

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/fonts/')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          return caches.open(FONT_CACHE).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});
```

---

## 5. Implementation Plan

### Phase 1: Font Audit & Optimization (Week 1)
- [ ] Audit current font usage
- [ ] Identify critical vs non-critical fonts
- [ ] Create font subsets
- [ ] Generate WOFF2 files
- [ ] Calculate fallback metrics

### Phase 2: Core Implementation (Week 2)
- [ ] Implement FontLoader component
- [ ] Add preload links
- [ ] Configure font-display strategies
- [ ] Set up fallback font stack
- [ ] Add inline critical CSS

### Phase 3: Progressive Enhancement (Week 3)
- [ ] Implement localStorage caching
- [ ] Add Service Worker support
- [ ] Set up lazy loading for icon fonts
- [ ] Add variable font support
- [ ] Implement font loading API

### Phase 4: Testing & Optimization (Week 4)
- [ ] Test on slow 3G connections
- [ ] Verify CLS scores
- [ ] A/B test font-display strategies
- [ ] Performance monitoring
- [ ] Cross-browser testing

---

## 6. Success Metrics

### Performance Metrics
| Metric | Current | Target | Method |
|--------|---------|--------|--------|
| FCP | 2.5s | < 1.8s | Lighthouse |
| CLS | 0.15 | < 0.1 | Core Web Vitals |
| Font Load Time | 3s | < 1s | Performance API |
| Text Paint | 2s | < 0.5s | Paint Timing API |

### User Experience Metrics
- **Bounce Rate:** Reduce by 15%
- **Time to Interactive:** Improve by 25%
- **Perceived Performance:** User surveys showing improvement

---

## 7. Risk Mitigation

### Potential Risks & Solutions

| Risk | Impact | Mitigation |
|------|--------|------------|
| FOUT on slow connections | High | Use font-display: optional for non-critical |
| Browser incompatibility | Medium | Progressive enhancement with feature detection |
| Cache invalidation issues | Low | Version-based cache keys |
| Increased complexity | Medium | Comprehensive documentation and testing |

---

## 8. Technical Requirements

### Browser Support
- Chrome 88+ (Font Loading API)
- Firefox 85+ (CSS font-display)
- Safari 14+ (WOFF2 support)
- Edge 88+ (Service Workers)

### Dependencies
```json
{
  "dependencies": {
    "fontfaceobserver": "^2.3.0",
    "workbox-webpack-plugin": "^7.0.0"
  },
  "devDependencies": {
    "subfont": "^7.1.0",
    "glyphhanger": "^5.0.0"
  }
}
```

### File Structure
```
/public
  /fonts
    /inter
      - inter-latin-subset.woff2 (5KB)
      - inter-latin-full.woff2 (15KB)
      - inter-latin-bold.woff2 (16KB)
    /icons
      - icons.woff2 (lazy loaded)
/components
  - FontLoader.tsx
  - CriticalFonts.tsx
/lib
  - font-utils.ts
  - font-metrics.ts
/styles
  - fonts.css
  - font-fallbacks.css
```

---

## 9. Code Examples

### 9.1 Next.js Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';
import FontLoader from '@/components/FontLoader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true, // Automatic fallback metrics
  variable: '--font-inter'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/inter-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: criticalFontCSS }} />
      </head>
      <body>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
```

### 9.2 Font Loading Hook

```typescript
// hooks/useFontLoader.ts
import { useEffect, useState } from 'react';

export function useFontLoader(fontFamily: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        const fontLoaded = document.fonts.check(`16px ${fontFamily}`);
        setIsLoaded(fontLoaded);
      }).catch(() => {
        setIsError(true);
      });
    } else {
      // Fallback for older browsers
      import('fontfaceobserver').then(({ default: FontFaceObserver }) => {
        const font = new FontFaceObserver(fontFamily);
        font.load(null, 5000)
          .then(() => setIsLoaded(true))
          .catch(() => setIsError(true));
      });
    }
  }, [fontFamily]);

  return { isLoaded, isError };
}
```

### 9.3 Performance Monitoring

```typescript
// lib/font-performance.ts
export function measureFontPerformance() {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('font')) {
          console.log(`Font loaded: ${entry.name} in ${entry.duration}ms`);
          
          // Send to analytics
          gtag('event', 'font_load', {
            font_name: entry.name,
            load_time: entry.duration,
            connection_type: navigator.connection?.effectiveType
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }
}
```

---

## 10. Testing Strategy

### 10.1 Performance Testing
```javascript
// tests/font-loading.test.js
describe('Font Loading Performance', () => {
  it('should load critical fonts within 1 second', async () => {
    const start = performance.now();
    await page.goto('http://localhost:3000');
    await page.waitForFunction(() => document.fonts.check('16px Inter'));
    const loadTime = performance.now() - start;
    expect(loadTime).toBeLessThan(1000);
  });

  it('should have zero CLS from font loading', async () => {
    const cls = await page.evaluate(() => {
      return new Promise(resolve => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const cls = entries.reduce((acc, entry) => acc + entry.value, 0);
          resolve(cls);
        }).observe({ entryTypes: ['layout-shift'] });
      });
    });
    expect(cls).toBeLessThan(0.1);
  });
});
```

### 10.2 Visual Regression Testing
- Capture screenshots during font load stages
- Compare fallback vs loaded states
- Verify no layout shifts
- Test across different viewport sizes

---

## 11. Rollout Strategy

### A/B Testing Plan
1. **Control Group (33%):** Current font loading
2. **Test A (33%):** font-display: swap
3. **Test B (33%):** font-display: optional

### Rollback Plan
- Feature flag for instant rollback
- Monitor error rates and performance metrics
- Gradual rollout: 10% → 25% → 50% → 100%

---

## 12. Maintenance & Monitoring

### Ongoing Tasks
- Monthly font usage audit
- Quarterly performance review
- Update font subsets based on content changes
- Monitor new browser APIs and features
- Regular cache strategy evaluation

### Alerts & Monitoring
```javascript
// monitoring/font-alerts.js
const thresholds = {
  fontLoadTime: 2000, // ms
  cls: 0.1,
  fontFileSize: 50000 // bytes
};

// Alert if thresholds exceeded
if (fontLoadTime > thresholds.fontLoadTime) {
  logError('Font load time exceeded threshold', {
    actual: fontLoadTime,
    threshold: thresholds.fontLoadTime
  });
}
```

---

## 13. Conclusion

This font loading optimization strategy will significantly improve website performance and user experience through:

1. **Faster Initial Render:** Critical font subsetting and preloading
2. **Zero Layout Shift:** Matched fallback metrics
3. **Progressive Enhancement:** Graceful upgrades for better connections
4. **Robust Fallbacks:** System fonts for reliability
5. **Future-Proof:** Service Worker caching and modern APIs

Expected outcomes include 30% improvement in FCP, 40% reduction in CLS, and enhanced user satisfaction scores.

---

## Appendix A: Font Metrics Calculator

```javascript
// tools/calculate-font-metrics.js
const calculateFallbackMetrics = (originalFont, fallbackFont) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Measure original font
  ctx.font = `100px ${originalFont}`;
  const originalMetrics = ctx.measureText('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
  
  // Measure fallback font
  ctx.font = `100px ${fallbackFont}`;
  const fallbackMetrics = ctx.measureText('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
  
  // Calculate adjustments
  return {
    sizeAdjust: (originalMetrics.width / fallbackMetrics.width) * 100,
    ascentOverride: 95, // Fine-tune based on visual testing
    descentOverride: 25,
    lineGapOverride: 0
  };
};
```

## Appendix B: Browser Compatibility Table

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| font-display | ✅ 60+ | ✅ 58+ | ✅ 11.1+ | ✅ 79+ |
| Font Loading API | ✅ 35+ | ✅ 41+ | ✅ 10+ | ✅ 79+ |
| WOFF2 | ✅ 36+ | ✅ 39+ | ✅ 10+ | ✅ 14+ |
| size-adjust | ✅ 92+ | ✅ 92+ | ✅ 16.4+ | ✅ 92+ |
| Service Workers | ✅ 40+ | ✅ 44+ | ✅ 11.1+ | ✅ 17+ |

## Appendix C: Performance Budget

| Resource | Budget | Notes |
|----------|--------|-------|
| Total Font Size | < 100KB | All weights/styles |
| Critical Font | < 10KB | Subset for above-fold |
| Font Requests | ≤ 4 | Minimize HTTP requests |
| Load Time | < 1s | On 4G connection |
| CLS Impact | < 0.05 | From font swapping |
