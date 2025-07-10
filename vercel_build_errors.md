# Vercel Build Failure Analysis and Fix

## 1. Summary of the Problem

The Vercel deployment is failing during the `npm run build` step. The build log shows two main types of issues:
1.  **A critical prerendering error** on the `/_not-found` page, which is causing the build to exit with an error code.
2.  **Several ESLint warnings** related to unused variables and missing dependencies in React hooks.

## 2. Root Cause: Prerendering Error

The primary reason for the build failure is the following error:

```
Error: Event handlers cannot be passed to Client Component props.
  {href: ..., className: ..., onClick: function onClick, children: ...}
                                       ^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

This error means that a Server Component is trying to render a Client Component while passing an `onClick` event handler to it. In Next.js, you cannot pass functions as props from Server Components to Client Components. This is happening during the prerendering of the 404 page (`/_not-found`).

## 3. Secondary Issues: ESLint Warnings

The following warnings were also reported in the build log. While they are not causing the build to fail, it is a good practice to fix them.

*   **`src/app/api/quote/route.ts`**
    *   **Warning:** `'notes' is assigned a value but never used.`
*   **`src/components/EquipmentGallery.tsx`**
    *   **Warning:** `React Hook useEffect has a missing dependency: 'navigateEquipment'.`
*   **`src/components/FooterCTA.tsx`**
    *   **Warning:** `'Image' is defined but never used.`
*   **`src/components/TestimonialCarousel.tsx`**
    *   **Warning:** `React Hook useEffect has a missing dependency: 'startAutoplay'.`

## 4. Recommended Fixes

### Step 1: Fix the Prerendering Error

Since the error is happening on the `/_not-found` page, it's likely caused by a shared component that is used in your main layout, such as a header or navigation bar.

1.  **Identify the problematic component:** Look at your main layout file (`src/app/layout.tsx`) and identify any components that might be using an `onClick` handler. The `Navigation.tsx` component is a strong candidate.
2.  **Convert the component to a Client Component:** The component that is receiving the `onClick` prop needs to be a Client Component. To fix this, open the file for that component (e.g., `src/components/Navigation.tsx`) and add the following line at the very top:
    ```javascript
    'use client'
    ```
    This will tell Next.js to treat this component as a Client Component, which will allow it to receive event handlers as props.

### Step 2: Address the ESLint Warnings

1.  **In `src/app/api/quote/route.ts`:**
    *   Find the line where the `notes` variable is destructured and remove it, as it is not being used.

2.  **In `src/components/EquipmentGallery.tsx`:**
    *   Add `navigateEquipment` to the dependency array of the `useEffect` hook.

3.  **In `src/components/FooterCTA.tsx`:**
    *   Remove the `Image` import from `next/image` since it is not being used in the component.

4.  **In `src/components/TestimonialCarousel.tsx`:**
    *   Add `startAutoplay` to the dependency array of the `useEffect` hook.

### Step 3: Patch SWC Dependencies

The build log also shows the following warning:
`⚠ Found lockfile missing swc dependencies, run next locally to automatically patch`

Before you push your changes, run the following command in your local terminal to ensure your dependencies are up to date:
```bash
npm install
```

After completing these steps, commit and push your changes to Git, and the Vercel deployment should succeed. 