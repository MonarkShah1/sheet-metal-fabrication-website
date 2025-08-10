import Link from 'next/link'

interface RelatedLink {
  href: string
  label: string
  description?: string
}

interface InternalLinksProps {
  title?: string
  links: RelatedLink[]
  className?: string
}

export function InternalLinks({ 
  title = 'Related Services', 
  links, 
  className = '' 
}: InternalLinksProps) {
  return (
    <section className={`bg-industry-light p-6 rounded-xl ${className}`}>
      <h3 className="text-lg font-semibold text-industry-dark mb-4">{title}</h3>
      <nav aria-label={title}>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link 
                href={link.href as any}
                className="group flex items-start space-x-3 hover:bg-white p-3 rounded-lg transition-colors"
              >
                <svg 
                  className="w-5 h-5 text-industry-blue mt-0.5 group-hover:text-industry-orange transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
                <div>
                  <span className="font-medium text-industry-dark group-hover:text-industry-blue transition-colors">
                    {link.label}
                  </span>
                  {link.description && (
                    <p className="text-sm text-industry-gray-600 mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export const serviceLinks: Record<string, RelatedLink[]> = {
  engineering: [
    {
      href: '/services/laser-cutting-bending',
      label: 'Laser Cutting & Bending',
      description: 'Precision cutting for your engineered designs'
    },
    {
      href: '/services/smart-sourcing',
      label: 'Smart Sourcing',
      description: 'Material procurement for your projects'
    },
    {
      href: '/quote',
      label: 'Get a Quote',
      description: 'Upload your designs for pricing'
    }
  ],
  'laser-cutting-bending': [
    {
      href: '/services/welding',
      label: 'Welding Services',
      description: 'Join your laser cut parts'
    },
    {
      href: '/services/finishing',
      label: 'Finishing Services',
      description: 'Complete your parts with professional finishing'
    },
    {
      href: '/services/engineering',
      label: 'Engineering Support',
      description: 'Optimize your designs for laser cutting'
    }
  ],
  welding: [
    {
      href: '/services/laser-cutting-bending',
      label: 'Laser Cutting & Bending',
      description: 'Precision parts ready for welding'
    },
    {
      href: '/services/finishing',
      label: 'Finishing Services',
      description: 'Protect welded assemblies'
    },
    {
      href: '/about',
      label: 'Our Certifications',
      description: 'AWS D1.1 certified welding'
    }
  ],
  finishing: [
    {
      href: '/services/welding',
      label: 'Welding Services',
      description: 'Pre-finishing assembly'
    },
    {
      href: '/services/laser-cutting-bending',
      label: 'Laser Cutting & Bending',
      description: 'Parts ready for finishing'
    },
    {
      href: '/contact',
      label: 'Contact Us',
      description: 'Discuss finishing options'
    }
  ],
  'smart-sourcing': [
    {
      href: '/services/engineering',
      label: 'Engineering Support',
      description: 'Material selection guidance'
    },
    {
      href: '/services/laser-cutting-bending',
      label: 'Laser Cutting & Bending',
      description: 'Process your sourced materials'
    },
    {
      href: '/quote',
      label: 'Request Quote',
      description: 'Get sourcing prices'
    }
  ]
}

export const pageLinks: Record<string, RelatedLink[]> = {
  home: [
    {
      href: '/services',
      label: 'View All Services',
      description: 'Complete fabrication capabilities'
    },
    {
      href: '/quote',
      label: 'Get a Quote',
      description: '24-hour response time'
    },
    {
      href: '/about',
      label: 'About Us',
      description: '30+ years of excellence'
    }
  ],
  about: [
    {
      href: '/services',
      label: 'Our Services',
      description: 'Complete fabrication solutions'
    },
    {
      href: '/contact',
      label: 'Contact Our Team',
      description: 'Speak with experts'
    },
    {
      href: '/blog',
      label: 'Manufacturing Insights',
      description: 'Industry best practices'
    }
  ],
  contact: [
    {
      href: '/quote',
      label: 'Request a Quote',
      description: 'Start your project'
    },
    {
      href: '/services',
      label: 'Browse Services',
      description: 'See our capabilities'
    },
    {
      href: '/about',
      label: 'Learn About Us',
      description: 'Our story and values'
    }
  ],
  quote: [
    {
      href: '/services',
      label: 'Service Details',
      description: 'Understand our capabilities'
    },
    {
      href: '/blog',
      label: 'Design Guidelines',
      description: 'Optimize for manufacturing'
    },
    {
      href: '/contact',
      label: 'Need Help?',
      description: 'Contact our team'
    }
  ],
  blog: [
    {
      href: '/services',
      label: 'Our Services',
      description: 'Apply what you learn'
    },
    {
      href: '/quote',
      label: 'Start Your Project',
      description: 'Get expert fabrication'
    },
    {
      href: '/about',
      label: 'Our Expertise',
      description: '30+ years of knowledge'
    }
  ]
}