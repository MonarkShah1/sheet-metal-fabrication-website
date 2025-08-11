'use client';

import { useState } from 'react';

interface CampaignQuoteFormProps {
  source: string;
  defaultService?: string;
  defaultLocation?: string;
}

export function CampaignQuoteForm({ 
  source, 
  defaultService = '', 
  defaultLocation = '' 
}: CampaignQuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    location: defaultLocation,
    material: '',
    quantity: '',
    timeline: '',
    description: '',
    files: null as FileList | null,
    source: source
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData for file uploads
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'files' && value instanceof FileList) {
          Array.from(value).forEach((file: File) => {
            submitData.append('files', file);
          });
        } else if (value && typeof value === 'string') {
          submitData.append(key, value);
        }
      });

      // In a real implementation, this would go to your API endpoint
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: defaultService,
        location: defaultLocation,
        material: '',
        quantity: '',
        timeline: '',
        description: '',
        files: null,
        source: source
      });
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for your quote request. We&apos;ll review your requirements and respond within 24 hours.
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Check your email for confirmation</p>
          <p>• Urgent requests: Call 647-407-0171</p>
          <p>• Questions: quotes@canadianmetalfabricators.ca</p>
        </div>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          Submit Another Quote →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(416) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Company Name"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Service</option>
            <option value="Sheet Metal Fabrication">Sheet Metal Fabrication</option>
            <option value="Steel Fabrication">Steel Fabrication</option>
            <option value="Stainless Steel Work">Stainless Steel Work</option>
            <option value="Laser Cutting">Laser Cutting</option>
            <option value="CNC Forming">CNC Forming</option>
            <option value="Welding Services">Welding Services</option>
            <option value="Custom Fabrication">Custom Fabrication</option>
            <option value="Assembly Services">Assembly Services</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Project Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Toronto, ON"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-2">
            Material Type
          </label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Material</option>
            <option value="Carbon Steel">Carbon Steel</option>
            <option value="Stainless Steel 304">Stainless Steel 304</option>
            <option value="Stainless Steel 316">Stainless Steel 316</option>
            <option value="Aluminum">Aluminum</option>
            <option value="Galvanized Steel">Galvanized Steel</option>
            <option value="Corten Steel">Corten Steel</option>
            <option value="Other">Other</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 50 pieces, 10 assemblies"
          />
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
          Required Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select Timeline</option>
          <option value="ASAP - Rush Order">ASAP - Rush Order</option>
          <option value="Within 1 week">Within 1 week</option>
          <option value="Within 2 weeks">Within 2 weeks</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="Flexible timing">Flexible timing</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please describe your project requirements, dimensions, specifications, etc."
        />
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
          Upload Files (Optional)
        </label>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="text-sm text-gray-600 mt-1">
          Accepted: PDF, DWG, DXF, JPG, PNG, DOC (Max 10MB per file)
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting Quote Request...
          </div>
        ) : (
          'Get My Free Quote'
        )}
      </button>

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            There was an error submitting your quote request. Please try again or call us directly at 647-407-0171.
          </p>
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-xs text-gray-600">
        By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
        Your data is used solely to provide you with an accurate quote and project consultation.
      </p>
    </form>
  );
}