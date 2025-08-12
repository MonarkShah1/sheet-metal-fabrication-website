import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals'
import { 
  getActiveTest, 
  getTestForPage, 
  recordTestResult, 
  getTestResults,
  AB_TESTS 
} from '@/config/ab-tests'

describe('A/B Test Configuration', () => {
  beforeEach(() => {
    // Clear sessionStorage mock
    ;(window.sessionStorage.setItem as jest.Mock).mockClear()
    ;(window.sessionStorage.getItem as jest.Mock).mockClear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getActiveTest', () => {
    it('should return active test within date range', () => {
      const testName = 'hero_cta_primary'
      const test = getActiveTest(testName)
      
      expect(test).toBeTruthy()
      expect(test?.testName).toBe(testName)
      expect(test?.status).toBe('active')
    })

    it('should return null for inactive test', () => {
      // Assuming there's an inactive test or we modify the test temporarily
      const originalTest = AB_TESTS.hero_cta_primary
      AB_TESTS.hero_cta_primary = { ...originalTest, status: 'inactive' }
      
      const test = getActiveTest('hero_cta_primary')
      expect(test).toBeNull()
      
      // Restore original
      AB_TESTS.hero_cta_primary = originalTest
    })

    it('should return null for non-existent test', () => {
      const test = getActiveTest('non_existent_test')
      expect(test).toBeNull()
    })

    it('should handle date-based filtering', () => {
      const testName = 'hero_cta_primary'
      const originalTest = AB_TESTS[testName]
      
      // Set start date to future
      const futureTest = { 
        ...originalTest, 
        startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow
      }
      AB_TESTS[testName] = futureTest
      
      const test = getActiveTest(testName)
      expect(test).toBeNull()
      
      // Restore original
      AB_TESTS[testName] = originalTest
    })

    it('should respect end date when provided', () => {
      const testName = 'hero_cta_primary'
      const originalTest = AB_TESTS[testName]
      
      // Set end date to past
      const expiredTest = { 
        ...originalTest, 
        endDate: new Date(Date.now() - 86400000).toISOString().split('T')[0] // Yesterday
      }
      AB_TESTS[testName] = expiredTest
      
      const test = getActiveTest(testName)
      expect(test).toBeNull()
      
      // Restore original
      AB_TESTS[testName] = originalTest
    })
  })

  describe('getTestForPage', () => {
    it('should return tests for exact page match', () => {
      const tests = getTestForPage('/quote')
      
      const quoteTests = tests.filter(t => 
        t.targetPages.some(page => page === '/quote' || page.includes('quote'))
      )
      expect(quoteTests.length).toBeGreaterThan(0)
    })

    it('should return tests for dynamic route patterns', () => {
      const tests = getTestForPage('/industries/automotive')
      
      const industryTests = tests.filter(t => 
        t.targetPages.some(page => page === '/industries/[industry]')
      )
      expect(industryTests.length).toBeGreaterThan(0)
    })

    it('should return tests with wildcard matching', () => {
      const tests = getTestForPage('/any/page')
      
      const wildcardTests = tests.filter(t => 
        t.targetPages.includes('/*')
      )
      expect(wildcardTests.length).toBeGreaterThan(0)
    })

    it('should return empty array for pages with no matching tests', () => {
      const tests = getTestForPage('/admin/secret-page')
      
      // Should only return wildcard tests, if any
      const matchingTests = tests.filter(t => 
        !t.targetPages.includes('/*')
      )
      expect(matchingTests.length).toBe(0)
    })

    it('should handle location dynamic routes', () => {
      const tests = getTestForPage('/locations/toronto')
      
      const locationTests = tests.filter(t => 
        t.targetPages.some(page => page === '/locations/[location]')
      )
      expect(locationTests.length).toBeGreaterThan(0)
    })

    it('should handle service dynamic routes', () => {
      const tests = getTestForPage('/services/laser-cutting')
      
      const serviceTests = tests.filter(t => 
        t.targetPages.some(page => page === '/services/[service]')
      )
      expect(serviceTests.length).toBeGreaterThan(0)
    })
  })

  describe('Test Result Tracking', () => {
    beforeEach(() => {
      // Mock empty results initially
      ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('[]')
    })

    describe('recordTestResult', () => {
      it('should store test result in sessionStorage', () => {
        const result = {
          testName: 'test_name',
          variantId: 'variant_a',
          metric: 'click',
          value: 1,
          timestamp: Date.now()
        }

        recordTestResult(result)

        expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
          'ab_test_results',
          JSON.stringify([result])
        )
      })

      it('should append to existing results', () => {
        const existingResults = [
          { testName: 'old_test', variantId: 'control', metric: 'view', value: 1, timestamp: 123 }
        ]
        ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(existingResults))

        const newResult = {
          testName: 'test_name',
          variantId: 'variant_a',
          metric: 'click',
          value: 1,
          timestamp: Date.now()
        }

        recordTestResult(newResult)

        expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
          'ab_test_results',
          JSON.stringify([...existingResults, newResult])
        )
      })

      it('should handle sessionStorage errors gracefully', () => {
        ;(window.sessionStorage.getItem as jest.Mock).mockImplementation(() => {
          throw new Error('Storage error')
        })

        const result = {
          testName: 'test_name',
          variantId: 'variant_a',
          metric: 'click',
          value: 1,
          timestamp: Date.now()
        }

        // Should not throw
        expect(() => recordTestResult(result)).not.toThrow()
      })
    })

    describe('getTestResults', () => {
      it('should return filtered results for specific test', () => {
        const allResults = [
          { testName: 'test_a', variantId: 'control', metric: 'view', value: 1, timestamp: 123 },
          { testName: 'test_b', variantId: 'variant', metric: 'click', value: 1, timestamp: 124 },
          { testName: 'test_a', variantId: 'variant', metric: 'click', value: 1, timestamp: 125 }
        ]
        ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(allResults))

        const results = getTestResults('test_a')

        expect(results).toHaveLength(2)
        expect(results.every(r => r.testName === 'test_a')).toBe(true)
      })

      it('should return empty array for non-existent test', () => {
        ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('[]')

        const results = getTestResults('non_existent_test')

        expect(results).toEqual([])
      })

      it('should handle malformed JSON gracefully', () => {
        ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('invalid json')

        const results = getTestResults('test_name')

        expect(results).toEqual([])
      })

      it('should return empty array when sessionStorage is not available', () => {
        // Mock server-side environment
        const originalWindow = global.window
        delete (global as any).window

        const results = getTestResults('test_name')

        expect(results).toEqual([])

        // Restore window
        global.window = originalWindow
      })
    })
  })

  describe('Test Configuration Validation', () => {
    it('should have valid test configurations', () => {
      Object.entries(AB_TESTS).forEach(([testName, config]) => {
        // Test name should match key
        expect(config.testName).toBe(testName)
        
        // Should have required fields
        expect(config.description).toBeTruthy()
        expect(config.status).toMatch(/^(active|inactive|complete)$/)
        expect(config.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        expect(config.targetPages).toBeInstanceOf(Array)
        expect(config.variants).toBeInstanceOf(Array)
        expect(config.variants.length).toBeGreaterThan(0)
        
        // Variants should have required fields
        config.variants.forEach(variant => {
          expect(variant.id).toBeTruthy()
          expect(typeof variant.weight).toBe('number')
          expect(variant.weight).toBeGreaterThan(0)
        })
        
        // Weights should sum to 100
        const totalWeight = config.variants.reduce((sum, v) => sum + v.weight, 0)
        expect(totalWeight).toBe(100)
      })
    })

    it('should have unique variant IDs within each test', () => {
      Object.values(AB_TESTS).forEach(config => {
        const variantIds = config.variants.map(v => v.id)
        const uniqueIds = new Set(variantIds)
        
        expect(uniqueIds.size).toBe(variantIds.length)
      })
    })

    it('should have valid target page patterns', () => {
      Object.values(AB_TESTS).forEach(config => {
        config.targetPages.forEach(page => {
          // Should be string
          expect(typeof page).toBe('string')
          
          // Should start with / or be /*
          expect(page).toMatch(/^(\/.*|\*)$/)
        })
      })
    })
  })

  describe('Performance', () => {
    it('should handle large number of test results efficiently', () => {
      // Generate large dataset
      const largeResultSet = Array.from({ length: 1000 }, (_, i) => ({
        testName: i % 2 === 0 ? 'test_a' : 'test_b',
        variantId: i % 3 === 0 ? 'control' : 'variant',
        metric: 'click',
        value: 1,
        timestamp: Date.now() + i
      }))
      
      ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(largeResultSet))

      const startTime = performance.now()
      const results = getTestResults('test_a')
      const endTime = performance.now()

      // Should complete quickly (< 10ms for 1000 items)
      expect(endTime - startTime).toBeLessThan(10)
      
      // Should return correct number of filtered results
      expect(results.length).toBe(500) // Half should match 'test_a'
    })
  })
})