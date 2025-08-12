import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  title: 'Sheet Metal Fabrication Toronto Etobicoke Industrial | Canadian Metal Fabricators',
  description: 'Professional sheet metal fabrication serving Etobicoke Industrial sector. Laser cutting, welding, custom fabrication. 35-minute drive from Mississauga. ISO 9001 certified. Call 647-407-0171.',
  keywords: 'sheet metal fabrication etobicoke, etobicoke industrial fabrication, metal fabrication toronto west, etobicoke manufacturing, islington avenue fabrication, royal york industrial, welding etobicoke',
  alternates: {
    canonical: `${businessInfo.url}/locations/toronto-etobicoke-industrial/`,
  }
}

const etobicokeIndustrialSchema = {
  "@context": "https://schema.org",
  "@type": "Service", 
  "name": "Sheet Metal Fabrication Toronto Etobicoke Industrial",
  "description": "Professional sheet metal fabrication services specifically for the Etobicoke Industrial sector",
  "provider": {
    "@type": "Organization",
    "name": businessInfo.name,
    "telephone": businessInfo.telephone,
    "url": businessInfo.url
  },
  "areaServed": {
    "@type": "Place",
    "name": "Etobicoke Industrial District",
    "containedInPlace": {
      "@type": "City", 
      "name": "Toronto"
    }
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.6205,
      "longitude": -79.5656
    },
    "geoRadius": "5km"
  }
}

