export const businessInfo = {
  name: 'Canadian Metal Fabricators Ltd.',
  legalName: 'Canadian Metal Fabricators Ltd.',
  alternateName: 'PrecisionMetal Works',
  description: 'Premier sheet metal fabrication services in Mississauga, Ontario. ISO 9001 certified with AWS welding standards. Specializing in laser cutting, welding, forming, and finishing for OEMs and manufacturers.',
  url: 'https://canadianmetalfab.com',
  logo: 'https://canadianmetalfab.com/images/logo.png',
  image: 'https://canadianmetalfab.com/images/facility.jpg',
  telephone: '+1-647-407-0171',
  faxNumber: '+1-905-629-4446',
  email: 'info@canadianmetalfab.com',
  address: {
    streetAddress: '1645 Sismet Rd, Unit #9&10',
    addressLocality: 'Mississauga',
    addressRegion: 'ON',
    postalCode: 'L4W 1V6',
    addressCountry: 'CA'
  },
  geo: {
    latitude: 43.6075,
    longitude: -79.6499
  },
  openingHours: 'Mo-Fr 07:00-16:00',
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00'
    }
  ],
  priceRange: '$$',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Invoice'],
  currenciesAccepted: 'CAD',
  areaServed: [
    'Mississauga',
    'Toronto',
    'Brampton',
    'Oakville',
    'Burlington',
    'Hamilton',
    'Greater Toronto Area',
    'Ontario',
    'Canada'
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.6075,
      longitude: -79.6499
    },
    geoRadius: '100km'
  },
  
  departments: [
    {
      name: 'Sales Department',
      telephone: '+1-647-407-0171',
      email: 'sales@canadianmetalfab.com'
    },
    {
      name: 'Technical Support',
      telephone: '+1-647-407-0171',
      email: 'support@canadianmetalfab.com'
    }
  ],
  
  specialOpeningHours: [
    {
      '@type': 'OpeningHoursSpecification',
      validFrom: '2024-12-24',
      validThrough: '2024-12-25',
      opens: '00:00',
      closes: '00:00',
      dayOfWeek: ['Monday', 'Tuesday'],
      description: 'Closed for Christmas'
    }
  ],
  
  hasMap: 'https://maps.google.com/?q=Canadian+Metal+Fabricators+Mississauga',
  
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'John Smith'
      },
      reviewBody: 'Excellent quality and service for our custom metal fabrication needs. Professional team and on-time delivery.'
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Sarah Johnson'
      },
      reviewBody: 'Outstanding laser cutting precision and competitive pricing. Highly recommend for any metal fabrication project.'
    }
  ],
  
  slogan: 'Truth in Fundamentals',
  
  actionableFeedbackPolicy: 'https://canadianmetalfab.com/feedback',
  
  publicAccess: true,
  
  smokingAllowed: false,
  
  photo: [
    {
      '@type': 'ImageObject',
      url: 'https://canadianmetalfab.com/images/facility-exterior.jpg',
      caption: 'Canadian Metal Fabricators facility exterior'
    },
    {
      '@type': 'ImageObject', 
      url: 'https://canadianmetalfab.com/images/workshop.jpg',
      caption: 'Modern workshop with laser cutting equipment'
    }
  ]
  sameAs: [
    'https://www.linkedin.com/company/canadian-metal-fabricators',
    'https://www.facebook.com/canadianmetalfab'
  ],
  foundingDate: '2017',
  founders: ['Canadian Metal Fabricators Team'],
  awards: ['ISO 9001:2015 Certified', 'AWS Certified Welding'],
  knowsAbout: [
    'Sheet Metal Fabrication',
    'Laser Cutting',
    'CNC Machining',
    'Welding Services',
    'Metal Forming',
    'Powder Coating',
    'Metal Finishing',
    'Custom Manufacturing'
  ],
  hasOfferCatalog: {
    name: 'Sheet Metal Fabrication Services',
    itemListElement: [
      {
        name: 'Laser Cutting',
        description: 'Precision laser cutting up to 1" steel, 3/4" stainless steel, and 1/2" aluminum'
      },
      {
        name: 'Welding Services',
        description: 'MIG, TIG, and spot welding with AWS certified welders'
      },
      {
        name: 'Metal Forming',
        description: 'Press brake forming, rolling, and stamping services'
      },
      {
        name: 'Finishing Services',
        description: 'Powder coating, anodizing, and plating options'
      }
    ]
  }
}

export const socialProfiles = {
  linkedin: 'https://www.linkedin.com/company/canadian-metal-fabricators',
  facebook: 'https://www.facebook.com/canadianmetalfab',
  youtube: 'https://www.youtube.com/channel/canadianmetalfab'
}

export const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
    certifyingBody: 'International Organization for Standardization'
  },
  {
    name: 'AWS D1.1',
    description: 'Structural Welding Code - Steel',
    certifyingBody: 'American Welding Society'
  }
]