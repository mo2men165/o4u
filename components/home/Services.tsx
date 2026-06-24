"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Headphones, Target, TrendingUp, Database, BarChart3,
  MessageSquare, Users, Calendar, Briefcase, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Headphones, Target, TrendingUp, Database, BarChart3,
  MessageSquare, Users, Calendar, Briefcase,
};

// Bento sizing: some cards span 2 cols on large screens
const bentoLayout = [
  "lg:col-span-2", // Customer Service — wide
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2", // Market Research — wide
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-accent dark:bg-ink py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Our Services
            </span>
            <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Everything your business needs,{" "}
              <span className="text-primary-500 dark:text-primary-300">under one roof</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 font-heading font-semibold text-sm text-gold-400 hover:text-gold-300 transition-colors cursor-pointer"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isWide = bentoLayout[index] === "lg:col-span-2";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                className={bentoLayout[index]}
              >
                <Link href="/services" className="group block h-full cursor-pointer">
                  <div className={`h-full bg-white dark:bg-primary-900 border border-gray-200 dark:border-primary-700/40 rounded-2xl p-6 transition-all duration-300 hover:border-primary-400/30 shadow-soft dark:shadow-none ${isWide ? "md:flex md:gap-8 md:items-start" : ""}`}>
                    <div className={isWide ? "flex-shrink-0" : ""}>
                      <div className="w-11 h-11 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mb-5 group-hover:bg-primary-500/30 transition-colors">
                        {Icon && <Icon className="w-5 h-5 text-primary-300" strokeWidth={1.75} />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-ink dark:text-white text-base mb-2">
                        {service.title}
                      </h3>
                      <p className="font-body text-ink/45 dark:text-white/45 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-4 font-heading text-xs font-semibold text-primary-500/70 dark:text-primary-300/70 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors">
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
