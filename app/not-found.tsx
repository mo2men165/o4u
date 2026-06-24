import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";

export default function NotFound() {
  const quickLinks = NAV_LINKS.filter((link) => link.href !== "/");

  return (
    <section className="relative overflow-hidden bg-primary-50 dark:bg-ink min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-700/25 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary-500/15 blur-[100px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
              Page Not Found
            </span>
          </div>

          <p
            className="font-heading font-extrabold text-primary-200/80 dark:text-primary-700/60 tracking-tighter select-none"
            style={{ fontSize: "clamp(6rem, 18vw, 11rem)", lineHeight: 0.9 }}
            aria-hidden
          >
            404
          </p>

          <h1
            className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.08] -mt-4 md:-mt-8"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)" }}
          >
            We couldn&apos;t find that{" "}
            <span className="text-gold-400">page</span>
          </h1>

          <p className="mt-5 font-body text-lg text-ink/60 dark:text-white/60 max-w-lg mx-auto leading-relaxed">
            The link may be broken, outdated, or the page may have moved. Let us
            get you back on track.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" size="lg" className="gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="dark:bg-white/5 dark:text-white dark:border-white/20 dark:hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-16 pt-10 border-t border-black/8 dark:border-white/8">
            <p className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-gold-400 mb-5">
              <Search className="w-3.5 h-3.5" />
              Popular destinations
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-ink/70 dark:text-white/70 hover:text-primary dark:hover:text-gold-400 transition-colors duration-200"
                >
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
