import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { 
  optimizeTitle, 
  optimizeDescription, 
  generateCanonicalUrl,
  generateEnhancedMetadata,
  generateLocationGeoTags,
  combineKeywords,
  generateServiceKeywords
} from '../config/metadata-utils'
import { 
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from '../config/schema-generators'
import { generateLocationMetadata } from '../config/location-metadata'
import { metadataCache, CacheTTL } from '../config/metadata-cache'
import { 
  generateMultilingualMetadata,
  validateLocale,
  generateHreflangAlternates
} from '../config/multilingual-metadata'

/**
 * Comprehensive metadata testing suite
 */

describe('Metadata Utils', () => {
  describe('optimizeTitle', () => {
    it('should keep titles under the specified length', () => {
      const longTitle = 'This is a very long title that exceeds the typical SEO recommendation for title lengths and should be truncated'
      const optimized = optimizeTitle(longTitle, 60)
      expect(optimized.length).toBeLessThanOrEqual(60)
    })

    it('should not truncate short titles', () => {
      const shortTitle = 'Short Title'
      const optimized = optimizeTitle(shortTitle, 60)
      expect(optimized).toBe(shortTitle)
    })

    it('should truncate at word boundaries', () => {
      const title = 'Sheet Metal Fabrication Services in Toronto Ontario Canada'
      const optimized = optimizeTitle(title, 50)
      expect(optimized).not.toMatch(/\w+\.\.\.$/) // Should not end with partial word
    })
  })

  describe('optimizeDescription', () => {
    it('should keep descriptions under the specified length', () => {
      const longDesc = 'This is a very long description that goes on and on about various services and capabilities that we offer in the sheet metal fabrication industry across Ontario and beyond.'
      const optimized = optimizeDescription(longDesc, 160)
      expect(optimized.length).toBeLessThanOrEqual(160)
    })

    it('should prefer sentence boundaries for truncation', () => {
      const desc = 'First sentence. Second very long sentence that should be cut off.'
      const optimized = optimizeDescription(desc, 30)
      expect(optimized).toBe('First sentence.')
    })
  })

  describe('generateCanonicalUrl', () => {
    it('should generate proper canonical URLs', () => {
      const url = generateCanonicalUrl('/services/laser-cutting')
      expect(url).toBe('https://canadianmetalfab.com/services/laser-cutting/')
    })

    it('should handle paths without leading slash', () => {
      const url = generateCanonicalUrl('about')
      expect(url).toBe('https://canadianmetalfab.com/about/')
    })

    it('should not add trailing slash to file extensions', () => {
      const url = generateCanonicalUrl('/sitemap.xml')
      expect(url).toBe('https://canadianmetalfab.com/sitemap.xml')
    })
  })

  describe('generateEnhancedMetadata', () => {
    it('should generate complete metadata object', () => {
      const metadata = generateEnhancedMetadata({
        title: 'Test Title',
        description: 'Test Description',
        canonicalUrl: '/test',
        keywords: ['test', 'metadata']
      })

      expect(metadata.title).toBe('Test Title')
      expect(metadata.description).toBe('Test Description')
      expect(metadata.keywords).toBe('test, metadata')
      expect(metadata.alternates?.canonical).toBe('https://canadianmetalfab.com/test/')
      expect(metadata.openGraph?.title).toBe('Test Title')
      expect(metadata.twitter?.title).toBe('Test Title')
    })

    it('should include geo-tagging when provided', () => {
      const geoTags = generateLocationGeoTags({ lat: 43.6532, lng: -79.3832 }, 'Toronto')
      const metadata = generateEnhancedMetadata({
        title: 'Test',
        description: 'Test',
        geoTagging: geoTags
      })

      expect(metadata.other?.['geo.region']).toBe('CA-ON')
      expect(metadata.other?.['geo.placename']).toBe('Toronto')
      expect(metadata.other?.['geo.position']).toBe('43.6532;-79.3832')
    })
  })

  describe('combineKeywords', () => {
    it('should combine and deduplicate keywords', () => {
      const base = ['metal', 'fabrication', 'ontario']
      const page = ['metal', 'laser', 'cutting']
      const combined = combineKeywords(base, page)
      
      expect(combined).toContain('metal')
      expect(combined).toContain('fabrication')
      expect(combined).toContain('laser')
      expect(combined.filter(k => k === 'metal')).toHaveLength(1) // No duplicates
    })

    it('should limit to maximum keywords', () => {
      const base = new Array(10).fill(0).map((_, i) => `keyword${i}`)
      const page = new Array(10).fill(0).map((_, i) => `page${i}`)
      const combined = combineKeywords(base, page)
      
      expect(combined.length).toBeLessThanOrEqual(15)
    })
  })
})

describe('Schema Generators', () => {
  describe('generateLocalBusinessSchema', () => {
    const mockLocation = {
      slug: 'toronto',
      city: 'Toronto',
      province: 'ON',
      coordinates: { lat: 43.6532, lng: -79.3832 },
      nearbyAreas: ['Etobicoke', 'North York'],
      localIndustries: ['Manufacturing', 'Automotive'],
      faqs: [],
      content: { localProjects: [] }
    }

    it('should generate valid LocalBusiness schema', () => {
      const schema = generateLocalBusinessSchema(mockLocation as any)
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toContain('LocalBusiness')
      expect(schema.name).toContain('Toronto')
      expect(schema.geo.latitude).toBe(43.6532)
      expect(schema.areaServed).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'Toronto' }),
          expect.objectContaining({ name: 'Etobicoke' })
        ])
      )
    })
  })

  describe('generateServiceSchema', () => {
    it('should generate valid Service schema', () => {
      const serviceData = {
        name: 'Laser Cutting',
        description: 'Precision laser cutting services',
        url: 'https://canadianmetalfab.com/services/laser-cutting/',
        category: 'Manufacturing'
      }

      const schema = generateServiceSchema(serviceData)
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toBe('Laser Cutting')
      expect(schema.provider).toEqual(
        expect.objectContaining({ '@id': expect.stringContaining('organization') })
      )
    })
  })

  describe('generateFAQSchema', () => {
    it('should generate valid FAQ schema', () => {
      const faqs = [
        { question: 'What is laser cutting?', answer: 'Laser cutting is a precision manufacturing process.' },
        { question: 'How accurate is laser cutting?', answer: 'We achieve tolerances of ±0.003 inches.' }
      ]

      const schema = generateFAQSchema(faqs)
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('FAQPage')
      expect(schema.mainEntity).toHaveLength(2)
      expect(schema.mainEntity[0]['@type']).toBe('Question')
    })
  })

  describe('generateBreadcrumbSchema', () => {
    it('should generate valid BreadcrumbList schema', () => {
      const breadcrumbs = [
        { name: 'Home', url: 'https://canadianmetalfab.com/' },
        { name: 'Services', url: 'https://canadianmetalfab.com/services/' },
        { name: 'Laser Cutting', url: 'https://canadianmetalfab.com/services/laser-cutting/' }
      ]

      const schema = generateBreadcrumbSchema(breadcrumbs)
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(3)
      expect(schema.itemListElement[1].position).toBe(2)
    })
  })
})

