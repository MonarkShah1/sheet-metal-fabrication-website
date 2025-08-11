# PRD: Make Homepage Services Grid Clickable

## Overview
### Purpose
Extend the SEO strategy by making the services grid on the homepage fully clickable. Each card should link to its dedicated subpage (as created in the previous SERVICES_SUBPAGES_PRD.md). This will:
- Improve user navigation and engagement on the homepage.
- Boost SEO through additional internal links to service-specific content.
- Maintain consistency with the main Services page, where cards are already clickable.

### Scope
- Update `ServicesGrid.tsx` (used on homepage via `app/page.tsx`).
- Add links to the existing 4 service cards, pointing to their subpages.
- Assume subpages exist (from prior PRD); if not, implement them first.
- Do not create new content or pages; only add linking functionality.

### Non-goals
- No new cards or content changes in the grid.
- No alterations to layouts, styles, or other homepage sections.

## Requirements

### 1. Add Links to Service Cards
- In `ServicesGrid.tsx` (around lines ~63–104), wrap each card's outer `<div>` in a `Link` from 'next/link'.
- Map titles to subpage URLs:
  - 'Laser Cutting: Mastered Fundamentals' → /services/laser-cutting-bending
  - 'Welding & Assembly Excellence' → /services/welding
  - 'Strategic Material Sourcing' → /services/smart-sourcing
  - 'Prototype Development' → /services/engineering (or adjust if prototyping fits better elsewhere)
- Make the entire card clickable: Apply cursor-pointer and hover effects to the Link.
- Add accessibility: Include aria-label like "Learn more about [service title]".

Example for one card:
```tsx
import Link from 'next/link';

// Inside the grid map:
<Link href="/services/laser-cutting-bending" className="block">
  <div 
    className={`group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-${service.color}/30 hover:-translate-y-2 animate-slide-up`}
    style={{animationDelay: `${index * 200}ms`}}
    role="article"
    aria-labelledby={`service-title-${index}`}
  >
    // ... existing card content ...
  </div>
</Link>
```

### 2. Enhancements for Usability/SEO
- Add subtle hover state to indicate clickability (e.g., scale-105 on hover if not already).
- Ensure internal links are crawlable (no nofollow).
- Update any related metadata if needed, but primary focus is on linking.

### 3. Technical Specs
- Use Next.js Link for client-side navigation.
- Ensure responsive: Cards remain stacked on mobile, with full touch targets.
- Accessibility: Links should have descriptive text; test with screen readers.

## Acceptance Criteria
- Clicking any card on homepage navigates to the correct subpage without full reload.
- All 4 cards are linked; no broken links.
- Hover shows visual feedback (e.g., shadow/lift).
- No regressions to grid layout or animations.

## QA Checklist
- Click each card: Lands on correct subpage.
- Mobile: Tap works; no overlap issues.
- SEO: Inspect links in dev tools; confirm hrefs are correct.
- Accessibility: ARIA labels present; keyboard focus visible.
- No console errors on navigation. 