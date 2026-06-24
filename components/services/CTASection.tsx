"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-100 via-primary-50 to-white dark:bg-ink overflow-hidden py-28">
      <div className="absolute inset-0 bg-mesh-primary opacity-90 hidden dark:block" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />
      <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8"
        >
          <PhoneCall className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
            Ready to Start?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-ink dark:text-white leading-tight max-w-3xl mx-auto"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Tell Us What You Need —{" "}
          <span className="text-gold-400">We&apos;ll Build It.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-ink/60 dark:text-white/60 text-lg mt-5 max-w-xl mx-auto leading-relaxed"
        >
          Every outsourcing solution we build is custom-designed for your business. No templates, no one-size-fits-all — just results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-8 py-4 font-heading text-sm font-bold text-primary-900 transition-all duration-200 shadow-elevated hover:scale-[1.02] cursor-pointer"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-8 py-4 font-heading text-sm font-semibold text-ink/80 dark:text-white/80 hover:text-ink dark:hover:text-white transition-all duration-200 cursor-pointer"
          >
            We&apos;re Also Hiring
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
