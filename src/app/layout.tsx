import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { SkipLink } from '@/components/SkipLink'
import { Analytics, MatomoAnalytics } from '@/components/Analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Metal Fabrication Ontario | ISO 9001 Certified | Canadian Metal Fabricators',
  description: 'Leading custom metal fabrication services in Ontario. ISO 9001 certified with 10-day average turnaround, 99.7% on-time delivery. Laser cutting, welding, sheet metal fabrication.',
  keywords: 'custom metal fabrication Ontario, laser cutting services Ontario, CNC punching Canada, ISO 9001 metal fabrication team, sheet metal fabrication, welding services',
  authors: [{ name: 'Canadian Metal Fabricators' }],
  creator: 'Canadian Metal Fabricators',
  publisher: 'Canadian Metal Fabricators',
  robots: 'index, follow',
  openGraph: {
    title: 'Custom Metal Fabrication Ontario | ISO 9001 Certified | Canadian Metal Fabricators',
    description: 'Leading custom metal fabrication services in Ontario. ISO 9001 certified with 10-day average turnaround, 99.7% on-time delivery.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Canadian Metal Fabricators',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Metal Fabrication Ontario | ISO 9001 Certified | Canadian Metal Fabricators',
    description: 'Leading custom metal fabrication services in Ontario. ISO 9001 certified with 10-day average turnaround, 99.7% on-time delivery.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Canadian Metal Fabricators',
    url: 'https://canadianmetalfabricators.com',
    logo: 'https://canadianmetalfabricators.com/logo.png',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'CA',
      availableLanguage: ['English', 'French']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'ON'
    },
    description: 'Leading custom metal fabrication services in Ontario. ISO 9001 certified with expertise in laser cutting, welding, and sheet metal fabrication.',
    knowsAbout: [
      'Metal Fabrication',
      'Laser Cutting',
      'Sheet Metal',
      'Welding',
      'Manufacturing',
      'ISO 9001'
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'ISO 9001'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        <MatomoAnalytics />
        <SkipLink />
        <Navigation />
        <main id="main-content" className="pt-16" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  )
}