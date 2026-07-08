import Image from "next/image";
import { clientLogos } from "@/config/clientLogos";

// Render the list twice so the marquee loops seamlessly (track shifts by -50%).
const marqueeLogos = [...clientLogos, ...clientLogos];

// Edge fade so logos gently appear/disappear at the container edges.
const fadeMask =
  "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)";

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to have partnered with respected developers and
            organizations to deliver spaces that stand the test of time.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      >
        <div className="animate-marquee flex w-max items-center">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-28 shrink-0 items-center justify-center px-8 md:h-32 md:px-10"
              aria-hidden={index >= clientLogos.length ? true : undefined}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={220}
                height={96}
                className="max-h-12 w-auto max-w-[180px] object-contain md:max-h-16"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