describe('Metadata Cache', () => {
  beforeEach(() => {
    metadataCache.clearAll()
  })

  afterEach(() => {
    metadataCache.clearAll()
  })

  describe('basic caching', () => {
    it('should cache and retrieve metadata', async () => {
      const testMetadata = { title: 'Test Title', description: 'Test Description' }
      
      // Generator function that should only be called once
      let callCount = 0
      const generator = () => {
        callCount++
        return testMetadata
      }

      // First call should generate and cache
      const result1 = await metadataCache.getOrGenerate('test', 'item1', generator, CacheTTL.STATIC_PAGES)
      expect(result1).toEqual(testMetadata)
      expect(callCount).toBe(1)

      // Second call should use cache
      const result2 = await metadataCache.getOrGenerate('test', 'item1', generator, CacheTTL.STATIC_PAGES)
      expect(result2).toEqual(testMetadata)
      expect(callCount).toBe(1) // Generator not called again
    })

    it('should track cache statistics', async () => {
      const generator = () => ({ title: 'Test' })
      
      // Generate some cache hits and misses
      await metadataCache.getOrGenerate('test', 'item1', generator)
      await metadataCache.getOrGenerate('test', 'item1', generator) // Cache hit
      await metadataCache.getOrGenerate('test', 'item2', generator) // Cache miss
      
      const stats = metadataCache.getStats()
      expect(stats.hits).toBe(1)
      expect(stats.misses).toBe(2)
      expect(stats.totalRequests).toBe(3)
      expect(stats.hitRate).toBeCloseTo(33.33, 2)
    })
  })

  describe('cache expiration', () => {
    it('should expire cached entries after TTL', async () => {
      const generator = jest.fn(() => ({ title: 'Test' }))
      const shortTTL = 100 // 100ms
      
      // Cache with short TTL
      await metadataCache.getOrGenerate('test', 'item1', generator, shortTTL)
      expect(generator).toHaveBeenCalledTimes(1)
      
      // Should use cache immediately
      await metadataCache.getOrGenerate('test', 'item1', generator, shortTTL)
      expect(generator).toHaveBeenCalledTimes(1)
      
      // Wait for expiration
      await new Promise(resolve => setTimeout(resolve, 150))
      
      // Should regenerate after expiration
      await metadataCache.getOrGenerate('test', 'item1', generator, shortTTL)
      expect(generator).toHaveBeenCalledTimes(2)
    })
  })
})

