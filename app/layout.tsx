import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'
import { businessInfo } from '@/config/business-info'
import { defaultMetadata } from '@/config/seo-metadata'
import { Analytics } from '@/components/Analytics'
import { SkipToContent } from '@/components/SkipToContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <StructuredData type="Organization" />
        <Analytics />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SkipToContent />
        <div className="min-h-screen bg-white">
          <main id="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}