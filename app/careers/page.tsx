import type { Metadata } from "next";
import {
  Hero,
  Perks,
  GrowthStories,
  Gallery,
  CareerPath,
  Positions,
  FAQ,
} from "@/components/careers";

export const dynamic = 'force-static';

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

export default function CareersPage() {
  return (
    <>
      <Hero />
      <Perks />
      <GrowthStories />
      <Gallery />
      <CareerPath />
      <Positions />
      <FAQ />
    </>
  );
}
