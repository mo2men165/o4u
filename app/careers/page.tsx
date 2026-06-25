import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { getJobs } from "@/lib/jobs";
import {
  Hero,
  Perks,
  GrowthStories,
  Gallery,
  CareerPath,
  Positions,
  FAQ,
} from "@/components/careers";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join O4U and explore career opportunities, growth paths, and open positions at Egypt's leading outsourcing company.",
  openGraph: {
    title: "Careers | O4U",
    description:
      "Discover exciting career opportunities at O4U. Browse open positions, learn about our culture, and apply today.",
  },
};

export default async function CareersPage() {
  const jobs = await getJobs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jobs.map((job) => ({
      "@type": "JobPosting",
      title: job.title,
      description: job.description,
      identifier: {
        "@type": "PropertyValue",
        name: COMPANY_INFO.name,
        value: job.id,
      },
      employmentType: job.type.toUpperCase().replace("-", "_"),
      hiringOrganization: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
        sameAs: Object.values(COMPANY_INFO.socials),
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_INFO.address,
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_INFO.address,
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
      },
      datePosted: new Date().toISOString().split("T")[0],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Perks />
      <GrowthStories />
      <Gallery />
      <CareerPath />
      <Positions jobs={jobs} />
      <FAQ />
    </>
  );
}
