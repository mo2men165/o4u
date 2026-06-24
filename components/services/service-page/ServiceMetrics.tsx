"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

export default function ServiceMetrics({ data }: { data: ServicePageData }) {
  return (
    <section className="relative bg-primary-900 dark:bg-ink py-28 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern [background-size:60px_60px] opacity-[0.04]" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-400"
          >
            By the Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-heading font-bold text-white mt-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
          >
            Results That Speak for Themselves
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
          {data.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative bg-primary-800/50 dark:bg-primary-900/60 py-14 px-6 text-center group hover:bg-primary-700/50 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="font-heading font-black text-gold-400 block leading-none mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {stat.value}
                </span>
                <p className="font-body text-white/45 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-body text-white/40 text-base mb-6">
            These numbers are built on real client results — not projections.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 hover:bg-gold-400/20 hover:border-gold-400/50 px-6 py-2.5 font-heading text-sm font-semibold text-gold-400 transition-all duration-200"
          >
            See How We Do It
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
