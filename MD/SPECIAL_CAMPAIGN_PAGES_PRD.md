# Special Campaign Pages PRD
## Targeted Landing Pages for SEO and PPC Campaigns

**Document Version:** 1.0  
**Date:** [Current Date]  
**Status:** Ready for Development  
**Business:** Canadian Metal Fabricators Ltd.  
**Objective:** Create dedicated campaign landing pages to target keyword gaps, drive local SEO traffic, and increase quote conversions by 100% for high-intent searches (e.g., location-specific, industry-specific, and transactional queries).

---

## 1. Executive Summary

### Goals
- **SEO Impact:** Rank for gap keywords (e.g., "sheet metal fabrication Ontario", "automotive metal fabrication Ontario") by creating 10-15 targeted pages with unique, localized content.
- **Conversion Focus:** Each page includes optimized quote forms/CTAs for transactional intent (e.g., "get metal fabrication quote Ontario").
- **Campaign Integration:** Pages designed for PPC (e.g., Google Ads) with UTM parameters, A/B testing hooks, and tracking.
- **Scalability:** Use dynamic routing and data files (similar to `lib/locations/location-data.ts`) for easy expansion.
- **Key Metrics:** Track organic traffic (+50%), form submissions (+30%), and bounce rate (<40%) via Google Analytics.

### Scope
- New routes: `/industries/[industry]`, `/services/[service]-[location]` (for localized gaps).
- Reuse existing: Components from `components/locations/` (e.g., LocalFAQ, ServiceAreaMap) and services (e.g., hero patterns).
- Total Pages: Start with 10 (prioritize gaps), expand to 20+ based on keywords.
- Timeline: Phase 1 (setup + 5 pages) in 1-2 weeks; Phase 2 (remaining + testing) in 2-3 weeks.

---

## 2. Keyword Gap Analysis & Page Mapping

Based on the provided list, group gaps and map to new campaign pages. Focus on "Gap" notations for prioritization.

### 2.1 Categorized Gaps
- **Location-Specific Gaps** (e.g., "sheet metal fabrication Ontario", "steel fabricators Ontario", "metal fabrication Ontario"): Create localized service pages.
- **Industry-Specific Gaps** (e.g., "automotive metal fabrication Ontario", "food industry metal parts", "material handling metal fabrication"): Create industry landing pages with local ties.
- **Material/Service-Specific Gaps** (e.g., "stainless steel fabrication", "sheet metal enclosures Ontario"): Extend services with localized variants.
- **Transactional Gaps** (e.g., "get metal fabrication quote Ontario", "sheet metal fabrication pricing"): Optimize with quote-focused CTAs and forms.
- **Emerging/Long-Tail Gaps** (e.g., "eco-friendly metal fabrication Ontario", "metal prototyping services Ontario"): Create niche campaign pages under industries or blog.

### 2.2 Proposed Pages (Initial 10)
1. `/services/sheet-metal-fabrication-ontario` (Targets: sheet metal fabrication Ontario, precision sheet metal, high quality sheet metal).
2. `/services/steel-fabrication-ontario` (Targets: steel fabricators Ontario, stainless steel fabrication, corten steel fabrication).
3. `/industries/automotive` (Targets: automotive metal fabrication Ontario, custom automotive parts fabrication, automotive sheet metal services).
4. `/industries/food-processing` (Targets: food industry metal parts, food grade metal fabrication, food processing metal equipment).
5. `/industries/material-handling` (Targets: material handling metal fabrication, metal parts for material handling).
6. `/services/custom-metal-work-ontario` (Targets: custom sheet metal parts, metal prototyping services Ontario, small scale metal fabrication).
7. `/quote/ontario-metal-fabrication` (Targets: get metal fabrication quote Ontario, request free metal fab quote, reliable fabrication supplier quote).
8. `/industries/other/sheet-metal-enclosures-ontario` (Targets: sheet metal enclosures Ontario, industrial parts supplier Ontario).
9. `/blog/eco-friendly-metal-fabrication-ontario` (Targets: eco-friendly metal fabrication Ontario; treat as campaign page with quote CTA).
10. `/services/architectural-metal-designs-ontario` (Targets: architectural metal designs Ontario, small industrial metal projects).

