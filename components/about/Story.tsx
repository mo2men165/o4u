"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Founded in Maadi, Cairo with a dedicated team and a bold vision to deliver excellent outsourcing to UK businesses. Our first client was a fast growing UK ecommerce brand that needed native level English support.",
  },
  {
    year: "2020",
    title: "Building the Foundation",
    description:
      "Expanded core teams, standardised training programmes, and deepened UK client relationships as demand for reliable offshore support grew.",
  },
  {
    year: "2021",
    title: "UK Market Breakthrough",
    description:
      "Secured major contracts with clients across England and Scotland. Built dedicated British English teams with native level training tailored to UK consumer markets and regulatory standards.",
  },
  {
    year: "2022",
    title: "Scale Up",
    description:
      "Crossed the 200-agent milestone, expanded to a second operations floor, and launched our proprietary QA monitoring system, all driven by surging UK client demand.",
  },
  {
    year: "2023",
    title: "Operational Excellence",
    description:
      "Strengthened QA and workforce development, added new service lines, and grew the client base across multiple UK sectors.",
  },
  {
    year: "2024",
    title: "Elite BPO Recognition",
    description:
      "Recognised as one of Egypt's premier BPO providers, serving 50+ clients across 4 continents, with the UK remaining our #1 market, and a 98% client retention rate.",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description:
      "Scaled teams and capabilities to meet rising UK demand while maintaining industry-leading retention and service quality.",
  },
  {
    year: "2026",
    title: "Looking Ahead",
    description:
      "Entering our eighth year with expanded operations, deeper UK partnerships, and a continued commitment to delivering excellent outsourcing from Cairo.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-gray-50 dark:bg-primary-900 py-28 overflow-hidden">
      {/* Subtle orb */}
      <div className="absolute -right-80 top-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: sticky label */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Our Journey
              </span>
              <h2
                className="font-heading font-bold text-ink dark:text-white leading-tight mt-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Eight Years of
                <br />
                <span className="text-gold-400">Relentless Growth</span>
              </h2>
              <p className="font-body text-ink/50 dark:text-white/50 text-base leading-relaxed mt-5 max-w-xs">
                From a single office in Cairo to a global outsourcing powerhouse, every year a new chapter, every client a new proof point.
              </p>
              <div className="mt-8 h-px w-16 bg-gold-500/50" />
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div ref={ref} className="relative pl-8 border-l border-black/10 dark:border-white/10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pb-14 last:pb-0 group cursor-default"
              >
                {/* Dot */}
                <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full border-2 border-gold-500 bg-gray-50 dark:bg-primary-900 group-hover:bg-gold-500 transition-colors duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full w-fit">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-ink dark:text-white">
                    {m.title}
                  </h3>
                </div>
                <p className="font-body text-ink/55 dark:text-white/55 text-base leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
