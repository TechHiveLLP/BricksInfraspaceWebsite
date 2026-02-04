import { CheckCircle, Target, Eye, Shield, Award, Clock, Heart, Users } from "lucide-react";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Shield, title: "Integrity", description: "Honest and ethical practices in all business dealings" },
  { icon: Award, title: "Quality", description: "Premium materials and skilled craftsmanship" },
  { icon: Eye, title: "Transparency", description: "Clear communication and honest pricing" },
  { icon: Clock, title: "Timely Delivery", description: "Projects completed on schedule" },
  { icon: Heart, title: "Client Satisfaction", description: "Going above and beyond expectations" },
];

const journey = [
  { value: "35+", label: "Years Experience" },
  { value: "25M+", label: "Sq. Ft. Delivered" },
  { value: "150+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn about our journey, our values, and the team that makes it all possible
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Excellence in Construction
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a one-stop construction consultancy and turnkey contracting firm 
                delivering reliable, compliant, and end-to-end construction solutions. 
                Backed by 35+ years of group experience, we have successfully delivered 
                diverse projects across residential, commercial, and infrastructure sectors.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Rooted in a strong family legacy in real estate and infrastructure, 
                our firm blends experience with modern practices. Founded with a vision 
                to simplify construction processes, we continue to build trust through 
                quality and transparency.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction site"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {journey.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-amber-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Founder & Leadership
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Preet Doshi</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over three decades of experience in real estate and infrastructure, 
                the founder established the firm with a vision to deliver quality-driven, 
                transparent, and reliable construction solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Their leadership and technical expertise continue to guide the company&apos;s 
                growth and long-term client relationships.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-200 rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Founder Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-amber-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable, sustainable, and value-driven construction solutions 
                while maintaining the highest standards of quality and professionalism.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-amber-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted construction partner known for integrity, innovation, 
                and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
