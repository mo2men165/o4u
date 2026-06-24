"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { LinkedinIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { COMPANY_INFO } from "@/lib/constants";

const infoBlocks = [
  {
    icon: MapPin,
    label: "Address",
    content: COMPANY_INFO.address,
  },
  {
    icon: Phone,
    label: "Phone",
    content: COMPANY_INFO.phone,
    href: "tel:+201273690006",
  },
  {
    icon: Mail,
    label: "Email",
    content: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    content: COMPANY_INFO.workingHours,
  },
];

export default function OfficeInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-5"
    >
      {infoBlocks.map((block, i) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-start gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-primary-500/10 border border-primary-400/20 flex items-center justify-center shrink-0">
            <block.icon className="w-4.5 h-4.5 text-primary-500" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-ink dark:text-white">
              {block.label}
            </h3>
            {block.href ? (
              <a
                href={block.href}
                className="font-body text-gray-600 dark:text-white/50 text-sm hover:text-primary-500 transition-colors duration-200"
              >
                {block.content}
              </a>
            ) : (
              <p className="font-body text-gray-600 dark:text-white/50 text-sm">{block.content}</p>
            )}
          </div>
        </motion.div>
      ))}

      <div className="pt-4 border-t border-gray-200 dark:border-white/10">
        <h3 className="font-heading text-sm font-semibold text-ink dark:text-white mb-3">
          Follow Us
        </h3>
        <div className="flex items-center gap-3">
          <a
            href={COMPANY_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-white/50 hover:border-primary-300 dark:hover:border-primary-400/40 hover:text-primary-500 hover:shadow-soft transition-all duration-200 cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={COMPANY_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-white/50 hover:border-primary-300 dark:hover:border-primary-400/40 hover:text-primary-500 hover:shadow-soft transition-all duration-200 cursor-pointer"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
