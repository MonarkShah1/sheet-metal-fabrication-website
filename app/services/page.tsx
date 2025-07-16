import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import { Button } from '@/components/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sheet Metal Fabrication Services',
  description: 'Complete sheet metal fabrication services including laser cutting, welding, forming, and finishing. Professional manufacturing for engineers and OEMs.',
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Complete Sheet Metal Fabrication Services
              </h1>
              <p className="text-xl text-secondary-700 mb-8">
                From concept to completion, we provide comprehensive sheet metal fabrication services 
                with precision, quality, and fast turnaround times.
              </p>
            </div>
          </div>
        </section>

        <section id="cutting" className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Laser Cutting</h2>
                <p className="text-lg text-secondary-700 mb-6">
                  State-of-the-art laser cutting technology for precision parts with complex geometries 
                  and tight tolerances. Our advanced systems handle various materials and thicknesses.
                </p>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Materials: Steel, Stainless Steel, Aluminum, Copper, Brass
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Thickness: Up to 1&quot; depending on material
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Tolerance: ±0.005&quot; standard, tighter available
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Maximum size: 60&quot; x 120&quot;
                  </li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Common Applications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Industrial</h4>
                    <ul className="space-y-1 text-secondary-600">
                      <li>• Enclosures</li>
                      <li>• Brackets</li>
                      <li>• Panels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Commercial</h4>
                    <ul className="space-y-1 text-secondary-600">
                      <li>• Signage</li>
                      <li>• Displays</li>
                      <li>• Fixtures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="forming" className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Equipment & Capabilities</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Press Brake Capacity:</span>
                    <span className="font-medium">200 tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed Length:</span>
                    <span className="font-medium">12 feet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bend Radius:</span>
                    <span className="font-medium">0.5mm - 25mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Angle Accuracy:</span>
                    <span className="font-medium">±0.5°</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Metal Forming</h2>
                <p className="text-lg text-secondary-700 mb-6">
                  Expert metal forming services including press brake operations, rolling, and stamping. 
                  We create complex shapes and assemblies with consistent quality.
                </p>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Press brake bending with precise angle control
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Rolling and cylinder forming
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Stamping and punching operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Custom tooling design and fabrication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="welding" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Professional Welding Services
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Certified welders using advanced techniques for strong, reliable joints on all project types.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">TIG Welding</h3>
                <p className="text-secondary-600 mb-4">
                  Precise tungsten inert gas welding for high-quality, clean welds on thin materials.
                </p>
                <ul className="text-sm text-secondary-600 space-y-2">
                  <li>• Stainless steel specialty</li>
                  <li>• Aluminum welding</li>
                  <li>• Precise control</li>
                  <li>• Clean appearance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">MIG Welding</h3>
                <p className="text-secondary-600 mb-4">
                  Metal inert gas welding for production efficiency and strong structural joints.
                </p>
                <ul className="text-sm text-secondary-600 space-y-2">
                  <li>• High production rates</li>
                  <li>• Strong penetration</li>
                  <li>• Structural applications</li>
                  <li>• Cost-effective</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">Spot Welding</h3>
                <p className="text-secondary-600 mb-4">
                  Resistance spot welding for sheet metal assemblies and high-volume production.
                </p>
                <ul className="text-sm text-secondary-600 space-y-2">
                  <li>• Fast cycle times</li>
                  <li>• Consistent quality</li>
                  <li>• Minimal distortion</li>
                  <li>• Automated processes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="finishing" className="bg-secondary-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Finishing Services
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Complete your project with professional finishing services for durability and appearance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Powder Coating</h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Durable, environmentally friendly finish in hundreds of colors.
                </p>
                <ul className="text-xs text-secondary-500 space-y-1">
                  <li>• Corrosion resistance</li>
                  <li>• Color options</li>
                  <li>• Eco-friendly</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Plating</h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Zinc, chrome, and nickel plating for corrosion protection.
                </p>
                <ul className="text-xs text-secondary-500 space-y-1">
                  <li>• Corrosion protection</li>
                  <li>• Wear resistance</li>
                  <li>• Decorative options</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Anodizing</h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Aluminum anodizing for enhanced durability and appearance.
                </p>
                <ul className="text-xs text-secondary-500 space-y-1">
                  <li>• Aluminum only</li>
                  <li>• Color options</li>
                  <li>• Hardness increase</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Passivation</h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Stainless steel passivation for maximum corrosion resistance.
                </p>
                <ul className="text-xs text-secondary-500 space-y-1">
                  <li>• Stainless steel</li>
                  <li>• Corrosion resistance</li>
                  <li>• Medical grade</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Upload your designs and get a detailed quote for any combination of our services.
              </p>
              <Button href="/quote" color="white" className="px-8 py-4">
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