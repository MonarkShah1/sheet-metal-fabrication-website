import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metal Fabrication Capabilities | Equipment & Tolerances | Canadian Metal Fabricators',
  description: 'Complete metal fabrication capabilities including laser cutting, CNC machining, welding, and sheet metal. Download our equipment specifications and tolerance charts.',
  keywords: 'metal fabrication equipment, laser cutting capabilities, CNC machining, welding services, sheet metal fabrication, manufacturing tolerances'
}

export default function CapabilitiesPage() {
  const capabilities = [
    {
      category: 'Laser Cutting',
      equipment: 'Trumpf TruLaser 3030 (6kW)',
      materials: 'Steel, Stainless, Aluminum',
      thickness: 'Up to 25mm',
      tolerance: '±0.1mm',
      features: ['Minimal heat affected zone', 'Complex geometries', 'Tight nesting efficiency']
    },
    {
      category: 'CNC Machining',
      equipment: 'Haas VF-4SS, VF-2SS',
      materials: 'All metals, plastics',
      thickness: '600mm x 400mm travel',
      tolerance: '±0.025mm',
      features: ['4th axis capability', 'Precision tooling', 'High-speed machining']
    },
    {
      category: 'Welding',
      equipment: 'MIG, TIG, Stick stations',
      materials: 'Steel, Stainless, Aluminum',
      thickness: '1mm to 50mm',
      tolerance: 'CWB certified',
      features: ['Food-grade stainless', 'Structural certified', 'Robotic welding']
    },
    {
      category: 'Sheet Metal',
      equipment: 'Trumpf TruBend 3100',
      materials: 'Steel, Aluminum, Stainless',
      thickness: '0.5mm to 6mm',
      tolerance: '±0.1mm',
      features: ['Complex forming', 'Precision bending', 'Prototype to production']
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Metal Fabrication Capabilities',
    provider: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators'
    },
    description: 'Complete metal fabrication capabilities including laser cutting, CNC machining, welding, and sheet metal fabrication.',
    serviceType: 'Metal Fabrication',
    areaServed: 'Ontario, Canada',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Metal Fabrication Services',
      itemListElement: capabilities.map(cap => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap.category,
          description: `${cap.category} services using ${cap.equipment}`
        }
      }))
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
            <h1 className="section-title">Metal Fabrication Capabilities</h1>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              State-of-the-art equipment and certified processes delivering precision results 
              for Ontario&apos;s most demanding manufacturing projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {capabilities.map((cap, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-primary-800 mb-4">{cap.category}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Equipment:</span>
                    <span className="text-industrial-600">{cap.equipment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Materials:</span>
                    <span className="text-industrial-600">{cap.materials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Capacity:</span>
                    <span className="text-industrial-600">{cap.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Tolerance:</span>
                    <span className="text-industrial-600">{cap.tolerance}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-industrial-200">
                  <h4 className="font-medium text-industrial-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {cap.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-industrial-600 flex items-center">
                        <span className="text-accent mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-industrial-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Download Complete Equipment Specifications
            </h2>
            <p className="text-industrial-600 mb-6">
              Get detailed tolerance charts, material specifications, and equipment capabilities in our comprehensive PDF guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/equipment-specs.pdf"
                className="btn-primary text-center"
              >
                Download Equipment PDF
              </Link>
              <Link 
                href="/request-quote"
                className="btn-secondary text-center"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}