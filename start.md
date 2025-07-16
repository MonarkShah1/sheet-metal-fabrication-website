You are an expert web developer building a high-performance, SEO-optimized website for a custom sheet metal fabrication company. The target audience is buyers outsourcing sheet metal fabrication (e.g., engineers, OEMs). The goal is to create the "best-in-industry" site by addressing market gaps like lack of transparency, complicated quoting, poor UX, and weak education—while incorporating ICP desires for easy quoting, educational content, trust signals, and fast interactions.

Tech Stack:
- Next.js (latest version, with App Router) for the framework.
- TypeScript for all code.
- Tailwind CSS for styling (integrate it fully).
- Deployable on Vercel (optimize for it).
- Git-friendly structure.

Best Practices to Follow Strictly:
- Clean, modular code: Use a standard folder structure (e.g., /app for pages, /components for reusable UI, /lib for utilities, /public for assets).
- SEO: Use Next.js Metadata API for titles/descriptions, add a robots.txt and sitemap.xml.
- Accessibility: Semantic HTML, ARIA attributes, keyboard navigation, alt text for images.
- Performance: Image optimization (Next.js Image), lazy loading, minimal JS bundles. Aim for Lighthouse scores >90.
- Mobile-First: All designs responsive via Tailwind (e.g., sm:, md: breakpoints).
- Security: No hard-coded secrets; use environment variables if needed.
- Industry-Specific: Focus on buyer needs—include placeholders for quote forms (with file upload), material selectors, case studies. Educate via a blog placeholder. Add trust elements like certification badges.
- Start Simple: Bootstrap the project, create core pages (Homepage, Services, Quote Request, About, Contact, Blog). Use placeholder content tailored to sheet metal fabrication (e.g., hero section: "Outsource Your Custom Sheet Metal Needs with Precision and Speed").
- Integration: Prepare for Tailwind UI kit components (e.g., assume user will paste them in; add a sample hero from Tailwind if possible).
- No External Dependencies Yet: Keep it vanilla Next.js + Tailwind; add comments for future additions (e.g., form libraries like React Hook Form for quotes).

Task: Generate the full initial codebase as a set of files (e.g., package.json, tsconfig.json, app/layout.tsx, etc.). Output in a structured format like:
- File: path/to/file.tsx
- Content: ```tsx
// code here