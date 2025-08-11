# Schema Markup Implementation PRD - Enhanced

## Overview
This enhanced PRD outlines the comprehensive implementation of key schema markups for the Canadian Metal Fabricators website. Based on codebase analysis, we will enhance existing schemas and implement location-specific and service-specific structured data to improve SEO, search visibility, and rich snippet appearances.

The implementation builds upon existing components in `lib/structured-data.ts`, `components/StructuredData*.tsx`, and location/industry-specific components.

All schemas must:
- Follow schema.org guidelines and validate successfully
- Use JSON-LD format with proper @context and @type
- Be injected via `StructuredDataScript` component
- Reference the main organization ID (`${businessInfo.url}/#organization`)
- Include areaServed data from businessInfo or location-specific data
- Use absolute URLs throughout

## Current Implementation Analysis

### Existing Schema Functions (lib/structured-data.ts)
✅ `generateOrganizationSchema()` - Comprehensive business info with LocalBusiness type
✅ `generateWebSiteSchema()` - Site-wide schema with search functionality  
✅ `generateBreadcrumbSchema()` - Navigation breadcrumbs
✅ `generateServiceSchema()` - Basic service information
✅ `generateFAQSchema()` - FAQ page schema
✅ Additional schemas: Product, Article, Video, HowTo, Event

### Existing Components
✅ `StructuredData.tsx` & `StructuredDataScript.tsx` - Schema injection components
✅ `Breadcrumbs.tsx` - Navigation with schema integration
✅ `LocalFAQ.tsx` - Location-specific FAQ component with dynamic content
✅ `IndustryFAQ.tsx` - Industry-specific FAQ component

### Data Structures
✅ `businessInfo` config - Comprehensive business data with geo, services, reviews
✅ `LocationData` interface - Location coordinates, FAQs, content, industry focus
✅ `LocationFAQ` interface - Structured FAQ data

## 1. LocalBusiness Schema Enhancement

### Current State
- Main organization schema includes LocalBusiness type
- No location-specific LocalBusiness schemas for location pages
- BusinessInfo includes comprehensive geo and service data

### Enhancement Goals
- Create location-specific LocalBusiness schemas
- Link location schemas to parent organization
- Include location coordinates and service area
- Add location-specific service offerings

### Enhanced Implementation

#### New Function: `generateLocalBusinessSchema(location: LocationData)`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "${businessInfo.url}/#location-${location.slug}",
  "name": "Canadian Metal Fabricators - ${location.city}",
  "parentOrganization": { "@id": "${businessInfo.url}/#organization" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location.city,
    "addressRegion": location.province,
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates", 
    "latitude": location.coordinates.lat,
    "longitude": location.coordinates.lng
  },
  "areaServed": {
    "@type": "City",
    "name": location.city
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.lat,
      "longitude": location.coordinates.lng
    },
    "geoRadius": "${location.distanceFromFacility}km"
  },
  "makesOffer": businessInfo.hasOfferCatalog.itemListElement.map(item => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service", 
      "name": item.name,
      "description": item.description
    },
    "areaServed": { "@type": "City", "name": location.city }
  })),
  "telephone": businessInfo.telephone,
  "email": businessInfo.email,
  "url": `${businessInfo.url}/locations/${location.slug}`,
  "priceRange": businessInfo.priceRange,
  "openingHoursSpecification": businessInfo.openingHoursSpecification,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
  }
}
```

#### Implementation Steps
1. **Create `generateLocalBusinessSchema(location: LocationData)` in `lib/structured-data.ts`**
2. **Update `app/locations/[location]/page.tsx` to include schema**
3. **Test with Google Rich Results Test**

## 2. Service Schema Enhancement

### Current State  
- Basic `generateServiceSchema()` function exists
- Service pages identified: dynamic [service] route + specialized Ontario pages
- No location-aware service schemas

### Service Pages Found
- `app/services/[service]/page.tsx`
- `app/services/sheet-metal-fabrication-ontario/page.tsx`
- `app/services/steel-fabrication-ontario/page.tsx`  
- `app/services/custom-metal-work-ontario/page.tsx`
- Plus specialized service pages (welding, finishing, engineering, etc.)

### Enhancement Goals
- Add comprehensive service details and offers
- Include geo-targeting for location-specific services
- Add service availability and delivery information
- Include warranty and quality assurance data

### Enhanced Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "${businessInfo.url}/services/${serviceSlug}#service",
  "name": "${serviceName}",
  "description": "${serviceDescription}",
  "url": "${businessInfo.url}/services/${serviceSlug}",
  "image": "${serviceImage}",
  "provider": { "@id": "${businessInfo.url}/#organization" },
  "serviceType": "${serviceName}",
  "category": "Metal Fabrication",
  "areaServed": businessInfo.areaServed.map(area => ({
    "@type": "City",
    "name": area  
  })),
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "${businessInfo.url}/quote",
    "serviceSmsNumber": businessInfo.telephone
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "${serviceName} Options",
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "${serviceName}"
      },
      "priceRange": businessInfo.priceRange,
      "priceCurrency": "CAD",
      "availability": "InStock", 
      "deliveryLeadTime": "P3-7D",
      "warranty": {
        "@type": "WarrantyPromise",
        "durationOfWarranty": "P1Y"
      }
    }]
  },
  "serviceArea": businessInfo.serviceArea,
  "hoursAvailable": businessInfo.openingHoursSpecification
}
```

#### Implementation Steps
1. **Enhance `generateServiceSchema()` with location and offer parameters**
2. **Add schema to all service page components**  
3. **Create service metadata structure for consistent data**

## 3. FAQPage Schema Integration

