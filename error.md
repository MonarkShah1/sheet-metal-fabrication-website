[17:11:24.073] Running build in Washington, D.C., USA (East) – iad1
[17:11:24.074] Build machine configuration: 2 cores, 8 GB
[17:11:24.117] Cloning github.com/MonarkShah1/sheet-metal-fabrication-website (Branch: main-1, Commit: 5a40892)
[17:11:24.477] Cloning completed: 359.000ms
[17:11:27.421] Restored build cache from previous deployment (2uJQxLgSDFxEw9M1UXiaC7AgjDzA)
[17:11:29.638] Running "vercel build"
[17:11:30.117] Vercel CLI 44.7.3
[17:11:30.469] Installing dependencies...
[17:11:35.166] npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
[17:11:35.222] npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[17:11:36.019] npm warn deprecated puppeteer@2.1.1: < 24.9.0 is no longer supported
[17:11:50.081] 
[17:11:50.082] added 378 packages, removed 19 packages, and changed 27 packages in 19s
[17:11:50.082] 
[17:11:50.082] 260 packages are looking for funding
[17:11:50.083]   run `npm fund` for details
[17:11:50.177] Detected Next.js version: 14.2.30
[17:11:50.178] Running "npm run build"
[17:11:50.308] 
[17:11:50.308] > sheet-metal-fabrication-website@0.1.0 build
[17:11:50.308] > npm run build:critical && next build
[17:11:50.308] 
[17:11:50.436] 
[17:11:50.436] > sheet-metal-fabrication-website@0.1.0 build:critical
[17:11:50.436] > node scripts/extract-critical-css.js
[17:11:50.436] 
[17:11:50.915] node:internal/modules/esm/module_job:446
[17:11:50.932]       throw new ERR_REQUIRE_ASYNC_MODULE(filename, parentFilename);
[17:11:50.932]       ^
[17:11:50.932] 
[17:11:50.932] Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead. To see where the top-level await comes from, use --experimental-print-required-tla.
[17:11:50.932]   From /vercel/path0/scripts/extract-critical-css.js 
[17:11:50.932]   Requiring /vercel/path0/node_modules/critical/index.js 
[17:11:50.932]     at ModuleJobSync.runSync (node:internal/modules/esm/module_job:446:13)
[17:11:50.932]     at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:429:47)
[17:11:50.933]     at loadESMFromCJS (node:internal/modules/cjs/loader:1519:24)
[17:11:50.933]     at Module._compile (node:internal/modules/cjs/loader:1670:5)
[17:11:50.933]     at Object..js (node:internal/modules/cjs/loader:1820:10)
[17:11:50.933]     at Module.load (node:internal/modules/cjs/loader:1423:32)
[17:11:50.934]     at Function._load (node:internal/modules/cjs/loader:1246:12)
[17:11:50.934]     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
[17:11:50.934]     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
[17:11:50.934]     at Module.require (node:internal/modules/cjs/loader:1445:12) {
    
[17:11:50.934]   code: 'ERR_REQUIRE_ASYNC_MODULE'
[17:11:50.934] }
[17:11:50.935] 
[17:11:50.935] Node.js v22.18.0
[17:11:50.975] Error: Command "npm run build" exited with 1