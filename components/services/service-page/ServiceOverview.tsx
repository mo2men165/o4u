"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";
import type { ServicePageData } from "@/lib/serviceData";

export default function ServiceOverview({ data }: { data: ServicePageData }) {
  return (
    <section className="bg-white dark:bg-primary-900 py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-500 dark:text-gold-400"
            >
              Overview
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-bold text-ink dark:text-white mt-3 mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
            >
              {data.overview.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="font-body text-ink/60 dark:text-white/55 text-lg leading-relaxed mb-10"
            >
              {data.overview.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {data.overview.highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.06 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-primary-800/50 border border-gray-100 dark:border-primary-700/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 dark:text-gold-400 shrink-0" />
                  <span className="font-body text-sm font-medium text-ink/80 dark:text-white/75">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={data.heroImage}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-primary-800 rounded-2xl border border-gray-100 dark:border-primary-700/50 shadow-elevated p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="font-heading font-bold text-ink dark:text-white text-sm">
                  {data.stats[0].value}
                </p>
                <p className="font-body text-ink/50 dark:text-white/50 text-xs">
                  {data.stats[0].label}
                </p>
              </div>
            </motion.div>

            {/* Second accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -top-5 -right-5 bg-primary-900 dark:bg-primary-700 rounded-2xl border border-primary-700/50 shadow-glow p-4 flex items-center gap-3"
            >
              <div>
                <p className="font-heading font-black text-gold-400 text-lg leading-none">
                  {data.stats[1].value}
                </p>
                <p className="font-body text-white/50 text-xs mt-1">
                  {data.stats[1].label}
                </p>
              </div>
            </motion.div>

            {/* Decorative blur */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 rounded-full bg-primary-200/40 dark:bg-primary-700/20 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
