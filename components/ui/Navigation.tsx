'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/button'

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

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Welding', href: '/services/welding' },
        { name: 'Engineering', href: '/services/engineering' },
        { name: 'Finishing', href: '/services/finishing' },
        { name: 'Laser Cutting & Bending', href: '/services/laser-cutting-bending' },
        { name: 'Smart Sourcing', href: '/services/smart-sourcing' },
        { name: 'Steel Fabrication', href: '/services/steel-fabrication-ontario' },
        { name: 'Sheet Metal Fabrication', href: '/services/sheet-metal-fabrication-ontario' },
        { name: 'Custom Metal Work', href: '/services/custom-metal-work-ontario' },
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

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

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
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href as any}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                ) : (
                  <button
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors flex items-center"
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                )}

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href as any}
                          className="block px-4 py-2 text-sm text-secondary-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="/quote" color="blue">
              Get Quote
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      onClick={() => setIsMenuOpen(false)}
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
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button href="/quote" color="blue" className="w-full text-center mt-4">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}