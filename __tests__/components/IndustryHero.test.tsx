import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import { IndustryHero } from '@/components/industries/IndustryHero'
import { IndustryData } from '@/lib/industries/industry-data'

// Mock the ABTestButton component
jest.mock('@/components/ABTestButton', () => ({
  ABTestButton: ({ testName, href, defaultText, className }: any) => (
    <a href={href} className={className} data-testid={`ab-test-${testName}`}>
      {defaultText}
    </a>
  )
}))

// Mock business info
jest.mock('@/config/business-info', () => ({
  businessInfo: {
    telephone: '+1-647-407-0171'
  }
}))

describe('IndustryHero Component', () => {
  const mockIndustry: IndustryData = {
    slug: 'automotive',
    name: 'Automotive',
    h1: 'Automotive Metal Fabrication Services in Ontario',
    metaTitle: 'Automotive Metal Fabrication | Custom Parts Manufacturing',
    metaDescription: 'Professional automotive metal fabrication services in Ontario.',
    content: {
      intro: 'We specialize in precision automotive parts manufacturing with ISO certification.',
      services: ['Custom brackets', 'Engine components', 'Chassis parts'],
      benefits: ['Quality assurance', 'Fast turnaround', 'Competitive pricing']
    },
    faqs: [
      {
        question: 'What automotive parts do you manufacture?',
        answer: 'We manufacture custom brackets, engine components, and chassis parts.'
      }
    ]
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render industry-specific badge', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    expect(screen.getByText('Specialized Automotive Solutions')).toBeInTheDocument()
  })

  it('should render industry H1 heading', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Automotive Metal Fabrication Services in Ontario')
  })

  it('should render industry intro content', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    expect(screen.getByText('We specialize in precision automotive parts manufacturing with ISO certification.')).toBeInTheDocument()
  })

  it('should render A/B tested CTA button', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const ctaButton = screen.getByTestId('ab-test-industry_hero_cta')
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/quote')
    expect(ctaButton).toHaveTextContent('Fix Your Automotive Supply Issues')
  })

  it('should render phone call CTA', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const phoneLink = screen.getByText('Call +1-647-407-0171')
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+1-647-407-0171')
  })

  it('should render trust signals', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    expect(screen.getByText('7+ Years')).toBeInTheDocument()
    expect(screen.getByText('Ontario Experience')).toBeInTheDocument()
    expect(screen.getByText('ISO 9001')).toBeInTheDocument()
    expect(screen.getByText('Certified Quality')).toBeInTheDocument()
    expect(screen.getByText('24-48 Hours')).toBeInTheDocument()
    expect(screen.getByText('Quote Delivery')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('Quality Rate')).toBeInTheDocument()
  })

  it('should have proper CSS classes for styling', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const section = screen.getByRole('heading', { level: 1 }).closest('section')
    expect(section).toHaveClass('relative', 'bg-industry-gradient', 'text-white')
  })

  it('should have proper responsive classes', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-bold')
  })

  it('should render CTA buttons with proper styling', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const primaryCta = screen.getByTestId('ab-test-industry_hero_cta')
    expect(primaryCta).toHaveClass('bg-industry-orange', 'text-white', 'rounded-lg')
    
    const phoneLink = screen.getByText('Call +1-647-407-0171').closest('a')
    expect(phoneLink).toHaveClass('border', 'border-white', 'text-white', 'hover:bg-white', 'hover:text-industry-dark')
  })

  it('should be accessible', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    // Should have proper heading hierarchy
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    
    // CTAs should be proper links
    const primaryCta = screen.getByTestId('ab-test-industry_hero_cta')
    expect(primaryCta.tagName).toBe('A')
    expect(primaryCta).toHaveAttribute('href', '/quote')
    
    const phoneLink = screen.getByText('Call +1-647-407-0171').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1-647-407-0171')
  })

  it('should handle different industry names correctly', () => {
    const manufacturingIndustry: IndustryData = {
      ...mockIndustry,
      slug: 'manufacturing',
      name: 'Manufacturing',
      h1: 'Manufacturing Metal Fabrication Services'
    }
    
    render(<IndustryHero industry={manufacturingIndustry} />)
    
    expect(screen.getByText('Specialized Manufacturing Solutions')).toBeInTheDocument()
    expect(screen.getByTestId('ab-test-industry_hero_cta')).toHaveTextContent('Fix Your Manufacturing Supply Issues')
  })

  it('should render trust signals in grid layout', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const trustSignalsContainer = screen.getByText('7+ Years').closest('.grid')
    expect(trustSignalsContainer).toHaveClass('grid-cols-1', 'md:grid-cols-4')
  })

  it('should have animation classes', () => {
    render(<IndustryHero industry={mockIndustry} />)
    
    const animatedContent = screen.getByRole('heading', { level: 1 }).closest('.animate-fade-in')
    expect(animatedContent).toBeInTheDocument()
  })

  describe('Content Validation', () => {
    it('should handle long industry names gracefully', () => {
      const longNameIndustry: IndustryData = {
        ...mockIndustry,
        name: 'Very Long Industry Name That Might Break Layout',
        h1: 'Very Long Industry Name That Might Break Layout - Metal Fabrication Services'
      }
      
      render(<IndustryHero industry={longNameIndustry} />)
      
      expect(screen.getByText('Specialized Very Long Industry Name That Might Break Layout Solutions')).toBeInTheDocument()
    })

    it('should handle empty content gracefully', () => {
      const emptyContentIndustry: IndustryData = {
        ...mockIndustry,
        content: {
          intro: '',
          services: [],
          benefits: []
        }
      }
      
      render(<IndustryHero industry={emptyContentIndustry} />)
      
      // Should still render other elements
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getByTestId('ab-test-industry_hero_cta')).toBeInTheDocument()
    })
  })

  describe('A/B Testing Integration', () => {
    it('should pass correct test name to ABTestButton', () => {
      render(<IndustryHero industry={mockIndustry} />)
      
      const ctaButton = screen.getByTestId('ab-test-industry_hero_cta')
      expect(ctaButton).toBeInTheDocument()
    })

    it('should use industry-specific default text', () => {
      render(<IndustryHero industry={mockIndustry} />)
      
      const ctaButton = screen.getByTestId('ab-test-industry_hero_cta')
      expect(ctaButton).toHaveTextContent('Fix Your Automotive Supply Issues')
    })
  })

  describe('Visual Design', () => {
    it('should have proper background and text colors', () => {
      render(<IndustryHero industry={mockIndustry} />)
      
      const section = screen.getByRole('heading', { level: 1 }).closest('section')
      expect(section).toHaveClass('bg-industry-gradient', 'text-white')
    })

    it('should have proper spacing and padding', () => {
      render(<IndustryHero industry={mockIndustry} />)
      
      const section = screen.getByRole('heading', { level: 1 }).closest('section')
      expect(section).toHaveClass('py-20', 'px-6', 'md:py-32', 'md:px-12')
    })

    it('should have max width container', () => {
      render(<IndustryHero industry={mockIndustry} />)
      
      const container = screen.getByRole('heading', { level: 1 }).closest('.max-w-7xl')
      expect(container).toBeInTheDocument()
      expect(container).toHaveClass('mx-auto', 'text-center')
    })
  })
})