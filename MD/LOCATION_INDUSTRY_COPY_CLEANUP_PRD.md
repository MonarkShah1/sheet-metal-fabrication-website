# Product Requirements Document (PRD) for Cleaning Up Copy on Location and Industry Pages

## 1. Overview

This PRD details the requirements for updating the copy on our location and industry pages to remove irrelevant mentions (e.g., search volume, competition levels) that do not align with our Ideal Customer Profile (ICP). These elements appear to be internal SEO data and distract from user-focused content. The changes will ensure all copy emphasizes reliability, simplicity, and solutions to supplier headaches in sheet metal fabrication, making the pages more relevant to decision-makers at multinational companies in Ontario.

**Project Name:** Location and Industry Pages Copy Cleanup

**Version:** 2.0 (Enhanced)

**Date:** August 2025

**Stakeholders:** Website owner, development team, SEO team, UX team

**Priority Level:** High - Directly impacts user experience and conversion optimization

## 2. Goals and Objectives

**Primary Goal:** Streamline page content to focus on ICP needs, removing any "weird" or non-relevant mentions like search volume, competition level, and target location displays that are not customer-facing.

**Key Metrics for Success:**
- All irrelevant SEO metrics removed from user interfaces
- Copy revised to be at least 80% focused on ICP pain points (e.g., consistent quality, quick turnaround, simplified outsourcing)
- No regressions in page performance or SEO structure (metadata can retain these internally if needed)
- Deployment-ready changes with minimal code edits
- **Enhanced Success Metrics:**
  - Page load speed maintained or improved (target: <3s LCP)
  - User engagement metrics improved (time on page, scroll depth)
  - Conversion rate optimization for quote requests (+10% target)
  - Core Web Vitals scores maintained (all pages pass)
  - Mobile responsiveness and accessibility compliance (WCAG 2.1 AA)
  - Search rankings preserved for target keywords

**Market Positioning:** Position the company as a reliable partner solving fundamental manufacturing challenges, without internal metrics that could confuse users.

**SEO Considerations:**
- Maintain structured data and schema markup
- Preserve internal linking structure and URL hierarchy  
- Keep keyword density optimized for target terms
- Ensure meta descriptions and titles remain compelling and CTR-optimized

## 3. Target Audience (ICP)

**Primary ICP:** Decision makers at multinational companies with operations in Ontario frustrated with supplier headaches in sheet metal fabrication outsourcing (e.g., inconsistent quality, delays, complex processes).

**Needs and Pain Points:**
- Trust and reliability: Copy should highlight unshakeable execution and mastery of fundamentals.
- Simplicity: Avoid technical jargon or irrelevant data like search volumes.
- Relevance: Focus on local expertise, industry-specific solutions, and quick quoting.

**User Journey:** Visitors land on location/industry pages → Read tailored, ICP-focused copy → Engage with CTAs for quotes or contact.

**Enhanced User Experience Considerations:**
- **Cognitive Load Reduction:** Remove technical jargon and internal metrics that create confusion
- **Trust Building:** Emphasize credibility indicators (certifications, experience, case studies)
- **Mobile-First Design:** Ensure copy is scannable and digestible on mobile devices
- **Local Relevance:** Strengthen geographical context without overwhelming with data
- **Call-to-Action Optimization:** Clear, benefit-driven CTAs that guide users to next steps

## 4. Key Features and Prioritization

Prioritize minimal, targeted edits to affected files. Phases:

**Phase 1: Industry Pages Cleanup (High Priority)**
- Remove displays of monthly search volume, competition level, and target location from the industry overview section.

**Phase 2: Location Pages Cleanup**
- Review and revise copy in location-data.ts to ensure alignment with ICP (e.g., remove any non-relevant metrics if present).

**Phase 3: Enhanced Content Optimization**
- Implement conversion-focused copy improvements
- Add trust signals and credibility elements
- Optimize heading structure for better UX and SEO
- Implement schema markup enhancements

**Phase 4: Testing and Validation**
- Ensure pages render correctly and copy flows naturally
- Cross-browser compatibility testing
- Mobile responsiveness validation
- Performance testing (Core Web Vitals)
- A/B testing setup for key CTAs
- Accessibility audit and compliance check

**Phase 5: Analytics and Monitoring Setup**
- Implement enhanced tracking for user engagement
- Set up conversion funnel monitoring
- Create performance benchmarks for comparison

## 5. Design and Content Requirements

- **Tone:** Honest, professional, educational—focus on solving basics without hype.
- **Content Changes:** Replace irrelevant sections with ICP-focused paragraphs (e.g., emphasize local advantages, reliability).
- **SEO Preservation:** Keep internal data in data files if needed for metadata, but hide from UI.

### Proposed Code Changes

#### Industry Page UI Cleanup

Remove the "Key Industry Insights" section displaying SEO metrics. This is in the industry dynamic page component.

```106:126:app/industries/[industry]/page.tsx
              </div>
              {/* Remove this entire div for Key Industry Insights */}
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Industry Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Monthly Search Volume: {industry.monthlySearchVolume.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Competition Level: {industry.competitionLevel}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Target Location: {industry.targetLocation}</span>
                  </div>
                </div>
              </div> */}
            </div>
```

#### Industry Data File Adjustments (Optional)

If monthlySearchVolume, competitionLevel, etc., are no longer needed in UI, consider removing them from the data interface and data file to clean up, but retain if used in metadata.

