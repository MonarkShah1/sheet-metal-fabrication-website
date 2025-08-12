import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'
import { businessInfo } from '@/config/business-info'
import { defaultMetadata } from '@/config/seo-metadata'
import { Analytics } from '@/components/Analytics'
import { SkipToContent } from '@/components/SkipToContent'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { CriticalCSS, ProgressiveCSS, FontLoadingStrategy, ResourceHints, CriticalCSSPerformanceMonitor } from '@/components/CriticalCSS'

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1E40AF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <CriticalCSS />
        <ResourceHints />
        <StructuredData type="Organization" />
        <Analytics />
        <FontLoadingStrategy />
        <ProgressiveCSS />
        <CriticalCSSPerformanceMonitor />
      </head>
      <body className="antialiased">
        <SkipToContent />
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}