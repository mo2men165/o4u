"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe2,
  Users,
  PhoneCall,
  TrendingUp,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui";

const floatingStats = [
  { value: "250+", label: "Dedicated Agents", icon: Users },
  { value: "1M+", label: "Calls Handled", icon: PhoneCall },
  { value: "50+", label: "Global Clients", icon: Globe2 },
  { value: "98%", label: "Client Retention", icon: TrendingUp },
];

const headingWords = ["Scale", "Smarter", "With", "a", "Team", "Built", "Around", "You"];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const orb1X = useTransform(smoothX, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-20, 20]);
  const orb2X = useTransform(smoothX, [-1, 1], [20, -20]);
  const orb2Y = useTransform(smoothY, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-primary-50 dark:bg-ink"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          priority
        />
      </div>

      {/* Parallax orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary-700/30 blur-[120px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] animate-pulse [animation-delay:3s]" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

      {/* Main content */}
      <Container className="relative z-10 flex-1 flex items-center pt-28 pb-20">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
                Egypt's Premier BPO Partner
              </span>
            </motion.div>

            {/* Word-by-word headline */}
            <h1
              className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.04] flex flex-wrap gap-x-[0.3em] gap-y-1"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={word === "Team" ? "text-gold-400" : ""}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-lg font-body text-ink/60 dark:text-white/60 leading-relaxed max-w-xl"
            >
              Outsourcing 4 You delivers dedicated, multilingual teams across
              customer service, sales, and back-office operations — to clients
              across the UK, Europe, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-heading font-semibold text-primary-900 hover:bg-gold-400 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-7 py-3.5 font-heading font-semibold text-ink dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-200 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                Explore Services
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {["Serving 4 Continents", "ISO-Aligned Security", "5+ Years Experience"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-body text-ink/45 dark:text-white/45">
                  <span className="w-1 h-1 rounded-full bg-gold-500" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating stats grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-3xl" />
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                animate-float={`${i}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative bg-white/70 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:bg-white dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/25 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-gold-400" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-heading font-bold text-ink dark:text-white text-3xl leading-none">{stat.value}</div>
                  <div className="font-body text-ink/50 dark:text-white/50 text-sm mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-50 dark:from-ink to-transparent pointer-events-none" />
    </section>
  );
}
