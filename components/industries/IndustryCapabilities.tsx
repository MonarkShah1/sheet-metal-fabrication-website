import { IndustryData } from '@/lib/industries/industry-data';

interface IndustryCapabilitiesProps {
  industry: IndustryData;
}

export function IndustryCapabilities({ industry }: IndustryCapabilitiesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our {industry.name}-Specific Capabilities
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {industry.content.capabilities}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Materials We Work With */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                🔧
              </span>
              Materials We Work With
            </h3>
            <div className="space-y-3">
              {industry.content.materials.map((material, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{material}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                ✓
              </span>
              Quality Standards & Certifications
            </h3>
            <div className="space-y-3">
              {industry.content.qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        {industry.certifications.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Our Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {industry.certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 px-6 py-3 rounded-lg border">
                  <span className="text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}