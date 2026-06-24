"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import type { Job } from "@/lib/jobs";

const FILTERS = ["All", "Customer Service", "Sales", "Operations", "Admin"];

interface PositionsProps {
  jobs: Job[];
}

export default function Positions({ jobs }: PositionsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const filtered =
    activeFilter === "All"
      ? jobs
      : jobs.filter((job) => job.department === activeFilter);

  const handleApply = (jobId: string) => {
    router.push(`/careers/apply/${jobId}`);
  };

  return (
    <section id="positions" className="bg-white dark:bg-primary-900 py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            Open Roles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Find Your Next Role
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-2 font-heading text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === f
                  ? "bg-primary-500 text-white"
                  : "border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-ink/60 dark:text-white/60 hover:text-ink dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 hover:border-primary-200 dark:hover:border-primary-600/60 dark:hover:bg-primary-700 p-7 transition-all duration-300 cursor-default shadow-soft dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-1.5">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-heading text-xs font-semibold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 font-body text-xs text-ink/45 dark:text-white/45">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 font-body text-xs text-ink/45 dark:text-white/45">
                        <MapPin className="w-3 h-3" />
                        Cairo, Egypt
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mb-6">
                  {job.shortDescription}
                </p>

                <button
                  onClick={() => handleApply(job.id)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-600/40 hover:bg-primary-500 border border-primary-400/30 px-5 py-2.5 font-heading text-xs font-semibold text-white transition-all duration-200 cursor-pointer group-hover:border-primary-400/50"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-ink/40 dark:text-white/40 text-base">
              No open roles in this department right now. Check back soon or apply speculatively.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
