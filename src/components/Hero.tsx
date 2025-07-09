import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="section-container py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="hero-text text-white mb-6">
            Custom Metal Fabrication Ontario - ISO 9001 Certified
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed">
            Precision laser cutting, welding & CNC services. 10-day turnaround, 99.7% on-time delivery since 1985.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/request-quote"
              className="btn-secondary text-center"
            >
              Get Quote in 20 Seconds
            </Link>
            <Link 
              href="/capabilities"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary-800 text-center"
            >
              View Our Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}