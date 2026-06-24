"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  ShoppingCart,
  DollarSign,
  Cpu,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Heart,
  ShoppingCart,
  DollarSign,
  Cpu,
  Store,
};

export default function Industries() {
  return (
    <section className="bg-gray-50 dark:bg-ink py-24 overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[300px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left sticky label */}
          <div className="lg:w-72 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Industries
              </span>
              <h2
                className="font-heading font-bold text-ink dark:text-white mt-3 leading-tight"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
              >
                We Serve Every{" "}
                <span className="text-gold-400">Major Vertical</span>
              </h2>
              <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mt-4">
                Sector-specific training, compliance awareness, and domain expertise for each industry we serve.
              </p>
            </motion.div>
          </div>

          {/* Right: industry cards */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {INDUSTRIES.map((industry, i) => {
              const Icon = iconMap[industry.icon] ?? Building2;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/40 bg-white dark:bg-primary-900 hover:border-primary-200 dark:hover:bg-primary-800 shadow-soft dark:shadow-none p-6 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-600/30 border border-primary-400/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-ink dark:text-white mb-1.5">
                    {industry.title}
                  </h3>
                  <p className="font-body text-ink/45 dark:text-white/45 text-xs leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
