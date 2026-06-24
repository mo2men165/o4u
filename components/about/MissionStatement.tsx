"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export default function MissionStatement() {
  return (
    <section className="bg-primary-500 py-20 overflow-hidden relative">
      {/* Diagonal texture */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-[0.08]" />

      <Container className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Who We Are
          </span>

          <p className="mt-4 font-body text-white/75 text-base md:text-lg leading-relaxed">
            Founded in 2019 in Maadi, Cairo, O4U started with a single client and
            a bold conviction: Egyptian professionals can deliver outsourcing at a
            level that rivals and often exceeds onshore teams. Eight years
            later, we serve 50+ companies across four continents, with the UK as
            our largest market, and we&apos;ve built every process around making
            our clients look elite to their customers.
          </p>

          <blockquote className="mt-10">
            <p
              className="font-heading font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
            >
              &ldquo;Our mission is to unlock the potential of Egyptian talent and
              connect it to the world, creating value for every client, every
              agent, and every customer we serve.&rdquo;
            </p>
            <footer className="mt-5">
              <span className="font-heading text-sm font-semibold text-white/60 uppercase tracking-widest">
                O4U, Founded 2019
              </span>
            </footer>
          </blockquote>

          <p className="mt-10 font-body text-white/75 text-base md:text-lg leading-relaxed">
            We invest heavily in our people with structured training programmes,
            proprietary QA monitoring, and career paths that keep turnover low and
            performance high. That&apos;s why clients stay: ISO-aligned operations,
            GDPR-compliant data handling, 24/7 multilingual coverage, and radical
            transparency through real-time dashboards and daily performance
            scoring. When you partner with O4U, you get more than an offshore
            vendor. You get an extension of your team, built to perform from day
            one.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