describe('Multilingual Support', () => {
  describe('validateLocale', () => {
    it('should validate and normalize locales', () => {
      expect(validateLocale('en-CA')).toBe('en-CA')
      expect(validateLocale('fr-CA')).toBe('fr-CA')
      expect(validateLocale('fr')).toBe('fr-CA')
      expect(validateLocale('en')).toBe('en-CA')
      expect(validateLocale('invalid')).toBe('en-CA')
    })
  })

  describe('generateHreflangAlternates', () => {
    it('should generate proper hreflang alternates', () => {
      const alternates = generateHreflangAlternates('/services/laser-cutting')
      
      expect(alternates['en-CA']).toBe('https://canadianmetalfab.com/services/laser-cutting')
      expect(alternates['fr-CA']).toBe('https://canadianmetalfab.com/fr/services/laser-cutting')
      expect(alternates['x-default']).toBe('https://canadianmetalfab.com/services/laser-cutting')
    })

    it('should handle root paths correctly', () => {
      const alternates = generateHreflangAlternates('/')
      
      expect(alternates['en-CA']).toBe('https://canadianmetalfab.com/')
      expect(alternates['fr-CA']).toBe('https://canadianmetalfab.com/fr/')
    })
  })

  describe('generateMultilingualMetadata', () => {
    const content = {
      'en-CA': {
        title: 'Laser Cutting Services',
        description: 'Precision laser cutting services in Ontario.',
        keywords: ['laser cutting', 'precision manufacturing']
      },
      'fr-CA': {
        title: 'Services de Découpe Laser',
        description: 'Services de découpe laser de précision en Ontario.',
        keywords: ['découpe laser', 'fabrication précision']
      }
    }

    it('should generate metadata for English Canadian', () => {
      const metadata = generateMultilingualMetadata(content, '/services/laser-cutting', 'en-CA')
      
      expect(metadata.title).toBe('Laser Cutting Services')
      expect(metadata.description).toBe('Precision laser cutting services in Ontario.')
      expect(metadata.keywords).toBe('laser cutting, precision manufacturing')
      expect(metadata.alternates?.canonical).toBe('https://canadianmetalfab.com/services/laser-cutting')
      expect(metadata.openGraph?.locale).toBe('en_CA')
    })

    it('should generate metadata for French Canadian', () => {
      const metadata = generateMultilingualMetadata(content, '/services/laser-cutting', 'fr-CA')
      
      expect(metadata.title).toBe('Services de Découpe Laser')
      expect(metadata.description).toBe('Services de découpe laser de précision en Ontario.')
      expect(metadata.alternates?.canonical).toBe('https://canadianmetalfab.com/fr/services/laser-cutting')
      expect(metadata.openGraph?.locale).toBe('fr_CA')
    })
  })
})

describe('Integration Tests', () => {
  it('should generate complete location metadata with all features', async () => {
    const mockLocation = {
      slug: 'toronto',
      city: 'Toronto',
      province: 'ON',
      metaTitle: 'Sheet Metal Fabrication Toronto | Custom Metal Manufacturing',
      metaDescription: 'Professional sheet metal fabrication services in Toronto, ON.',
      coordinates: { lat: 43.6532, lng: -79.3832 },
      nearbyAreas: ['Etobicoke', 'North York'],
      localIndustries: ['Manufacturing', 'Automotive'],
      faqs: [
        { question: 'Do you serve Toronto?', answer: 'Yes, we serve all of Toronto.' }
      ]
    }

    const metadata = generateLocationMetadata(mockLocation as any)
    
    // Check all essential metadata components
    expect(metadata.title).toContain('Toronto')
    expect(metadata.description).toContain('Toronto')
    expect(metadata.keywords).toContain('Toronto')
    expect(metadata.alternates?.canonical).toContain('/locations/toronto')
    expect(metadata.openGraph?.title).toBeTruthy()
    expect(metadata.twitter?.title).toBeTruthy()
    expect(metadata.other?.['geo.placename']).toBe('Toronto')
    expect(metadata.other?.['geo.region']).toBe('CA-ON')
  })

  it('should handle performance requirements', async () => {
    const startTime = performance.now()
    
    // Generate metadata for multiple items
    const tasks = Array.from({ length: 10 }, (_, i) => 
      generateEnhancedMetadata({
        title: `Test Title ${i}`,
        description: `Test Description ${i}`,
        canonicalUrl: `/test-${i}`
      })
    )
    
    await Promise.all(tasks)
    const duration = performance.now() - startTime
    
    // Should complete within reasonable time (< 100ms for 10 items)
    expect(duration).toBeLessThan(100)
  })
})

// Mock external dependencies if needed
jest.mock('../config/business-info', () => ({
  businessInfo: {
    url: 'https://canadianmetalfab.com',
    name: 'Canadian Metal Fabricators Ltd.',
    telephone: '+1-647-407-0171',
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
    areaServed: ['Toronto', 'Mississauga', 'Ontario'],
    hasOfferCatalog: {
      itemListElement: [
        { name: 'Laser Cutting', description: 'Precision laser cutting services' }
      ]
    }
  }
}))

export {} // Make this a module