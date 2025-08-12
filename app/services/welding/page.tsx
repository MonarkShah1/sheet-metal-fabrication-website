import Link from 'next/link'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { businessInfo } from '@/config/business-info'
import { Metadata } from 'next'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { generateServiceSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  ...generateServiceMetadata('welding'),
  alternates: {
    canonical: `${businessInfo.url}/services/welding`,
  },
}

export default function WeldingPage() {
  const serviceData = {
    name: 'Professional Welding Services',
    description: 'AWS certified welding services including MIG, TIG, and spot welding for industrial and commercial applications.',
    url: `${businessInfo.url}/services/welding`,
    image: `${businessInfo.url}/images/welding-service.jpg`,
    offers: [{
      price: 'Contact for pricing',
      priceCurrency: 'CAD'
    }]
  };

  return (
    <>
      <StructuredDataScript data={generateServiceSchema(serviceData)} />
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
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-white">Welding</span>
            </nav>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
              <span className="text-industry-orange mr-2">🔥</span>
              <span className="text-sm font-medium">AWS Certified Welding Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Certified Welding <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              AWS D1.1 certified welding services in Mississauga and Toronto. From structural steel to precision assemblies, our certified welders deliver superior joints that meet the most demanding specifications and code requirements.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🏅</span>
                <span>AWS D1.1 Certified</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔧</span>
                <span>Multi-Process Capability</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📋</span>
                <span>Full Documentation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔍</span>
                <span>Quality Inspection</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
                aria-label="Get certified welding quote"
              >
                <span>Get Certified Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Discuss welding requirements"
              >
                <span>Discuss Requirements</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* AWS Certification Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🏅</span>
                <span className="text-sm font-medium text-industry-orange">Professional Certification</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                AWS D1.1 Structural Welding Certification
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto mb-12">
                Our certified welders meet the stringent requirements of AWS D1.1 Structural Welding Code, ensuring every weld meets or exceeds industry standards for strength, durability, and safety in critical applications.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-industry-dark mb-8">Certification Breakdown</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange font-bold text-sm">D1.1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Structural Welding Code</h4>
                      <p className="text-industry-gray-600">Complete qualification for structural steel welding applications meeting building and bridge construction standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue font-bold text-sm">CWI</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Certified Welding Inspector</h4>
                      <p className="text-industry-gray-600">On-staff CWI ensures compliance with welding codes and comprehensive quality documentation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange font-bold text-sm">WPS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Welding Procedure Specifications</h4>
                      <p className="text-industry-gray-600">Documented procedures for each material and thickness combination ensuring consistent results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue font-bold text-sm">WQR</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Welder Qualification Records</h4>
                      <p className="text-industry-gray-600">Individual welder certifications maintained and verified for specific processes and positions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-industry-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-industry-dark mb-6">Welding Position Qualifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">🏗️</div>
                    <div className="font-semibold text-industry-dark text-sm">1G - Flat</div>
                    <div className="text-xs text-industry-gray-600">Horizontal position</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">📐</div>
                    <div className="font-semibold text-industry-dark text-sm">2G - Horizontal</div>
                    <div className="text-xs text-industry-gray-600">Horizontal fillet</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">📏</div>
                    <div className="font-semibold text-industry-dark text-sm">3G - Vertical</div>
                    <div className="text-xs text-industry-gray-600">Vertical up/down</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="font-semibold text-industry-dark text-sm">4G - Overhead</div>
                    <div className="text-xs text-industry-gray-600">All positions</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-industry-orange/10 rounded-lg border border-industry-orange/20">
                  <h4 className="font-semibold text-industry-orange mb-2">Material Qualifications</h4>
                  <p className="text-sm text-industry-gray-700">Certified for carbon steel, stainless steel, aluminum, and specialty alloys up to unlimited thickness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welding Methods Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">⚡</span>
                <span className="text-sm font-medium text-industry-blue">Advanced Processes</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Multi-Process Welding Capabilities
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Our comprehensive welding capabilities include TIG, MIG, and Spot welding processes. Each method is selected based on material properties, joint design, and performance requirements to deliver optimal results.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-industry-dark mb-8 text-center">Welding Process Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-industry-gray-300">
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Process</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Best Applications</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Material Range</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Precision Level</th>
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-industry-gray-200 hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">TIG Welding</td>
                      <td className="py-4 px-6 text-center">Precision assemblies, thin materials</td>
                      <td className="py-4 px-6 text-center">0.5mm - 12mm</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">Highest</td>
                      <td className="py-4 px-6 text-industry-gray-600">Superior weld quality, minimal distortion</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">MIG Welding</td>
                      <td className="py-4 px-6 text-center">Production work, structural</td>
                      <td className="py-4 px-6 text-center">1mm - 25mm</td>
                      <td className="py-4 px-6 text-center text-industry-orange font-medium">High</td>
                      <td className="py-4 px-6 text-industry-gray-600">High speed, excellent penetration</td>
                    </tr>
                    <tr className="hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Spot Welding</td>
                      <td className="py-4 px-6 text-center">Sheet metal, repetitive joints</td>
                      <td className="py-4 px-6 text-center">0.5mm - 3mm</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">Consistent</td>
                      <td className="py-4 px-6 text-industry-gray-600">Fast cycle time, minimal finishing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-industry-gray-200">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">TIG Welding (GTAW)</h3>
                <p className="text-industry-gray-600 text-sm mb-4">Gas Tungsten Arc Welding delivers exceptional precision and weld quality for critical applications requiring superior aesthetics and strength.</p>
                <ul className="text-xs text-industry-gray-600 space-y-1">
                  <li>• Stainless steel, aluminum, exotic alloys</li>
                  <li>• Clean, precise welds with minimal spatter</li>
                  <li>• Superior control over heat input</li>
                  <li>• Ideal for thin materials and critical joints</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-industry-gray-200">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">MIG Welding (GMAW)</h3>
                <p className="text-industry-gray-600 text-sm mb-4">Gas Metal Arc Welding provides high-speed, high-quality welds perfect for production environments and structural applications.</p>
                <ul className="text-xs text-industry-gray-600 space-y-1">
                  <li>• Carbon steel, stainless, aluminum</li>
                  <li>• High deposition rates and speed</li>
                  <li>• Excellent penetration characteristics</li>
                  <li>• Versatile for various thicknesses</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-industry-gray-200">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔘</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Spot Welding (RSW)</h3>
                <p className="text-industry-gray-600 text-sm mb-4">Resistance Spot Welding creates strong, consistent joints in sheet metal assemblies with minimal heat-affected zones and distortion.</p>
                <ul className="text-xs text-industry-gray-600 space-y-1">
                  <li>• Sheet metal assemblies and enclosures</li>
                  <li>• Fast cycle times for production</li>
                  <li>• Consistent joint strength and quality</li>
                  <li>• Minimal post-weld finishing required</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-industry-gradient text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-industry-orange mr-2">🔍</span>
                  <span className="text-sm font-medium">Quality Control</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Comprehensive Quality Assurance Process
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-lg text-gray-200 mb-8">
                      Every weld undergoes rigorous inspection and testing procedures to ensure compliance with AWS standards and your specifications. Our quality assurance process includes visual inspection, non-destructive testing, and complete documentation for traceability.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <span className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-industry-blue text-sm font-bold">1</span>
                          </span>
                          <span className="font-semibold">Pre-Weld Inspection</span>
                        </div>
                        <p className="text-xs text-gray-300 ml-11">Material certification, fit-up verification, joint preparation assessment</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <span className="w-8 h-8 bg-industry-orange/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-industry-orange text-sm font-bold">2</span>
                          </span>
                          <span className="font-semibold">In-Process Monitoring</span>
                        </div>
                        <p className="text-xs text-gray-300 ml-11">Real-time parameter control, inter-pass cleaning, visual inspection</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <span className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-industry-blue text-sm font-bold">3</span>
                          </span>
                          <span className="font-semibold">Final Inspection</span>
                        </div>
                        <p className="text-xs text-gray-300 ml-11">Visual, dimensional, NDT testing, documentation completion</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <span className="w-8 h-8 bg-industry-orange/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-industry-orange text-sm font-bold">4</span>
                          </span>
                          <span className="font-semibold">Documentation</span>
                        </div>
                        <p className="text-xs text-gray-300 ml-11">Welding certificates, inspection reports, material traceability records</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="font-bold mb-6 text-center">Inspection Methods Available</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Visual Inspection (VT)</span>
                        <span className="font-bold text-industry-blue">Standard</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Dye Penetrant Testing (PT)</span>
                        <span className="font-bold text-industry-orange">Available</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Magnetic Particle Testing (MT)</span>
                        <span className="font-bold text-industry-blue">Available</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Radiographic Testing (RT)</span>
                        <span className="font-bold text-industry-orange">Partner Network</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Ultrasonic Testing (UT)</span>
                        <span className="font-bold text-industry-blue">Partner Network</span>
                      </div>
                      
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between items-center p-3 bg-industry-orange/20 rounded-lg border border-industry-orange/40">
                          <span className="text-sm font-medium">Quality Guarantee</span>
                          <span className="text-lg font-bold text-industry-orange">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-200 mb-6">Trust your critical welding applications to AWS-certified professionals with comprehensive quality assurance.</p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  >
                    Request Quality Documentation
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Complete Fabrication Workflow
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Professional welding is the cornerstone of quality fabrication. From precision cutting to final finishing, we provide comprehensive manufacturing services to deliver complete assemblies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/engineering" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Engineering</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Optimize weld joint design for strength, efficiency, and manufacturability.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/laser-cutting-bending" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">✂️</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Laser Cutting & Bending</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Precision preparation of parts for optimal weld fit-up and quality.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/smart-sourcing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Smart Sourcing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Certified welding materials and consumables for optimal joint performance.</p>
                  <div className="mt-4 text-xs text-industry-orange font-medium group-hover:text-industry-orange/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/finishing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Finishing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Professional surface treatments and coatings for welded assemblies.</p>
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
              Ready for Certified Welding Excellence?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Trust your critical joints to AWS D1.1 certified welders. From structural assemblies to precision components, we deliver the strength and reliability your applications demand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
              >
                <span>Get Welding Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <span>Discuss Project Specs</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1.586l-4 4z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}