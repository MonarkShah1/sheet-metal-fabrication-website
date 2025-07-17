import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Reliable Sheet Metal Fabrication | End Supplier Headaches',
    description: 'Simplifying sheet metal fabrication outsourcing with proven fundamentals and unshakeable reliability. We master the basics to solve real manufacturing challenges.',
    url: 'https://your-domain.com',
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
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}