import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Professional Sheet Metal Fabrication',
  description: 'Learn about PrecisionMetal Works, our commitment to quality, and how we deliver exceptional sheet metal fabrication services to engineers and OEMs.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                About PrecisionMetal Works
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                For over 20 years, we've been the trusted partner for engineers, OEMs, and businesses 
                seeking precision sheet metal fabrication with transparent pricing and exceptional quality.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
                <p className="text-lg text-secondary-700 mb-6">
                  To revolutionize the sheet metal fabrication industry by providing transparent pricing, 
                  fast turnaround times, and exceptional quality that exceeds our customers' expectations.
                </p>
                <p className="text-secondary-600 mb-6">
                  We understand the frustrations of traditional fabrication shops: hidden costs, long lead times, 
                  and unpredictable quality. That's why we've built our business around solving these problems 
                  with modern technology, streamlined processes, and a customer-first approach.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">AWS D1.1 Certified</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                    <div className="text-sm text-secondary-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-sm text-secondary-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                    <div className="text-sm text-secondary-600">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">24hr</div>
                    <div className="text-sm text-secondary-600">Average Quote Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                These core values guide everything we do, from customer interactions to manufacturing processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-secondary-600">
                  Every part is manufactured to the highest standards and thoroughly inspected before delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-secondary-600">
                  No hidden fees, no surprises. You know exactly what you're paying for and when you'll receive it.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Speed</h3>
                <p className="text-secondary-600">
                  Fast quotes, rapid production, and on-time delivery are not just promises—they're guarantees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Capabilities
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                State-of-the-art equipment and skilled professionals ensure we can handle any project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">Equipment</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Fiber laser cutting systems (up to 1" thick)</li>
                  <li>• CNC press brakes (up to 200 tons)</li>
                  <li>• TIG, MIG, and spot welding stations</li>
                  <li>• Powder coating booth</li>
                  <li>• Quality inspection equipment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">Materials</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Steel (mild, carbon, alloy)</li>
                  <li>• Stainless steel (304, 316, 316L)</li>
                  <li>• Aluminum (various grades)</li>
                  <li>• Copper and brass</li>
                  <li>• Specialty alloys available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-600 section-padding">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Join hundreds of satisfied customers who trust us with their sheet metal fabrication needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" color="white" className="px-8 py-4">
                  Get Quote
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