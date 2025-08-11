# Location-Specific Landing Pages PRD
## Sheet Metal Fabrication Local SEO Strategy

**Document Version:** 1.0  
**Date:** December 2024  
**Status:** Ready for Development  
**Business:** Canadian Metal Fabricators Ltd.  

---

## 1. Executive Summary

### Objective
Create location-specific landing pages to dominate local SEO in the Greater Toronto Area (GTA) for sheet metal fabrication services. This will involve implementing dynamic routing for city/area pages that target specific geographic markets while maintaining scalability and SEO best practices.

### Business Goals
- Increase organic traffic by 150% from location-based searches
- Establish local market authority in 15 key GTA locations
- Generate qualified leads from businesses searching for "sheet metal fabrication near [city]"
- Improve local pack rankings in Google for target locations

---

## 2. Strategic Location Selection

### Selected 15 GTA Locations for Initial Launch

#### Tier 1 - Primary Industrial Hubs (Highest Priority)
1. **Toronto** - Downtown core and industrial districts
   - Rationale: Largest market, highest search volume, diverse manufacturing base
   - Key areas: Etobicoke, North York, Scarborough industrial zones

2. **Vaughan** - Vaughan Enterprise Zone
   - Rationale: Major industrial hub, proximity to highways, growing manufacturing sector
   - Key industries: Automotive, construction, packaging

3. **Brampton** - Manufacturing corridor
   - Rationale: Strong manufacturing presence, logistics hub, diverse industrial base
   - Key industries: Food processing, automotive parts, aerospace

4. **Hamilton** - Steel city heritage
   - Rationale: Traditional manufacturing stronghold, steel industry presence
   - Key industries: Steel processing, heavy manufacturing, construction

5. **Markham** - Tech and manufacturing blend
   - Rationale: High-tech manufacturing, electronics, precision engineering
   - Key industries: Electronics, medical devices, telecommunications

#### Tier 2 - Secondary Markets (Medium Priority)
6. **Oakville** - Premium manufacturing
   - Rationale: Ford assembly plant, aerospace companies, high-value manufacturing
   
7. **Burlington** - Industrial waterfront
   - Rationale: Strategic location, diverse manufacturing, good transport links

8. **Milton** - Fastest growing
   - Rationale: Rapid growth, new industrial developments, distribution centers

9. **Richmond Hill** - North GTA gateway
   - Rationale: Growing business sector, proximity to Toronto, light manufacturing

10. **Pickering** - Eastern GTA anchor
    - Rationale: Nuclear sector, growing industrial base, eastern GTA coverage

#### Tier 3 - Emerging Markets (Growth Potential)
11. **Ajax** - Eastern manufacturing
    - Rationale: Growing industrial sector, proximity to Pickering, lower competition

12. **Whitby** - Durham region hub
    - Rationale: Central Durham location, diverse manufacturing, growth potential

13. **Oshawa** - Automotive heritage
    - Rationale: GM presence, automotive supply chain, manufacturing expertise

14. **Cambridge** - Advanced manufacturing
    - Rationale: Part of Canada's Technology Triangle, Toyota presence, robotics

15. **Guelph** - Innovation corridor
    - Rationale: Manufacturing innovation, university partnerships, food processing

---

## 3. Technical Requirements

### 3.1 Dynamic Routing Structure
```
/locations/[city-slug]/
```

#### URL Structure Examples:
- `/locations/toronto-sheet-metal-fabrication/`
- `/locations/vaughan-metal-fabrication-services/`
- `/locations/hamilton-custom-metal-manufacturing/`

### 3.2 File Structure
```
app/
  locations/
    [location]/
      page.tsx           # Dynamic page component
    page.tsx            # Locations overview/hub page
    
lib/
  locations/
    location-data.ts    # Location-specific content and metadata
    location-utils.ts   # Helper functions for location pages
    
components/
  locations/
    LocationHero.tsx
    LocalTestimonials.tsx
    ServiceAreaMap.tsx
    NearbyProjects.tsx
    LocalFAQ.tsx
```

### 3.3 Dynamic Page Components

#### Required Page Sections:
1. **Location-Specific Hero**
   - Dynamic H1: "Sheet Metal Fabrication Services in [City], ON"
   - Local value proposition
   - Distance from main facility
   - Response time for location

2. **Local Service Overview**
   - Services tailored to local industries
   - Industry-specific capabilities
   - Local certifications/partnerships

3. **Service Area Map**
   - Interactive map showing coverage area
   - Nearby landmarks and industrial areas
   - Travel time estimates

