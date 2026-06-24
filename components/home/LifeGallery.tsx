"use client";

import { SectionHeading, Container, Placeholder } from "@/components/ui";

const galleryItems = [
  "Office Floor",
  "Team Lunch",
  "Training Session",
  "Team Outing",
  "Award Ceremony",
  "Fun Friday",
  "Workshop",
  "Team Building",
  "Holiday Party",
  "Workspace",
];

export default function LifeGallery() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Our Culture"
          title="Life at Outsourcing 4 You"
          subtitle="A glimpse into our vibrant, international workplace culture."
        />
      </Container>

      <div className="relative mt-14 group">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {/* Double the items for seamless loop */}
          {[...galleryItems, ...galleryItems].map((label, index) => (
            <div key={`${label}-${index}`} className="flex-shrink-0 mx-3">
              <Placeholder
                label={label}
                width={300}
                height={200}
                tone={index % 2 === 0 ? "subtle" : "light"}
                className="rounded-xl shadow-soft"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes for the scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
