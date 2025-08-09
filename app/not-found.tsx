import Link from 'next/link'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found. Return to Canadian Metal Fabricators homepage for sheet metal fabrication services.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-industry-light flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-xl shadow-industry border border-industry-gray-200">
            <div className="w-24 h-24 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-industry-orange text-4xl">⚠️</span>
            </div>
            
            <h1 className="text-6xl font-bold text-industry-dark mb-4">404</h1>
            
            <h2 className="text-2xl font-semibold text-industry-dark mb-4">
              Page Not Found
            </h2>
            
            <p className="text-industry-gray-600 mb-8">
              We couldn't find the page you're looking for. It may have been moved or removed. 
              Let's get you back on track with our proven manufacturing fundamentals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-industry-blue hover:bg-industry-blue/90 text-white rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white rounded-lg font-medium transition-colors"
              >
                View Services
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-industry-gray-200">
              <h3 className="text-lg font-semibold text-industry-dark mb-4">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Link href="/quote" className="text-industry-blue hover:text-industry-blue/80 transition-colors">
                  Get a Quote →
                </Link>
                <Link href="/about" className="text-industry-blue hover:text-industry-blue/80 transition-colors">
                  About Us →
                </Link>
                <Link href="/services/laser-cutting-bending" className="text-industry-blue hover:text-industry-blue/80 transition-colors">
                  Laser Cutting →
                </Link>
                <Link href="/services/welding" className="text-industry-blue hover:text-industry-blue/80 transition-colors">
                  Welding Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}