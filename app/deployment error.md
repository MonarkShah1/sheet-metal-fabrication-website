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

"""

DEPLOYMENT #3
[16:33:47.601] Running build in Washington, D.C., USA (East) – iad1
[16:33:47.601] Build machine configuration: 2 cores, 8 GB
[16:33:47.618] Cloning github.com/MonarkShah1/sheet-metal-fabrication-website (Branch: main, Commit: 3ee88c0)
[16:33:47.773] Previous build caches not available
[16:33:48.071] Cloning completed: 453.000ms
[16:33:49.817] Running "vercel build"
[16:33:51.296] Vercel CLI 44.3.0
[16:33:51.631] Installing dependencies...
[16:33:54.319] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[16:33:54.785] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[16:33:55.806] npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
[16:33:55.821] npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
[16:33:55.949] npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
[16:33:57.581] npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
[16:34:02.434] 
[16:34:02.434] added 407 packages in 11s
[16:34:02.435] 
[16:34:02.435] 154 packages are looking for funding
[16:34:02.435]   run `npm fund` for details
[16:34:02.489] Detected Next.js version: 14.2.30
[16:34:02.493] Running "npm run build"
[16:34:02.605] 
[16:34:02.606] > sheet-metal-fabrication-website@0.1.0 build
[16:34:02.606] > next build
[16:34:02.606] 
[16:34:03.194] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[16:34:03.195] This information is used to shape Next.js' roadmap and prioritize features.
[16:34:03.196] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[16:34:03.196] https://nextjs.org/telemetry
[16:34:03.196] 
[16:34:03.250]   ▲ Next.js 14.2.30
[16:34:03.251]   - Experiments (use with caution):
[16:34:03.251]     · typedRoutes
[16:34:03.251] 
[16:34:03.317]    Creating an optimized production build ...
[16:34:21.479]  ✓ Compiled successfully
[16:34:21.480]    Linting and checking validity of types ...
[16:34:29.630] 
[16:34:29.631] ./components/avatar.tsx
[16:34:29.631] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:34:29.632] 
[16:34:29.632] ./components/catalyst-ui-kit/javascript/avatar.jsx
[16:34:29.632] 33:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:34:29.632] 
[16:34:29.633] ./components/catalyst-ui-kit/typescript/avatar.tsx
[16:34:29.633] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:34:29.633] 
[16:34:29.633] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
[16:34:32.905] Failed to compile.
[16:34:32.905] 
[16:34:32.905] ./components/link.tsx:11:8
[16:34:32.905] Type error: Type '{ ref: ForwardedRef<HTMLAnchorElement>; href: string; id?: string | undefined; is?: string | undefined; tw?: string | undefined; title?: string | undefined; ... 280 more ...; onTransitionStartCapture?: TransitionEventHandler<...> | undefined; }' is not assignable to type '{ href: UrlObject | RouteImpl<string>; }'.
[16:34:32.906]   Types of property 'href' are incompatible.
[16:34:32.906]     Type 'string' is not assignable to type 'UrlObject | RouteImpl<string>'.
[16:34:32.906] 
[16:34:32.906] [0m [90m  9 |[39m   [36mreturn[39m ([0m
[16:34:32.906] [0m [90m 10 |[39m     [33m<[39m[33mHeadless[39m[33m.[39m[33mDataInteractive[39m[33m>[39m[0m
[16:34:32.906] [0m[31m[1m>[22m[39m[90m 11 |[39m       [33m<[39m[33mNextLink[39m {[33m...[39mprops} ref[33m=[39m{ref} [33m/[39m[33m>[39m[0m
[16:34:32.906] [0m [90m    |[39m        [31m[1m^[22m[39m[0m
[16:34:32.906] [0m [90m 12 |[39m     [33m<[39m[33m/[39m[33mHeadless[39m[33m.[39m[33mDataInteractive[39m[33m>[39m[0m
[16:34:32.906] [0m [90m 13 |[39m   )[0m
[16:34:32.906] [0m [90m 14 |[39m })[0m
[16:34:32.929] Next.js build worker exited with code: 1 and signal: null
[16:34:32.947] Error: Command "npm run build" exited with 1
[16:34:33.153] 
[16:34:36.350] Exiting build container

""""

