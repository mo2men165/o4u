import type { Metadata } from "next";
import {
  Hero,
  MissionStatement,
  Story,
  Values,
  WhyO4U,
  PeopleGallery,
  GlobalPresence,
  Leadership,
  CTABanner,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | O4U",
  description:
    "Built in Cairo. Trusted worldwide. Discover the story, mission, and people behind O4U.",
  openGraph: {
    title: "About Us | O4U",
    description:
      "Built in Cairo. Trusted worldwide. 250+ agents, 50+ clients, 4 continents, discover the O4U story.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | O4U",
    description:
      "Built in Cairo. Trusted worldwide. 250+ agents, 50+ clients, 4 continents, discover the O4U story.",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MissionStatement />
      <Story />
      <Values />
      <WhyO4U />
      <PeopleGallery />
      <GlobalPresence />
      {/* <Leadership /> */}
      <CTABanner />
    </main>
  );
}
