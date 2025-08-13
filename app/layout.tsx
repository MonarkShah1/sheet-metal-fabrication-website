import type { Metadata } from 'next'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'
import { businessInfo } from '@/config/business-info'
import { defaultMetadata } from '@/config/seo-metadata'
import { Analytics } from '@/components/Analytics'
import { SkipToContent } from '@/components/SkipToContent'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { CriticalCSSProvider } from '@/components/CriticalCSSProvider'
import { SystemFontOptimizer } from '@/components/SystemFontOptimizer'
import { getCriticalCSS } from '@/lib/critical-css/extractor'

export const metadata: Metadata = defaultMetadata

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get critical CSS for the current route
  const criticalCSS = await getCriticalCSS('/');

  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        {/* System font optimization */}
        <SystemFontOptimizer />
        
        {/* Structured data and analytics */}
        <StructuredData type="Organization" />
        <Analytics />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect only for critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload deferred CSS */}
        <link 
          rel="preload" 
          href="/styles/deferred/main.css" 
          as="style" 
        />
        
        {/* Load deferred CSS asynchronously */}
        <link 
          rel="stylesheet" 
          href="/styles/deferred/main.css" 
          media="print" 
        />
        
        {/* Fallback for no-JS */}
        <noscript>
          <link rel="stylesheet" href="/styles/deferred/main.css" />
        </noscript>
        
        {/* Font display strategy */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          media="print" 
        />
        
        {/* JavaScript to handle async CSS loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load deferred CSS
              (function() {
                var links = document.querySelectorAll('link[rel="stylesheet"][media="print"]');
                links.forEach(function(link) {
                  link.onload = function() { 
                    this.media = 'all'; 
                    if (this.href.includes('fonts.googleapis.com')) {
                      document.documentElement.classList.add('fonts-enhanced');
                    }
                  };
                  // Fallback
                  setTimeout(function() { 
                    if (link.media === 'print') link.media = 'all'; 
                  }, 100);
                });
              })();
            `
          }}
        />
      </head>
      <body className="antialiased">
        <CriticalCSSProvider
          criticalCSS={criticalCSS}
          fullCSSPath="/styles/deferred/main.css"
        >
          <SkipToContent />
          <div className="min-h-screen bg-white flex flex-col">
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CriticalCSSProvider>
      </body>
    </html>
  )
}