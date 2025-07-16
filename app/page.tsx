import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-gradient-to-r from-primary-50 to-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Outsource Your Custom Sheet Metal Needs with{' '}
                <span className="text-primary-600">Precision and Speed</span>
              </h1>
              <p className="text-xl text-secondary-700 mb-8 max-w-3xl mx-auto">
                Professional sheet metal fabrication services for engineers, OEMs, and businesses. 
                Get transparent pricing, fast quotes, and industry-leading quality on every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" color="blue" className="text-lg px-8 py-4">
                  Get Instant Quote
                </Button>
                <Button href="/services" outline className="text-lg px-8 py-4">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Why Choose PrecisionMetal Works?
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                We solve the common problems in sheet metal fabrication with transparency, speed, and quality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-secondary-600">
                  No hidden fees or surprises. Get clear, detailed quotes with instant pricing on standard operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-secondary-600">
                  From quote to delivery in days, not weeks. Our streamlined process gets your parts made quickly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
                <p className="text-secondary-600">
                  ISO 9001 certified processes ensure consistent quality. Every part is inspected before shipping.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Complete sheet metal fabrication capabilities under one roof.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Laser Cutting</h3>
                <p className="text-secondary-600 text-sm">
                  Precision laser cutting for complex geometries and tight tolerances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Metal Forming</h3>
                <p className="text-secondary-600 text-sm">
                  Press brake forming, rolling, and stamping for complex shapes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Welding</h3>
                <p className="text-secondary-600 text-sm">
                  TIG, MIG, and spot welding by certified professionals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Finishing</h3>
                <p className="text-secondary-600 text-sm">
                  Powder coating, plating, and surface treatments available.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button href="/services" color="blue">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Upload your CAD files and get an instant quote in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" color="white" className="px-8 py-4">
                  Get Quote Now
                </Button>
                <Button href="/contact" outline className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}