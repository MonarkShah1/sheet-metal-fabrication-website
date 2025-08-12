import Link from 'next/link'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateServiceMetadata('laser-cutting-bending')

export default function LaserCuttingBendingPage() {
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
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-industry-blue rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-industry-blue rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-white">Laser Cutting & Bending</span>
            </nav>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
              <span className="text-industry-blue mr-2">✂️</span>
              <span className="text-sm font-medium">Advanced Manufacturing Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">Precision</span> Laser Cutting & Bending
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              State-of-the-art laser cutting and CNC press brake bending services in Mississauga. From prototype to production, we deliver tight tolerances and complex geometries with unmatched precision and speed.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🎯</span>
                <span>±0.1mm Tolerance</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>24-Hour Turnaround</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📏</span>
                <span>Up to 1&quot; Thickness</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔧</span>
                <span>Complex Geometries</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
                aria-label="Get laser cutting quote"
              >
                <span>Get Precision Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Discuss cutting requirements"
              >
                <span>Technical Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Equipment Specifications Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">⚙️</span>
                <span className="text-sm font-medium text-industry-blue">Advanced Equipment</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Bodor 6000KW Fiber Laser Technology
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto mb-12">
                Our state-of-the-art Bodor 6000KW fiber laser system delivers unmatched cutting speed and precision. Combined with advanced CNC press brake technology, we handle everything from intricate prototypes to high-volume production runs.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-industry-dark mb-8">Laser Cutting Capabilities</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue text-xl font-bold">6kW</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Fiber Laser Power</h4>
                      <p className="text-industry-gray-600">High-speed cutting with superior edge quality and minimal heat-affected zone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange text-xl font-bold">1&quot;</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Maximum Thickness</h4>
                      <p className="text-industry-gray-600">Cut through steel up to 25mm (1 inch) thick with precision and speed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-blue text-sm font-bold">±0.1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Precision Tolerance</h4>
                      <p className="text-industry-gray-600">Achieve ±0.1mm accuracy for critical dimensions and complex geometries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-industry-orange text-sm font-bold">4x8</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark mb-1">Bed Size (feet)</h4>
                      <p className="text-industry-gray-600">Large format cutting capability for sheets up to 4&apos; x 8&apos; standard size.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-industry-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-industry-dark mb-6">Material Compatibility</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">🔩</div>
                    <div className="font-semibold text-industry-dark text-sm">Mild Steel</div>
                    <div className="text-xs text-industry-gray-600">Up to 1&quot; thick</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-semibold text-industry-dark text-sm">Stainless Steel</div>
                    <div className="text-xs text-industry-gray-600">304, 316, 430</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold text-industry-dark text-sm">Aluminum</div>
                    <div className="text-xs text-industry-gray-600">5052, 6061</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="font-semibold text-industry-dark text-sm">Galvanized</div>
                    <div className="text-xs text-industry-gray-600">Zinc coated</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-industry-blue/10 rounded-lg border border-industry-blue/20">
                  <h4 className="font-semibold text-industry-blue mb-2">Specialty Materials</h4>
                  <p className="text-sm text-industry-gray-700">Titanium, Inconel, brass, copper, and other exotic alloys available on request.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tolerance Capabilities Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">📏</span>
                <span className="text-sm font-medium text-industry-orange">Precision Engineering</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Tolerance Capabilities & Quality Standards
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Our precision equipment and quality control processes ensure consistent results that meet the most demanding specifications for Toronto and Ontario manufacturers.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-industry-dark mb-8 text-center">Tolerance Comparison Chart</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-industry-gray-300">
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Process</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Standard Tolerance</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Tight Tolerance</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Material Thickness</th>
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-industry-gray-200 hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Laser Cutting</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">±0.1mm</td>
                      <td className="py-4 px-6 text-center text-industry-orange font-medium">±0.05mm</td>
                      <td className="py-4 px-6 text-center">0.5mm - 25mm</td>
                      <td className="py-4 px-6 text-industry-gray-600">Precision parts, gaskets, brackets</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">CNC Press Brake</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">±0.2mm</td>
                      <td className="py-4 px-6 text-center text-industry-orange font-medium">±0.1mm</td>
                      <td className="py-4 px-6 text-center">0.8mm - 12mm</td>
                      <td className="py-4 px-6 text-industry-gray-600">Enclosures, chassis, structural components</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Angle Accuracy</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">±0.5°</td>
                      <td className="py-4 px-6 text-center text-industry-orange font-medium">±0.25°</td>
                      <td className="py-4 px-6 text-center">All thicknesses</td>
                      <td className="py-4 px-6 text-industry-gray-600">Precision assemblies, mating parts</td>
                    </tr>
                    <tr className="hover:bg-industry-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Edge Quality</td>
                      <td className="py-4 px-6 text-center text-industry-blue font-medium">Ra 3.2μm</td>
                      <td className="py-4 px-6 text-center text-industry-orange font-medium">Ra 1.6μm</td>
                      <td className="py-4 px-6 text-center">All materials</td>
                      <td className="py-4 px-6 text-industry-gray-600">Weld-ready edges, finishing prep</td>
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
                <h3 className="font-bold text-industry-dark mb-2">Repeatability</h3>
                <p className="text-industry-gray-600 text-sm">Consistent results across production runs with statistical process control and automated quality checks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-industry-gray-200">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Quality Inspection</h3>
                <p className="text-industry-gray-600 text-sm">First article inspection and statistical sampling ensure every part meets your specifications.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-industry-gray-200">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Documentation</h3>
                <p className="text-industry-gray-600 text-sm">Complete traceability with inspection reports, material certifications, and dimensional analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Examples Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-industry-gradient text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-industry-orange mr-2">⚡</span>
                  <span className="text-sm font-medium">Process Transformation</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Traditional vs. Laser Cutting Comparison
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="bg-red-900/20 rounded-2xl p-6 border border-red-400/30 mb-6">
                      <h3 className="font-bold text-red-200 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3 text-sm">❌</span>
                        Traditional Plasma/Torch Cutting
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Wide kerf width (3-5mm)</li>
                        <li>• Large heat-affected zone</li>
                        <li>• Rough edge finish requiring secondary operations</li>
                        <li>• Limited material thickness range</li>
                        <li>• Slower cutting speeds</li>
                        <li>• Higher material waste from wide cuts</li>
                        <li>• Inconsistent edge quality</li>
                        <li>• Limited geometric complexity</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <h4 className="font-bold mb-4 text-center">Traditional Process Results</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-red-300">±0.5mm</div>
                          <div className="text-xs text-gray-300">Typical Tolerance</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-300">Ra 12μm</div>
                          <div className="text-xs text-gray-300">Edge Roughness</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-300">15%</div>
                          <div className="text-xs text-gray-300">Material Waste</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-300">3-5 days</div>
                          <div className="text-xs text-gray-300">Typical Lead Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-green-900/20 rounded-2xl p-6 border border-green-400/30 mb-6">
                      <h3 className="font-bold text-green-200 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3 text-sm">✅</span>
                        Advanced Fiber Laser Cutting
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Narrow kerf width (0.1-0.3mm)</li>
                        <li>• Minimal heat-affected zone</li>
                        <li>• Smooth, weld-ready edge finish</li>
                        <li>• Wide material thickness capability</li>
                        <li>• Ultra-high cutting speeds</li>
                        <li>• Minimal material waste</li>
                        <li>• Consistent, superior edge quality</li>
                        <li>• Complex geometries and tight nesting</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <h4 className="font-bold mb-4 text-center">Laser Process Results</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-300">±0.1mm</div>
                          <div className="text-xs text-gray-300">Precision Tolerance</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-300">Ra 3.2μm</div>
                          <div className="text-xs text-gray-300">Smooth Edge</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-300">5%</div>
                          <div className="text-xs text-gray-300">Material Waste</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-300">24 hrs</div>
                          <div className="text-xs text-gray-300">Rush Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-200 mb-6">Experience the difference precision laser cutting makes for your Ontario manufacturing projects.</p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  >
                    Compare Your Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
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
                Complete Fabrication Solution
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Precision cutting is just the beginning. We provide comprehensive manufacturing services to take your laser-cut parts from raw material to finished assembly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/engineering" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Engineering</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Design optimization for laser cutting efficiency and material usage.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/smart-sourcing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Smart Sourcing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Premium materials sourced and prepared for optimal cutting results.</p>
                  <div className="mt-4 text-xs text-industry-orange font-medium group-hover:text-industry-orange/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/welding" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔥</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Welding</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Join your precision-cut parts with AWS-certified welding expertise.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/finishing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Finishing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Complete your cut parts with professional surface treatments and coatings.</p>
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
              Ready for Precision Cutting?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the speed, precision, and quality of advanced fiber laser cutting. Upload your files today and see how we can transform your manufacturing process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
              >
                <span>Upload CAD Files</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <span>Technical Discussion</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}