import { LocationData } from '@/lib/locations/location-types';

interface LocalIndustriesProps {
  location: LocationData;
}

export function LocalIndustries({ location }: LocalIndustriesProps) {
  const industryDetails = {
    'Manufacturing': {
      icon: '⚙️',
      description: 'General manufacturing and industrial equipment components',
      services: ['Custom brackets', 'Equipment housings', 'Structural components']
    },
    'Automotive': {
      icon: '🚗',
      description: 'Automotive parts and assembly components',
      services: ['Precision brackets', 'Body panels', 'Assembly fixtures']
    },
    'Construction': {
      icon: '🏗️',
      description: 'Construction and architectural metalwork',
      services: ['Structural steel', 'Architectural panels', 'Custom railings']
    },
    'Food Processing': {
      icon: '🏭',
      description: 'Food-grade stainless steel fabrication',
      services: ['Sanitary equipment', 'Conveyor systems', 'Processing tanks']
    },
    'Electronics': {
      icon: '💻',
      description: 'Precision electronic enclosures and components',
      services: ['EMI shielding', 'Control panels', 'Equipment housings']
    },
    'Aerospace': {
      icon: '✈️',
      description: 'Aerospace-grade precision components',
      services: ['Structural brackets', 'Panel assemblies', 'Precision parts']
    },
    'Medical Devices': {
      icon: '🏥',
      description: 'Medical-grade stainless steel components',
      services: ['Equipment housings', 'Surgical components', 'Device frames']
    },
    'Technology': {
      icon: '⚡',
      description: 'Technology hardware and equipment fabrication',
      services: ['Server racks', 'Equipment chassis', 'Cooling systems']
    },
    'Energy': {
      icon: '🔋',
      description: 'Energy sector equipment and infrastructure',
      services: ['Electrical enclosures', 'Support structures', 'Safety barriers']
    },
    'Logistics': {
      icon: '🚚',
      description: 'Material handling and logistics equipment',
      services: ['Conveyor components', 'Storage systems', 'Loading equipment']
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve in {location.city} and Surrounding Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our specialized sheet metal fabrication services support {location.city}&apos;s diverse 
            industrial landscape with custom solutions tailored to each sector&apos;s unique requirements.
          </p>
        </div>

        {/* Primary Industries */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Primary Industry Focus in {location.city}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.keyIndustryFocus.slice(0, 6).map((industry, index) => {
              const details = industryDetails[industry as keyof typeof industryDetails];
              if (!details) return null;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-industry-blue/30"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{details.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {industry}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {details.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide text-center">
                      Specialized Services
                    </div>
                    {details.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Industries */}
        {location.localIndustries.length > location.keyIndustryFocus.length && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Additional Industries We Support
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {location.localIndustries
                  .filter(industry => !location.keyIndustryFocus.includes(industry))
                  .map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-industry-blue/5 transition-colors"
                    >
                      <span className="w-2 h-2 bg-industry-blue rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700 font-medium">{industry}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Capabilities Overview */}
        <div className="bg-gradient-to-r from-industry-blue to-industry-orange rounded-xl p-8 text-white mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Comprehensive Capabilities for {location.city} Industries
            </h3>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              From prototype development to full production runs, our advanced equipment 
              and certified processes serve the demanding requirements of {location.city}&apos;s 
              industrial sectors.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">1&quot;</div>
                <div className="text-sm text-white/80">Max Steel Thickness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">±0.005&quot;</div>
                <div className="text-sm text-white/80">Precision Tolerance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">AWS</div>
                <div className="text-sm text-white/80">Certified Welders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">7+ Years</div>
                <div className="text-sm text-white/80">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry-Specific CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Industry Listed?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with businesses across many industries in {location.city}. Our flexible 
              approach and custom capabilities can adapt to your specific sector requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={"/contact" as any} 
                className="inline-flex items-center px-6 py-3 bg-industry-blue text-white font-semibold rounded-lg hover:bg-industry-blue-dark transition-colors"
              >
                Discuss Your Industry Needs
                <span className="ml-2">→</span>
              </a>
              <a 
                href={"/services" as any} 
                className="inline-flex items-center px-6 py-3 border border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white transition-colors rounded-lg"
              >
                View All Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}