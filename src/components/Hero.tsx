import Link from "next/link";
import { ArrowRight, Building2, Users, Award, Briefcase } from "lucide-react";

const stats = [
  { icon: Award, value: "35+", label: "Years Experience" },
  { icon: Building2, value: "25M+", label: "Sq. Ft. Delivered" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Briefcase, value: "150+", label: "Projects Completed" },
];

export default function Hero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gray-900/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-amber-400 text-sm font-medium">35+ Years of Group Experience</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building Better{" "}
            <span className="text-amber-500">Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A comprehensive construction consultancy and turnkey contracting firm 
            with decades of experience delivering reliable, compliant, and end-to-end 
            construction solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="text-amber-500" size={20} />
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
