# PRD: Dedicated Service Subpages for SEO Optimization

## Overview
### Purpose
Create individual, unique pages for each service listed on the main Services page (`app/services/page.tsx`). This will:
- Make each service card fully clickable, linking to its dedicated page.
- Improve SEO by providing deep, specialized content for each service (e.g., unique keywords, headings, structured data).
- Ensure pages are not identical; each must have differentiated content, structure, and visuals to avoid duplicate content penalties and enhance user/SEO value.

### Scope
- Update linking in `app/services/page.tsx` (make cards clickable to new pages).
- Create 5 new pages under `app/services/`:
  - /services/engineering
  - /services/smart-sourcing
  - /services/laser-cutting-bending
  - /services/welding
  - /services/finishing
- Do not alter other pages (e.g., homepage, about) unless specified.
- Focus on uniqueness: Vary layouts, content depth, images, and calls-to-action per page.

### Non-goals
- No new services added; stick to the existing 5.
- No backend changes (e.g., no new APIs); all static/Next.js pages.
- Avoid copying content verbatim between pages.

## Requirements

### 1. Main Services Page Updates
- In `app/services/page.tsx` (around lines ~96–146), ensure each service card is wrapped in a `Link` to its subpage (some may already be; confirm all 5).
- Make the entire card clickable (not just text) by applying the Link to the outer `<div>`.
- Add hover/focus states if missing for better UX (e.g., subtle scale or border change).

### 2. New Subpage Structure
- Each page should follow a consistent base template (hero, sections, CTA) but with unique variations:
  - **Hero**: Customized heading, subheading, and badge relevant to the service.
  - **Main Content**: 2-3 unique sections (e.g., process overview, capabilities, case studies) with service-specific details.
  - **SEO Elements**: Unique `<Metadata>` with title, description; add service-specific structured data via `generateServiceSchema`.
  - **Visuals**: Use different icons, colors (alternate blue/orange), and placeholder images (e.g., public/images/[service].jpg).
  - **CTA**: Link to /quote with service-specific messaging.
- File structure: Use dynamic routes if needed, but prefer static files like `app/services/engineering/page.tsx` for simplicity.
- Import necessary components: Navigation, Footer, StructuredDataScript, etc.

### 3. Uniqueness per Page (to Differentiate for SEO)
Each page must have ~500-800 words of original content, targeted keywords (e.g., "laser cutting services Mississauga" for laser page), and unique elements. Suggestions:

- **Engineering ( /services/engineering )**
  - Hero: "Engineering Support: Think Like an OEM" with gradient on "OEM".
  - Sections: Design Optimization (unique tools like SolidWorks), Prototyping Process (step-by-step with timelines), Case Study (e.g., cost reduction example).
  - Unique: Interactive diagram of design workflow; keywords: "DFM engineering", "prototype development".

- **Smart Sourcing ( /services/smart-sourcing )**
  - Hero: "Smart Sourcing: Supply Chain Simplified" with gradient on "Simplified".
  - Sections: Material Selection Guide (table of alloys), Supplier Network (map of partners), Cost Savings Calculator (static example).
  - Unique: Infographic on supply chain; keywords: "metal sourcing Ontario", "supply chain management".

- **Laser Cutting & Bending ( /services/laser-cutting-bending )**
  - Hero: "Precision Laser Cutting & Bending" with gradient on "Precision".
  - Sections: Equipment Specs (Bodor 6000KW details), Tolerance Capabilities (comparison chart), Material Handling (thickness guides).
  - Unique: Before/after cut examples; keywords: "laser cutting services", "CNC bending Toronto".

- **Welding ( /services/welding )**
  - Hero: "Certified Welding Excellence" with gradient on "Excellence".
  - Sections: Welding Methods (TIG/MIG/Spot comparisons), Certification Details (AWS D1.1 breakdown), Quality Assurance Process (inspection steps).
  - Unique: Video embed placeholder for welding demo; keywords: "AWS welding services", "metal welding Mississauga".

- **Finishing ( /services/finishing )**
  - Hero: "Professional Finishing Services" with gradient on "Professional".
  - Sections: Finishing Options (powder coating vs. anodizing), Durability Testing (standards compliance), Custom Finishes (color matching).
  - Unique: Gallery of finished parts; keywords: "metal finishing services", "powder coating Ontario".

- Common to all: Include related services cross-links, unique meta descriptions (e.g., "Discover our AWS-certified welding services in Mississauga..."), and breadcrumb schema.

### 4. SEO Optimizations
- Metadata: Unique title/description per page (e.g., "Laser Cutting Services | Precision Metal Fabrication in Ontario").
- Structured Data: Add `generateServiceSchema` with service-specific details.
- Headings: Use H1 for hero, H2/H3 for sections; incorporate long-tail keywords naturally.
- Images: Alt text with keywords; lazy-load.
- Internal Links: From main Services page and between subpages.

### 5. Technical Specs
- Use existing components/styles (e.g., gradient spans, badges) for consistency.
- Ensure responsive: Cards/sections adapt to mobile (stack vertically).
- Accessibility: ARIA labels on links, alt text, keyboard navigation.

## Acceptance Criteria
- All 5 service cards on main page link to unique subpages.
- Each subpage has distinct content/structure (no duplicates); passes Copyleaks/duplicate content check.
- SEO: Unique metadata, schema; pages indexable (no noindex).
- No errors: Builds cleanly, no console warnings.

## QA Checklist
- Click each card: Navigates to correct unique page.
- Content check: Verify no copied sections between pages; each has 500+ words.
- SEO: Inspect <head> for unique title/desc; validate schema.org markup.
- Responsive: Test on mobile/desktop; no overflow.
- Accessibility: Run Lighthouse (score >90); keyboard-navigable. 