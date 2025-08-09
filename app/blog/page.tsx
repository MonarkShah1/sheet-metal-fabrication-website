import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Fundamentals Blog & Resources | Expert Insights',
  description: 'Expert insights into sheet metal fabrication fundamentals, proven manufacturing processes, and industry best practices for reliable execution.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Sheet Metal Tolerances: A Complete Guide',
      excerpt: 'Learn about standard tolerances in sheet metal fabrication and how they affect your project costs and timeline.',
      date: 'March 15, 2024',
      category: 'Education',
      readTime: '8 min read',
      slug: 'understanding-sheet-metal-tolerances'
    },
    {
      id: 2,
      title: 'Laser Cutting vs. Plasma Cutting: Which is Right for Your Project?',
      excerpt: 'Compare the advantages and disadvantages of laser cutting and plasma cutting for different materials and applications.',
      date: 'March 10, 2024',
      category: 'Technology',
      readTime: '6 min read',
      slug: 'laser-cutting-vs-plasma-cutting'
    },
    {
      id: 3,
      title: 'Design for Manufacturing: Tips for Better Sheet Metal Parts',
      excerpt: 'Essential design guidelines to optimize your sheet metal parts for manufacturing efficiency and cost reduction.',
      date: 'March 5, 2024',
      category: 'Design',
      readTime: '10 min read',
      slug: 'design-for-manufacturing-tips'
    },
    {
      id: 4,
      title: 'The Complete Guide to Stainless Steel Grades for Fabrication',
      excerpt: 'Everything you need to know about different stainless steel grades and their applications in sheet metal fabrication.',
      date: 'February 28, 2024',
      category: 'Materials',
      readTime: '12 min read',
      slug: 'stainless-steel-grades-guide'
    },
    {
      id: 5,
      title: 'Powder Coating vs. Wet Paint: Choosing the Right Finish',
      excerpt: 'Compare powder coating and wet paint finishes for sheet metal parts, including durability, cost, and environmental impact.',
      date: 'February 22, 2024',
      category: 'Finishing',
      readTime: '7 min read',
      slug: 'powder-coating-vs-wet-paint'
    },
    {
      id: 6,
      title: 'How to Calculate Sheet Metal Bend Allowances',
      excerpt: 'Master the calculations for bend allowances in sheet metal fabrication to ensure accurate flat pattern development.',
      date: 'February 15, 2024',
      category: 'Education',
      readTime: '9 min read',
      slug: 'calculate-bend-allowances'
    }
  ]

  const categories = ['All', 'Education', 'Technology', 'Design', 'Materials', 'Finishing']

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
              <span className="text-industry-blue mr-2">📚</span>
              <span className="text-sm font-medium">Manufacturing Knowledge</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Manufacturing Fundamentals
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Blog & Resources</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Expert insights into proven manufacturing fundamentals, educational content, and industry best practices 
              to help you make better decisions for your sheet metal fabrication projects.
            </p>
            
            {/* Education Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🎯</span>
                <span>Proven Fundamentals</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📖</span>
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🔧</span>
                <span>Best Practices</span>
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
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-industry-blue text-white shadow-industry'
                      : 'bg-white text-industry-gray-700 hover:bg-industry-blue/10 hover:text-industry-blue border border-industry-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-xl shadow-industry border border-industry-gray-200 overflow-hidden hover:shadow-industry-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-industry-blue/10 text-industry-blue border border-industry-blue/20">
                        {post.category}
                      </span>
                      <span className="text-sm text-industry-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-industry-dark hover:text-industry-blue transition-colors">
                      <Link href={`/blog/${post.slug}` as any}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-industry-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-industry-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}` as any}
                        className="text-industry-orange hover:text-industry-orange/80 font-medium text-sm transition-colors flex items-center"
                      >
                        Read More 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-industry-orange text-xl">📧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-industry-dark">Stay Updated</h3>
                </div>
                <p className="text-industry-gray-600 mb-6">
                  More articles coming soon! Subscribe to our newsletter for updates on manufacturing fundamentals and industry insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 border border-industry-gray-300 rounded-lg focus:ring-2 focus:ring-industry-blue focus:border-industry-blue flex-1"
                  />
                  <button className="px-6 py-3 bg-industry-blue hover:bg-industry-blue/90 text-white rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
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
                <span className="text-industry-orange mr-2">🎯</span>
                <span className="text-sm font-medium">Popular Topics</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Manufacturing Fundamentals
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Resources</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our most popular educational resources and guides for proven manufacturing processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-1 animate-slide-up">
                <div className="w-12 h-12 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Material Selection</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Guides on choosing the right materials for your specific application and environment through proven fundamentals.
                </p>
                <Link href={"/blog/category/materials" as any} className="text-industry-orange hover:text-industry-orange/80 font-medium text-sm transition-colors flex items-center">
                  Explore Articles 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-industry-orange transition-colors">Design Guidelines</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Best practices for designing sheet metal parts that are manufacturable and cost-effective through proven processes.
                </p>
                <Link href={"/blog/category/design" as any} className="text-industry-orange hover:text-industry-orange/80 font-medium text-sm transition-colors flex items-center">
                  Explore Articles 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-blue/50 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-industry-blue/20 to-industry-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-industry-blue transition-colors">Process Insights</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Deep dives into manufacturing processes, capabilities, and when to use each method for reliable execution.
                </p>
                <Link href={"/blog/category/technology" as any} className="text-industry-orange hover:text-industry-orange/80 font-medium text-sm transition-colors flex items-center">
                  Explore Articles 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className="group bg-industry-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-700 hover:border-industry-orange/50 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '600ms'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-industry-orange/20 to-industry-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-industry-orange transition-colors">Quality & Testing</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Understanding quality standards, testing methods, and certification requirements for unshakeable reliability.
                </p>
                <Link href={"/blog/category/quality" as any} className="text-industry-orange hover:text-industry-orange/80 font-medium text-sm transition-colors flex items-center">
                  Explore Articles 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
              <span className="text-industry-orange mr-2">❓</span>
              <span className="text-sm font-medium">Need Help?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Have a Question About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industry-orange"> Manufacturing?</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our experts are here to help answer your questions 
              about manufacturing fundamentals and proven processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Contact Expert</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300"
              >
                <span>Get Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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