## Services Overview Grid Centering & Equal Card Sizes (for Claude to implement; no code applied)

- **Purpose**: Center the services overview row and ensure all service cards are the same width and height.
- **Scope**: `app/services/page.tsx` only, inside the "Services Overview Section" grid (lines ~96–146). No other sections should be modified.

### Current code (for reference)

```96:146:app/services/page.tsx
<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
  <Link href="/services/engineering">
    <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center">
      ...
    </div>
  </Link>
  ... 4 more cards ...
</div>
```

### Required changes

1) Center the grid and use 5 equal columns on large screens
- The grid currently uses `lg:grid-cols-6`, which left-aligns 5 cards with an empty sixth slot. Change to 5 columns and ensure items stretch equally.
- Replace the grid container classes as follows:
  - From: `grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16`
  - To: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 items-stretch`

2) Make each card a uniform height
- Ensure each card fills its grid cell height so all boxes match the tallest content.
- For each card wrapper `<div ...>` inside the `Link`, add `h-full` and convert to a flex column so spacing is consistent:
  - Add: `h-full flex flex-col`
- Keep existing styling; append the new classes at the end of the className string to avoid accidental precedence issues.

Example for the first card:
```tsx
<div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col">
  ...
</div>
```

3) Optional (for even stricter uniformity)
- If minor height differences remain at `md` due to line wrapping, add a minimum height to the card body:
  - Append `min-h-[220px]` (tweak value if needed) to the same card class list to lock a consistent minimum.

### Do not change
- The badge, heading, and paragraph above the grid.
- Links/URLs and icons.
- Any other service sections below.

## Acceptance criteria
- On large screens (≥1024px), the five service cards render in a single row that is centered (no empty column at the right), with equal widths.
- All cards have equal height within the row; hover effects and animations remain intact.
- At smaller breakpoints, cards wrap to 3 columns (md), 2 columns (sm), and 1 column (base), maintaining equal heights per row.
- No layout shift or overflow; no changes to content or links.

## QA checklist
- Resize from mobile → desktop and confirm: 1 → 2 → 3 → 5 columns.
- Verify all five cards share the same height at each breakpoint.
- Check keyboard focus and hover states remain unchanged.
- Lighthouse/axe reports no new accessibility issues. 