DEPLOYMENT 4
[16:38:05.700] Running build in Washington, D.C., USA (East) – iad1
[16:38:05.700] Build machine configuration: 2 cores, 8 GB
[16:38:05.761] Cloning github.com/MonarkShah1/sheet-metal-fabrication-website (Branch: main, Commit: c7eab44)
[16:38:05.881] Previous build caches not available
[16:38:06.107] Cloning completed: 346.000ms
[16:38:08.644] Running "vercel build"
[16:38:09.173] Vercel CLI 44.3.0
[16:38:09.551] Installing dependencies...
[16:38:12.312] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[16:38:12.656] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[16:38:13.790] npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
[16:38:13.791] npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
[16:38:13.900] npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
[16:38:15.460] npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
[16:38:20.272] 
[16:38:20.273] added 407 packages in 10s
[16:38:20.273] 
[16:38:20.274] 154 packages are looking for funding
[16:38:20.274]   run `npm fund` for details
[16:38:20.334] Detected Next.js version: 14.2.30
[16:38:20.338] Running "npm run build"
[16:38:20.451] 
[16:38:20.451] > sheet-metal-fabrication-website@0.1.0 build
[16:38:20.452] > next build
[16:38:20.452] 
[16:38:21.105] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[16:38:21.105] This information is used to shape Next.js' roadmap and prioritize features.
[16:38:21.105] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[16:38:21.105] https://nextjs.org/telemetry
[16:38:21.105] 
[16:38:21.161]   ▲ Next.js 14.2.30
[16:38:21.162]   - Experiments (use with caution):
[16:38:21.162]     · typedRoutes
[16:38:21.162] 
[16:38:21.228]    Creating an optimized production build ...
[16:38:39.561]  ✓ Compiled successfully
[16:38:39.563]    Linting and checking validity of types ...
[16:38:48.222] 
[16:38:48.223] ./components/avatar.tsx
[16:38:48.223] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:38:48.224] 
[16:38:48.224] ./components/catalyst-ui-kit/javascript/avatar.jsx
[16:38:48.224] 33:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:38:48.225] 
[16:38:48.225] ./components/catalyst-ui-kit/typescript/avatar.tsx
[16:38:48.225] 48:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
[16:38:48.226] 
[16:38:48.226] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
[16:38:52.000] Failed to compile.
[16:38:52.000] 
[16:38:52.001] ./components/ui/Footer.tsx:51:19
[16:38:52.001] Type error: "/privacy" is not an existing route. If it is intentional, please type it explicitly with `as Route`.
[16:38:52.001] 
[16:38:52.002] [0m [90m 49 |[39m           [33m<[39m[33m/[39m[33mp[39m[33m>[39m[0m
[16:38:52.002] [0m [90m 50 |[39m           [33m<[39m[33mdiv[39m className[33m=[39m[32m"flex space-x-6 mt-4 md:mt-0"[39m[33m>[39m[0m
[16:38:52.002] [0m[31m[1m>[22m[39m[90m 51 |[39m             [33m<[39m[33mLink[39m href[33m=[39m[32m"/privacy"[39m className[33m=[39m[32m"text-secondary-400 hover:text-white text-sm transition-colors"[39m[33m>[39m[33mPrivacy[39m [33mPolicy[39m[33m<[39m[33m/[39m[33mLink[39m[33m>[39m[0m
[16:38:52.002] [0m [90m    |[39m                   [31m[1m^[22m[39m[0m
[16:38:52.002] [0m [90m 52 |[39m             [33m<[39m[33mLink[39m href[33m=[39m[32m"/terms"[39m className[33m=[39m[32m"text-secondary-400 hover:text-white text-sm transition-colors"[39m[33m>[39m[33mTerms[39m [36mof[39m [33mService[39m[33m<[39m[33m/[39m[33mLink[39m[33m>[39m[0m
[16:38:52.002] [0m [90m 53 |[39m           [33m<[39m[33m/[39m[33mdiv[39m[33m>[39m[0m
[16:38:52.002] [0m [90m 54 |[39m         [33m<[39m[33m/[39m[33mdiv[39m[33m>[39m[0m
[16:38:52.025] Next.js build worker exited with code: 1 and signal: null
[16:38:52.044] Error: Command "npm run build" exited with 1
[16:38:52.260] 
[16:38:55.770] Exiting build container