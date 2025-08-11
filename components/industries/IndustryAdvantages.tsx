import { IndustryData } from '@/lib/industries/industry-data';

interface IndustryAdvantagesProps {
  industry: IndustryData;
}

export function IndustryAdvantages({ industry }: IndustryAdvantagesProps) {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our {industry.name} Services
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our specialized expertise in {industry.name.toLowerCase()} fabrication delivers 
            superior results and competitive advantages for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industry.content.advantages.map((advantage, index) => (
            <div key={index} className="bg-blue-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  {getAdvantageIcon(advantage)}
                </div>
                <h3 className="text-lg font-bold">{advantage}</h3>
              </div>
              <p className="text-blue-100">
                {getAdvantageDescription(advantage, industry.name)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">7+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
            <div className="text-blue-100">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24hr</div>
            <div className="text-blue-100">Quote Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">99.5%</div>
            <div className="text-blue-100">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getAdvantageIcon(advantage: string): string {
  const iconMap: { [key: string]: string } = {
    'Automotive quality system compliance': '🚗',
    'Rapid prototyping capabilities': '⚡',
    'High-volume production capacity': '🏭',
    'Just-in-time delivery programs': '🚚',
    'Cost reduction through design optimization': '💰',
    'Supply chain integration and coordination': '🔗',
    'Specialized food-grade fabrication expertise': '🍽️',
    'Complete understanding of sanitary design': '🧼',
    'FDA and CFIA compliance knowledge': '✅',
    'Quick turnaround for food industry timelines': '⏰',
    'Custom solutions for unique applications': '🔧',
    'Comprehensive documentation and certification': '📋',
    'Heavy-duty construction expertise': '🏗️',
    'Understanding of dynamic load requirements': '⚖️',
    'Rapid response for emergency repairs': '🚨',
    'Integration with existing systems': '🔌',
    'Comprehensive engineering support': '👷',
    'Advanced laser cutting technology': '🔥',
    'Precision CNC forming capabilities': '⚙️',
    'Certified welding processes': '🔨',
    'Comprehensive finishing services': '✨',
    'Quality management systems': '📊',
    'Province-wide delivery network': '🗺️'
  };

  return iconMap[advantage] || '✓';
}

function getAdvantageDescription(advantage: string, industryName: string): string {
  const descriptions: { [key: string]: string } = {
    'Automotive quality system compliance': 'Our ISO 9001 quality system meets automotive industry standards including PPAP, SPC, and supplier requirements.',
    'Rapid prototyping capabilities': 'From concept to prototype in days, not weeks, accelerating your product development timeline.',
    'High-volume production capacity': 'Scalable production systems handle thousands of parts per day while maintaining consistent quality.',
    'Just-in-time delivery programs': 'Coordinated delivery schedules minimize your inventory costs and storage requirements.',
    'Cost reduction through design optimization': 'Our DFM expertise identifies cost-saving opportunities during the design phase.',
    'Supply chain integration and coordination': 'Seamless integration with your existing supply chain processes and systems.',
    'Specialized food-grade fabrication expertise': 'Deep understanding of food industry requirements, regulations, and best practices.',
    'Complete understanding of sanitary design': 'Expertise in designing equipment that meets the highest hygiene and cleanability standards.',
    'FDA and CFIA compliance knowledge': 'Comprehensive knowledge of regulatory requirements for food contact surfaces and equipment.',
    'Quick turnaround for food industry timelines': 'Rapid response times accommodate the urgent needs of food production schedules.',
    'Custom solutions for unique applications': 'Tailored fabrication solutions designed specifically for your unique requirements.',
    'Comprehensive documentation and certification': 'Complete documentation packages including material certs, quality reports, and compliance records.',
    'Heavy-duty construction expertise': 'Specialized knowledge in fabricating robust components for demanding industrial applications.',
    'Understanding of dynamic load requirements': 'Engineering expertise in designing for moving loads, vibration, and cyclic stresses.',
    'Rapid response for emergency repairs': 'Emergency fabrication services minimize downtime with 24/7 response capabilities.',
    'Integration with existing systems': 'Seamless integration with your current material handling infrastructure and controls.',
    'Comprehensive engineering support': 'Full engineering support from design consultation through installation and commissioning.',
    'Advanced laser cutting technology': 'State-of-the-art laser cutting systems deliver precision and efficiency for all materials.',
    'Precision CNC forming capabilities': 'Advanced forming equipment ensures tight tolerances and consistent repeatability.',
    'Certified welding processes': 'All welding performed by certified professionals following industry standards and best practices.',
    'Comprehensive finishing services': 'Complete finishing capabilities from basic cleaning to specialized surface treatments.',
    'Quality management systems': 'ISO 9001 certified quality systems ensure consistent results and continuous improvement.',
    'Province-wide delivery network': 'Established delivery routes throughout Ontario ensure timely delivery to your facility.'
  };

  return descriptions[advantage] || `This advantage provides significant value for ${industryName.toLowerCase()} fabrication projects.`;
}