*Note:* For location-based, use "ontario" as a slug; expand to cities (e.g., "toronto") by integrating with existing `locations/` data.

---

## 3. Technical Structure

### 3.1 File Structure Additions
```
app/
  industries/                   # New dynamic route for industry gaps
    [industry]/
      page.tsx                 # Dynamic industry page
    page.tsx                   # Industries overview/hub (optional)
  services/
    [service]-[location]/      # New dynamic route for localized service gaps
      page.tsx
    // Existing: [service]/page.tsx, engineering/, etc.

lib/
  industries/                  # New folder for data/utils
    industry-data.ts          # Industry content (similar to location-data.ts)
    industry-utils.ts         # Helpers (e.g., getIndustryBySlug, generateIndustrySEO)

components/
  industries/                  # New reusable components
    IndustryHero.tsx
    IndustryCaseStudies.tsx
    IndustryFAQ.tsx
  // Reuse: LocationHero, ServiceAreaMap, LocalIndustries from locations/
```

### 3.2 Page Templates
All pages follow a consistent structure (inspired by `app/locations/[location]/page.tsx` and `app/services/[service]/page.tsx`):
- **Metadata Generation:** Use `generateMetadata` with dynamic SEO (e.g., title: "Sheet Metal Fabrication Ontario | Custom Services").
- **Hero Section:** Customized `<IndustryHero>` or `<LocationHero>` with keyword-optimized H1, subheading, and CTA button.
- **Main Sections (4-6 per page):**
  - Service/Industry Overview (tailored content, 300-500 words).
  - Capabilities/Process (e.g., steps for laser cutting, material options).
  - Local Tie-Ins (e.g., "Serving Ontario's Automotive Sector" with map).
  - Case Studies/Projects (2-3 examples, reuse `<NearbyProjects>`).
  - Why Choose Us (proximity, expertise, certifications).
  - FAQ (5-7 questions, reuse `<LocalFAQ>` or new `<IndustryFAQ>`).
- **Conversion Elements:** Embedded quote form (pre-fill location/industry), CTA buttons (e.g., "Get Ontario Quote").
- **Footer/Structured Data:** Include `<Footer>`, schema via `<StructuredDataScript>` (e.g., LocalBusiness or Service schema).
- **Unique Per Page:** 70% original content; inject variables from data files (e.g., industry-specific keywords, local stats).

### 3.3 Dynamic Data
- Create `industry-data.ts` (array of objects with slug, title, description, keywords, industriesServed, caseStudies).
- Utils: `getIndustryBySlug`, `generateIndustrySEO` (similar to location-utils.ts).
- For localized services: Combine service data with location data (e.g., from `location-data.ts`).

---

## 4. SEO & Campaign Optimizations

### 4.1 SEO Elements
- **URLs:** Keyword-rich (e.g., /services/sheet-metal-fabrication-ontario).
- **Titles/Descriptions:** Templates like "Steel Fabricators Ontario | Expert Services" (50-60 chars title, 150 chars desc).
- **Schema:** Add Service or LocalBusiness schema with location/industry details.
- **Internal Links:** Link to home, services, locations; add breadcrumbs.
- **Content:** Min 1,000 words unique per page; natural keyword density (2-3%).

### 4.2 Campaign Features
- **PPC Hooks:** Add UTM parsing in page.tsx (e.g., if ?utm_source=google, customize hero: "Welcome Google Ads Visitor").
- **A/B Testing:** Variants for CTAs (e.g., "Free Quote" vs. "Instant Pricing").
- **Tracking:** Integrate Analytics.tsx; track events (form submits, CTA clicks).
- **Mobile Optimization:** Responsive design; fast-loading (optimize images via `<OptimizedImage>`).

---

## 5. Implementation Steps for Claude

1. **Setup (Day 1-2):** 
   - Create new folders/routes as per 3.1.
   - Build `industry-data.ts` with data for the 10 pages (populate with placeholder content based on keywords).

