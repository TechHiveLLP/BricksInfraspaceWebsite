"use client";

import { useState } from "react";
import { Mail, Send, Upload, Users, Target, Heart, Lightbulb, Shield } from "lucide-react";

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
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resumeFileName, setResumeFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ fullName: "", email: "", phone: "", resume: null });
    setResumeFileName("");
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setResumeFileName(file.name);
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
                  Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-full px-4 py-4 rounded-lg border border-gray-200 border-dashed bg-white flex items-center justify-center gap-2 text-gray-500 hover:border-red-400 hover:bg-red-50 transition cursor-pointer">
                    <Upload size={20} />
                    <span>{resumeFileName || "Upload your resume (PDF, DOC, DOCX)"}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Max file size: 5MB</p>
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
