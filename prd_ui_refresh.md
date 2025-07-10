# PRD – UI Refresh + Accessibility Pass

> **Context files:** `1_brand-overview.md`, `2_brand-voice.md`, `3_design-tokens.md`, `6_ui-components.md`, `5_seo-gap.md`
>
> *Depends on delivery of the Photo & Video Asset Library* (hero + equipment shots)

---
## 1 Problem & Goal
The site’s current template look, limited imagery, and missing accessibility cues undercut trust and conversions. We will **modernize the UI, tighten brand alignment, and achieve WCAG AA** to raise engagement and SEO signals.

**Success definition:** +25 % avg. session duration & +15 % CTA click‑through within 60 days of launch.

---
## 2 Success Metrics (60‑day post‑launch)
| Metric                         | Target   |
| ------------------------------ | -------- |
| Avg. time on page (Home)       | +25 %    |
| Get‑Quote CTA clicks           | +15 %    |
| LCP (Home)                     | ≤2.0 s   |
| CLS                            | ≤0.1     |
| WCAG AA issues (axe scan)      | 0        |

---
## 3 Primary User Stories
1. **As a first‑time visitor** I want a **compelling hero with real shop imagery** so I immediately trust CMF's capabilities.
   - *Visual Impact:* Hero needs high-contrast overlay text, professional lighting in photos, and clear focal point
   - *Trust Signals:* Show active work environment, quality equipment, and professional team
2. **As a mobile user** I want a **sticky header with quick "Quote" & "Call" buttons** so I can act without scrolling back.
   - *Thumb-friendly:* CTAs minimum 44px touch target, positioned for easy reach
   - *Visual Hierarchy:* Quote button should be primary color, Call secondary styling
3. **As a visually impaired user** I need **high‑contrast text, keyboard navigation, and alt tags** so the site is fully accessible.
   - *Beyond WCAG:* 7:1 contrast ratio for body text, clear focus indicators, consistent spacing
4. **As CMF Marketing** I want to **swap hero photos via CMS** without code pushes.
   - *Consistency:* Template maintains visual impact regardless of photo content
5. **As a potential customer** I want to **see real work examples immediately** so I can gauge quality before scrolling.
   - *Visual Proof:* Equipment gallery above fold, before/after project shots, detail close-ups
6. **As a busy contractor** I want **scannable content with clear visual hierarchy** so I can quickly find what I need.
   - *Information Architecture:* Services clearly categorized, pricing/timeline visible early

---
## 4 Scope & Components
| Component (`6_ui-components.md`) | Key Features |
|---------------------------------|--------------|
| **HeroSection v2**              | Full‑bleed image/video, headline ≤60 chars, subtext ≤120 chars, primary CTA, secondary “Watch video” CTA |
| **StickyHeader**                | Logo, nav links, Get Quote (button), tel link; collapses to hamburger ≤768 px |
| **EquipmentGallery**            | Masonry grid, lightbox with spec overlay, lazy‑loaded `next/image` |
| **TestimonialCarousel**         | 3–5 rotating quotes, autoplay 6 s, pause on hover |
| **FooterCTA**                   | Re‑usable in all pages; address, phone (tel link), email (mailto), secondary links |

### Enhanced Component Specifications (Visual Design Focus)

#### **HeroSection v2** - First Impression Impact
| Visual Spec | Requirement | Visitor Psychology |
|-------------|-------------|-------------------|
| Layout | Full-bleed image/video with dark overlay (40% opacity) | Creates immersive, professional atmosphere |
| Headline | ≤60 chars, H1 typography scale, white text | Instant clarity of value proposition |
| Subtext | ≤120 chars, Body Large scale, 80% white | Supporting detail without overwhelming |
| Primary CTA | Orange/red button, 56px height, shadow/hover effects | Urgency and action-oriented |
| Secondary CTA | Ghost button "Watch video", white border | Lower commitment alternative |
| Mobile Layout | Stacked vertically, 16px padding, CTA full-width | Thumb-friendly interaction |

