"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export default function MissionStatement() {
  return (
    <section className="bg-primary-500 py-20 overflow-hidden relative">
      {/* Diagonal texture */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-[0.08]" />

      <Container className="relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p
            className="font-heading font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            &ldquo;Our mission is to unlock the potential of Egyptian talent and
            connect it to the world — creating value for every client, every
            agent, and every customer we serve.&rdquo;
          </p>
          <footer className="mt-6">
            <span className="font-heading text-sm font-semibold text-white/60 uppercase tracking-widest">
              — Outsourcing 4 You, Founded 2014
            </span>
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  );
}
