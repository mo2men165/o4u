"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Globe2, Award } from "lucide-react";
import { Container } from "@/components/ui";

const badges = [
  { icon: MapPin, text: "Cairo, Egypt" },
  { icon: Globe2, text: "4 Continents Served" },
  { icon: Award, text: "5+ Years of Excellence" },
];

const headingLine1 = ["Built", "in", "Cairo."];
const headingLine2 = ["Trusted", "by", "the", "World."];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const orb1X = useTransform(smoothX, [-1, 1], [-25, 25]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-15, 15]);
  const orb2X = useTransform(smoothX, [-1, 1], [18, -18]);
  const orb2Y = useTransform(smoothY, [-1, 1], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  const allWords = [...headingLine1, ...headingLine2];

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
          className="object-cover opacity-10"
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
          className="absolute top-1/4 -right-60 w-[600px] h-[600px] rounded-full bg-primary-500/20 blur-[100px]"
        />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] animate-pulse [animation-delay:3s]" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-24 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
            Our Story &amp; Mission
          </span>
        </motion.div>

        {/* Word-by-word headline */}
        <h1
          className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.1] max-w-5xl"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
        >
          <span className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 mb-2">
            {headingLine1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 50, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.65, delay: 0.34 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={word === "Trusted" ? "text-gold-400" : ""}
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
          We are not just another outsourcing provider. We are a team of 250+ driven
          professionals who believe that Egyptian talent deserves a place on the
          world stage — and we&apos;re proving it every single day.
        </motion.p>

        {/* Floating badge row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {badges.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.7, ease: "easeInOut" }}
              className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-2"
            >
              <Icon className="w-4 h-4 text-gold-500 dark:text-gold-400" />
              <span className="font-heading text-sm font-medium text-ink/80 dark:text-white/80">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 px-7 py-3.5 font-heading text-sm font-semibold text-primary-900 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Partner with Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-7 py-3.5 font-heading text-sm font-semibold text-ink dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-200 cursor-pointer"
          >
            Join Our Team
          </Link>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-12 bg-gradient-to-b from-black/30 dark:from-white/30 to-transparent" />
        <span className="font-heading text-xs text-ink/30 dark:text-white/30 uppercase tracking-widest">Scroll</span>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-50 dark:from-ink to-transparent pointer-events-none" />
    </section>
  );
}
