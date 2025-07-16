Failed to compile.
./app/about/page.tsx
24:38  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
38:92  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
42:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
42:59  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
113:74  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
113:101  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
125:97  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
147:61  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
./app/blog/page.tsx
222:20  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
222:36  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
./app/contact/page.tsx
27:74  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities


""""

DEPLOYMENT #2
[16:14:23.108] Running build in Washington, D.C., USA (East) – iad1
[16:14:23.108] Build machine configuration: 2 cores, 8 GB
[16:14:23.123] Cloning github.com/MonarkShah1/sheet-metal-fabrication-website (Branch: main, Commit: afebb92)
[16:14:23.256] Previous build caches not available
[16:14:23.507] Cloning completed: 384.000ms
[16:14:25.620] Running "vercel build"
[16:14:26.125] Vercel CLI 44.3.0
[16:14:26.470] Installing dependencies...
[16:14:28.902] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[16:14:29.439] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[16:14:30.513] npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
[16:14:30.529] npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
[16:14:30.614] npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
[16:14:32.150] npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
[16:14:36.894] 
[16:14:36.894] added 407 packages in 10s
[16:14:36.895] 
[16:14:36.895] 154 packages are looking for funding
[16:14:36.895]   run `npm fund` for details
[16:14:36.951] Detected Next.js version: 14.2.30
[16:14:36.955] Running "npm run build"
[16:14:37.065] 
[16:14:37.065] > sheet-metal-fabrication-website@0.1.0 build
[16:14:37.066] > next build
[16:14:37.066] 
[16:14:37.611] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[16:14:37.611] This information is used to shape Next.js' roadmap and prioritize features.
[16:14:37.611] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[16:14:37.612] https://nextjs.org/telemetry
[16:14:37.612] 
[16:14:37.664]   ▲ Next.js 14.2.30
[16:14:37.666]   - Experiments (use with caution):
[16:14:37.666]     · typedRoutes
[16:14:37.667] 
[16:14:37.725]    Creating an optimized production build ...
[16:14:55.137]  ✓ Compiled successfully
[16:14:55.138]    Linting and checking validity of types ...
[16:15:02.849] 
[16:15:02.849] Failed to compile.
[16:15:02.850] 
[16:15:02.850] ./app/quote/page.tsx
[16:15:02.850] 246:33  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[16:15:02.850] 248:34  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[16:15:02.850] 249:33  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[16:15:02.850] 
[16:15:02.850] ./app/services/page.tsx
[16:15:02.850] 47:39  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[16:15:02.851] 51:38  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[16:15:02.851] 55:37  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[16:15:02.851] 55:44  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[16:15:02.851] 
[16:15:02.851] ./components/avatar.tsx
[16:15:02.851] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:15:02.851] 
[16:15:02.851] ./components/catalyst-ui-kit/javascript/avatar.jsx
[16:15:02.851] 33:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:15:02.851] 
[16:15:02.851] ./components/catalyst-ui-kit/typescript/avatar.tsx
[16:15:02.852] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:15:02.852] 
[16:15:02.852] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
[16:15:02.887] Error: Command "npm run build" exited with 1
[16:15:03.091] 
[16:15:06.390] Exiting build container