4. **Local Case Studies/Projects**
   - 2-3 projects completed in or near the location
   - Industry-relevant examples
   - Before/after images

5. **Why Choose Us for [City]**
   - Proximity advantages
   - Local industry expertise
   - Quick turnaround times
   - Free local consultations

6. **Local Industries Served**
   - Specific industries prominent in that location
   - Relevant certifications
   - Industry-specific capabilities

7. **Local FAQ Section**
   - Location-specific questions
   - Delivery and logistics
   - Local regulations compliance

8. **Contact Section**
   - Customized CTA for location
   - Local phone number (if available)
   - Estimated response times

---

## 4. Content Strategy

### 4.1 Dynamic Content Variables
Each location page will have:
- **Unique content minimum:** 1,500 words
- **Location mentions:** 3-5 times naturally throughout
- **Local landmarks/areas:** 2-3 references
- **Industry focus:** Tailored to local economy

### 4.2 Content Templates

#### Title Tag Template:
`Sheet Metal Fabrication [City] | Custom Metal Manufacturing | Canadian Metal Fabricators`

#### Meta Description Template:
`Professional sheet metal fabrication services in [City], ON. Laser cutting, welding, forming & finishing. ISO 9001 certified. Serving [City] manufacturers since 2017. Call 647-407-0171.`

#### H1 Template:
`Sheet Metal Fabrication Services in [City], Ontario`

#### H2 Templates:
- `Custom Metal Manufacturing Solutions for [City] Businesses`
- `Why [City] Manufacturers Choose Canadian Metal Fabricators`
- `Our Sheet Metal Services Available in [City]`
- `Industries We Serve in [City] and Surrounding Areas`

### 4.3 Local Content Customization

For each location, customize:
1. **Distance/Travel Time:** "Just [X] minutes from downtown [City]"
2. **Local Industries:** Reference specific local companies/sectors
3. **Delivery Promise:** "Same-day quotes for [City] businesses"
4. **Local Partnerships:** Mention local suppliers/partners
5. **Community Involvement:** Local business associations, chambers

---

## 5. SEO Requirements

### 5.1 On-Page SEO Elements
- **URL Structure:** Keyword-rich, location-specific
- **Title Tags:** 50-60 characters, location + primary service
- **Meta Descriptions:** 150-160 characters, include location + CTA
- **Header Tags:** Proper H1-H6 hierarchy with location keywords
- **Image Alt Text:** Include location in relevant images
- **Internal Linking:** Link to main services and other locations

### 5.2 Schema Markup Requirements
```json
{
  "@type": "LocalBusiness",
  "name": "Canadian Metal Fabricators - [City] Service Area",
  "areaServed": {
    "@type": "City",
    "name": "[City]"
  },
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "[City Lat]",
      "longitude": "[City Long]"
    },
    "geoRadius": "50 km"
  }
}
```

### 5.3 Location Data Structure
```typescript
interface LocationData {
  slug: string;
  city: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromFacility: number; // in km
  travelTime: string; // e.g., "25 minutes"
  localIndustries: string[];
  populationSize: number;
  businessCount: number;
  competitorCount: number;
  monthlySearchVolume: number;
  content: {
    intro: string;
    whyChooseUs: string;
    industriesServed: string;
    localProjects: Project[];
  };
  faqs: FAQ[];
  nearbyAreas: string[];
}
```

---

## 6. Performance Requirements

### Page Speed Targets
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Mobile Score:** > 90
- **Desktop Score:** > 95

### Technical Optimizations
1. **Static Generation:** Pre-render all location pages at build time
2. **Image Optimization:** Next.js Image component with lazy loading
3. **Code Splitting:** Dynamic imports for map components
4. **Caching Strategy:** CDN caching with proper headers
5. **Sitemap:** Auto-generate with all location URLs

---

## 7. User Experience Requirements

### 7.1 Desktop Experience
- Sticky navigation with location indicator
- Interactive service area map
- Multi-column layout for service lists
- Hover effects on interactive elements
- Quick quote form in sidebar

### 7.2 Mobile Experience
- Tap-to-call button (sticky on scroll)
- Collapsed sections with accordions
- Swipeable testimonials
- Simplified map view
- One-thumb navigation

### 7.3 Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader optimization

---

## 8. Conversion Elements

### 8.1 Primary CTAs
- "Get Free Quote for [City]"
- "Call Now for [City] Service"
- "Schedule [City] Consultation"

### 8.2 Trust Signals
- ISO 9001:2015 certification badge
- AWS welding certification
- Years serving [City]: Calculate from 2017
- Number of [City] projects completed
- Response time guarantee

