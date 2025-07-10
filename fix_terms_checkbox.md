# Bug Fix: "Accepted Terms" Checkbox is Missing

## 1. Problem Description

The "Get Instant Quote" button on the final step of the quote wizard is not working. The cause is that the "I agree to the terms" checkbox is not visible on the page, which prevents the user from accepting the terms and submitting the form. The form validation in `ContactConfirmStep.tsx` requires this checkbox to be checked before the `onSubmit` function can be called.

## 2. Goal

The goal is to make the "accepted terms" checkbox and its label visible and functional on the final step of the quote wizard. This will allow users to accept the terms and successfully submit their quote request.

## 3. Relevant Files

*   `src/components/quote-wizard/ContactConfirmStep.tsx` (Primary file to investigate)
*   `src/app/globals.css` (Possible source of conflicting styles)
*   `tailwind.config.js` (To check for any custom theme settings)

## 4. Step-by-Step Instructions to Fix

### Step 1: Verify the Checkbox is Being Rendered

First, confirm that the JSX for the "accepted terms" checkbox is present in `src/components/quote-wizard/ContactConfirmStep.tsx`. It should look like this:

```jsx
<div className="flex items-start space-x-3">
  <input
    type="checkbox"
    id="terms"
    checked={acceptedTerms}
    onChange={(e) => setAcceptedTerms(e.target.checked)}
    className="w-4 h-4 text-primary-600 border-industrial-300 rounded focus:ring-primary-500 mt-1"
  />
  <label htmlFor="terms" className="text-sm text-industrial-700">
    I agree to receive quote information and follow-up communications from Canadian Metal Fabricators. 
    I understand that my information will be used to process my quote request and may be stored 
    for future project discussions.
  </label>
</div>
```

### Step 2: Investigate Styling Issues

If the JSX is present but the checkbox is not visible, the issue is likely with the styling.

**A. Check for Hiding Classes:**
Look for any classes in the parent containers of `ContactConfirmStep.tsx` that might be hiding the checkbox. Specifically, look for classes like `hidden`, `opacity-0`, or `absolute` with positioning that would move it off-screen.

**B. Add a Debugging Class:**
To help with debugging, temporarily add a bright red border to the checkbox and its container to see if you can locate it on the page.

In `src/components/quote-wizard/ContactConfirmStep.tsx`, modify the checkbox container like this:

```jsx
<div className="flex items-start space-x-3 border-4 border-red-500">
  <input
    type="checkbox"
    id="terms"
    // ... other props
    className="w-4 h-4 text-primary-600 border-industrial-300 rounded focus:ring-primary-500 mt-1 border-4 border-blue-500"
  />
  // ... label ...
</div>
```

If you still can't see the red border, the element is likely being hidden by a parent container or a global style.

### Step 3: Implement the Fix

Once you have identified the cause, implement the fix. Here are a few possible solutions:

**Scenario 1: A `hidden` class is found on a parent container.**
*   **Fix:** Remove the `hidden` class. If it's being applied conditionally, investigate the logic to ensure it's not hiding the checkbox unintentionally.

**Scenario 2: A global style is overriding the visibility.**
*   **Fix:** In `src/components/quote-wizard/ContactConfirmStep.tsx`, add a class to the checkbox container to ensure it is visible. For example:

```jsx
<div className="flex items-start space-x-3 visible">
  // ... checkbox and label ...
</div>
```

**Scenario 3: A positioning issue is moving it off-screen.**
*   **Fix:** Adjust the CSS classes to ensure the checkbox is positioned correctly within the flow of the document. You may need to remove `absolute` or `fixed` positioning from a parent container.

### Step 4: Final Verification

After applying the fix, ensure that:
1.  The "accepted terms" checkbox is clearly visible on the page.
2.  You can check and uncheck the box.
3.  The "Get Instant Quote" button works correctly after checking the box.
4.  The form submits successfully. 