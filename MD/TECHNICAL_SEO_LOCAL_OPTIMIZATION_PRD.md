# Technical SEO Improvements PRD - Canadian Metal Fabricators
## Focus: Local SEO Optimization

### Document Version: 1.0
### Date: December 2024
### Priority: HIGH - Local SEO Implementation

---

## 1. EXECUTIVE SUMMARY

This PRD outlines critical technical SEO improvements for the Canadian Metal Fabricators website, with a primary focus on local SEO optimization. The implementation will improve local search visibility, fix technical SEO issues, and enhance user experience for location-based searches.

### Current State
- Basic SEO implementation exists but lacks local optimization
- Service pages have incomplete metadata
- No location-specific landing pages
- Missing critical schema markup elements
- Images lack alt text and optimization

### Target State
- Complete local SEO implementation with city-specific pages
- Full schema markup coverage
- Optimized images with proper alt text
- Enhanced tracking and analytics
- Improved Core Web Vitals scores

---

## 2. PRIORITY 1: LOCAL SEO IMPLEMENTATION (CRITICAL)

### 2.1 Location Landing Pages

**Requirement**: Create dedicated location pages for each service area

**Implementation**:
```
Create new pages at:
- /locations/mississauga
- /locations/toronto  
- /locations/brampton
- /locations/oakville
- /locations/burlington
- /locations/hamilton
- /locations/gta (Greater Toronto Area overview)
```

**Each location page MUST include**:
- Unique H1: "Sheet Metal Fabrication Services in [City], Ontario"
- Minimum 500 words of unique, location-specific content
- Local business schema with geo-coordinates
- Embedded Google Map with directions
- Local phone number (if available) or main number with location extension
- 3-5 local customer testimonials/case studies
- Local compliance and regulations section
- Nearby landmarks and service radius
- City-specific keywords naturally integrated
- Internal links to relevant service pages
- NAP (Name, Address, Phone) in footer

**Acceptance Criteria**:
- [ ] All location pages created and accessible
- [ ] Each page has unique content (no duplicate content)
- [ ] Schema validation passes for LocalBusiness
- [ ] Pages indexed in Google Search Console
- [ ] Local keywords ranking improvement

### 2.2 Enhanced Local Business Schema

**Requirement**: Update business-info.ts with comprehensive local data

**Add to config/business-info.ts**:
```javascript
export const businessInfo = {
  // ... existing fields ...
  
  // ADD THESE NEW FIELDS:
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.6075,
      longitude: -79.6499
    },
    geoRadius: '100km'
  },
  
  departments: [
    {
      name: 'Sales Department',
      telephone: '+1-647-407-0171',
      email: 'sales@canadianmetalfab.com'
    },
    {
      name: 'Technical Support',
      telephone: '+1-647-407-0171',
      email: 'support@canadianmetalfab.com'
    }
  ],
  
  specialOpeningHours: [
    {
      '@type': 'OpeningHoursSpecification',
      validFrom: '2024-12-24',
      validThrough: '2024-12-25',
      opens: '00:00',
      closes: '00:00',
      dayOfWeek: ['Monday', 'Tuesday'],
      description: 'Closed for Christmas'
    }
  ],
  
  hasMap: 'https://maps.google.com/?q=Canadian+Metal+Fabricators+Mississauga',
  
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'John Smith'
      },
      reviewBody: 'Excellent quality and service...'
    }
  ],
  
  slogan: 'Truth in Fundamentals',
  
  actionableFeedbackPolicy: 'https://canadianmetalfab.com/feedback',
  
  publicAccess: true,
  
  smokingAllowed: false,
  
  photo: [
    {
      '@type': 'ImageObject',
      url: 'https://canadianmetalfab.com/images/facility-exterior.jpg',
      caption: 'Canadian Metal Fabricators facility exterior'
    },
    {
      '@type': 'ImageObject', 
      url: 'https://canadianmetalfab.com/images/workshop.jpg',
      caption: 'Modern workshop with laser cutting equipment'
    }
  ]
}
```

---

## 3. PRIORITY 2: SERVICE PAGE SEO FIXES (HIGH)

### 3.1 Fix Service Page Metadata

