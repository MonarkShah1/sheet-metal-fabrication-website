[17:25:03.369] Running build in Washington, D.C., USA (East) – iad1
[17:25:03.369] Build machine configuration: 2 cores, 8 GB
[17:25:03.386] Cloning github.com/MonarkShah1/sheet-metal-fabrication-website (Branch: main-1, Commit: e1f9b72)
[17:25:03.759] Cloning completed: 373.000ms
[17:25:06.763] Restored build cache from previous deployment (2uJQxLgSDFxEw9M1UXiaC7AgjDzA)
[17:25:09.111] Running "vercel build"
[17:25:10.059] Vercel CLI 44.7.3
[17:25:10.440] Installing dependencies...
[17:25:15.272] npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
[17:25:15.307] npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[17:25:16.057] npm warn deprecated puppeteer@2.1.1: < 24.9.0 is no longer supported
[17:25:29.681] 
[17:25:29.681] added 378 packages, removed 19 packages, and changed 27 packages in 18s
[17:25:29.682] 
[17:25:29.683] 260 packages are looking for funding
[17:25:29.683]   run `npm fund` for details
[17:25:29.813] Detected Next.js version: 14.2.30
[17:25:29.814] Running "npm run build"
[17:25:30.158] 
[17:25:30.159] > sheet-metal-fabrication-website@0.1.0 build
[17:25:30.159] > npm run build:critical && next build
[17:25:30.159] 
[17:25:30.290] 
[17:25:30.295] > sheet-metal-fabrication-website@0.1.0 build:critical
[17:25:30.295] > node scripts/extract-critical-css.js
[17:25:30.295] 
[17:25:30.334] 🎯 Starting critical CSS extraction...
[17:25:30.335] 📦 Running in CI/Vercel environment - using pre-generated critical CSS files
[17:25:30.335] ✓ Critical CSS file already exists for home
[17:25:30.335] ✓ Critical CSS file already exists for services
[17:25:30.335] ✓ Critical CSS file already exists for quote
[17:25:30.335] ✓ Critical CSS file already exists for about
[17:25:30.335] ✓ Critical CSS file already exists for contact
[17:25:30.336] 🎉 Critical CSS setup completed for deployment!
[17:25:31.304]   ▲ Next.js 14.2.30
[17:25:31.305]   - Experiments (use with caution):
[17:25:31.306]     · craCompat
[17:25:31.306]     · typedRoutes
[17:25:31.306]     · optimizeCss
[17:25:31.306] 
[17:25:31.374]    Creating an optimized production build ...
[17:25:35.649] Failed to compile.
[17:25:35.649] 
[17:25:35.650] ./app/about/page.tsx
[17:25:35.650] Module parse failed: Unexpected token (5:21)
[17:25:35.651] File was processed with these loaders:
[17:25:35.651]  * ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/index.js
[17:25:35.651] You may need an additional loader to handle the result of these loaders.
[17:25:35.651] | import { Metadata } from 'next'
[17:25:35.651] | 
[17:25:35.651] > export const metadata: Metadata = {
[17:25:35.652] |   title: 'About Us | Reliable Sheet Metal Outsourcing in Ontario',
[17:25:35.652] |   description: 'Founded in 1992, we solve sheet metal basics with unshakeable reliability. Learn our story, values, and commitment to manufacturing fundamentals. Current management since 2019.',
[17:25:35.652] 
[17:25:35.652] Import trace for requested module:
[17:25:35.652] ./app/about/page.tsx
[17:25:35.652] 
[17:25:35.652] ./app/blog/page.tsx
[17:25:35.652] Module parse failed: Unexpected token (9:21)
[17:25:35.652] File was processed with these loaders:
[17:25:35.652]  * ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/index.js
[17:25:35.652] You may need an additional loader to handle the result of these loaders.
[17:25:35.652] | import { SmartBreadcrumbSchema } from '@/components/BreadcrumbSchema'
[17:25:35.652] | 
[17:25:35.652] > export const metadata: Metadata = {
[17:25:35.652] |   ...pageMetadata.blog,
[17:25:35.652] |   alternates: {
[17:25:35.652] 
[17:25:35.653] Import trace for requested module:
[17:25:35.653] ./app/blog/page.tsx
[17:25:35.653] 
[17:25:35.653] ./app/contact/page.tsx
[17:25:35.653] Module parse failed: Unexpected token (10:21)
[17:25:35.653] File was processed with these loaders:
[17:25:35.653]  * ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/index.js
[17:25:35.656] You may need an additional loader to handle the result of these loaders.
[17:25:35.656] | import { businessInfo } from '@/config/business-info'
[17:25:35.656] | 
[17:25:35.656] > export const metadata: Metadata = {
[17:25:35.656] |   title: 'Contact Us - Reliable Sheet Metal Fabrication | Truth in Execution',
[17:25:35.656] |   description: 'Get in touch with our sheet metal fabrication experts. Proven fundamentals, unshakeable reliability, and honest communication for your manufacturing needs.',
[17:25:35.656] 
[17:25:35.656] Import trace for requested module:
[17:25:35.656] ./app/contact/page.tsx
[17:25:35.656] 
[17:25:35.657] ./app/industries/[industry]/page.tsx
[17:25:35.657] Module parse failed: Unexpected token (15:49)
[17:25:35.657] File was processed with these loaders:
[17:25:35.657]  * ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/index.js
[17:25:35.657] You may need an additional loader to handle the result of these loaders.
[17:25:35.657] | import { generateIndustryServiceSchema, generateCaseStudySchema } from '@/config/schema-generators';
[17:25:35.658] | 
[17:25:35.658] > export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
[17:25:35.658] |   const industry = getIndustryBySlug(params.industry, industries);
[17:25:35.658] |   
[17:25:35.658] 
[17:25:35.658] Import trace for requested module:
[17:25:35.658] ./app/industries/[industry]/page.tsx
[17:25:35.658] 
[17:25:35.658] ./app/industries/page.tsx
[17:25:35.658] Module parse failed: Unexpected token (7:21)
[17:25:35.658] File was processed with these loaders:
[17:25:35.658]  * ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/index.js
[17:25:35.658] You may need an additional loader to handle the result of these loaders.
[17:25:35.658] | import { Analytics } from '@/components/Analytics';
[17:25:35.658] | 
[17:25:35.658] > export const metadata: Metadata = {
[17:25:35.658] |   title: 'Industries We Serve | Metal Fabrication Specialists | Canadian Metal Fabricators',
[17:25:35.658] |   description: 'Professional metal fabrication services for automotive, food processing, material handling and more. Industry-specific expertise across Ontario. ISO 9001 certified.',
[17:25:35.658] 
[17:25:35.658] Import trace for requested module:
[17:25:35.659] ./app/industries/page.tsx
[17:25:35.659] 
[17:25:35.659] 
[17:25:35.659] > Build failed because of webpack errors
[17:25:35.693] Error: Command "npm run build" exited with 1