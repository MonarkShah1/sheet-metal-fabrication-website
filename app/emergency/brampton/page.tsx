import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  title: 'Emergency Rush Metal Fabrication Brampton | Food Grade Steel | Same-Day Service',
  description: 'Brampton emergency metal fabrication specializing in food-grade stainless steel. Production line down? Rush welding, cutting, sanitary components. Call 647-407-0171!',
  keywords: 'emergency metal fabrication brampton, rush fabrication brampton, food grade steel brampton, stainless steel emergency brampton, production line rescue brampton, sanitary fabrication brampton, urgent welding brampton',
  alternates: {
    canonical: `${businessInfo.url}/emergency/brampton/`,
  }
}

export default function BramptongEmergencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full mb-6 text-lg font-semibold">
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              BRAMPTON FOOD-GRADE SPECIALIST AVAILABLE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Brampton Food Processing Emergency?
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-red-100">
              Stainless Steel Specialists • Sanitary Standards
            </p>
            <p className="text-xl mb-8">
              Food-Grade Emergency Fabrication • 25-Minute Drive from Mississauga
            </p>
            
            <div className="mb-8">
              <a 
                href={`tel:${businessInfo.telephone}`}
                className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors"
              >
                📞 BRAMPTON FOOD EMERGENCY: {businessInfo.telephone}
              </a>
              <p className="text-sm mt-2 text-red-200">Food-grade certified welders standing by</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">25 Min</div>
                <div className="text-sm">Drive time to Brampton corridor</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">43</div>
                <div className="text-sm">Food processing emergencies solved</div>
              </div>
              <div className="bg-red-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">316L</div>
                <div className="text-sm">Stainless steel grade in stock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Processing Expertise */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Brampton Food Processing Expertise</h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-green-600">🥘 Food-Safe Materials</h3>
              <ul className="space-y-2 text-sm">
                <li>• 316L stainless steel in stock</li>
                <li>• NSF-compliant surface finishes</li>
                <li>• Food-grade welding processes</li>
                <li>• Sanitary design principles</li>
                <li>• HACCP-compliant fabrication</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">🏭 Common Brampton Emergencies</h3>
              <ul className="space-y-2 text-sm">
                <li>• Conveyor belt housing repairs</li>
                <li>• Mixing equipment component failure</li>
                <li>• Processing tank leak repairs</li>
                <li>• Packaging line bracket replacement</li>
                <li>• Sanitary piping modifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brampton Case Study */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Major Brampton Food Emergency - Case Study</h2>
          
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600">Multi-Million Dollar Bakery Line Stoppage</h3>
              <p className="text-gray-600">Large commercial bakery, Queen Street Corridor - March 2024</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">🚨</span>
                </div>
                <h4 className="font-bold mb-2">THE CRISIS</h4>
                <p className="text-sm">Main mixer housing cracked at 6 AM, full production stoppage</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="font-bold mb-2">OUR RESPONSE</h4>
                <p className="text-sm">Emergency food-grade team dispatched within 30 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">⚙️</span>
                </div>
                <h4 className="font-bold mb-2">SOLUTION</h4>
                <p className="text-sm">316L stainless replacement fabricated with improved design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✅</span>
                </div>
                <h4 className="font-bold mb-2">RESULT</h4>
                <p className="text-sm">Line operational by 4 PM same day, zero product loss</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Timeline:</strong><br/>
                  • 6:30 AM: Emergency call received<br/>
                  • 7:00 AM: Team on-site assessment<br/>
                  • 8:30 AM: Quote approved, production started<br/>
                  • 3:30 PM: New housing completed<br/>
                  • 4:15 PM: Installation complete, line running
                </div>
                <div>
                  <strong>Business Impact:</strong><br/>
                  • Potential loss prevented: $180,000<br/>
                  • Customer orders saved: 847<br/>
                  • Employee hours saved: 1,200<br/>
                  • Client satisfaction: Exceptional<br/>
                  • Follow-up orders: $45,000 preventive upgrades
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="italic text-gray-700">
                  "They understood our food safety requirements immediately and delivered exactly what we needed. The new housing is actually stronger than the original." 
                  <br/><strong>- Plant Manager, Major Commercial Bakery</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brampton Industries */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Brampton Manufacturing Sectors We Serve</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🍞</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Food Processing</h3>
              <ul className="text-sm space-y-2">
                <li>• Commercial bakeries</li>
                <li>• Meat processing facilities</li>
                <li>• Dairy processing plants</li>
                <li>• Beverage production</li>
                <li>• Packaging operations</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                  67% of our Brampton emergency calls
                </span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🏭</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">General Manufacturing</h3>
              <ul className="text-sm space-y-2">
                <li>• Automotive parts suppliers</li>
                <li>• Aerospace components</li>
                <li>• Industrial equipment</li>
                <li>• Logistics operations</li>
                <li>• Construction materials</li>
              </ul>
              <div className="mt-4 text-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  33% of our Brampton emergency calls
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}