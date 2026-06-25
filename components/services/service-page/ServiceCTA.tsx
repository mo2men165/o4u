"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

const TRUST_BADGES = [
  "2-Week Launch",
  "No Long Term Lock-In",
  "Dedicated Account Manager",
  "Free Consultation",
];

export default function ServiceCTA({ data }: { data: ServicePageData }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-100 via-primary-50 to-white dark:bg-ink overflow-hidden py-32">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-mesh-primary opacity-0 dark:opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.05]" />

      {/* Orbs */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-400/15 dark:bg-primary-600/20 blur-[90px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/12 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8"
        >
          <MessageCircle className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/60">
            Ready to Start?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-ink dark:text-white leading-tight max-w-3xl mx-auto"
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          Elevate Your{" "}
          <span className="text-gold-500 dark:text-gold-400">{data.title}</span>{" "}
          with O4U
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="font-body text-ink/60 dark:text-white/55 text-lg mt-5 mb-4 max-w-xl mx-auto leading-relaxed"
        >
          {data.tagline} Let&apos;s build your dedicated team and prove it in 14 days.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium font-heading px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/8 text-ink/60 dark:text-white/50 border border-black/8 dark:border-white/8"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-4 font-heading text-sm font-bold text-primary-900 transition-all duration-200 shadow-elevated hover:scale-[1.03]"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-8 py-4 font-heading text-sm font-semibold text-ink/80 dark:text-white/80 transition-all duration-200"
          >
            Explore All Services
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
