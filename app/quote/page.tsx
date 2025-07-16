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
        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Get Your Custom Quote
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                Upload your CAD files and project details to receive a detailed quote within 24 hours. 
                Our transparent pricing ensures no surprises.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
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

                <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                  <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
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

                <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                  <h2 className="text-2xl font-semibold mb-6">Services Required</h2>
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

                <div className="bg-white p-8 rounded-lg shadow-lg border border-secondary-100">
                  <h2 className="text-2xl font-semibold mb-6">Upload Files</h2>
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
                      <p className="text-sm text-secondary-500 mt-2">
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

                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">What happens next?</h3>
                      <ul className="text-sm text-primary-800 space-y-1">
                        <li>• We'll review your requirements within 24 hours</li>
                        <li>• Our engineering team will analyze your files</li>
                        <li>• You'll receive a detailed quote with pricing and timeline</li>
                        <li>• We'll schedule a call to discuss your project</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    color="blue"
                    className="text-lg px-12 py-4"
                  >
                    Submit Quote Request
                  </Button>
                  <p className="text-sm text-secondary-500 mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}