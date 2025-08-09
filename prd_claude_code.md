# PRD – Claude Code Implementation Guide

> Context files: `prd-1.md`, `prd-2.md`, `prd_ui_refresh.md`, `2_brand-voice.md`, `3_design-tokens.md`, `6_ui-components.md`
>
> Goal: Define a repeatable, Claude-friendly way to slice work into small, verifiable PRs (≤ ~250 added LOC) with explicit prompts, acceptance criteria, and checklists.

---
## 1 Problem & Goal
Engineering velocity is limited by oversized PRs and ambiguous scopes. We will standardize tasks for Claude Code to ship small, high-quality changes rapidly without context overflow.

Success definition: 80% of PRs ≤ 250 added lines; cycle time < 2 days; 0 critical accessibility regressions.

---
## 2 Principles for Claude Tasks
- Small scope: 1–3 files changed, < 250 added lines
- Deterministic: concrete acceptance criteria with fixtures or routes to verify
- Safe by default: feature-flag or behind prop; no breaking public API
- Observable: confirm via local route, console output, or test script
- Reversible: clean edit boundaries, clear changelog

---
## 3 Task Templates (Copy/Paste)

### Template A – UI Component Edit
- Title: ComponentName vN – change X
- Files: `src/components/ComponentName.tsx`
- Acceptance Criteria:
  - [ ] Visual: matches Figma spec (padding, sizes)
  - [ ] Accessibility: tab order, focus ring, alt text
  - [ ] Performance: no CLS, images use `next/image`
- Manual QA:
  - [ ] Visit / (or route) and visually verify
  - [ ] Keyboard navigate; screen reader announces labels
- Out of scope: state management changes
- Prompt for Claude:
  """
  Modify `src/components/ComponentName.tsx` to [change]. Keep edits under 150 lines. Use Tailwind tokens in `3_design-tokens.md`. Maintain keyboard accessibility and ensure `next/image` is used with width/height to avoid CLS. Do not refactor unrelated code.
  """

### Template B – Page Content/SEO
- Title: Page SEO pass – /route
- Files: `src/app/route/page.tsx`, optional `sitemap.ts`, `robots.txt`
- Acceptance Criteria:
  - [ ] Metadata: title, description, OpenGraph
  - [ ] Schema: BreadcrumbList/FAQ where relevant
  - [ ] LCP ≤ 2.5 s (no blocking images/scripts)
- Manual QA:
  - [ ] Lighthouse ≥ 90 perf; Rich Results passes
- Prompt:
  """
  Update SEO metadata and add Schema.org where appropriate on `/route`. Keep net additions < 120 lines. Use Next.js App Router metadata exports.
  """

### Template C – API/Backend Small Change
- Title: API improvement – /api/... validation
- Files: `src/app/api/.../route.ts`
- Acceptance Criteria:
  - [ ] Validate inputs; return 400 with helpful message
  - [ ] Log structured event; no secrets in logs
  - [ ] Unit-free: keep pure helpers in `src/lib`
- Manual QA:
  - [ ] cURL example returns 200/400 appropriately
- Prompt:
  """
  Add input validation to `src/app/api/.../route.ts`. Keep change ≤ 150 lines. Handle error paths, return JSON with `error` string. Do not change response shape on success.
  """

---
## 4 Backlog Slices (Ready for Claude)
1. Hero image swap to real photo with alt improvements
   - Files: `src/components/Hero.tsx`
   - Criteria: backgroundImage prop default updated; alt text specific; sizes tuned; ≤ 50 lines
2. Add `PhotoShowcase` section to Home
   - Files: `src/components/ui/PhotoShowcase.tsx`, `src/app/page.tsx`
   - Criteria: responsive grid, `next/image`, captions optional; ≤ 200 lines
3. Evidence: add background photo + contrast check
   - Files: `src/components/Evidence.tsx`
   - Criteria: maintains AA contrast; mobile safe; ≤ 80 lines
4. Testimonials: lazy-load avatars; sizes attr
   - Files: `src/components/TestimonialCarousel.tsx`
   - Criteria: add `sizes`, ensure `fill` with container size; ≤ 60 lines
5. Quote API: stricter validation on email/phone
   - Files: `src/app/api/quote/route.ts`
   - Criteria: 400 on invalid input; rate-limit TODO comment removed; ≤ 120 lines

---
## 5 PR Checklist (Claude must tick)
- [ ] PR adds ≤ 250 lines; ≤ 3 files
- [ ] Lint & build pass: `npm run build`
- [ ] Accessibility: keyboard nav; alt text present; focus visible
- [ ] Images: `next/image` with width/height or `fill` + sized container
- [ ] No unrelated refactors
- [ ] Changelog in PR description with Before/After screenshots if UI

---
## 6 Review & Verification
- Local verify commands:
  - Dev: `npm run dev`
  - Build CI gate: `npm run build` (includes `next lint`)
- Visual checks: Home hero, gallery, testimonials
- API checks: POST `/api/quote` with valid/invalid payloads

---
## 7 Risks & Mitigations
- Risk: Scope creep → Mitigation: enforce templates & LOC guard
- Risk: CLS introduced by images → Mitigation: strict `next/image` usage
- Risk: Accessibility regressions → Mitigation: reviewer runs quick keyboard/screen reader pass

---
## 8 Open Questions
1. Should we add a script to block PRs > 250 LOC automatically?
2. Add `@axe-core/cli` to CI now or in a separate devx PR?
3. Preferred screenshot tooling for PRs (Puppeteer vs manual)? 