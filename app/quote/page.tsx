'use client'

import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Textarea } from '@/components/textarea'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import { Checkbox } from '@/components/checkbox'
import { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    material: '',
    thickness: '',
    quantity: '',
    services: [] as string[],
    timeline: '',
    description: '',
    files: null as FileList | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Quote request submitted! We will contact you within 24 hours.')
    console.log('Form data:', formData)
  }

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
              <span className="text-industry-orange mr-2">📝</span>
              <span className="text-sm font-medium">Simplified Quoting Process</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your Straightforward Quote
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Upload your CAD files and project details to receive a detailed quote within 24 hours. 
              Our transparent pricing ensures no surprises - just honest, reliable service.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">🎯</span>
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">⚡</span>
                <span>24 Hour Response</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">✅</span>
                <span>No Hidden Fees</span>
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
          
          <div className="max-w-4xl mx-auto relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">👤</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-industry-dark">Contact Information</h2>
                </div>
                <FieldGroup>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field>
                      <Label>Full Name *</Label>
                      <Input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </Field>
                    <Field>
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                      />
                    </Field>
                    <Field>
                      <Label>Company Name</Label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                      />
                    </Field>
                    <Field>
                      <Label>Phone Number</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </Field>
                  </div>
                </FieldGroup>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">⚙️</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-industry-dark">Project Details</h2>
                </div>
                <FieldGroup>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field>
                      <Label>Material Type *</Label>
                      <Select
                        name="material"
                        required
                        value={formData.material}
                        onChange={handleInputChange}
                      >
                        <option value="">Select material</option>
                        <option value="steel">Steel</option>
                        <option value="stainless-steel">Stainless Steel</option>
                        <option value="aluminum">Aluminum</option>
                        <option value="copper">Copper</option>
                        <option value="brass">Brass</option>
                        <option value="other">Other</option>
                      </Select>
                    </Field>
                    <Field>
                      <Label>Material Thickness</Label>
                      <Input
                        type="text"
                        name="thickness"
                        value={formData.thickness}
                        onChange={handleInputChange}
                        placeholder="e.g., 0.125 inches, 3mm"
                      />
                    </Field>
                    <Field>
                      <Label>Quantity *</Label>
                      <Input
                        type="number"
                        name="quantity"
                        required
                        min="1"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="Enter quantity"
                      />
                    </Field>
                    <Field>
                      <Label>Desired Timeline</Label>
                      <Select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="rush">Rush (1-3 days)</option>
                        <option value="standard">Standard (1-2 weeks)</option>
                        <option value="economy">Economy (3-4 weeks)</option>
                        <option value="flexible">Flexible</option>
                      </Select>
                    </Field>
                  </div>
                </FieldGroup>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '400ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-blue text-xl">🔧</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-industry-dark">Services Required</h2>
                </div>
                <FieldGroup>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'laser-cutting', label: 'Laser Cutting' },
                      { id: 'metal-forming', label: 'Metal Forming' },
                      { id: 'welding', label: 'Welding' },
                      { id: 'finishing', label: 'Finishing' },
                      { id: 'assembly', label: 'Assembly' },
                      { id: 'quality-inspection', label: 'Quality Inspection' },
                    ].map((service) => (
                      <Field key={service.id}>
                        <Checkbox
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                        />
                        <Label>{service.label}</Label>
                      </Field>
                    ))}
                  </div>
                </FieldGroup>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-industry border border-industry-gray-200 animate-slide-up" style={{animationDelay: '600ms'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-industry-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-industry-orange text-xl">📁</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-industry-dark">Upload Files</h2>
                </div>
                <FieldGroup>
                  <Field>
                    <Label>CAD Files, Drawings, or Specifications</Label>
                    <Input
                      type="file"
                      name="files"
                      multiple
                      accept=".dwg,.dxf,.step,.stp,.iges,.igs,.pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                    />
                    <p className="text-sm text-industry-gray-500 mt-2">
                      Supported formats: DWG, DXF, STEP, IGES, PDF, JPG, PNG (Max 10MB per file)
                    </p>
                  </Field>
                  <Field>
                    <Label>Additional Requirements</Label>
                    <Textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe any special requirements, tolerances, or additional information..."
                    />
                  </Field>
                </FieldGroup>
              </div>

              <div className="bg-industry-blue/10 p-6 rounded-xl border border-industry-blue/20 animate-slide-up" style={{animationDelay: '800ms'}}>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-industry-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-industry-dark mb-2">What happens next?</h3>
                    <ul className="text-sm text-industry-gray-700 space-y-1">
                      <li>• We&apos;ll review your requirements within 24 hours</li>
                      <li>• Our engineering team will analyze your files</li>
                      <li>• You&apos;ll receive a detailed quote with pricing and timeline</li>
                      <li>• We&apos;ll schedule a call to discuss your project</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center animate-slide-up" style={{animationDelay: '1000ms'}}>
                <Button
                  type="submit"
                  color="blue"
                  className="text-lg px-12 py-4 bg-industry-orange hover:bg-industry-orange/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-industry-lg"
                >
                  Submit Quote Request
                </Button>
                <p className="text-sm text-industry-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}