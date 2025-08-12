import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import Navigation from '@/components/ui/Navigation'

// Mock the ABTestButton component
jest.mock('@/components/ABTestButton', () => ({
  ABTestButton: ({ testName, href, defaultText, ...props }: any) => (
    <a href={href} {...props} data-testid={`ab-test-${testName}`}>
      {defaultText}
    </a>
  )
}))

describe('Navigation Component', () => {
  beforeEach(() => {
    // Reset any DOM changes
    document.body.innerHTML = ''
  })

  it('should render the company logo/name', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Canadian Metal Fabricators')).toBeInTheDocument()
  })

  it('should render main navigation items', () => {
    render(<Navigation />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
    expect(screen.getByText('Locations')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
  })

  it('should render A/B tested CTA button', () => {
    render(<Navigation />)
    
    const ctaButton = screen.getByTestId('ab-test-hero_cta_primary')
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/quote')
  })

  it('should show Services dropdown on hover', async () => {
    render(<Navigation />)
    
    const servicesLink = screen.getByText('Services')
    fireEvent.mouseEnter(servicesLink.closest('div')!)
    
    await waitFor(() => {
      expect(screen.getByText('Engineering')).toBeInTheDocument()
      expect(screen.getByText('Smart Sourcing')).toBeInTheDocument()
      expect(screen.getByText('Laser Cutting & Bending')).toBeInTheDocument()
      expect(screen.getByText('Welding')).toBeInTheDocument()
      expect(screen.getByText('Finishing')).toBeInTheDocument()
    })
  })

  it('should show Company dropdown on hover', async () => {
    render(<Navigation />)
    
    const companyButton = screen.getByText('Company')
    fireEvent.mouseEnter(companyButton.closest('div')!)
    
    await waitFor(() => {
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })
  })

  it('should hide dropdown on mouse leave with delay', async () => {
    render(<Navigation />)
    
    const servicesLink = screen.getByText('Services')
    const servicesDiv = servicesLink.closest('div')!
    
    // Show dropdown
    fireEvent.mouseEnter(servicesDiv)
    await waitFor(() => {
      expect(screen.getByText('Engineering')).toBeInTheDocument()
    })
    
    // Hide dropdown
    fireEvent.mouseLeave(servicesDiv)
    
    // Wait for timeout (150ms)
    await waitFor(() => {
      expect(screen.queryByText('Engineering')).not.toBeInTheDocument()
    }, { timeout: 200 })
  })

  it('should toggle mobile menu on button click', () => {
    render(<Navigation />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(mobileMenuButton).toBeInTheDocument()
    
    // Initially mobile menu should be hidden
    expect(screen.queryByText('Get Quote')).toBeInTheDocument() // Desktop version
    
    // Click to open mobile menu
    fireEvent.click(mobileMenuButton)
    
    // Mobile menu should now be visible (both desktop and mobile versions present)
    const mobileCtaButtons = screen.getAllByTestId('ab-test-hero_cta_primary')
    expect(mobileCtaButtons.length).toBeGreaterThan(1) // Both desktop and mobile versions
  })

  it('should close mobile menu when navigation item is clicked', () => {
    render(<Navigation />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
    
    // Open mobile menu
    fireEvent.click(mobileMenuButton)
    
    // Click on a navigation item in mobile menu
    const homeLinks = screen.getAllByText('Home')
    const mobileHomeLink = homeLinks.find(link => 
      link.closest('.md\\:hidden') !== null
    )
    
    if (mobileHomeLink) {
      fireEvent.click(mobileHomeLink)
    }
    
    // Menu state should change (component will handle the closing)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('should have proper accessibility attributes', () => {
    render(<Navigation />)
    
    // Mobile menu button should have proper ARIA attributes
    const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(mobileMenuButton).toHaveAttribute('aria-label', 'Toggle menu')
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Dropdown buttons should have proper ARIA attributes
    const companyButton = screen.getByText('Company')
    expect(companyButton).toHaveAttribute('aria-expanded', 'false')
    expect(companyButton).toHaveAttribute('aria-haspopup', 'true')
  })

  it('should have proper touch targets for mobile', () => {
    render(<Navigation />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(mobileMenuButton).toHaveClass('min-h-[44px]', 'min-w-[44px]')
  })

  it('should use semantic HTML structure', () => {
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // Should have proper heading structure for logo
    const logo = screen.getByText('Canadian Metal Fabricators')
    expect(logo.closest('a')).toBeInTheDocument()
  })

  it('should have sticky navigation with proper z-index', () => {
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('sticky', 'top-0', 'z-50')
  })

  it('should render dropdown menus with proper roles', async () => {
    render(<Navigation />)
    
    const servicesLink = screen.getByText('Services')
    fireEvent.mouseEnter(servicesLink.closest('div')!)
    
    await waitFor(() => {
      const dropdown = screen.getByRole('menu')
      expect(dropdown).toBeInTheDocument()
      
      const menuItems = screen.getAllByRole('menuitem')
      expect(menuItems.length).toBe(5) // Services dropdown has 5 items
    })
  })

  it('should maintain minimum touch targets in dropdowns', async () => {
    render(<Navigation />)
    
    const servicesLink = screen.getByText('Services')
    fireEvent.mouseEnter(servicesLink.closest('div')!)
    
    await waitFor(() => {
      const menuItems = screen.getAllByRole('menuitem')
      menuItems.forEach(item => {
        expect(item).toHaveClass('min-h-[44px]')
      })
    })
  })

  describe('Responsive Design', () => {
    it('should hide desktop navigation on mobile', () => {
      render(<Navigation />)
      
      // Desktop navigation should have md:flex class
      const desktopNav = screen.getByText('Services').closest('.hidden.md\\:flex')
      expect(desktopNav).toBeTruthy()
    })

    it('should hide mobile menu button on desktop', () => {
      render(<Navigation />)
      
      const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
      expect(mobileMenuButton).toHaveClass('md:hidden')
    })

    it('should show mobile CTA button with full width', () => {
      render(<Navigation />)
      
      const mobileMenuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(mobileMenuButton)
      
      const mobileCta = screen.getAllByTestId('ab-test-hero_cta_primary')
        .find(button => button.classList.contains('w-full'))
      expect(mobileCta).toBeInTheDocument()
    })
  })

  describe('Performance', () => {
    it('should cleanup timeouts on unmount', () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')
      
      const { unmount } = render(<Navigation />)
      
      // Trigger timeout creation
      const servicesLink = screen.getByText('Services')
      fireEvent.mouseEnter(servicesLink.closest('div')!)
      fireEvent.mouseLeave(servicesLink.closest('div')!)
      
      unmount()
      
      expect(clearTimeoutSpy).toHaveBeenCalled()
      
      clearTimeoutSpy.mockRestore()
    })
  })
})