import { businessInfo, certifications } from '@/config/business-info'

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'WebPage' | 'ContactPage' | 'Service'
  customData?: Record<string, any>
}

export function StructuredData({ type = 'LocalBusiness', customData = {} }: StructuredDataProps) {
  const baseOrganization = {
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: {
      '@type': 'ImageObject',
      url: businessInfo.logo,
      width: '300',
      height: '100'
    },
    image: businessInfo.image,
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

  const schemas: Record<string, any> = {
    Organization: baseOrganization,
    LocalBusiness: {
      ...baseOrganization,
      '@type': 'LocalBusiness',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1'
      }
    },
    WebPage: {
      '@type': 'WebPage',
      '@id': `${businessInfo.url}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      url: `${businessInfo.url}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      name: customData.name || 'Canadian Metal Fabricators - Sheet Metal Fabrication Services',
      description: customData.description || businessInfo.description,
      isPartOf: {
        '@id': `${businessInfo.url}/#website`
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: customData.image || businessInfo.image
      },
      datePublished: customData.datePublished || '2024-01-01',
      dateModified: customData.dateModified || new Date().toISOString(),
      provider: {
        '@id': `${businessInfo.url}/#organization`
      }
    },
    ContactPage: {
      '@type': 'ContactPage',
      '@id': `${businessInfo.url}/contact`,
      url: `${businessInfo.url}/contact`,
      name: 'Contact Canadian Metal Fabricators',
      description: 'Get in touch with our sheet metal fabrication experts in Mississauga, Ontario. Request quotes, technical support, and project consultations.',
      mainEntity: {
        '@id': `${businessInfo.url}/#organization`
      }
    },
    Service: {
      '@type': 'Service',
      provider: {
        '@id': `${businessInfo.url}/#organization`
      },
      areaServed: businessInfo.areaServed.map(area => ({
        '@type': 'City',
        name: area
      })),
      hasOfferCatalog: baseOrganization.hasOfferCatalog,
      ...customData
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    ...schemas[type],
    ...customData
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}