#### **StickyHeader** - Persistent Navigation
| Visual Spec | Requirement | Visitor Psychology |
|-------------|-------------|-------------------|
| Background | Semi-transparent white (95% opacity) with blur | Modern, clean separation from content |
| Logo | 40px height, maintains brand recognition | Consistent brand presence |
| Nav Links | 16px text, 44px click targets, hover underline | Clear navigation hierarchy |
| Get Quote CTA | Primary button style, 40px height | Always-available conversion point |
| Mobile Transform | Hamburger menu, slide-in animation | Familiar mobile pattern |

#### **EquipmentGallery** - Visual Proof
| Visual Spec | Requirement | Visitor Psychology |
|-------------|-------------|-------------------|
| Grid Layout | Masonry/Pinterest style, 4 cols desktop, 2 mobile | Engaging, browsable experience |
| Image Treatment | Subtle shadow, hover zoom (1.05x), rounded corners | Interactive feedback |
| Lightbox | Dark overlay, equipment specs overlay, navigation | Detailed inspection capability |
| Loading | Skeleton placeholders, progressive loading | Smooth perceived performance |

#### **TestimonialCarousel** - Social Proof
| Visual Spec | Requirement | Visitor Psychology |
|-------------|-------------|-------------------|
| Card Design | White cards with subtle shadow, client photo | Personal connection and trust |
| Typography | Quote in italic, client name in bold | Clear attribution and authenticity |
| Navigation | Subtle dot indicators, autoplay 6s, pause on hover | User control without distraction |
| Layout | Center-aligned, max 800px width | Focused attention on content |

#### **FooterCTA** - Final Conversion Opportunity
| Visual Spec | Requirement | Visitor Psychology |
|-------------|-------------|-------------------|
| Background | Dark theme (brand secondary color) | Visual separation from main content |
| Contact Info | Large, clickable phone/email, address | Multiple conversion paths |
| CTA Repetition | Secondary "Get Quote" button | Last chance conversion |
| Social Proof | Years in business, certifications | Final trust reinforcement |

---
## 5 Functional Requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| UI‑1 | Apply `3_design-tokens.md` for colors, fonts, radii | Must |
| UI‑2 | Swap hero content via Markdown/YAML in CMS folder | Should |
| UI‑3 | Keyboard‑navigable sticky header & nav | Must |
| UI‑4 | All images have descriptive `alt` & width/height to reduce CLS | Must |
| UI‑5 | Dark‑mode via `prefers-color-scheme` | Should |
| UI‑6 | Lazy‑load off‑screen images & defer non‑critical JS | Must |
| UI‑7 | Run axe‑core tests in CI; block deploy on violations | Must |
| UI‑8 | Integrate Google Tag event `cta_click_hero` | Should |
| UI‑9 | Enhanced visual accessibility: 7:1 contrast for body text | Should |
| UI‑10 | Motion preferences: respect `prefers-reduced-motion` | Must |
| UI‑11 | Focus indicators: 3px visible outline, skip links | Must |
| UI‑12 | Color-blind friendly: icons + text for all status indicators | Should |
| UI‑13 | Typography readability: 1.5+ line height, 60-75 char line length | Must |

---
## 6 Technical Notes
- **Stack:** Next.js / Tailwind; leverage `next-themes` for dark‑mode.
- **Images:** Sourced from S3 bucket populated by Photo PRD; optimized via `next/image`.
- **Accessibility:** Use Headless UI or Radix for components; run `@axe-core/cli` in GitHub Actions.
- **Performance:** Preload hero font; use `content-visibility:auto` for below‑fold sections.

---
## 7 Milestones & Timeline
| Phase | Deliverable                                              | Owner  | ETA      |
| ----- | -------------------------------------------------------- | ------ | -------- |
| A     | Low‑fi wireframes (mobile & desktop)                     | Design | T + 1 wk |
| B     | Hi‑fi mockups w/ actual brand photos                     | Design | T + 2 wk |
| C     | Component build (Hero, Header, Gallery, Footer)          | Dev    | T + 4 wk |
| D     | Accessibility audit & fixes                              | QA     | T + 5 wk |
| E     | Beta deploy + lighthouse/axe reports                     | Dev    | T + 6 wk |
| F     | Production launch; monitor metrics via GA4 & Hotjar      | Growth | T + 8 wk |

