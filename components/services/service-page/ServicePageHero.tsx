"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  Headphones,
  Target,
  TrendingUp,
  Database,
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  Target,
  TrendingUp,
  Database,
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Briefcase,
};

export default function ServicePageHero({ data }: { data: ServicePageData }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const orb1X = useTransform(smoothX, [-1, 1], [30, -30]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-20, 20]);
  const orb2X = useTransform(smoothX, [-1, 1], [-20, 20]);
  const orb2Y = useTransform(smoothY, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  const Icon = iconMap[data.icon] ?? Briefcase;

  return (
    <section
      className="relative min-h-[92vh] flex flex-col bg-ink overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={data.heroImage}
          alt=""
          fill
          className="object-cover opacity-[0.18]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/75 to-ink/95" />
      </div>

      {/* Parallax orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-48 -right-32 w-[800px] h-[800px] rounded-full bg-primary-600/30 blur-[130px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-0 -left-48 w-[600px] h-[600px] rounded-full bg-primary-400/15 blur-[100px]"
        />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/8 blur-[80px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.05]" />

      <Container className="relative z-10 flex-1 flex flex-col justify-center pt-36 pb-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-sm font-body mb-10 group"
          >
            <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            All Services
          </Link>
        </motion.div>

        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 backdrop-blur-sm px-4 py-1.5 mb-8"
          >
            <Icon className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {data.badge}
            </span>
          </motion.div>

          {/* Title */}
          <h1
            className="font-heading font-bold text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          >
            {data.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="font-heading text-xl font-semibold text-gold-400 mb-6"
          >
            {data.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="font-body text-lg text-white/55 leading-relaxed max-w-2xl mb-12"
          >
            {data.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-7 py-3.5 font-heading text-sm font-bold text-primary-900 transition-all duration-200 hover:scale-105 shadow-elevated"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 px-7 py-3.5 font-heading text-sm font-semibold text-white transition-all duration-200"
            >
              All Services
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="relative z-10 border-t border-white/10 bg-white/[0.04] backdrop-blur-md"
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {data.stats.map((stat, i) => (
              <div key={stat.label} className="py-7 px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.07 }}
                >
                  <span
                    className={cn(
                      "font-heading font-black block leading-none",
                      "text-gold-400",
                      stat.value.length <= 4 ? "text-3xl" : "text-2xl"
                    )}
                  >
                    {stat.value}
                  </span>
                  <p className="font-body text-white/45 text-xs mt-2 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
