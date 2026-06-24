"use client";

import { Briefcase, Users, Globe, PhoneCall } from "lucide-react";
import { AnimatedCounter, Container } from "@/components/ui";

const stats = [
  { target: 10, suffix: "+", label: "Years of Experience", icon: Briefcase },
  { target: 250, suffix: "+", label: "Dedicated Agents", icon: Users },
  { target: 50, suffix: "+", label: "Clients Worldwide", icon: Globe },
  { target: 1, suffix: "M+", label: "Calls Handled", icon: PhoneCall },
];

export default function Stats() {
  return (
    <section className="relative -mt-12 md:-mt-16 z-20">
      <Container>
        <div className="bg-white rounded-2xl shadow-elevated border border-primary-100/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-primary-100/60">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 py-8 px-4"
            >
              <stat.icon className="w-5 h-5 text-primary-400 mb-1" strokeWidth={1.75} />
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
