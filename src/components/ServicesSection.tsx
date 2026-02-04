import Link from "next/link";
import { FileCheck, Building2, ClipboardList, Landmark, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Construction Consultancy",
    description: "Comprehensive consultancy services from concept to completion including feasibility studies, technical due diligence, design coordination, and statutory approvals.",
  },
  {
    icon: Building2,
    title: "Turnkey Contracting",
    description: "Complete end-to-end construction solutions with single-point responsibility from planning and coordination to execution and handover.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Structured project management focused on time, cost, and quality control with detailed planning, scheduling, and progress monitoring.",
  },
  {
    icon: Landmark,
    title: "Heritage Restoration",
    description: "Specialized heritage restoration and TDR generation services, combining sensitivity with technical precision to preserve architectural value.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction consultancy and contracting services 
            tailored to meet your unique project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <service.icon className="text-red-700 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
