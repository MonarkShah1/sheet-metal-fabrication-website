import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/StructuredData'
import { businessInfo } from '@/config/business-info'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/en-CA',
      'fr-CA': '/fr-CA',
    },
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Mississauga',
    'geo.position': `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`,
    'ICBM': `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`,
  },
  title: {
    template: '%s | PrecisionMetal Works - Reliable Sheet Metal Fabrication',
    default: 'Reliable Sheet Metal Fabrication Services | End Supplier Headaches | PrecisionMetal Works',
  },
  description: 'Simplifying sheet metal fabrication outsourcing with relentless refinement and unshakeable reliability. We master the fundamentals to solve real manufacturing challenges in Ontario and beyond.',
  keywords: [
    'reliable sheet metal fabrication',
    'sheet metal outsourcing Ontario',
    'manufacturing simplified',
    'proven fabrication processes',
    'supplier headaches solved',
    'consistent quality fabrication',
    'OEM mindset manufacturing',
    'transparent pricing fabrication',
    'fundamentals manufacturing',
    'relentless refinement quality'
  ],
  authors: [{ name: 'PrecisionMetal Works' }],
  creator: 'PrecisionMetal Works',
  publisher: 'PrecisionMetal Works',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://canadianmetalfab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Reliable Sheet Metal Fabrication | End Supplier Headaches',
    description: 'Simplifying sheet metal fabrication outsourcing with proven fundamentals and unshakeable reliability. We master the basics to solve real manufacturing challenges.',
    url: 'https://canadianmetalfab.com',
    siteName: 'PrecisionMetal Works',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrecisionMetal Works - Reliable Sheet Metal Fabrication',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Sheet Metal Fabrication | End Supplier Headaches',
    description: 'Simplifying sheet metal fabrication outsourcing with proven fundamentals and unshakeable reliability.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // TODO: Add actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        <StructuredData type="Organization" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mississauga" />
        <meta name="geo.position" content={`${businessInfo.geo.latitude};${businessInfo.geo.longitude}`} />
        <meta name="ICBM" content={`${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`} />
        <link rel="alternate" hrefLang="en-CA" href={`${businessInfo.url}/en-CA`} />
        <link rel="alternate" hrefLang="fr-CA" href={`${businessInfo.url}/fr-CA`} />
        <link rel="alternate" hrefLang="x-default" href={businessInfo.url} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}