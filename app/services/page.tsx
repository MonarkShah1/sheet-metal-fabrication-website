import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliable Sheet Metal Fabrication Services | Proven Manufacturing Fundamentals',
  description: 'Complete sheet metal fabrication services with proven fundamentals. Laser cutting, welding, forming, and finishing with unshakeable reliability for engineers and OEMs.',
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
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
              Complete Sheet Metal Fabrication Services
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              From concept to completion, we provide comprehensive sheet metal fabrication services 
              with proven fundamentals, reliable execution, and unshakeable quality.
            </p>
          </div>
        </section>

        <section id="cutting" className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-industry-dark mb-6">Laser Cutting: Mastered Fundamentals</h2>
                <p className="text-lg text-industry-gray-600 mb-6">
                  Proven laser cutting processes for precision parts with complex geometries 
                  and tight tolerances. Our refined systems handle various materials and thicknesses.
                </p>
                <ul className="space-y-3 text-industry-gray-700">
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    Materials: Steel, Stainless Steel, Aluminum, Copper, Brass
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    Thickness: Up to 1&quot; depending on material
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    Tolerance: ±0.005&quot; standard, tighter available
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    Maximum size: 60&quot; x 120&quot;
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-industry-dark">Common Applications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-industry-dark">Industrial</h4>
                    <ul className="space-y-1 text-industry-gray-600">
                      <li>• Enclosures</li>
                      <li>• Brackets</li>
                      <li>• Panels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-industry-dark">Commercial</h4>
                    <ul className="space-y-1 text-industry-gray-600">
                      <li>• Signage</li>
                      <li>• Displays</li>
                      <li>• Fixtures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="forming" className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-industry-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Equipment & Capabilities</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Press Brake Capacity:</span>
                    <span className="font-medium text-industry-orange">200 tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bed Length:</span>
                    <span className="font-medium text-industry-orange">12 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bend Radius:</span>
                    <span className="font-medium text-industry-orange">0.5mm - 25mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Angle Accuracy:</span>
                    <span className="font-medium text-industry-orange">±0.5°</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Metal Forming Excellence</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Expert metal forming services including press brake operations, rolling, and stamping. 
                  We create complex shapes and assemblies with consistent quality through proven fundamentals.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    Press brake bending with precise angle control
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    Rolling and cylinder forming
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    Stamping and punching operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    Custom tooling design and fabrication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
                <span className="text-sm font-medium text-industry-dark">Welding Excellence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-industry-dark">
                Professional Welding
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Services</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Certified welders using proven techniques for strong, reliable joints on all project types through mastered fundamentals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-blue/30 hover:-translate-y-2 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">TIG Welding</h3>
                <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                  Precise tungsten inert gas welding for high-quality, clean welds on thin materials through proven processes.
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
                    Precise control
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
                  Metal inert gas welding for production efficiency and strong structural joints with reliable execution.
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
                  Resistance spot welding for sheet metal assemblies and high-volume production with consistent results.
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
                    Proven processes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
                <span className="text-sm font-medium">Finishing Excellence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
                Professional Finishing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Services</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Complete your project with professional finishing services for durability and appearance through proven methods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-industry-blue transition-colors">Powder Coating</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Durable, environmentally friendly finish in hundreds of colors through proven processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Corrosion resistance
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Color options
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Eco-friendly
                  </li>
                </ul>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-industry-orange transition-colors">Plating</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Zinc, chrome, and nickel plating for corrosion protection through reliable methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Corrosion protection
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Wear resistance
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Decorative options
                  </li>
                </ul>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-industry-blue transition-colors">Anodizing</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Aluminum anodizing for enhanced durability and appearance through proven techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Aluminum only
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Color options
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Hardness increase
                  </li>
                </ul>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '600ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-industry-orange transition-colors">Passivation</h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Stainless steel passivation for maximum corrosion resistance through refined processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Stainless steel
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Corrosion resistance
                  </li>
                  <li className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Medical grade
                  </li>
                </ul>
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
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Get Straightforward Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a
                href="/contact"
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
      </main>
      <Footer />
    </>
  )
}