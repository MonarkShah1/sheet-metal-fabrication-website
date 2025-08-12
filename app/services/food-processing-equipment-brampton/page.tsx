import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { businessInfo } from '@/config/business-info'

export const metadata: Metadata = {
  title: 'Food Processing Equipment Fabrication Brampton | Stainless Steel | Canadian Metal Fabricators',
  description: 'Professional food processing equipment fabrication in Brampton. Stainless steel 316L, NSF compliant, HACCP standards. Emergency service available. Call 647-407-0171.',
  keywords: 'food processing equipment brampton, stainless steel fabrication brampton, food grade metal brampton, NSF compliant fabrication, HACCP steel work brampton, commercial kitchen equipment, food manufacturing parts brampton',
  alternates: {
    canonical: `${businessInfo.url}/services/food-processing-equipment-brampton/`,
  }
}

const foodProcessingBramptongSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Food Processing Equipment Fabrication Brampton",
  "description": "Professional stainless steel fabrication for food processing equipment in Brampton, Ontario. NSF compliant, HACCP standards, 316L stainless steel.",
  "provider": {
    "@type": "Organization",
    "name": businessInfo.name,
    "telephone": businessInfo.telephone,
    "url": businessInfo.url
  },
  "areaServed": {
    "@type": "City",
    "name": "Brampton",
    "@id": "https://www.wikidata.org/wiki/Q188712"
  },
  "serviceType": "Food Processing Equipment Fabrication",
  "audience": {
    "@type": "Audience",
    "audienceType": "Food Processing Industry"
  }
}