2. **Build Templates (Day 3-5):**
   - Implement dynamic `app/industries/[industry]/page.tsx` (copy pattern from locations/[location]/page.tsx).
   - Add new components (e.g., IndustryHero.tsx – extend LocationHero.tsx).
   - For localized services: Implement `app/services/[service]-[location]/page.tsx` with combined data.

3. **Content & SEO (Day 6-8):**
   - Generate unique content for each page (use AI to draft based on keywords).
   - Add metadata, schema, and CTAs.

4. **Testing & Launch (Day 9-10):**
   - Test dynamic params (e.g., generateStaticParams for slugs).
   - Verify SEO (titles, schema validation).
   - Deploy to Vercel; monitor with Google Search Console.

### Dependencies
- Reuse: Next.js dynamic routes, existing components (e.g., ServiceAreaMap.tsx for local maps).
- New Packages: None (stick to existing like next/navigation).
- Edge Cases: Handle notFound() for invalid slugs; ensure accessibility (WCAG AA).

---

## 6. Success Metrics & KPIs

### 6.1 Primary KPIs
- **Organic Traffic Growth:** +50% to campaign pages within 3 months
- **Conversion Rate:** Achieve 8-12% quote form completion rate (vs. 5-7% site average)
- **Search Rankings:** Top 10 positions for primary keywords within 6 months
- **Quality Score:** PPC quality scores >7/10 for campaign landing pages

### 6.2 Secondary Metrics
- **Bounce Rate:** <40% (better than industry average of 55%)
- **Page Load Speed:** <3 seconds (Core Web Vitals compliance)
- **Local SEO Impact:** +25% "near me" search visibility
- **Revenue Attribution:** Track quote-to-project conversion for campaign sources

### 6.3 Tracking Implementation
- **Google Analytics 4:** Enhanced ecommerce events, custom conversions
- **Search Console:** Monitor click-through rates, impression growth
- **Hotjar/Similar:** Heatmaps on key campaign pages for UX optimization
- **Call Tracking:** Dynamic phone numbers for phone-based conversions

---

## 7. Content Strategy & Templates

### 7.1 Content Framework
Each page follows the **E-A-T** (Expertise, Authoritativeness, Trustworthiness) model:

**Opening Section (300-400 words):**
- Industry/service overview with local context
- Unique value proposition for Ontario market
- Primary keyword density 2-3%

**Technical Capabilities (400-500 words):**
- Detailed process descriptions
- Equipment and material specifications
- Quality certifications and standards

**Local Market Focus (200-300 words):**
- Ontario-specific industry insights
- Local supply chain advantages
- Regional case studies and testimonials

**FAQ Section (5-7 questions):**
- Address common search queries
- Include long-tail keyword variations
- Provide comprehensive technical answers

### 7.2 Content Templates

**Industry Page Template:**
```
H1: [Industry] Metal Fabrication Services in Ontario
H2: Why Ontario's [Industry] Sector Chooses [Company]
H2: Our [Industry]-Specific Capabilities
H3: Materials We Work With
H3: Quality Standards & Certifications
H2: Ontario [Industry] Project Examples
H2: Get Your [Industry] Metal Fabrication Quote
H2: Frequently Asked Questions
```

**Service-Location Page Template:**
```
H1: Professional [Service] Services in [Location]
H2: [Service] Process & Capabilities
H3: State-of-the-Art Equipment
H3: Material Options & Specifications
H2: Why Choose Our [Location] Team
H2: [Service] Projects in [Location]
H2: Get Your Free [Service] Quote Today
H2: Common [Service] Questions
```

---

## 8. Technical Requirements

### 8.1 Performance Standards
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Mobile Responsiveness:** Perfect scores on Google Mobile-Friendly Test
- **Image Optimization:** WebP format, lazy loading, responsive sizing
- **Code Splitting:** Dynamic imports for non-critical components

