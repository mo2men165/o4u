"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  UsersRound,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading, Container } from "@/components/ui";
import { HOW_IT_WORKS } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  UsersRound,
  GraduationCap,
  HeartHandshake,
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How It Works"
          subtitle="A simple, proven process to get your dedicated team up and running."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

          {HOW_IT_WORKS.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Number + icon tile */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-elevated mb-5">
                  {Icon && <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gold-500 text-primary-900 text-xs font-heading font-bold flex items-center justify-center shadow-soft">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-ink text-base">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 text-sm mt-2 max-w-[220px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
