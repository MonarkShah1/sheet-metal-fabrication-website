# PRD: Quote Flow — Project Details Step UI Cleanup (Do not code here; pass to Claude Code)

## Summary
Clean up the "Project Details" step (step 3 in the quote wizard) to reduce excessive whitespace, improve selector styling, and tighten the layout while preserving all existing functionality. This should make the form feel compact, readable, and consistent with the rest of the site.

## Scope
- Target: Project Details screen in the quote wizard (post-upload). Likely files:
  - `app/quote/page.tsx` (wizard shell)
  - `components/quote/ProjectDetails.tsx` or similar step component
  - Shared form controls in `components/input.tsx`, `components/select.tsx`, `components/fieldset.tsx`
- Do not modify business logic, validation, or submission.

## Problems Observed
- Excessive whitespace (top padding, between fields, around helper messages).
- Dropdown selectors feel out-of-place (default browser style / misaligned caret).
- Info icons and labels have inconsistent spacing and alignment.
- The security notice card has oversized padding and spacing.
- Buttons row has too much breathing room; alignment is loose.

## Goals
- Reduce vertical space and tighten density without creating clutter.
- Replace default-looking dropdowns with a clean, modern control style.
- Improve alignment and hierarchy of labels, inputs, helper texts, and icons.
- Keep readability high and ensure excellent mobile ergonomics.

## Required UI Changes

### 1) Card and Section Spacing
- Reduce outer section/card paddings:
  - From: `py-16 px-8` (or similar)
  - To: `py-8 md:py-10 px-6 md:px-8`
- Constrain content width:
  - Wrap main content in `max-w-2xl mx-auto` (desktop) for focused reading.
- Reduce inter-field spacing:
  - Field stack spacing from `space-y-8` → `space-y-5` (mobile) and `space-y-6` (desktop).

### 2) Field Layout and Typography
- Labels
  - Use `text-sm font-medium text-industry-dark`.
  - Align info icon inline with label; gap `gap-1.5`.
- Helper text
  - `text-xs text-industry-gray-500 mt-1` and keep to one line where possible.
- Inputs
  - Standardize to 44px control height (`h-11`), 12px horizontal padding (`px-3`).
  - Border: `border border-industry-gray-300 focus:border-industry-blue focus:ring-2 focus:ring-industry-blue/20`.

### 3) Selector Restyle (Materials, Finishes/Plating)
- Replace native select with a styled popover select or segmented options:
  - Use a custom select component (existing `components/select.tsx` if available) with:
    - Chevron icon right-aligned, consistent height, `rounded-lg`, hover bg.
    - Searchable list (optional; if trivial) and keyboard navigation.
  - Alternative (acceptable): radio-list inside a popover for better scannability.
- Visual specs for the control:
  - Class: `h-11 px-3 rounded-lg border border-industry-gray-300 bg-white hover:border-industry-gray-400 focus:outline-none focus:ring-2 focus:ring-industry-blue/20`.
  - Placeholder text `text-industry-gray-500`.
- If multiple values are supported, use tokenized chips below the control with remove “×”.

### 4) Textarea polish (Special Requirements)
- Min height `min-h-[120px]`, `resize-y`, auto-expand up to 240px via JS or CSS if easy.
- Add helper line below: `text-xs text-industry-gray-500` (e.g., “We’ll address everything in our discovery call.”)
- Optional: character count at right `text-xs text-industry-gray-400` (e.g., `0/1000`).

### 5) Security Notice Card
- Reduce padding: from `p-6` → `p-3 md:p-4`.
- Compact icon/text layout with `gap-2`.
- Tone down background to `bg-green-50` with subtle border `border-green-100`.
- Text sizes: title `text-sm font-medium`, description `text-xs text-gray-600`.

### 6) Buttons Row
- Align buttons on a single row with space between:
  - Container: `flex items-center justify-between pt-6` (reduced from larger spacing).
- Button sizes: `h-11 px-5 rounded-lg`.
- Mobile: stack buttons (`flex-col gap-3`), desktop inline.
- Optional: sticky footer on mobile only `sticky bottom-0 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t` for improved ergonomics.

### 7) Stepper/Header adjustments
- Reduce vertical spacing above the card (wizard header): `mt-4 md:mt-6`.
- Use smaller step indicator sizes for compactness.

## Accessibility
- Labels must be associated via `htmlFor`/`aria-labelledby`.
- Custom selects must be keyboard-accessible (Tab/Enter/Arrow navigation) and announce options with `role="listbox"`/`role="option"`.
- Focus states clearly visible (2px ring with proper contrast).

## Performance/Code Constraints
- Reuse existing form components (`input.tsx`, `select.tsx`, `fieldset.tsx`) to keep consistency.
- Avoid heavy client-side libraries for selects; prefer lightweight popover/listbox (Headless UI-like pattern if available).
- No changes to form submission logic.

## Acceptance Criteria
- Overall vertical height reduced by ~20–30% on desktop without losing clarity.
- Selectors have consistent, modern styling (no default browser chrome, aligned chevron, 44px tall).
- Labels, info icons, and helper text align neatly with uniform spacing.
- Textarea is compact by default but usable; helper text visible.
- Security notice is visually smaller but still noticeable.
- Buttons align neatly; no large empty regions around them. Mobile ergonomics improved.
- No regressions in validation or submission.

## QA Checklist
- Visual density: compare before/after screenshots — spacing reduced, hierarchy improved.
- Keyboard nav: Tab order logical; select is navigable via keyboard; focus rings visible.
- Responsive: Mobile stacking intact; no overflow or clipped controls.
- Accessibility: Axe/Lighthouse shows no new issues; color contrast AA or better.
- Behavior: Form still submits successfully; field values preserved when navigating back/next. 