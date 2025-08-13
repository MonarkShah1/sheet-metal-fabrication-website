# SEO Restoration PRD
## Comprehensive Local Domination & Performance Optimization Recovery

---

### Document Information
- **Version:** 1.0
- **Date:** August 2025
- **Author:** Technical Lead
- **Status:** Implementation Ready
- **Priority:** CRITICAL - Revenue Recovery

---

## 1. Executive Summary

This PRD documents the comprehensive SEO improvements that were lost during the repository restoration to commit `ed8bd58`. The lost improvements included advanced local SEO domination features, critical CSS optimization, performance enhancements, and emergency services positioning that were designed to capture high-value local searches in the GTA manufacturing sector.

### Key Lost Features:
- **Emergency Rush Services Pages** (6 new city-specific landing pages)
- **Critical CSS Optimization System** (50-70% performance improvement)
- **Advanced Performance Monitoring** (Core Web Vitals optimization)
- **Local Content Domination** (50+ micro-location pages planned)
- **Enhanced Build Pipeline** (Performance auditing & optimization tools)

### Business Impact of Loss:
- Lost opportunity to capture "emergency fabrication" search traffic ($50K+ annual potential)
- Missing Core Web Vitals improvements affecting SEO rankings
- Reduced mobile conversion potential (10% improvement lost)
- Missing advanced performance tooling for ongoing optimization

---

## 2. Lost SEO Improvements Analysis

### 2.1 Emergency Rush Services Implementation

#### Created Pages:
```
✅ /emergency/ (Hub page)
✅ /emergency/toronto/
✅ /emergency/mississauga/ 
✅ /emergency/brampton/
✅ /locations/toronto-etobicoke-industrial/
✅ /services/food-processing-equipment-brampton/
```

#### Key Features Lost:
- Real-time rush capacity indicators
- Emergency hotline integration (647-407-0171)
- 4-hour turnaround promise positioning
- City-specific delivery time calculators
- Rush quote forms with photo upload
- Emergency case study documentation
- Local industrial zone coverage maps

### 2.2 Critical CSS & Performance System

#### Performance Improvements Lost:
- **FCP Reduction:** 3.2s → 1.8s (44% improvement)
- **LCP Reduction:** 4.1s → 2.5s (39% improvement)
- **CLS Improvement:** 0.15 → <0.1 (33% improvement)
- **System Font Implementation:** Zero font-loading layout shift

#### Technical Features Lost:
```javascript
// Critical CSS extraction pipeline
- Automated above-the-fold style extraction
- Route-based critical CSS generation
- Progressive CSS loading strategy
- System font fallbacks implementation
- Build-time performance optimization
```

#### Lost Build Tools:
```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build",
    "validate-css": "node scripts/validate-critical-css.js",
    "performance:audit": "node scripts/performance-audit.js",
    "performance:lighthouse": "npm run build && npx lighthouse http://localhost:3000",
    "lighthouse:ci": "npx lhci autorun"
  }
}
```

### 2.3 Advanced Component System

#### Lost Components:
- `CriticalCSS.tsx` - Critical CSS injection system
- `DeferredLoading.tsx` - Performance-optimized loading
- `LazyImage.tsx` - Optimized image loading
- `DynamicComponents.tsx` - Code-split components
- Emergency service components (3 components)

#### Lost Configuration:
- `config/critical-css.ts` - Critical CSS rules
- `lib/performance.ts` - Performance monitoring
- `utils/performance-monitor.ts` - Real-time metrics
- `lighthouserc.js` - Lighthouse CI configuration

---

## 3. Recovery Implementation Plan

### 3.1 PHASE 1: Emergency Services Recovery (Priority 1)

#### Week 1-2 Tasks:
```
□ Recreate emergency service pages structure
□ Implement rush hotline integration  
□ Build emergency quote forms with validation
□ Create city-specific delivery calculators
□ Add real-time capacity indicators
□ Implement emergency case study templates
```

#### Target Keywords to Recover:
- "emergency metal fabrication [city]"
- "same day steel cutting toronto"  
- "rush welding services mississauga"
- "4 hour turnaround metal parts"
- "assembly line down fabricator"

### 3.2 PHASE 2: Critical CSS System Recovery (Priority 1)