**Requirement**: Implement proper metadata for ALL service pages

**Files to update**:
- `/app/services/engineering/page.tsx`
- `/app/services/smart-sourcing/page.tsx`
- `/app/services/laser-cutting-bending/page.tsx`
- `/app/services/welding/page.tsx`
- `/app/services/finishing/page.tsx`
- `/app/services/[service]/page.tsx` (dynamic route)

**Implementation for each service page**:
```typescript
import { Metadata } from 'next'
import { pageMetadata } from '@/config/seo-metadata'
import { businessInfo } from '@/config/business-info'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  ...pageMetadata.services.[serviceName], // Use specific service metadata
  alternates: {
    canonical: `${businessInfo.url}/services/[service-slug]`,
  },
}

// In component:
const breadcrumbItems = [
  { name: 'Home', url: businessInfo.url },
  { name: 'Services', url: `${businessInfo.url}/services` },
  { name: '[Service Name]', url: `${businessInfo.url}/services/[service-slug]` }
]

const structuredData = [
  generateBreadcrumbSchema(breadcrumbItems),
  generateServiceSchema({
    name: '[Service Name]',
    description: '[Unique service description]',
    url: `${businessInfo.url}/services/[service-slug]`,
    image: `${businessInfo.url}/images/[service-image].jpg`,
    areaServed: businessInfo.areaServed
  })
]
```

**Acceptance Criteria**:
- [ ] All service pages have unique metadata
- [ ] Breadcrumbs visible on all service pages
- [ ] Structured data validates without errors
- [ ] Canonical URLs properly set
- [ ] Meta descriptions unique and under 160 characters

### 3.2 Add Breadcrumb Navigation

**Requirement**: Implement breadcrumbs on ALL pages

**Pages requiring breadcrumbs**:
- All service pages
- Quote page
- Contact page
- About page
- Blog pages
- Location pages (new)

**Implementation**:
```typescript
<Breadcrumbs items={breadcrumbItems} className="mb-8" />
```

---

## 4. PRIORITY 3: IMAGE OPTIMIZATION (HIGH)

### 4.1 Add Alt Text to All Images

**Requirement**: Every image must have descriptive alt text

**Alt Text Guidelines**:
- Describe what's in the image
- Include relevant keywords naturally
- Keep under 125 characters
- Don't start with "image of" or "picture of"
- Be specific about metal fabrication processes shown

**Example Alt Texts**:
```typescript
// Hero images
alt="CNC laser cutting machine processing steel sheet metal"
alt="AWS certified welder performing TIG welding on aluminum"
alt="Powder coating booth applying finish to metal parts"

// Service images
alt="Precision bent metal brackets manufactured in our Mississauga facility"
alt="Quality inspection of laser cut stainless steel components"
alt="CAD engineering design for custom metal fabrication"

// Facility images
alt="Canadian Metal Fabricators 30,000 sq ft facility in Mississauga"
alt="ISO 9001 certified metal fabrication workshop"
```

### 4.2 Create Missing Open Graph Images

**Requirement**: Create optimized social sharing images

**Required Images**:
```
/public/images/
  - og-image.jpg (1200x630px) - Main sharing image
  - og-image-square.jpg (1200x1200px) - Square format
  - og-services.jpg (1200x630px) - Services page
  - og-quote.jpg (1200x630px) - Quote page
  - og-contact.jpg (1200x630px) - Contact page
```

