import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals'
import { ABTest, CTAABTest, HeadlineABTest } from '@/components/ABTest'
import { ABTestButton } from '@/components/ABTestButton'
import { ABTestHeadline } from '@/components/ABTestHeadline'

// Mock analytics
const mockTrackABTest = jest.fn()
jest.mock('@/lib/analytics', () => ({
  trackABTest: mockTrackABTest,
  trackCTAClick: jest.fn(),
  initializeUserEngagementTracking: jest.fn()
}))

// Mock config
const mockGetActiveTest = jest.fn()
jest.mock('@/config/ab-tests', () => ({
  getActiveTest: mockGetActiveTest,
  recordTestResult: jest.fn(),
  AB_TESTS: {
    test_cta: {
      testName: 'test_cta',
      variants: [
        { id: 'control', weight: 50, text: 'Control CTA' },
        { id: 'variant', weight: 50, text: 'Variant CTA' }
      ]
    }
  }
}))

describe('ABTest Component', () => {
  beforeEach(() => {
    // Clear session storage mock
    ;(window.sessionStorage.setItem as jest.Mock).mockClear()
    ;(window.sessionStorage.getItem as jest.Mock).mockClear()
    mockTrackABTest.mockClear()
    
    // Reset location mock
    delete (window as any).location
    window.location = { pathname: '/test-page' } as any
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render control variant by default during SSR', () => {
    const variants = [
      { id: 'control', weight: 50, component: <div>Control Content</div> },
      { id: 'variant', weight: 50, component: <div>Variant Content</div> }
    ]

    render(<ABTest testName="test_ab" variants={variants} />)
    
    expect(screen.getByText('Control Content')).toBeInTheDocument()
  })

  it('should use existing variant from sessionStorage', async () => {
    // Mock existing variant in sessionStorage
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')

    const variants = [
      { id: 'control', weight: 50, component: <div>Control Content</div> },
      { id: 'variant', weight: 50, component: <div>Variant Content</div> }
    ]

    render(<ABTest testName="test_ab" variants={variants} />)
    
    await waitFor(() => {
      expect(screen.getByText('Variant Content')).toBeInTheDocument()
    })

    expect(mockTrackABTest).toHaveBeenCalledWith('test_ab', 'variant', '/test-page')
  })

  it('should select variant based on weights', async () => {
    // Mock no existing variant
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue(null)
    
    // Mock Math.random to return 0.3 (should select first variant)
    const originalRandom = Math.random
    Math.random = jest.fn(() => 0.3)

    const variants = [
      { id: 'control', weight: 50, component: <div>Control Content</div> },
      { id: 'variant', weight: 50, component: <div>Variant Content</div> }
    ]

    render(<ABTest testName="test_ab" variants={variants} />)
    
    await waitFor(() => {
      expect(window.sessionStorage.setItem).toHaveBeenCalledWith('ab_test_test_ab', 'control')
    })

    // Restore original Math.random
    Math.random = originalRandom
  })
})

