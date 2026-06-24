import type { Metadata } from "next";
import {
  Hero,
  MissionStatement,
  Story,
  Values,
  WhyO4Y,
  PeopleGallery,
  GlobalPresence,
  Leadership,
  CTABanner,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Outsourcing 4 You",
  description:
    "Built in Cairo. Trusted worldwide. Discover the story, mission, and people behind O4U — Egypt's premier BPO and call center partner.",
  openGraph: {
    title: "About Us | Outsourcing 4 You",
    description:
      "Built in Cairo. Trusted worldwide. 250+ agents, 50+ clients, 4 continents — discover the O4U story.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Outsourcing 4 You",
    description:
      "Built in Cairo. Trusted worldwide. 250+ agents, 50+ clients, 4 continents — discover the O4U story.",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MissionStatement />
      <Story />
      <Values />
      <WhyO4Y />
      <PeopleGallery />
      <GlobalPresence />
      {/* <Leadership /> */}
      <CTABanner />
    </main>
  );
}
