import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'
import { pageMetadata } from '@/config/seo-metadata'
import { businessInfo } from '@/config/business-info'
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/structured-data'
import { StructuredDataScript } from '@/components/StructuredDataScript'

export const metadata: Metadata = {
  ...pageMetadata.services,
  alternates: {
    canonical: `${businessInfo.url}/services`,
  },
}

export default function ServicesPage() {
  const structuredData = [
    generateBreadcrumbSchema([
      { name: 'Home', url: businessInfo.url },
      { name: 'Services', url: `${businessInfo.url}/services` }
    ]),
    generateServiceSchema({
      name: 'Complete Sheet Metal Fabrication Services',
      description: 'Comprehensive sheet metal services including engineering support, smart sourcing, laser cutting, CNC bending, certified welding, and professional finishing.',
      url: `${businessInfo.url}/services`,
      image: `${businessInfo.url}/images/services-hero.jpg`
    })
  ]

  return (
    <>
      <StructuredDataScript data={structuredData} />
      <div className="min-h-screen">
        <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
          {/* Industry 4.0 background patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat opacity-30"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border border-industry-blue/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-industry-orange/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-industry-blue rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-industry-blue rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
            {/* Brand Value Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
              <span className="text-industry-blue mr-2">🔧</span>
              <span className="text-sm font-medium">Proven Manufacturing Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Complete Sheet Metal Fabrication
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Services</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              From concept to completion, we provide comprehensive sheet metal fabrication services 
              with proven fundamentals, reliable execution, and unshakeable quality.
            </p>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">🏭</span>
                <span className="text-sm font-medium text-industry-dark">Complete Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                End-to-End Manufacturing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Excellence</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                From engineering design to final finishing, we provide comprehensive services that eliminate supplier headaches 
                and deliver unshakeable reliability through proven fundamentals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 items-stretch">
              <Link href="/services/engineering">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-industry-blue text-2xl">🔧</span>
                  </div>
                  <h3 className="text-sm font-semibold text-industry-dark">Engineering</h3>
                  <p className="text-xs text-industry-gray-500 mt-1">Design Support</p>
                </div>
              </Link>
              
              <Link href="/services/smart-sourcing">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col" style={{animationDelay: '100ms'}}>
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-industry-orange text-2xl">🔗</span>
                  </div>
                  <h3 className="text-sm font-semibold text-industry-dark">Smart Sourcing</h3>
                  <p className="text-xs text-industry-gray-500 mt-1">Supply Chain</p>
                </div>
              </Link>
              
              <Link href="/services/laser-cutting-bending">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col" style={{animationDelay: '200ms'}}>
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-industry-blue text-2xl">✂️</span>
                  </div>
                  <h3 className="text-sm font-semibold text-industry-dark">Laser Cutting & Bending</h3>
                  <p className="text-xs text-industry-gray-500 mt-1">Precision Parts</p>
                </div>
              </Link>
              
              <Link href="/services/welding">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col" style={{animationDelay: '400ms'}}>
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-industry-blue text-2xl">🔥</span>
                  </div>
                  <h3 className="text-sm font-semibold text-industry-dark">Welding</h3>
                  <p className="text-xs text-industry-gray-500 mt-1">Certified Joins</p>
                </div>
              </Link>
              
              <Link href="/services/finishing">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up text-center h-full flex flex-col" style={{animationDelay: '500ms'}}>
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-industry-orange text-2xl">✨</span>
                  </div>
                  <h3 className="text-sm font-semibold text-industry-dark">Finishing</h3>
                  <p className="text-xs text-industry-gray-500 mt-1">Surface Treatments</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Engineering Service Section */}
        <section id="engineering" className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
                  <span className="text-industry-blue mr-2">🔧</span>
                  <span className="text-sm font-medium">Engineering Excellence</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Engineering Support:
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Think Like an OEM</span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-8">
                  Our engineering team partners with you from concept to production, applying OEM-level thinking 
                  to optimize designs for manufacturability, cost-effectiveness, and reliability.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-industry-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-white">Design for Manufacturing</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-industry-blue mr-2">•</span>
                        <span>Tolerance optimization for cost reduction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-industry-blue mr-2">•</span>
                        <span>Material selection guidance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-industry-blue mr-2">•</span>
                        <span>Production-ready design refinements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-industry-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-white">Prototyping & Testing</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-industry-orange mr-2">•</span>
                        <span>Rapid prototype development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-industry-orange mr-2">•</span>
                        <span>Design validation and testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-industry-orange mr-2">•</span>
                        <span>Iterative refinement process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Engineering Capabilities</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CAD/CAM Integration:</span>
                    <span className="text-industry-blue font-medium">SolidWorks, AutoCAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tolerance Standards:</span>
                    <span className="text-industry-orange font-medium">±0.001&quot; achievable</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Material Expertise:</span>
                    <span className="text-industry-blue font-medium">10+ alloy types</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Project Types:</span>
                    <span className="text-industry-orange font-medium">Prototype to production</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-industry-blue/10 rounded-lg border border-industry-blue/20">
                  <p className="text-sm text-gray-300">
                    <strong className="text-industry-blue">Relentless Refinement:</strong> We continuously optimize 
                    designs through proven engineering fundamentals, ensuring every project meets OEM standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Sourcing Section */}
        <section id="sourcing" className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🔗</span>
                <span className="text-sm font-medium text-industry-dark">Smart Sourcing</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Supply Chain Excellence:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Manufacturing Simplified</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Eliminate procurement headaches with our proven supply chain management. We source materials efficiently, 
                negotiate better rates, and ensure consistent quality through established supplier relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🏪</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-industry-dark">Material Sourcing</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Direct relationships with certified suppliers ensure consistent quality and competitive pricing for all material types.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Certified material suppliers
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Volume purchasing power
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Quality certification tracking
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-industry-dark">Lead Time Optimization</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Strategic inventory management and supplier coordination minimize delays and ensure on-time delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Strategic inventory planning
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Supplier performance tracking
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Expedited delivery options
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-industry-dark">Cost Optimization</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Transparent pricing with no hidden costs. We pass volume discounts to clients while maintaining quality standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Volume discount pass-through
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Transparent pricing model
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Total cost of ownership focus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Laser Cutting & Profile Cut & Bend Section */}
        <section id="cutting" className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
                <span className="text-industry-blue mr-2">✂️</span>
                <span className="text-sm font-medium">Precision Cutting</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
                Laser Cutting & Profile
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Forming</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From precision laser cutting to complex profile forming, we deliver tight tolerances and consistent quality 
                through mastered fundamentals and proven processes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700 animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Laser Cutting Excellence</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our Bodor 6000KW laser system delivers precision cutting with proven processes for complex geometries 
                  and tight tolerances across various materials.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-industry-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-industry-blue mb-2">Materials & Specs</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• Steel, Stainless, Aluminum</li>
                      <li>• Up to 1&quot; thick</li>
                      <li>• 5&apos; x 10&apos; table capacity</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-industry-orange mb-2">Quality Standards</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• ±0.005&quot; tolerance standard</li>
                      <li>• ±0.001&quot; achievable</li>
                      <li>• Quality control tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">📐</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Profile Cut & Bend</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Precision profile cutting and bending with our CNC press brakes deliver complex forms with 
                  consistent repeatability and OEM-quality results.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-industry-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-industry-orange mb-2">Press Brake Capacity</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• 220 tons (13 feet)</li>
                      <li>• 176 tons (10 feet)</li>
                      <li>• 44 tons (4 feet)</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-industry-blue mb-2">Precision Standards</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>• ±0.5° angle accuracy</li>
                      <li>• 0.5mm - 25mm bend radius</li>
                      <li>• Complex geometry capability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700 animate-slide-up" style={{animationDelay: '400ms'}}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Common Applications & Industries</h3>
                <p className="text-gray-300">Serving diverse industries with precision parts and reliable execution</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Industrial</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Enclosures & Housings</li>
                    <li>• Structural Brackets</li>
                    <li>• Machine Guards</li>
                    <li>• Control Panels</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Commercial</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Architectural Elements</li>
                    <li>• Signage & Displays</li>
                    <li>• Retail Fixtures</li>
                    <li>• Custom Furniture</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Automotive</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Chassis Components</li>
                    <li>• Body Panels</li>
                    <li>• Mounting Systems</li>
                    <li>• Prototype Parts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Enhanced Welding Section */}
        <section id="welding" className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">🔥</span>
                <span className="text-sm font-medium text-industry-dark">Certified Welding</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-industry-dark">
                Professional Welding
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Excellence</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Certified welders using proven techniques and quality control processes to deliver strong, reliable joints 
                with consistent results across all project types.
              </p>
            </div>

            {/* Quality Standards Banner */}
            <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 mb-16 animate-slide-up">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-blue text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-industry-dark">AWS D1.1 Certified</h3>
                    <p className="text-xs text-industry-gray-500">Structural Welding Code</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-orange text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-industry-dark">Quality Control</h3>
                    <p className="text-xs text-industry-gray-500">100% Joint Inspection</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-blue text-xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-industry-dark">NDT Testing</h3>
                    <p className="text-xs text-industry-gray-500">Non-Destructive Testing</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-orange text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-industry-dark">Documentation</h3>
                    <p className="text-xs text-industry-gray-500">Complete Traceability</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-blue/30 hover:-translate-y-2 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">TIG Welding</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Precise tungsten inert gas welding for high-quality, clean welds on thin materials with superior control and finish.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Stainless steel specialty
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Aluminum welding
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    ±0.005&quot; precision
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Clean appearance
                  </li>
                </ul>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-orange/30 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-orange transition-colors">MIG Welding</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Metal inert gas welding for production efficiency and strong structural joints with reliable execution and consistent quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    High production rates
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Strong penetration
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Structural applications
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Cost-effective
                  </li>
                </ul>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-blue/30 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔩</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">Spot Welding</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Resistance spot welding for sheet metal assemblies and high-volume production with consistent results and minimal distortion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Fast cycle times
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Consistent quality
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Minimal distortion
                  </li>
                  <li className="flex items-center text-sm text-industry-gray-500">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    75kva capacity
                  </li>
                </ul>
              </div>
            </div>

            {/* Welding Capabilities Detail */}
            <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '600ms'}}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-industry-dark mb-4">Welding Capabilities & Quality Assurance</h3>
                <p className="text-industry-gray-600">Comprehensive welding services with proven quality control and documentation</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-industry-dark mb-2">Material Range</h4>
                  <ul className="space-y-1 text-sm text-industry-gray-600">
                    <li>• Steel: Mild to High-Strength</li>
                    <li>• Stainless: 304, 316, 316L</li>
                    <li>• Aluminum: Various Alloys</li>
                    <li>• Specialty: Inconel, Hastelloy</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📏</span>
                  </div>
                  <h4 className="text-lg font-semibold text-industry-dark mb-2">Quality Standards</h4>
                  <ul className="space-y-1 text-sm text-industry-gray-600">
                    <li>• AWS D1.1 Certified</li>
                    <li>• CWI Supervision</li>
                    <li>• 100% Visual Inspection</li>
                    <li>• NDT Testing Available</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-industry-dark mb-2">Equipment</h4>
                  <ul className="space-y-1 text-sm text-industry-gray-600">
                    <li>• Miller Multimatic 255</li>
                    <li>• 75kva Spot Welder</li>
                    <li>• Precision Fixtures</li>
                    <li>• Fume Extraction Systems</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h4 className="text-lg font-semibold text-industry-dark mb-2">Documentation</h4>
                  <ul className="space-y-1 text-sm text-industry-gray-600">
                    <li>• Welding Procedure Specs</li>
                    <li>• Welder Qualification Records</li>
                    <li>• Material Traceability</li>
                    <li>• Inspection Reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Finishing Section */}
        <section id="finishing" className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
                <span className="text-industry-orange mr-2">✨</span>
                <span className="text-sm font-medium">Surface Excellence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
                Professional Finishing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Services</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Complete your project with professional finishing services that deliver durability, appearance, 
                and performance through proven methods and quality control.
              </p>
            </div>

            {/* Quality Standards Overview */}
            <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700 mb-16 animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Finishing Quality Standards</h3>
                <p className="text-gray-300">Consistent results through proven processes and quality control</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Pre-Treatment</h4>
                  <p className="text-sm text-gray-300">Surface preparation and cleaning for optimal adhesion</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Thickness Control</h4>
                  <p className="text-sm text-gray-300">Precise coating thickness measurement and control</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Testing</h4>
                  <p className="text-sm text-gray-300">Adhesion, corrosion, and durability testing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Documentation</h4>
                  <p className="text-sm text-gray-300">Complete process records and certifications</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-industry-blue transition-colors">Powder Coating</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Durable, environmentally friendly electrostatic coating process offering superior corrosion resistance, 
                  color options, and finish quality for long-lasting protection.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-blue mb-2">Capabilities</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• 500+ color options</li>
                      <li>• Texture variations</li>
                      <li>• UV resistance</li>
                      <li>• Chemical resistance</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-orange mb-2">Applications</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Outdoor equipment</li>
                      <li>• Architectural</li>
                      <li>• Automotive</li>
                      <li>• Industrial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-industry-orange transition-colors">Electroplating</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Precision electroplating services including zinc, chrome, and nickel for enhanced corrosion protection, 
                  wear resistance, and decorative finishes with consistent quality control.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-orange mb-2">Coating Types</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Zinc plating</li>
                      <li>• Chrome plating</li>
                      <li>• Nickel plating</li>
                      <li>• Copper plating</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-blue mb-2">Standards</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• ASTM B633</li>
                      <li>• ISO 2081</li>
                      <li>• MIL-C-5541</li>
                      <li>• Custom specs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-industry-blue transition-colors">Anodizing</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Aluminum anodizing for enhanced durability, corrosion resistance, and aesthetic appeal. 
                  Provides hard, wear-resistant surface with excellent adhesion for secondary finishes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-blue mb-2">Types</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Type II (Sulfuric)</li>
                      <li>• Type III (Hard)</li>
                      <li>• Color anodizing</li>
                      <li>• Clear anodizing</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-orange mb-2">Benefits</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Corrosion resistance</li>
                      <li>• Wear resistance</li>
                      <li>• Electrical insulation</li>
                      <li>• Aesthetic appeal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '600ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-industry-orange transition-colors">Passivation</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Stainless steel passivation removes surface contamination and enhances natural corrosion resistance. 
                  Essential for medical, food, and high-performance applications.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-orange mb-2">Materials</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• 304 Stainless</li>
                      <li>• 316 Stainless</li>
                      <li>• 316L Stainless</li>
                      <li>• Custom alloys</li>
                    </ul>
                  </div>
                  <div className="bg-industry-gray-900/50 p-3 rounded-lg">
                    <h4 className="text-xs font-semibold text-industry-blue mb-2">Standards</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• ASTM A967</li>
                      <li>• AMS 2700</li>
                      <li>• Medical grade</li>
                      <li>• Food grade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-tech-gradient text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-industry-orange/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-industry-orange mr-2">🚀</span>
              <span className="text-sm font-medium">Ready to Start</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Reliable Project?</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Upload your designs and get a detailed quote for any combination of our proven services. 
              Experience unshakeable reliability from quote to delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={"/quote" as any}
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Get Straightforward Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a
                href={"/contact" as any}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300"
              >
                <span>Contact Expert</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}