import type { Metadata } from "next";
import {
  Hero,
  MarqueeBand,
  Industries,
  Services,
  WhyUs,
  Process,
  Testimonials,
  FinalCTA,
} from "@/components/home";

export const metadata: Metadata = {
  title: "O4U — Egypt's Premier Outsourcing Partner",
  description:
    "O4U delivers dedicated multilingual teams across customer service, sales, and back-office operations to businesses across North America, Europe, and the Middle East.",
  openGraph: {
    title: "O4U — Egypt's Premier Outsourcing Partner",
    description:
      "Scale smarter with a dedicated team built around your business. Premium BPO services from Cairo, Egypt — serving 50+ global clients across 4 continents.",
    type: "website",
    locale: "en_GB",
    siteName: "O4U",
  },
  twitter: {
    card: "summary_large_image",
    title: "O4U — Egypt's Premier Outsourcing Partner",
    description:
      "Scale smarter with a dedicated team built around your business. Customer support, sales, back-office — 4 continents served.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeBand />
      <Industries />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
