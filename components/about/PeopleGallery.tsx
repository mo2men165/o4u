"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, TrendingUp, Users2, Coffee } from "lucide-react";
import { Container } from "@/components/ui";

const culturePoints = [
  {
    icon: Heart,
    title: "Agents Who Care",
    body: "We hire for empathy first, skills second. Every agent is trained to treat every customer like the most important call of the day — because for that customer, it is.",
  },
  {
    icon: TrendingUp,
    title: "Growth as a Promise",
    body: "Clear career paths, internal promotions, and leadership programmes. Over 40% of our team leaders were promoted from agent roles.",
  },
  {
    icon: Users2,
    title: "A Diverse Force",
    body: "200+ agents across a variety of backgrounds, languages, and specialisations. Our diversity is our strength in serving global markets.",
  },
  {
    icon: Coffee,
    title: "A Place People Stay",
    body: "Our agent retention rate beats the BPO industry average by 2x. When people are happy to come to work, your customers feel it.",
  },
];

const photos = [
  {
    label: "Team Meeting",
    span: "col-span-2 row-span-2",
    bg: "bg-primary-800",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    label: "Operations Floor",
    span: "col-span-1 row-span-1",
    bg: "bg-primary-700",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    label: "Training Session",
    span: "col-span-1 row-span-1",
    bg: "bg-primary-900",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    label: "Agent of the Month",
    span: "col-span-1 row-span-2",
    bg: "bg-ink",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    label: "Brainstorming",
    span: "col-span-1 row-span-1",
    bg: "bg-primary-800/60",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    label: "Team Celebration",
    span: "col-span-2 row-span-1",
    bg: "bg-primary-700/50",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
];

export default function PeopleGallery() {
  return (
    <section className="relative bg-gray-50 dark:bg-ink py-28 overflow-hidden">
      {/* Orb */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Our Culture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            250+ People. One Mission.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            The best client experience starts with the best agent experience. We have built a culture where people are proud of the work they do.
          </motion.p>
        </div>

        {/* Two-column layout: culture points + visual grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: culture points */}
          <div className="space-y-6">
            {culturePoints.map((cp, i) => {
              const Icon = cp.icon;
              return (
                <motion.div
                  key={cp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5 group cursor-default"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink dark:text-white mb-1.5">
                      {cp.title}
                    </h3>
                    <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed">
                      {cp.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: photo mosaic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-3 auto-rows-[120px] gap-3"
          >
            {photos.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={`${p.span} ${p.bg} rounded-xl overflow-hidden relative group border border-white/5`}
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
