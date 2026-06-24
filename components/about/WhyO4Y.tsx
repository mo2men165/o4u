"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe2,
  Zap,
  BarChart3,
  Languages,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Container, AnimatedCounter } from "@/components/ui";

const stats = [
  { target: 50, suffix: "+", label: "Global Clients" },
  { target: 250, suffix: "+", label: "Dedicated Agents" },
  { target: 98, suffix: "%", label: "Client Retention" },
  { target: 10, suffix: "+", label: "Years of Excellence" },
];

const differentiators = [
  {
    icon: Globe2,
    title: "Global-Ready Infrastructure",
    body: "ISO-aligned operations, GDPR-compliant data handling, and multi-timezone coverage. We are built for global business from day one.",
  },
  {
    icon: Zap,
    title: "Launch in 2 Weeks",
    body: "From contract signing to live operations in as little as 14 days. Our pre-built talent pool and onboarding systems eliminate delays.",
  },
  {
    icon: BarChart3,
    title: "Radical Transparency",
    body: "Real-time KPI dashboards, daily QA scoring, and monthly performance reviews. You always know exactly what your team delivers.",
  },
  {
    icon: Languages,
    title: "Multilingual Teams",
    body: "English, Arabic, French, German, Spanish and more. We match your customers with agents who speak their language — literally.",
  },
  {
    icon: Clock,
    title: "24/7 Coverage",
    body: "Round-the-clock operations across shifts, time zones, and channels. Your customers get support whenever they need it.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Compromise Quality",
    body: "Every interaction is scored. Underperformers are coached immediately. We hold ourselves to the same standards you hold your own team.",
  },
];

export default function WhyO4Y() {
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-50 dark:bg-primary-900 overflow-hidden">
      {/* Stats band */}
      <div ref={statsRef} className="border-b border-black/8 dark:border-white/8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8 dark:divide-white/8">
            {stats.map((s) => (
              <div key={s.label} className="py-14 px-6 text-center">
                {statsInView ? (
                  <AnimatedCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    className="font-heading text-4xl md:text-5xl font-black text-ink dark:text-white tabular-nums"
                  />
                ) : (
                  <>
                    <span className="font-heading text-4xl md:text-5xl font-black text-ink dark:text-white">0</span>
                    <p className="font-body text-ink/45 dark:text-white/45 text-sm mt-2 leading-snug">{s.label}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Differentiators */}
      <Container className="py-28">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Why O4U
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            The Competitive Edge You Can&apos;t Ignore
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            We have built every process, technology, and team structure around one goal: making you look elite to your customers.
          </motion.p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 hover:border-primary-200 dark:hover:bg-primary-700 p-7 transition-all duration-300 cursor-default shadow-soft dark:shadow-none"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-600/30 border border-primary-400/20 flex items-center justify-center mb-5 group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink dark:text-white mb-2">
                  {d.title}
                </h3>
                <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed">
                  {d.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
