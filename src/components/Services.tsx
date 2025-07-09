import Link from 'next/link'

export function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'Laser Cutting',
      description: 'Precision laser cutting for steel, aluminum, and stainless steel up to 25mm thick with ±0.1mm tolerances.',
      features: ['16 ga galvanized specialist', 'Complex geometries', 'Minimal waste'],
      cta: 'Learn More'
    },
    {
      icon: '⚡',
      title: 'Custom Welding',
      description: 'Certified welders specializing in MIG, TIG, and stick welding for structural and precision applications.',
      features: ['Food-grade stainless', 'Structural steel', 'Aluminum specialty'],
      cta: 'View Projects'
    },
    {
      icon: '📐',
      title: 'Sheet Metal Fabrication',
      description: 'Complete sheet metal services from design consultation to finished parts with design-for-manufacture expertise.',
      features: ['Prototype to production', 'Bending & forming', 'Assembly services'],
      cta: 'Get Quote'
    },
    {
      icon: '🏭',
      title: 'Assembly & Finishing',
      description: 'Complete turnkey solutions including powder coating, hardware installation, and quality inspection.',
      features: ['Powder coating', 'Hardware installation', 'Quality inspection'],
      cta: 'View Capabilities'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Metal Fabrication Services</h2>
          <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
            From prototype to production, we deliver precision metal fabrication 
            services with the quality and speed your projects demand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:border-primary-200 border border-transparent">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-industrial-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-industrial-700 flex items-center">
                    <span className="text-accent mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/request-quote"
                className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center group-hover:underline"
              >
                {service.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}