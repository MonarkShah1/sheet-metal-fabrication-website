'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            aria-label="Canadian Metal Fabricators Home"
          >
            <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">CMF</span>
            </div>
            <span className="font-bold text-primary-800 text-xl hidden sm:block">
              Canadian Metal Fabricators
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-all duration-200 py-2 px-3 min-h-[44px] flex items-center hover:underline underline-offset-4 ${
                  pathname === item.href
                    ? 'text-primary-600 underline'
                    : 'text-industrial-700 hover:text-primary-600'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+1-416-555-0123"
              className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200 flex items-center gap-2"
              aria-label="Call us"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:block">Call</span>
            </Link>
            <Link
              href="/request-quote"
              className="bg-accent hover:bg-accent-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg min-h-[40px] flex items-center"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-industrial-700 hover:text-primary-600 hover:bg-industrial-50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden border-t border-industrial-200 bg-white/95 backdrop-blur-md animate-slide-down"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg min-h-[44px] flex items-center ${
                    pathname === item.href
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-industrial-700 hover:text-primary-600 hover:bg-industrial-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3">
                <Link
                  href="tel:+1-416-555-0123"
                  className="block px-4 py-3 text-lg font-medium text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-colors duration-200 flex items-center gap-3 min-h-[44px]"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
                <Link
                  href="/request-quote"
                  className="block px-4 py-3 text-lg font-semibold text-white bg-accent hover:bg-accent-700 rounded-lg transition-colors duration-200 text-center min-h-[44px] flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}