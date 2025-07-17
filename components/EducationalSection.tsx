import React from 'react';

export function EducationalSection() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Eliminate Quality Risks',
      description: 'IoT-enabled real-time monitoring ensures consistent quality control throughout the fabrication process, reducing defects by up to 80%.',
      features: ['Real-time Quality Monitoring', 'Automated Defect Detection', 'Predictive Quality Analytics']
    },
    {
      icon: '⚡',
      title: 'Accelerate Time-to-Market',
      description: 'AI-powered workflow optimization and digital twin technology reduces project lead times by 50% while maintaining precision.',
      features: ['AI Workflow Optimization', 'Digital Twin Simulation', 'Predictive Scheduling']
    },
    {
      icon: '💰',
      title: 'Reduce Total Cost of Ownership',
      description: 'Smart material sourcing and automated process optimization deliver cost savings of 30-40% compared to traditional outsourcing.',
      features: ['Smart Material Sourcing', 'Process Optimization', 'Waste Reduction Analytics']
    },
    {
      icon: '📊',
      title: 'Gain Complete Visibility',
      description: 'End-to-end traceability and real-time dashboards provide full transparency into your project status and supply chain.',
      features: ['End-to-End Traceability', 'Real-time Dashboards', 'Supply Chain Analytics']
    }
  ];

  const industrialChallenges = [
    {
      challenge: 'Unpredictable Quality',
      solution: 'AI-powered quality prediction and IoT monitoring',
      improvement: '80% reduction in defects'
    },
    {
      challenge: 'Long Lead Times',
      solution: 'Digital twin optimization and predictive scheduling',
      improvement: '50% faster delivery'
    },
    {
      challenge: 'Hidden Costs',
      solution: 'Transparent AI pricing and smart material sourcing',
      improvement: '30-40% cost savings'
    },
    {
      challenge: 'Limited Visibility',
      solution: 'Real-time IoT tracking and automated reporting',
      improvement: '100% project transparency'
    }
  ];

  return (
    <section className="py-20 px-6 bg-industry-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industry-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-industry-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
            <span className="text-industry-blue mr-2">🏭</span>
            <span className="text-sm font-medium">Industry 4.0 Education</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Why Smart Manufacturing is the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Sheet Metal Outsourcing</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Traditional outsourcing challenges are solved through Industry 4.0 technologies. 
            Discover how AI, IoT, and digital twins transform sheet metal fabrication.
          </p>
        </div>
        
        {/* Challenge vs Solution Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            From Traditional Problems to Industry 4.0 Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialChallenges.map((item, index) => (
              <div 
                key={index}
                className="bg-industry-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-industry-gray-700 hover:border-industry-blue/50 transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="text-center">
                  <div className="text-red-400 font-semibold mb-2 text-sm">TRADITIONAL</div>
                  <h4 className="text-lg font-bold mb-4 text-red-300">{item.challenge}</h4>
                  
                  <div className="border-t border-industry-gray-600 pt-4">
                    <div className="text-industry-blue font-semibold mb-2 text-sm">INDUSTRY 4.0</div>
                    <p className="text-gray-300 text-sm mb-3">{item.solution}</p>
                    <div className="bg-industry-blue/20 rounded-full px-3 py-1 text-xs font-semibold text-industry-blue">
                      {item.improvement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-industry-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-industry-gray-700 hover:border-industry-blue/50 transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-industry-blue/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-industry-blue rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Industry 4.0 Process Flow */}
        <div className="bg-industry-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-industry-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Your Project Journey in the Industry 4.0 Era
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {[
              { step: '01', title: 'AI File Analysis', desc: 'Instant CAD analysis and optimization suggestions' },
              { step: '02', title: 'Smart Quoting', desc: 'Machine learning pricing with real-time capacity' },
              { step: '03', title: 'Digital Twin', desc: 'Virtual fabrication and quality prediction' },
              { step: '04', title: 'IoT Production', desc: 'Real-time monitoring and quality control' },
              { step: '05', title: 'Smart Delivery', desc: 'Predictive shipping and quality verification' }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-industry-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-industry-blue font-bold">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-400">{phase.desc}</p>
                
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-industry-blue/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-industry-gradient rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Industry 4.0 Difference?
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Join forward-thinking companies who have already made the switch to smart manufacturing outsourcing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Smart Project</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}