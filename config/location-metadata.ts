import { Metadata } from 'next'
import type { LocationData } from '@/lib/locations/location-types'
import { 
  generateEnhancedMetadata, 
  generateLocationGeoTags, 
  combineKeywords,
  generateServiceKeywords 
} from './metadata-utils'
import { businessInfo } from './business-info'

/**
 * Location-specific metadata generators for all Ontario locations
 */

const baseLocationKeywords = [
  'sheet metal fabrication',
  'metal fabrication services',
  'laser cutting services',
  'welding services',
  'CNC bending',
  'powder coating',
  'metal finishing',
  'custom metal work',
  'ISO 9001 certified',
  'AWS certified welding',
  'Ontario metal fabricators',
  'Canadian metal fabricators'
]

/**
 * Generates comprehensive metadata for location pages
 */
export function generateLocationMetadata(location: LocationData): Metadata {
  const geoTags = generateLocationGeoTags(location.coordinates, location.city, location.province)
  
  // Enhanced keywords combining location data
  const locationKeywords = combineKeywords(baseLocationKeywords, [
    ...location.localIndustries.map(industry => `${industry} ${location.city}`),
    ...location.nearbyAreas.map(area => `metal fabrication ${area}`),
    `sheet metal ${location.city}`,
    `metal fabrication ${location.city}`,
    `laser cutting ${location.city}`,
    `welding services ${location.city}`,
    `${location.city} manufacturing`,
    `${location.city} industrial services`
  ])

  return generateEnhancedMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: locationKeywords,
    canonicalUrl: `/locations/${location.slug}`,
    images: [
      `/images/locations/${location.slug}-hero.jpg`,
      `/images/locations/${location.slug}-facility.jpg`,
      '/og-image.jpg'
    ],
    geoTagging: geoTags
  })
}

/**
 * Generates service + location specific metadata
 */
export function generateServiceLocationMetadata(
  service: string, 
  location: LocationData
): Metadata {
  const serviceName = service.replace(/-/g, ' ')
  const title = `${serviceName} Services in ${location.city} | ${businessInfo.name}`
  const description = `Professional ${serviceName} services in ${location.city}, Ontario. Serving ${location.nearbyAreas.join(', ')} with ISO 9001 certified quality. Call ${businessInfo.telephone}.`
  
  const geoTags = generateLocationGeoTags(location.coordinates, location.city, location.province)
  const serviceLocationKeywords = combineKeywords(
    generateServiceKeywords(service, location.city),
    [
      ...location.localIndustries.map(industry => `${serviceName} ${industry}`),
      `${serviceName} ${location.city} Ontario`,
      `professional ${serviceName} ${location.city}`,
      `custom ${serviceName} services`,
    ]
  )

  return generateEnhancedMetadata({
    title,
    description,
    keywords: serviceLocationKeywords,
    canonicalUrl: `/services/${service}/${location.slug}`,
    images: [
      `/images/services/${service}-${location.slug}.jpg`,
      `/images/services/${service}-process.jpg`,
      '/og-image.jpg'
    ],
    geoTagging: geoTags
  })
}

/**
 * Generates industry + location specific metadata
 */
export function generateIndustryLocationMetadata(
  industry: string, 
  location: LocationData
): Metadata {
  const industryName = industry.replace(/-/g, ' ')
  const title = `${industryName} Metal Fabrication ${location.city} | ${businessInfo.name}`
  const description = `Specialized ${industryName} metal fabrication services in ${location.city}, ON. Expert solutions for ${industryName} manufacturers. ISO 9001 certified quality.`
  
  const geoTags = generateLocationGeoTags(location.coordinates, location.city, location.province)
  const industryKeywords = combineKeywords(baseLocationKeywords, [
    `${industryName} fabrication ${location.city}`,
    `${industryName} manufacturing ${location.city}`,
    `${industryName} metal work Ontario`,
    `${industryName} suppliers ${location.city}`,
    `custom ${industryName} fabrication`
  ])

  return generateEnhancedMetadata({
    title,
    description,
    keywords: industryKeywords,
    canonicalUrl: `/industries/${industry}/locations/${location.slug}`,
    geoTagging: geoTags
  })
}

/**
 * Tier-based optimization for location priorities
 */
export function getLocationPriority(location: LocationData): 'high' | 'medium' | 'low' {
  switch (location.tier) {
    case 1: return 'high'
    case 2: return 'medium'
    case 3: return 'low'
    default: return 'medium'
  }
}

/**
 * Generates location-specific Open Graph images metadata
 */
export function generateLocationOGImages(location: LocationData): Array<{url: string, width: number, height: number, alt: string}> {
  const baseUrl = businessInfo.url
  
  return [
    {
      url: `${baseUrl}/images/locations/${location.slug}-og.jpg`,
      width: 1200,
      height: 630,
      alt: `Sheet Metal Fabrication Services in ${location.city}, Ontario`
    },
    {
      url: `${baseUrl}/images/locations/${location.slug}-square.jpg`, 
      width: 1200,
      height: 1200,
      alt: `${businessInfo.name} - ${location.city} Services`
    },
    {
      url: `${baseUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: `${businessInfo.name} - Professional Metal Fabrication`
    }
  ]
}

/**
 * Location-specific robots directives based on tier and content quality
 */
export function generateLocationRobots(location: LocationData) {
  const priority = getLocationPriority(location)
  
  return {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': priority === 'high' ? -1 : 160,
    },
  }
}

/**
 * Generates location sitemap priorities
 */
export function getLocationSitemapPriority(location: LocationData): number {
  switch (location.tier) {
    case 1: return 0.9  // High priority cities
    case 2: return 0.7  // Medium priority
    case 3: return 0.5  // Lower priority
    default: return 0.5
  }
}

/**
 * Location-specific social sharing optimization
 */
export function generateLocationSocialTags(location: LocationData) {
  return {
    // Twitter-specific
    'twitter:data1': `${location.city}, ON`,
    'twitter:label1': 'Location',
    'twitter:data2': `${location.distanceFromFacility}km away`,
    'twitter:label2': 'Service Area'
  }
}

/**
 * Enhanced location metadata with all optimizations
 */
export function generateComprehensiveLocationMetadata(location: LocationData): Metadata {
  const baseMetadata = generateLocationMetadata(location)
  const ogImages = generateLocationOGImages(location)
  const robots = generateLocationRobots(location)
  const socialTags = generateLocationSocialTags(location)
  
  return {
    ...baseMetadata,
    
    // Enhanced Open Graph
    openGraph: {
      ...baseMetadata.openGraph,
      images: ogImages,
      // Location-specific OG tags
      locale: 'en_CA',
      alternateLocale: ['fr_CA'],
      siteName: businessInfo.name,
    },
    
    // Enhanced Twitter
    twitter: {
      ...baseMetadata.twitter,
      // Location-specific data
      site: '@canadianmetalfab',
      creator: '@canadianmetalfab',
    },
    
    // Enhanced robots
    robots,
    
    // Additional meta tags
    other: {
      ...(baseMetadata.other ? Object.fromEntries(
        Object.entries(baseMetadata.other).filter(([_, value]) => value !== undefined)
      ) : {}),
      
      // Local business tags
      'DC.coverage': location.city,
      'DC.identifier': `cmf-${location.slug}`,
      
      // Location-specific
      'city': location.city,
      'province': location.province,
      'service-area': location.nearbyAreas.join(', '),
      
      // Facebook-specific
      'og:locality': location.city,
      'og:region': location.province,
      'og:country-name': 'Canada'
    }
  }
}