```3:10:lib/industries/industry-types.ts
export interface Industry {
  slug: string;
  name: string;
  // Remove these if not used elsewhere
  // metaTitle: string;
  // metaDescription: string;
  // h1: string;
  // keywords: string[];
  // targetLocation: string;
  // monthlySearchVolume: number;
  // competitionLevel: 'Low' | 'Medium' | 'High';
  content: {
```

For the data file, similar removals can be applied across industry entries in lib/industries/industry-data.ts, e.g., for the 'automotive' entry.

#### Location Pages Review

No direct mentions of search volume found, but ensure content in location-data.ts focuses on ICP. Example revision for a location intro:

```22:22:lib/locations/location-data.ts
  // Existing: intro: "Some intro with potential irrelevant data"
  // Revised: intro: "Reliable sheet metal fabrication services solving supplier challenges for Ontario manufacturers."
```

## 6. Technical Requirements

**Frontend Framework:**
- **Framework:** Next.js 14+ with App Router – Ensure changes are compatible with existing dynamic routes
- **TypeScript:** Maintain type safety throughout all modifications
- **Component Architecture:** Preserve existing component structure and props interfaces

**Performance Requirements:**
- **Core Web Vitals:** All pages must pass CWV thresholds
- **Lighthouse Score:** Maintain 90+ scores across all metrics
- **Bundle Size:** No increase in JavaScript bundle size from content changes
- **Image Optimization:** Ensure all images use Next.js Image component with proper sizing

**SEO Technical Requirements:**
- **Structured Data:** Maintain and enhance JSON-LD schema markup
- **Meta Tags:** Preserve or improve meta title/description optimization
- **Internal Linking:** Maintain existing link equity and navigation structure
- **Sitemap:** Update sitemap.xml if URL structures change
- **Robots.txt:** Ensure crawlability is maintained

**Accessibility Requirements:**
- **WCAG 2.1 AA Compliance:** All content changes must meet accessibility standards
- **Semantic HTML:** Proper heading hierarchy and semantic elements
- **Screen Reader Compatibility:** Alt text and ARIA labels where needed
- **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible

**Testing Requirements:**
- **Unit Tests:** Component testing for UI changes
- **Integration Tests:** End-to-end testing for user flows
- **Visual Regression Testing:** Screenshot comparison for UI consistency  
- **Performance Testing:** Automated Lighthouse CI integration
- **Cross-browser Testing:** Chrome, Firefox, Safari, Edge compatibility

**Deployment Requirements:**
- **Git Workflow:** Feature branch → PR → Review → Merge to main
- **Vercel Integration:** Ensure preview deployments work correctly
- **Environment Variables:** No new environment variables required
- **Rollback Plan:** Ability to quickly revert changes if issues arise

## 7. Timeline and Milestones

**Week 1: Content Analysis and Phase 1 Implementation**
- Day 1-2: Audit existing content and identify all instances requiring cleanup
- Day 3-5: Implement Phase 1 (Industry Pages Cleanup)
- Weekend: Initial testing and review

**Week 2: Phase 2 and Enhanced Optimization**
- Day 1-3: Implement Phase 2 (Location Pages Cleanup)
- Day 4-5: Phase 3 (Enhanced Content Optimization)

**Week 3: Testing and Quality Assurance**
- Day 1-3: Phase 4 (Comprehensive Testing and Validation)
- Day 4-5: Bug fixes and refinements

**Week 4: Launch and Monitoring**
- Day 1-2: Phase 5 (Analytics and Monitoring Setup)
- Day 3: Production deployment
- Day 4-5: Post-launch monitoring and optimization

## 8. Risk Assessment and Mitigation

**High Risk:**
- **SEO Impact:** Changes affecting search rankings
  - *Mitigation:* Gradual rollout, close monitoring of search console data
- **Performance Regression:** Content changes affecting page speed
  - *Mitigation:* Performance testing before deployment

**Medium Risk:**
- **User Experience Disruption:** Layout breaking on different devices
  - *Mitigation:* Comprehensive responsive testing
- **Conversion Rate Impact:** New copy performing worse than existing
  - *Mitigation:* A/B testing framework and rollback plan

**Low Risk:**
- **Browser Compatibility Issues:** Content rendering inconsistently
  - *Mitigation:* Cross-browser testing protocol

## 9. Success Measurement and KPIs

**Pre-Launch Baseline Metrics:**
- Current page load speeds and Core Web Vitals scores
- Existing conversion rates for quote requests
- Current bounce rates and time on page
- Search ranking positions for target keywords

**Post-Launch Success Metrics:**
- **User Engagement:** +15% increase in time on page, +20% scroll depth
- **Conversion Optimization:** +10% increase in quote request conversions  
- **Performance:** Maintain or improve Lighthouse scores (90+)
- **SEO:** Preserve or improve search rankings within 30 days
- **Technical:** Zero accessibility violations, 100% mobile compatibility

**Monitoring Dashboard:**
- Google Analytics 4 enhanced ecommerce tracking
- Search Console performance monitoring
- Core Web Vitals tracking via CrUX data
- Hotjar/equivalent for user behavior insights

This enhanced PRD provides comprehensive guidance for both frontend development and SEO optimization while maintaining focus on the core objective of cleaning up irrelevant copy to better serve the target ICP.
