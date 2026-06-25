import { Metadata } from "next";
import { Briefcase, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm, OfficeInfo, Map } from "@/components/contact";
import { COMPANY_INFO } from "@/lib/constants";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Us | O4U",
  description:
    "Get in touch with O4U. Reach our Cairo office for business inquiries, partnership opportunities, or career questions.",
  openGraph: {
    title: "Contact Us | O4U",
    description: "Start a conversation with Egypt's premier BPO partner. Business inquiries, partnerships, or careers welcome.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "260 Street",
    addressLocality: "Maadi, Cairo",
    addressCountry: "EG",
  },
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  url: "https://outsourcing-4-you.com",
  openingHours: "Su-Th 09:00-18:00",
  sameAs: [COMPANY_INFO.socials.linkedin, COMPANY_INFO.socials.facebook],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-50 dark:bg-ink min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-700/25 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary-500/15 blur-[100px] animate-pulse [animation-delay:1.5s]" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />

        <Container className="relative z-10 py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-white/70">
              Let&apos;s Talk
            </span>
          </div>
          <h1
            className="font-heading font-bold text-ink dark:text-white tracking-tight leading-[1.04] max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Start Something{" "}
            <span className="text-gold-400">Exceptional</span>
          </h1>
          <p className="mt-5 font-body text-lg text-ink/60 dark:text-white/60 max-w-xl mx-auto leading-relaxed">
            Whether you want to outsource, partner, or join our team, every great relationship starts with a conversation.
          </p>
        </Container>
      </section>

      {/* Dual path cards */}
      <section className="bg-gray-50 dark:bg-primary-900 py-20 border-b border-black/8 dark:border-white/8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group relative rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:border-primary-200 dark:hover:border-primary-400/30 hover:shadow-soft dark:hover:bg-white/[0.05] p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-600/30 border border-primary-400/20 flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors duration-300">
                <Briefcase className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="font-heading text-xl font-bold text-ink dark:text-white mb-2">
                Business Inquiry
              </h2>
              <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mb-6">
                Looking to outsource customer support, sales, or back office operations? Tell us about your needs and we&apos;ll design a custom solution.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200 cursor-pointer"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:border-primary-200 dark:hover:border-primary-400/30 hover:shadow-soft dark:hover:bg-white/[0.05] p-8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-600/30 border border-primary-400/20 flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors duration-300">
                <Users className="w-5 h-5 text-gold-400" />
              </div>
              <h2 className="font-heading text-xl font-bold text-ink dark:text-white mb-2">
                Career Inquiry
              </h2>
              <p className="font-body text-ink/50 dark:text-white/50 text-sm leading-relaxed mb-6">
                Interested in joining our team of 250+ professionals? Explore open roles and apply directly through our careers portal.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200 cursor-pointer"
              >
                View Openings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Form + Office info */}
      <section id="contact-form" className="bg-accent dark:bg-ink py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-gold-400">
                Send a Message
              </span>
              <h2 className="font-heading text-2xl font-bold text-ink dark:text-white mt-2 mb-8">
                We Reply Within 24 Hours
              </h2>
              <ContactForm />
            </div>

            {/* Office info + map */}
            <div className="space-y-10">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-gold-400">
                  Our Office
                </span>
                <h2 className="font-heading text-2xl font-bold text-ink dark:text-white mt-2 mb-8">
                  Visit Us in Cairo
                </h2>
                <OfficeInfo />
              </div>
              <Map />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
