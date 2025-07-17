import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | PrecisionMetal Works - Industry 4.0 Sheet Metal Fabrication',
    default: 'Industry 4.0 Sheet Metal Fabrication Services | AI-Powered Smart Manufacturing | PrecisionMetal Works',
  },
  description: 'Experience the future of sheet metal outsourcing with Industry 4.0 technology. AI-powered quoting, IoT quality monitoring, digital twins, and smart manufacturing for precision fabrication.',
  keywords: [
    'Industry 4.0 sheet metal fabrication',
    'AI-powered manufacturing',
    'smart factory outsourcing',
    'IoT quality monitoring',
    'digital twin fabrication',
    'automated sheet metal cutting',
    'predictive manufacturing',
    'intelligent material sourcing',
    'robotic welding services',
    'smart manufacturing solutions'
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
    title: 'Industry 4.0 Sheet Metal Fabrication | AI-Powered Smart Manufacturing',
    description: 'Experience the future of sheet metal outsourcing with Industry 4.0 technology. AI-powered quoting, IoT monitoring, and smart manufacturing for precision fabrication.',
    url: 'https://your-domain.com',
    siteName: 'PrecisionMetal Works',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrecisionMetal Works - Industry 4.0 Sheet Metal Fabrication',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry 4.0 Sheet Metal Fabrication | AI-Powered Smart Manufacturing',
    description: 'Experience the future of sheet metal outsourcing with Industry 4.0 technology. AI-powered quoting, IoT monitoring, and smart manufacturing.',
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