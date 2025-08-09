import { businessInfo, certifications } from '@/config/business-info'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: {
      '@type': 'ImageObject',
      url: businessInfo.logo,
      width: '300',
      height: '100',
      caption: 'Canadian Metal Fabricators Logo'
    },
    image: [
      {
        '@type': 'ImageObject',
        url: businessInfo.image,
        width: '1920',
        height: '1080',
        caption: 'Canadian Metal Fabricators Facility'
      }
    ],
    telephone: businessInfo.telephone,
    faxNumber: businessInfo.faxNumber,
    email: businessInfo.email,
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
    openingHoursSpecification: businessInfo.openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes
    })),
    sameAs: businessInfo.sameAs,
    priceRange: businessInfo.priceRange,
    paymentAccepted: businessInfo.paymentAccepted,
    currenciesAccepted: businessInfo.currenciesAccepted,
    areaServed: businessInfo.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: businessInfo.hasOfferCatalog.name,
      itemListElement: businessInfo.hasOfferCatalog.itemListElement.map((item, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description
        },
        position: index + 1
      }))
    },
    knowsAbout: businessInfo.knowsAbout,
    foundingDate: businessInfo.foundingDate,
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      description: cert.description,
      credentialCategory: 'certification',
      recognizedBy: {
        '@type': 'Organization',
        name: cert.certifyingBody
      }
    }))
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessInfo.url}/#website`,
    url: businessInfo.url,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      '@id': `${businessInfo.url}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${businessInfo.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en-CA', 'fr-CA']
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
  provider?: string
  areaServed?: string[]
  offers?: Array<{ price?: string; priceCurrency?: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      '@id': `${businessInfo.url}/#organization`
    },
    areaServed: service.areaServed?.map(area => ({
      '@type': 'City',
      name: area
    })) || businessInfo.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    offers: service.offers?.map(offer => ({
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: offer.priceCurrency || 'CAD'
    }))
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  brand?: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || businessInfo.name
    },
    manufacturer: {
      '@id': `${businessInfo.url}/#organization`
    },
    offers: product.offers ? {
      '@type': 'Offer',
      price: product.offers.price,
      priceCurrency: product.offers.priceCurrency,
      availability: product.offers.availability,
      seller: {
        '@id': `${businessInfo.url}/#organization`
      }
    } : undefined
  }
}

export function generateArticleSchema(article: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@id': `${businessInfo.url}/#organization`
    },
    keywords: article.keywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${businessInfo.url}/blog`
    }
  }
}

export function generateHowToSchema(howTo: {
  name: string
  description: string
  image?: string
  totalTime?: string
  estimatedCost?: {
    value: string
    currency: string
  }
  supply?: string[]
  tool?: string[]
  step: Array<{
    name: string
    text: string
    image?: string
    url?: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    image: howTo.image,
    totalTime: howTo.totalTime,
    estimatedCost: howTo.estimatedCost ? {
      '@type': 'MonetaryAmount',
      value: howTo.estimatedCost.value,
      currency: howTo.estimatedCost.currency
    } : undefined,
    supply: howTo.supply?.map(item => ({
      '@type': 'HowToSupply',
      name: item
    })),
    tool: howTo.tool?.map(item => ({
      '@type': 'HowToTool',
      name: item
    })),
    step: howTo.step.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
      image: s.image,
      url: s.url
    }))
  }
}

export function generateVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
  embedUrl: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      '@id': `${businessInfo.url}/#organization`
    }
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: {
    name: string
    address: string
  }
  image?: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
    url: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location.address
      }
    },
    image: event.image,
    offers: event.offers ? {
      '@type': 'Offer',
      price: event.offers.price,
      priceCurrency: event.offers.priceCurrency,
      availability: event.offers.availability,
      url: event.offers.url
    } : undefined,
    organizer: {
      '@id': `${businessInfo.url}/#organization`
    }
  }
}