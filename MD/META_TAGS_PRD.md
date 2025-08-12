# Meta Tags & Head Optimizations PRD

## Overview
This PRD outlines the comprehensive implementation and enhancement of dynamic meta tags, titles, descriptions, Open Graph (OG) tags, and Twitter cards for the Canadian Metal Fabricators website. The goal is to improve SEO rankings, social sharing previews, and overall site metadata consistency across all pages.

These optimizations build upon the existing robust foundation in `config/seo-metadata.ts`, `config/business-info.ts`, page-level metadata exports, and the root `layout.tsx`.

### Current State Assessment
**Strengths:**
- Solid foundation with `defaultMetadata` in `config/seo-metadata.ts`
- Comprehensive business info data structure
- Good OG and Twitter card base implementation
- Page-specific metadata in `pageMetadata` object
- Service-specific metadata generation function

**Gaps to Address:**
- Missing dynamic metadata for location pages
- Incomplete industry-specific pages metadata
- No structured schema markup for specific page types
- Limited multilingual support implementation
- Missing JSON-LD structured data for services/locations
- No image optimization for social sharing
- Missing breadcrumb schema
- Limited local SEO implementation

### Core Requirements
All meta tags must:
- Be dynamic based on page content (location, service, industry, blog posts)
- Follow SEO best practices (titles: 50-60 chars, descriptions: 150-160 chars)
- Include canonical URLs with proper trailing slash handling
- Support multilingual content (en-CA, fr-CA) with hreflang
- Use data from `businessInfo` and location/service data files
- Include proper structured data (JSON-LD) for enhanced search results
- Support rich snippets for local business, services, and articles
- Include proper geo-tagging for location-based pages

## 1. Dynamic Titles
### Purpose
Provide unique, keyword-optimized titles for each page to improve click-through rates in search results.

### Existing Implementation
- Centralized in `config/seo-metadata.ts`
- Page-level `export const metadata: Metadata` in pages like `app/page.tsx`
- Title templates in root layout

### Enhancements Needed
- Implement dynamic titles for all dynamic pages (locations, services, industries)
- Use format: "[Specific] | [Category] | Canadian Metal Fabricators"
- Pull from data files (e.g., location-data.ts metaTitle)

### Example
For a location page:
```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  return {
    title: location.metaTitle,
  };
}
```

### Implementation Steps
1. Add `generateMetadata` functions to all dynamic route pages
2. Use consistent templating across the site
3. Ensure titles are unique and include primary keywords

## 2. Dynamic Descriptions
### Purpose
Provide compelling meta descriptions to encourage clicks from search results.

### Existing Implementation
- Part of metadata exports
- Some pages have static descriptions

### Enhancements Needed
- Make descriptions dynamic, incorporating page-specific details
- Include calls-to-action and key benefits
- Pull from data files (e.g., location-data.ts metaDescription)

### Example
```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  return {
    description: location.metaDescription,
  };
}
```

### Implementation Steps
1. Update all pages to use dynamic descriptions
2. Ensure they are optimized for length and keywords
3. Add fallback descriptions

## 3. Open Graph (OG) Tags
### Purpose
Control how content appears when shared on social platforms like Facebook.

### Existing Implementation
- Basic OG tags in some metadata exports
- Images from businessInfo

### Enhancements Needed
- Add full OG suite: og:title, og:description, og:image, og:url, og:type, og:locale
- Dynamic based on page content
- Multiple image sizes for better compatibility
- Locale support (en_CA, fr_CA)

### Example Structure
```tsx
{
  openGraph: {
    title: dynamicTitle,
    description: dynamicDesc,
    url: canonicalUrl,
    siteName: businessInfo.name,
    images: [
      { url: primaryImage, width: 1200, height: 630 },
      { url: fallbackImage, width: 800, height: 600 }
    ],
    locale: 'en_CA',
    type: 'website',
  }
}
```

### Implementation Steps
1. Enhance metadata exports with OG objects
2. Add image optimization for OG sizes
3. Ensure absolute URLs for images and pages

## 4. Twitter Cards
### Purpose
Optimize sharing previews on Twitter/X.

### Existing Implementation
- Basic implementation in some pages

