import type { Metadata } from "next";
import {
  Hero,
  Industries,
  ServiceSections,
  Benefits,
  FAQ,
  CTASection,
} from "@/components/services";

export const metadata: Metadata = {
  title: "Our Services | O4U",
  description:
    "Comprehensive call centre and outsourcing services including customer support, sales, back office operations, analytics, HR solutions, and more. Discover how O4U can scale your business.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "O4U",
  url: "https://o4u.com",
  description:
    "Egypt's premier outsourcing partner, delivering top-tier talent and business solutions to companies worldwide.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201273690006",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Industries />
      <ServiceSections />
      <Benefits />
      <FAQ />
      <CTASection />
    </>
  );
}
