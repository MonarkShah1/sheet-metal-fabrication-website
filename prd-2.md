    
## B. Product Requirements Document (PRD)

### 1. Scope & Phases

| Sprint | Outcome | Claude Task Size |
|--------|---------|------------------|
| **0 – Setup** | Next.js + Tailwind scaffold (done) | ≤ 20 files |
| **1 – Core pages** | Home, Capabilities, About, Contact (form) | Small edits per page |
| **2 – SEO foundation** | Meta tags, sitemap, robots.txt, basic schema | 3 – 4 files |
| **3 – Content & CMS** | MDX blog, first 2 articles, internal links | 6 – 8 files |
| **4 – Case studies & trust** | Case-study template, logo strip, ISO page | 4 – 6 files |
| **5 – Performance & Vitals** | Optimized images, Lighthouse > 90 | Incremental |
| **6 – Lead-gen extras** | RFQ file-upload form, gated PDF, analytics | Incremental |

> *Guideline:* keep each PR under ≈ 250 added lines to stay within Claude Code’s context limits.

### 2. Functional Requirements (MVP = Sprints 0-2)

| Area | Requirement | Acceptance Criteria |
|------|-------------|---------------------|
| **Navigation** | Sticky nav, CMF logo, 4 links; collapses to hamburger < 768 px | No CLS; WCAG-AA contrast |
| **Hero** | H1 (<64 chars), H2 (<110 chars), primary CTA | Visible first viewport @ 1366 × 768 |
| **Capabilities grid** | 4 cards linking to `/capabilities/[slug]` | Grid is aria-labelled |
| **Contact form** | Name, e-mail, phone*, message; validation; POST `/api/contact` | Returns 200; success toast |
| **SEO meta** | `title`, `description`, OpenGraph, canonical | Passes Google Rich Results test |

### 3. Content Requirements

* **Keyword map**  
  * Home → “custom metal fabrication Ontario”  
  * Capabilities → “laser cutting services Ontario”, “CNC punching Canada”  
  * About → “ISO 9001 metal fabrication team”  
* **Voice & tone** – straightforward, professional, ~6th-grade readability, metric units first  
* **Imagery** – authentic shop photos; no generic stock weld sparks; alt text includes keyword where natural

### 4. Technical Requirements

| Item | Spec |
|------|------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind, custom color `primary #003B73` |
| Hosting | Google Cloud Run (Docker-friendly) |
| CI/CD | GitHub Actions: lint → test → build → deploy |
| Analytics | GA4 + Matomo; track form submits |
| Accessibility | Pass axe-core with 0 critical issues |

### 5. Success Metrics

1. **Organic search** – top 3 for primary keyword in Google.ca within 6 months  
2. **Engagement** – avg. time-on-page ≥ 1 min, bounce ≤ 45 %  
3. **Leads** – ≥ 10 qualified RFQs / month by month 3  
4. **Site health** – Lighthouse performance ≥ 90, WCAG AA compliance

### 6. Open Questions

* Final accent color (orange vs yellow)?  
* Which CRM captures RFQs—HubSpot or Fulcrum ERP?  
* Headless CMS needed now, or can markdown files suffice until sprint 3?