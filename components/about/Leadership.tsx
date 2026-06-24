"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui";

const leaders = [
  {
    name: "Karim Abdallah",
    title: "Chief Executive Officer",
    bio: "15+ years in BPO. Founded O4U to prove Egyptian talent can power global businesses. His relentless client-first vision has driven every milestone.",
    initials: "KA",
    color: "from-primary-600 to-primary-800",
  },
  {
    name: "Dina El-Sayed",
    title: "Chief Operating Officer",
    bio: "Operations architect behind O4U's rapid scale. Expert in process optimisation, QA systems, and building teams that consistently exceed client SLAs.",
    initials: "DE",
    color: "from-gold-600/80 to-primary-700",
  },
  {
    name: "Tarek Mansour",
    title: "VP of Client Success",
    bio: "The bridge between strategy and execution. Tarek ensures every client relationship is built on transparency, performance, and genuine partnership.",
    initials: "TM",
    color: "from-primary-500 to-primary-900",
  },
];

export default function Leadership() {
  return (
    <section className="relative bg-accent dark:bg-primary-900 py-28 overflow-hidden">
      {/* Orb */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
          >
            The Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-ink dark:text-white mt-3"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Leadership Built for Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-ink/50 dark:text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Industry veterans who have built, scaled, and delivered BPO operations at global level. They do not just lead — they are in the room every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 dark:hover:bg-primary-700 overflow-hidden transition-all duration-300 cursor-default shadow-soft dark:shadow-none"
            >
              {/* Avatar area */}
              <div className={`relative h-48 bg-gradient-to-br ${l.color} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-white">
                    {l.initials}
                  </span>
                </div>
                {/* Subtle grid pattern in card header */}
                <div className="absolute inset-0 bg-grid-pattern [background-size:24px_24px] opacity-[0.08]" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                      {l.name}
                    </h3>
                    <p className="font-heading text-xs font-semibold text-gold-400 mt-0.5 tracking-wide">
                      {l.title}
                    </p>
                  </div>
                  <button
                    aria-label={`${l.name} LinkedIn`}
                    className="shrink-0 w-8 h-8 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary-500/20 dark:hover:bg-primary-500/30 hover:border-primary-400/30 transition-colors duration-200 cursor-pointer"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-ink/50 dark:text-white/50" />
                  </button>
                </div>
                <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mt-4">
                  {l.bio}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
