import { LocationData } from '@/lib/locations/location-types';

interface NearbyProjectsProps {
  location: LocationData;
}

export function NearbyProjects({ location }: NearbyProjectsProps) {
  // If no local projects, show general capabilities
  const hasLocalProjects = location.content.localProjects.length > 0;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {hasLocalProjects 
              ? `Recent Projects in ${location.city}` 
              : `Our Capabilities for ${location.city} Businesses`
            }
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {hasLocalProjects
              ? `Showcasing our successful sheet metal fabrication projects completed for ${location.city} area businesses.`
              : `Examples of the sheet metal fabrication solutions we provide for businesses like those in ${location.city}.`
            }
          </p>
        </div>

        {hasLocalProjects ? (
          /* Local Projects Display */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.content.localProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">
                    {project.industry === 'Automotive' && '🚗'}
                    {project.industry === 'Construction' && '🏗️'}
                    {project.industry === 'Food Processing' && '🏭'}
                    {project.industry === 'Electronics' && '💻'}
                    {project.industry === 'Aerospace' && '✈️'}
                    {project.industry === 'Medical Devices' && '🏥'}
                    {project.industry === 'Packaging' && '📦'}
                    {project.industry === 'Technology' && '⚡'}
                    {project.industry === 'Manufacturing' && '⚙️'}
                    {project.industry === 'Logistics' && '🚚'}
                    {project.industry === 'Distribution' && '📋'}
                    {(!['Automotive', 'Construction', 'Food Processing', 'Electronics', 'Aerospace', 'Medical Devices', 'Packaging', 'Technology', 'Manufacturing', 'Logistics', 'Distribution'].includes(project.industry)) && '🔧'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-industry-blue/10 text-industry-blue text-xs font-medium rounded-full">
                      {project.industry}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(project.completedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Add a "More Projects" card if there are projects */}
            <div className="bg-gradient-to-br from-industry-blue/5 to-industry-orange/5 rounded-xl p-8 flex items-center justify-center text-center border-2 border-dashed border-industry-blue/20">
              <div>
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  More Projects
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interested in seeing more of our work in {location.city}?
                </p>
                <a 
                  href={"/contact" as any} 
                  className="inline-flex items-center px-4 py-2 bg-industry-blue text-white text-sm font-medium rounded-lg hover:bg-industry-blue-dark transition-colors"
                >
                  Contact Us
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* General Capabilities Display */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample capability cards based on location's key industries */}
            {location.keyIndustryFocus.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">
                  {industry === 'Manufacturing' && '⚙️'}
                  {industry === 'Automotive' && '🚗'}
                  {industry === 'Construction' && '🏗️'}
                  {industry === 'Food Processing' && '🏭'}
                  {industry === 'Electronics' && '💻'}
                  {industry === 'Aerospace' && '✈️'}
                  {industry === 'Medical Devices' && '🏥'}
                  {industry === 'Packaging' && '📦'}
                  {industry === 'Technology' && '⚡'}
                  {industry === 'Telecommunications' && '📡'}
                  {industry === 'Precision Engineering' && '🔬'}
                  {industry === 'Steel Processing' && '🏭'}
                  {industry === 'Heavy Manufacturing' && '⚙️'}
                  {industry === 'Energy' && '🔋'}
                  {industry === 'Logistics' && '🚚'}
                  {industry === 'Distribution' && '📋'}
                  {industry === 'Light Manufacturing' && '💡'}
                  {industry === 'Business Services' && '💼'}
                  {industry === 'Marine' && '⚓'}
                  {industry === 'Nuclear' && '⚛️'}
                  {industry === 'Advanced Manufacturing' && '🤖'}
                  {industry === 'Robotics' && '🤖'}
                  {industry === 'Manufacturing Innovation' && '💡'}
                  {industry === 'Research' && '🔬'}
                  {(!['Manufacturing', 'Automotive', 'Construction', 'Food Processing', 'Electronics', 'Aerospace', 'Medical Devices', 'Packaging', 'Technology', 'Telecommunications', 'Precision Engineering', 'Steel Processing', 'Heavy Manufacturing', 'Energy', 'Logistics', 'Distribution', 'Light Manufacturing', 'Business Services', 'Marine', 'Nuclear', 'Advanced Manufacturing', 'Robotics', 'Manufacturing Innovation', 'Research'].includes(industry)) && '🔧'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {industry} Solutions
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Custom sheet metal fabrication solutions designed for {location.city}&apos;s {industry.toLowerCase()} sector.
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 bg-industry-orange/10 text-industry-orange text-xs font-medium rounded-full">
                    Specialized Service
                  </span>
                </div>
              </div>
            ))}

            {/* Contact card to fill the grid */}
            <div className="bg-gradient-to-br from-industry-blue to-industry-orange rounded-xl p-8 text-white text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Contact us today to discuss your {location.city} fabrication needs.
              </p>
              <a 
                href={"/quote" as any} 
                className="inline-flex items-center px-4 py-2 bg-white text-industry-blue font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Get Quote
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Fabrication in {location.city}?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you need prototype development or full production runs, our team is ready 
              to deliver quality sheet metal fabrication solutions for your {location.city} business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={"/quote" as any} 
                className="inline-flex items-center px-6 py-3 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
              >
                Request Quote
                <span className="ml-2">→</span>
              </a>
              <a 
                href={"/contact" as any} 
                className="inline-flex items-center px-6 py-3 border border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white transition-colors rounded-lg"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}