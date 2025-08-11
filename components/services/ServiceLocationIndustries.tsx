import { ServiceLocationData } from '@/lib/industries/industry-utils';

interface ServiceLocationIndustriesProps {
  serviceLocation: ServiceLocationData;
}

export function ServiceLocationIndustries({ serviceLocation }: ServiceLocationIndustriesProps) {
  const serviceName = serviceLocation.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const locationName = serviceLocation.location.replace(/\b\w/g, l => l.toUpperCase());

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {locationName} Industries We Serve
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our {serviceName.toLowerCase()} services support diverse industries across {locationName}, 
            providing specialized solutions for each sector&apos;s unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceLocation.content.industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  {getIndustryIcon(industry)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry}</h3>
              </div>
              <p className="text-gray-700 mb-4">
                {getIndustryDescription(industry, serviceName)}
              </p>
              <div className="text-sm text-gray-600">
                <strong>Typical Applications:</strong> {getIndustryApplications(industry)}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our {locationName} Industry Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Industry Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Industry Listed?
          </h3>
          <p className="text-gray-700 mb-6">
            We work with companies across many sectors. Contact us to discuss 
            how our {serviceName.toLowerCase()} services can support your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Discuss Your Industry Needs
            </a>
            <a
              href="tel:647-407-0171"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call 647-407-0171
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function getIndustryIcon(industry: string): string {
  const icons: { [key: string]: string } = {
    'Automotive': '🚗',
    'Food Processing': '🍽️',
    'Construction': '🏗️',
    'Electronics': '📱',
    'HVAC': '❄️',
    'Medical Devices': '🏥',
    'Infrastructure': '🌉',
    'Heavy Manufacturing': '🏭',
    'Energy': '⚡',
    'Transportation': '🚛',
    'R&D': '🔬',
    'Prototyping': '⚙️',
    'Aerospace': '✈️',
    'Specialized Equipment': '🔧',
    'Art & Architecture': '🎨'
  };

  return icons[industry] || '🏢';
}

function getIndustryDescription(industry: string, serviceName: string): string {
  const descriptions: { [key: string]: string } = {
    'Automotive': 'Precision components, brackets, and assemblies for automotive suppliers and OEMs.',
    'Food Processing': 'Stainless steel equipment and components meeting food safety and hygiene standards.',
    'Construction': 'Structural components, architectural elements, and building system parts.',
    'Electronics': 'Precision enclosures, chassis, and components for electronic equipment.',
    'HVAC': 'Ductwork, equipment housings, and system components for climate control applications.',
    'Medical Devices': 'High-precision components for medical equipment and device manufacturers.',
    'Infrastructure': 'Heavy-duty components for bridges, roads, and public infrastructure projects.',
    'Heavy Manufacturing': 'Robust components for industrial machinery and manufacturing equipment.',
    'Energy': 'Components for power generation, transmission, and renewable energy systems.',
    'Transportation': 'Parts and assemblies for various transportation equipment and systems.',
    'R&D': 'Prototype development and small-batch production for research and development projects.',
    'Prototyping': 'Rapid prototyping services for product development and testing phases.',
    'Aerospace': 'High-precision components meeting aerospace industry quality and traceability standards.',
    'Specialized Equipment': 'Custom components for unique industrial and commercial applications.',
    'Art & Architecture': 'Decorative and functional metalwork for artistic and architectural projects.'
  };

  return descriptions[industry] || `Custom ${serviceName.toLowerCase()} solutions for ${industry.toLowerCase()} applications.`;
}

function getIndustryApplications(industry: string): string {
  const applications: { [key: string]: string } = {
    'Automotive': 'Brackets, housings, panels, trim components',
    'Food Processing': 'Equipment housings, conveyors, sanitary assemblies',
    'Construction': 'Structural steel, architectural panels, building components',
    'Electronics': 'Chassis, enclosures, heat sinks, mounting brackets',
    'HVAC': 'Ductwork, equipment housings, ventilation components',
    'Medical Devices': 'Device housings, precision components, mounting systems',
    'Infrastructure': 'Bridge components, structural elements, safety barriers',
    'Heavy Manufacturing': 'Machine frames, equipment housings, wear plates',
    'Energy': 'Equipment supports, enclosures, transmission components',
    'Transportation': 'Vehicle components, mounting systems, protective panels',
    'R&D': 'Prototypes, test fixtures, experimental apparatus',
    'Prototyping': 'Concept models, functional prototypes, test components',
    'Aerospace': 'Precision brackets, housings, structural components',
    'Specialized Equipment': 'Custom assemblies, unique components, one-off parts',
    'Art & Architecture': 'Decorative panels, sculptures, architectural features'
  };

  return applications[industry] || 'Custom fabricated components and assemblies';
}