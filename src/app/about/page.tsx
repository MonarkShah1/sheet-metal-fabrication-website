import type { Metadata } from 'next'
import { BreadcrumbList } from '@/components/ui/BreadcrumbList'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Canadian Metal Fabricators | ISO 9001 Metal Fabrication Team',
  description: 'Learn about Canadian Metal Fabricators - ISO 9001 certified metal fabrication team serving Ontario since 1985. Meet our skilled engineers and certified welders.',
  keywords: 'ISO 9001 metal fabrication team, Canadian metal fabricators, Ontario metal fabrication company, certified welders, manufacturing engineers',
  openGraph: {
    title: 'About Canadian Metal Fabricators | ISO 9001 Metal Fabrication Team',
    description: 'Learn about Canadian Metal Fabricators - ISO 9001 certified metal fabrication team serving Ontario since 1985.',
    type: 'website',
  },
}

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ]

  const teamMembers = [
    {
      name: 'Michael Thompson, P.Eng.',
      role: 'General Manager & Lead Engineer',
      credentials: 'Professional Engineer (Ontario), 20+ years experience',
      expertise: 'Design for manufacturing, quality systems, ISO 9001 implementation'
    },
    {
      name: 'Sarah Chen, P.Eng.',
      role: 'Manufacturing Engineer',
      credentials: 'Professional Engineer (Ontario), Lean Six Sigma Black Belt',
      expertise: 'Process optimization, laser cutting programming, CNC setup'
    },
    {
      name: 'David Martinez',
      role: 'Lead Welder',
      credentials: 'CWB Level 2, 15+ years structural welding',
      expertise: 'Structural steel, pressure vessels, stainless steel specialty'
    },
    {
      name: 'Jennifer Park',
      role: 'Quality Manager',
      credentials: 'ASQ Certified Quality Manager, ISO 9001 Lead Auditor',
      expertise: 'Quality systems, inspection protocols, customer compliance'
    }
  ]

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System certified since 2010',
      icon: '🏆'
    },
    {
      title: 'CWB Certification',
      description: 'Canadian Welding Bureau certified facility',
      icon: '🔥'
    },
    {
      title: 'IATF 16949',
      description: 'Automotive quality standard (in progress)',
      icon: '🚗'
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Canadian Metal Fabricators',
      foundingDate: '1985',
      description: 'ISO 9001 certified metal fabrication company serving Ontario since 1985.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Industrial Way',
        addressLocality: 'Kitchener',
        addressRegion: 'ON',
        postalCode: 'N2G 4X8',
        addressCountry: 'CA'
      },
      employee: teamMembers.map(member => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        qualifications: member.credentials
      })),
      hasCredential: certifications.map(cert => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        description: cert.description
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="py-20">
        <div className="section-container">
          <BreadcrumbList items={breadcrumbs} />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">About Canadian Metal Fabricators</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-industrial-600 leading-relaxed text-center">
                Since 1985, Canadian Metal Fabricators has been Ontario&apos;s trusted partner for 
                precision metal fabrication. Our ISO 9001 certified team combines decades of expertise 
                with state-of-the-art equipment to deliver exceptional quality and service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">Est. 1985</h3>
                <p className="text-industrial-600">
                  Nearly 40 years of metal fabrication excellence serving Ontario manufacturers.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">Expert Team</h3>
                <p className="text-industrial-600">
                  Professional engineers, certified welders, and quality specialists.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">Quality Focus</h3>
                <p className="text-industrial-600">
                  ISO 9001 certified processes ensure consistent, reliable results.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">Our Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="card">
                    <h3 className="text-lg font-bold text-primary-800 mb-2">{member.name}</h3>
                    <p className="text-accent-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-industrial-600 mb-3">{member.credentials}</p>
                    <p className="text-sm text-industrial-700">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">Certifications & Standards</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="card text-center">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg font-bold text-primary-800 mb-2">{cert.title}</h3>
                    <p className="text-industrial-600">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-industrial-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Our Mission</h2>
              <p className="text-lg text-industrial-700 text-center leading-relaxed">
                To be Ontario&apos;s most trusted metal fabrication partner by delivering exceptional quality, 
                innovative solutions, and reliable service that helps our customers succeed in their markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="card">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Why Choose CMF?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>ISO 9001:2015 certified quality management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Professional engineers on staff</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>99.7% on-time delivery record</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>State-of-the-art equipment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Our Commitment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Continuous improvement processes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Environmental responsibility</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Safety-first workplace culture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Customer satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>Local Ontario community support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Ready to Work Together?</h2>
              <p className="text-industrial-600 mb-6">
                Experience the difference that comes from working with Ontario&apos;s most trusted metal fabrication team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="btn-primary text-center"
                >
                  Contact Our Team
                </Link>
                <Link 
                  href="/capabilities"
                  className="btn-secondary text-center"
                >
                  View Our Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}