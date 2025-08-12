# Header Cleanup PRD

## Overview
The current header navigation is cluttered with too many top-level menu items (Home, Services, Industries, Locations, About, Quote Request, Blog, Contact) plus a separate "Get Quote" button. This leads to a crowded appearance, especially on smaller desktop screens or when adding more items in the future. The goal is to simplify the header while maintaining easy access to all key sections.

## Current Issues
- 8 menu items + 1 button = visual overload
- Redundancy: "Quote Request" link and "Get Quote" button serve similar purposes
- No hierarchy: All items treated equally, even if some are secondary (e.g., Blog)
- Inconsistent inclusion: Navigation is imported per page instead of in root layout, leading to potential maintenance issues
- Mobile menu lists all items vertically, which can be long

## Brainstormed Ideas
1. **Group into Dropdowns:**
   - Create dropdown menus for categories with sub-items (e.g., Services dropdown with links to specific services)
   - Group company-related pages: About, Blog, Contact under a "Company" dropdown

2. **Reduce Top-Level Items:**
   - Proposed top-level: Home, Services, Industries, Locations, Company, Get Quote (as button)
   - Move Quote Request into the button or remove the link

3. **Mega Menu for Key Sections:**
   - For Services, Industries, Locations: Implement mega menus with previews or sub-links to make navigation more intuitive

4. **Design Improvements:**
   - Slimmer header with more spacing
   - Use icons or subtle animations for better UX
   - Ensure responsive design: Collapse to hamburger earlier if needed

5. **Structural Changes:**
   - Move Navigation and Footer to root layout.tsx to avoid per-page imports
   - This improves consistency and reduces code duplication

6. **Other Enhancements:**
   - Add search bar if relevant (but may add clutter; evaluate)
   - Highlight active menu item
   - A/B test simplified vs current header for user engagement

## Requirements
### Functional Requirements
- Simplify to 5-6 top-level items max
- Implement at least one dropdown (e.g., Company: About, Blog, Contact)
- Merge Quote functionality: Remove "Quote Request" link, enhance "Get Quote" button
- Add dropdowns for Services, Industries, Locations if they have sub-pages

### Non-Functional Requirements
- Maintain accessibility: ARIA labels for dropdowns
- Responsive: Clean mobile menu
- Performance: No impact on page load
- SEO: Ensure all links remain crawlable

## Implementation Plan
1. Update components/ui/Navigation.tsx to include dropdown functionality (use Radix UI or similar for accessibility)
2. Modify app/layout.tsx to include Navigation and Footer, wrapping {children}
3. Remove Navigation/Footer imports from individual pages (e.g., app/page.tsx, app/about/page.tsx)
4. Test on desktop, tablet, mobile
5. Validate no broken links or navigation issues

## Success Metrics
- Reduced header height/width usage
- Positive user feedback on cleanliness
- No drop in navigation to key pages (track via analytics)

## Risks
- Users might miss removed top-level items; mitigate with clear dropdowns
- Implementation complexity for mega menus; start simple

Prepared for Claude Code implementation.
