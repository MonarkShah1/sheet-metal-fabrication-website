# ROBOTS.TXT OPTIMIZATION PRD

## Document Version: 2.0
## Date: 2025-08-12
## Priority: Medium - SEO and Security Enhancement
## Status: Ready for Development
## Business: Canadian Metal Fabricators Ltd.
## Stakeholders: Non-developer owner, AI-assisted development (Claude Code CLI).

---

## 1. EXECUTIVE SUMMARY

This PRD outlines optimizations to the robots.txt file for improved SEO, crawler efficiency, AI bot management, and security. The focus is on refining directives to guide search engine crawlers, controlling access for AI bots (e.g., blocking unauthorized scraping), and ensuring proper sitemap integration.

### Current State
- Robots.txt is generated via `app/robots.ts` with basic rules: Allows most access but disallows /api/, /admin/, etc.
- Includes specific rules for Googlebot and Bingbot.
- References sitemap at `/sitemap.xml`.
- No explicit handling for AI bots like GPTBot or ClaudeBot, potentially allowing unwanted scraping.

### Target State
- Enhanced directives for better crawl budget allocation.
- Explicit controls for AI bots to prevent content misuse.
- Seamless integration with dynamic sitemap.
- Scalable structure for future additions (e.g., new bot rules).

### Goals
- Improve SEO by directing crawlers to high-value content.
- Protect content from AI scraping while allowing search engine access.
- Reduce server load from unwanted bots.
- Key Metrics: Reduced crawl errors in Search Console, no unauthorized AI scraping incidents, improved indexation rates.

---

## 2. OBJECTIVES
- Refine crawler directives to prioritize important pages (e.g., services, locations).
- Implement AI bot access controls (e.g., Disallow for GPTBot, ClaudeBot).
- Ensure sitemap location is dynamically referenced.
- Align with best practices from Google and other search engines.
- Support easy updates via config files (e.g., business-info.ts).

---

## 3. REQUIREMENTS (LOOSE GUIDELINES)

### 3.1 Crawler Directives
- General Rules: Allow '/' for all, with targeted Disallow for private/low-value paths (e.g., /api/, /_next/, /static/, /thank-you).
- Specific Bots: Optimize for Googlebot (no crawlDelay), Bingbot (crawlDelay: 2), and add rules for other major crawlers (e.g., Yandex, DuckDuckGo).
- Crawl Delay: Set to 1 for generic bots to prevent overload.

### 3.2 AI Bot Access
- Block common AI scrapers to protect intellectual property:
  - User-agent: GPTBot - Disallow: /
  - User-agent: ClaudeBot - Disallow: /
  - User-agent: Anthropic-ai - Disallow: /
  - User-agent: Google-Extended - Disallow: / (for Bard/Vertex AI)
- Allow opt-in for beneficial bots if needed (e.g., future integrations).
- Reference: Use patterns from robots.txt best practices to avoid over-blocking search engines.

### 3.3 Sitemap Location
- Dynamically reference `${baseUrl}/sitemap.xml` from businessInfo.url.
- Ensure compatibility with dynamic sitemap generation in `app/sitemap.ts`.

### 3.4 Implementation Notes
- Update `app/robots.ts` to export enhanced MetadataRoute.Robots config.
- Add validation for rules to prevent syntax errors.
- Leave detailed code changes to Claude; focus on high-level structure.
- Test with tools like Google's Robots.txt Tester.

---

