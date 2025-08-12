import { LocationData } from '@/lib/locations/location-types';

interface WhyChooseUsLocalProps {
  location: LocationData;
}

export function WhyChooseUsLocal({ location }: WhyChooseUsLocalProps) {
  const advantages = [
    {
      icon: '🚀',
      title: 'Fast Response Times',
      description: `Just ${location.travelTime} from our facility means rapid quotes and quick project turnaround for ${location.city} businesses.`,
      stat: 'Same Day',
      statLabel: 'Quote Response'
    },
    {
      icon: '🏭',
      title: 'Local Industry Expertise',
      description: `Deep understanding of ${location.city}'s manufacturing landscape and the specific requirements of local industries.`,
      stat: '7+ Years',
      statLabel: `Serving ${location.city}`
    },
    {
      icon: '🔧',
      title: 'Advanced Capabilities',
      description: `State-of-the-art equipment and AWS-certified welders deliver the precision and quality ${location.city} manufacturers demand.`,
      stat: 'ISO 9001',
      statLabel: 'Certified Quality'
    },
    {
      icon: '💰',
      title: 'Cost-Effective Solutions',
      description: `Strategic location reduces transportation costs while maintaining competitive pricing for ${location.city} projects.`,
      stat: '${location.distanceFromFacility}km',
      statLabel: 'Close Distance'
    },
    {
      icon: '📞',
      title: 'Personal Service',
      description: `Direct access to our engineering team and project managers who understand ${location.city}'s business environment.`,
      stat: '24/7',
      statLabel: 'Support Available'
    },
    {
      icon: '✅',
      title: 'Proven Track Record',
      description: `Successful completion of projects across ${location.city}'s diverse industrial sectors with consistent quality and delivery.`,
      stat: '100%',
      statLabel: 'Client Satisfaction'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why {location.city} Manufacturers Choose Canadian Metal Fabricators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {location.content.whyChooseUs}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-industry-blue/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {advantage.description}
              </p>
              
              <div className="bg-industry-blue/5 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-industry-blue">
                  {advantage.stat.replace('${location.distanceFromFacility}', location.distanceFromFacility.toString())}
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">
                  {advantage.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-industry-blue/5 to-industry-orange/5 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              &quot;Working with Canadian Metal Fabricators has been exceptional. Their proximity to {location.city} means 
              faster turnaround times, and their quality consistently exceeds our expectations. They understand 
              our industry needs and deliver every time.&quot;
            </blockquote>
            <div className="text-sm text-gray-600">
              — {location.city} Manufacturing Client
            </div>
          </div>
        </div>

        {/* Certifications and Quality */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certified Quality for {location.city} Businesses
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certifications and quality management systems ensure {location.city} manufacturers 
              receive the highest standards of workmanship and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold text-gray-900">ISO 9001:2015</div>
              <div className="text-sm text-gray-600">Quality Management</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-semibold text-gray-900">AWS D1.1</div>
              <div className="text-sm text-gray-600">Certified Welding</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-gray-900">Same Day</div>
              <div className="text-sm text-gray-600">Quote Response</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-gray-900">On-Time</div>
              <div className="text-sm text-gray-600">Delivery Promise</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-industry-dark text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the growing number of {location.city} manufacturers who trust Canadian Metal Fabricators 
              for their sheet metal fabrication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={"/quote" as any} 
                className="inline-flex items-center px-6 py-3 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
              >
                Eliminate Your Supplier Headaches
                <span className="ml-2">→</span>
              </a>
              <a 
                href={"/contact" as any} 
                className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-industry-dark transition-colors rounded-lg"
              >
                Get Reliable Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}