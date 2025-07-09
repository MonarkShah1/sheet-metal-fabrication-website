import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Get a detailed quote in under 20 seconds. Upload your drawings and 
          specifications for instant pricing and lead time estimates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/request-quote"
            className="btn-secondary text-center"
          >
            Get Instant Quote
          </Link>
          <Link 
            href="/capabilities"
            className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary-800 text-center"
          >
            Download Capabilities PDF
          </Link>
        </div>
        <p className="text-sm text-primary-200 mt-6">
          Questions? Call us at <a href="tel:+1-519-555-0123" className="underline hover:text-white">519-555-0123</a>
        </p>
      </div>
    </section>
  )
}