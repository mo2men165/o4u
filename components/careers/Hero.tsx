"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui";

const stats = [
  { value: "250+", label: "Team Members" },
  { value: "40%", label: "Internal Promotions" },
  { value: "2×", label: "Industry Retention" },
];

const headingLine1 = ["Your", "Career."];
const headingLine2 = ["Your", "Growth."];
const headingLine3 = ["Your", "Stage."];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const orb1X = useTransform(smoothX, [-1, 1], [-20, 20]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-15, 15]);
  const orb2X = useTransform(smoothX, [-1, 1], [15, -15]);
  const orb2Y = useTransform(smoothY, [-1, 1], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  const scrollToPositions = () => {
    const el = document.getElementById("positions");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-primary-50 dark:bg-ink"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 dark:from-ink/60 via-transparent to-primary-50/80 dark:to-ink/80" />
      </div>

      {/* Parallax orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-primary-700/25 blur-[120px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-500/15 blur-[100px]"
        />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/8 blur-[80px] animate-pulse [animation-delay:1s]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-10"
        >
          <Star className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
            Join the O4U Team
          </span>
        </motion.div>

        {/* Word-by-word headline, 3 lines */}
        <h1
          className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.1] max-w-4xl"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
        >
          {[headingLine1, headingLine2, headingLine3].map((line, lineIdx) => {
            const delay = lineIdx * (line.length * 0.09 + 0.05);
            return (
              <span key={lineIdx} className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 mb-1">
                {line.map((word, i) => (
                  <motion.span
                    key={`${lineIdx}-${i}`}
                    initial={{ opacity: 0, y: 50, rotateX: -25 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.65, delay: 0.1 + delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className={word === "Growth." ? "text-gold-400" : ""}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 font-body text-lg md:text-xl text-ink/60 dark:text-white/60 leading-relaxed max-w-2xl"
        >
          At O4U, we don&apos;t just offer jobs. We offer a launchpad. Join a team of 250+ professionals who are building careers, not just clocking hours.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex flex-col items-center rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md px-8 py-5 cursor-default"
            >
              <span className="font-heading text-3xl font-black text-gold-500 dark:text-gold-400">{s.value}</span>
              <span className="font-body text-xs text-ink/50 dark:text-white/50 mt-1">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToPositions}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-7 py-3.5 font-heading text-sm font-semibold text-primary-900 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            See Open Positions
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-7 py-3.5 font-heading text-sm font-semibold text-ink dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-200 cursor-pointer"
          >
            Contact HR
          </Link>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-12 bg-gradient-to-b from-black/30 dark:from-white/30 to-transparent" />
        <span className="font-heading text-xs text-ink/30 dark:text-white/30 uppercase tracking-widest">Explore</span>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-50 dark:from-ink to-transparent pointer-events-none" />
    </section>
  );
}
