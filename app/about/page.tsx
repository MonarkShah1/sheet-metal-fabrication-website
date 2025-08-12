import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Reliable Sheet Metal Outsourcing in Ontario',
  description: 'Founded in 1992, we solve sheet metal basics with unshakeable reliability. Learn our story, values, and commitment to manufacturing fundamentals. Current management since 2019.',
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero/Introduction Section */}
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
              <span className="text-industry-blue mr-2">🏭</span>
              <span className="text-sm font-medium">Since 1992</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solving Sheet Metal Basics with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Unshakeable Reliability</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Our Story: Over three decades of mastering manufacturing fundamentals, eliminating supplier headaches, 
              and delivering truth in execution for multinational companies across Ontario.
            </p>
            
            {/* Core Values Preview */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>Relentless Refinement</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔧</span>
                <span>Mastery of Fundamentals</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                <span>Truth in Execution</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/quote" as any}
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Get Straightforward Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">📅</span>
                <span className="text-sm font-medium text-industry-dark">Our Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Our Journey in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Sheet Metal Fabrication</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                Three decades of continuous improvement, solving the basics, and eliminating supplier headaches through proven fundamentals.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-industry-blue/20"></div>
              
              <div className="space-y-16">
                {/* 1992 - Founded */}
                <div className="flex items-center relative">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up">
                      <div className="text-2xl font-bold text-industry-blue mb-2">1992</div>
                      <h3 className="text-lg font-semibold text-industry-dark mb-3">Founded on Fundamentals</h3>
                      <p className="text-industry-gray-600 text-sm">
                        Started with a clear mission: master the basics of sheet metal fabrication. 
                        Focus on proven processes, quality control, and solving real manufacturing problems.
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-industry-blue rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="text-industry-gray-500 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-industry-blue rounded-full"></span>
                        <span>Manufacturing fundamentals established</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2019 - Management Buyout */}
                <div className="flex items-center relative">
                  <div className="w-1/2 pr-8">
                    <div className="text-industry-gray-500 text-sm text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <span>Relentless refinement phase begins</span>
                        <span className="w-2 h-2 bg-industry-orange rounded-full"></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-industry-orange rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                      <div className="text-2xl font-bold text-industry-orange mb-2">2019</div>
                      <h3 className="text-lg font-semibold text-industry-dark mb-3">Current Management Takes Over</h3>
                      <p className="text-industry-gray-600 text-sm">
                        Bought out by management team committed to relentless refinement. 
                        Focused on eliminating supplier headaches and delivering unshakeable reliability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 - Plant Expansion */}
                <div className="flex items-center relative">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '400ms'}}>
                      <div className="text-2xl font-bold text-industry-blue mb-2">2024</div>
                      <h3 className="text-lg font-semibold text-industry-dark mb-3">Plant Expansion</h3>
                      <p className="text-industry-gray-600 text-sm">
                        Expanded facilities to meet growing demand while maintaining quality standards. 
                        Investment in proven equipment and processes for enhanced reliability.
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-industry-blue rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="text-industry-gray-500 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-industry-blue rounded-full"></span>
                        <span>Growth through proven fundamentals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values and Mission Section */}
        <section className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
                <span className="text-industry-orange mr-2">⚡</span>
                <span className="text-sm font-medium">Our Guiding Principles</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Core Values &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Mission</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                These principles guide everything we do, from customer interactions to manufacturing processes.
              </p>
              
              <div className="bg-industry-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-industry-gray-700 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-industry-orange">Our Core Focus</h3>
                <p className="text-gray-300 text-lg">
                  <strong>Solve the basics for all of manufacturing in sheet metal fabrication.</strong>
                  <br />
                  We eliminate supplier headaches by mastering fundamentals that others overlook.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 text-center animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Relentless Refinement</h3>
                <p className="text-gray-300 leading-relaxed">
                  We continuously improve every process, from initial design to final delivery, 
                  never settling for &quot;good enough&quot; when excellence is achievable.
                </p>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-orange transition-colors">Mastery of Fundamentals</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep expertise in proven manufacturing processes, quality control, and material science 
                  forms the foundation of every project we undertake.
                </p>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Truth in Execution</h3>
                <p className="text-gray-300 leading-relaxed">
                  No hidden fees, no surprises, no broken promises. Complete transparency 
                  in pricing, timelines, and capabilities builds lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Long-Term Goals Section */}
        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                  <span className="text-industry-blue mr-2">🚀</span>
                  <span className="text-sm font-medium text-industry-dark">Looking Ahead</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                  Vision for the
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Future</span>
                </h2>
                
                <p className="text-lg text-industry-gray-600 mb-6">
                  Our vision extends beyond solving today&apos;s manufacturing challenges. 
                  We&apos;re building the foundation for a network of facilities that will serve 
                  every major manufacturing hub with unshakeable reliability.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-industry-blue text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark">Strategic Expansion</h4>
                      <p className="text-industry-gray-600 text-sm">
                        Facilities in every major manufacturing hub by 2050, 
                        totaling 4.2 million sq ft of manufacturing excellence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-industry-orange/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-industry-orange text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark">Maintained Standards</h4>
                      <p className="text-industry-gray-600 text-sm">
                        Every facility will maintain the same commitment to fundamentals, 
                        ensuring consistent quality regardless of location.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-industry-blue/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-industry-blue text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industry-dark">Customer Benefits</h4>
                      <p className="text-industry-gray-600 text-sm">
                        Reduced lead times, local support, and the same trusted processes 
                        across all locations for ultimate convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-industry-orange text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark mb-4">2050 Vision</h3>
                  <div className="text-3xl font-bold text-industry-blue mb-2">4.2M</div>
                  <p className="text-industry-gray-600 text-sm mb-6">
                    Square feet of manufacturing facilities across major industrial hubs
                  </p>
                  
                  <div className="bg-industry-light p-4 rounded-lg">
                    <p className="text-industry-gray-700 text-sm italic">
                      &quot;Every multinational company will have access to the same proven fundamentals 
                      and unshakeable reliability, regardless of their location.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-20 px-6 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🌟</span>
                <span className="text-sm font-medium text-industry-dark">Why We&apos;re Different</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                What Sets Us
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Apart</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                Our unique approach eliminates the frustrations typically associated with sheet metal outsourcing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-industry-light p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-blue/30 hover:-translate-y-2 animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">Manufacturing Simplified</h3>
                <p className="text-industry-gray-600 mb-4 leading-relaxed">
                  We eliminate complexity by focusing on proven processes and clear communication. 
                  No confusing jargon, no hidden complications.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Clear, upfront pricing
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Transparent timelines
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Simplified processes
                  </li>
                </ul>
              </div>

              <div className="group bg-industry-light p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-orange/30 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-orange transition-colors">Think like an OEM</h3>
                <p className="text-industry-gray-600 mb-4 leading-relaxed">
                  We approach every project with the same mindset as original equipment manufacturers: 
                  precision, reliability, and long-term thinking.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Design for manufacturability
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Quality-first approach
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                    Long-term partnerships
                  </li>
                </ul>
              </div>

              <div className="group bg-industry-light p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-blue/30 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">Unshakeable Reliability</h3>
                <p className="text-industry-gray-600 mb-4 leading-relaxed">
                  Consistent quality, on-time delivery, and dependable execution are not just promises—
                  they&apos;re the foundation of everything we do.
                </p>
                <ul className="space-y-2 text-sm text-industry-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    98% on-time delivery
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Consistent quality control
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-2"></span>
                    Dependable partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-6 bg-industry-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">👥</span>
                <span className="text-sm font-medium text-industry-dark">Meet Our Team</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Leadership Team
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Committed to Excellence</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                Our experienced leadership team brings decades of manufacturing expertise and unwavering commitment to fundamentals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow text-center animate-slide-up">
                <div className="w-24 h-24 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-industry-blue text-2xl">👔</span>
                </div>
                <h3 className="text-xl font-semibold text-industry-dark mb-2">Operations Director</h3>
                <p className="text-industry-orange font-medium mb-4">Manufacturing Excellence</p>
                <p className="text-industry-gray-600 text-sm leading-relaxed">
                  25+ years in sheet metal fabrication, specializing in process optimization 
                  and quality control systems that ensure unshakeable reliability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow text-center animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-24 h-24 bg-industry-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-industry-orange text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-industry-dark mb-2">Engineering Manager</h3>
                <p className="text-industry-blue font-medium mb-4">Technical Leadership</p>
                <p className="text-industry-gray-600 text-sm leading-relaxed">
                  Expert in design for manufacturability and precision engineering, 
                  ensuring every project meets OEM-level standards from concept to completion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow text-center animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-24 h-24 bg-industry-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-industry-blue text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-industry-dark mb-2">Quality Assurance Lead</h3>
                <p className="text-industry-orange font-medium mb-4">Standards & Compliance</p>
                <p className="text-industry-gray-600 text-sm leading-relaxed">
                  Certified in ISO 9001 and AWS D1.1 standards, responsible for maintaining 
                  the quality control processes that define our truth in execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities and Certifications Section */}
        <section className="py-20 px-6 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/10 border border-industry-orange/20 mb-6">
                <span className="text-industry-orange mr-2">🏆</span>
                <span className="text-sm font-medium text-industry-dark">Our Expertise</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Capabilities &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Standards</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                Comprehensive manufacturing capabilities backed by industry certifications and proven quality standards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-industry-light p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark">Manufacturing Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-industry-dark mb-2">Precision Cutting</h4>
                    <ul className="space-y-1 text-sm text-industry-gray-600">
                      <li>• Laser cutting (up to 1&quot; thick)</li>
                      <li>• Profile cutting & bending</li>
                      <li>• ±0.001&quot; tolerance achievable</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-industry-dark mb-2">Certified Welding</h4>
                    <ul className="space-y-1 text-sm text-industry-gray-600">
                      <li>• AWS D1.1 certified processes</li>
                      <li>• TIG, MIG, and spot welding</li>
                      <li>• Quality control tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-industry-dark mb-2">Engineering Support</h4>
                    <ul className="space-y-1 text-sm text-industry-gray-600">
                      <li>• Design for manufacturability</li>
                      <li>• CAD/CAM integration</li>
                      <li>• OEM-level thinking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-industry-dark mb-2">Finishing Services</h4>
                    <ul className="space-y-1 text-sm text-industry-gray-600">
                      <li>• Powder coating</li>
                      <li>• Surface treatments</li>
                      <li>• Quality inspection</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href={"/services" as any}
                    className="inline-flex items-center text-industry-blue hover:text-industry-blue/80 font-medium"
                  >
                    View All Services
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-industry-light p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">🏅</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark">Certifications & Standards</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-industry-dark">ISO 9001:2015</span>
                      <span className="text-industry-blue text-sm">Quality Management</span>
                    </div>
                    <p className="text-sm text-industry-gray-600">
                      Certified quality management system ensuring consistent processes and continuous improvement.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-industry-dark">AWS D1.1</span>
                      <span className="text-industry-orange text-sm">Welding Standards</span>
                    </div>
                    <p className="text-sm text-industry-gray-600">
                      American Welding Society structural welding code compliance for critical applications.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-industry-dark">Material Certifications</span>
                      <span className="text-industry-blue text-sm">Traceability</span>
                    </div>
                    <p className="text-sm text-industry-gray-600">
                      Full material traceability and certification for all alloys and specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-industry-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">💬</span>
                <span className="text-sm font-medium text-industry-dark">Partner Feedback</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                What Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Partners Say</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                Real feedback from multinational companies who trust us with their sheet metal fabrication needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">🏭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-industry-dark">Manufacturing Director</h4>
                    <p className="text-industry-gray-600 text-sm">Automotive OEM</p>
                  </div>
                </div>
                <p className="text-industry-gray-700 mb-4 italic">
                  &quot;Finally, a fabricator that actually delivers what they promise. No surprises, 
                  no delays, just consistent quality. Their understanding of manufacturing fundamentals 
                  is exactly what we needed.&quot;
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-industry-orange">⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-industry-dark">Engineering Manager</h4>
                    <p className="text-industry-gray-600 text-sm">Industrial Equipment</p>
                  </div>
                </div>
                <p className="text-industry-gray-700 mb-4 italic">
                  &quot;Their engineering support saved us months of development time. They think like 
                  OEMs and understand what it takes to make designs truly manufacturable. 
                  Unshakeable reliability is not just marketing.&quot;
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-industry-orange">⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-industry-dark">Procurement Director</h4>
                    <p className="text-industry-gray-600 text-sm">Medical Device</p>
                  </div>
                </div>
                <p className="text-industry-gray-700 mb-4 italic">
                  &quot;Working with them eliminated our supplier headaches. Truth in execution means 
                  no hidden costs, accurate timelines, and consistent quality. 
                  They&apos;ve become our trusted partner for all sheet metal needs.&quot;
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-industry-orange">⭐</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up" style={{animationDelay: '600ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-industry-dark">Operations Manager</h4>
                    <p className="text-industry-gray-600 text-sm">Aerospace Components</p>
                  </div>
                </div>
                <p className="text-industry-gray-700 mb-4 italic">
                  &quot;Their mastery of fundamentals shows in every part. Tolerances are consistently 
                  met, certifications are always current, and delivery is exactly when promised. 
                  This is what reliable manufacturing looks like.&quot;
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-industry-orange">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
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
              Experience Manufacturing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Simplified</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join the growing number of companies who have eliminated supplier headaches by partnering with us. 
              Experience the difference of proven fundamentals and unshakeable reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/quote" as any}
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Get Straightforward Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link
                href={"/contact" as any}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300"
              >
                <span>Contact Expert</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}