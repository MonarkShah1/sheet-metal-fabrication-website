import { Metadata } from 'next'
import { businessInfo } from './business-info'

const siteName = 'Canadian Metal Fabricators - PrecisionMetal Works'
const siteUrl = businessInfo.url

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Canadian Metal Fabricators',
    default: 'Sheet Metal Fabrication Services Ontario | Canadian Metal Fabricators',
  },
  description: 'Premier sheet metal fabrication services in Mississauga, Ontario. ISO 9001 certified, AWS welding standards. Laser cutting, welding, forming & finishing for OEMs.',
  keywords: [
    'sheet metal fabrication Ontario',
    'metal fabrication Mississauga',
    'laser cutting services',
    'CNC bending Ontario',
    'welding services Toronto',
    'powder coating Mississauga',
    'custom metal fabrication',
    'OEM manufacturing Ontario',
    'ISO 9001 certified fabrication',
    'AWS certified welding',
    'stainless steel fabrication',
    'aluminum fabrication',
    'industrial metal fabrication',
    'precision metal works',
    'Canadian metal fabricators'
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': `${siteUrl}/en-CA`,
      'fr-CA': `${siteUrl}/fr-CA`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: ['fr_CA', 'en_US'],
    url: siteUrl,
    siteName: siteName,
    title: 'Sheet Metal Fabrication Services Ontario | Canadian Metal Fabricators',
    description: 'Premier sheet metal fabrication services in Mississauga. ISO 9001 certified with AWS welding standards. Expert laser cutting, welding, forming & finishing.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Canadian Metal Fabricators - Sheet Metal Fabrication Services'
      },
      {
        url: `${siteUrl}/og-image-square.jpg`,
        width: 1200,
        height: 1200,
        alt: 'Canadian Metal Fabricators Logo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@canadianmetalfab',
    creator: '@canadianmetalfab',
    title: 'Sheet Metal Fabrication Services Ontario',
    description: 'Premier sheet metal fabrication in Mississauga. ISO 9001 certified, AWS welding standards.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || ''
  },
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#1E40AF',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1E40AF',
      },
    ],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': businessInfo.address.addressLocality,
    'geo.position': `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`,
    'ICBM': `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`,
    'msapplication-TileColor': '#1E40AF',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const pageMetadata = {
  home: {
    title: 'Sheet Metal Fabrication Services Ontario | Canadian Metal Fabricators',
    description: 'Premier sheet metal fabrication services in Mississauga, Ontario. ISO 9001 certified with AWS welding standards. Expert laser cutting, welding, forming & finishing for OEMs.',
    openGraph: {
      title: 'Sheet Metal Fabrication Services Ontario | Canadian Metal Fabricators',
      description: 'Premier sheet metal fabrication services in Mississauga. ISO 9001 certified with AWS welding standards.',
    },
  },
  services: {
    title: 'Complete Sheet Metal Fabrication Services | Engineering & Manufacturing',
    description: 'Comprehensive sheet metal services: engineering support, smart sourcing, laser cutting, CNC bending, certified welding, and professional finishing in Ontario.',
    openGraph: {
      title: 'Complete Sheet Metal Fabrication Services | Canadian Metal Fabricators',
      description: 'Engineering, laser cutting, welding, and finishing services. ISO 9001 certified facility in Mississauga.',
    },
  },
  about: {
    title: 'About Canadian Metal Fabricators | 30+ Years Manufacturing Excellence',
    description: 'Founded in 1992, we provide reliable sheet metal fabrication services in Ontario. ISO 9001 certified, AWS welding standards, serving OEMs across Canada.',
    openGraph: {
      title: 'About Canadian Metal Fabricators | Manufacturing Since 1992',
      description: 'Learn about our 30+ year journey in sheet metal fabrication. ISO 9001 certified facility in Mississauga.',
    },
  },
  contact: {
    title: 'Contact Canadian Metal Fabricators | Get Expert Support',
    description: 'Contact our sheet metal fabrication experts in Mississauga. Get quotes, technical support, and project consultations. Call +1-647-407-0171.',
    openGraph: {
      title: 'Contact Canadian Metal Fabricators | Expert Support',
      description: 'Get in touch with our fabrication experts. Located in Mississauga, serving all of Ontario.',
    },
  },
  quote: {
    title: 'Request a Quote | Fast Sheet Metal Fabrication Quotes',
    description: 'Get a detailed quote for sheet metal fabrication in 24 hours. Upload your files, specify requirements, and receive transparent pricing from our ISO 9001 facility.',
    openGraph: {
      title: 'Request a Quote | Canadian Metal Fabricators',
      description: 'Get detailed fabrication quotes in 24 hours. Upload files and specifications for accurate pricing.',
    },
  },
  blog: {
    title: 'Sheet Metal Fabrication Blog | Industry Insights & Best Practices',
    description: 'Expert insights on sheet metal fabrication, design guidelines, material selection, and manufacturing best practices from Canadian Metal Fabricators.',
    openGraph: {
      title: 'Manufacturing Blog | Canadian Metal Fabricators',
      description: 'Expert insights on sheet metal fabrication, design guidelines, and manufacturing best practices.',
    },
  },
}

export function generateServiceMetadata(service: string): Metadata {
  const serviceData: Record<string, { title: string; description: string }> = {
    engineering: {
      title: 'Engineering & Design Support Services | Design for Manufacturing',
      description: 'Engineering support for sheet metal projects. CAD/CAM integration, design optimization, prototyping, and manufacturability analysis in Ontario.',
    },
    'laser-cutting-bending': {
      title: 'Laser Cutting & CNC Bending Services | Precision Metal Forming',
      description: 'Precision laser cutting up to 1" thick and CNC press brake bending. Tight tolerances, complex geometries, and fast turnaround in Mississauga.',
    },
    welding: {
      title: 'Certified Welding Services | AWS D1.1 MIG TIG Spot Welding',
      description: 'AWS certified welding services: MIG, TIG, and spot welding. Structural steel, stainless, and aluminum welding with 100% quality inspection.',
    },
    finishing: {
      title: 'Metal Finishing Services | Powder Coating Anodizing Plating',
      description: 'Professional finishing services: powder coating, anodizing, electroplating, and passivation. Durable finishes with complete documentation.',
    },
    'smart-sourcing': {
      title: 'Smart Sourcing & Supply Chain Management | Material Procurement',
      description: 'Strategic material sourcing and supply chain management. Volume purchasing power, certified suppliers, and optimized lead times.',
    },
  }

  const data = serviceData[service] || {
    title: 'Sheet Metal Services',
    description: 'Professional sheet metal fabrication services in Ontario.',
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: `${siteUrl}/services/${service}`,
    },
  }
}