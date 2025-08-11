import { ServiceLocationData } from '@/lib/industries/industry-utils';

interface ServiceLocationProcessProps {
  serviceLocation: ServiceLocationData;
}

export function ServiceLocationProcess({ serviceLocation }: ServiceLocationProcessProps) {
  const serviceName = serviceLocation.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Process Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {serviceName} Process & Capabilities
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {serviceLocation.content.process}
            </p>

            {/* Key Advantages */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our {serviceName} Services
              </h3>
              <div className="space-y-4">
                {serviceLocation.content.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{advantage}</h4>
                      <p className="text-gray-600 text-sm">{getAdvantageDescription(advantage, serviceName)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-8">
            {/* Equipment Highlights */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  🔧
                </span>
                State-of-the-Art Equipment
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5-Axis</div>
                  <div className="text-sm text-gray-600">Laser Cutting</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">CNC</div>
                  <div className="text-sm text-gray-600">Forming</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">TIG/MIG</div>
                  <div className="text-sm text-gray-600">Welding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Multi-Stage</div>
                  <div className="text-sm text-gray-600">Finishing</div>
                </div>
              </div>
            </div>

            {/* Material Options */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  📋
                </span>
                Material Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Carbon Steel (various grades)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Stainless Steel 304/316L</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Aluminum alloys</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Specialized alloys</span>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  ✓
                </span>
                Quality Assurance
              </h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">• ISO 9001:2015 Certified</div>
                <div className="text-sm text-gray-700">• Certified Welders (CWB)</div>
                <div className="text-sm text-gray-700">• Material Traceability</div>
                <div className="text-sm text-gray-700">• Dimensional Inspection</div>
                <div className="text-sm text-gray-700">• Quality Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getAdvantageDescription(advantage: string, serviceName: string): string {
  const descriptions: { [key: string]: string } = {
    'Advanced laser cutting technology': 'Precision cutting with minimal kerf width and excellent edge quality for all materials.',
    'Precision CNC forming capabilities': 'Consistent repeatability and tight tolerances for complex geometries and bends.',
    'Certified welding processes': 'All welding performed by certified professionals following industry best practices.',
    'Comprehensive finishing services': 'Complete range of finishing options from basic to specialized surface treatments.',
    'Quality management systems': 'ISO 9001 certified processes ensure consistent quality and continuous improvement.',
    'Province-wide delivery network': 'Established delivery routes throughout Ontario for timely project completion.',
    'Heavy-duty fabrication capacity': 'Equipment and expertise to handle both precision components and heavy structural work.',
    'Structural steel expertise': 'Specialized knowledge in structural applications and building code compliance.',
    'Project management capabilities': 'Dedicated project management ensures on-time delivery and clear communication.',
    'Timely project delivery': 'Proven track record of meeting deadlines and delivery commitments.',
    'Design consultation and DFM': 'Expert consultation to optimize designs for manufacturing efficiency and cost.',
    'Rapid prototyping capabilities': 'Quick turnaround on prototypes to accelerate your product development process.',
    'Small to medium batch production': 'Flexible production systems accommodate varying quantities efficiently.',
    'Multi-material expertise': 'Experience working with diverse materials and their unique fabrication requirements.',
    'Precision quality control': 'Comprehensive inspection processes ensure every part meets specifications.',
    'Collaborative engineering approach': 'Work closely with your team to develop optimal fabrication solutions.'
  };

  return descriptions[advantage] || `This capability provides significant value for ${serviceName.toLowerCase()} projects.`;
}