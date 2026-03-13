"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, X } from "lucide-react";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/PCZMEBDJFzbg13Tr6";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["603 Shapath 5, Opp Karnavati Club, Sarkhej - Gandhinagar Hwy, Ahmedabad, Gujarat, 380060"],
    link: GOOGLE_MAPS_URL,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 89800 37007"],
    link: "tel:+918980037007",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["bricksinfraspace@gmail.com"],
    link: "mailto:bricksinfraspace@gmail.com",
  },
  // {
  //   icon: Clock,
  //   title: "Working Hours",
  //   details: ["Mon - Sat: 9:00 AM - 6:00 PM"],
  // },
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
  const [error, setError] = useState("");

  const WEB3FORMS_CONTACT_KEY = "e1a3b11b-877c-4856-bfb7-01e37ef26a52"; // TODO: Replace with your Web3Forms access key for bricksinfraspace@gmail.com

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_CONTACT_KEY,
          subject: `New Contact Inquiry from ${formData.name}`,
          from_name: "Bricks Infraspace Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or email us directly at bricksinfraspace@gmail.com");
      }
    } catch {
      setError("Failed to send message. Please check your internet connection and try again.");
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
                {contactInfo.map((info, index) => {
                  const content = (
                    <>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="text-red-700" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </>
                  );

                  const isExternal = "link" in info && info.link?.startsWith("http");

                  return "link" in info && info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start justify-between gap-3">
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-green-600 hover:text-green-800 transition-colors flex-shrink-0 mt-0.5"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700 font-medium">{error}</p>
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
    </>
  );
}
