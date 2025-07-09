import type { Metadata } from 'next'
import { FAQ } from '@/components/ui/FAQ'
import { BreadcrumbList } from '@/components/ui/BreadcrumbList'

export const metadata: Metadata = {
  title: 'Metal Fabrication Resources | Design Guides & FAQs | Canadian Metal Fabricators',
  description: 'Metal fabrication resources including design guides, material specifications, and frequently asked questions. Learn about laser cutting vs turret punch, tolerances, and best practices.',
  keywords: 'metal fabrication guide, design for manufacturing, laser cutting guide, material specifications, fabrication best practices'
}

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' }
  ]

  const faqItems = [
    {
      question: 'What are the advantages of laser cutting vs turret punch for prototypes?',
      answer: 'Laser cutting offers superior precision and flexibility for prototypes, with tolerances of ±0.1mm and ability to cut complex geometries without tooling. Turret punching is more economical for high-volume production of simple shapes but requires custom tooling for each feature.'
    },
    {
      question: 'What tolerances can you achieve with different processes?',
      answer: 'Laser cutting: ±0.1mm, CNC machining: ±0.025mm, Sheet metal bending: ±0.1mm, Welding: ±0.5mm typical. Tighter tolerances available upon request with secondary operations.'
    },
    {
      question: 'How do I prepare files for quoting?',
      answer: 'Send DXF or DWG files with dimensions clearly marked. Include material specifications, quantities, and any special requirements. PDF drawings are acceptable for initial quotes but native CAD files are preferred for production.'
    },
    {
      question: 'What materials do you work with?',
      answer: 'We specialize in mild steel, stainless steel (304, 316, 316L), aluminum (5052, 6061), and galvanized steel. Custom alloys and exotic materials available upon request with material certifications.'
    },
    {
      question: 'Do you provide material certifications?',
      answer: 'Yes, we provide mill test certificates for all materials. Additional certifications (chemical analysis, mechanical properties) available upon request for aerospace and medical applications.'
    },
    {
      question: 'What is your typical lead time?',
      answer: 'Our average turnaround is 10 days for standard projects. Rush orders (1-5 days) available for premium pricing. Complex projects may require 2-3 weeks depending on scope and current capacity.'
    },
    {
      question: 'Do you offer design for manufacturing consultation?',
      answer: 'Yes, our engineers provide DFM feedback to optimize your designs for cost and quality. We review bend radii, hole sizes, weld accessibility, and suggest improvements to reduce manufacturing costs.'
    },
    {
      question: 'What quality standards do you follow?',
      answer: 'We are ISO 9001:2015 certified with documented quality procedures. All work is inspected to drawing specifications with CMM capability for critical dimensions. IATF 16949 certification in progress for automotive clients.'
    }
  ]

  return (
    <main className="py-20">
      <div className="section-container">
        <BreadcrumbList items={breadcrumbs} />
        
        <div className="text-center mb-16">
          <h1 className="section-title">Resources & Design Guides</h1>
          <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
            Everything you need to know about metal fabrication, from design best practices 
            to material selection and process optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Design for Manufacturing Guide</h3>
            <p className="text-industrial-600 mb-4">
              Comprehensive guide to optimizing your designs for cost-effective metal fabrication.
            </p>
            <a 
              href="/guides/dfm-guide.pdf"
              className="btn-primary text-center block"
            >
              Download PDF
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Material Selection Guide</h3>
            <p className="text-industrial-600 mb-4">
              Choose the right material for your application with our detailed comparison charts.
            </p>
            <a 
              href="/guides/material-guide.pdf"
              className="btn-primary text-center block"
            >
              Download PDF
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Tolerance & Finish Guide</h3>
            <p className="text-industrial-600 mb-4">
              Understanding achievable tolerances and surface finishes for different processes.
            </p>
            <a 
              href="/guides/tolerance-guide.pdf"
              className="btn-primary text-center block"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </div>
      </div>
    </main>
  )
}