"use client";

import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  rounded?: boolean;
  /** Visual tone of the generated abstract artwork */
  tone?: "dark" | "light" | "subtle";
}

// Deterministic hash so the same label always renders the same abstract pattern
function hashLabel(label: string) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash << 5) - hash + label.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const toneStyles = {
  dark: "bg-mesh-primary text-white/80",
  light: "bg-gradient-to-br from-primary-50 via-white to-primary-100 text-primary-500/70",
  subtle: "bg-gradient-to-br from-primary-100 via-primary-50 to-accent text-primary-600/70",
} as const;

export default function Placeholder({
  label = "Visual",
  width,
  height,
  className,
  rounded = false,
  tone = "subtle",
}: PlaceholderProps) {
  const hash = hashLabel(label);
  const rotate = (hash % 8) - 4;
  const blobX = 20 + (hash % 50);
  const blobY = 10 + ((hash >> 3) % 60);

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center select-none isolate",
        toneStyles[tone],
        rounded ? "rounded-full" : "rounded-xl",
        className
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {/* Abstract decorative blob, unique per label */}
      <div
        className="absolute -z-10 w-[140%] h-[140%] rounded-full opacity-40 blur-2xl"
        style={{
          background:
            tone === "dark"
              ? "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)"
              : "radial-gradient(circle, rgba(91,45,142,0.25), transparent 60%)",
          left: `${blobX - 30}%`,
          top: `${blobY - 30}%`,
          transform: `rotate(${rotate}deg)`,
        }}
      />

      {/* Fine grid texture for depth */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern [background-size:18px_18px] opacity-[0.15]" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-3 text-center">
        <ImageIcon className="w-5 h-5 opacity-60" strokeWidth={1.5} />
        <span className="font-body text-[11px] font-medium uppercase tracking-wide opacity-70 leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}
