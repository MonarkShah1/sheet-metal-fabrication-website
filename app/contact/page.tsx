import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Sheet Metal Fabrication Experts',
  description: 'Get in touch with PrecisionMetal Works for all your sheet metal fabrication needs. Phone, email, or visit our facility.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                Ready to discuss your sheet metal fabrication project? We're here to help with quotes, 
                questions, and technical support.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-secondary-600 mb-2">
                        <a href="tel:+1-555-123-4567" className="hover:text-primary-600 transition-colors">
                          (555) 123-4567
                        </a>
                      </p>
                      <p className="text-sm text-secondary-500">Mon-Fri 8:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-secondary-600 mb-2">
                        <a href="mailto:info@precisionmetalworks.com" className="hover:text-primary-600 transition-colors">
                          info@precisionmetalworks.com
                        </a>
                      </p>
                      <p className="text-sm text-secondary-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <p className="text-secondary-600 mb-2">
                        123 Industrial Drive<br />
                        Manufacturing City, ST 12345
                      </p>
                      <p className="text-sm text-secondary-500">Facility tours available by appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-secondary-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
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

        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Need a Quote Instead?
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
                Ready to start your project? Use our quote request form to get detailed pricing and timeline information.
              </p>
              <Button href="/quote" color="blue" className="text-lg px-8 py-4">
                Get Quote Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}