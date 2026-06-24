"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

const regions = [
  {
    region: "United Kingdom",
    countries: "England · Scotland · Wales",
    services: "Customer Support, Telesales, Back-Office",
    flag: "🇬🇧",
  },
  {
    region: "Europe",
    countries: "Germany · France · Netherlands",
    services: "Multilingual Support, Lead Gen, Email/Chat",
    flag: "🌍",
  },
  {
    region: "Middle East",
    countries: "UAE · KSA · Kuwait · Qatar",
    services: "Arabic Customer Care, Sales, Admin",
    flag: "🌏",
  },
  {
    region: "North America",
    countries: "USA · Canada",
    services: "Outsourced Support, Sales, Analytics",
    flag: "🌎",
  },
];

export default function GlobalPresence() {
  return (
    <section className="bg-accent dark:bg-ink py-28 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500"
            >
              Global Reach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-ink dark:text-white mt-3 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Cairo to the World —<br />
              <span className="text-primary-500 dark:text-primary-300">50+ Clients, 4 Continents</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-600 dark:text-white/50 text-base leading-relaxed"
          >
            Our operations hub is in Maadi, Cairo — but our impact stretches across
            four continents. We serve clients from global enterprises to fast-growing
            startups, delivering consistent excellence regardless of time zone.
          </motion.p>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map((r, i) => (
            <motion.div
              key={r.region}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-gray-200 dark:border-primary-700/40 bg-white dark:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400/30 hover:shadow-elevated p-7 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl mb-4">{r.flag}</div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-1">
                {r.region}
              </h3>
              <p className="font-heading text-xs font-semibold text-primary-500 dark:text-primary-300 tracking-wide mb-4">
                {r.countries}
              </p>
              <p className="font-body text-gray-500 dark:text-white/50 text-sm leading-relaxed">
                {r.services}
              </p>

              <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-heading text-xs font-semibold text-primary-500">Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
