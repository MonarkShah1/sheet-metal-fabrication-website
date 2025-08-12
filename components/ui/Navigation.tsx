'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/button'
import { ABTestButton } from '@/components/ABTestButton'
import { debounce } from '@/lib/performance'

interface DropdownItem {
  name: string
  href: string
  description?: string
}

interface NavigationItem {
  name: string
  href?: string
  dropdown?: DropdownItem[]
}

// Memoized dropdown component to prevent unnecessary re-renders
const NavigationDropdown = memo(({ 
  item, 
  isOpen, 
  onMouseEnter, 
  onMouseLeave 
}: {
  item: NavigationItem
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  if (!item.dropdown) return null
  
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.href ? (
        <Link
          href={item.href as any}
          className="text-secondary-700 hover:text-primary-600 font-medium transition-colors flex items-center"
        >
          {item.name}
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      ) : (
        <button
          className="text-secondary-700 hover:text-primary-600 font-medium transition-colors flex items-center"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {item.name}
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50" role="menu">
          <div className="py-2">
            {item.dropdown.map((dropdownItem) => (
              <Link
                key={dropdownItem.name}
                href={dropdownItem.href as any}
                className="block px-4 py-2 text-sm text-secondary-700 hover:bg-gray-50 hover:text-primary-600 transition-colors min-h-[44px] flex items-center"
                role="menuitem"
              >
                {dropdownItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

NavigationDropdown.displayName = 'NavigationDropdown'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Engineering', href: '/services/engineering' },
        { name: 'Smart Sourcing', href: '/services/smart-sourcing' },
        { name: 'Laser Cutting & Bending', href: '/services/laser-cutting-bending' },
        { name: 'Welding', href: '/services/welding' },
        { name: 'Finishing', href: '/services/finishing' },
      ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Locations', href: '/locations' },
    { 
      name: 'Company',
      dropdown: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ]
    },
  ]

  const handleMouseEnter = useCallback((name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(name)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            Canadian Metal Fabricators
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <NavigationDropdown
                  key={item.name}
                  item={item}
                  isOpen={openDropdown === item.name}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <Link
                  key={item.name}
                  href={item.href as any}
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ABTestButton 
              testName="hero_cta_primary"
              href="/quote" 
              defaultText="Get Quote"
              color="blue"
            />
          </div>

          <button
            className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.href ? (
                    <Link
                      href={item.href as any}
                      className="text-secondary-700 hover:text-primary-600 font-medium py-2 block"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="text-secondary-700 font-medium py-2">
                      {item.name}
                    </div>
                  )}
                  
                  {item.dropdown && (
                    <div className="pl-4 pb-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href as any}
                          className="block text-sm text-secondary-600 hover:text-primary-600 py-1"
                          onClick={closeMobileMenu}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ABTestButton 
                testName="hero_cta_primary"
                href="/quote" 
                defaultText="Get Quote"
                color="blue"
                className="w-full text-center mt-4"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Export memoized version to prevent unnecessary re-renders
export default memo(Navigation)