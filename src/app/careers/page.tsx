"use client";

import { useState } from "react";
import { Mail, Send, Linkedin, Users, Target, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in every project we undertake.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honesty and transparency are at the core of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to deliver better results.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "We prioritize the safety of our team and everyone on our sites.",
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const WEB3FORMS_CAREERS_KEY = "36b97add-0818-4219-b68a-d736c5bfe7f4";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_CAREERS_KEY,
          subject: `New Job Application from ${formData.fullName}`,
          from_name: "Bricks Infraspace Careers",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedin: formData.linkedin,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ fullName: "", email: "", phone: "", linkedin: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again or email us directly at bricksinfra.hr@gmail.com");
      }
    } catch {
      setError("Failed to submit application. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our <span className="text-red-500">Team</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Build your career with Gujarat&apos;s trusted construction partner
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With <span className="text-red-500">Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Bricks Infraspace, we believe our people are our greatest asset. 
              Join a team that values growth, innovation, and making a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-red-700" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We <span className="text-red-500">Offer</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Competitive salary packages",
                  "Professional growth opportunities",
                  "Collaborative work environment",
                  "Work on prestigious projects",
                  "Learning and development programs",
                  "Work-life balance",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-red-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Be Part of Something Big
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We&apos;re always looking for talented individuals who are passionate 
                about construction, architecture, and project management. Whether 
                you&apos;re an experienced professional or just starting your career, 
                we have opportunities for you.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-red-700" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">HR Email</p>
                    <a 
                      href="mailto:bricksinfra.hr@gmail.com" 
                      className="text-gray-900 font-medium hover:text-red-700 transition-colors"
                    >
                      bricksinfra.hr@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply <span className="text-red-500">Now</span>
            </h2>
            <p className="text-gray-600">
              Ready to join our team? Fill out the form below and we&apos;ll get back to you.
              You can also email your resume directly to{" "}
              <a href="mailto:bricksinfra.hr@gmail.com" className="text-red-700 font-medium hover:underline">
                bricksinfra.hr@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700 font-medium text-center">
                  Thank you for your application! Our HR team will review it and get back to you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 font-medium text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Linkedin size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-700 text-white py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}
