```1:248:production-readiness.md
# Production Readiness Checklist for Canadian Metal Fabricators Website

This document outlines the steps to make the website fully production-ready based on the codebase audit. It includes code changes, configuration updates, and best practices. Once implemented, the site will be optimized for security, performance, and cleanliness.

## 1. Clean Up Debug Code and Console Logs

Remove development-only elements to prevent info leaks and improve performance.

### Remove Debug Panel in ContactConfirmStep.tsx

```tsx
// File: src/components/quote-wizard/ContactConfirmStep.tsx
// Remove lines 97-108 (debug panel)
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
  <h4 className="font-medium text-yellow-800 mb-2">🐛 Debug Info:</h4>
  <div className="space-y-1 text-yellow-700">
    <div>Terms Accepted: <strong>{acceptedTerms ? 'YES' : 'NO'}</strong></div>
    <div>Name: <strong>{customer.name || 'empty'}</strong></div>
    <div>Email: <strong>{customer.email || 'empty'}</strong></div>
    <div>Company: <strong>{customer.company || 'empty'}</strong></div>
    <div>Submitting: <strong>{isSubmitting ? 'YES' : 'NO'}</strong></div>
    <div>Errors: <strong>{Object.keys(errors).length > 0 ? Object.keys(errors).join(', ') : 'none'}</strong></div>
  </div>
</div>
```

### Remove Console Logs

- In `src/components/quote-wizard/ContactConfirmStep.tsx`:
  - Remove `console.log` from `validate()` (lines 38-41, 67).
  - Remove `console.log` from `handleSubmit()` (lines 73-85).
  - Remove `console.log` from terms checkbox `onChange` (line 232).
  - Remove `console.log` from submit button `onClick` (line 282).

- In `src/components/QuoteWizard.tsx`:
  - Remove `console.log` from `submitQuote()` (lines 102-107, 130-133, 143).
  - Remove `console.log` from API response handling (line 151).

- In `src/app/api/quote/route.ts`:
  - Remove `console.log` from quote generation (lines 88-96, 151).

## 2. Resolve ESLint Warnings

Fix missing dependency in `useEffect` for `TestimonialCarousel.tsx`:

```tsx
// File: src/components/TestimonialCarousel.tsx
// Update line 103
useEffect(() => {
  if (isPlaying) {
    startAutoplay()
  } else {
    stopAutoplay()
  }
  return () => stopAutoplay()
}, [isPlaying, autoplayInterval, testimonials.length, startAutoplay]);  // Added startAutoplay
```

Run `npm run lint` to verify.

## 3. Update Dependencies

- Edit `package.json`: Change `"next": "15.3.5"` to `"next": "^14.2.15"`.
- Run `npm install`, `npm update`, and `npm audit fix`.

## 4. Enhance Security Headers in vercel.json

Add CSP header:

```json
// File: vercel.json
// Update headers section (around lines 15-37)
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      // Existing headers...
      {
        "key": "Content-Security-Policy",
        "value": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self';"
      }
    ]
  }
]
```

## 5. Other Checks

- Set environment variables in Vercel dashboard (e.g., for analytics).
- Add `next lint` to build script in `package.json`.
- Commit modified .md files (e.g., `git add . && git commit -m "Prep for production"`).
- Test: Run `npm run build` and redeploy to Vercel.

## Next Steps: SEO Optimization

After these changes, focus on:
- Enhance schema in `layout.tsx`.
- Target local keywords from `5_seo-gap.md`.
- Integrate Google Business and Analytics.

Apply these via code edits or a PR, then test thoroughly.
```