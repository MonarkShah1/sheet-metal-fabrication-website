## Homepage Hero Cleanup + Services Hero Text Effect (for Claude to implement; no code changes applied)

- Purpose: Update homepage hero by removing the logo image and replacing the badge copy with a more relevant message; add the same gradient text effect used elsewhere to the Services page hero heading.
- Scope: `hero.tsx` (homepage), `app/services/page.tsx` (services page).

---

### A) Homepage hero updates (remove logo, change badge)

- File: `hero.tsx`

#### Current (for reference)
```20:37:hero.tsx
<div className="relative max-w-7xl mx-auto text-center animate-fade-in">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
    <span className="text-industry-blue mr-2">🏭</span>
    <span className="text-sm font-medium">Since 1992</span>
  </div>
  {/* optional logo block may exist here */}
```

If a logo block was added previously (using `OptimizedImage` and `businessInfo.logo`):
```tsx
<div className="mb-6 flex justify-center">
  <OptimizedImage
    src={businessInfo.logo}
    alt={`${businessInfo.name} logo`}
    width={200}
    height={48}
    priority
    className="h-12 w-auto"
  />
</div>
```

#### Required changes
1) Remove the logo entirely
- Delete the entire logo `<div className="mb-6 flex justify-center">...</div>` block.
- Remove now-unused imports at the top of `hero.tsx`:
  - `import { businessInfo } from '@/config/business-info'`
  - `import { OptimizedImage } from '@/components/OptimizedImage'`

2) Replace the badge copy/icon with a home-relevant label
- Replace the badge content from “🏭 Since 1992” to “🔧 Proven Fundamentals”. Keep the same badge container classes.

Before:
```tsx
<div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
  <span className="text-industry-blue mr-2">🏭</span>
  <span className="text-sm font-medium">Since 1992</span>
</div>
```
After:
```tsx
<div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
  <span className="text-industry-blue mr-2">🔧</span>
  <span className="text-sm font-medium">Proven Fundamentals</span>
</div>
```

- Note: Do not alter heading, paragraph, or buttons beyond this.

#### Acceptance criteria (Homepage)
- No logo image is rendered in the hero.
- The badge reads “🔧 Proven Fundamentals”.
- Layout spacing remains balanced where the logo previously appeared.
- No unused imports remain; build has no type or lint errors.

---

### B) Services page hero: add gradient text effect like other pages

- File: `app/services/page.tsx`

#### Current (for reference)
```59:66:app/services/page.tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  Complete Sheet Metal Fabrication Services
</h1>
<p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
  From concept to completion, we provide comprehensive sheet metal fabrication services...
</p>
```

#### Required change
- Add a gradient span to the last word “Services” to match the gradient effect used elsewhere.

After:
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  Complete Sheet Metal Fabrication
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Services</span>
</h1>
```

- Keep the rest of the hero section unchanged.

#### Acceptance criteria (Services page)
- Hero heading shows a blue→orange gradient on the word “Services”, consistent with other pages.
- No layout shift; heading remains on two lines at common breakpoints (ok if it wraps naturally).

---

## QA checklist
- Homepage: confirm no logo element in the DOM, badge reads “🔧 Proven Fundamentals”.
- Services: verify gradient span renders correctly across sm/md/lg.
- No console warnings/errors; build/test passes. 