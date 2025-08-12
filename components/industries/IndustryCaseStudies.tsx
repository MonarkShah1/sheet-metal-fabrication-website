import { IndustryData } from '@/lib/industries/industry-data';

interface IndustryCaseStudiesProps {
  industry: IndustryData;
}

export function IndustryCaseStudies({ industry }: IndustryCaseStudiesProps) {
  if (industry.caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ontario {industry.name} Project Examples
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real projects we&apos;ve completed for {industry.name.toLowerCase()} companies across Ontario, 
            showcasing our expertise and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industry.caseStudies.map((study) => (
            <div key={study.id} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {study.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.completedDate}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  📍 {study.location}
                </div>
                <p className="text-gray-700 mb-4">
                  {study.description}
                </p>
              </div>

              <div className="space-y-4">
                {/* Materials */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Materials Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.materials.map((material, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Challenge:</h3>
                  <p className="text-sm text-gray-700">{study.challenges}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Our Solution:</h3>
                  <p className="text-sm text-gray-700">{study.solution}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  Have a similar challenge? Let&apos;s discuss your project.
                </p>
                <a
                  href={"/quote" as any}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Get Your Quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-700 mb-6">
              Join the growing list of successful {industry.name.toLowerCase()} projects we&apos;ve completed across Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={"/quote" as any}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}