'use client'

import Link from 'next/link'

interface FooterCTAProps {
  title?: string
  subtitle?: string
  phone?: string
  email?: string
  address?: {
    street: string
    city: string
    province: string
    postal: string
  }
  businessInfo?: {
    established: string
    certifications: string[]
    employees: string
  }
  socialLinks?: {
    linkedin?: string
    facebook?: string
    youtube?: string
  }
}

export function FooterCTA({
  title = "Ready to Start Your Project?",
  subtitle = "Get a free quote today and discover why leading companies choose Canadian Metal Fabricators",
  phone = "+1 (416) 555-0123",
  email = "info@canadianmetalfab.com",
  address = {
    street: "1234 Industrial Drive",
    city: "Toronto",
    province: "Ontario",
    postal: "M1P 2N3"
  },
  businessInfo = {
    established: "1985",
    certifications: ["ISO 9001:2015", "CWB Certified", "AWS D1.1"],
    employees: "50+"
  },
  socialLinks = {
    linkedin: "https://linkedin.com/company/canadian-metal-fabricators",
    facebook: "https://facebook.com/canadianmetalfab",
    youtube: "https://youtube.com/@canadianmetalfab"
  }
}: FooterCTAProps) {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - parseInt(businessInfo.established)

  return (
    <footer className="bg-primary-800 text-white">
      {/* Main CTA Section */}
      <div className="section-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <Link 
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="text-2xl font-bold text-accent hover:text-accent-300 transition-colors duration-200"
            >
              {phone}
            </Link>
            <p className="text-primary-200 mt-1">Mon-Fri: 7AM-6PM EST</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <Link 
              href={`mailto:${email}`}
              className="text-xl font-semibold text-accent hover:text-accent-300 transition-colors duration-200 break-all"
            >
              {email}
            </Link>
            <p className="text-primary-200 mt-1">Response within 4 hours</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <address className="not-italic text-primary-100 leading-relaxed">
              {address.street}<br />
              {address.city}, {address.province}<br />
              {address.postal}
            </address>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link
            href="/request-quote"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Get Your Free Quote Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-primary-700 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Years in Business */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-accent mb-2">{yearsInBusiness}+</div>
              <div className="text-primary-200">Years in Business</div>
              <div className="text-sm text-primary-300 mt-1">Since {businessInfo.established}</div>
            </div>

            {/* Employees */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-accent mb-2">{businessInfo.employees}</div>
              <div className="text-primary-200">Skilled Professionals</div>
              <div className="text-sm text-primary-300 mt-1">Expert Team</div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-accent mb-2">{businessInfo.certifications.length}</div>
              <div className="text-primary-200">Certifications</div>
              <div className="text-sm text-primary-300 mt-1">Quality Assured</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 border-t border-primary-700 pt-8">
          <h3 className="text-xl font-semibold text-center mb-6">Our Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {businessInfo.certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-primary-100 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary-900 py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Company Info */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">CMF</span>
              </div>
              <div>
                <div className="font-bold text-lg">Canadian Metal Fabricators</div>
                <div className="text-primary-300 text-sm">Excellence in Metal Fabrication</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="text-primary-200 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="/capabilities" className="text-primary-200 hover:text-white transition-colors duration-200">
                Capabilities
              </Link>
              <Link href="/contact" className="text-primary-200 hover:text-white transition-colors duration-200">
                Contact
              </Link>
              <Link href="/privacy" className="text-primary-200 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-200 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
              {socialLinks.facebook && (
                <Link
                  href={socialLinks.facebook}
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
              {socialLinks.youtube && (
                <Link
                  href={socialLinks.youtube}
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300 text-sm">
            <p>&copy; {currentYear} Canadian Metal Fabricators. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}