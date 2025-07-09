import Link from 'next/link'

export function CapabilitiesGrid() {
  const capabilities = [
    {
      title: 'Laser Cutting',
      slug: 'laser-cutting',
      description: 'Precision laser cutting for steel, aluminum, and stainless steel with ±0.1mm tolerances.',
      icon: '🔧',
      features: ['Up to 25mm thickness', '±0.1mm precision', 'Complex geometries']
    },
    {
      title: 'CNC Punching',
      slug: 'cnc-punching',
      description: 'High-speed CNC punching and forming for sheet metal up to 6mm thickness.',
      icon: '⚡',
      features: ['High-speed production', 'Forming capabilities', 'Minimal waste']
    },
    {
      title: 'Custom Welding',
      slug: 'custom-welding',
      description: 'Certified MIG, TIG, and stick welding for structural and precision applications.',
      icon: '🔥',
      features: ['CWB certified', 'Food-grade stainless', 'Structural steel']
    },
    {
      title: 'Sheet Metal Fabrication',
      slug: 'sheet-metal',
      description: 'Complete sheet metal services from design to finished parts with assembly.',
      icon: '📐',
      features: ['Bending & forming', 'Assembly services', 'Prototype to production']
    }
  ]

  return (
    <section className="py-20 bg-white" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 id="capabilities-heading" className="section-title">
            Our Core Capabilities
          </h2>
          <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
            Advanced metal fabrication services with state-of-the-art equipment 
            and certified quality processes serving Ontario manufacturers.
          </p>
        </div>
        
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="grid"
          aria-label="Metal fabrication capabilities"
        >
          {capabilities.map((capability, index) => (
            <div key={index} className="card group hover:shadow-xl" role="gridcell">
              <div className="text-center">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {capability.title}
                </h3>
                <p className="text-industrial-600 mb-4 text-sm leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-industrial-700 flex items-center justify-center">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/capabilities/${capability.slug}`}
                  className="btn-primary text-sm inline-block text-center group-hover:bg-primary-700 transition-all duration-200"
                  aria-label={`Learn more about ${capability.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}