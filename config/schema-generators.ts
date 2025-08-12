import { businessInfo, certifications } from './business-info'
import type { LocationData } from '@/lib/locations/location-types'

/**
 * Comprehensive schema generators for enhanced structured data
 */

export interface ServiceSchemaData {
  name: string
  description: string
  url: string
  image?: string
  category?: string
  priceRange?: string
  areaServed?: string[]
}

export interface ArticleSchemaData {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  category?: string
}

export interface FAQSchemaData {
  question: string
  answer: string
}

/**
 * Enhanced LocalBusiness schema with location-specific data
 */
export function generateLocalBusinessSchema(location: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Manufacturer'],
    '@id': `${businessInfo.url}/locations/${location.slug}/#localbusiness`,
    
    // Basic business info
    name: `${businessInfo.name} - ${location.city}`,
    alternateName: `Canadian Metal Fabricators ${location.city}`,
    description: `Professional sheet metal fabrication services in ${location.city}, Ontario. ${businessInfo.description}`,
    url: `${businessInfo.url}/locations/${location.slug}/`,
    
    // Contact information
    telephone: businessInfo.telephone,
    faxNumber: businessInfo.faxNumber,
    email: businessInfo.email,
    
    // Location data
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.province,
      addressCountry: 'CA',
      // Service address - not physical location in each city
      areaServed: [location.city, ...location.nearbyAreas]
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng
    },
    
    // Service area
    areaServed: [
      {
        '@type': 'City',
        name: location.city,
        addressRegion: location.province,
        addressCountry: 'CA'
      },
      ...location.nearbyAreas.map(area => ({
        '@type': 'City',
        name: area,
        addressRegion: location.province,
        addressCountry: 'CA'
      }))
    ],
    
    // Services offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sheet Metal Fabrication Services',
      itemListElement: businessInfo.hasOfferCatalog.itemListElement.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${service.name} in ${location.city}`,
          description: service.description,
          areaServed: location.city,
          provider: {
            '@id': `${businessInfo.url}/locations/${location.slug}/#localbusiness`
          }
        },
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'CAD',
          price: '0',
          unitText: 'Quote required'
        }
      }))
    },
    
    // Business details
    foundingDate: businessInfo.foundingDate,
    priceRange: businessInfo.priceRange,
    paymentAccepted: businessInfo.paymentAccepted,
    currenciesAccepted: businessInfo.currenciesAccepted,
    openingHours: businessInfo.openingHours,
    
    // Certifications
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      description: cert.description,
      credentialCategory: 'certification',
      recognizedBy: {
        '@type': 'Organization',
        name: cert.certifyingBody
      }
    })),
    
    // Industries served in this location
    knowsAbout: [
      ...businessInfo.knowsAbout,
      ...location.localIndustries.map(industry => `${industry} in ${location.city}`)
    ],
    
    // Main organization link
    parentOrganization: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    // Social profiles
    sameAs: businessInfo.sameAs,
    
    // Images
    logo: {
      '@type': 'ImageObject',
      url: businessInfo.logo,
      width: 300,
      height: 100
    },
    image: businessInfo.image,
    
    // Local projects/reviews if available
    ...(location.content.localProjects && location.content.localProjects.length > 0 && {
      workExample: location.content.localProjects.map(project => ({
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        about: project.industry,
        dateCompleted: project.completedDate
      }))
    })
  }
}

/**
 * Service page schema with enhanced details
 */
export function generateServiceSchema(serviceData: ServiceSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceData.url}/#service`,
    
    name: serviceData.name,
    description: serviceData.description,
    url: serviceData.url,
    
    provider: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    serviceType: serviceData.category || 'Sheet Metal Fabrication',
    category: 'Manufacturing',
    
    areaServed: serviceData.areaServed?.map(area => ({
      '@type': 'State',
      name: area
    })) || businessInfo.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: serviceData.url,
      servicePhone: businessInfo.telephone,
      availableLanguage: ['en-CA', 'fr-CA']
    },
    
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'CAD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'CAD',
        unitText: 'Custom Quote'
      }
    },
    
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceData.name,
      description: serviceData.description
    },
    
    ...(serviceData.image && {
      image: {
        '@type': 'ImageObject',
        url: serviceData.image,
        width: 1200,
        height: 630
      }
    }),
    
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  }
}

/**
 * Article schema for blog posts and news
 */
export function generateArticleSchema(articleData: ArticleSchemaData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleData.url}/#article`,
    
    headline: articleData.headline,
    description: articleData.description,
    url: articleData.url,
    
    image: {
      '@type': 'ImageObject',
      url: articleData.image,
      width: 1200,
      height: 630
    },
    
    datePublished: articleData.datePublished,
    dateModified: articleData.dateModified,
    
    author: {
      '@type': 'Organization',
      '@id': `${businessInfo.url}/#organization`,
      name: businessInfo.name
    },
    
    publisher: {
      '@type': 'Organization',
      '@id': `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: businessInfo.logo,
        width: 300,
        height: 100
      }
    },
    
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleData.url
    },
    
    ...(articleData.category && {
      articleSection: articleData.category,
      about: articleData.category
    }),
    
    inLanguage: 'en-CA',
    
    isPartOf: {
      '@type': 'Blog',
      '@id': `${businessInfo.url}/blog/#blog`
    }
  }
}

