"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight,
  Headphones, Target, TrendingUp, Database,
  BarChart3, MessageSquare, Users, Calendar, Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui";
import ThemeToggle from "./ThemeToggle";

const serviceIconMap: Record<string, React.ElementType> = {
  Headphones, Target, TrendingUp, Database,
  BarChart3, MessageSquare, Users, Calendar, Briefcase,
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white dark:bg-ink/90 backdrop-blur-xl border-b border-black/8 dark:border-white/8 shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-white dark:bg-transparent border-b border-black/8 dark:border-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <Image
              src="/images/logo2.png"
              alt="O4U"
              width={439}
              height={568}
              sizes="152px"
              className="h-[76px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.href === "/services" ? (
                /* ── Services with dropdown ── */
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(link.href)
                        ? "text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-800/60"
                        : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.span>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px]"
                      >
                        <div className="bg-white dark:bg-primary-900 rounded-2xl border border-black/8 dark:border-white/8 shadow-2xl overflow-hidden">
                          {/* Header strip */}
                          <div className="px-5 pt-4 pb-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
                            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 dark:text-white/40">
                              Our Services
                            </span>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-primary-500 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-200 transition-colors"
                            >
                              View All
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {/* 3-column grid */}
                          <div className="p-3 grid grid-cols-3 gap-1">
                            {SERVICES.map((service) => {
                              const Icon = serviceIconMap[service.icon] ?? Briefcase;
                              const active = pathname === `/services/${service.id}`;
                              return (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  className={cn(
                                    "flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group",
                                    active
                                      ? "bg-primary-50 dark:bg-primary-800"
                                      : "hover:bg-gray-50 dark:hover:bg-primary-800/60"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150",
                                      active
                                        ? "bg-primary-100 dark:bg-primary-700"
                                        : "bg-gray-100 dark:bg-primary-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-700"
                                    )}
                                  >
                                    <Icon
                                      className={cn(
                                        "w-4 h-4 transition-colors",
                                        active
                                          ? "text-primary-600 dark:text-primary-300"
                                          : "text-ink/40 dark:text-white/40 group-hover:text-primary-500 dark:group-hover:text-primary-300"
                                      )}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p
                                      className={cn(
                                        "font-heading text-sm font-semibold leading-tight transition-colors",
                                        active
                                          ? "text-primary-600 dark:text-primary-300"
                                          : "text-ink dark:text-white/80 group-hover:text-primary-600 dark:group-hover:text-primary-300"
                                      )}
                                    >
                                      {service.title}
                                    </p>
                                    <p className="font-body text-xs text-ink/40 dark:text-white/35 mt-0.5 leading-snug line-clamp-1">
                                      {service.description.substring(0, 55)}…
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Footer strip */}
                          <div className="px-5 py-3 border-t border-black/5 dark:border-white/5 bg-gray-50/70 dark:bg-primary-800/30">
                            <p className="font-body text-xs text-ink/40 dark:text-white/35">
                              Need something custom?{" "}
                              <Link
                                href="/contact"
                                className="font-semibold text-gold-600 dark:text-gold-400 hover:underline"
                              >
                                Talk to us →
                              </Link>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(link.href)
                      ? "text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-800/60"
                      : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 font-heading font-semibold text-sm text-primary-900 hover:bg-gold-400 transition-colors cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  key="mobile-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/40 z-[100] lg:hidden"
                  onClick={() => setMobileOpen(false)}
                />

                <motion.div
                  key="mobile-drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 h-dvh w-80 max-w-[85vw] bg-white dark:bg-primary-900 border-l border-black/8 dark:border-white/8 shadow-2xl z-[101] lg:hidden overflow-y-auto overscroll-contain"
                >
                  <div className="flex items-center justify-between p-6 border-b border-black/8 dark:border-white/8">
                    <span className="font-heading font-bold text-lg text-ink dark:text-white">
                      Menu
                    </span>
                    <button
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                      className="p-2 text-ink/50 dark:text-white/50 hover:text-ink dark:hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <nav className="flex flex-col p-6 gap-1">
                    {NAV_LINKS.map((link) =>
                      link.href === "/services" ? (
                        <div key={link.href}>
                          <button
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className={cn(
                              "flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors",
                              isActive(link.href)
                                ? "text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-800/60"
                                : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                            )}
                          >
                            {link.label}
                            <motion.span
                              animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="inline-flex"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileServicesOpen && (
                              <motion.div
                                key="mobile-services"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <Link
                                  href="/services"
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 pl-8 pr-4 py-2.5 mt-1 text-sm font-semibold text-primary-500 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-200 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                >
                                  <ArrowRight className="w-3.5 h-3.5" />
                                  All Services
                                </Link>

                                <div className="mt-1 space-y-0.5">
                                  {SERVICES.map((service) => {
                                    const Icon = serviceIconMap[service.icon] ?? Briefcase;
                                    const active = pathname === `/services/${service.id}`;
                                    return (
                                      <Link
                                        key={service.id}
                                        href={`/services/${service.id}`}
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                          "flex items-center gap-3 pl-6 pr-4 py-2.5 rounded-lg transition-colors",
                                          active
                                            ? "text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-800"
                                            : "text-ink/65 dark:text-white/60 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                        )}
                                      >
                                        <div className="w-6 h-6 rounded-md bg-gray-100 dark:bg-primary-800 flex items-center justify-center shrink-0">
                                          <Icon className="w-3 h-3 text-primary-500 dark:text-primary-300" />
                                        </div>
                                        <span className="font-body text-sm">{service.title}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                            isActive(link.href)
                              ? "text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-800/60"
                              : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    )}

                    <div className="mt-4 pt-4 border-t border-black/8 dark:border-white/8">
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 font-heading font-semibold text-sm text-primary-900 hover:bg-gold-400 transition-colors cursor-pointer"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
