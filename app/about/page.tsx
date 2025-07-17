import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Mastering Manufacturing Fundamentals | Industry 4.0 Sheet Metal',
  description: 'Learn about our commitment to proven manufacturing fundamentals, unshakeable reliability, and truth in execution. Industry 4.0 sheet metal fabrication with honest, fundamentals-focused approach.',
}

export default function AboutPage() {
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
              <span className="text-industry-blue mr-2">🏭</span>
              <span className="text-sm font-medium">Proven Manufacturing Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Our Manufacturing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Fundamentals</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              For over 20 years, we have mastered the fundamentals of sheet metal fabrication. 
              Our commitment to proven processes, unshakeable reliability, and truth in execution 
              has earned the trust of engineers, OEMs, and businesses worldwide.
            </p>
            
            {/* Core Values Preview */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>Proven Fundamentals</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔧</span>
                <span>Unshakeable Reliability</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                <span>Truth in Execution</span>
              </div>
            </div>
          </div>
        </section>

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
                  <span className="text-industry-blue mr-2">🎯</span>
                  <span className="text-sm font-medium text-industry-dark">Our Mission</span>
                </div>
                
                <h2 className="text-3xl font-bold text-industry-dark mb-6">
                  Mastering the Fundamentals of
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Manufacturing</span>
                </h2>
                
                <p className="text-lg text-industry-gray-600 mb-6">
                  To provide unshakeable reliability in sheet metal fabrication through proven fundamentals, 
                  transparent processes, and honest execution that consistently exceeds expectations.
                </p>
                
                <p className="text-industry-gray-600 mb-6">
                  We understand the frustrations of traditional fabrication: hidden costs, unpredictable quality, 
                  and broken promises. That&apos;s why we&apos;ve built our business around truth in execution, 
                  mastering the fundamentals, and delivering reliability you can count on.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-industry-blue rounded-full"></div>
                    <span className="text-sm font-medium text-industry-dark">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-industry-orange rounded-full"></div>
                    <span className="text-sm font-medium text-industry-dark">AWS D1.1 Certified</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark">Proven Track Record</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-industry-blue mb-2">10,000+</div>
                    <div className="text-sm text-industry-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-industry-orange mb-2">500+</div>
                    <div className="text-sm text-industry-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-industry-blue mb-2">98%</div>
                    <div className="text-sm text-industry-gray-600">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-industry-orange mb-2">24hr</div>
                    <div className="text-sm text-industry-gray-600">Average Quote Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <span className="text-sm font-medium">Core Values</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Fundamental
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Values</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do, from customer interactions to manufacturing processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 text-center animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Proven Fundamentals</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every part is manufactured using time-tested processes and mastered fundamentals, 
                  thoroughly inspected before delivery for unshakeable reliability.
                </p>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-orange transition-colors">Truth in Execution</h3>
                <p className="text-gray-300 leading-relaxed">
                  No hidden fees, no surprises, no broken promises. You know exactly what you&apos;re paying for, 
                  when you&apos;ll receive it, and what to expect every step of the way.
                </p>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-2 text-center animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Unshakeable Reliability</h3>
                <p className="text-gray-300 leading-relaxed">
                  Consistent quality, on-time delivery, and dependable execution are not just promises—
                  they&apos;re the foundation of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                <span className="text-industry-blue mr-2">🔧</span>
                <span className="text-sm font-medium text-industry-dark">Our Capabilities</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-industry-dark mb-6">
                Mastered Equipment &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Materials</span>
              </h2>
              
              <p className="text-lg text-industry-gray-600 max-w-2xl mx-auto">
                State-of-the-art equipment and proven processes ensure we can handle any project with unshakeable reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark">Proven Equipment</h3>
                </div>
                <ul className="space-y-3 text-industry-gray-600">
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    <span>Fiber laser cutting systems (up to 1&quot; thick)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    <span>CNC press brakes (up to 200 tons)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    <span>TIG, MIG, and spot welding stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    <span>Professional powder coating booth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-blue mr-2">•</span>
                    <span>Precision quality inspection equipment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">🔩</span>
                  </div>
                  <h3 className="text-xl font-semibold text-industry-dark">Reliable Materials</h3>
                </div>
                <ul className="space-y-3 text-industry-gray-600">
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    <span>Steel (mild, carbon, alloy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    <span>Stainless steel (304, 316, 316L)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    <span>Aluminum (various grades)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    <span>Copper and brass</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-industry-orange mr-2">•</span>
                    <span>Specialty alloys available</span>
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
              Ready to Experience
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Unshakeable Reliability?</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust us with their sheet metal fabrication needs. 
              Experience the difference of mastered fundamentals and truth in execution.
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