### 8.3 Lead Capture
- Location-specific quote form
- Prepopulated city field
- Industry dropdown (location-specific)
- Urgency indicators
- File upload for drawings

---

## 9. Analytics & Tracking

### 9.1 Key Metrics
- Organic traffic by location
- Location page conversion rates
- Average time on page
- Bounce rate by location
- Form submissions by location
- Phone calls by location (CallRail integration)

### 9.2 Event Tracking
- Quote form starts/completions
- Phone number clicks
- Map interactions
- PDF downloads
- Video plays

### 9.3 Google Business Profile Integration
- Link location pages to GBP
- Track GBP views to site visits
- Monitor local pack rankings

---

## 10. Content Management

### 10.1 Location Data Source
Create a centralized JSON/TypeScript file with all location data:
```typescript
export const locations = [
  {
    slug: "toronto",
    city: "Toronto",
    // ... all location data
  },
  // ... other locations
];
```

### 10.2 Dynamic Content Generation
- Use location data to generate pages
- Template system for consistent structure
- Variable injection for customization
- Markdown support for content sections

---

## 11. Launch Strategy

### Phase 1: Week 1-2
- Implement dynamic routing system
- Create location data structure
- Build reusable components
- Set up basic templates

### Phase 2: Week 2-3
- Generate content for Tier 1 cities (5 locations)
- Implement maps and interactive elements
- Add schema markup
- Internal QA and testing

### Phase 3: Week 3-4
- Generate content for Tier 2 cities (5 locations)
- SEO optimization pass
- Performance optimization
- Submit to Google Search Console

### Phase 4: Week 4-5
- Generate content for Tier 3 cities (5 locations)
- Full site integration
- Create location hub page
- Launch monitoring setup

---

## 12. Success Metrics

### 30-Day Targets
- All pages indexed in Google
- 500+ organic visits to location pages
- 10+ leads from location pages
- Average position < 20 for "[city] sheet metal fabrication"

### 90-Day Targets
- 2,500+ monthly organic visits
- 50+ leads from location pages
- 3+ locations ranking in top 10
- Featured snippet for at least 1 location

### 6-Month Targets
- 5,000+ monthly organic visits
- 150+ leads from location pages
- 8+ locations ranking in top 10
- Local pack appearance for 5+ locations

---

## 13. Maintenance & Scaling

### Ongoing Optimization
- Monthly content updates based on performance
- A/B testing CTAs and layouts
- Add customer reviews/testimonials
- Update local projects quarterly
- Seasonal content updates

### Future Expansion
- Add more GTA locations (Phase 2: 10 more cities)
- Expand to other Ontario regions
- Create industry-specific location pages
- Add service-specific location pages
- Implement location-based blog content

---

## 14. Risk Mitigation

### Potential Risks & Solutions
1. **Duplicate Content Penalty**
   - Solution: Ensure 60%+ unique content per page
   
2. **Thin Content**
   - Solution: Minimum 1,500 words, rich media content
   
3. **Local Competition**
   - Solution: Superior content, faster site, better UX
   
4. **Google Algorithm Changes**
   - Solution: Focus on user value, not just SEO

---

## 15. Technical Specifications

### Required Dependencies
```json
{
  "dependencies": {
    "@react-google-maps/api": "^2.x",
    "react-intersection-observer": "^9.x",
    "schema-dts": "^1.x"
  }
}
```

### Environment Variables
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_SITE_URL=https://canadianmetalfab.com
```

### API Integrations
- Google Maps API for interactive maps
- Google Places API for business data
- CallRail for call tracking
- Google Analytics 4 for tracking

---

## Appendix A: Location-Specific Keywords

### Primary Keywords by Location
Each location should target:
- `sheet metal fabrication [city]`
- `metal fabrication services [city]`
- `custom metal manufacturing [city]`
- `laser cutting [city]`
- `welding services [city]`

### Long-tail Keywords
- `sheet metal fabrication near me in [city]`
- `best metal fabricators in [city] ontario`
- `[city] custom metal work manufacturers`
- `industrial metal fabrication [city] on`

---

## Appendix B: Competitor Analysis

### Main Competitors by Region
Document local competitors for each location to differentiate messaging and identify gaps in their local SEO strategy.

---

**END OF PRD**

## Implementation Notes for Claude
- Start with the technical foundation (routing, data structure)
- Implement one complete location as a template
- Use that template to generate all 15 locations
- Focus on performance and SEO from the start
- Ensure all content is unique and valuable
- Test thoroughly on mobile devices
- Implement proper error handling for invalid locations