### 8.2 SEO Technical Implementation
```typescript
// Example metadata generation
export async function generateMetadata({ params }): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industry);
  
  return {
    title: `${industry.name} Metal Fabrication Ontario | Expert Services`,
    description: `Professional ${industry.name.toLowerCase()} metal fabrication services in Ontario. Custom solutions, fast turnaround, competitive pricing. Get your free quote today.`,
    keywords: industry.keywords.join(', '),
    openGraph: {
      title: `${industry.name} Metal Fabrication Services - Ontario`,
      description: industry.metaDescription,
      images: [`/images/industries/${industry.slug}-hero.jpg`]
    },
    alternates: {
      canonical: `https://canadianmetalfabricators.ca/industries/${industry.slug}`
    }
  };
}
```

### 8.3 Schema Markup Requirements
- **Service Schema:** Detailed service descriptions, areas served, pricing info
- **LocalBusiness Schema:** Enhanced with industry-specific details
- **FAQ Schema:** Structured Q&A for rich snippets
- **BreadcrumbList Schema:** Clear navigation hierarchy

---

## 9. Testing Strategy

### 9.1 Pre-Launch Testing
- **A/B Test Elements:**
  - Hero CTA button text ("Get Quote" vs "Free Estimate" vs "Request Pricing")
  - Quote form placement (hero vs sticky vs inline)
  - Trust signals positioning (certifications, testimonials)

- **Technical Testing:**
  - Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
  - Mobile device testing (iOS/Android, various screen sizes)
  - Page speed optimization and monitoring
  - Form functionality and validation

### 9.2 Post-Launch Optimization
- **Weekly Reviews:** Analytics data, ranking positions, conversion rates
- **Monthly Content Updates:** Fresh case studies, industry news, keyword expansion
- **Quarterly Strategy Review:** Performance against KPIs, new keyword opportunities

---

## 10. Risk Assessment & Mitigation

### 10.1 SEO Risks
**Risk:** Keyword cannibalization with existing pages  
**Mitigation:** Comprehensive content audit, strategic internal linking, unique content angles

**Risk:** Google algorithm updates affecting rankings  
**Mitigation:** Focus on E-A-T principles, diverse traffic sources, regular content quality reviews

**Risk:** Slow organic traction for new pages  
**Mitigation:** Paid promotion during initial phase, social media amplification, industry outreach

### 10.2 Technical Risks
**Risk:** Page performance issues affecting rankings  
**Mitigation:** Continuous monitoring, CDN optimization, regular performance audits

**Risk:** Mobile experience problems  
**Mitigation:** Mobile-first design approach, regular device testing, user feedback collection

---

## 11. Resource Allocation & Timeline

### 11.1 Phase 1: Foundation (Weeks 1-2)
**Development:** 25 hours
- Route setup and data structure: 8 hours
- Component development: 12 hours
- Initial content integration: 5 hours

**Content Creation:** 20 hours
- Keyword research refinement: 4 hours
- Content writing (5 pages): 12 hours
- SEO optimization: 4 hours

### 11.2 Phase 2: Expansion (Weeks 3-4)
**Development:** 15 hours
- Additional pages implementation: 10 hours
- Testing and optimization: 5 hours

**Content & Marketing:** 25 hours
- Remaining content creation: 15 hours
- PPC campaign setup: 6 hours
- Analytics and tracking setup: 4 hours

### 11.3 Ongoing Maintenance (Monthly)
- **Content Updates:** 8 hours/month
- **Performance Monitoring:** 4 hours/month
- **SEO Optimization:** 6 hours/month

---

## 12. Success Validation & Next Steps

### 12.1 30-Day Checkpoint
- All 10 initial pages live and indexed
- Basic analytics tracking functional
- Initial ranking improvements for targeted keywords

### 12.2 90-Day Review
- 50% of target keywords ranking on page 1-2
- Conversion rate meeting or exceeding targets
- Organic traffic growth trend established

### 12.3 Expansion Planning
Based on initial success metrics:
- Add 10 more location-specific pages (Toronto, Ottawa, etc.)
- Develop seasonal campaign pages (winter services, emergency repairs)
- Create service-specific calculators and tools for enhanced engagement

---

**Document Status:** Complete and Ready for Implementation  
**Next Action:** Begin Phase 1 development with priority on high-volume keyword targets
