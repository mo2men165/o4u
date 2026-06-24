"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Smile,
  UserCheck,
  Clock,
  Award,
  Settings,
  Wallet,
} from "lucide-react";
import { Container, AnimatedCounter } from "@/components/ui";
import { BENEFITS as BENEFIT_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Smile,
  UserCheck,
  Clock,
  Award,
  Settings,
  Wallet,
};

const quickStats = [
  { target: 98, suffix: "%", label: "SLA Compliance" },
  { target: 14, suffix: "d", label: "Avg Launch Time" },
  { target: 50, suffix: "+", label: "Global Clients" },
  { target: 4, suffix: "", label: "Continents Served" },
];

export default function Benefits() {
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-accent dark:bg-ink py-24 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Built to Perform, Built to Last
          </motion.h2>
        </div>

        {/* Stats band */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-primary-700/30 rounded-2xl overflow-hidden mb-14"
        >
          {quickStats.map((s) => (
            <div key={s.label} className="bg-white dark:bg-primary-900 py-10 px-6 text-center">
              {statsInView ? (
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  label={s.label}
                  className="font-heading text-3xl font-black text-primary tabular-nums"
                  labelClassName="text-gray-500 dark:text-white/50"
                />
              ) : (
                <>
                  <span className="font-heading text-3xl font-black text-primary">0</span>
                  <p className="font-body text-gray-500 text-sm mt-1">{s.label}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Benefit icons */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {BENEFIT_ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-primary-800 border border-gray-200 dark:border-primary-700/40 flex items-center justify-center mb-3 shadow-soft group-hover:shadow-elevated group-hover:border-primary-200 dark:group-hover:border-primary-400/30 transition-all duration-300">
                  {Icon && <Icon className="w-6 h-6 text-primary-500" />}
                </div>
                <span className="font-heading font-semibold text-ink dark:text-white/70 text-xs leading-tight">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
