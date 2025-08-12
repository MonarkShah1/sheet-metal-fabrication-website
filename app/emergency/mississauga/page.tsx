import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  title: 'Emergency Rush Metal Fabrication Mississauga | On-Site Service | 2-Hour Response',
  description: 'Local Mississauga emergency metal fabrication - we\'re in your backyard! 2-hour response time, rush welding, cutting, brackets. Call 647-407-0171 for immediate service!',
  keywords: 'emergency metal fabrication mississauga, rush fabrication mississauga, same day welding mississauga, local metal fabricator, 2 hour response mississauga, urgent steel cutting mississauga, production line rescue mississauga',
  alternates: {
    canonical: `${businessInfo.url}/emergency/mississauga/`,
  }
}

export default function MississaugaEmergencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full mb-6 text-lg font-semibold">
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              MISSISSAUGA LOCAL - IMMEDIATE RESPONSE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mississauga Emergency Metal Fabrication
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-red-100">
              We're In Your Backyard - 2 Hour Response
            </p>
            <p className="text-xl mb-8">
              Local Mississauga Shop • Zero Travel Time • Immediate Pickup Available
            </p>
            
            <div className="mb-8">
              <a 
                href={`tel:${businessInfo.telephone}`}
                className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors"
              >
                📞 LOCAL MISSISSAUGA: {businessInfo.telephone}
              </a>
              <p className="text-sm mt-2 text-red-200">1-minute walk from production floor to delivery truck</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">0 Min</div>
                <div className="text-sm">Travel time - We're here!</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">2-3 Hours</div>
                <div className="text-sm">Production to pickup ready</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">67</div>
                <div className="text-sm">Local Mississauga emergencies YTD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mississauga Advantage */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Mississauga Advantage</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-green-600">🏢 Same Building Service</h3>
              <ul className="space-y-2 text-sm">
                <li>• Walk your broken part directly to our shop</li>
                <li>• Watch production in real-time</li>
                <li>• Immediate pickup when ready</li>
                <li>• Face-to-face problem solving</li>
                <li>• Zero delivery scheduling delays</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">⚡ Lightning Response</h3>
              <ul className="space-y-2 text-sm">
                <li>• 15-minute initial assessment</li>
                <li>• 30-minute detailed quote</li>
                <li>• 2-hour typical production start</li>
                <li>• Real-time progress updates</li>
                <li>• Immediate quality inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Case Studies */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mississauga Success Stories</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white border-l-4 border-green-600 p-6 shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">2H</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Airport Corporate Centre - Conveyor Emergency</h3>
                  <div className="text-sm text-gray-600 mb-4">Distribution facility, 200m from our shop</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-red-600">9:15 AM Crisis:</strong> Conveyor drive mount cracked during morning shift
                    </div>
                    <div>
                      <strong className="text-blue-600">9:30 AM Action:</strong> Maintenance manager walked part to our door
                    </div>
                    <div>
                      <strong className="text-green-600">11:45 AM Resolution:</strong> Stronger replacement delivered & installed
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-green-50 p-4 rounded">
                    <p className="text-sm"><strong>Result:</strong> 2.5-hour total downtime vs. 3-day OEM lead time</p>
                    <p className="text-sm italic">"Having Canadian Metal Fabricators next door is like having our own emergency shop!" - Facility Manager</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">1H</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Local Food Processor - Sanitary Housing Crack</h3>
                  <div className="text-sm text-gray-600 mb-4">Stainless steel emergency, Friday 4 PM</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-red-600">Crisis:</strong> Stainless housing weld failure, weekend production at risk
                    </div>
                    <div>
                      <strong className="text-blue-600">Response:</strong> Engineer drove to our shop with sample
                    </div>
                    <div>
                      <strong className="text-green-600">Solution:</strong> Better design fabricated, delivered by 6 PM
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm"><strong>Impact:</strong> Saved weekend production worth $85,000</p>
                    <p className="text-sm italic">"The convenience of local emergency service is priceless!" - Plant Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mississauga Coverage Map */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mississauga Business Park Coverage</h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-green-600 mb-3">🟢 Walk-In Service (0-5 min)</h3>
              <ul className="text-sm space-y-1">
                <li>• Airport Corporate Centre</li>
                <li>• Our immediate neighbors</li>
                <li>• Same building tenants</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-blue-600 mb-3">🔵 Quick Response (15-30 min)</h3>
              <ul className="text-sm space-y-1">
                <li>• Meadowvale Business Park</li>
                <li>• Highway 401 Corridor</li>
                <li>• Dixie & Eglinton Industrial</li>
                <li>• Britannia & Mavis Area</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-orange-600 mb-3">🟠 Standard Rush (30-60 min)</h3>
              <ul className="text-sm space-y-1">
                <li>• Port Credit Manufacturing</li>
                <li>• Streetsville Industrial</li>
                <li>• Malton Aerospace Hub</li>
                <li>• Credit Valley Business Park</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Quote Form */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Mississauga Local Emergency Service</h2>
            <p className="text-xl mb-8">Walk-in welcome • Call ahead preferred • Always available</p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-900">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Same-Day Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 p-4 rounded">
                    <strong>Walk-In Service</strong><br/>
                    Bring your part directly to our shop<br/>
                    <span className="text-green-600">Best for: Complex assessments</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <strong>Pickup Service</strong><br/>
                    We come to you in Mississauga<br/>
                    <span className="text-blue-600">Best for: Large/heavy parts</span>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company name and location in Mississauga"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe the emergency situation"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">Preferred service...</option>
                    <option value="walkin">Walk-in to your shop</option>
                    <option value="pickup">Pickup service</option>
                    <option value="delivery">Delivery when ready</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  SUBMIT MISSISSAUGA REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}