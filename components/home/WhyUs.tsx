"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, BarChart2, MessageCircle } from "lucide-react";
import { Container, AnimatedCounter } from "@/components/ui";

const pillars = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "GDPR-compliant, ISO-aligned operations with encrypted comms, strict access controls, and regular audits. Your data and your clients' data are safe with us.",
  },
  {
    icon: Zap,
    title: "Operational Agility",
    description:
      "Scale your team up or down in as little as two weeks. No long-term headcount commitments, no HR overhead — just the capacity you need, when you need it.",
  },
  {
    icon: BarChart2,
    title: "Accountable Performance",
    description:
      "Real-time KPI dashboards, daily QA audits, and transparent SLA reporting. You own the metrics and we deliver them — no guesswork, no excuses.",
  },
  {
    icon: MessageCircle,
    title: "Multilingual Talent",
    description:
      "English, Arabic, French, German, Spanish — our diverse workforce serves global customers in their native language, driving higher CSAT and first-call resolution.",
  },
];

const bigStats = [
  { target: 10, suffix: "+", label: "Years Delivering Excellence" },
  { target: 250, suffix: "+", label: "Full-Time Dedicated Agents" },
  { target: 98, suffix: "%", label: "Client Retention Rate" },
  { target: 2, suffix: "wk", label: "Average Team Launch Time" },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-50 dark:bg-primary-900 overflow-hidden">
      {/* Stats band */}
      <div ref={statsRef} className="border-b border-black/8 dark:border-white/8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8 dark:divide-white/8">
            {bigStats.map((s) => (
              <div key={s.label} className="py-12 px-6 text-center">
                {statsInView && (
                  <AnimatedCounter
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                    className="text-ink dark:text-white"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Why O4U */}
      <Container className="py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start" ref={ref}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Why Choose O4U
            </span>
            <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Not just an outsourcing vendor —{" "}
              <span className="text-primary-500 dark:text-primary-300">a growth partner</span>
            </h2>
            <p className="font-body text-ink/55 dark:text-white/55 leading-relaxed mb-8 text-lg">
              We embed into your operations, adopt your culture, and own your
              KPIs as our own. Hundreds of businesses trust us to represent
              their brand every single day.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-6 py-2.5 font-heading font-semibold text-sm text-gold-400 hover:bg-gold-500/10 transition-colors cursor-pointer"
            >
              Learn about our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Pillar grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="bg-white dark:bg-primary-800 border border-gray-200 dark:border-primary-700/50 rounded-2xl p-5 hover:border-primary-400/25 transition-colors shadow-soft dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/25 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary-300" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-semibold text-ink dark:text-white text-sm mb-2">{p.title}</h4>
                <p className="font-body text-ink/45 dark:text-white/45 text-xs leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
