import React from 'react';

export function ServicesGrid() {
  const services = [
    { 
      title: 'AI-Powered Laser Cutting', 
      desc: 'Precision laser cutting with machine learning optimization for complex geometries and tight tolerances', 
      icon: '⚙️',
      features: ['±0.001" Tolerance', 'AI Path Optimization', 'Real-time Quality Control'],
      color: 'blue'
    },
    { 
      title: 'Smart Welding & Assembly', 
      desc: 'Automated welding systems with IoT sensors monitoring quality at every step', 
      icon: '🔥',
      features: ['Robotic Welding', 'IoT Monitoring', 'Quality Analytics'],
      color: 'orange'
    },
    { 
      title: 'Intelligent Material Sourcing', 
      desc: 'AI-driven supply chain optimization for cost-effective material procurement', 
      icon: '📦',
      features: ['Smart Inventory', 'Cost Optimization', 'Vendor Analytics'],
      color: 'blue'
    },
    { 
      title: 'Digital Twin Prototyping', 
      desc: 'Virtual prototyping with digital twins for rapid iteration and validation', 
      icon: '🤖',
      features: ['Virtual Testing', 'Rapid Iteration', 'Predictive Analysis'],
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
            <span className="text-industry-blue mr-2">🏭</span>
            <span className="text-sm font-medium text-industry-dark">Industry 4.0 Manufacturing</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-industry-dark">
            Our Smart Manufacturing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Capabilities</span>
          </h2>
          
          <p className="text-lg text-industry-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technology to deliver precision, efficiency, and quality in every project through automated processes and intelligent systems.
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
              
              {/* Smart badge */}
              <div className="mt-4 pt-4 border-t border-industry-gray-100">
                <div className="flex items-center text-xs text-industry-gray-400">
                  <span className="mr-1">🔬</span>
                  <span>Smart Factory Technology</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-industry-dark hover:bg-industry-blue text-white rounded-lg font-semibold transition-all duration-300 shadow-industry hover:shadow-industry-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-industry-blue focus:ring-opacity-50"
            aria-label="Explore all our Industry 4.0 services"
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