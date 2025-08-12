import Link from 'next/link';
import { LocationData } from '@/lib/locations/location-types';
import { businessInfo } from '@/config/business-info';

interface LocalContactProps {
  location: LocationData;
}

export function LocalContact({ location }: LocalContactProps) {
  return (
    <section className="py-16 px-6 bg-industry-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started with Your {location.city} Project?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Contact Canadian Metal Fabricators today for expert sheet metal fabrication services 
            in {location.city}. We&apos;re ready to discuss your project and provide a competitive quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-industry-orange text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Call Us</div>
                  <a 
                    href={`tel:${businessInfo.telephone}`}
                    className="text-industry-orange text-lg font-semibold hover:text-industry-orange-light transition-colors"
                  >
                    {businessInfo.telephone}
                  </a>
                  <div className="text-gray-400 text-sm">
                    Same-day response for {location.city} calls
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-industry-blue text-xl">📧</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Email Us</div>
                  <a 
                    href={`mailto:${businessInfo.email}`}
                    className="text-industry-blue hover:text-industry-blue-light transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                  <div className="text-gray-400 text-sm">
                    Detailed quotes and project discussions
                  </div>
                </div>
              </div>

              {/* Location & Travel Time */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-400 text-xl">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Our Location</div>
                  <div className="text-gray-300">
                    {businessInfo.address.streetAddress}<br />
                    {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Just {location.travelTime} from {location.city}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-400 text-xl">⏰</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Business Hours</div>
                  <div className="text-gray-300">
                    Monday - Friday: 7:00 AM - 4:00 PM
                  </div>
                  <div className="text-gray-400 text-sm">
                    After-hours support available for urgent {location.city} projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">
              Choose Your Next Step
            </h3>

            {/* Quote Request */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-industry-orange/50 transition-colors group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-industry-orange text-xl">💰</span>
                </div>
                <h4 className="text-lg font-semibold">Request a Quote</h4>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Get a detailed quote for your {location.city} project. Upload drawings, 
                specify requirements, and receive a professional estimate.
              </p>
              <Link 
                href={"/quote" as any}
                className="inline-flex items-center px-4 py-2 bg-industry-orange text-white font-medium rounded-lg hover:bg-industry-orange-dark transition-colors group-hover:scale-105 transform"
              >
                Get Free Quote
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-industry-blue/50 transition-colors group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-industry-blue text-xl">💬</span>
                </div>
                <h4 className="text-lg font-semibold">Schedule Consultation</h4>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Discuss your project requirements with our engineering team. 
                Available for on-site visits in {location.city}.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-industry-blue text-white font-medium rounded-lg hover:bg-industry-blue-dark transition-colors group-hover:scale-105 transform"
              >
                Schedule Consultation
                <span className="ml-2">📅</span>
              </Link>
            </div>

            {/* Emergency/Rush */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-colors group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-400 text-xl">🚨</span>
                </div>
                <h4 className="text-lg font-semibold">Rush Project?</h4>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Need urgent fabrication services in {location.city}? 
                Call us directly for rush project availability and expedited service.
              </p>
              <a 
                href={`tel:${businessInfo.telephone}`}
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors group-hover:scale-105 transform"
              >
                Call Now: {businessInfo.telephone}
                <span className="ml-2">📞</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-industry-orange mb-2">
                Same Day
              </div>
              <div className="text-gray-400 text-sm">
                Quote Response for {location.city}
              </div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-industry-blue mb-2">
                ISO 9001
              </div>
              <div className="text-gray-400 text-sm">
                Certified Quality System
              </div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">
                7+ Years
              </div>
              <div className="text-gray-400 text-sm">
                Serving {location.city} Area
              </div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {location.travelTime}
              </div>
              <div className="text-gray-400 text-sm">
                Travel Time to {location.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}