import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Reliable Sheet Metal Fabrication | Truth in Execution',
  description: 'Get in touch with our sheet metal fabrication experts. Proven fundamentals, unshakeable reliability, and honest communication for your manufacturing needs.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
          {/* Industry 4.0 background patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat opacity-30"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border border-industry-blue/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-industry-orange/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-industry-blue rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-industry-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-industry-blue rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
            {/* Brand Value Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-orange/20 border border-industry-orange/40 mb-6">
              <span className="text-industry-orange mr-2">💬</span>
              <span className="text-sm font-medium">Direct Communication</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in Touch with Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Expert Team</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Ready to discuss your sheet metal fabrication project? We&apos;re here to help with quotes, 
              questions, and technical support. Experience honest communication backed by proven fundamentals.
            </p>
            
            {/* Contact Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                <span>Direct Expert Access</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>24 Hour Response</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-industry-light relative overflow-hidden">
          {/* Background tech pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industry-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industry-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/10 border border-industry-blue/20 mb-6">
                  <span className="text-industry-blue mr-2">📞</span>
                  <span className="text-sm font-medium text-industry-dark">Contact Information</span>
                </div>
                
                <h2 className="text-3xl font-bold text-industry-dark mb-8">
                  Direct Access to Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Expert Team</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-industry-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-industry-dark">Phone</h3>
                        <p className="text-industry-gray-600 mb-2">
                          <a href="tel:+1-555-123-4567" className="hover:text-industry-blue transition-colors">
                            (555) 123-4567
                          </a>
                        </p>
                        <p className="text-sm text-industry-gray-500">Mon-Fri 8:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-industry-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-industry-dark">Email</h3>
                        <p className="text-industry-gray-600 mb-2">
                          <a href="mailto:info@precisionmetalworks.com" className="hover:text-industry-orange transition-colors">
                            info@precisionmetalworks.com
                          </a>
                        </p>
                        <p className="text-sm text-industry-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200 hover:shadow-industry-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-industry-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-industry-dark">Address</h3>
                        <p className="text-industry-gray-600 mb-2">
                          123 Industrial Drive<br />
                          Manufacturing City, ST 12345
                        </p>
                        <p className="text-sm text-industry-gray-500">Facility tours available by appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="bg-white p-6 rounded-xl shadow-industry border border-industry-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-industry-orange text-lg">⏰</span>
                      </div>
                      <h3 className="text-xl font-semibold text-industry-dark">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-industry-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-industry-gray-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">✉️</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-industry-dark">Send us a Message</h2>
                </div>
                <form className="space-y-6">
                  <FieldGroup>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field>
                        <Label>First Name *</Label>
                        <Input
                          type="text"
                          name="firstName"
                          required
                          placeholder="John"
                        />
                      </Field>
                      <Field>
                        <Label>Last Name *</Label>
                        <Input
                          type="text"
                          name="lastName"
                          required
                          placeholder="Doe"
                        />
                      </Field>
                    </div>

                    <Field>
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="john.doe@company.com"
                      />
                    </Field>

                    <Field>
                      <Label>Company</Label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Your Company Name"
                      />
                    </Field>

                    <Field>
                      <Label>Subject *</Label>
                      <Select
                        name="subject"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </Select>
                    </Field>

                    <Field>
                      <Label>Message *</Label>
                      <Textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project or question..."
                      />
                    </Field>

                    <Button
                      type="submit"
                      color="blue"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </FieldGroup>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-tech-gradient text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern bg-repeat"></div>
            <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-industry-orange/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-industry-orange mr-2">📝</span>
              <span className="text-sm font-medium">Quote Request</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Need a Quote Instead?
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Ready to start your project? Use our streamlined quote request form to get detailed pricing 
              and timeline information backed by our proven fundamentals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
              >
                <span>Get Straightforward Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-industry-dark text-white rounded-lg font-semibold transition-all duration-300"
              >
                <span>View Our Services</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}