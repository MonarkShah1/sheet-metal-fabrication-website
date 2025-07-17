import React from 'react';

export function ResourcesSection() {
  const resources = [
    {
      title: 'Mastering Sheet Metal Basics',
      description: 'Understanding the fundamentals of precision fabrication',
      type: 'Guide',
      icon: '🔧',
      link: '/resources/basics'
    },
    {
      title: 'Quality Control Essentials',
      description: 'Proven methods for consistent manufacturing results',
      type: 'Article',
      icon: '🎯',
      link: '/resources/quality'
    },
    {
      title: 'Exploring AI in Sheet Metal',
      description: 'Educational insights on emerging technologies we watch',
      type: 'Educational',
      icon: '🤖',
      link: '/resources/ai-insights'
    },
    {
      title: 'Future of Manufacturing',
      description: 'What trends and technologies might shape the industry',
      type: 'Educational',
      icon: '🔮',
      link: '/resources/future'
    }
  ];

  return (
    <section className="py-16 px-6 bg-industry-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-industry-dark mb-4">
            Manufacturing Resources
          </h2>
          <p className="text-industry-gray-600 max-w-2xl mx-auto">
            Educational content on proven fundamentals and emerging trends in sheet metal fabrication
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-industry-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{resource.icon}</span>
                <span className="text-xs bg-industry-gray-100 text-industry-gray-600 px-2 py-1 rounded">
                  {resource.type}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-industry-dark">
                {resource.title}
              </h3>
              
              <p className="text-sm text-industry-gray-600 mb-4">
                {resource.description}
              </p>
              
              <a
                href={resource.link}
                className="inline-flex items-center text-industry-blue hover:text-industry-orange transition-colors text-sm font-medium"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Subtle note about educational content */}
        <div className="text-center mt-8">
          <p className="text-sm text-industry-gray-500">
            Educational content includes emerging technologies for informational purposes only
          </p>
        </div>
      </div>
    </section>
  );
}