#### Week 2-3 Tasks:
```
□ Rebuild critical CSS extraction pipeline
□ Implement system font stack across components
□ Create progressive CSS loading mechanism
□ Set up performance monitoring dashboard
□ Configure Lighthouse CI automation
□ Restore build performance tooling
```

#### Performance Targets:
- FCP < 1.8s (currently 3.2s)
- LCP < 2.5s (currently 4.1s)  
- CLS < 0.1 (currently 0.15)
- Mobile PageSpeed Score > 90

### 3.3 PHASE 3: Local Domination Expansion (Priority 2)

#### Week 3-4 Tasks:
```
□ Create neighborhood-level location pages (20+ pages)
□ Build industry-location matrix pages (50+ combinations)
□ Implement local schema markup across all pages
□ Add Google Business Profile integration
□ Create local testimonial collection system
□ Build local project portfolio sections
```

#### Target Coverage:
- 50+ micro-location pages
- 150+ industry-location combinations
- Complete GTA industrial zone coverage

---

## 4. Technical Recovery Requirements

### 4.1 Dependencies to Restore

```json
{
  "devDependencies": {
    "@next/bundle-analyzer": "^15.4.6",
    "critters": "^0.0.20",
    "cssnano": "^7.1.0", 
    "purgecss": "^5.0.0"
  },
  "dependencies": {
    "web-vitals": "^3.5.0"
  }
}
```

### 4.2 Configuration Files to Recreate

#### Critical CSS Configuration:
```typescript
// config/critical-css.ts
export const criticalCSSConfig = {
  viewports: [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet  
    { width: 1920, height: 1080 } // Desktop
  ],
  inlineThreshold: 14336, // 14KB
  routes: [
    '/',
    '/emergency',
    '/emergency/toronto',
    '/services/*',
    '/locations/*'
  ]
};
```

#### Performance Monitoring:
```typescript
// lib/performance.ts
export class PerformanceMonitor {
  // Real-time Core Web Vitals tracking
  // Critical CSS size monitoring
  // Font loading performance
  // Build performance metrics
}
```

### 4.3 Build Pipeline Enhancements

```javascript
// next.config.js additions needed
const withBundleAnalyzer = require('@next/bundle-analyzer');
const CrittersPlugin = require('critters-webpack-plugin');

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.plugins.push(
      new CrittersPlugin({
        preload: 'swap',
        pruneSource: true,
        inlineThreshold: 14336
      })
    );
    return config;
  }
});
```

---

## 5. Emergency Service Content Strategy

### 5.1 Core Messaging Framework

#### Value Proposition:
**"Production Line Savior - 4 Hour Emergency Metal Fabrication"**

#### Service Boundaries:
```
✅ DO: Shop-based rush fabrication & delivery
✅ DO: Same-day parts within GTA  
✅ DO: Emergency assembly line components
✅ DO: Weekend/evening production
❌ DON'T: On-site mobile repairs
❌ DON'T: Field maintenance work
```

### 5.2 Content Requirements Per Emergency Page

```
□ Above-fold: Rush capacity indicator widget
□ Hotline: Prominent 647-407-0171 click-to-call
□ Quote Form: 5-field emergency request form
□ Process: Visual 6-step rush timeline
□ Case Studies: Minimum 3 local emergency wins
□ Pricing: Transparent rush premium disclosure
□ Coverage Map: Delivery zones with drive times
□ Trust Signals: Success rate & testimonials
```

### 5.3 Local SEO Schema Implementation

```json
{
  "@type": "EmergencyService",
  "name": "Rush Metal Fabrication [City]",
  "description": "4-hour emergency fabrication services",
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": "647-407-0171"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoRadius": "50km"
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification", 
    "opens": "07:00",
    "closes": "23:00"
  }
}
```

---

## 6. Success Metrics & Recovery Tracking

### 6.1 SEO Recovery KPIs

#### Search Performance:
```
□ Emergency keywords in top 3: Target 80%
□ Local pack appearances: +200%
□ Organic CTR improvement: +25%
□ Featured snippets captured: 10+
```

#### Technical Performance:
```
□ Mobile PageSpeed Score: 65 → 92
□ Desktop PageSpeed Score: 78 → 95  
□ Core Web Vitals: All Green
□ Lighthouse Performance: 90+
```

### 6.2 Business Impact Tracking

#### Lead Generation:
```
□ Emergency quote submissions: Track weekly
□ Hotline calls from emergency pages: Monitor daily
□ Rush order conversion rate: Target 35%
□ Average rush order value: Track monthly
```

