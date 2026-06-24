"use client";

import { motion } from "framer-motion";
import { Shield, Award, Star, Repeat, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";

const values = [
  {
    icon: Shield,
    number: "01",
    title: "Integrity First",
    description:
      "Every promise we make, we keep. Transparent reporting, honest communication, and zero tolerance for shortcuts — even when no one is watching.",
    accent: "from-primary-700/40 to-primary-900/80",
    highlight: "border-primary-400/20",
  },
  {
    icon: Award,
    number: "02",
    title: "Excellence Always",
    description:
      "We don't aim for average. Daily QA audits, continuous coaching, and relentless performance improvement are the standard — not the exception.",
    accent: "from-gold-500/20 to-primary-900/80",
    highlight: "border-gold-500/20",
  },
  {
    icon: Star,
    number: "03",
    title: "People at the Center",
    description:
      "Our agents are not resources — they are our greatest asset. We invest in their growth, wellbeing, and career progression because it directly drives client outcomes.",
    accent: "from-primary-600/30 to-primary-900/80",
    highlight: "border-primary-300/20",
  },
  {
    icon: Repeat,
    number: "04",
    title: "Adapt & Evolve",
    description:
      "The BPO landscape never stands still. We embrace change, adopt new technologies, and continuously refine our model to stay ahead of our clients' needs.",
    accent: "from-gold-600/20 to-primary-900/80",
    highlight: "border-gold-400/20",
  },
];

export default function Values() {
  return (
    <section className="relative bg-accent dark:bg-ink py-28 overflow-hidden">
      {/* Orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-700/15 blur-[100px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            What We Stand For
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            The Values That Drive Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            These are not words on a wall. They are the operating principles that determine every hire we make, every campaign we run, and every partnership we build.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 dark:bg-primary-700/30 rounded-2xl overflow-hidden border border-gray-200 dark:border-primary-700/40">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group bg-white dark:bg-primary-900 p-10 cursor-default dark:hover:bg-primary-800 transition-colors duration-300 border border-gray-100 dark:border-primary-700/40"
              >
                {/* Large number watermark */}
                <span className="absolute top-4 right-6 font-heading text-7xl font-black text-white/[0.04] select-none leading-none">
                  {v.number}
                </span>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-ink dark:text-white mb-3">
                      {v.title}
                    </h3>
                    <p className="font-body text-ink/55 dark:text-white/55 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>

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
