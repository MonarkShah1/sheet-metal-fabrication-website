import type { Metadata } from 'next'
import { QuoteWizard } from '@/components/QuoteWizard'

export const metadata: Metadata = {
  title: 'Get Quote in 20 Seconds | Online Metal Fabrication Quote | Canadian Metal Fabricators',
  description: 'Get instant metal fabrication quotes online in under 20 seconds. Upload drawings, specify materials, and receive instant pricing with lead times. Start your quote now!',
  keywords: 'online metal fabrication quote, instant quote, 20 second quote, RFQ, custom metal fabrication pricing, Ontario metal fabrication',
  openGraph: {
    title: 'Get Quote in 20 Seconds | Canadian Metal Fabricators',
    description: 'Upload your drawings and get instant metal fabrication pricing in seconds. Professional service, competitive rates.',
    type: 'website',
    url: 'https://canadianmetalfabricators.com/quote-online'
  }
}

export default function QuoteOnlinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Online Metal Fabrication Quote',
    provider: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators',
      url: 'https://canadianmetalfabricators.com'
    },
    description: 'Get instant metal fabrication quotes online in under 20 seconds with our quote wizard.',
    serviceType: 'Quote Generation',
    areaServed: 'Ontario, Canada',
    potentialAction: {
      '@type': 'Action',
      name: 'Get Quote',
      target: 'https://canadianmetalfabricators.com/quote-online'
    },
    offers: {
      '@type': 'Offer',
      description: 'Instant quote generation with 20-second turnaround',
      priceRange: '$50-$10000'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="py-12">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              Get Quote in 20 Seconds
            </h1>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto mb-8">
              Upload your drawings, specify requirements, and receive instant pricing with lead times. 
              Our smart quote wizard makes it faster than ever to get accurate estimates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-industrial-700">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Instant price range</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Real-time lead times</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>No account required</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Detailed quote via email</span>
              </div>
            </div>
          </div>

          <QuoteWizard />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">
                Lightning Fast
              </h3>
              <p className="text-industrial-600">
                Get price estimates in seconds, not days. Our smart algorithm 
                analyzes your specs instantly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">
                Accurate Pricing
              </h3>
              <p className="text-industrial-600">
                Based on real material costs and production data. Final quotes 
                typically within 10% of estimates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">
                Secure & Private
              </h3>
              <p className="text-industrial-600">
                Your files and project details are kept confidential. 
                No sharing with third parties.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-industrial-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              Why Choose Our Quote Wizard?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary-800 mb-4">
                  Smart File Analysis
                </h3>
                <ul className="space-y-2 text-industrial-600">
                  <li>• Supports DXF, DWG, STEP, PDF, and AI files</li>
                  <li>• Automatic geometry recognition</li>
                  <li>• Material optimization suggestions</li>
                  <li>• Complexity assessment for accurate pricing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-primary-800 mb-4">
                  Professional Service
                </h3>
                <ul className="space-y-2 text-industrial-600">
                  <li>• ISO 9001 certified fabrication</li>
                  <li>• 4-hour detailed quote turnaround</li>
                  <li>• Direct engineer consultation</li>
                  <li>• 10-day average production time</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Need Help or Have Questions?
            </h2>
            <p className="text-industrial-600 mb-6">
              Our team is ready to assist with your metal fabrication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:519-555-0123"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span>Call: (519) 555-0123</span>
              </a>
              <a
                href="mailto:quotes@canadianmetalfab.com"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>✉️</span>
                <span>Email: quotes@canadianmetalfab.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}