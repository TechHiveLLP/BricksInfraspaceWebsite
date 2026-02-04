import { FileCheck, Building2, ClipboardList, Landmark, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: FileCheck,
    title: "Construction Consultancy",
    description: "We provide comprehensive construction consultancy services to support projects from initial concept to final completion. Our team assists with feasibility studies, technical due diligence, design coordination, statutory approvals, and cost planning. By combining strong technical expertise with practical execution knowledge, we help clients make informed decisions and achieve compliant, efficient, and successful project outcomes.",
    features: [
      "Feasibility Studies",
      "Technical Due Diligence",
      "Design Coordination",
      "Statutory Approvals",
      "Cost Planning",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Building2,
    title: "Turnkey Contracting",
    description: "Our turnkey contracting services offer a complete, end-to-end construction solution with single-point responsibility. We manage the entire process from planning and coordination to execution and handover ensuring projects are delivered within defined timelines and budgets. This integrated approach ensures quality control, seamless coordination, and peace of mind for our clients.",
    features: [
      "Single-Point Responsibility",
      "End-to-End Solutions",
      "Timeline Management",
      "Budget Control",
      "Quality Assurance",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "We deliver structured project management services focused on time, cost, and quality control. Our scope includes detailed planning, scheduling, contractor coordination, on-site supervision, and progress monitoring. Through proactive management and transparent reporting, we ensure smooth execution, risk mitigation, and timely delivery of projects.",
    features: [
      "Detailed Planning & Scheduling",
      "Contractor Coordination",
      "On-Site Supervision",
      "Progress Monitoring",
      "Risk Mitigation",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Landmark,
    title: "Heritage Restoration",
    description: "We specialize in heritage restoration and Transfer of Development Rights (TDR) generation and trading, combining sensitivity with technical precision. Our team works to preserve architectural and historical value while ensuring regulatory compliance. Through strategic TDR planning and execution, we help clients unlock development potential and maximize the value of their assets.",
    features: [
      "Heritage Preservation",
      "TDR Generation & Trading",
      "Regulatory Compliance",
      "Architectural Conservation",
      "Value Maximization",
    ],
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-500">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive construction consultancy and contracting services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-red-700" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-red-700 shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
