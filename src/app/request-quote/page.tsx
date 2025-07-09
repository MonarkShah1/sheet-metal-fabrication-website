import type { Metadata } from 'next'
import { QuoteForm } from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Request Quote | Fast Metal Fabrication Quotes | Canadian Metal Fabricators',
  description: 'Get instant metal fabrication quotes in under 20 seconds. Upload drawings, specify materials, and receive pricing with lead times. ISO 9001 certified Ontario fabricator.',
  keywords: 'metal fabrication quote, instant quote, RFQ, custom metal fabrication pricing, Ontario metal fabrication quote'
}

export default function RequestQuotePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Request Metal Fabrication Quote',
    provider: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators'
    },
    description: 'Fast quote requests for custom metal fabrication projects with instant pricing and lead time estimates.',
    serviceType: 'Quote Request',
    areaServed: 'Ontario, Canada',
    potentialAction: {
      '@type': 'Action',
      name: 'Request Quote',
      target: 'https://canadianmetalfabricators.com/request-quote'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="section-title">Request Your Quote</h1>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Get accurate pricing and lead times in under 20 seconds. Upload your drawings, 
              specify requirements, and receive instant estimates from our ISO 9001 certified team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>

          <div className="mt-16 bg-industrial-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">
                  Instant Review
                </h3>
                <p className="text-industrial-600">
                  Our system analyzes your requirements and provides immediate pricing estimates.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🔧</div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">
                  Expert Validation
                </h3>
                <p className="text-industrial-600">
                  Our engineers review complex projects within 4 hours for accuracy.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">
                  Fast Production
                </h3>
                <p className="text-industrial-600">
                  Approved orders enter production immediately with our 10-day average turnaround.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}