"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

const locations: Record<string, string> = {
  "Michigan, USA": "MI",
  "California, USA": "CA",
  "New York, USA": "NY",
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-accent dark:bg-ink py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Client Stories
          </span>
          <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Trusted by businesses across the globe
          </h2>
          <p className="font-body text-ink/50 dark:text-white/50 mt-4 max-w-xl mx-auto">
            Real results, real relationships — here's what our clients say about working with O4U.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="bg-white dark:bg-primary-900 border border-gray-200 dark:border-primary-700/40 rounded-2xl p-8 flex flex-col hover:border-primary-400/25 transition-colors duration-300 shadow-soft dark:shadow-none"
            >
              <Quote className="w-8 h-8 text-gold-500/50 mb-5" strokeWidth={1.5} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="font-body text-ink/70 dark:text-white/70 leading-relaxed text-sm flex-1 mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-black/8 dark:border-white/8 pt-6">
                {/* Avatar placeholder — gradient monogram */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-white text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-ink dark:text-white text-sm">{t.name}</div>
                  <div className="font-body text-ink/40 dark:text-white/40 text-xs">{t.location}</div>
                </div>
                <div className="ml-auto w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-gold-400 text-[10px]">
                    {locations[t.location] ?? "US"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
