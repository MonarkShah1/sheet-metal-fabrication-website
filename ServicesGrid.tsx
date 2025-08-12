import React from 'react';

export function ServicesGrid() {
  const services = [
    { 
      title: 'Laser Cutting: Mastered Fundamentals', 
      desc: 'Precision laser cutting with proven processes for complex geometries and tight tolerances', 
      icon: '⚙️',
      features: ['±0.001" Tolerance', 'Proven Process Control', 'Consistent Quality'],
      color: 'blue'
    },
    { 
      title: 'Welding & Assembly Excellence', 
      desc: 'Professional welding and assembly with rigorous quality standards and reliable execution', 
      icon: '🔥',
      features: ['Certified Welders', 'Quality Assurance', 'Reliable Delivery'],
      color: 'orange'
    },
    { 
      title: 'Strategic Material Sourcing', 
      desc: 'Streamlined supply chain management for cost-effective material procurement', 
      icon: '📦',
      features: ['Supplier Relationships', 'Cost Optimization', 'Reliable Supply'],
      color: 'blue'
    },
    { 
      title: 'Prototype Development', 
      desc: 'Rapid prototyping with thorough testing and validation for faster iterations', 
      icon: '🔧',
      features: ['Fast Turnaround', 'Thorough Testing', 'Refined Processes'],
      color: 'orange'
    },
  ];

  return (
    <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
            <span className="text-industry-blue mr-2">🔧</span>
            <span className="text-sm font-medium text-industry-dark">Manufacturing Simplified</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-industry-dark">
            Proven Manufacturing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Fundamentals</span>
          </h2>
          
          <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
            We focus on mastering the basics of sheet metal fabrication to deliver consistent, reliable results. 
            Every process is refined through relentless attention to fundamental excellence.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-xl shadow-industry hover:shadow-industry-lg transition-all duration-300 border border-industry-gray-200 hover:border-industry-${service.color}/30 hover:-translate-y-2 animate-slide-up`}
              style={{animationDelay: `${index * 200}ms`}}
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Service icon with background */}
              <div className={`w-16 h-16 bg-gradient-to-br from-industry-${service.color}/20 to-industry-${service.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              {/* Service content */}
              <h3 id={`service-title-${index}`} className="text-xl font-bold mb-3 text-industry-dark group-hover:text-industry-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-industry-gray-600 mb-4 text-sm leading-relaxed">
                {service.desc}
              </p>
              
              {/* Feature list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-industry-gray-500">
                    <span className={`w-1.5 h-1.5 bg-industry-${service.color} rounded-full mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Excellence badge */}
              <div className="mt-4 pt-4 border-t border-industry-gray-100">
                <div className="flex items-center text-xs text-industry-gray-400">
                  <span className="mr-1">✅</span>
                  <span>Proven Excellence</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href={"/services" as any}
            className="inline-flex items-center px-8 py-4 bg-industry-dark hover:bg-industry-blue text-white rounded-lg font-semibold transition-all duration-300 shadow-industry hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-blue focus:ring-opacity-50"
            aria-label="Explore all our proven manufacturing services"
          >
            <span>Explore All Services</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}