import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/BricksInfraspaceWebsite" : "";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Construction Consultancy", href: "/services#construction-consultancy" },
  { name: "Turnkey Contracting", href: "/services#turnkey-contracting" },
  { name: "Heritage Restoration and TDR Generation", href: "/services#heritage-restoration-and-tdr-generation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src={`${basePath}/logo.jpeg`}
                  alt="Bricks Infraspace"
                  width={120}
                  height={32}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-200 leading-relaxed">
              A comprehensive construction consultancy and turnkey contracting firm with 35+ years of group experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-200 hover:text-red-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-400 shrink-0 mt-1" />
                <span className="text-gray-200">
                  603 Shapath 5, Opp Karnavati Club, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat, 380060
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-400 shrink-0" />
                <a href="tel:+918980037007" className="text-gray-200 hover:text-red-400 transition-colors">
                  +91 89800 37007
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-400 shrink-0" />
                <a href="mailto:bricksinfraspace@gmail.com" className="text-gray-200 hover:text-red-400 transition-colors">
                  bricksinfraspace@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} BricksInfraspace. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link href="#" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-red-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
