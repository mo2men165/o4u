"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Building2, Heart, ShoppingCart, DollarSign, Cpu, Store, ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui";

const industries = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Building2,
    headline: "Convert More Leads, Close More Deals",
    description:
      "We handle the heavy lifting — lead qualification, appointment setting, and tenant follow-ups — so your agents stay focused on closing. Our teams are trained on real estate workflows and CRM systems.",
    bullets: ["Lead qualification & nurturing", "Appointment scheduling", "Tenant & buyer follow-ups", "CRM data management"],
    stat: { value: "3×", label: "faster lead response time" },
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Heart,
    headline: "Patient-First Support at Scale",
    description:
      "From patient intake to insurance verification, our HIPAA-aware agents deliver compassionate, compliant interactions that keep your patients satisfied and your staff unburdened.",
    bullets: ["Patient scheduling & reminders", "Insurance verification", "Prescription refill support", "Empathetic multilingual agents"],
    stat: { value: "40%", label: "reduction in no-show rates" },
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    headline: "Delight Customers at Every Touchpoint",
    description:
      "Order inquiries, returns, and live chat — handled instantly. Our e-commerce specialists integrate with your platforms to resolve issues fast and keep your reviews stellar.",
    bullets: ["Order tracking & updates", "Returns & refunds processing", "Live chat & email support", "Platform integrations (Shopify, Magento)"],
    stat: { value: "92%", label: "first-contact resolution rate" },
  },
  {
    id: "finance",
    label: "Finance",
    icon: DollarSign,
    headline: "Compliant, Accurate, Trusted",
    description:
      "Our finance-trained agents handle account inquiries, fraud flags, and compliance-sensitive calls with the discretion and accuracy your customers demand.",
    bullets: ["Account inquiry handling", "Fraud alert escalation", "GDPR-compliant operations", "Secure call recording & storage"],
    stat: { value: "99.9%", label: "data accuracy guarantee" },
  },
  {
    id: "technology",
    label: "Technology",
    icon: Cpu,
    headline: "Tier-1 Support That Actually Resolves Issues",
    description:
      "Reduce engineering ticket burden with our tech-savvy agents trained on your product. From SaaS onboarding to troubleshooting, we become an extension of your team.",
    bullets: ["Tier-1 technical helpdesk", "SaaS onboarding assistance", "Bug triage & escalation", "Knowledge base management"],
    stat: { value: "60%", label: "ticket deflection rate" },
  },
  {
    id: "retail",
    label: "Retail",
    icon: Store,
    headline: "Omnichannel Excellence, Every Season",
    description:
      "Scale effortlessly during peak seasons with our retail-trained agents who handle everything from loyalty inquiries to in-store escalations across all channels.",
    bullets: ["Omnichannel customer care", "Loyalty program support", "Seasonal scale-up (2-week ramp)", "In-store escalation handling"],
    stat: { value: "4.8★", label: "average post-interaction rating" },
  },
];

export default function Industries() {
  const [active, setActive] = useState(industries[0]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-50 dark:bg-primary-900 py-24 md:py-32">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Industry Solutions
          </span>
          <h2 className="font-heading font-bold text-ink dark:text-white tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            We speak your industry's language
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = active.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind)}
                  className={`flex-shrink-0 flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gold-500/15 border border-gold-500/40 text-ink dark:text-white"
                      : "border border-transparent text-ink/50 dark:text-white/50 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-gold-400" : "text-ink/40 dark:text-white/40"}`} strokeWidth={1.75} />
                  <span className="font-heading font-semibold text-sm whitespace-nowrap">{ind.label}</span>
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400 hidden lg:block" />}
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white dark:bg-primary-800 backdrop-blur-sm border border-gray-200 dark:border-primary-700/50 rounded-2xl p-8 md:p-10 shadow-soft dark:shadow-none"
            >
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h3 className="font-heading font-bold text-ink dark:text-white text-2xl md:text-3xl leading-tight mb-4">
                    {active.headline}
                  </h3>
                  <p className="font-body text-ink/60 dark:text-white/60 leading-relaxed mb-8">
                    {active.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 font-heading font-semibold text-sm text-primary-900 hover:bg-gold-400 transition-colors duration-200 cursor-pointer"
                  >
                    Discuss Your Needs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 mb-8">
                    {active.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                        <span className="font-body text-ink/70 dark:text-white/70 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stat callout */}
                  <div className="border-t border-black/10 dark:border-white/10 pt-6">
                    <div className="font-heading font-bold text-gold-400 text-4xl">
                      {active.stat.value}
                    </div>
                    <div className="font-body text-ink/50 dark:text-white/50 text-sm mt-1">
                      {active.stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
