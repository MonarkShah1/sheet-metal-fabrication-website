## Homepage Upload → Quote Redirect Spec (for Claude to implement; no code changes applied)

- **Purpose**: The upload widget on the homepage appears to accept files but does nothing. Replace this with a simple and reliable redirect to the Quote page.
- **Scope**: `QuoteCTA.tsx` only (used on the homepage via `app/page.tsx`).
- **Do not** change other files unless explicitly specified here.

### Where it is today

```90:119:QuoteCTA.tsx
<div className="text-center">
  ...
  <h3 className="text-xl font-semibold mb-2">Drop your CAD files here</h3>
  <p className="text-gray-300 mb-4">or click to browse</p>
  <input
    type="file"
    accept=".cad,.dxf,.dwg,.step,.stp,.iges,.igs"
    multiple
    className="hidden"
    id="file-upload"
    aria-label="Upload CAD Files for Quote"
  />
  <label htmlFor="file-upload" className="inline-block bg-industry-orange ...">Browse Files</label>
  <div className="mt-4 text-sm text-gray-400">Supported formats: CAD, DXF, DWG, STEP, STP, IGES, IGS</div>
</div>
```

```141:150:QuoteCTA.tsx
<button type="button" className="inline-flex items-center px-8 py-4 bg-industry-orange ...">
  <span>Get Straightforward Quote</span>
  ...
</button>
```

### Required changes in `QuoteCTA.tsx`

1) Remove upload-only behavior; make area a link to `/quote`
- Add: `import Link from 'next/link'`
- Remove state and handlers related to uploads:
  - `uploadProgress`, its JSX block, and any logic that updates it
  - The hidden `<input type="file" ...>` and its `<label>`
  - `handleDrop` should no longer try to process files; either delete it and drag handlers, or keep the visual block but wrap the entire clickable area in a link to `/quote`
- Replace the current upload block (the dashed border container) with a link card that navigates to `/quote` on click and via keyboard:

```tsx
<Link href="/quote" className="block border-2 border-dashed rounded-xl p-8 border-white/30 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" aria-label="Start your quote">
  <div className="text-center">
    <div className="w-16 h-16 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg className="w-8 h-8 text-industry-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Start Your Quote</h3>
    <p className="text-gray-300">Go to the Quote Request page</p>
  </div>
</Link>
```

2) Convert the primary CTA button to a link to `/quote`
- Replace the existing `<button type="button">` with a `Link` that keeps the same classes for styling and navigates to `/quote`:

```tsx
<Link href="/quote" className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50" aria-label="Go to Quote Request">
  <span>Get Straightforward Quote</span>
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</Link>
```

3) Clean up unused code
- Remove `isDragOver` handlers and conditional styles that depended on it or simplify the dashed border styling in the new link card.
- Delete `uploadProgress` state and its progress bar JSX block (since no upload occurs).
- Remove any now-unused imports and variables.

### Optional copy tweaks (if desired)
- Update the paragraph above to set the right expectation:
  - From: “Upload your CAD file and get a straightforward quote...”
  - To: “Get a straightforward quote. We think like an OEM to deliver exactly what you need, when you need it—without the complexity.”

### Accessibility
- Ensure the link card has a clear `aria-label` and visible focus ring (`focus:ring` classes already in examples).
- Verify keyboard navigation: Tab should land on the link card and both CTAs, Enter/Space should navigate.

## Acceptance criteria
- Clicking anywhere on the former upload area navigates to `/quote`.
- The "Browse Files" input/label are removed; no file selection dialog appears on click or drag.
- The primary CTA is a proper link to `/quote` (not a button with no action).
- No unused state/handlers remain; no console warnings.
- Mobile and desktop layouts remain visually similar to current design.

## QA checklist
- Tab through the page: focus order includes the link card, primary quote link, and contact link.
- Press Enter on the link card: browser navigates to `/quote`.
- Drag-and-drop no longer shows upload affordances nor errors.
- Lighthouse/axe: no interactive control without a name; link names are descriptive.
- No errors in the console in production build. 