/**
 * FAQ schema for service and location pages
 */
export function generateFAQSchema(faqs: FAQSchemaData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  }
}

/**
 * Organization schema with enhanced details
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
    '@id': `${businessInfo.url}/#organization`,
    
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    
    logo: {
      '@type': 'ImageObject',
      url: businessInfo.logo,
      width: 300,
      height: 100
    },
    
    image: businessInfo.image,
    
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessInfo.telephone,
        contactType: 'customer service',
        email: businessInfo.email,
        areaServed: 'CA',
        availableLanguage: ['English', 'French']
      },
      {
        '@type': 'ContactPoint',
        telephone: businessInfo.telephone,
        contactType: 'sales',
        email: 'sales@canadianmetalfab.com',
        areaServed: 'CA',
        availableLanguage: ['English', 'French']
      }
    ],
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude
    },
    
    hasOfferCatalog: businessInfo.hasOfferCatalog,
    
    areaServed: businessInfo.areaServed.map(area => ({
      '@type': area.includes('Ontario') || area.includes('Canada') || area.includes('Area') ? 'State' : 'City',
      name: area
    })),
    
    foundingDate: businessInfo.foundingDate,
    slogan: businessInfo.slogan,
    
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      description: cert.description,
      credentialCategory: 'certification',
      recognizedBy: {
        '@type': 'Organization',
        name: cert.certifyingBody
      }
    })),
    
    award: businessInfo.awards,
    knowsAbout: businessInfo.knowsAbout,
    
    sameAs: businessInfo.sameAs,
    
    openingHoursSpecification: businessInfo.openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes
    })),
    
    priceRange: businessInfo.priceRange,
    paymentAccepted: businessInfo.paymentAccepted,
    currenciesAccepted: businessInfo.currenciesAccepted,
    
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    
    review: businessInfo.review
  }
}

/**
 * Industry-specific service schema for industry pages
 */
export function generateIndustryServiceSchema(industry: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${businessInfo.url}/industries/${industry.slug}/#service`,
    
    name: `${industry.name} Metal Fabrication Services`,
    description: industry.metaDescription,
    url: `${businessInfo.url}/industries/${industry.slug}/`,
    
    provider: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    serviceType: `${industry.name} Fabrication`,
    category: 'Metal Fabrication',
    
    areaServed: businessInfo.areaServed.map((area: string) => ({
      '@type': area.includes('Ontario') || area.includes('Canada') ? 'State' : 'City',
      name: area
    })),
    
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'CAD',
      priceRange: businessInfo.priceRange,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'CAD',
        unitText: 'Custom Quote Required'
      }
    },
    
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${industry.name} Fabrication Services`,
      description: `Specialized metal fabrication services for the ${industry.name.toLowerCase()} industry`,
      itemListElement: industry.content.materials?.map((material: string, index: number) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${material} Fabrication`,
          description: `Professional ${material.toLowerCase()} fabrication services for ${industry.name.toLowerCase()} applications`,
          category: industry.name
        }
      })) || []
    },
    
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${businessInfo.url}/quote`,
      servicePhone: businessInfo.telephone,
      availableLanguage: ['en-CA']
    },
    
    serviceAudience: {
      '@type': 'BusinessAudience',
      name: `${industry.name} Companies`,
      description: `Manufacturing and processing companies in the ${industry.name.toLowerCase()} sector`
    },
    
    isRelatedTo: industry.relatedServices?.map((service: string) => ({
      '@type': 'Service',
      name: service,
      sameAs: `${businessInfo.url}/services/${service}`
    })) || [],
    
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '23',
      bestRating: '5',
      worstRating: '1'
    }
  }
}

/**
 * Case study schema for industry project examples
 */
export function generateCaseStudySchema(caseStudy: any, industry: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${businessInfo.url}/industries/${industry.slug}/#case-study-${caseStudy.id}`,
    
    name: caseStudy.title,
    description: caseStudy.description,
    about: `${industry.name} fabrication project`,
    
    creator: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    dateCreated: caseStudy.completedDate,
    datePublished: caseStudy.completedDate,
    
    locationCreated: {
      '@type': 'Place',
      name: caseStudy.location
    },
    
    workExample: {
      '@type': 'Product',
      name: caseStudy.title,
      description: caseStudy.solution,
      material: caseStudy.materials?.join(', '),
      manufacturer: {
        '@id': `${businessInfo.url}/#organization`
      }
    },
    
    keywords: [industry.name, 'fabrication', 'case study', caseStudy.location, ...caseStudy.materials || []].join(', ')
  }
}

/**
 * WebSite schema for the main website
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessInfo.url}/#website`,
    
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    
    publisher: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    potentialAction: {
      '@type': 'SearchAction',
      target: `${businessInfo.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    
    inLanguage: ['en-CA', 'fr-CA'],
    
    copyrightHolder: {
      '@id': `${businessInfo.url}/#organization`
    },
    
    copyrightYear: new Date().getFullYear()
  }
}