"use client";

import { motion } from "framer-motion";
import { User, UserCheck, Users, Briefcase, Crown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

const STEPS = [
  {
    title: "Agent",
    subtitle: "Day 1",
    icon: User,
    description: "Paid training, onboarding, and your first client account.",
  },
  {
    title: "Senior Agent",
    subtitle: "6–12 months",
    icon: UserCheck,
    description: "Mentor new joiners, handle escalations, earn performance bonuses.",
  },
  {
    title: "Team Lead",
    subtitle: "1–2 years",
    icon: Users,
    description: "Lead a squad of 8–12 agents, own KPI delivery and coaching.",
  },
  {
    title: "Operations Manager",
    subtitle: "2–4 years",
    icon: Briefcase,
    description: "Run full client accounts, manage multiple teams and SLAs.",
  },
  {
    title: "Department Head",
    subtitle: "4+ years",
    icon: Crown,
    description: "Shape O4U strategy, build new verticals, and lead at the executive level.",
  },
];

export default function CareerPath() {
  return (
    <section className="bg-accent dark:bg-ink py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-700/10 blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Growth Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            A Clear Ladder From{" "}
            <span className="text-gold-400">Day One</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto"
          >
            Over 40% of our team leads and managers were promoted from agent roles. Your trajectory is visible from the moment you join.
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex-1 flex flex-col items-center relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-primary-500/60 to-transparent" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 border-2 border-primary-400/60 dark:border-primary-500/60 flex items-center justify-center mb-4 hover:bg-primary-200 dark:hover:bg-primary-600 hover:border-gold-500 transition-all duration-300 cursor-default">
                    <Icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <span className="font-heading text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-heading text-base font-bold text-ink dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-ink/45 dark:text-white/45 text-xs leading-relaxed max-w-[140px]">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8 border-l border-black/10 dark:border-white/10 space-y-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-4"
              >
                <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full border-2 border-primary-500 bg-accent dark:bg-ink flex items-center justify-center">
                  <Icon className="w-2 h-2 text-gold-400" />
                </div>
                <div>
                  <span className="font-heading text-xs font-semibold text-gold-400 uppercase tracking-widest">
                    {step.subtitle}
                  </span>
                  <h3 className="font-heading text-base font-bold text-ink dark:text-white mt-0.5 mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-ink/45 dark:text-white/45 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
