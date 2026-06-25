"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  GraduationCap,
  Users,
  DollarSign,
  Bus,
  PartyPopper,
} from "lucide-react";
import { Container } from "@/components/ui";
import { PERKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  GraduationCap,
  Users,
  DollarSign,
  Bus,
  PartyPopper,
};

const spanPattern = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const accentGradients = [
  "from-primary-700/40 to-primary-900",
  "from-gold-600/20 to-primary-900",
  "from-primary-600/35 to-primary-900",
  "from-primary-800/50 to-ink",
  "from-gold-500/15 to-primary-900",
  "from-primary-700/30 to-ink",
];

export default function Perks() {
  return (
    <section className="bg-gray-50 dark:bg-primary-900 py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Why Work Here
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            More Than a Paycheck
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            We invest in our people because when they grow, our clients grow, and O4U grows. These are not just perks, they are commitments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PERKS.map((perk, i) => {
            const Icon = iconMap[perk.icon];
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl bg-white dark:bg-primary-800 border border-gray-200 dark:border-primary-700/50 p-8 hover:border-primary-200 dark:hover:border-primary-600/50 transition-colors duration-300 cursor-default shadow-soft dark:shadow-none ${spanPattern[i] ?? ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5 text-primary-300" />}
                </div>
                <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-2">
                  {perk.title}
                </h3>
                <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
