import { Metadata } from 'next'
import { businessInfo } from './business-info'

/**
 * Metadata utility functions for optimizing SEO tags
 */

export interface MetadataOptions {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  images?: string[]
  noIndex?: boolean
  locale?: 'en-CA' | 'fr-CA'
  geoTagging?: {
    region: string
    placename: string
    position: string
  }
}

/**
 * Optimizes title length for SEO best practices (50-60 chars)
 */
export function optimizeTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title
  
  // Find last complete word within limit
  const truncated = title.substring(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
}

/**
 * Optimizes description length for SEO best practices (150-160 chars)
 */
export function optimizeDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description
  
  // Find last complete sentence within limit
  const truncated = description.substring(0, maxLength - 3)
  const lastPeriod = truncated.lastIndexOf('. ')
  const lastSpace = truncated.lastIndexOf(' ')
  
  // Prefer ending at sentence, fallback to word boundary
  const cutPoint = lastPeriod > maxLength * 0.7 ? lastPeriod + 1 : lastSpace
  return cutPoint > 0 ? description.substring(0, cutPoint) + '...' : truncated + '...'
}

/**
 * Generates canonical URL with proper trailing slash handling
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = businessInfo.url.replace(/\/$/, '') // Remove trailing slash from base
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Add trailing slash for consistency, except for file extensions
  const hasExtension = /\.[a-zA-Z]{2,4}$/.test(cleanPath)
  const finalPath = hasExtension || cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`
  
  return `${baseUrl}${finalPath}`
}

/**
 * Generates comprehensive metadata object with all enhancements
 */
export function generateEnhancedMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    images = [`${businessInfo.url}/og-image.jpg`],
    noIndex = false,
    locale = 'en-CA',
    geoTagging
  } = options

  const optimizedTitle = optimizeTitle(title)
  const optimizedDescription = optimizeDescription(description)
  
  const metadata: Metadata = {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl ? generateCanonicalUrl(canonicalUrl) : undefined,
      languages: {
        'en-CA': canonicalUrl ? `${generateCanonicalUrl(canonicalUrl)}` : undefined,
        'fr-CA': canonicalUrl ? `${generateCanonicalUrl(canonicalUrl)}?lang=fr` : undefined,
      }
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url: canonicalUrl ? generateCanonicalUrl(canonicalUrl) : businessInfo.url,
      siteName: businessInfo.name,
      type: 'website',
      locale: locale.replace('-', '_'), // Convert en-CA to en_CA
      alternateLocale: locale === 'en-CA' ? ['fr_CA', 'en_US'] : ['en_CA', 'en_US'],
      images: images.map((image, index) => ({
        url: image.startsWith('http') ? image : `${businessInfo.url}${image}`,
        width: index === 0 ? 1200 : 1200, // First image is banner, others square
        height: index === 0 ? 630 : 1200,
        alt: `${businessInfo.name} - ${optimizedTitle}`,
      }))
    },

    // Twitter Cards  
    twitter: {
      card: 'summary_large_image',
      site: '@canadianmetalfab',
      creator: '@canadianmetalfab',
      title: optimizedTitle.length > 70 ? optimizeTitle(optimizedTitle, 70) : optimizedTitle,
      description: optimizedDescription.length > 200 ? optimizeDescription(optimizedDescription, 200) : optimizedDescription,
      images: images.slice(0, 1).map(image => 
        image.startsWith('http') ? image : `${businessInfo.url}${image}`
      ),
    },

    // Additional meta tags
    other: {
      // Geo-tagging for local SEO
      ...(geoTagging && {
        'geo.region': geoTagging.region,
        'geo.placename': geoTagging.placename,
        'geo.position': geoTagging.position,
        'ICBM': geoTagging.position,
      }),
      // Business info
      'DC.title': optimizedTitle,
      'DC.description': optimizedDescription,
      'DC.language': locale,
      'DC.publisher': businessInfo.name,
      // Additional SEO tags
      'theme-color': '#1E40AF',
      'color-scheme': 'light',
      'format-detection': 'telephone=yes,address=yes,email=yes'
    }
  }

  return metadata
}

/**
 * Generates location-specific geo-tagging data
 */
export function generateLocationGeoTags(coordinates: { lat: number; lng: number }, city: string, province: string = 'ON') {
  return {
    region: `CA-${province}`,
    placename: city,
    position: `${coordinates.lat};${coordinates.lng}`
  }
}

/**
 * Combines base keywords with page-specific keywords, removing duplicates
 */
export function combineKeywords(baseKeywords: string[], pageKeywords: string[] = []): string[] {
  const uniqueKeywords = new Set([...pageKeywords, ...baseKeywords])
  const combined = Array.from(uniqueKeywords)
  return combined.slice(0, 15) // Limit to 15 keywords max for performance
}

/**
 * Generates breadcrumb keywords for nested pages
 */
export function generateBreadcrumbKeywords(pagePath: string): string[] {
  const pathParts = pagePath.split('/').filter(part => part.length > 0)
  const keywords: string[] = []
  
  pathParts.forEach(part => {
    const formatted = part.replace(/-/g, ' ')
    keywords.push(formatted)
    keywords.push(`${formatted} Ontario`)
    keywords.push(`${formatted} Canada`)
  })
  
  return keywords
}

/**
 * Service-specific keyword generation
 */
export function generateServiceKeywords(service: string, location?: string): string[] {
  const baseServiceKeywords = [
    service.replace(/-/g, ' '),
    `${service.replace(/-/g, ' ')} services`,
    `${service.replace(/-/g, ' ')} Ontario`,
    `custom ${service.replace(/-/g, ' ')}`,
    `professional ${service.replace(/-/g, ' ')}`,
  ]
  
  if (location) {
    return [
      ...baseServiceKeywords.map(keyword => `${keyword} ${location}`),
      ...baseServiceKeywords
    ]
  }
  
  return baseServiceKeywords
}

/**
 * Industry-specific keyword generation  
 */
export function generateIndustryKeywords(industry: string, service?: string): string[] {
  const baseKeywords = [
    `${industry} manufacturing`,
    `${industry} fabrication`,
    `${industry} metal work`,
    `${industry} Ontario`,
    `${industry} suppliers Canada`
  ]
  
  if (service) {
    return [
      ...baseKeywords.map(keyword => `${service} ${keyword}`),
      ...baseKeywords
    ]
  }
  
  return baseKeywords
}