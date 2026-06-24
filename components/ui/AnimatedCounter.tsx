"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  className?: string;
  labelClassName?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  label,
  className,
  labelClassName,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <span className="text-4xl font-bold font-heading text-gold-400">
        {count}
        {suffix}
      </span>
      <p className={cn("text-sm font-body mt-1", labelClassName ?? "text-ink/50 dark:text-white/50")}>{label}</p>
    </div>
  );
}
