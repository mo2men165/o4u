"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export default function Card({
  className,
  children,
  hover = true,
}: CardProps) {
  if (!hover) {
    return (
      <div
        className={cn(
          "bg-white rounded-2xl p-6 shadow-soft border border-primary-100/60",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-soft border border-primary-100/60",
        className
      )}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 48px -10px rgba(28,11,48,0.20)",
        borderColor: "rgba(91,45,142,0.35)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
