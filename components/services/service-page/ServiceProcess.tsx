"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  UserCheck,
  GraduationCap,
  TrendingUp,
  Target,
  Database,
  Send,
  Search,
  Settings,
  CheckCircle,
  Users,
  Mic,
  PenTool,
  Phone,
  BarChart2,
  FileText,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  UserCheck,
  GraduationCap,
  TrendingUp,
  Target,
  Database,
  Send,
  Search,
  Settings,
  CheckCircle,
  Users,
  Mic,
  PenTool,
  Phone,
  BarChart2,
  FileText,
  Calendar,
};

export default function ServiceProcess({ data }: { data: ServicePageData }) {
  return (
    <section className="bg-gray-50 dark:bg-ink py-28 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-500 dark:text-gold-400"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
          >
            Your Team, Live in Days
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="font-body text-ink/50 dark:text-white/50 mt-4 max-w-lg mx-auto leading-relaxed"
          >
            A proven 4-step launch process that gets you from contract to fully
            operational in under 2 weeks.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-700 to-transparent" />
            {/* Animated shimmer */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full -mt-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step, i) => {
              const Icon = iconMap[step.icon] ?? BookOpen;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-white dark:bg-primary-800 border-2 border-primary-100 dark:border-primary-700 shadow-soft flex flex-col items-center justify-center gap-1">
                      <Icon className="w-6 h-6 text-primary-500 dark:text-primary-300" />
                      <span className="font-heading text-[10px] font-black text-primary-300 dark:text-primary-500 tracking-widest">
                        {step.step}
                      </span>
                    </div>
                    {/* Gold ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold-400/0 group-hover:border-gold-400/60 transition-colors duration-300 scale-110" />
                  </div>

                  <h3 className="font-heading font-bold text-ink dark:text-white text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-ink/55 dark:text-white/50 text-sm leading-relaxed">
                    {step.description}
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
