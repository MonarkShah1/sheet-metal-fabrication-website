import { businessInfo } from './business-info'

/**
 * Image optimization configuration for OG images and social media
 */

export interface OptimizedImage {
  url: string
  width: number
  height: number
  alt: string
  format?: 'webp' | 'jpg' | 'png'
}

export interface ImageVariants {
  ogBanner: OptimizedImage      // 1200x630 for Facebook/LinkedIn
  ogSquare: OptimizedImage      // 1200x1200 for Instagram/Square
  twitterCard: OptimizedImage   // 1200x675 optimized for Twitter
  fallback: OptimizedImage      // Standard JPG fallback
}

/**
 * Generate optimized image variants for different social platforms
 */
export function generateImageVariants(
  baseName: string,
  alt: string,
  customPath?: string
): ImageVariants {
  const basePath = customPath || '/images/og'
  const baseUrl = businessInfo.url

  return {
    ogBanner: {
      url: `${baseUrl}${basePath}/${baseName}-og-1200x630.webp`,
      width: 1200,
      height: 630,
      alt: alt,
      format: 'webp'
    },
    ogSquare: {
      url: `${baseUrl}${basePath}/${baseName}-square-1200x1200.webp`,
      width: 1200,
      height: 1200,
      alt: alt,
      format: 'webp'
    },
    twitterCard: {
      url: `${baseUrl}${basePath}/${baseName}-twitter-1200x675.webp`,
      width: 1200,
      height: 675,
      alt: alt,
      format: 'webp'
    },
    fallback: {
      url: `${baseUrl}${basePath}/${baseName}-fallback.jpg`,
      width: 1200,
      height: 630,
      alt: alt,
      format: 'jpg'
    }
  }
}

/**
 * Service-specific image variants
 */
export function generateServiceImages(serviceSlug: string, serviceName: string): ImageVariants {
  return generateImageVariants(
    `service-${serviceSlug}`,
    `${serviceName} Services | Canadian Metal Fabricators`,
    '/images/services'
  )
}

/**
 * Location-specific image variants
 */
export function generateLocationImages(locationSlug: string, cityName: string): ImageVariants {
  return generateImageVariants(
    `location-${locationSlug}`,
    `Sheet Metal Fabrication in ${cityName}, Ontario | Canadian Metal Fabricators`,
    '/images/locations'
  )
}

/**
 * Blog post image variants
 */
export function generateBlogImages(postSlug: string, postTitle: string): ImageVariants {
  return generateImageVariants(
    `blog-${postSlug}`,
    `${postTitle} | Canadian Metal Fabricators Blog`,
    '/images/blog'
  )
}

/**
 * Industry-specific image variants
 */
export function generateIndustryImages(industrySlug: string, industryName: string): ImageVariants {
  return generateImageVariants(
    `industry-${industrySlug}`,
    `${industryName} Metal Fabrication Solutions | Canadian Metal Fabricators`,
    '/images/industries'
  )
}

/**
 * Default company images for pages without specific imagery
 */
export const defaultImages = {
  company: generateImageVariants('company', 'Canadian Metal Fabricators - Professional Sheet Metal Fabrication'),
  facility: generateImageVariants('facility', 'Canadian Metal Fabricators Manufacturing Facility'),
  services: generateImageVariants('services-overview', 'Complete Sheet Metal Fabrication Services'),
  about: generateImageVariants('about-us', 'About Canadian Metal Fabricators - Manufacturing Excellence Since 2017'),
  contact: generateImageVariants('contact', 'Contact Canadian Metal Fabricators - Get Expert Support'),
  quote: generateImageVariants('quote-request', 'Request a Quote - Canadian Metal Fabricators')
}

/**
 * Convert ImageVariants to Next.js metadata images array
 */
export function imagesToMetadata(variants: ImageVariants, preferWebP: boolean = true): Array<{
  url: string
  width: number
  height: number
  alt: string
}> {
  const images = []
  
  if (preferWebP) {
    // Add WebP variants first (preferred)
    images.push(variants.ogBanner, variants.twitterCard, variants.ogSquare)
  }
  
  // Always include fallback
  images.push(variants.fallback)
  
  return images
}

/**
 * Generate responsive image srcset for different screen sizes
 */
export function generateImageSrcSet(baseName: string, basePath: string = '/images/og'): string {
  const baseUrl = businessInfo.url
  const sizes = [
    { width: 1200, height: 630, descriptor: '1200w' },
    { width: 800, height: 420, descriptor: '800w' },
    { width: 600, height: 315, descriptor: '600w' },
    { width: 400, height: 210, descriptor: '400w' }
  ]
  
  return sizes
    .map(size => `${baseUrl}${basePath}/${baseName}-${size.width}x${size.height}.webp ${size.descriptor}`)
    .join(', ')
}

/**
 * Image optimization recommendations for implementation
 */
export const imageOptimizationGuide = {
  formats: {
    webp: {
      description: 'Modern format with 25-50% better compression than JPEG',
      support: 'Supported by all modern browsers (95%+ coverage)',
      recommendation: 'Primary format for all OG images'
    },
    jpg: {
      description: 'Universal fallback format',
      support: 'Universal browser support',
      recommendation: 'Fallback for older browsers and email clients'
    }
  },
  
  sizes: {
    ogBanner: {
      dimensions: '1200x630',
      purpose: 'Facebook, LinkedIn, general Open Graph',
      aspectRatio: '1.91:1'
    },
    ogSquare: {
      dimensions: '1200x1200',
      purpose: 'Instagram, square social media posts',
      aspectRatio: '1:1'
    },
    twitterCard: {
      dimensions: '1200x675',
      purpose: 'Twitter cards, optimized for Twitter display',
      aspectRatio: '16:9'
    }
  },
  
  optimization: {
    quality: '85% - balance of quality and file size',
    compression: 'Use modern compression algorithms',
    lazy_loading: 'Not needed for OG images (they\'re in <head>)',
    cdn: 'Consider using CDN for global delivery optimization'
  },
  
  naming_convention: {
    pattern: '[type]-[identifier]-[dimensions].[format]',
    examples: [
      'service-laser-cutting-1200x630.webp',
      'location-toronto-square-1200x1200.webp',
      'blog-metal-tolerances-twitter-1200x675.webp'
    ]
  }
}

/**
 * Validate image URLs and provide fallbacks
 */
export function validateImageUrl(imageUrl: string, fallback: string = `${businessInfo.url}/og-image.jpg`): string {
  // Basic URL validation
  try {
    new URL(imageUrl.startsWith('http') ? imageUrl : `${businessInfo.url}${imageUrl}`)
    return imageUrl.startsWith('http') ? imageUrl : `${businessInfo.url}${imageUrl}`
  } catch {
    return fallback
  }
}

/**
 * Performance monitoring for image loading
 */
export function generateImagePerformanceHints(variants: ImageVariants) {
  return {
    preload: [
      `<link rel="preload" as="image" href="${variants.ogBanner.url}" type="image/webp">`,
      `<link rel="preload" as="image" href="${variants.fallback.url}" type="image/jpeg">`
    ],
    prefetch: [
      `<link rel="prefetch" href="${variants.twitterCard.url}">`,
      `<link rel="prefetch" href="${variants.ogSquare.url}">`
    ]
  }
}