import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  title: 'Emergency Rush Metal Fabrication GTA | 4-Hour Turnaround | Canadian Metal Fabricators',
  description: 'Production line down? Assembly line stopped? Get rush metal fabrication with 4-6 hour turnaround. Emergency welding, cutting, brackets. Same-day delivery GTA. Call 647-407-0171 NOW!',
  keywords: 'emergency metal fabrication, rush fabrication toronto, same day welding, assembly line parts, production line rescue, 4 hour turnaround, emergency brackets, urgent steel cutting, rush welding gta, emergency fabrication mississauga',
  alternates: {
    canonical: `${businessInfo.url}/emergency/`,
  },
  openGraph: {
    title: 'Emergency Rush Metal Fabrication GTA | 4-Hour Turnaround',
    description: 'Production line down? We\'ll have you running by lunch. 4-6 hour emergency fabrication with same-day GTA delivery.',
    url: `${businessInfo.url}/emergency/`,
    siteName: businessInfo.name,
    locale: 'en_CA',
    type: 'website',
  }
}

// Emergency Service Schema
const emergencyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "name": "Rush Metal Fabrication",
  "description": "4-hour emergency metal fabrication services for production line stoppages and urgent manufacturing needs",
  "provider": {
    "@type": "Organization",
    "name": businessInfo.name,
    "telephone": businessInfo.telephone,
    "url": businessInfo.url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "addressRegion": businessInfo.address.addressRegion,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": "CA"
    }
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `${businessInfo.url}/emergency/`,
    "servicePhone": businessInfo.telephone,
    "availableLanguage": ["en", "fr"]
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.6075,
      "longitude": -79.6499
    },
    "geoRadius": "50km"
  },
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:00",
    "closes": "23:00"
  }
}

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Rush Metal Fabrication",
  "description": "Same-day emergency metal fabrication services including laser cutting, welding, bending, and custom parts manufacturing with 4-6 hour typical turnaround time",
  "provider": {
    "@type": "Organization",
    "name": businessInfo.name
  },
  "serviceType": "Emergency Metal Fabrication",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Emergency Fabrication Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Production Line Rescue",
          "description": "Emergency replacement parts fabrication when assembly lines are down"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Rush Project Completion",
          "description": "Overnight and expedited fabrication for deadline emergencies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Same-Day Delivery",
          "description": "Emergency delivery within GTA for urgent fabricated parts"
        }
      }
    ]
  }
}

