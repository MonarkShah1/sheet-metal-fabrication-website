
### Resolve redirect loop by keeping non‑www canonical (Option A)

**Goal**: Keep `https://canadianmetalfab.com` as the canonical host and stop the redirect loop on `https://www.canadianmetalfab.com` without changing application code.

### Context
- The app already redirects `www` → non‑www in `next.config.js`:

```js
// next.config.js (excerpt)
{
  source: '/:path*',
  has: [{ type: 'host', value: 'www.canadianmetalfab.com' }],
  destination: 'https://canadianmetalfab.com/:path*',
  permanent: true,
}
```

- Canonicals are set to the apex domain in `config/business-info.ts`:

```ts
// config/business-info.ts (excerpt)
export const businessInfo = {
  url: 'https://canadianmetalfab.com',
}
```

- The ERR_TOO_MANY_REDIRECTS occurs when the hosting platform forces the opposite redirect (apex → www). We must align platform behavior with the app.

### Required platform changes (Vercel/Cloudflare or similar)
- Set the primary/production domain to `canadianmetalfab.com` (apex).
- Ensure there is no platform rule that redirects `canadianmetalfab.com` → `www.canadianmetalfab.com`.
  - If the platform has a toggle like “Redirect to primary domain,” either:
    - Keep `canadianmetalfab.com` as primary and allow the built‑in redirect (this will redirect `www` → apex), or
    - Disable automatic host redirects entirely. Either approach is fine as long as there is no apex → www redirect.
- DNS wiring:
  - Apex `canadianmetalfab.com`: A/ALIAS/ANAME per provider guidance to the platform.
  - `www.canadianmetalfab.com`: CNAME to the platform target (e.g., `cname.vercel-dns.com`). Do not add a rule that forces `www` → `www`.
- Purge CDN cache after changes.

### Do NOT change code
- Keep the existing `www` → non‑www rule in `next.config.js`.
- Keep canonical base URL values in `config/business-info.ts`.
- No changes needed to `vercel.json`.

### Validation checklist
- `curl -I https://canadianmetalfab.com` returns 200 OK (or a single 301 followed by 200 on follow).
- `curl -I https://www.canadianmetalfab.com` returns a single 301 to `https://canadianmetalfab.com/...`, then 200.
- Incognito browser: both hosts load without ERR_TOO_MANY_REDIRECTS.
- Page source: canonical tags point to `https://canadianmetalfab.com`.

### Rollback (only if platform cannot disable conflicting redirects)
- As a fallback, remove the `www` → non‑www redirect from `next.config.js` and allow the platform to enforce the canonical host. Redeploy and re‑validate using the checklist above.


