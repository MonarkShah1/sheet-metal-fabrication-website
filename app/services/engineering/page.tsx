import Link from 'next/link'
import { generateServiceMetadata } from '@/config/seo-metadata'
import { businessInfo } from '@/config/business-info'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateServiceMetadata('engineering'),
  alternates: {
    canonical: `${businessInfo.url}/services/engineering`,
  },
}

export default function EngineeringPage() {
  const breadcrumbItems = [
    { name: 'Home', url: businessInfo.url },
    { name: 'Services', url: `${businessInfo.url}/services` },
    { name: 'Engineering Support', url: `${businessInfo.url}/services/engineering` }
  ]

  const structuredData = [
    generateBreadcrumbSchema(breadcrumbItems),
    generateServiceSchema({
      name: 'Engineering Support & Design for Manufacturing',
      description: 'Engineering support for sheet metal projects. CAD/CAM integration, design optimization, prototyping, and manufacturability analysis in Ontario.',
      url: `${businessInfo.url}/services/engineering`,
      image: `${businessInfo.url}/images/engineering-service.jpg`,
      areaServed: businessInfo.areaServed
    })
  ]

  return (
    <>
      <StructuredDataScript data={structuredData} />
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
            <Breadcrumbs items={breadcrumbItems} className="mb-8" />
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
              <span className="text-industry-blue mr-2">🔧</span>
              <span className="text-sm font-medium">Design for Manufacturing Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering Support: Think Like an
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> OEM</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Transform your concepts into manufacturable designs with our expert DFM engineering support. We optimize for cost, quality, and producibility from day one, ensuring your designs are ready for efficient manufacturing.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📐</span>
                <span>Design Optimization</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔄</span>
                <span>Rapid Prototyping</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">💰</span>
                <span>Cost Reduction</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>Faster Time to Market</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
                aria-label="Get engineering design quote"
              >
                <span>Get Engineering Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Discuss your engineering project"
              >
                <span>Discuss Your Project</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Design Optimization Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                  <span className="text-industry-blue mr-2">📐</span>
                  <span className="text-sm font-medium text-industry-blue">Design for Manufacturing</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                  Optimize Every Design Decision
                </h2>
                
                <p className="text-lg text-industry-gray-600 mb-6">
                  Our engineering team works with SolidWorks, AutoCAD, and advanced CAM software to optimize your designs for manufacturing efficiency. We identify cost-saving opportunities early in the design phase, reducing material waste and manufacturing complexity while maintaining structural integrity and functionality.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-industry-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Material Optimization</h3>
                      <p className="text-industry-gray-600">Minimize waste through intelligent nesting and material selection guidance, reducing costs by up to 30%.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-industry-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Tolerance Analysis</h3>
                      <p className="text-industry-gray-600">Ensure manufacturability while maintaining critical dimensions and fit requirements with precision engineering.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-industry-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-industry-dark mb-1">Process Selection</h3>
                      <p className="text-industry-gray-600">Choose the most cost-effective manufacturing processes for your requirements, from laser cutting to welding.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-industry-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-industry-dark mb-6">Engineering Tools & Software</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">🖥️</div>
                    <div className="font-semibold text-industry-dark">SolidWorks</div>
                    <div className="text-sm text-industry-gray-600">3D CAD Design</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">📐</div>
                    <div className="font-semibold text-industry-dark">AutoCAD</div>
                    <div className="text-sm text-industry-gray-600">2D Technical Drawings</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="font-semibold text-industry-dark">CAM Software</div>
                    <div className="text-sm text-industry-gray-600">Manufacturing Optimization</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-industry-gray-200">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="font-semibold text-industry-dark">FEA Analysis</div>
                    <div className="text-sm text-industry-gray-600">Stress Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototyping Process Section */}
        <section className="py-20 px-6 bg-industry-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🔄</span>
                <span className="text-sm font-medium text-industry-orange">Rapid Prototyping</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                From Concept to Prototype in Days
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Our streamlined prototyping process validates your design concepts quickly and cost-effectively, identifying potential issues before full production and saving you time and money.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="w-8 h-1 bg-industry-blue mx-auto mb-4"></div>
                <h3 className="font-bold text-industry-dark mb-2">1. Design Review</h3>
                <p className="text-industry-gray-600 text-sm">Comprehensive analysis of CAD files for manufacturability, optimization opportunities, and potential issues.</p>
                <div className="text-xs text-industry-blue mt-2 font-medium">24-48 hours</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="w-8 h-1 bg-industry-orange mx-auto mb-4"></div>
                <h3 className="font-bold text-industry-dark mb-2">2. Rapid Manufacturing</h3>
                <p className="text-industry-gray-600 text-sm">Produce functional prototype using laser cutting, forming, and welding processes with production-grade materials.</p>
                <div className="text-xs text-industry-orange mt-2 font-medium">2-5 days</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="w-8 h-1 bg-industry-blue mx-auto mb-4"></div>
                <h3 className="font-bold text-industry-dark mb-2">3. Testing & Validation</h3>
                <p className="text-industry-gray-600 text-sm">Comprehensive verification of fit, function, and performance against design requirements and specifications.</p>
                <div className="text-xs text-industry-blue mt-2 font-medium">1-2 days</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="w-8 h-1 bg-industry-orange mx-auto mb-4"></div>
                <h3 className="font-bold text-industry-dark mb-2">4. Optimization Report</h3>
                <p className="text-industry-gray-600 text-sm">Detailed recommendations for production optimization, cost reduction, and design improvements.</p>
                <div className="text-xs text-industry-orange mt-2 font-medium">1 day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-industry-gradient text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-industry-orange mr-2">💼</span>
                  <span className="text-sm font-medium">Success Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  35% Cost Reduction Through Design Optimization
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-200 mb-6">
                      A leading automotive supplier approached us with a complex bracket design that was proving expensive to manufacture. Through our comprehensive engineering optimization process, we redesigned the component to reduce material usage, simplify manufacturing steps, and maintain structural integrity—all while improving functionality.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">The Challenge</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Complex geometry requiring multiple operations</li>
                          <li>• High material waste from irregular shapes</li>
                          <li>• Tight tolerances increasing rejection rates</li>
                          <li>• Long lead times affecting production schedules</li>
                          <li>• High tooling costs for specialized fixtures</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Our Solution</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Redesigned for single-operation manufacturing</li>
                          <li>• Optimized nesting to reduce material waste</li>
                          <li>• Relaxed non-critical tolerances</li>
                          <li>• Integrated features to eliminate assembly steps</li>
                          <li>• Standardized fixturing for faster setup</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="font-bold mb-4">Results Achieved</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Cost Reduction</span>
                          <span className="text-sm font-bold text-industry-orange">35%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-industry-orange h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Material Savings</span>
                          <span className="text-sm font-bold text-industry-blue">28%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-industry-blue h-2 rounded-full" style={{width: '28%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Lead Time Reduction</span>
                          <span className="text-sm font-bold text-industry-orange">50%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-industry-orange h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Quality Improvement</span>
                          <span className="text-sm font-bold text-industry-blue">99.8%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-industry-blue h-2 rounded-full" style={{width: '99.8%'}}></div>
                        </div>
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
                Complete Manufacturing Solution
              </h2>
              <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
                Engineering is just the beginning. We provide end-to-end manufacturing services to bring your optimized designs to life with unshakeable reliability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/smart-sourcing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Smart Sourcing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Optimize your supply chain with strategic material sourcing and vendor management.</p>
                  <div className="mt-4 text-xs text-industry-orange font-medium group-hover:text-industry-orange/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/laser-cutting-bending" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">✂️</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Laser Cutting & Bending</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Precise manufacturing of your optimized designs with advanced laser cutting technology.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/welding" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-blue/30 transition-colors">
                    <span className="text-industry-blue text-2xl">🔥</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Welding</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">AWS-certified welding services to join your components with unshakeable reliability.</p>
                  <div className="mt-4 text-xs text-industry-blue font-medium group-hover:text-industry-blue/80">Learn More →</div>
                </div>
              </Link>
              
              <Link href="/services/finishing" className="group">
                <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-industry-orange/30 transition-colors">
                    <span className="text-industry-orange text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold text-industry-dark mb-2">Finishing</h3>
                  <p className="text-sm text-industry-gray-600 flex-grow">Professional surface treatments to protect and enhance your manufactured components.</p>
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
              Ready to Optimize Your Design?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our engineering experts transform your concept into a manufacturable, cost-effective solution. Get started with a free design review and discover how we can improve your product.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 shadow-industry-lg hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-orange focus:ring-opacity-50"
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}