export default function EmergencyPage() {
  return (
    <>
      <StructuredDataScript data={[emergencyServiceSchema, serviceSchema]} />
      
      {/* Hero Section - Above the Fold */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Widget */}
            <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full mb-6 text-lg font-semibold">
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              RUSH CAPACITY AVAILABLE NOW
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Production Line Down?
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-red-100">
              We'll Have You Running by Lunch
            </p>
            <p className="text-xl mb-8">
              Emergency Metal Fabrication • 4-6 Hour Turnaround • Same-Day GTA Delivery
            </p>
            
            {/* Emergency Hotline */}
            <div className="mb-8">
              <a 
                href={`tel:${businessInfo.telephone}`}
                className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: {businessInfo.telephone}
              </a>
              <p className="text-sm mt-2 text-red-200">Rush Hotline - Answered within 15 minutes</p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">97%</div>
                <div className="text-sm">Rush jobs delivered on time</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">4-6 Hours</div>
                <div className="text-sm">Typical turnaround</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm">Saved in downtime this year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rush Quote Form Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Get Rush Quote in 1 Hour
            </h2>
            
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's needed? *
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Describe the part or upload photo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When needed? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="timeline" value="4hours" className="mr-2" />
                      Next 4 hours (RUSH) - 25-50% premium
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="timeline" value="today" className="mr-2" />
                      Today - Standard rush pricing
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="timeline" value="tomorrow" className="mr-2" />
                      Tomorrow - Minimal premium
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="timeline" value="week" className="mr-2" />
                      This week - Standard pricing
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      min="1"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attach file (optional)
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    accept="image/*,.pdf,.dwg"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  SUBMIT RUSH REQUEST
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-600 text-center">
                ✓ Rush request received! Calling within 15 minutes<br/>
                ✓ Formal quote delivered within 1 hour<br/>
                ✓ Production updates every hour
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Rush Process Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Rush Process: Quote → Production → Delivery
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Initial Contact</h3>
                <p className="text-sm text-gray-600">Rush request submitted online or by phone</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="text-red-600 text-2xl">→</div>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Quote Delivery</h3>
                <p className="text-sm text-gray-600">Detailed quote within 1 hour</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="text-red-600 text-2xl">→</div>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Production Start</h3>
                <p className="text-sm text-gray-600">Rush queue priority fabrication begins</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="text-red-600 text-2xl">→</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-semibold mb-2">Line Back Online</h3>
                <p className="text-sm text-gray-600">Parts delivered, production resumed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Scenarios */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Solve These Emergencies Daily
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Assembly Line Stoppages</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Problem:</strong> Broken conveyor bracket stopping production</p>
                <p><strong>Solution:</strong> Fabricate replacement and deliver within 4 hours</p>
                <p><strong>Value:</strong> Save $10,000-50,000 per hour of downtime</p>
              </div>
              <div className="mt-4 text-green-600 font-semibold">
                ✓ Typical turnaround: 4-6 hours
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Project Deadline Crises</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Problem:</strong> Construction crew idle, missing critical components</p>
                <p><strong>Solution:</strong> Overnight fabrication for morning delivery</p>
                <p><strong>Value:</strong> Keep project on schedule, avoid penalties</p>
              </div>
              <div className="mt-4 text-green-600 font-semibold">
                ✓ Weekend shifts available
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Equipment Failure Parts</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Problem:</strong> OEM part has 3-week lead time</p>
                <p><strong>Solution:</strong> Fabricate functional replacement same-day</p>
                <p><strong>Value:</strong> Immediate production resumption</p>
              </div>
              <div className="mt-4 text-green-600 font-semibold">
                ✓ Reverse engineering capability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Coverage */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Emergency Coverage Across the GTA
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto text-center">
            {[
              'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Hamilton',
              'Markham', 'Oakville', 'Burlington', 'Milton', 'Richmond Hill',
              'Pickering', 'Ajax', 'Whitby', 'Oshawa', 'Cambridge'
            ].map((city) => (
              <a
                key={city}
                href={`/emergency/${city.toLowerCase().replace(' ', '-')}/`}
                className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {city}
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Same-day delivery to all GTA locations from our Mississauga facility
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Transparent Rush Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Why Rush Pricing?</h3>
                <ul className="text-left space-y-2">
                  <li>• Dedicated rush production capacity</li>
                  <li>• Priority queue access</li>
                  <li>• Overtime labor costs</li>
                  <li>• Express delivery logistics</li>
                  <li>• Quality team standing by</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Worth Every Dollar</h3>
                <ul className="text-left space-y-2">
                  <li>• Production downtime: $10K+/hour</li>
                  <li>• Project delay penalties: $50K+</li>
                  <li>• Rush premium: 25-50%</li>
                  <li>• ROI on rush service: 10-100x</li>
                  <li>• No hidden fees guarantee</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-xl font-semibold text-blue-800">
                Get exact quote in 1 hour - No surprises, no hidden costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Emergency Services FAQ
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How fast can you respond to emergencies?</h3>
              <p className="text-gray-700">We answer our rush hotline within 15 minutes during business hours and provide initial quotes within 1 hour. Production typically begins within 2 hours of approval.</p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What's included in same-day delivery?</h3>
              <p className="text-gray-700">Same-day delivery covers all locations within 50km of our Mississauga facility, including Toronto, Brampton, Vaughan, Hamilton, and surrounding GTA areas.</p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do you maintain quality standards for rush work?</h3>
              <p className="text-gray-700">Yes, all rush fabrication follows our ISO 9001 quality processes. We never compromise quality for speed - we just prioritize your job in our production queue.</p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What if you can't meet the rush timeline?</h3>
              <p className="text-gray-700">We're honest about our capabilities. If we can't meet your timeline, we'll tell you immediately and help connect you with alternatives or adjust the scope to meet critical deadlines.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}