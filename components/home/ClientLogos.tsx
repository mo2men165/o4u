"use client";

import { Container, Placeholder } from "@/components/ui";

const logos = Array.from({ length: 6 }, (_, i) => `Client Logo ${i + 1}`);

export default function ClientLogos() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <Container>
        <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-10 mx-auto w-full justify-center">
          <span className="h-px w-10 bg-gray-300" />
          Trusted by global brands
          <span className="h-px w-10 bg-gray-300" />
        </span>
      </Container>

      <div className="relative group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll-logos group-hover:[animation-play-state:paused]">
          {/* Double for seamless loop */}
          {[...logos, ...logos].map((label, index) => (
            <div key={`${label}-${index}`} className="flex-shrink-0 mx-6">
              <Placeholder
                label={label}
                width={160}
                height={80}
                tone="light"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-logos {
          animation: scroll-logos 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
