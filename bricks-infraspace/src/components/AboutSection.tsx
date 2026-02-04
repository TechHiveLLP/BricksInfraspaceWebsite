import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "35+ years of group experience",
  "25+ million sq. ft. delivered",
  "Residential, Commercial & Infrastructure",
  "End-to-end construction solutions",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Construction site"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Completed building"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-amber-600 text-white rounded-lg p-6 shadow-xl">
              <span className="text-4xl font-bold">35+</span>
              <span className="block text-amber-100">Years Experience</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a one-stop construction consultancy and turnkey contracting firm 
              delivering reliable, compliant, and end-to-end construction solutions. 
              Backed by 35+ years of group experience, we have successfully delivered 
              diverse projects across residential, commercial, and infrastructure sectors.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Rooted in a strong family legacy in real estate and infrastructure, 
              our firm blends experience with modern practices.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-amber-600 shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