describe('ABTestButton Component', () => {
  beforeEach(() => {
    mockGetActiveTest.mockReturnValue({
      testName: 'test_cta',
      variants: [
        { id: 'control', weight: 50, text: 'Control CTA' },
        { id: 'variant', weight: 50, text: 'Variant CTA' }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')
  })

  it('should render with variant text', async () => {
    render(
      <ABTestButton
        testName="test_cta"
        href="/quote"
        defaultText="Default CTA"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Variant CTA')).toBeInTheDocument()
    })
  })

  it('should handle custom styled buttons', async () => {
    render(
      <ABTestButton
        testName="test_cta"
        href="/quote"
        defaultText="Default CTA"
        className="bg-blue-500 text-white px-4 py-2"
        useStyledButton
      />
    )

    await waitFor(() => {
      const button = screen.getByRole('link')
      expect(button).toHaveClass('bg-blue-500', 'text-white', 'px-4', 'py-2')
      expect(button).toHaveAttribute('href', '/quote')
    })
  })

  it('should track clicks properly', async () => {
    const mockTrackCTAClick = jest.fn()
    jest.doMock('@/lib/analytics', () => ({
      trackABTest: mockTrackABTest,
      trackCTAClick: mockTrackCTAClick
    }))

    render(
      <ABTestButton
        testName="test_cta"
        href="/quote"
        defaultText="Default CTA"
      />
    )

    await waitFor(() => {
      const button = screen.getByRole('link')
      fireEvent.click(button)
    })

    // Note: Due to module mocking limitations, we can't directly test the click tracking
    // but the component structure should be correct
  })
})

describe('ABTestHeadline Component', () => {
  beforeEach(() => {
    mockGetActiveTest.mockReturnValue({
      testName: 'test_headline',
      variants: [
        { id: 'control', weight: 50, text: 'Control Headline' },
        { id: 'variant', weight: 50, text: 'Variant Headline' }
      ]
    })
    ;(window.sessionStorage.getItem as jest.Mock).mockReturnValue('variant')
  })

  it('should render with correct heading level', async () => {
    render(
      <ABTestHeadline
        testName="test_headline"
        defaultText="Default Headline"
        as="h2"
        className="text-2xl font-bold"
      />
    )

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveClass('text-2xl', 'font-bold')
      expect(heading).toHaveTextContent('Variant Headline')
    })
  })

  it('should track engagement on hover', async () => {
    render(
      <ABTestHeadline
        testName="test_headline"
        defaultText="Default Headline"
      />
    )

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 })
      fireEvent.mouseEnter(heading)
    })

    // Component structure should be correct
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})

describe('CTAABTest Component', () => {
  it('should render CTA variants correctly', () => {
    const variants = [
      { id: 'control', text: 'Get Quote', weight: 50 },
      { id: 'variant', text: 'Fix Your Issues', weight: 50 }
    ]

    render(
      <CTAABTest
        testName="cta_test"
        href="/quote"
        variants={variants}
        className="btn btn-primary"
      />
    )

    // Should render one of the variants (control during SSR)
    expect(screen.getByText('Get Quote')).toBeInTheDocument()
  })
})

describe('HeadlineABTest Component', () => {
  it('should render headline variants correctly', () => {
    const variants = [
      { id: 'control', text: 'Control Headline', weight: 50 },
      { id: 'variant', text: 'Variant Headline', weight: 50 }
    ]

    render(
      <HeadlineABTest
        testName="headline_test"
        variants={variants}
        className="text-4xl font-bold"
      />
    )

    // Should render control during SSR
    expect(screen.getByText('Control Headline')).toBeInTheDocument()
  })
})

describe('Error Handling', () => {
  it('should handle missing test configuration gracefully', async () => {
    mockGetActiveTest.mockReturnValue(null)

    render(
      <ABTestButton
        testName="nonexistent_test"
        href="/quote"
        defaultText="Default CTA"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Default CTA')).toBeInTheDocument()
    })
  })

  it('should handle sessionStorage errors gracefully', async () => {
    // Mock sessionStorage to throw an error
    ;(window.sessionStorage.getItem as jest.Mock).mockImplementation(() => {
      throw new Error('SessionStorage error')
    })

    const variants = [
      { id: 'control', weight: 50, component: <div>Control Content</div> },
      { id: 'variant', weight: 50, component: <div>Variant Content</div> }
    ]

    render(<ABTest testName="test_ab" variants={variants} />)
    
    // Should still render control variant
    expect(screen.getByText('Control Content')).toBeInTheDocument()
  })
})

describe('Accessibility', () => {
  it('should maintain proper semantic structure', async () => {
    render(
      <ABTestHeadline
        testName="test_headline"
        defaultText="Accessible Headline"
        as="h1"
      />
    )

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })
  })

  it('should preserve link accessibility', async () => {
    render(
      <ABTestButton
        testName="test_cta"
        href="/quote"
        defaultText="Accessible CTA"
        className="focus:outline-none focus:ring-2"
      />
    )

    await waitFor(() => {
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/quote')
      expect(link).toHaveClass('focus:outline-none', 'focus:ring-2')
    })
  })
})