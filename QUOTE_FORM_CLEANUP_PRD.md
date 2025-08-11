# PRD: Quote Submission Form UI Cleanup

## Overview
### Purpose
Improve the quote submission page (post-upload form) by reducing excessive white space and restyling the selector for better usability and aesthetics. This enhances user experience without altering functionality.

### Scope
- Target file: `app/quote/page.tsx` (or the component handling the post-upload form, e.g., a QuoteForm.tsx if separate).
- Focus on layout tightening and selector redesign.
- Assume this is the page with fields like "Enter the number of units needed", "When do you need this completed?" (rush selector).

### Non-goals
- No changes to form logic, validation, or submission.
- No new fields or content additions.

## Requirements

### 1. Reduce White Space
- Tighten overall padding/margins:
  - Section padding: Reduce from large values (e.g., py-20) to py-12 or similar.
  - Form container: Add max-width (e.g., max-w-2xl mx-auto) if not present to center and constrain.
  - Field spacing: Change gaps between inputs/labels from large (e.g., mb-8) to mb-4.
- Ensure responsive: On mobile, stack fields vertically with minimal vertical space.

### 2. Restyle the Selector
- Current: Likely a dropdown for rush options (e.g., "Rush (1-3 days)").
- New: Convert to radio buttons or segmented control for better visibility and interaction.
  - Use horizontal buttons on desktop, stack on mobile.
  - Styles: Bordered buttons with hover/active states (e.g., bg-industry-blue on select).
  - Options: Keep existing (e.g., Standard, Rush) but make selectable via clicks.
- Example markup:
```tsx
<fieldset className="space-y-2">
  <legend className="text-sm font-medium mb-2">When do you need this completed?</legend>
  <div className="flex gap-4">
    <label className="flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
      <input type="radio" name="rush" value="standard" className="mr-2" />
      Standard (Additional fees apply)
    </label>
    <label className="flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
      <input type="radio" name="rush" value="rush" className="mr-2" />
      Rush (1-3 days)
    </label>
  </div>
</fieldset>
```

### 3. General Polish
- Center the form in the viewport.
- Add subtle shadows or borders to fields for definition.
- Ensure labels are clear and accessible (e.g., htmlFor attributes).

## Acceptance Criteria
- White space reduced: Form feels compact, no large empty areas.
- Selector: Changed to radio/segmented style; functional and styled nicely.
- Responsive: Looks good on mobile (stacked) and desktop (side-by-side).
- No functionality breaks: Form still submits as before.

## QA Checklist
- Visual: Minimal white space; selector looks modern/non-dropdown.
- Interaction: Selector choices clickable; hover states work.
- Mobile: Fields stack without overflow.
- Accessibility: Labels associated; keyboard-navigable.
- No errors: Console clean; form submits. 