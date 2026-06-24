"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const GALLERY_IMAGES = [
  { label: "Pick Your Secret Santa",   src: "/officeImages/f847f8c4-f624-465e-af27-6826c8ceb974.jpeg",                   width: 1280, height: 1224 },
  { label: "Monsters Party",           src: "/officeImages/9c1b6f93-41e1-48d8-b509-7bf616fc7752.jpeg",                   width: 1600, height: 1594 },
  { label: "Secret Santa Gifts",       src: "/new-images/IMG_4139.jpg",                                                   width: 1440, height: 1920 },
  { label: "Team Outing",              src: "/new-images/3.png",                                                          width: 1080, height: 1350 },
  { label: "Top Performers January",   src: "/new-images/2.png",                                                          width: 1080, height: 1350 },
  { label: "Team Outing",             src: "/new-images/1.png",                                                           width: 1080, height: 1350 },
  { label: "Secret Santa Reveal",      src: "/new-images/IMG_0710.jpg",                                                   width: 1440, height: 1920 },
  { label: "Game Night",               src: "/officeImages/WhatsApp Image 2026-04-22 at 8.12.24 PM.jpeg",                width: 1080, height: 1080 },
  { label: "New Arabic Account",       src: "/officeImages/WhatsApp Image 2026-04-22 at 8.09.19 PM.jpeg",                width: 1080, height: 1080 },
  { label: "Magic Box",                src: "/officeImages/WhatsApp Image 2026-04-22 at 8.27.12 PM.jpeg",                width: 1600, height: 1134 },
  { label: "Secret Santa Reveal",      src: "/officeImages/WhatsApp Image 2026-04-22 at 8.24.22 PM.jpeg",                width: 884,  height: 772  },
  { label: "But First, Doughnuts!",    src: "/officeImages/WhatsApp Image 2026-04-22 at 8.24.59 PM.jpeg",                width: 1600, height: 1600 },
  { label: "Monsters Party",           src: "/officeImages/0ce89c78-5d36-4ff7-b815-1a2d85f6668f.jpeg",                   width: 1600, height: 1594 },
  { label: "Celebrating Our Success",  src: "/officeImages/d6003ba7-0e8c-49c0-bc6a-80b4b21b3612.jpeg",                   width: 1600, height: 1467 },
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 dark:bg-ink py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-700/10 blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Life at O4U
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            A Workplace Worth Showing Off
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto"
          >
            From daily operations to yearly celebrations — here is a glimpse into what it actually feels like to work here.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3"
        >
          {GALLERY_IMAGES.map((item, i) => (
            <motion.div
              key={`${item.src}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="break-inside-avoid mb-3 rounded-2xl overflow-hidden group relative"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-heading text-xs font-semibold text-white drop-shadow">
                  {item.label}
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
