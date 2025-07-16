import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | PrecisionMetal Works',
    default: 'Custom Sheet Metal Fabrication Services | PrecisionMetal Works',
  },
  description: 'Professional custom sheet metal fabrication services for engineers, OEMs, and businesses. Fast quotes, precise manufacturing, and transparent pricing for all your sheet metal needs.',
  keywords: ['sheet metal fabrication', 'custom metal fabrication', 'precision manufacturing', 'metal cutting', 'welding services', 'OEM manufacturing'],
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
    title: 'Custom Sheet Metal Fabrication Services | PrecisionMetal Works',
    description: 'Professional custom sheet metal fabrication services for engineers, OEMs, and businesses. Fast quotes, precise manufacturing, and transparent pricing.',
    url: 'https://your-domain.com',
    siteName: 'PrecisionMetal Works',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrecisionMetal Works - Custom Sheet Metal Fabrication',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Sheet Metal Fabrication Services | PrecisionMetal Works',
    description: 'Professional custom sheet metal fabrication services for engineers, OEMs, and businesses.',
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