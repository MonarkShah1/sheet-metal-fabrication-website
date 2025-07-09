import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { BreadcrumbList } from '@/components/ui/BreadcrumbList'

export const metadata: Metadata = {
  title: 'Contact Canadian Metal Fabricators | Get Quote | Ontario',
  description: 'Contact Canadian Metal Fabricators for custom metal fabrication quotes. Call 519-555-0123 or use our contact form. Fast response, professional service.',
  keywords: 'contact metal fabricator, metal fabrication quote, custom fabrication Ontario, contact CMF',
  openGraph: {
    title: 'Contact Canadian Metal Fabricators | Get Quote | Ontario',
    description: 'Contact Canadian Metal Fabricators for custom metal fabrication quotes. Call 519-555-0123 or use our contact form.',
    type: 'website',
  },
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Canadian Metal Fabricators',
    description: 'Contact page for Canadian Metal Fabricators - custom metal fabrication services in Ontario.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-519-555-0123',
        contactType: 'Customer Service',
        areaServed: 'Ontario, Canada',
        availableLanguage: ['English', 'French']
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="py-20">
        <div className="section-container">
          <BreadcrumbList items={breadcrumbs} />
          
          <div className="text-center mb-16">
            <h1 className="section-title">Contact Us</h1>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Ready to discuss your metal fabrication project? Get in touch with our team 
              for expert consultation and competitive pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Get In Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="card">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Phone & Email</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-accent mr-3">📞</span>
                      <div>
                        <p className="font-medium">Main Line</p>
                        <a href="tel:+1-519-555-0123" className="text-primary-600 hover:text-primary-800">
                          519-555-0123
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-accent mr-3">✉️</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@canadianmetalfabricators.com" className="text-primary-600 hover:text-primary-800">
                          info@canadianmetalfabricators.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-industrial-600">
                    <p><strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                  <p className="text-sm text-industrial-500 mt-3">
                    Emergency services available for critical projects
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Location</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-accent mr-3 mt-1">📍</span>
                      <div>
                        <p className="font-medium">Manufacturing Facility</p>
                        <p className="text-industrial-600">
                          123 Industrial Way<br />
                          Kitchener, ON N2G 4X8<br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-bold text-primary-800 mb-3">Quick Response</h3>
                  <div className="space-y-2 text-industrial-600">
                    <p>• Standard quotes within 4 hours</p>
                    <p>• Rush quotes within 1 hour</p>
                    <p>• Engineering consultation available</p>
                    <p>• Same-day facility tours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}