### Current State
- `generateFAQSchema()` function exists
- `LocalFAQ` component renders location FAQs with dynamic content
- Location data includes structured FAQ arrays
- General FAQs added if location FAQs insufficient

### LocalFAQ Component Analysis
- Combines `location.faqs` with general FAQs
- Dynamic content with location.city interpolation
- Minimum 4 FAQs guaranteed per page
- Rich FAQ interface with expand/collapse

### Enhancement Goals
- Integrate FAQ schema directly into FAQ components
- Create reusable FAQSchema component
- Add FAQ schema to all pages with FAQ sections
- Include page context and authority signals

### Enhanced FAQ Schema

```json
{
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  "@id": "${pageUrl}#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "@id": "${pageUrl}#faq-${faq.id}",
      "name": "${faq.question}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "${faq.answer}",
        "dateCreated": "2024-01-01",
        "upvoteCount": 5,
        "author": {
          "@type": "Organization", 
          "name": "Canadian Metal Fabricators"
        }
      }
    }
  ],
  "about": {
    "@type": "Service",
    "name": "Sheet Metal Fabrication",
    "provider": { "@id": "${businessInfo.url}/#organization" }
  }
}
```

#### Implementation Steps  
1. **Create reusable `FAQSchema` component**
2. **Update `LocalFAQ.tsx` to include schema generation**
3. **Update `IndustryFAQ.tsx` with schema integration**
4. **Audit FAQ usage across all page types**

## 4. BreadcrumbList Schema Enhancement

### Current State
- `generateBreadcrumbSchema()` properly implemented
- Correct structure with position, name, item
- Used in `Breadcrumbs.tsx` component

### Enhancement Goals
- Ensure absolute URLs throughout
- Add WebPage objects for richer context
- Audit consistent breadcrumb usage
- Add unique identifiers for better tracking

### Enhanced Breadcrumb Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList", 
  "@id": "${pageUrl}#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "@id": "${businessInfo.url}/#breadcrumb-1", 
      "position": 1,
      "name": "Home",
      "item": {
        "@type": "WebPage",
        "@id": "${businessInfo.url}/",
        "url": "${businessInfo.url}/",
        "name": "Home"
      }
    }
  ]
}
```

#### Implementation Steps
1. **Enhance `generateBreadcrumbSchema()` with WebPage objects**
2. **Audit breadcrumb usage across all page types**
3. **Add URL validation for absolute URLs**

## Implementation Timeline & Priority

### Phase 1: Core Schema Functions (Week 1)
**Priority: HIGH**
- [ ] Create `generateLocalBusinessSchema(location: LocationData)`
- [ ] Create reusable `FAQSchema` component  
- [ ] Enhance `generateServiceSchema()` with location support
- [ ] Test core functions with sample data

### Phase 2: Component Integration (Week 2)  
**Priority: HIGH**
- [ ] Integrate LocalBusiness schema into location pages
- [ ] Add FAQSchema to LocalFAQ component
- [ ] Add enhanced Service schema to service pages
- [ ] Test rich results for implemented schemas

### Phase 3: Breadcrumb & Validation (Week 3)
**Priority: MEDIUM** 
- [ ] Enhance breadcrumb schema with WebPage objects
- [ ] Audit breadcrumb usage site-wide
- [ ] Create schema validation testing script
- [ ] Fix any validation errors found

### Phase 4: Testing & Optimization (Week 4)
**Priority: MEDIUM**
- [ ] Comprehensive rich results testing
- [ ] Search Console monitoring setup
- [ ] Performance impact assessment
- [ ] Documentation and handover

## Testing & Validation Protocol

### Automated Validation
1. **Schema Validation Script**
   ```bash
   # Create Node.js script for automated schema validation
   node scripts/validate-schemas.js
   ```

2. **Rich Results Testing**
   - Google Rich Results Test for each page type
   - Mobile and desktop validation
   - Screenshot documentation of results

### Manual Testing Checklist
- [ ] All schemas validate with schema.org validator
- [ ] No duplicate @id values across schemas  
- [ ] All URLs are absolute and functional
- [ ] FAQ schemas generate rich snippets
- [ ] LocalBusiness schemas appear in local results
- [ ] Service schemas enhance SERP appearance
- [ ] Breadcrumb schemas improve navigation display

### Success Metrics
1. **Technical KPIs**
   - 0 schema validation errors in Search Console
   - 100% rich results test pass rate
   - All target pages have appropriate schemas

2. **SEO Performance**  
   - Increased rich snippet appearances
   - Improved local search visibility
   - Enhanced service page rankings
   - Better click-through rates from SERP features

## Files to Modify

### Core Implementation
- [ ] `/lib/structured-data.ts` - Add new schema functions
- [ ] `/components/schemas/FAQSchema.tsx` - New reusable component
- [ ] `/components/locations/LocalFAQ.tsx` - Add schema integration
- [ ] `/components/industries/IndustryFAQ.tsx` - Add schema integration

### Page Updates
- [ ] `/app/locations/[location]/page.tsx` - LocalBusiness schema  
- [ ] `/app/services/[service]/page.tsx` - Enhanced service schema
- [ ] `/app/services/*/page.tsx` - All specialized service pages
- [ ] `/components/Breadcrumbs.tsx` - Enhanced breadcrumb schema

### Testing & Validation
- [ ] `/scripts/validate-schemas.js` - New validation script
- [ ] `/tests/schema.test.js` - Schema unit tests
- [ ] Update existing tests affected by schema changes

This enhanced PRD provides the detailed technical specifications needed to implement comprehensive schema markup improvements that will significantly boost the site's search visibility and rich snippet potential.