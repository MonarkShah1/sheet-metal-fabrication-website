# Location Page Header Fix Specification

## Issue Description

Users have reported that when clicking into a specific location page (e.g., /locations/toronto), the header (navigation bar) disappears. This creates an inconsistent user experience and makes navigation difficult on these pages.

From code analysis:
- The root layout (app/layout.tsx) does not include the Navigation component.
- The main locations page (app/locations/page.tsx) explicitly includes &lt;Navigation /&gt; and &lt;Footer /&gt;.
- Specific location pages (app/locations/[location]/page.tsx) do not include these components, causing them to be missing.

## Requirements

1. Add the navigation header to all specific location pages to match the rest of the site.
2. Ensure the footer is also added for consistency.
3. Maintain the existing styling and layout structure.
4. Keep the page responsive and accessible.
5. No changes to metadata or SEO elements.

## Proposed Implementation

### Step 1: Imports
In app/locations/[location]/page.tsx, add the following imports if not present:

```typescript
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
```

### Step 2: Wrap Content
Modify the return statement to wrap the existing content with Navigation and Footer, similar to app/locations/page.tsx:

Replace:
```typescript
return (
  <div className="min-h-screen">
    {/* Hero Section */}
    <LocationHero location={location} />
    {/* ... other sections ... */}
  </div>
);
```

With:
```typescript
return (
  <>
    <Navigation />
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <LocationHero location={location} />
      {/* ... other sections ... */}
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSEO(location).schemaData)
        }}
      />
    </main>
    <Footer />
  </>
);
```

### Step 3: Styling Adjustments
- Add `bg-gray-50` to the main element for consistency with other pages.
- Ensure the LocationHero component's background contrasts properly with the navigation bar.
- Verify that the sticky navigation works correctly on scroll.

## Testing
- Navigate to /locations and click on a specific location.
- Verify header is visible and functional.
- Check mobile responsiveness (hamburger menu).
- Ensure no layout shifts or overlaps.
- Test navigation links work from the specific page.

## Edge Cases
- Invalid location slug (should still show notFound with header if possible).
- Long pages: ensure header remains sticky.
- Accessibility: Verify skip-to-content works.

This fix should resolve the disappearing header issue while maintaining site consistency.
