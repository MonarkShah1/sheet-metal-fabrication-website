import Link from 'next/link'
import { businessInfo } from '@/config/business-info'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Canadian Metal Fabricators</h3>
            <p className="text-secondary-300 mb-4">
              Your trusted partner for custom sheet metal fabrication. We deliver precision, quality, and reliability for all your manufacturing needs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">AWS Certified</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><Link href="/services#cutting" className="hover:text-white transition-colors">Laser Cutting</Link></li>
              <li><Link href="/services#welding" className="hover:text-white transition-colors">Welding</Link></li>
              <li><Link href="/services#forming" className="hover:text-white transition-colors">Metal Forming</Link></li>
              <li><Link href="/services#finishing" className="hover:text-white transition-colors">Finishing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-300">
              <li><Link href={"/about" as any} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={"/quote" as any} className="hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link href={"/blog" as any} className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href={"/contact" as any} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>{businessInfo.address.streetAddress}</li>
              <li>{businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}</li>
              <li>Canada</li>
              <li><a href={`tel:${businessInfo.telephone}`} className="hover:text-white transition-colors">{businessInfo.telephone}</a></li>
              <li><a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">{businessInfo.email}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © 2017 Canadian Metal Fabricators Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={"/privacy" as any} className="text-secondary-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href={"/terms" as any} className="text-secondary-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}