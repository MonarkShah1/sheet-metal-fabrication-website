import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheet Metal Fabrication Blog & Resources',
  description: 'Expert insights, tips, and educational content about sheet metal fabrication, manufacturing processes, and industry best practices.',
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
        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Sheet Metal Fabrication Blog
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                Expert insights, educational content, and industry best practices to help you make 
                better decisions for your sheet metal fabrication projects.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg border border-secondary-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-secondary-900 hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-500">{post.date}</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-secondary-600 mb-4">
                More articles coming soon! Subscribe to our newsletter for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex-1"
                />
                <Button color="blue" className="px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Popular Topics
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Explore our most popular educational resources and guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3">Material Selection</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Guides on choosing the right materials for your specific application and environment.
                </p>
                <Link href="/blog/category/materials" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Explore Articles →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3">Design Guidelines</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Best practices for designing sheet metal parts that are manufacturable and cost-effective.
                </p>
                <Link href="/blog/category/design" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Explore Articles →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3">Process Insights</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Deep dives into manufacturing processes, capabilities, and when to use each method.
                </p>
                <Link href="/blog/category/technology" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Explore Articles →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3">Quality & Testing</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Understanding quality standards, testing methods, and certification requirements.
                </p>
                <Link href="/blog/category/quality" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Explore Articles →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Question?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Can't find what you're looking for? Our experts are here to help answer your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" color="white" className="px-8 py-4">
                  Contact Us
                </Button>
                <Button href="/quote" outline className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}