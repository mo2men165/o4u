"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui";
import { EMPLOYEES } from "@/lib/constants";

const avatarColors = [
  "from-primary-600 to-primary-800",
  "from-gold-600/80 to-primary-700",
  "from-primary-500 to-primary-900",
  "from-gold-500/70 to-primary-800",
];

export default function GrowthStories() {
  return (
    <section className="bg-gray-50 dark:bg-primary-900 py-28 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[200px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-gold-400"
          >
            Real Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            People Who Grew With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/70 dark:text-white/50 text-base mt-4 max-w-xl mx-auto"
          >
            Not testimonials from a brochure, these are real people who started as agents and now lead teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EMPLOYEES.map((employee, i) => {
            const initials = employee.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2);
            return (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.12 }}
                className="relative rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 hover:border-primary-200 dark:hover:border-primary-600/60 shadow-soft dark:shadow-none p-8 transition-all duration-300 cursor-default group"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-400/20 group-hover:text-gold-400/40 transition-colors duration-300" />

                <p className="font-body text-ink/80 dark:text-white/65 text-base leading-relaxed italic mb-8">
                  &ldquo;{employee.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {employee.photo ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-primary-300 dark:ring-gold-400/30">
                      <Image
                        src={employee.photo}
                        alt={employee.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center shrink-0`}>
                      <span className="font-heading text-base font-bold text-white">{initials}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading text-sm font-bold text-ink dark:text-white">
                      {employee.name}
                    </h4>
                    <p className="font-body text-xs text-primary-500 dark:text-gold-400 font-medium mt-0.5">
                      {employee.role}
                    </p>
                    <p className="font-body text-xs text-ink/60 dark:text-white/40 mt-0.5">
                      Started as {employee.startedAs} · Joined {employee.joinYear}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
