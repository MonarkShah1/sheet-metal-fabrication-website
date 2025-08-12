import { IndustryData } from '@/lib/industries/industry-data';

interface IndustryProcessProps {
  industry: IndustryData;
}

export function IndustryProcess({ industry }: IndustryProcessProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our {industry.name} Fabrication Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures quality, efficiency, and on-time delivery for every {industry.name.toLowerCase()} project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industry.content.processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <div className="w-full h-px bg-gray-200 hidden lg:block"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step}
              </h3>
              <p className="text-gray-700">
                {getProcessStepDescription(step, industry.name)}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your {industry.name} Project?
            </h3>
            <p className="text-gray-700 mb-6">
              Our expert team is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={"/quote" as any}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Your Quote
              </a>
              <a
                href="tel:647-407-0171"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Call 647-407-0171
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getProcessStepDescription(step: string, industryName: string): string {
  const stepDescriptions: { [key: string]: string } = {
    'Design review and DFM analysis': `We review your ${industryName.toLowerCase()} designs and provide Design for Manufacturing feedback to optimize production efficiency and cost.`,
    'Prototype development and testing': `We create prototypes to validate design concepts and test functionality before moving to full production.`,
    'Production part approval process (PPAP)': `We follow automotive industry PPAP standards to ensure all production parts meet your specifications and quality requirements.`,
    'High-volume manufacturing': `Our production systems are scaled to handle high-volume manufacturing while maintaining consistent quality.`,
    'Quality control and inspection': `Every part undergoes rigorous quality control and inspection processes to meet industry standards.`,
    'Just-in-time delivery coordination': `We coordinate deliveries to arrive exactly when you need them, reducing inventory costs and storage requirements.`,
    'Sanitary design review and consultation': `We ensure all food-grade fabrications meet sanitary design principles and regulatory compliance.`,
    'Food-grade material selection and sourcing': `We source only FDA-approved, food-grade materials with proper certifications and traceability.`,
    'Precision fabrication with smooth finishes': `Our fabrication processes create smooth, easy-to-clean surfaces essential for food applications.`,
    'Specialized welding and polishing': `We use specialized welding techniques and polishing processes to eliminate crevices where bacteria could harbor.`,
    'Passivation and surface treatment': `We apply passivation treatments to stainless steel surfaces to maximize corrosion resistance and cleanability.`,
    'Final inspection and documentation': `All food-grade fabrications receive comprehensive inspection and documentation for regulatory compliance.`,
    'Load analysis and structural design review': `We analyze load requirements and review structural designs to ensure safety and performance.`,
    'Material selection for application requirements': `Materials are selected based on load requirements, environmental conditions, and application-specific needs.`,
    'Precision cutting and forming operations': `Advanced cutting and forming processes ensure dimensional accuracy and proper fit.`,
    'Certified structural welding': `All structural welding is performed by certified welders following CSA and AWS standards.`,
    'Quality inspection and testing': `Comprehensive inspection and testing verify structural integrity and performance standards.`,
    'Assembly and installation support': `We provide assembly services and installation support to ensure proper system integration.`
  };

  return stepDescriptions[step] || `Professional execution of ${step.toLowerCase()} for optimal ${industryName.toLowerCase()} fabrication results.`;
}