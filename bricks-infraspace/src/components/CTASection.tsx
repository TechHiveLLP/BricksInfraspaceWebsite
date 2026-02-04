import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-amber-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Vision?
            </h2>
            <p className="text-amber-100 text-lg max-w-xl">
              Let&apos;s discuss how we can bring your project to life. 
              Contact us for inquiries, consultations, or collaborations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-colors"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
