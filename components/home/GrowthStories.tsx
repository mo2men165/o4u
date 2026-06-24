"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading, Card, Container, Placeholder } from "@/components/ui";
import { EMPLOYEES } from "@/lib/constants";

export default function GrowthStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = EMPLOYEES.slice(0, 3);

  return (
    <section className="bg-accent py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our People"
          title="Where Careers Grow"
          subtitle="Real stories from team members who've grown with us."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featured.map((employee, index) => (
            <motion.div
              key={employee.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.12,
              }}
            >
              <Card className="h-full flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Placeholder
                    label={employee.name.split(" ")[0]}
                    className="w-24 h-24"
                    tone="dark"
                    rounded
                  />
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gold-500 border-2 border-white" />
                </div>

                <h3 className="font-heading font-semibold text-ink">
                  {employee.name}
                </h3>
                <p className="font-body text-primary-500 text-sm font-medium mt-1">
                  {employee.role}
                </p>
                <p className="font-body text-gray-500 text-xs mt-1">
                  Joined as: {employee.startedAs} &middot; {employee.joinYear}
                </p>

                <p className="font-body text-gray-600 italic text-sm mt-4 leading-relaxed">
                  &ldquo;{employee.quote}&rdquo;
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
