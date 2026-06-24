"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeadphonesIcon, Star } from "lucide-react";
import { Container } from "@/components/ui";

const chips = [
  "Multilingual Support",
  "24/7 Coverage",
  "2-Week Launch",
  "50+ Global Clients",
];

const headingLine1 = ["9", "Elite", "Services."];
const headingLine2 = ["Zero", "Compromises."];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const orb1X = useTransform(smoothX, [-1, 1], [25, -25]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-15, 15]);
  const orb2X = useTransform(smoothX, [-1, 1], [-18, 18]);
  const orb2Y = useTransform(smoothY, [-1, 1], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  return (
    <section
      className="relative min-h-[85vh] flex flex-col overflow-hidden bg-primary-50 dark:bg-ink"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 dark:from-ink/70 via-primary-50/50 dark:via-ink/50 to-primary-50/80 dark:to-ink/80" />
      </div>

      {/* Parallax orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary-700/25 blur-[120px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-primary-500/15 blur-[100px]"
        />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-gold-500/8 blur-[80px] animate-pulse [animation-delay:1s]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-10"
        >
          <HeadphonesIcon className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
            Full-Service BPO Solutions
          </span>
        </motion.div>

        {/* Word-by-word headline */}
        <h1
          className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.1] max-w-4xl"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
        >
          <span className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 mb-2">
            {headingLine1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 50, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1">
            {headingLine2.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, y: 50, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.65, delay: 0.37 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className={word === "Zero" ? "text-gold-400" : ""}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-6 font-body text-lg md:text-xl text-ink/60 dark:text-white/60 leading-relaxed max-w-2xl"
        >
          From customer support to back-office operations — we deliver dedicated,
          multilingual teams that become a seamless extension of your business.
        </motion.p>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.95 + i * 0.06 }}
              className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3.5 py-1.5 font-heading text-xs font-medium text-ink/70 dark:text-white/70"
            >
              <Star className="w-3 h-3 text-gold-400" />
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-7 py-3.5 font-heading text-sm font-semibold text-primary-900 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Get a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-7 py-3.5 font-heading text-sm font-semibold text-ink dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-200 cursor-pointer"
          >
            Explore Services
          </Link>
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-50 dark:from-ink to-transparent pointer-events-none" />
    </section>
  );
}
