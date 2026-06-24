"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, UsersRound, GraduationCap, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Tell Us Your Needs",
    description:
      "Book a free consultation. We learn your business, goals, and pain points — then design a custom outsourcing plan.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "We Build Your Team",
    description:
      "We recruit, vet, and assemble a dedicated team matched to your culture, KPIs, and required language skills.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Training & Onboarding",
    description:
      "Your team undergoes rigorous paid training on your product, brand voice, systems, and quality standards.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Launch & Optimise",
    description:
      "Go live in as little as 2 weeks. We track every KPI and continuously optimise performance alongside you.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-primary-100 dark:bg-primary-800 py-24 md:py-32 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500/20 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Our Process
          </span>
          <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            From conversation to full team — in 2 weeks
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.14 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon tile with number badge */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-elevated">
                  <step.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gold-500 border-2 border-primary-100 dark:border-primary-800 text-primary-900 text-[10px] font-heading font-bold flex items-center justify-center">
                  {step.number.slice(1)}
                </span>
              </div>

              <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-gold-500/70 mb-2">
                Step {step.number}
              </span>
              <h3 className="font-heading font-semibold text-ink dark:text-white text-base mb-3">{step.title}</h3>
              <p className="font-body text-ink/45 dark:text-white/45 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
