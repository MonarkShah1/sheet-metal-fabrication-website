import { Metadata } from 'next';
import { CampaignQuoteForm } from '@/components/quote/CampaignQuoteForm';
import { Analytics } from '@/components/Analytics';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Get Metal Fabrication Quote Ontario | Free Estimate | Canadian Metal Fabricators',
  description: 'Get your free metal fabrication quote for Ontario projects. Fast response, competitive pricing, expert consultation. Request free estimate today. Call 647-407-0171.',
  keywords: [
    'get metal fabrication quote Ontario',
    'request free metal fab quote',
    'reliable fabrication supplier quote',
    'Ontario metal fabrication pricing',
    'free fabrication estimate',
    'metal fabrication quote form'
  ].join(', '),
  alternates: {
    canonical: 'https://canadianmetalfabricators.ca/quote/ontario-metal-fabrication',
  },
  openGraph: {
    title: 'Get Your Free Ontario Metal Fabrication Quote',
    description: 'Fast, accurate quotes for all metal fabrication projects in Ontario. Expert consultation and competitive pricing.',
    url: 'https://canadianmetalfabricators.ca/quote/ontario-metal-fabrication',
    siteName: 'Canadian Metal Fabricators Ltd.',
    type: 'website',
  }
};

export default function OntarioMetalFabricationQuotePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Quote', url: '/quote' },
    { name: 'Ontario Metal Fabrication Quote' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
      {/* Hero Section */}
      <section className="bg-industry-gradient text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
            <span className="text-industry-blue mr-2">💰</span>
            <span className="text-sm font-medium">Free Quote & Consultation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get Your Free Ontario Metal Fabrication Quote
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Fast, accurate pricing for all your metal fabrication needs across Ontario. 
            Expert consultation, competitive rates, and rapid response guaranteed.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-industry-orange mb-2">24hr</div>
              <div className="text-sm text-gray-300">Quote Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-industry-orange mb-2">Free</div>
              <div className="text-sm text-gray-300">Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-industry-orange mb-2">No</div>
              <div className="text-sm text-gray-300">Obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
              </h2>
              <CampaignQuoteForm 
                source="ontario-metal-fabrication"
                defaultService="General Fabrication"
                defaultLocation="Ontario"
              />
            </div>

            {/* Why Choose Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Ontario Companies Choose Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Rapid Response Times</h3>
                      <p className="text-gray-700">Most quotes delivered within 24 hours. Rush quotes available for urgent projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                      <p className="text-gray-700">Fair, transparent pricing with no hidden costs. Value engineering to optimize your budget.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                      <p className="text-gray-700">ISO 9001 certified processes ensure consistent quality and reliability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      🚚
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Province-Wide Delivery</h3>
                      <p className="text-gray-700">Comprehensive delivery network throughout Ontario with tracking and coordination.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need to Speak With Someone?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-3">📞</span>
                    <a href="tel:647-407-0171" className="text-blue-600 hover:text-blue-800 font-medium">
                      647-407-0171
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-3">📧</span>
                    <a href="mailto:quotes@canadianmetalfabricators.ca" className="text-blue-600 hover:text-blue-800 font-medium">
                      quotes@canadianmetalfabricators.ca
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">📍</span>
                    <div>
                      <div className="font-medium text-gray-900">Mississauga, ON</div>
                      <div className="text-sm text-gray-600">Serving all of Ontario</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="font-medium text-gray-900">ISO 9001:2015</div>
                    <div className="text-sm text-gray-600">Quality Management</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="font-medium text-gray-900">CWB Certified</div>
                    <div className="text-sm text-gray-600">Welding Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Simple Quote Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Submit Request</h3>
              <p className="text-gray-600">Complete our simple form with your project details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Review</h3>
              <p className="text-gray-600">Our team reviews and may contact you for clarification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Receive Quote</h3>
              <p className="text-gray-600">Detailed quote delivered within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Start Project</h3>
              <p className="text-gray-600">Approve quote and we begin fabrication</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly can I get a quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most quotes are delivered within 24 hours. For urgent projects, we offer same-day quote service."
                }
              },
              {
                "@type": "Question", 
                "name": "Is the quote free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all quotes are completely free with no obligation to purchase."
                }
              },
              {
                "@type": "Question",
                "name": "What information do you need for a quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We need project details including materials, dimensions, quantities, and any drawings or specifications you have available."
                }
              }
            ]
          })
        }}
      />

      <Analytics />
      </main>
      <Footer />
    </>
  );
}