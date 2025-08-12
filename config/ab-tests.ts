// A/B Test Configuration
// Based on PRD requirements for testing ICP-focused copy variations

export interface ABTestVariant {
  id: string
  weight: number
  text?: string
  component?: React.ReactNode
}

export interface ABTestDefinition {
  testName: string
  description: string
  status: 'active' | 'inactive' | 'complete'
  startDate: string
  endDate?: string
  targetPages: string[]
  variants: ABTestVariant[]
}

export const AB_TESTS: Record<string, ABTestDefinition> = {
  // Hero CTA Test - Testing ICP-focused vs generic messaging
  hero_cta_primary: {
    testName: 'hero_cta_primary',
    description: 'Test ICP-focused CTA copy vs generic quote request',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/'],
    variants: [
      {
        id: 'control',
        weight: 50,
        text: 'Get Quote'
      },
      {
        id: 'icp_focused',
        weight: 50,
        text: 'Fix Your Supply Chain Issues'
      }
    ]
  },

  // Industry Page Hero CTAs
  industry_hero_cta: {
    testName: 'industry_hero_cta',
    description: 'Test industry-specific problem-solving CTAs',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/industries/[industry]'],
    variants: [
      {
        id: 'control',
        weight: 25,
        text: 'Fix Your Supply Issues'
      },
      {
        id: 'problem_solving',
        weight: 25,
        text: 'Solve Your Manufacturing Challenges'
      },
      {
        id: 'urgent_delivery',
        weight: 25,
        text: 'Get Parts Delivered On Time'
      },
      {
        id: 'quality_focus',
        weight: 25,
        text: 'Get ISO-Certified Quality Parts'
      }
    ]
  },

  // Location Page Headlines
  location_headline: {
    testName: 'location_headline',
    description: 'Test local credibility vs capability messaging',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/locations/[location]'],
    variants: [
      {
        id: 'control',
        weight: 50,
        text: 'Metal Fabrication Services in {location}'
      },
      {
        id: 'credibility_focused',
        weight: 50,
        text: 'Trusted {location} Metal Fabricators Since 1995'
      }
    ]
  },

  // Quote Page Value Proposition
  quote_value_prop: {
    testName: 'quote_value_prop',
    description: 'Test different value propositions for quote requests',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/quote', '/quote/ontario-metal-fabrication'],
    variants: [
      {
        id: 'control',
        weight: 25,
        text: 'Get a Free Quote for Your Project'
      },
      {
        id: 'speed_focused',
        weight: 25,
        text: 'Get Quote in 24 Hours - Parts in 7 Days'
      },
      {
        id: 'quality_focused',
        weight: 25,
        text: 'ISO Certified Quality - Zero Defect Guarantee'
      },
      {
        id: 'problem_solver',
        weight: 25,
        text: 'End Your Supply Chain Delays Forever'
      }
    ]
  },

  // Service Page CTAs
  service_secondary_cta: {
    testName: 'service_secondary_cta',
    description: 'Test service-specific secondary CTAs',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/services/[service]'],
    variants: [
      {
        id: 'control',
        weight: 50,
        text: 'Learn More'
      },
      {
        id: 'capability_focused',
        weight: 50,
        text: 'See Our Capabilities'
      }
    ]
  },

  // Trust Signal Headlines
  trust_signal_headline: {
    testName: 'trust_signal_headline',
    description: 'Test different trust signal presentations',
    status: 'active',
    startDate: '2024-12-13',
    targetPages: ['/*'],
    variants: [
      {
        id: 'control',
        weight: 33,
        text: 'Why Choose Us'
      },
      {
        id: 'credibility',
        weight: 33,
        text: 'Proven Track Record'
      },
      {
        id: 'results_focused',
        weight: 34,
        text: 'Results That Matter'
      }
    ]
  }
}

// Helper functions for A/B test management
export function getActiveTest(testName: string): ABTestDefinition | null {
  const test = AB_TESTS[testName]
  if (!test || test.status !== 'active') return null
  
  // Check if test is within date range
  const now = new Date()
  const startDate = new Date(test.startDate)
  if (now < startDate) return null
  
  if (test.endDate) {
    const endDate = new Date(test.endDate)
    if (now > endDate) return null
  }
  
  return test
}

export function getTestForPage(page: string): ABTestDefinition[] {
  return Object.values(AB_TESTS).filter(test => {
    if (test.status !== 'active') return false
    
    return test.targetPages.some(targetPage => {
      // Handle wildcard matching
      if (targetPage === '/*') return true
      if (targetPage.includes('[') && targetPage.includes(']')) {
        // Dynamic route matching
        const pattern = targetPage.replace(/\[.*?\]/g, '[^/]+')
        const regex = new RegExp(`^${pattern}$`)
        return regex.test(page)
      }
      return page === targetPage
    })
  })
}

// Test result tracking utilities
export interface ABTestResult {
  testName: string
  variantId: string
  metric: string
  value: number
  timestamp: number
}

export function recordTestResult(result: ABTestResult) {
  if (typeof window === 'undefined') return
  
  const results = JSON.parse(sessionStorage.getItem('ab_test_results') || '[]')
  results.push(result)
  sessionStorage.setItem('ab_test_results', JSON.stringify(results))
}

export function getTestResults(testName: string): ABTestResult[] {
  if (typeof window === 'undefined') return []
  
  const results = JSON.parse(sessionStorage.getItem('ab_test_results') || '[]')
  return results.filter((result: ABTestResult) => result.testName === testName)
}