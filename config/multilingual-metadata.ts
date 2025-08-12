import { Metadata } from 'next'
import { businessInfo } from './business-info'

/**
 * Multilingual metadata support for Canadian Metal Fabricators
 * Supporting English (Canada) and French (Canada)
 */

export type SupportedLocale = 'en-CA' | 'fr-CA'

export interface MultilingualContent {
  'en-CA': {
    title: string
    description: string
    keywords?: string[]
  }
  'fr-CA': {
    title: string
    description: string
    keywords?: string[]
  }
}

/**
 * Generate hreflang alternates for a given page
 */
export function generateHreflangAlternates(
  basePath: string,
  includeXDefault: boolean = true
): Record<string, string> {
  const baseUrl = businessInfo.url.replace(/\/$/, '') // Remove trailing slash
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`
  
  const alternates: Record<string, string> = {
    'en-CA': `${baseUrl}${cleanPath}`,
    'fr-CA': `${baseUrl}/fr${cleanPath}`
  }
  
  // x-default typically points to primary language (English Canadian)
  if (includeXDefault) {
    alternates['x-default'] = `${baseUrl}${cleanPath}`
  }
  
  return alternates
}

/**
 * Service translations for multilingual support
 */
export const serviceTranslations: Record<string, MultilingualContent> = {
  'laser-cutting-bending': {
    'en-CA': {
      title: 'Laser Cutting & CNC Bending Services | Precision Metal Forming',
      description: 'Precision laser cutting up to 1" thick and CNC press brake bending. Tight tolerances, complex geometries, and fast turnaround in Mississauga.',
      keywords: ['laser cutting services', 'CNC bending', 'precision metal forming', 'sheet metal cutting']
    },
    'fr-CA': {
      title: 'Services de Découpe Laser et Pliage CNC | Formage de Métal de Précision',
      description: 'Découpe laser de précision jusqu\'à 1" d\'épaisseur et pliage CNC. Tolérances serrées, géométries complexes et délais rapides à Mississauga.',
      keywords: ['services découpe laser', 'pliage CNC', 'formage métal précision', 'découpe tôle']
    }
  },
  
  'welding': {
    'en-CA': {
      title: 'Certified Welding Services | AWS D1.1 MIG TIG Spot Welding',
      description: 'AWS certified welding services: MIG, TIG, and spot welding. Structural steel, stainless, and aluminum welding with 100% quality inspection.',
      keywords: ['AWS certified welding', 'MIG welding', 'TIG welding', 'spot welding']
    },
    'fr-CA': {
      title: 'Services de Soudage Certifiés | Soudage MIG TIG par Points AWS D1.1',
      description: 'Services de soudage certifiés AWS : soudage MIG, TIG et par points. Soudage acier structural, inoxydable et aluminium avec inspection 100% qualité.',
      keywords: ['soudage certifié AWS', 'soudage MIG', 'soudage TIG', 'soudage par points']
    }
  },
  
  'finishing': {
    'en-CA': {
      title: 'Metal Finishing Services | Powder Coating Anodizing Plating',
      description: 'Professional finishing services: powder coating, anodizing, electroplating, and passivation. Durable finishes with complete documentation.',
      keywords: ['powder coating', 'anodizing', 'electroplating', 'passivation']
    },
    'fr-CA': {
      title: 'Services de Finition Métallique | Revêtement Poudre Anodisation Placage',
      description: 'Services de finition professionnels : revêtement en poudre, anodisation, galvanoplastie et passivation. Finitions durables avec documentation complète.',
      keywords: ['revêtement poudre', 'anodisation', 'galvanoplastie', 'passivation']
    }
  }
}

/**
 * Location translations for multilingual support
 */
export const locationTranslations: Record<string, MultilingualContent> = {
  'toronto': {
    'en-CA': {
      title: 'Sheet Metal Fabrication Toronto | Custom Metal Manufacturing',
      description: 'Professional sheet metal fabrication services in Toronto, ON. Laser cutting, welding, forming & finishing. ISO 9001 certified. Serving Toronto manufacturers.',
      keywords: ['sheet metal fabrication Toronto', 'metal manufacturing Toronto', 'laser cutting Toronto']
    },
    'fr-CA': {
      title: 'Fabrication de Tôle Toronto | Fabrication Métallique Sur Mesure',
      description: 'Services professionnels de fabrication de tôle à Toronto, ON. Découpe laser, soudage, formage et finition. Certifié ISO 9001. Au service des manufacturiers de Toronto.',
      keywords: ['fabrication tôle Toronto', 'fabrication métallique Toronto', 'découpe laser Toronto']
    }
  },
  
  'mississauga': {
    'en-CA': {
      title: 'Sheet Metal Fabrication Mississauga | Local Manufacturing Services',
      description: 'Local sheet metal fabrication services in Mississauga, ON. Our ISO 9001 certified facility serves the Greater Toronto Area with precision manufacturing.',
      keywords: ['sheet metal Mississauga', 'metal fabrication Mississauga', 'manufacturing Mississauga']
    },
    'fr-CA': {
      title: 'Fabrication de Tôle Mississauga | Services de Fabrication Locaux',
      description: 'Services locaux de fabrication de tôle à Mississauga, ON. Notre installation certifiée ISO 9001 dessert la région du Grand Toronto avec une fabrication de précision.',
      keywords: ['tôle Mississauga', 'fabrication métallique Mississauga', 'fabrication Mississauga']
    }
  }
}

/**
 * Common business terms translations
 */
export const businessTermsTranslations = {
  'en-CA': {
    companyName: 'Canadian Metal Fabricators',
    tagline: 'Truth in Fundamentals',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    quote: 'Get Quote',
    locations: 'Locations',
    industries: 'Industries',
    certifications: 'Certifications',
    iso9001: 'ISO 9001:2015 Certified',
    awsCertified: 'AWS Certified Welding',
    phoneNumber: '+1-647-407-0171',
    email: 'info@canadianmetalfab.com',
    address: '1645 Sismet Rd, Unit #9&10, Mississauga, ON L4W 1V6'
  },
  'fr-CA': {
    companyName: 'Fabricants de Métaux Canadiens',
    tagline: 'Vérité dans les Fondamentaux',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    quote: 'Obtenir un Devis',
    locations: 'Emplacements',
    industries: 'Industries',
    certifications: 'Certifications',
    iso9001: 'Certifié ISO 9001:2015',
    awsCertified: 'Soudage Certifié AWS',
    phoneNumber: '+1-647-407-0171',
    email: 'info@canadianmetalfab.com',
    address: '1645 Sismet Rd, Unit #9&10, Mississauga, ON L4W 1V6'
  }
}

/**
 * Generate metadata for multilingual pages
 */
export function generateMultilingualMetadata(
  content: MultilingualContent,
  basePath: string,
  locale: SupportedLocale = 'en-CA'
): Metadata {
  const localizedContent = content[locale]
  const hreflangAlternates = generateHreflangAlternates(basePath)
  
  return {
    title: localizedContent.title,
    description: localizedContent.description,
    keywords: localizedContent.keywords?.join(', '),
    
    alternates: {
      canonical: hreflangAlternates[locale],
      languages: hreflangAlternates
    },
    
    openGraph: {
      title: localizedContent.title,
      description: localizedContent.description,
      url: hreflangAlternates[locale],
      locale: locale.replace('-', '_'), // Convert en-CA to en_CA for OG
      alternateLocale: Object.keys(hreflangAlternates)
        .filter(lang => lang !== locale && lang !== 'x-default')
        .map(lang => lang.replace('-', '_'))
    },
    
    twitter: {
      card: 'summary_large_image',
      title: localizedContent.title,
      description: localizedContent.description,
    },
    
    other: {
      'DC.language': locale,
      'content-language': locale,
      'og:locale': locale.replace('-', '_'),
      'article:content_tier': 'free'
    }
  }
}

/**
 * Generate service metadata with multilingual support
 */
export function generateMultilingualServiceMetadata(
  serviceSlug: string,
  locale: SupportedLocale = 'en-CA'
): Metadata | null {
  const content = serviceTranslations[serviceSlug]
  if (!content) return null
  
  return generateMultilingualMetadata(content, `/services/${serviceSlug}`, locale)
}

/**
 * Generate location metadata with multilingual support
 */
export function generateMultilingualLocationMetadata(
  locationSlug: string,
  locale: SupportedLocale = 'en-CA'
): Metadata | null {
  const content = locationTranslations[locationSlug]
  if (!content) return null
  
  return generateMultilingualMetadata(content, `/locations/${locationSlug}`, locale)
}

/**
 * Language switcher data for UI components
 */
export const languageSwitcher = {
  languages: [
    {
      code: 'en-CA',
      name: 'English',
      nativeName: 'English',
      flag: '🇨🇦',
      dir: 'ltr'
    },
    {
      code: 'fr-CA',
      name: 'French (Canada)',
      nativeName: 'Français (Canada)',
      flag: '🇨🇦',
      dir: 'ltr'
    }
  ]
}

/**
 * SEO best practices for multilingual implementation
 */
export const multilingualSEOGuide = {
  hreflang: {
    purpose: 'Tell search engines about language/country targeting',
    implementation: 'Use hreflang tags in <head> and XML sitemaps',
    xDefault: 'Should point to primary/fallback version (English Canadian)'
  },
  
  urls: {
    structure: 'Use /fr/ subdirectory for French content',
    canonical: 'Each language version should have its own canonical URL',
    consistency: 'Maintain same URL structure across languages'
  },
  
  content: {
    translation: 'Translate all meta tags, titles, and descriptions',
    keywords: 'Research language-specific keywords',
    cultural: 'Consider cultural differences in messaging'
  },
  
  technical: {
    charset: 'Use UTF-8 encoding for proper character support',
    langAttribute: 'Set lang attribute on <html> element',
    contentLanguage: 'Use Content-Language HTTP header'
  }
}

/**
 * Validate locale and provide fallback
 */
export function validateLocale(locale: string): SupportedLocale {
  return (locale === 'fr-CA' || locale === 'fr') ? 'fr-CA' : 'en-CA'
}

/**
 * Get localized business terms
 */
export function getLocalizedTerms(locale: SupportedLocale) {
  return businessTermsTranslations[locale]
}