**Image Requirements**:
- Include company logo
- Use brand colors (#1E40AF, #EA580C)
- Add tagline: "Truth in Fundamentals"
- Include call-to-action text
- Optimize file size < 200KB

### 4.3 Implement Lazy Loading

**Requirement**: Update OptimizedImage component

**Update components/OptimizedImage.tsx**:
```typescript
export function OptimizedImage({
  // ... existing props
  loading = 'lazy', // Change default from conditional to lazy
  priority = false,
  // ... rest
}) {
  // Add intersection observer for better lazy loading
  // Implement blur placeholder for all images
  // Add srcset for responsive images
}
```

---

## 5. PRIORITY 4: TECHNICAL SEO FIXES (MEDIUM)

### 5.1 Fix Canonical URLs

**Requirement**: Add canonical URLs to all pages

**Pages missing canonicals**:
- `/contact/page.tsx`
- All service subpages
- Quote page
- Blog pages

**Implementation**:
```typescript
export const metadata: Metadata = {
  // ... other metadata
  alternates: {
    canonical: `${businessInfo.url}/[page-path]`,
  },
}
```

### 5.2 Update Robots.txt

**Requirement**: Fix query parameter handling

**Update app/robots.ts**:
```typescript
disallow: [
  '/api/',
  '/admin/',
  '/_next/',
  '/static/',
  '/*.json$',
  '/*?*', // Remove or refine this
  '/404',
  '/search', // Add search results page
  '/thank-you', // Add form submission pages
  '/*?utm_*', // Allow UTM parameters for tracking
  '/*?gclid=*', // Allow Google Ads parameters
]
```

### 5.3 Implement Redirects

**Requirement**: Add proper redirect rules

**Update next.config.js redirects**:
```javascript
redirects: async () => [
  {
    source: '/index.html',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home',
    destination: '/',
    permanent: true,
  },
  // Add www to non-www redirect
  {
    source: '/:path*',
    has: [
      {
        type: 'host',
        value: 'www.canadianmetalfab.com',
      },
    ],
    destination: 'https://canadianmetalfab.com/:path*',
    permanent: true,
  },
  // Service page redirects for old URLs
  {
    source: '/services/laser-cutting',
    destination: '/services/laser-cutting-bending',
    permanent: true,
  },
]
```

---

## 6. PRIORITY 5: SCHEMA MARKUP ENHANCEMENTS (MEDIUM)

### 6.1 Add FAQ Schema

**Requirement**: Implement FAQ schema on service pages

**Add to each service page**:
```typescript
const faqData = [
  {
    question: "What materials can you laser cut?",
    answer: "We laser cut steel up to 1 inch, stainless steel up to 3/4 inch, and aluminum up to 1/2 inch thickness."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Standard turnaround is 5-7 business days. Rush service available for urgent projects."
  },
  // ... more FAQs
]

const faqSchema = generateFAQSchema(faqData)
structuredData.push(faqSchema)
```

### 6.2 Add Review Schema

**Requirement**: Implement dynamic review schema

**Create new component components/ReviewSchema.tsx**:
```typescript
export function ReviewSchema({ reviews }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: calculateAverage(reviews),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.date,
      reviewBody: review.text
    }))
  }
  return <StructuredDataScript data={schema} />
}
```

---

## 7. PRIORITY 6: ANALYTICS & TRACKING (MEDIUM)

### 7.1 Implement Conversion Tracking

**Requirement**: Add event tracking for key actions

**Events to track**:
```javascript
// Quote form submissions
gtag('event', 'generate_lead', {
  'event_category': 'engagement',
  'event_label': 'quote_form',
  'value': 1
});

// Phone clicks
gtag('event', 'click', {
  'event_category': 'contact',
  'event_label': 'phone_number',
  'value': 1
});

// Email clicks
gtag('event', 'click', {
  'event_category': 'contact',
  'event_label': 'email',
  'value': 1
});

// Service page views
gtag('event', 'page_view', {
  'event_category': 'services',
  'event_label': serviceName,
  'value': 1
});

// Location page engagement
gtag('event', 'view_item', {
  'event_category': 'locations',
  'event_label': cityName,
  'value': 1
});
```

### 7.2 Add Form Tracking

**Requirement**: Track form interactions

**Implementation**:
```typescript
// Track form starts
const handleFormFocus = () => {
  gtag('event', 'form_start', {
    'event_category': 'form',
    'event_label': formName
  });
}

// Track form completions
const handleFormSubmit = () => {
  gtag('event', 'form_submit', {
    'event_category': 'form',
    'event_label': formName,
    'value': 1
  });
}

// Track form abandonment
const handleFormAbandon = () => {
  gtag('event', 'form_abandon', {
    'event_category': 'form',
    'event_label': formName
  });
}
```

---

## 8. PRIORITY 7: ACCESSIBILITY IMPROVEMENTS (LOW)

### 8.1 Implement Skip to Content

**Requirement**: Add skip navigation link

**Update app/layout.tsx**:
```typescript
import { SkipToContent } from '@/components/SkipToContent'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SkipToContent />
        {/* ... rest of layout */}
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
```

### 8.2 Add ARIA Labels

**Requirement**: Improve screen reader support

**Add to interactive elements**:
```typescript
// Navigation
<nav aria-label="Main navigation">

// Forms
<form aria-label="Quote request form">

// Buttons
<button aria-label="Submit quote request">

// Links
<a href="/quote" aria-label="Request a fabrication quote">
```

---

## 9. PERFORMANCE OPTIMIZATIONS

### 9.1 Resource Hints

**Add to app/layout.tsx head**:
```html
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 9.2 Critical CSS

**Requirement**: Inline critical CSS for faster rendering

**Implementation**:
- Extract critical CSS for above-fold content
- Inline in <head> for each page type
- Load non-critical CSS asynchronously

---

## 10. TESTING & VALIDATION

### 10.1 SEO Testing Checklist

**Before deployment, validate**:
- [ ] Google Rich Results Test - all pages pass
- [ ] Schema Markup Validator - no errors
- [ ] Google PageSpeed Insights - score > 90
- [ ] Mobile-Friendly Test - all pages pass
- [ ] Lighthouse Audit - all green scores
- [ ] Broken Link Checker - no 404s
- [ ] XML Sitemap Validator - valid format
- [ ] Robots.txt Tester - proper rules
- [ ] Canonical URL Check - all pages have canonicals
- [ ] Alt Text Audit - all images have descriptions

### 10.2 Local SEO Testing

**Validate local implementation**:
- [ ] NAP consistency across all pages
- [ ] Location pages unique content check
- [ ] Google My Business integration
- [ ] Local schema validation
- [ ] Mobile click-to-call functionality
- [ ] Map embed functionality
- [ ] Driving directions accuracy

---

## 11. SUCCESS METRICS

### Key Performance Indicators (KPIs)

**30-Day Targets**:
- Increase local search visibility by 25%
- Improve "near me" search rankings to top 3
- Increase organic traffic from target cities by 40%
- Improve Core Web Vitals scores to "Good" for all metrics
- Achieve 100% schema validation pass rate
- Reduce bounce rate on service pages by 15%
- Increase quote form submissions by 30%

**90-Day Targets**:
- Rank in top 3 for "sheet metal fabrication [city]" for all target cities
- Increase overall organic traffic by 50%
- Improve domain authority by 5 points
- Generate 100+ local reviews with 4.5+ average rating
- Achieve featured snippets for 10+ queries

---

## 12. IMPLEMENTATION TIMELINE

### Phase 1: Critical Local SEO (Week 1-2)
- Create location landing pages
- Update business schema
- Fix service page metadata
- Implement breadcrumbs

### Phase 2: Technical Fixes (Week 3)
- Add alt text to all images
- Create Open Graph images
- Fix canonical URLs
- Update robots.txt

### Phase 3: Schema & Tracking (Week 4)
- Implement FAQ schema
- Add review schema
- Set up conversion tracking
- Implement form tracking

### Phase 4: Performance & Testing (Week 5)
- Optimize images
- Add resource hints
- Run all validation tests
- Deploy to production

---

## 13. NOTES FOR IMPLEMENTATION

1. **DO NOT** change existing URL structures without proper redirects
2. **DO NOT** duplicate content between location pages
3. **ALWAYS** validate schema before deployment
4. **ALWAYS** test on mobile devices first
5. **MAINTAIN** existing functionality while adding improvements
6. **PRIORITIZE** local SEO elements as they have highest ROI
7. **TEST** all forms after adding tracking code
8. **BACKUP** before making any changes

---

## 14. RESOURCES & REFERENCES

- [Google Schema Markup Testing Tool](https://developers.google.com/search/docs/advanced/structured-data)
- [Google My Business API](https://developers.google.com/my-business)
- [Local SEO Guide](https://moz.com/learn/seo/local)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**Document Status**: Ready for Implementation
**Review Required By**: Development Team, SEO Specialist
**Approval Required From**: Project Manager
