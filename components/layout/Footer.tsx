"use client";

import Link from "next/link";
import { LinkedinIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-primary-50 dark:bg-primary-dark text-ink dark:text-white">
      {/* Newsletter Bar */}
      <div className="border-b border-black/10 dark:border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
            <h3 className="font-heading font-bold text-xl">Stay Updated</h3>
            <form
              className="flex w-full sm:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-72 px-4 py-3 rounded-lg bg-black/5 dark:bg-white/10 border border-black/20 dark:border-white/20 text-ink dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg border-2 border-ink dark:border-white text-ink dark:text-white font-semibold text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Company Info */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-4">
              {COMPANY_INFO.name}
            </h4>
            <p className="text-ink/60 dark:text-gray-300 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/8 dark:bg-white/10 flex items-center justify-center text-ink/60 dark:text-gray-300 hover:text-ink dark:hover:text-white hover:bg-black/15 dark:hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/8 dark:bg-white/10 flex items-center justify-center text-ink/60 dark:text-gray-300 hover:text-ink dark:hover:text-white hover:bg-black/15 dark:hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ink/60 dark:text-gray-300 text-sm hover:text-ink dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-ink/60 dark:text-gray-300 text-sm hover:text-ink dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-ink/60 dark:text-gray-300 text-sm hover:text-ink dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ink/60 dark:text-gray-300 text-sm hover:text-ink dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ink/60 dark:text-gray-300">
              <li>{COMPANY_INFO.address}</li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-ink dark:hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-ink dark:hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>{COMPANY_INFO.workingHours}</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="border-t border-black/10 dark:border-white/10">
        <Container>
          <p className="py-6 text-center text-sm text-ink/40 dark:text-gray-400">
            &copy; 2024 Outsourcing 4 You. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
