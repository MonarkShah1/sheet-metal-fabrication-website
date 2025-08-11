import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateServiceMetadata('smart-sourcing')

export default function SmartSourcingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat opacity-30"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border border-industry-orange/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-industry-blue/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
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
              <span className="text-white">Smart Sourcing</span>
            </nav>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
              <span className="text-industry-orange mr-2">🔗</span>
              <span className="text-sm font-medium">Supply Chain Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Sourcing: Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Simplified</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Streamline your metal sourcing with our strategic supply chain management. We leverage bulk purchasing power and certified supplier networks to reduce costs and ensure quality materials in Ontario.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">💰</span>
                <span>Cost Optimization</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🏭</span>
                <span>Certified Suppliers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📦</span>
                <span>Inventory Management</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>Faster Lead Times</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
                aria-label="Get smart sourcing quote"
              >
                <span>Optimize Your Supply Chain</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Discuss sourcing strategy"
              >
                <span>Discuss Strategy</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Material Selection Guide Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🔍</span>
                <span className="text-sm font-medium text-industry-orange">Material Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Strategic Material Selection
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto mb-12">
                Choose the right materials for your application with our comprehensive selection guide. We source premium metals from certified suppliers across Canada and internationally, ensuring quality and competitive pricing.
              </p>
            </div>
            
            {/* Material Comparison Table */}
            <div className="bg-industry-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-industry-dark mb-8 text-center">Material Selection Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-industry-gray-300">
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Material</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Strength</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Corrosion Resistance</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Weldability</th>
                      <th className="text-center py-4 px-6 font-semibold text-industry-dark">Cost</th>
                      <th className="text-left py-4 px-6 font-semibold text-industry-dark">Best Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-industry-gray-200 hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Mild Steel</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center text-green-600 font-medium">$</td>
                      <td className="py-4 px-6 text-industry-gray-600">General fabrication, structural components</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Stainless Steel 304</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center text-orange-600 font-medium">$$$</td>
                      <td className="py-4 px-6 text-industry-gray-600">Food processing, medical devices</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Aluminum 6061</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center text-yellow-600 font-medium">$$</td>
                      <td className="py-4 px-6 text-industry-gray-600">Aerospace, automotive, marine</td>
                    </tr>
                    <tr className="border-b border-industry-gray-200 hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-medium text-industry-dark">Galvanized Steel</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                      <td className="py-4 px-6 text-center">⭐⭐</td>
                      <td className="py-4 px-6 text-center text-yellow-600 font-medium">$$</td>
                      <td className="py-4 px-6 text-industry-gray-600">Outdoor structures, HVAC systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white border border-industry-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Quality Certifications</h3>
                <p className="text-industry-gray-600 text-sm">All materials come with mill test certificates and comply with ASTM, CSA, and international standards.</p>
              </div>
              
              <div className="bg-white border border-industry-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Fast Delivery</h3>
                <p className="text-industry-gray-600 text-sm">Local inventory and strategic partnerships ensure materials arrive when you need them.</p>
              </div>
              
              <div className="bg-white border border-industry-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-industry-dark mb-2">Volume Pricing</h3>
                <p className="text-industry-gray-600 text-sm">Bulk purchasing power means significant cost savings passed directly to you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Network Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                  <span className="text-industry-blue mr-2">🌐</span>
                  <span className="text-sm font-medium text-industry-blue">Global Network</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                  Trusted Supplier Network
                </h2>
                
                <p className="text-lg text-industry-gray-600 mb-8">
                  Our established relationships with certified suppliers across North America and internationally ensure reliable access to quality materials at competitive prices. We manage vendor relationships so you can focus on your core business.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-industry-blue text-sm font-bold">15+</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Years of Partnerships</h3>
                      <p className="text-industry-gray-600">Long-term relationships with key suppliers ensure priority access and competitive pricing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-industry-orange/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-industry-orange text-sm font-bold">ISO</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Certified Quality</h3>
                      <p className="text-industry-gray-600">All suppliers meet or exceed ISO 9001 quality standards with full traceability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-industry-blue text-sm font-bold">24h</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Rapid Response</h3>
                      <p className="text-industry-gray-600">Emergency material sourcing available with expedited delivery options.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-industry-dark mb-6 text-center">Regional Coverage Map</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-industry-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-industry-blue rounded-full mr-3"></div>
                      <span className="font-medium text-industry-dark">Ontario</span>
                    </div>
                    <span className="text-sm text-industry-gray-600">Primary Hub</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-industry-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-industry-orange rounded-full mr-3"></div>
                      <span className="font-medium text-industry-dark">Quebec</span>
                    </div>
                    <span className="text-sm text-industry-gray-600">Secondary Supply</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-industry-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-industry-blue rounded-full mr-3"></div>
                      <span className="font-medium text-industry-dark">Western Canada</span>
                    </div>
                    <span className="text-sm text-industry-gray-600">Regional Partners</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-industry-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-industry-orange rounded-full mr-3"></div>
                      <span className="font-medium text-industry-dark">US Midwest</span>
                    </div>
                    <span className="text-sm text-industry-gray-600">Cross-Border Access</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-industry-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-industry-blue rounded-full mr-3"></div>
                      <span className="font-medium text-industry-dark">International</span>
                    </div>
                    <span className="text-sm text-industry-gray-600">Specialty Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Savings Calculator Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-industry-gradient text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-industry-orange mr-2">💰</span>
                  <span className="text-sm font-medium">Cost Analysis</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Potential Savings Calculator
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-lg text-gray-200 mb-8">
                      See how much you could save with our smart sourcing approach. Based on typical customer results, companies reduce their material costs by 15-30% while improving quality and delivery times.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Volume Discounts</span>
                          <span className="text-lg font-bold text-industry-orange">15-25%</span>
                        </div>
                        <p className="text-xs text-gray-300">Bulk purchasing power reduces per-unit costs</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Reduced Lead Times</span>
                          <span className="text-lg font-bold text-industry-blue">40-60%</span>
                        </div>
                        <p className="text-xs text-gray-300">Local inventory and strategic partnerships</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Quality Improvements</span>
                          <span className="text-lg font-bold text-industry-orange">99.5%</span>
                        </div>
                        <p className="text-xs text-gray-300">Certified suppliers with full traceability</p>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Administrative Savings</span>
                          <span className="text-lg font-bold text-industry-blue">50-70%</span>
                        </div>
                        <p className="text-xs text-gray-300">Single point of contact for all materials</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="font-bold mb-6 text-center">Example Cost Comparison</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Current Annual Spend</span>
                        <span className="font-bold">$100,000</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm">Smart Sourcing Discount</span>
                        <span className="font-bold text-industry-orange">20%</span>
                      </div>
                      
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between items-center p-3 bg-industry-orange/20 rounded-lg border border-industry-orange/40">
                          <span className="text-sm font-medium">Annual Savings</span>
                          <span className="text-xl font-bold text-industry-orange">$20,000</span>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-xs text-gray-300 mb-4">Plus reduced lead times, improved quality, and simplified procurement</p>
                        <Link
                          href="/quote"
                          className="inline-flex items-center px-6 py-3 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 text-sm"
                        >
                          Calculate Your Savings
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
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
                Complete Supply Chain Solution
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Smart sourcing is just one part of our comprehensive approach. From material procurement to finished products, we manage every step of your manufacturing process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/engineering" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Engineering</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Design optimization and material selection guidance for your projects.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/laser-cutting-bending" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">✂️</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Laser Cutting & Bending</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Precision manufacturing of your sourced materials with advanced technology.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/welding" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔥</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Welding</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Professional joining services for your quality-sourced materials.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/finishing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Finishing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Complete your supply chain with professional surface treatments.</p>
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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Discover how our smart sourcing solutions can reduce costs, improve quality, and streamline your procurement process. Get started with a free supply chain analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
              >
                <span>Analyze Your Savings</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <span>Discuss Your Needs</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}