---
## 8 Dependencies & Risks
- **Photo/Video assets** must be finalized by Phase B.
- Tailwind token refactor could collide with Quote Wizard styles—coordinate branch merge.

---
## 9 Out of Scope
- Complete CMS migration
- Multilingual content
- Blog layout redesign (handled in future Content PRD)

---
## 10 Open Questions
1. Final decision on dark‑mode color palette variants?
2. CMS choice for hero content (MDX vs. Sanity vs. simple Markdown)?
3. Any legal text updates needed in the footer during refresh?

---
## 11 Visual Design & Typography Requirements
### Visual Hierarchy Principles
- **F-Pattern Layout:** Hero content follows natural reading flow (left-to-right, top-to-bottom)
- **Rule of 3:** Maximum 3 visual elements compete for attention in any viewport
- **Progressive Disclosure:** Critical info first, supporting details accessible via interaction
- **Contrast Ratios:** Minimum 4.5:1 for normal text, 7:1 for enhanced readability

### Typography Scale
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 Hero | 3.5rem (56px) | 700 | 1.1 | Main headline only |
| H2 Section | 2.5rem (40px) | 600 | 1.2 | Section headers |
| H3 Subsection | 1.5rem (24px) | 600 | 1.3 | Component titles |
| Body Large | 1.125rem (18px) | 400 | 1.6 | Hero subtext, intros |
| Body | 1rem (16px) | 400 | 1.5 | General content |
| Small | 0.875rem (14px) | 400 | 1.4 | Captions, meta info |

### Color Psychology for Conversion
- **Primary CTA:** High-energy orange/red for urgency and action
- **Secondary CTA:** Professional blue for trust and reliability  
- **Success States:** Green for confirmation and positive feedback
- **Warning/Alert:** Yellow for attention without alarm
- **Error States:** Red for clear problem identification

---
## 12 Visitor Journey & Conversion Optimization

### Critical Path Analysis (First 8 Seconds)
| Time | Visitor Action | Visual Trigger | Psychological State |
|------|---------------|----------------|-------------------|
| 0-2s | Page load, hero scan | Hero image quality, loading speed | Forming first impression |
| 2-4s | Reading headline | Clear value proposition, contrast | Evaluating relevance |
| 4-6s | Scanning subtext | Supporting benefits, easy scanning | Building interest |
| 6-8s | CTA evaluation | Button prominence, trust signals | Decision to engage |

### Conversion Funnel Optimization
#### Stage 1: Awareness (Hero Section)
- **Goal:** Establish credibility and relevance
- **Visual Elements:** Professional photography, clear headline, social proof
- **Psychological Triggers:** Authority, social proof, clarity

#### Stage 2: Interest (Services/Gallery)
- **Goal:** Demonstrate capabilities and quality
- **Visual Elements:** Before/after images, equipment shots, process videos
- **Psychological Triggers:** Proof, expertise, results

#### Stage 3: Consideration (Testimonials)
- **Goal:** Build trust and reduce risk perception
- **Visual Elements:** Client photos, star ratings, specific results
- **Psychological Triggers:** Social proof, specificity, relatability

#### Stage 4: Action (CTA Optimization)
- **Goal:** Remove friction and encourage contact
- **Visual Elements:** Multiple contact options, clear next steps
- **Psychological Triggers:** Urgency, convenience, choice

### Mobile-First Conversion Priorities
1. **Thumb Zone Optimization:** Primary CTAs in easily reachable areas
2. **Simplified Navigation:** Maximum 5 main menu items
3. **Quick Contact:** Sticky call/text buttons
4. **Visual Hierarchy:** Large touch targets, clear contrast
5. **Progressive Disclosure:** Essential info first, details on demand

### Psychological Triggers for B2B Conversion
- **Time Pressure:** "Free quote within 24 hours"
- **Social Proof:** "Trusted by 200+ contractors"
- **Authority:** Certifications, years of experience
- **Reciprocity:** Free resources, helpful content
- **Scarcity:** Limited-time offers, exclusive services

