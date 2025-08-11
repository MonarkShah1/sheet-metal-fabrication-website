### Fix: Interactive map not working on all location pages

- **Status**: Not implemented (static placeholder), appears “broken” on all location pages
- **Scope**: Ensure an actual interactive map renders consistently for every slug under `/locations/{slug}`

### Current behavior
- The “map” in `ServiceAreaMap` is a static visualization with an explicit placeholder note.

```50:55:components/locations/ServiceAreaMap.tsa.ts` for all slugs.

### Impacted files
- `components/locations/ServiceAreaMap.tsx` (core implementation)
- `app/locations/[location]/page.tsx` (consumer)
- `lib/locations/location-data.ts` (source of `coordinates`, `distanceFromFacility`, `travelTime`)

### Repro steps
1. Run the app and visit any location page, e.g. `/locations/richmond-hill`, `/locations/toronto`, `/locations/guelph`.
2. Observe the non-interactive “map” card and the “coming soon” note.

### Expected vs actual
- Expected: An interactive map (pan/zoom) with markers and a service radius renders for each location page.
- Actual: Static placeholder; no map library, markers, or interactivity.

### Acceptance criteria
- Renders an interactive map on all `/locations/{slug}` pages:
  - Pan/zoom enabled, with a visible base map.
  - Marker for the main facility and marker for the location’s city center.
  - A geo-circle representing service area radius derived from `distanceFromFacility` (or a fixed radius per tier).
  - Displays city name and travel time near the map.
- Loads client-side without SSR hydration errors.
- Lazy-loads map code; shows a graceful skeleton while loading.
- No CLS spikes or significant performance regressions; initial paint of non-map content unchanged.
- Works across all current slugs in `lib/locations/location-data.ts`.
- No TypeScript or ESLint errors.

### Implementation plan
Option A (default): Leaflet + OpenStreetMap (no API key)
- Add dependency: `leaflet` and `react-leaflet`.
- Create `components/map/InteractiveMap.tsx` as a client-only component:
  - Use Next dynamic import (`ssr: false`) to avoid SSR issues.
  - Props: `{ center: { lat, lng }, facility: { lat, lng }, radiusMeters: number }`.
  - Render `<MapContainer>` with `<TileLayer>`, two `<Marker>`s and a `<Circle>`.
- Update `ServiceAreaMap.tsx`:
  - Replace the static card with the `InteractiveMap` and keep the right-side “ Strategic Location Benefits ” panel.
  - Compute `radiusMeters`:
    - Start simple: `radiusMeters = Math.max(15000, distanceFromFacilityKm * 1000)` or a tier-based default if `distanceFromFacility` not present.
  - Keep the phone CTA and nearby areas.
- Styling:
  - Constrain map height (e.g., 320–400px), rounded container, and responsive layout as currently.

Option B: Google Maps (if preferred)
- Add `@react-google-maps/api`.
- Require `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and wire it via `.env.local`.
- Same marker + circle behavior.

### Edge cases and safeguards
- If `coordinates` missing, hide map and show a lightweight fallback card; log a console warning in dev only.
- Defensive checks for `nearbyAreas` and `travelTime` to avoid undefined rendering.
- Ensure the map only renders on the client: guard with dynamic import or `useEffect`.

### QA checklist
- Verify map renders and is interactive on these slugs:
  - toronto, vaughan, brampton, hamilton, markham, oakville, burlington, milton, richmond-hill, pickering, ajax, whitby, oshawa, cambridge, guelph
- Confirm both markers present; service circle visible and centered correctly.
- Validate lazy-load behavior:
  - Non-map content renders immediately.
  - No hydration warnings in console.
- Mobile:
  - Map height appropriate; scroll/pinch works without capturing page scroll excessively.
- Performance:
  - Lighthouse: no new CLS; JS bundle impact minimized via dynamic import.

### Deliverables
- `components/map/InteractiveMap.tsx` (new)
- Edited `components/locations/ServiceAreaMap.tsx` to integrate the interactive map
- If Option B: `.env.local.example` updates and `README` note for API key
- Types updated where needed and zero linter errors