import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BreadcrumbList } from '@/components/ui/BreadcrumbList'
import Link from 'next/link'

interface CapabilityPageProps {
  params: {
    slug: string
  }
}

const capabilities = {
  'laser-cutting': {
    title: 'Laser Cutting Services Ontario',
    description: 'Precision laser cutting services for steel, aluminum, and stainless steel. Advanced Trumpf laser systems with ±0.1mm tolerances and up to 25mm thickness capability.',
    keywords: 'laser cutting services Ontario, precision laser cutting, custom laser cutting, steel laser cutting, aluminum laser cutting',
    content: {
      overview: 'Our state-of-the-art Trumpf TruLaser 3030 (6kW) delivers exceptional precision and speed for your metal cutting needs. From prototype to production, we handle complex geometries with minimal heat affected zones.',
      equipment: 'Trumpf TruLaser 3030 (6kW)',
      materials: ['Mild Steel', 'Stainless Steel (304, 316, 316L)', 'Aluminum (5052, 6061)', 'Galvanized Steel'],
      thickness: 'Up to 25mm',
      tolerance: '±0.1mm',
      features: [
        'Minimal heat affected zone',
        'Complex geometries without tooling',
        'High-speed cutting for production runs',
        'Tight nesting for material efficiency',
        'Bevel cutting capability',
        'Micro-joints for small parts'
      ]
    }
  },
  'cnc-punching': {
    title: 'CNC Punching Services Canada',
    description: 'High-speed CNC punching and forming services for sheet metal fabrication. Trumpf TruPunch systems with forming capabilities up to 6mm thickness.',
    keywords: 'CNC punching Canada, sheet metal punching, high speed punching, metal forming, turret punch',
    content: {
      overview: 'Our Trumpf TruPunch systems deliver high-speed production punching with forming capabilities. Ideal for high-volume production runs and complex part geometries requiring multiple features.',
      equipment: 'Trumpf TruPunch 3000R',
      materials: ['Mild Steel', 'Stainless Steel', 'Aluminum', 'Pre-painted Steel'],
      thickness: 'Up to 6mm',
      tolerance: '±0.1mm',
      features: [
        'High-speed production capability',
        'Forming and embossing operations',
        'Automatic tool changing',
        'Minimal material waste',
        'Tapping and thread forming',
        'Louver and lance forming'
      ]
    }
  },
  'custom-welding': {
    title: 'Custom Welding Services Ontario',
    description: 'Professional welding services including MIG, TIG, and stick welding. CWB certified welders specializing in structural steel and stainless steel applications.',
    keywords: 'custom welding Ontario, MIG welding, TIG welding, structural welding, stainless steel welding',
    content: {
      overview: 'Our CWB certified welders provide superior welding services for structural, architectural, and precision applications. From food-grade stainless steel to heavy structural steel.',
      equipment: 'Miller and Lincoln welding systems',
      materials: ['Structural Steel', 'Stainless Steel (food-grade)', 'Aluminum', 'Exotic Alloys'],
      thickness: '1mm to 50mm',
      tolerance: 'CWB certified processes',
      features: [
        'CWB certified welders',
        'Food-grade stainless steel specialty',
        'Structural steel certification',
        'Robotic welding capability',
        'Pressure vessel welding',
        'Aluminum specialty welding'
      ]
    }
  },
  'sheet-metal': {
    title: 'Sheet Metal Fabrication Ontario',
    description: 'Complete sheet metal fabrication services from design to assembly. Trumpf press brake systems with precision bending and forming capabilities.',
    keywords: 'sheet metal fabrication Ontario, metal bending, press brake, sheet metal forming, custom sheet metal',
    content: {
      overview: 'Complete sheet metal fabrication from initial design consultation to finished assemblies. Our Trumpf press brake systems deliver consistent, precision bending for complex parts.',
      equipment: 'Trumpf TruBend 3100',
      materials: ['Mild Steel', 'Stainless Steel', 'Aluminum', 'Galvanized Steel'],
      thickness: '0.5mm to 6mm',
      tolerance: '±0.1mm',
      features: [
        'Precision bending and forming',
        'Complex multi-bend operations',
        'Hemming and seaming',
        'Assembly and hardware installation',
        'Prototype to production capability',
        'Design for manufacturing consultation'
      ]
    }
  }
}

export async function generateMetadata({ params }: CapabilityPageProps): Promise<Metadata> {
  const capability = capabilities[params.slug as keyof typeof capabilities]
  
  if (!capability) {
    return {
      title: 'Page Not Found',
      description: 'The requested capability page was not found.'
    }
  }

  return {
    title: capability.title,
    description: capability.description,
    keywords: capability.keywords,
    openGraph: {
      title: capability.title,
      description: capability.description,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(capabilities).map((slug) => ({
    slug,
  }))
}

export default function CapabilityPage({ params }: CapabilityPageProps) {
  const capability = capabilities[params.slug as keyof typeof capabilities]
  
  if (!capability) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: capability.content.equipment, href: `/capabilities/${params.slug}` }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: capability.title,
    provider: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators'
    },
    description: capability.description,
    serviceType: 'Metal Fabrication',
    areaServed: 'Ontario, Canada',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: capability.title,
      itemListElement: capability.content.materials.map(material => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: `${capability.title} - ${material}`
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
      
      <div className="py-20">
        <div className="section-container">
          <BreadcrumbList items={breadcrumbs} />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mb-8">{capability.title}</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-industrial-600 leading-relaxed">
                {capability.content.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Equipment & Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Equipment:</span>
                    <span className="text-industrial-600">{capability.content.equipment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Thickness:</span>
                    <span className="text-industrial-600">{capability.content.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-industrial-700">Tolerance:</span>
                    <span className="text-industrial-600">{capability.content.tolerance}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Materials We Process</h3>
                <ul className="space-y-2">
                  {capability.content.materials.map((material, index) => (
                    <li key={index} className="text-industrial-600 flex items-center">
                      <span className="text-accent mr-2">•</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card mb-12">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Key Features & Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {capability.content.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-industrial-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-industrial-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-industrial-600 mb-6">
                Upload your drawings and specifications for instant pricing and lead time estimates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/request-quote"
                  className="btn-secondary text-center"
                >
                  Get Instant Quote
                </Link>
                <Link 
                  href="/contact"
                  className="btn-primary text-center"
                >
                  Speak with Engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}