"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  eyebrow,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-500 mb-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-gray-600 mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
