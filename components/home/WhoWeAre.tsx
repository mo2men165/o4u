"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SectionHeading, Container, Placeholder } from "@/components/ui";

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A global delivery partner, built in Cairo"
            />

            <div className="mt-6 space-y-4 font-body text-gray-600 leading-relaxed">
              <p>
                O4U is a Cairo-based outsourcing company built on
                a simple belief: great talent exists everywhere, and businesses
                deserve access to it without the overhead.
              </p>
              <p>
                Since our founding, we have partnered with companies across the
                US, Europe, and the Middle East to deliver customer support,
                sales, back office operations, and more, all powered by
                Egypt&apos;s vibrant, multilingual workforce.
              </p>
              <p>
                We don&apos;t just fill seats. We build dedicated teams that
                integrate seamlessly into your culture, hit your KPIs, and grow
                with your business.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 mt-6 font-heading font-semibold text-primary-500 hover:text-primary-700 transition-colors"
            >
              Learn More <span aria-hidden>&rarr;</span>
            </Link>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 right-8 bottom-8 rounded-2xl border-2 border-gold-500/40 -z-10" />
            <Placeholder
              label="Team at Work"
              width="100%"
              height={420}
              tone="dark"
              className="w-full shadow-elevated"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
