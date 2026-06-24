"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white dark:bg-mesh-primary py-24 md:py-36">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-[0.07]" />
      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gold-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/25 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8">
            <Calendar className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-white/70">
              Free 30-Min Consultation
            </span>
          </span>

          <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Ready to build your{" "}
            <span className="text-gold-500 dark:text-gold-400">dedicated team?</span>
          </h2>
          <p className="font-body text-ink/60 dark:text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us what you need. We'll have a custom team plan and a proposal
            in your inbox within 24 hours — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 font-heading font-semibold text-base text-primary-900 hover:bg-gold-400 transition-colors duration-200 shadow-glow cursor-pointer"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-8 py-4 font-heading font-semibold text-base text-ink dark:text-white hover:bg-black/8 dark:hover:bg-white/8 transition-colors duration-200 cursor-pointer"
            >
              Explore Careers
            </Link>
          </div>

          <p className="mt-8 font-body text-ink/35 dark:text-white/35 text-sm">
            No credit card. No commitment. Just a conversation.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