export default function FoodProcessingEquipmentBramptongPage() {
  return (
    <>
      <StructuredDataScript data={[foodProcessingBramptongSchema]} />
      
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Food Processing Equipment Fabrication<br/>
              <span className="text-orange-200">Brampton, Ontario</span>
            </h1>
            <p className="text-xl mb-8">
              Stainless Steel 316L • NSF Compliant • HACCP Standards • Emergency Service
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-orange-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">316L</div>
                <div className="text-sm">Stainless Steel Grade</div>
              </div>
              <div className="bg-orange-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">NSF</div>
                <div className="text-sm">Compliant Standards</div>
              </div>
              <div className="bg-orange-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">43</div>
                <div className="text-sm">Food facilities served</div>
              </div>
              <div className="bg-orange-700 bg-opacity-50 p-4 rounded">
                <div className="text-2xl font-bold">25 Min</div>
                <div className="text-sm">Emergency response time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Processing Expertise */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Brampton Food Processing Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-600">Food-Grade Specialization</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Brampton's position as Ontario's food processing hub demands specialized metal fabrication expertise. Our food-grade certified fabrication serves over 40 Brampton food facilities, from large commercial bakeries to specialty food manufacturers along the Queen Street corridor.
                  </p>
                  <p className="text-gray-700">
                    We maintain dedicated stainless steel inventory specifically for food applications, including 316L grades with #4 sanitary finish. Our certified welders understand HACCP requirements and NSF/ANSI standards for food contact surfaces.
                  </p>
                  <p className="text-gray-700">
                    Located just 25 minutes from Brampton's industrial corridor, we provide emergency response for food processing equipment failures that could jeopardize production schedules and food safety compliance.
                  </p>
                </div>
                
                <div className="mt-8 bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-3">Food Safety Certifications</h4>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>✓ NSF/ANSI certified fabrication processes</li>
                    <li>✓ HACCP-compliant manufacturing environment</li>
                    <li>✓ FDA-approved material sourcing</li>
                    <li>✓ Sanitary design principle training</li>
                    <li>✓ Food contact surface specifications</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Brampton Food Processing Equipment</h3>
                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-green-500 p-4 shadow">
                    <h4 className="font-bold text-green-600 mb-2">🍞 Commercial Bakery Equipment</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Mixing bowl housings and guards</li>
                      <li>• Conveyor system components</li>
                      <li>• Proofer and oven structural parts</li>
                      <li>• Sanitary piping and fittings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border-l-4 border-blue-500 p-4 shadow">
                    <h4 className="font-bold text-blue-600 mb-2">🥩 Meat Processing Equipment</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Processing table surfaces</li>
                      <li>• Grinding equipment housings</li>
                      <li>• Packaging line components</li>
                      <li>• Waste handling systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border-l-4 border-purple-500 p-4 shadow">
                    <h4 className="font-bold text-purple-600 mb-2">🥛 Dairy Processing Equipment</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Tank and vessel fabrication</li>
                      <li>• CIP system components</li>
                      <li>• Pasteurization equipment parts</li>
                      <li>• Packaging machinery components</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Brampton Case Study */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Major Brampton Food Processing Emergency
          </h2>
          
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600">Production Line Stoppage - Commercial Bakery</h3>
              <p className="text-gray-600">Queen Street Corridor Facility - 24,000 loaves/day capacity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-600">The Crisis (6:30 AM Monday)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Main mixer housing developed stress crack</li>
                  <li>• Food safety inspector required immediate shutdown</li>
                  <li>• 24,000 loaves daily production at risk</li>
                  <li>• Retail contracts requiring Monday delivery</li>
                  <li>• OEM replacement: 2-3 week lead time</li>
                </ul>
                
                <div className="mt-4 bg-red-50 p-4 rounded">
                  <p className="text-sm text-red-800">
                    <strong>Cost Impact:</strong> $35,000/day lost production + contract penalties
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-600">Our Solution (Same Day)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Emergency team on-site by 8:00 AM</li>
                  <li>• 3D measurements and material analysis</li>
                  <li>• Improved design with reinforcement ribs</li>
                  <li>• 316L stainless with #4 sanitary finish</li>
                  <li>• New housing installed by 6:00 PM</li>
                </ul>
                
                <div className="mt-4 bg-green-50 p-4 rounded">
                  <p className="text-sm text-green-800">
                    <strong>Result:</strong> Production resumed Tuesday morning, zero product loss
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="font-bold text-lg mb-4 text-blue-600">Engineering Improvements Made</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded">
                  <strong>Structural Enhancement</strong><br/>
                  Added reinforcement ribs to distribute stress loads more effectively than original design
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <strong>Material Upgrade</strong><br/>
                  Upgraded from 304 to 316L stainless steel for superior corrosion resistance
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <strong>Maintenance Access</strong><br/>
                  Improved accessibility for cleaning and inspection without full disassembly
                </div>
              </div>
              
              <div className="mt-6 text-center bg-yellow-50 p-4 rounded">
                <p className="italic text-gray-700">
                  "Not only did they get us back online in under 12 hours, but the new housing is actually better than the original. Their understanding of food safety requirements was impressive."
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">
                  - Plant Manager, Commercial Bakery (2,400 employees)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brampton Food Industry Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Brampton Food Processing Industry
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">180+</div>
              <div className="text-sm text-gray-700">Food processing facilities in Brampton</div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600">$2.1B</div>
              <div className="text-sm text-gray-700">Annual food manufacturing output</div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">12,000+</div>
              <div className="text-sm text-gray-700">Food processing jobs</div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">67%</div>
              <div className="text-sm text-gray-700">Of our Brampton emergency calls</div>
            </div>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Brampton hosts Ontario's largest concentration of food processing facilities. From Frito-Lay's massive snack production to artisanal bakeries, we serve the entire spectrum with specialized food-grade metal fabrication expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Food Processing Service */}
      <section className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">
              Food Processing Emergency Service
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              When production stops, every hour costs thousands. We respond immediately.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600 mb-2">15 Min</div>
                <div className="text-sm text-gray-700">Initial phone response time</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600 mb-2">1 Hour</div>
                <div className="text-sm text-gray-700">On-site assessment for emergencies</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-red-600 mb-2">4-6 Hours</div>
                <div className="text-sm text-gray-700">Typical fabrication turnaround</div>
              </div>
            </div>
            
            <a
              href={`tel:${businessInfo.telephone}`}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors"
            >
              📞 FOOD PROCESSING EMERGENCY: {businessInfo.telephone}
            </a>
            
            <p className="text-sm text-gray-600 mt-4">
              24/7 emergency hotline for food processing equipment failures
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Food-Grade Technical Specifications
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-green-600">Materials & Standards</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Primary Material:</strong> 316L Stainless Steel (low carbon)</li>
                <li><strong>Surface Finish:</strong> #4 Sanitary Finish (150 grit)</li>
                <li><strong>Welding Process:</strong> TIG welding, inert gas backing</li>
                <li><strong>Standards Compliance:</strong> NSF/ANSI 51, FDA CFR 177.2600</li>
                <li><strong>Documentation:</strong> Mill certificates, weld maps, inspection reports</li>
                <li><strong>Cleaning Protocols:</strong> Passivation per ASTM A967</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Design Considerations</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Sanitary Design:</strong> No dead legs, easy drainage</li>
                <li><strong>Surface Requirements:</strong> 32 Ra max roughness</li>
                <li><strong>Joint Design:</strong> Full penetration welds, no crevices</li>
                <li><strong>Corner Radii:</strong> Minimum 3mm for cleanability</li>
                <li><strong>Accessibility:</strong> CIP/SIP compatible design</li>
                <li><strong>Temperature Resistance:</strong> -40°F to +300°F operating range</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}