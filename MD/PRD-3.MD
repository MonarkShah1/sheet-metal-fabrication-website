Product Requirements Document (PRD) for Theme Consistency Across Website Pages
1. Overview
This PRD outlines the requirements for extending the existing homepage theme to all other pages on the custom sheet metal fabrication website. The homepage's visual style, layout, and branding (including Industry 4.0-inspired elements like color palette, typography, and subtle industrial visuals) must be consistently applied site-wide to ensure a cohesive user experience. This builds on previous updates (e.g., messaging alignment) and maintains the brand's focus on reliability, simplicity, and fundamentals without introducing new features or major redesigns.

The updates will ensure all pages feel professional, trustworthy, and aligned with the ICP's needs, while addressing market gaps like inconsistent UX across competitor sites. No changes to core functionality or messaging—focus purely on theme propagation.

Project Name: SheetMetalOutsourcing.com Theme Consistency Update (placeholder)

Version: 1.2 (Update to existing MVP)

Date: July 17, 2025

Stakeholders: Non-developer owner, AI-assisted development (Claude Code CLI).

2. Goals and Objectives
Primary Goal: Achieve full theme consistency across all pages, creating a unified brand presence that reinforces trust and ease of navigation for outsourcing buyers.
Key Metrics for Success:
Consistency: 100% of pages use the same color palette, typography, layout patterns, and visual elements as the homepage.
Performance: No degradation in Lighthouse scores (maintain 90+ for speed/accessibility).
User Experience: Improved navigation flow, with mobile responsiveness intact.
Deployment-Ready: Changes deployable on first Git push, with no errors or regressions.
Market Positioning: Provide a seamless, professional site that stands out by solving UX inconsistencies, helping decision makers focus on content without distractions.
3. Target Audience (ICP)
Primary ICP: Decision makers at multinational companies with operations in Ontario frustrated with supplier headaches in sheet metal fabrication outsourcing.
Needs and Pain Points:
Consistent UX: Easy navigation without jarring style changes between pages.
Reliability: Visuals that convey "Unshakeable Reliability" through uniform design.
Simplicity: Layouts that simplify exploration of services, quotes, and resources.
User Journey: Seamless transitions (e.g., from homepage hero to services details or quote form), maintaining brand immersion.
4. Key Features and Prioritization
Prioritize applying the theme to core pages based on existing structure. Assume pages include: Homepage (already themed), Services, Quote Request, About, Contact, Blog/Resources. Features are phased:

Phase 1: Theme Application to Key Pages (Immediate Focus)

Apply homepage's Tailwind classes, colors, typography, and components to Services, Quote Request, and About pages.
Ensure global elements (e.g., navigation, footer) are consistent.
Phase 2: Full Site Rollout

Extend to remaining pages (e.g., Contact, Blog/Resources).
Add subtle educational placeholders if needed (e.g., in Resources page, per prior PRD).
Phase 3: Polish and Testing

Audit for edge cases (e.g., responsive breakpoints, dark mode if implemented).
5. Design and Theme Requirements
Match the homepage's Industry 4.0 theme exactly, with toned-down AI elements (educational only, not prominent). Reuse existing assets and styles.

Color Palette: Deep grays (#1F2937), blues (#1D4ED8), oranges (#F97316), light grays (#F3F4F6)—apply via Tailwind custom classes.
Typography: Inter sans-serif; consistent sizes (e.g., headings 4xl-6xl, body lg-xl).
Visual Elements: Subtle overlays (e.g., circuit patterns), icons (e.g., Heroicons or emojis), shadows/transitions for interactivity.
Layout Principles:
Mobile-First: Tailwind breakpoints (sm:, md:, lg:).
Grids/Sections: Consistent padding (e.g., py-16 px-6), max-width containers (e.g., max-w-7xl).
Global Consistency: Uniform navigation bar, footer, and section structures.
Messaging Integration: Retain brand-aligned copy from prior updates; no changes unless minor for flow.
Accessibility: Consistent ARIA roles, focus states, alt text.
Performance: Lazy loading, optimized images—match homepage standards.
Page-Specific Guidelines:
Services: Use grid layout like homepage's ServicesGrid; apply themed cards.
Quote Request: Form styling matching QuoteCTA; add themed inputs/buttons.
About: Incorporate 10-year target subtly; use themed sections for values/uniques.
Other Pages: Mirror homepage sections (e.g., hero-like intros, CTAs).
6. Technical Requirements
Stack: Next.js (App Router), TypeScript, Tailwind CSS, Vercel, Git. Reuse existing components (e.g., Hero.tsx).
Implementation: Update page files (e.g., app/services.tsx) with homepage's classes/components. Add shared layouts if needed (e.g., in app/layout.tsx).
SEO: Consistent metadata across pages (e.g., titles with brand keywords like "Sheet Metal Services | Unshakeable Reliability").
Deployment: Vercel-optimized; include vercel.json if missing for consistency.
Testing: Local dev checks, Lighthouse audits for uniformity.
7. Assumptions and Dependencies
Homepage theme is already implemented and approved.
All core pages exist in the codebase (if not, create placeholders).
No new features—purely stylistic updates.
8. Risks and Mitigations
Risk: Inconsistent application leading to visual bugs. Mitigation: Use shared components/styles.
Risk: Performance hits from duplication. Mitigation: Optimize reused code.
Risk: Overlooking pages. Mitigation: List all pages explicitly in implementation.
9. Timeline and Milestones
Milestone 1: Theme applied to key pages and deployed (1-2 days).
Milestone 2: Full site consistency (1 day).
Ongoing: Visual audits and feedback.
This PRD is living – update as needed.



