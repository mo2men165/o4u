"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Zap,
  Heart,
  Users,
  Phone,
  Mail,
  RefreshCw,
  Shield,
  Target,
  Mic,
  FileText,
  Eye,
  Lock,
  Cloud,
  PenTool,
  Monitor,
  TrendingUp,
  Layers,
  MessageCircle,
  Share2,
  Cpu,
  ArrowUpRight,
  Search,
  Calendar,
  Database,
  DollarSign,
  Bell,
  ClipboardList,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  Zap,
  Heart,
  Users,
  Phone,
  Mail,
  RefreshCw,
  Shield,
  Target,
  Mic,
  FileText,
  Eye,
  Lock,
  Cloud,
  PenTool,
  Monitor,
  TrendingUp,
  Layers,
  MessageCircle,
  Share2,
  Cpu,
  ArrowUpRight,
  Search,
  Calendar,
  Database,
  DollarSign,
  Bell,
  ClipboardList,
  BookOpen,
};

export default function ServiceFeatures({ data }: { data: ServicePageData }) {
  return (
    <section className="bg-white dark:bg-primary-900 py-28 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-500 dark:text-gold-400"
          >
            What You Get
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
          >
            Everything You Need, Nothing You Don't
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="font-body text-ink/50 dark:text-white/50 mt-4 max-w-lg mx-auto leading-relaxed"
          >
            Every capability built into your dedicated team from day one —
            no add-ons, no hidden costs.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl border border-gray-200 dark:border-primary-700/40 bg-gray-50/50 dark:bg-primary-800/40 hover:border-primary-200 dark:hover:border-primary-500/50 hover:shadow-elevated transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/[0.03] group-hover:to-gold-500/[0.04] transition-all duration-500 rounded-2xl" />

                {/* Number watermark */}
                <span className="absolute top-3 right-4 font-heading text-7xl font-black text-black/[0.03] dark:text-white/[0.03] select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-700/50 border border-primary-100 dark:border-primary-600/30 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-600/50 group-hover:border-primary-200 dark:group-hover:border-primary-500/40 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary-500 dark:text-primary-300" />
                  </div>

                  <h3 className="font-heading font-bold text-ink dark:text-white text-base mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="font-body text-ink/55 dark:text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/0 via-gold-400/50 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
