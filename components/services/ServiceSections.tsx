"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Target,
  Database,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Briefcase,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  Target,
  Database,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Briefcase,
};

const extendedDescriptions: Record<string, string> = {
  "customer-support":
    "Multilingual inbound and outbound agents trained to represent your brand with empathy and precision. 24/7 coverage across calls, live chat, email, and social media.",
  "sales-outsourcing":
    "A dedicated sales force that integrates seamlessly with your team, from cold outreach and lead qualification to closing deals in B2B and B2C markets.",
  "back-office":
    "Free your internal teams from repetitive tasks. Our specialists handle data entry, document processing, invoicing, and records management at speed and scale.",
  "revenue-growth":
    "Maximise every customer interaction with strategic upselling and cross selling programmes that increase average order value and lifetime customer worth.",
  "analytics-reporting":
    "Real time dashboards, custom KPI tracking, and actionable insights so you can make confident, data backed decisions and continuously optimise performance.",
  "chat-email-support":
    "Fast, professional written support across every digital channel. Consistent brand tone, rapid turnaround, and high CSAT scores across live chat and email.",
  "hr-solutions":
    "Full HR solutions, talent sourcing, recruitment, onboarding, payroll, and performance management for your outsourced workforce.",
  "appointment-setting":
    "Keep your pipeline full with qualified appointments set by professional agents who handle prospect outreach, qualification, scheduling, and follow-ups.",
  "virtual-assistants":
    "Skilled virtual assistants who work as a seamless extension of your team, executive support, calendar management, research, and travel booking.",
};

const accentColors = [
  "from-primary-700/40 to-primary-900",
  "from-gold-600/20 to-primary-900",
  "from-primary-600/35 to-primary-900",
  "from-primary-800/50 to-ink",
  "from-gold-500/15 to-primary-900",
  "from-primary-700/30 to-ink",
  "from-primary-600/40 to-primary-900",
  "from-gold-600/25 to-primary-900",
  "from-primary-800/40 to-ink",
];

export default function ServiceSections() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-primary-900 py-28">
      {/* Ambient orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-600/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Every Service You Need to Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            From day one customer support to advanced analytics, every service is delivered by trained, dedicated teams who live and breathe your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Briefcase;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl bg-white dark:bg-primary-800 border border-gray-200 dark:border-primary-700/50 p-8 overflow-hidden hover:border-primary-200 dark:hover:border-primary-600/50 transition-colors duration-300 cursor-default shadow-soft dark:shadow-none"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-heading text-6xl font-black text-white/[0.04] select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary-300" />
                </div>

                <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mb-5">
                  {extendedDescriptions[service.id] || service.description}
                </p>

                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="font-body text-ink/60 dark:text-white/60 text-xs">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-gold-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