#### Revenue Recovery:
```
□ Emergency services revenue: $50K annual target
□ Organic traffic from emergency terms: +300%
□ Local search visibility increase: +150%
□ Mobile conversion rate: +10%
```

---

## 7. Risk Mitigation & Rollback Plan

### 7.1 Implementation Risks

| Risk | Impact | Mitigation |
|------|---------|------------|
| Performance regression | High | Staged rollout with monitoring |
| Emergency form failures | High | Comprehensive testing & fallbacks |
| SEO ranking drops | Medium | Gradual implementation |
| Build pipeline issues | Medium | Separate branch testing |

### 7.2 Rollback Procedures

```bash
# Emergency rollback commands
git checkout main-1
git reset --hard ed8bd58
git push --force-with-lease origin main-1

# Performance monitoring rollback
npm run build:validate
npm run performance:audit
```

---

## 8. Implementation Timeline

### Week 1: Foundation Recovery
- [ ] Emergency service page structure
- [ ] Critical CSS build pipeline  
- [ ] Performance monitoring setup
- [ ] Basic rush forms implementation

### Week 2: Core Features
- [ ] Complete emergency pages (6 cities)
- [ ] Critical CSS optimization live
- [ ] Performance tooling operational
- [ ] Schema markup implementation

### Week 3: Optimization
- [ ] A/B testing emergency flows
- [ ] Performance fine-tuning
- [ ] Local SEO expansion (20+ pages)
- [ ] Analytics & monitoring dashboards

### Week 4: Full Recovery
- [ ] All lost features restored
- [ ] Performance targets achieved
- [ ] Emergency services live
- [ ] Revenue tracking operational

---

## 9. Resource Requirements

### 9.1 Development Resources
- **Frontend Developer:** 40 hours/week (4 weeks)
- **Performance Specialist:** 20 hours/week (2 weeks) 
- **Content Creator:** 15 hours/week (3 weeks)
- **QA Testing:** 10 hours/week (4 weeks)

### 9.2 Tools & Services
- Lighthouse CI subscription
- Performance monitoring service
- A/B testing platform
- Schema markup validation tools

---

## 10. Next Steps

### Immediate Actions (Today):
1. **Create emergency branch:** `git checkout -b seo-recovery`
2. **Install lost dependencies:** `npm install @next/bundle-analyzer critters cssnano purgecss web-vitals`
3. **Begin emergency page recreation:** Start with `/emergency/` hub page
4. **Set up performance monitoring:** Restore Lighthouse CI

### This Week:
1. Complete all emergency service pages
2. Implement critical CSS system
3. Restore performance tooling
4. Begin A/B testing preparation

### Success Criteria:
✅ All lost SEO features restored within 4 weeks
✅ Performance targets achieved (FCP < 1.8s, LCP < 2.5s)
✅ Emergency services generating leads within 2 weeks
✅ Core Web Vitals scores in "Good" range

---

## Appendix: Lost File Inventory

### Major Files Lost:
```
MD/LOCAL_CONTENT_DOMINATION_PRD.md (541 lines)
MD/critical-css-prd.md (534 lines)  
MD/FONT_LOADING_OPTIMIZATION_PRD.md (1103 lines)
MD/JAVASCRIPT_OPTIMIZATION_PRD.md (564 lines)

components/CriticalCSS.tsx (209 lines)
components/DeferredLoading.tsx (255 lines)
components/LazyImage.tsx (112 lines)
components/DynamicComponents.tsx (187 lines)

app/emergency/page.tsx (482 lines)
app/emergency/toronto/page.tsx (397 lines)
app/emergency/mississauga/page.tsx (265 lines)
app/emergency/brampton/page.tsx (223 lines)

lib/performance.ts (210 lines)
config/critical-css.ts (368 lines)
utils/performance-monitor.ts (314 lines)

Total: ~6,000+ lines of advanced SEO & performance code lost
```

### Build Configuration Lost:
```
lighthouserc.js (97 lines)
Enhanced next.config.js (16 lines)
Enhanced postcss.config.js (22 lines)
Performance audit scripts (784 lines total)
```

---

**CRITICAL:** This represents approximately $25,000+ in development value and potential revenue impact. Immediate recovery recommended.

---

*This PRD serves as the complete blueprint for recovering all lost SEO improvements and should be executed with highest priority.*