import Link from 'next/link'

export function Industries() {
  const industries = [
    {
      name: 'Agriculture',
      description: 'Custom tillage tools, grain handling equipment, and livestock solutions.',
      icon: '🚜',
      examples: ['Tillage components', 'Grain handling', 'Livestock equipment']
    },
    {
      name: 'Construction',
      description: 'Structural steel, architectural metalwork, and building components.',
      icon: '🏗️',
      examples: ['Structural steel', 'Architectural metal', 'Building components']
    },
    {
      name: 'Mining',
      description: 'Heavy-duty mining equipment parts and wear-resistant components.',
      icon: '⛏️',
      examples: ['Equipment parts', 'Wear components', 'Safety structures']
    },
    {
      name: 'Defence',
      description: 'Precision components meeting strict military specifications.',
      icon: '🛡️',
      examples: ['Precision components', 'Military spec', 'Security equipment']
    },
    {
      name: 'Aerospace',
      description: 'High-precision aerospace components with rigorous quality standards.',
      icon: '✈️',
      examples: ['Precision parts', 'Quality standards', 'Aerospace grade']
    }
  ]

  return (
    <section className="py-20 bg-industrial-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
            Trusted by Ontario&apos;s leading manufacturers across diverse industries 
            for mission-critical metal fabrication projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="card group hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{industry.icon}</span>
                <h3 className="text-xl font-bold text-primary-800">
                  {industry.name}
                </h3>
              </div>
              <p className="text-industrial-600 mb-4 leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-2 mb-6">
                {industry.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="text-sm text-industrial-700 flex items-center">
                    <span className="text-accent mr-2">•</span>
                    {example}
                  </li>
                ))}
              </ul>
              <Link 
                href="/industries"
                className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center group-hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}