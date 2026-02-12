"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Users, Upload } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Ahmedabad, Gujarat, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 89800 37007"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["bricksinfraspace@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Career form state
  const [careerFormData, setCareerFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });
  const [isCareerSubmitting, setIsCareerSubmitting] = useState(false);
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [resumeFileName, setResumeFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCareerSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsCareerSubmitting(false);
    setCareerSubmitted(true);
    setCareerFormData({ fullName: "", email: "", phone: "", resume: null });
    setResumeFileName("");
    
    setTimeout(() => setCareerSubmitted(false), 5000);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCareerFormData({ ...careerFormData, resume: file });
      setResumeFileName(file.name);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch for project inquiries, consultations, or collaborations
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;d love to hear from you. Reach out to us for project inquiries, 
                consultations, or collaborations. Our team is ready to help you 
                bring your vision to life.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="text-red-700" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="+91 89800 37007"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-700 text-white py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-500 text-sm text-center mt-6">
                Let&apos;s discuss how we can bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Career Info */}
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-red-700" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our <span className="text-red-500">Team</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We&apos;re always looking for talented individuals to join our growing team. 
                If you&apos;re passionate about construction, architecture, or project management, 
                we&apos;d love to hear from you.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Bricks Infraspace, we value innovation, integrity, and teamwork. 
                Join us in building Gujarat&apos;s future, one project at a time.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
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

            {/* Career Application Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Apply Now
              </h3>

              {careerSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700 font-medium">
                    Thank you for your application! Our HR team will review it and get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleCareerSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={careerFormData.fullName}
                    onChange={(e) => setCareerFormData({ ...careerFormData, fullName: e.target.value })}
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
                    value={careerFormData.email}
                    onChange={(e) => setCareerFormData({ ...careerFormData, email: e.target.value })}
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
                    value={careerFormData.phone}
                    onChange={(e) => setCareerFormData({ ...careerFormData, phone: e.target.value })}
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
                    <div className="w-full px-4 py-3 rounded-lg border border-gray-200 border-dashed bg-gray-50 flex items-center justify-center gap-2 text-gray-500 hover:border-red-400 hover:bg-red-50 transition">
                      <Upload size={20} />
                      <span>{resumeFileName || "Upload your resume (PDF, DOC, DOCX)"}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Max file size: 5MB</p>
                </div>

                <button
                  type="submit"
                  disabled={isCareerSubmitting}
                  className="w-full bg-red-700 text-white py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isCareerSubmitting ? (
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
        </div>
      </section>
    </>
  );
}