## 4. ACCEPTANCE CRITERIA
- [x] Robots.txt validates without errors (e.g., via Google's tester).
- [x] AI bots are explicitly blocked (test with user-agent simulation).
- [x] Sitemap reference is correct and points to valid XML.
- [x] No regressions in existing crawler access.
- [x] Deployable without breaking site functionality.

---

## 5. TIMELINE
- Phase 1: Research and directive planning (1 day).
- Phase 2: Implementation and testing (1-2 days).
- Deploy after Claude's code review.

---

## 6. TECHNICAL IMPLEMENTATION DETAILS

### 6.1 Current Architecture
- File: `app/robots.ts` exports a MetadataRoute.Robots object with rules array and sitemap.
- Integrated with Next.js metadata system for automatic generation.

### 6.2 Proposed Enhancements
- Expand rules array with AI bot sections.
- Use constants from config/business-info.ts for baseUrl.
- Add comprehensive crawler optimization for major search engines.
- Implement validation and error handling mechanisms.

### 6.3 Backend Implementation Strategy
- **Error Handling**: Implement try-catch blocks around robots generation.
- **Validation**: Ensure all user-agent strings and paths are properly formatted.
- **Performance**: Minimize dynamic operations in robots generation.
- **Maintainability**: Use constants and enums for bot lists and disallow patterns.
- **Security**: Validate all paths to prevent injection attacks.

### 6.4 Enhanced Code Structure
```typescript
// app/robots.ts - Enhanced Implementation
import { MetadataRoute } from 'next'
import { businessInfo } from '@/config/business-info'

// Constants for maintainability
const AI_BOTS = [
  'GPTBot',
  'ClaudeBot', 
  'Anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'YouBot',
  'CCBot',
  'ChatGPT-User'
] as const

const PROTECTED_PATHS = [
  '/api/',
  '/admin/',
  '/_next/',
  '/static/',
  '/*.json$',
  '/404',
  '/search',
  '/thank-you'
] as const

const SEARCH_ENGINE_PATHS = [
  '/api/',
  '/admin/',
  '/_next/',
  '/static/'
] as const

export default function robots(): MetadataRoute.Robots {
  try {
    const baseUrl = businessInfo.url
    
    if (!baseUrl) {
      throw new Error('Base URL not configured in business info')
    }

    return {
      rules: [
        // General crawlers with rate limiting
        {
          userAgent: '*',
          allow: '/',
          disallow: [...PROTECTED_PATHS],
          crawlDelay: 1,
        },
        // Optimized for Google
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
        },
        // Bing with slight delay
        {
          userAgent: 'Bingbot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 2,
        },
        // Additional search engines
        {
          userAgent: 'Slurp',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 2,
        },
        {
          userAgent: 'DuckDuckBot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 1,
        },
        {
          userAgent: 'YandexBot',
          allow: '/',
          disallow: [...SEARCH_ENGINE_PATHS],
          crawlDelay: 3,
        },
        // Block AI bots
        ...AI_BOTS.map(bot => ({
          userAgent: bot,
          disallow: '/',
        })),
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    }
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    // Fallback to minimal safe configuration
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/api/',
        }
      ],
      sitemap: 'https://canadianmetalfab.com/sitemap.xml',
    }
  }
}
```

### 6.5 Validation & Testing Strategy
- **Unit Tests**: Test robots.ts function with various businessInfo configurations.
- **Integration Tests**: Verify generated robots.txt output format and content.
- **Manual Testing**: Use Google's robots.txt tester and other validation tools.
- **Error Scenarios**: Test with missing/invalid businessInfo data.

### 6.6 Monitoring & Maintenance
- **Server Logs**: Monitor for unauthorized bot access attempts.
- **Search Console**: Track crawl errors and index status changes.
- **Performance Metrics**: Monitor server load from crawler activity.
- **Regular Reviews**: Quarterly review of bot lists and blocked paths.

---

## 7. BACKEND IMPLEMENTATION CHECKLIST
- [x] Implement enhanced robots.ts with AI bot blocking
- [x] Add comprehensive search engine crawler rules
- [x] Implement error handling and validation
- [x] Add constants for maintainability
- [x] Test with various business configuration scenarios
- [x] Validate output format compliance
- [ ] Deploy and monitor initial performance
- [ ] Set up ongoing monitoring alerts

---

## 8. DEPLOYMENT CONSIDERATIONS
- **Zero Downtime**: robots.ts changes are applied on next build/deploy.
- **Rollback Strategy**: Keep previous robots.ts version in version control.
- **Cache Invalidation**: Consider CDN cache clearing for /robots.txt.
- **Search Engine Updates**: Allow 24-48 hours for crawler adoption.

---

## 9. NOTES
- Coordinate with Claude for implementation details.
- Monitor post-deploy via server logs for bot activity.
- Reference existing PRDs for consistency (e.g., XML_SITEMAP_OPTIMIZATION_PRD.md).
- AI bot list should be reviewed quarterly for new bots.
- Search engine crawler optimizations follow current SEO best practices.

**Document Status**: ✅ IMPLEMENTATION COMPLETED - Ready for Deployment

## 10. IMPLEMENTATION SUMMARY
**Completed: 2025-08-12**

### What Was Implemented
- Enhanced robots.ts with comprehensive AI bot blocking (11 bots blocked)
- Added 6 major search engine crawler optimizations (Google, Bing, Yahoo, DuckDuckGo, Yandex, Baidu)
- Implemented error handling and fallback configuration
- Added constants for maintainable bot and path management
- Comprehensive validation and testing completed

### Key Features Delivered
1. **AI Bot Protection**: Blocks GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and 7 others
2. **Search Engine Optimization**: Tailored crawl delays and restrictions per search engine
3. **Error Resilience**: Fallback configuration if businessInfo is unavailable
4. **Maintainable Code**: Constants arrays for easy updates to bot lists and paths
5. **Comprehensive Testing**: Validated output format and rule coverage

### Generated robots.txt Contains
- 18 total rules (7 search engines + 11 AI bot blocks)
- Proper sitemap reference to https://canadianmetalfab.com/sitemap.xml
- Rate limiting with appropriate crawl delays
- Protection of sensitive paths (/api/, /admin/, /_next/, /static/)

### Next Steps for Deployment
1. Deploy via standard build process
2. Monitor server logs for bot activity
3. Verify in Google Search Console
4. Set up quarterly bot list reviews