export default function EtobicokeIndustrialPage() {
  return (
    <>
      <StructuredDataScript data={[etobicokeIndustrialSchema]} />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sheet Metal Fabrication<br/>
              Toronto Etobicoke Industrial District
            </h1>
            <p className="text-xl mb-8">
              Serving the Islington Avenue Industrial Corridor • 35-Minute Response Time
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">35 Min</div>
                <div className="text-sm">Drive time via Highway 401</div>
              </div>
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">127</div>
                <div className="text-sm">Etobicoke projects completed</div>
              </div>
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-sm">Quality management certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Etobicoke Industrial District Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Why Choose Us for Etobicoke Projects</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Etobicoke's industrial corridor along Islington Avenue and Royal York Road represents one of Toronto's most concentrated manufacturing zones. Our strategic Mississauga location provides direct Highway 401 access, ensuring rapid response times to this critical industrial area.
                  </p>
                  <p className="text-gray-700">
                    With over 7 years serving Etobicoke manufacturers, we understand the unique challenges of this densely packed industrial sector. From automotive suppliers to food processing facilities, our certified processes meet the demanding requirements of Etobicoke's diverse manufacturing base.
                  </p>
                  <p className="text-gray-700">
                    Our proximity advantage means lower transportation costs and faster emergency response for Etobicoke businesses. We've built lasting partnerships with manufacturers throughout the district, from Dundas Street West to the Gardiner Expressway corridor.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Industries We Serve in Etobicoke</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">🏭 Manufacturing</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Assembly operations</li>
                      <li>• Production equipment</li>
                      <li>• Custom machinery components</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">🚗 Automotive</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Parts suppliers</li>
                      <li>• Assembly fixtures</li>
                      <li>• Tooling components</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-600 mb-2">🍕 Food Processing</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Stainless steel equipment</li>
                      <li>• Sanitary components</li>
                      <li>• Processing line parts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-2">📦 Distribution</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Conveyor systems</li>
                      <li>• Material handling</li>
                      <li>• Warehouse equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Directions */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Precise Etobicoke Industrial Location Coverage
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Primary Service Area</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Islington Avenue Corridor</strong> - Steeles to Gardiner</li>
                <li><strong>Royal York Industrial</strong> - Eglinton to Lake Shore</li>
                <li><strong>Kipling Avenue North</strong> - Manufacturing zone</li>
                <li><strong>Dixon Road Industrial</strong> - Airport area facilities</li>
                <li><strong>Dundas Street West</strong> - Mixed manufacturing</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-green-600">Optimal Route from Our Shop</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Highway 401 East</strong><br/>
                    Exit our Mississauga facility via Airport Road to 401 East
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Islington Avenue Exit</strong><br/>
                    Take Islington Avenue South toward industrial corridor
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                  <div>
                    <strong>Industrial Access</strong><br/>
                    Direct access to major industrial buildings and business parks
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-8 text-center bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-blue-800">
              <strong>Traffic Advisory:</strong> Best delivery times to Etobicoke Industrial are 9-11 AM and 2-4 PM, avoiding Gardiner and 401 rush hour congestion.
            </p>
          </div>
        </div>
      </section>

      {/* Local Project Examples */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Etobicoke Industrial Projects
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-blue-600">Automotive Parts Supplier</h3>
                <p className="text-sm text-gray-600">Royal York Industrial Complex</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Project:</strong> Custom mounting brackets for assembly line equipment</p>
                <p><strong>Material:</strong> 1/4" steel plate with powder coating</p>
                <p><strong>Quantity:</strong> 48 pieces</p>
                <p><strong>Delivery:</strong> 3 days from quote to installation</p>
              </div>
              <div className="mt-4 text-green-600 text-sm font-semibold">
                ✓ On-time delivery despite complex geometry requirements
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-orange-600">Food Processing Facility</h3>
                <p className="text-sm text-gray-600">Islington Avenue South</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Project:</strong> Stainless steel conveyor housing replacement</p>
                <p><strong>Material:</strong> 316L stainless steel, sanitary finish</p>
                <p><strong>Challenge:</strong> Food-grade requirements and tight tolerances</p>
                <p><strong>Result:</strong> Improved design over original specifications</p>
              </div>
              <div className="mt-4 text-green-600 text-sm font-semibold">
                ✓ NSF-compliant fabrication with enhanced durability
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-purple-600">Distribution Center</h3>
                <p className="text-sm text-gray-600">Dundas Street West</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Project:</strong> Material handling system components</p>
                <p><strong>Material:</strong> Galvanized steel with safety yellow accents</p>
                <p><strong>Scale:</strong> Multi-phase installation over 6 months</p>
                <p><strong>Impact:</strong> 30% improvement in warehouse efficiency</p>
              </div>
              <div className="mt-4 text-green-600 text-sm font-semibold">
                ✓ Phased delivery coordinated with facility operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Etobicoke Industrial District FAQ
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How quickly can you respond to Etobicoke Industrial emergencies?</h3>
              <p className="text-gray-700">
                Our Mississauga location provides 35-minute access to the Etobicoke Industrial corridor via Highway 401. For true emergencies, we can have assessment teams on-site within 45 minutes during business hours.
              </p>
            </div>
            
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do you understand Etobicoke's industrial zoning and access requirements?</h3>
              <p className="text-gray-700">
                Yes, we're familiar with the loading dock restrictions, truck route requirements, and delivery scheduling preferences of major Etobicoke industrial complexes. Our delivery team coordinates with facility management for seamless installations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can you work with Etobicoke's automotive quality requirements?</h3>
              <p className="text-gray-700">
                Absolutely. Our ISO 9001 certification and automotive experience serve Etobicoke's significant automotive supplier base. We understand PPAP requirements, dimensional reporting, and automotive-grade material specifications.
              </p>
            </div>
            
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What about food-grade fabrication for Etobicoke food processors?</h3>
              <p className="text-gray-700">
                We specialize in food-grade stainless steel fabrication using 316L materials with sanitary finishes. Our welders are experienced in food industry requirements and understand NSF/ANSI standards for food contact surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Serve Etobicoke Industrial
            </h2>
            <p className="text-xl mb-8">
              35-minute response time • Local expertise • Proven results
            </p>
            
            <div className="space-y-4">
              <a
                href={`tel:${businessInfo.telephone}`}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                📞 Call: {businessInfo.telephone}
              </a>
              
              <div className="text-lg">
                <p>Email: <a href={`mailto:${businessInfo.email}`} className="underline">{businessInfo.email}</a></p>
                <p className="text-blue-200 text-sm mt-2">
                  Mention "Etobicoke Industrial" for priority response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}