import Link from 'next/link'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateServiceMetadata('finishing')

export default function FinishingPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat opacity-30"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border border-industry-blue/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-industry-orange/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Floating tech elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-blue rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href={"/services" as any} className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-white">Surface Finishing</span>
            </nav>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
              <span className="text-industry-orange mr-2">✨</span>
              <span className="text-sm font-medium">Professional Surface Treatments</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">Surface Finishing</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Complete your fabricated parts with professional surface treatments, coatings, and finishes. From powder coating to anodizing, we provide the final touches that protect and perfect your sheet metal components.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🛡️</span>
                <span>Corrosion Protection</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🎨</span>
                <span>Custom Colors</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔬</span>
                <span>Surface Analysis</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>Fast Turnaround</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/quote" as any}
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
                aria-label="Get finishing quote"
              >
                <span>Get Finishing Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </Link>
              
              <Link
                href={"/contact" as any}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Discuss finishing requirements"
              >
                <span>Finishing Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.957 8.957 0 01-4.906-1.46L3 21l2.46-5.094A8.957 8.957 0 013 11c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Finishing Services Overview */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">🎯</span>
                <span className="text-sm font-medium text-industry-blue">Surface Treatment Options</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Complete Finishing Solutions
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto mb-12">
                Transform your fabricated parts with professional finishing services. From protective coatings to decorative treatments, we provide the expertise to enhance durability, appearance, and performance.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-industry border border-industry-gray-200">
                <div className="w-16 h-16 bg-industry-blue/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-industry-dark mb-4">Powder Coating</h3>
                <p className="text-industry-gray-600 mb-6">
                  Durable, eco-friendly coating process offering superior finish quality, color consistency, and corrosion resistance for steel and aluminum parts.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li>• Custom RAL and Pantone color matching</li>
                  <li>• Textured and smooth finish options</li>
                  <li>• 95% transfer efficiency</li>
                  <li>• VOC-free environmental compliance</li>
                  <li>• Salt spray testing: 500+ hours</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-industry border border-industry-gray-200">
                <div className="w-16 h-16 bg-industry-orange/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-industry-dark mb-4">Anodizing</h3>
                <p className="text-industry-gray-600 mb-6">
                  Electrochemical process creating a protective oxide layer on aluminum, enhancing corrosion resistance and allowing for vibrant color options.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li>• Type II and Type III hard coat</li>
                  <li>• Clear, black, and colored options</li>
                  <li>• Improved wear resistance</li>
                  <li>• Electrical insulation properties</li>
                  <li>• MIL-A-8625 specification compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-industry border border-industry-gray-200">
                <div className="w-16 h-16 bg-industry-blue/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-industry-dark mb-4">Galvanizing & Plating</h3>
                <p className="text-industry-gray-600 mb-6">
                  Zinc and specialty metal plating processes providing exceptional corrosion protection for harsh environments and critical applications.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li>• Hot-dip galvanizing partnerships</li>
                  <li>• Electroplating: zinc, nickel, chrome</li>
                  <li>• Passivation treatments</li>
                  <li>• Military and aerospace specifications</li>
                  <li>• Trivalent chromate conversion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Surface Preparation & Quality */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                  <span className="text-industry-orange mr-2">🔬</span>
                  <span className="text-sm font-medium text-industry-orange">Quality Process</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                  Surface Preparation Excellence
                </h2>
                
                <p className="text-lg text-industry-gray-600 mb-8">
                  Superior finishing starts with proper surface preparation. Our comprehensive pre-treatment processes ensure optimal coating adhesion and long-term performance for Ontario&apos;s demanding environments.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Cleaning & Degreasing</h3>
                      <p className="text-industry-gray-600 text-sm">Alkaline cleaning removes oils, fingerprints, and contaminants for optimal surface preparation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Surface Profiling</h3>
                      <p className="text-industry-gray-600 text-sm">Media blasting or chemical etching creates the ideal surface texture for coating adhesion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Conversion Coating</h3>
                      <p className="text-industry-gray-600 text-sm">Phosphate or chromate treatments enhance corrosion resistance and coating bond strength.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Quality Inspection</h3>
                      <p className="text-industry-gray-600 text-sm">Surface profile measurement and cleanliness verification before coating application.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-industry-dark mb-6">Quality Standards</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-industry-gray-50 rounded-lg">
                    <span className="font-medium text-industry-dark">Coating Thickness</span>
                    <span className="text-industry-blue font-semibold">±10% tolerance</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-industry-gray-50 rounded-lg">
                    <span className="font-medium text-industry-dark">Adhesion Test</span>
                    <span className="text-industry-blue font-semibold">ASTM D3359</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-industry-gray-50 rounded-lg">
                    <span className="font-medium text-industry-dark">Salt Spray</span>
                    <span className="text-industry-blue font-semibold">ASTM B117</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-industry-gray-50 rounded-lg">
                    <span className="font-medium text-industry-dark">Color Matching</span>
                    <span className="text-industry-blue font-semibold">ΔE &lt; 1.0</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-industry-gray-50 rounded-lg">
                    <span className="font-medium text-industry-dark">Surface Roughness</span>
                    <span className="text-industry-blue font-semibold">Ra 0.8-3.2 μm</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-industry-blue/10 rounded-lg border border-industry-blue/20">
                  <h4 className="font-semibold text-industry-blue mb-2">Certifications</h4>
                  <p className="text-sm text-industry-gray-700">ISO 9001:2015 quality management, AAMA 2604 architectural coatings, and NACE corrosion protection standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Finishes */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Specialized Finishing Services
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Advanced finishing techniques for unique applications, extreme environments, and specialized performance requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-industry-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold text-industry-dark mb-2">Chemical Passivation</h3>
                <p className="text-sm text-industry-gray-600">Stainless steel passivation removes free iron and enhances corrosion resistance per ASTM A967 standards.</p>
              </div>
              
              <div className="bg-industry-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚫</span>
                </div>
                <h3 className="font-semibold text-industry-dark mb-2">Black Oxide</h3>
                <p className="text-sm text-industry-gray-600">Conversion coating providing dimensional stability, corrosion resistance, and non-reflective black finish.</p>
              </div>
              
              <div className="bg-industry-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧹</span>
                </div>
                <h3 className="font-semibold text-industry-dark mb-2">Mechanical Finishing</h3>
                <p className="text-sm text-industry-gray-600">Brushing, polishing, and texturing services creating decorative and functional surface finishes.</p>
              </div>
              
              <div className="bg-industry-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌡️</span>
                </div>
                <h3 className="font-semibold text-industry-dark mb-2">Heat Treatment</h3>
                <p className="text-sm text-industry-gray-600">Stress relieving and heat treatment services improving material properties and coating performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Complete Manufacturing Pipeline
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Finishing is the final step in our comprehensive manufacturing process. From engineering to final coating, we handle every aspect of your project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/engineering" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Engineering</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Design for finishing: material selection and surface preparation considerations.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/laser-cutting-bending" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">✂️</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Laser Cutting</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Precision cutting with smooth edges optimized for finishing processes.</p>
                  <div className="mt-4 text-xs text-industry-orange font-medium group-hover:text-industry-orange/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/welding" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔥</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Welding</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Quality welds prepared for finishing with proper surface treatment.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/smart-sourcing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Smart Sourcing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Premium materials selected for optimal finishing performance and appearance.</p>
                  <div className="mt-4 text-xs text-industry-orange font-medium group-hover:text-industry-orange/80">Learn More →</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-industry-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Perfect Your Parts?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Complete your fabrication project with professional finishing services. From protective coatings to decorative treatments, we deliver the quality and durability your parts deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/quote" as any}
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
              >
                <span>Get Finishing Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </Link>
              
              <Link
                href={"/contact" as any}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <span>Surface Treatment Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}