# Canadian Metal Fabricators Website

A modern, SEO-optimized website for Canadian Metal Fabricators built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ♿ WCAG AA accessibility compliant
- 🔍 SEO optimized with Schema.org markup
- 📊 Analytics ready (GA4 + Matomo)
- 🏗️ ISO 9001 certified metal fabrication focus

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker

1. Build the Docker image:
   ```bash
   docker build -t cmf-website .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 cmf-website
   ```

### Google Cloud Run

1. Build and tag the image:
   ```bash
   docker build -t gcr.io/YOUR-PROJECT/cmf-website .
   docker push gcr.io/YOUR-PROJECT/cmf-website
   ```

2. Deploy to Cloud Run:
   ```bash
   gcloud run deploy cmf-website --image gcr.io/YOUR-PROJECT/cmf-website --platform managed
   ```

## Environment Variables

Required for full functionality:

- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 tracking ID
- `NEXT_PUBLIC_MATOMO_URL` - Matomo analytics URL
- `NEXT_PUBLIC_MATOMO_SITE_ID` - Matomo site ID

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── capabilities/      # Capabilities pages
│   ├── contact/          # Contact page
│   └── api/              # API routes
├── components/            # React components
│   └── ui/               # UI components
└── lib/                  # Utility functions
```

## Key Pages

- **Home** - Hero section with capabilities overview
- **Capabilities** - Detailed service pages (laser cutting, welding, etc.)
- **About** - Company information and team
- **Contact** - Contact form with validation
- **Quote Request** - Multi-step quote request form

## SEO Features

- Schema.org structured data
- Optimized meta tags
- Sitemap generation
- Robots.txt
- Performance optimized (<150kB JS budget)

## Built With

- Next.js 15
- TypeScript
- Tailwind CSS
- Schema.org structured data
- Google Analytics 4
- Matomo Analytics

## License

Private - Canadian Metal Fabricators