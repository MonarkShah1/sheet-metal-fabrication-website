import { ServiceLocationData } from '@/lib/industries/industry-utils';

interface ServiceLocationAdvantagesProps {
  serviceLocation: ServiceLocationData;
}

export function ServiceLocationAdvantages({ serviceLocation }: ServiceLocationAdvantagesProps) {
  const serviceName = serviceLocation.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const locationName = serviceLocation.location.replace(/\b\w/g, l => l.toUpperCase());

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our {locationName} Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our strategic location and specialized expertise provide unmatched advantages 
            for {serviceName.toLowerCase()} projects throughout {locationName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceLocation.content.advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  {getAdvantageIcon(advantage)}
                </div>
                <h3 className="text-lg font-bold">{advantage}</h3>
              </div>
              <p className="text-gray-300">
                {getAdvantageDetailedDescription(advantage, serviceName, locationName)}
              </p>
            </div>
          ))}
        </div>

        {/* Location-Specific Benefits */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {locationName}-Specific Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-3">Geographic Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Strategic Mississauga location for rapid {locationName} delivery</li>
                <li>• Established supply chain networks throughout {locationName}</li>
                <li>• Understanding of {locationName} industrial corridors</li>
                <li>• Local market knowledge and industry connections</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-3">Service Excellence</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Same-day quotes for {locationName} projects</li>
                <li>• Dedicated {locationName} delivery routes</li>
                <li>• Emergency fabrication services available</li>
                <li>• Local project support and consultation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-gray-300">Customer Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">24hr</div>
            <div className="text-gray-300">Average Quote Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">99.5%</div>
            <div className="text-gray-300">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">ISO 9001</div>
            <div className="text-gray-300">Quality Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getAdvantageIcon(advantage: string): string {
  const icons: { [key: string]: string } = {
    'Advanced laser cutting technology': '🔥',
    'Precision CNC forming capabilities': '⚙️',
    'Certified welding processes': '🔨',
    'Comprehensive finishing services': '✨',
    'Quality management systems': '📊',
    'Province-wide delivery network': '🚚',
    'Heavy-duty fabrication capacity': '🏗️',
    'Structural steel expertise': '🏢',
    'Project management capabilities': '📋',
    'Timely project delivery': '⏰',
    'Design consultation and DFM': '📐',
    'Rapid prototyping capabilities': '⚡',
    'Small to medium batch production': '🏭',
    'Multi-material expertise': '🔧',
    'Precision quality control': '🎯',
    'Collaborative engineering approach': '🤝'
  };

  return icons[advantage] || '✓';
}

function getAdvantageDetailedDescription(advantage: string, serviceName: string, locationName: string): string {
  const descriptions: { [key: string]: string } = {
    'Advanced laser cutting technology': `Our state-of-the-art laser cutting systems provide unmatched precision and speed for ${serviceName.toLowerCase()} projects throughout ${locationName}.`,
    'Precision CNC forming capabilities': `Advanced CNC forming equipment ensures consistent quality and tight tolerances for complex ${serviceName.toLowerCase()} components.`,
    'Certified welding processes': `All welding performed by certified professionals using industry-leading techniques and quality standards.`,
    'Comprehensive finishing services': `Complete range of finishing options from basic preparation to specialized coatings and treatments.`,
    'Quality management systems': `ISO 9001:2015 certified quality processes ensure consistent results and continuous improvement.`,
    'Province-wide delivery network': `Established delivery routes throughout ${locationName} ensure timely delivery to your facility.`,
    'Heavy-duty fabrication capacity': `Equipment and expertise to handle both precision components and heavy structural fabrication work.`,
    'Structural steel expertise': `Specialized knowledge in structural applications, building codes, and safety requirements.`,
    'Project management capabilities': `Dedicated project management ensures clear communication and on-time delivery for all projects.`,
    'Timely project delivery': `Proven track record of meeting deadlines and delivery commitments throughout ${locationName}.`,
    'Design consultation and DFM': `Expert design consultation helps optimize your parts for manufacturing efficiency and cost reduction.`,
    'Rapid prototyping capabilities': `Quick turnaround on prototypes accelerates your product development and time-to-market.`,
    'Small to medium batch production': `Flexible production systems efficiently accommodate varying quantities from prototypes to production runs.`,
    'Multi-material expertise': `Experience working with diverse materials including steel, stainless steel, aluminum, and specialized alloys.`,
    'Precision quality control': `Comprehensive inspection processes and quality documentation ensure every part meets specifications.`,
    'Collaborative engineering approach': `We work closely with your team to develop optimal solutions for your specific requirements.`
  };

  return descriptions[advantage] || `This capability provides significant advantages for ${serviceName.toLowerCase()} projects in ${locationName}.`;
}