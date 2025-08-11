'use client';

import { useState } from 'react';
import { LocationData } from '@/lib/locations/location-types';
import { FAQSchema } from '@/components/schemas/FAQSchema';
import { businessInfo } from '@/config/business-info';

interface LocalFAQProps {
  location: LocationData;
}

export function LocalFAQ({ location }: LocalFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  // Add some general FAQs if location doesn't have enough
  const generalFAQs = [
    {
      id: 'general-materials',
      question: `What materials can you work with for ${location.city} projects?`,
      answer: `We work with a wide range of materials including carbon steel, stainless steel, aluminum, and specialty alloys. Our equipment can handle materials from 16 gauge to 1" thick steel, perfect for ${location.city}'s diverse industrial needs.`
    },
    {
      id: 'general-timeline',
      question: `What are typical project timelines for ${location.city} businesses?`,
      answer: `Project timelines vary based on complexity and current workload. Simple parts can be completed in 1-3 days, while complex assemblies may take 1-2 weeks. We always provide accurate timelines with our quotes for ${location.city} projects.`
    },
    {
      id: 'general-minimum',
      question: `Do you have minimum order quantities for ${location.city} companies?`,
      answer: `We work with projects of all sizes, from single prototypes to large production runs. There's no minimum order quantity - we're happy to support ${location.city} businesses regardless of project size.`
    },
    {
      id: 'general-quality',
      question: `What quality standards do you maintain for ${location.city} work?`,
      answer: `All our work meets ISO 9001:2015 quality standards with AWS-certified welding. We provide material certifications and dimensional reports as needed for ${location.city} projects requiring documentation.`
    }
  ];

  // Combine location-specific FAQs with general ones
  const allFAQs = [...location.faqs];
  
  // Add general FAQs if we don't have enough location-specific ones
  if (allFAQs.length < 4) {
    const needed = 4 - allFAQs.length;
    allFAQs.push(...generalFAQs.slice(0, needed));
  }

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const pageUrl = `${businessInfo.url}/locations/${location.slug}`;

  return (
    <>
      <FAQSchema 
        faqs={allFAQs} 
        pageUrl={pageUrl}
        pageContext={{
          type: 'location',
          name: `Canadian Metal Fabricators - ${location.city}`
        }}
      />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Our {location.city} Services
          </h2>
          <p className="text-lg text-gray-600">
            Common questions from {location.city} businesses about our sheet metal fabrication services, 
            delivery, and capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {allFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-industry-blue/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                aria-expanded={openFAQ === faq.id}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                  openFAQ === faq.id ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-5 h-5 text-gray-500" 
                    fill="none" 
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-industry-blue/5 to-industry-orange/5 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions About Our {location.city} Services?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to answer any specific questions about your project requirements, 
              delivery options, or capabilities for {location.city} businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-industry-blue text-white font-semibold rounded-lg hover:bg-industry-blue-dark transition-colors"
              >
                Contact Our Team
                <span className="ml-2">📞</span>
              </a>
              <a 
                href="/quote" 
                className="inline-flex items-center px-6 py-3 border border-industry-orange text-industry-orange hover:bg-industry-orange hover:text-white transition-colors rounded-lg"
              >
                Get Project Quote
                <span className="ml-2">💰</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">📞</div>
            <div className="font-semibold text-gray-900">Phone</div>
            <div className="text-industry-blue">647-407-0171</div>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">📧</div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-industry-blue">info@canadianmetalfab.com</div>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">⏰</div>
            <div className="font-semibold text-gray-900">Response Time</div>
            <div className="text-industry-orange">Same Day for {location.city}</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}