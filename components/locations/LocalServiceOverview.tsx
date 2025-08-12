import Link from 'next/link';
import { LocationData } from '@/lib/locations/location-types';

interface LocalServiceOverviewProps {
  location: LocationData;
}

export function LocalServiceOverview({ location }: LocalServiceOverviewProps) {
  const services = [
    {
      title: 'Laser Cutting & Bending',
      description: `Precision laser cutting services for ${location.city} manufacturers`,
      features: ['Up to 1" steel cutting', 'Complex geometries', 'Tight tolerances'],
      icon: '⚡'
    },
    {
      title: 'Welding & Assembly',
      description: `Expert welding services serving ${location.city} industries`,
      features: ['MIG/TIG welding', 'AWS certified welders', 'Custom assemblies'],
      icon: '🔥'
    },
    {
      title: 'Metal Forming',
      description: `Advanced forming capabilities for ${location.city} projects`,
      features: ['Press brake forming', 'Rolling services', 'Custom shapes'],
      icon: '🔧'
    },
    {
      title: 'Finishing Services',
      description: `Complete finishing solutions for ${location.city} components`,
      features: ['Powder coating', 'Anodizing', 'Surface treatments'],
      icon: '✨'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Custom Metal Manufacturing Solutions for {location.city} Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {location.content.industriesServed}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-industry-orange rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Local Industry Focus */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tailored for {location.city}&apos;s Key Industries
              </h3>
              <p className="text-gray-600 mb-6">
                Our services are specifically designed to meet the unique requirements of 
                {location.city}&apos;s manufacturing landscape.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {location.keyIndustryFocus.slice(0, 6).map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-industry-blue rounded-full mr-2"></span>
                    <span className="text-sm text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-industry-blue/10 to-industry-orange/10 rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-industry-blue mb-2">
                  7+ Years
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Serving {location.city}
                </div>
                <div className="text-2xl font-bold text-industry-orange mb-2">
                  ISO 9001
                </div>
                <div className="text-sm text-gray-600">
                  Certified Quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href={"/services" as any}
            className="inline-flex items-center px-6 py-3 bg-industry-blue text-white font-semibold rounded-lg hover:bg-industry-blue-dark transition-colors"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}