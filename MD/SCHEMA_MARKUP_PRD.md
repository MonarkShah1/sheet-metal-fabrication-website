# Schema Markup Implementation PRD

## Overview
This PRD outlines the implementation and enhancement of key schema markups for the Canadian Metal Fabricators website. We will focus on LocalBusiness, Service, FAQPage, and BreadcrumbList schemas to improve SEO, search visibility, and rich snippet appearances.

These schemas should build upon existing implementations in `lib/structured-data.ts` and components like `StructuredData.tsx`, `StructuredDataScript.tsx`, and `Breadcrumbs.tsx`.

All schemas must:
- Follow schema.org guidelines
- Use JSON-LD format
- Be injected via `StructuredDataScript` component
- Reference the main organization ID where appropriate (`${businessInfo.url}/#organization`)
- Include areaServed based on `businessInfo.areaServed` or location-specific data

## 1. LocalBusiness Schema
### Purpose
Enhance local SEO by providing detailed business information, including locations, services, and reviews.

### Existing Implementation
- Generated in `generateOrganizationSchema` which includes LocalBusiness type
- Used in `StructuredData` component with type 'LocalBusiness'
- Review schema in `ReviewSchema.tsx`

### Enhancements Needed
- Add LocalBusiness schema to all location pages (`app/locations/[location]/page.tsx`)
- Include location-specific address if available, otherwise use main facility
- Add `makesOffer` array referencing services
- Integrate with existing aggregateRating
- For location pages, create a child LocalBusiness schema linked to parent Organization

### Example Structure
```json
{
  \"@context\": \"https://schema.org\",
  \"@type\": \"LocalBusiness\",
  \"name\": \"Canadian Metal Fabricators - [Location]\",
  \"parentOrganization\": { \"@id\": \"${businessInfo.url}/#organization\" },
  \"address\": { ...location address... },
  \"areaServed\": [ ...cities... ],
  \"makesOffer\": [ { \"@type\": \"Offer\", \"itemOffered\": { \"@type\": \"Service\", \"name\": \"Sheet Metal Fabrication\" } } ]
}
```

### Implementation Steps
1. Update `lib/structured-data.ts` to add `generateLocalBusinessSchema(location: LocationData)`
2. In location pages, add `<StructuredDataScript data={generateLocalBusinessSchema(location)} />`
3. Ensure it's added to main pages if not already present

## 2. Service Schema
### Purpose
Describe specific services offered, improving visibility for service-related searches.

### Existing Implementation
- `generateServiceSchema` in `lib/structured-data.ts`
- Used in `StructuredData` with type 'Service'

### Enhancements Needed
- Implement on all service pages (`app/services/[service]/page.tsx` and specialized like `sheet-metal-fabrication-ontario`)
- Add service-specific details: provider, areaServed, offers with priceRange
- Link to LocalBusiness/Organization
- For location-specific services, include geo information

### Example Structure
```json
{
  \"@context\": \"https://schema.org\",
  \"@type\": \"Service\",
  \"serviceType\": \"Sheet Metal Fabrication\",
  \"provider\": { \"@id\": \"${businessInfo.url}/#organization\" },
  \"areaServed\": [ ... ],
  \"hasOfferCatalog\": { ...items... }
}
```

### Implementation Steps
1. Enhance `generateServiceSchema` to accept service and optional location params
2. Add to service page components
3. Ensure customData is passed for specifics

## 3. FAQPage Schema
### Purpose
Enable FAQ rich snippets in search results for better click-through rates.

### Existing Implementation
- `generateFAQSchema` in `lib/structured-data.ts`
- Manually implemented in some pages like `quote/ontario-metal-fabrication/page.tsx`
- Components like `LocalFAQ` and `IndustryFAQ`

### Enhancements Needed
- Standardize FAQ schema across all pages with FAQ sections (locations, industries, services)
- Pull questions/answers dynamically from data files (e.g., location-data.ts faqs)
- Add to blog posts and other content pages where applicable

### Example Structure
```json
{
  \"@context\": \"https://schema.org\",
  \"@type\": \"FAQPage\",
  \"mainEntity\": [{
    \"@type\": \"Question\",
    \"name\": \"Question text\",
    \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Answer text\" }
  }]
}
```

### Implementation Steps
1. In FAQ components (e.g., `LocalFAQ.tsx`, `IndustryFAQ.tsx`), add schema generation using `generateFAQSchema(faqs)`
2. Inject via `StructuredDataScript`
3. Create a reusable `FAQSchema` component similar to `ReviewSchema`

## 4. BreadcrumbList Schema
### Purpose
Improve navigation understanding for search engines and enable breadcrumb rich results.

### Existing Implementation
- `generateBreadcrumbSchema` in `lib/structured-data.ts`
- Injected in `Breadcrumbs.tsx` component via `StructuredDataScript`

### Enhancements Needed
- Ensure Breadcrumbs component is used consistently across all pages
- Verify that item URLs are absolute (include businessInfo.url)
- Add position and ListItem types correctly

### Example Structure
```json
{
  \"@context\": \"https://schema.org\",
  \"@type\": \"BreadcrumbList\",
  \"itemListElement\": [{
    \"@type\": \"ListItem\",
    \"position\": 1,
    \"name\": \"Home\",
    \"item\": \"https://example.com/\"
  }]
}
```

### Implementation Steps
1. Audit all pages to ensure `<Breadcrumbs items={...} />` is included
2. Update `generateBreadcrumbSchema` to use absolute URLs if needed
3. Test for rich snippet eligibility

## Testing and Validation
- Use Google's Rich Results Test for each schema type
- Validate with Structured Data Testing Tool
- Monitor Search Console for schema errors
- Track rich snippet appearances after deployment

## Timeline
- Week 1: Implement LocalBusiness and Service enhancements
- Week 2: FAQPage standardization
- Week 3: Breadcrumb audits and testing
- Week 4: Full validation and deployment
