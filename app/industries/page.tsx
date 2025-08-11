import { Metadata } from 'next';
import Link from 'next/link';
import { industries } from '@/lib/industries/industry-data';
import { sortIndustriesByVolume } from '@/lib/industries/industry-utils';
import { Analytics } from '@/components/Analytics';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Industries We Serve | Metal Fabrication Specialists | Canadian Metal Fabricators',
  description: 'Professional metal fabrication services for automotive, food processing, material handling and more. Industry-specific expertise across Ontario. ISO 9001 certified.',
  keywords: [
    'metal fabrication industries',
    'automotive metal fabrication',
    'food grade fabrication',
    'material handling fabrication',
    'industrial metal services',
    'Ontario metal fabrication'
  ].join(', '),
  alternates: {
    canonical: 'https://canadianmetalfabricators.ca/industries',
  },
  openGraph: {
    title: 'Industries We Serve - Metal Fabrication Specialists',
    description: 'Specialized metal fabrication services for multiple industries across Ontario. Expert solutions tailored to your sector requirements.',
    url: 'https://canadianmetalfabricators.ca/industries',
    siteName: 'Canadian Metal Fabricators Ltd.',
    type: 'website',
  }
};

export default function IndustriesPage() {
  const sortedIndustries = sortIndustriesByVolume(industries);

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
            <span className="text-industry-blue mr-2">🏭</span>
            <span className="text-sm font-medium">Industry Specialists</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Industries We Serve
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Specialized metal fabrication expertise across diverse industries throughout Ontario. 
            From automotive precision to food-grade sanitary design, we deliver solutions 
            tailored to your sector&apos;s unique requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="inline-flex items-center px-8 py-4 bg-industry-orange text-white font-semibold rounded-lg hover:bg-industry-orange-dark transition-colors"
            >
              Get Industry-Specific Quote
              <span className="ml-2">→</span>
            </Link>
            <Link 
              href="tel:647-407-0171"
              className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-industry-dark transition-colors rounded-lg"
            >
              Call 647-407-0171
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Industry Specializations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each industry has unique requirements for materials, processes, and quality standards. 
              Our specialized expertise ensures your project meets industry-specific regulations and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedIndustries.map((industry) => (
              <div key={industry.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      {getIndustryIcon(industry.name)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                      <div className="text-sm text-gray-500">
                        {industry.monthlySearchVolume.toLocaleString()} monthly searches
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {industry.content.intro.slice(0, 150)}...
                  </p>

                  {/* Key Materials */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.content.materials.slice(0, 3).map((material, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {material}
                        </span>
                      ))}
                      {industry.content.materials.length > 3 && (
                        <span className="text-xs text-gray-500">+{industry.content.materials.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Competition Level */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Market Competition:</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      industry.competitionLevel === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : industry.competitionLevel === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {industry.competitionLevel}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More About {industry.name} Services →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Industries Choose Canadian Metal Fabricators
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our industry-specific expertise and commitment to quality make us the preferred partner 
              for companies across Ontario&apos;s diverse manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-700">Deep understanding of sector-specific requirements and regulations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Certified</h3>
              <p className="text-gray-700">ISO 9001:2015 certification with industry-specific quality processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-700">24-hour quote response with industry-specific consultation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🗺️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ontario-Wide</h3>
              <p className="text-gray-700">Comprehensive service coverage across all of Ontario</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Industry-Specific Needs?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our industry specialists are ready to provide expert consultation and competitive pricing 
            tailored to your sector&apos;s unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Your Industry Quote
            </Link>
            <Link
              href="tel:647-407-0171"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call 647-407-0171
            </Link>
          </div>
        </div>
      </section>

      <Analytics />
      </main>
      <Footer />
    </>
  );
}

function getIndustryIcon(industryName: string): string {
  const icons: { [key: string]: string } = {
    'Automotive': '🚗',
    'Food Processing': '🍽️',
    'Material Handling': '📦',
    'Construction': '🏗️',
    'Electronics': '📱',
    'Medical Devices': '🏥',
    'Aerospace': '✈️',
    'Energy': '⚡'
  };

  return icons[industryName] || '🏭';
}