### Enhancements Needed
- Add twitter:card, twitter:title, twitter:description, twitter:image
- Support large image summaries
- Dynamic content matching OG tags

### Example Structure
```tsx
{
  twitter: {
    card: 'summary_large_image',
    title: dynamicTitle,
    description: dynamicDesc,
    images: [primaryImage],
    creator: '@handle',
  }
}
```

### Implementation Steps
1. Add twitter object to metadata exports
2. Align with OG data for consistency
3. Add site and creator handles from businessInfo

## 5. Structured Data & Schema Markup
### Purpose
Enhance search result appearances with rich snippets and improve local SEO visibility.

### Implementation Needed
- LocalBusiness schema for location pages
- Service schema for individual service pages
- Organization schema enhancements
- BreadcrumbList schema for navigation
- Article schema for blog posts
- FAQ schema where applicable
- Review/Rating schema integration

### Example Structure
```tsx
const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Canadian Metal Fabricators - ${location.name}`,
  "address": location.address,
  "geo": location.coordinates,
  "telephone": businessInfo.telephone,
  "openingHours": businessInfo.openingHours,
  "priceRange": businessInfo.priceRange
}
```

## 6. Performance Optimizations
### Purpose
Ensure meta tag enhancements don't impact site performance.

### Requirements
- Lazy load non-critical metadata
- Optimize OG images (WebP format, proper sizing)
- Implement metadata caching for static pages
- Minimize metadata generation overhead
- Use Next.js metadata API efficiently

## 7. Local SEO Enhancements
### Purpose
Improve visibility in location-based searches across Ontario.

### Implementation
- Geo-tagging meta tags for location pages
- Local business structured data
- NAP (Name, Address, Phone) consistency
- Local keywords in meta descriptions
- Service area markup
- Google Business Profile integration signals

## Testing and Validation
### Automated Testing
- Implement metadata unit tests
- Add E2E tests for dynamic metadata generation
- Set up meta tag validation in CI/CD pipeline
- Monitor Core Web Vitals impact

### Manual Testing Tools
- Facebook Sharing Debugger for OG tags
- Twitter Card Validator for Twitter cards
- Google Rich Results Test for structured data
- Search Console for metadata issues and impressions
- Screaming Frog for comprehensive meta audit
- Verify dynamic generation on staging environment

### Performance Testing
- Lighthouse SEO audit scores
- Page speed impact assessment
- Mobile-first indexing validation
- International targeting verification

## Success Metrics
### SEO KPIs
- Organic search impressions (+25%)
- Click-through rates from SERP (+15%)
- Average search position improvement
- Featured snippet captures
- Local search visibility increase

### Technical Metrics
- Meta tag completeness (100% coverage)
- Rich snippet appearance rates
- Social sharing engagement metrics
- Page load time impact (<100ms)

## Timeline & Prioritization
### Phase 1 (Week 1-2): Foundation
- Audit existing metadata implementation
- Enhance location-based dynamic metadata
- Implement service page metadata improvements
- Add basic structured data for key pages

### Phase 2 (Week 3): Social & Rich Results
- Complete OG and Twitter card optimization
- Implement comprehensive schema markup
- Add breadcrumb structured data
- Optimize social sharing images

### Phase 3 (Week 4): Testing & Optimization
- Comprehensive testing across all page types
- Performance optimization and caching
- Search Console and analytics integration
- Full production deployment and monitoring

### Phase 4 (Week 5): Advanced Features
- Multilingual metadata implementation
- Advanced local SEO features
- Dynamic FAQ schema
- Industry-specific metadata enhancements

## Technical Implementation Notes
### File Structure Changes
```
config/
├── seo-metadata.ts (enhance existing)
├── schema-generators.ts (new)
├── location-metadata.ts (new)
└── metadata-utils.ts (new)

components/
├── StructuredData.tsx (enhance existing)
├── MetaTags.tsx (new)
└── BreadcrumbSchema.tsx (new)
```

### Integration Points
- Leverage existing `businessInfo` data structure
- Extend `generateServiceMetadata` function
- Create location-specific metadata generators
- Integrate with CMS for blog post metadata
- Connect with analytics for performance tracking
