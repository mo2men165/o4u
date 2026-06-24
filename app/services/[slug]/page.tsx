import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { SERVICE_PAGE_DATA } from "@/lib/serviceData";
import ServicePageHero from "@/components/services/service-page/ServicePageHero";
import ServiceOverview from "@/components/services/service-page/ServiceOverview";
import ServiceProcess from "@/components/services/service-page/ServiceProcess";
import ServiceFeatures from "@/components/services/service-page/ServiceFeatures";
import ServiceMetrics from "@/components/services/service-page/ServiceMetrics";
import ServiceCTA from "@/components/services/service-page/ServiceCTA";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_PAGE_DATA[slug];
  if (!data) return {};
  return {
    title: `${data.title} | O4U`,
    description: data.heroDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICE_PAGE_DATA[slug];
  if (!data) notFound();

  return (
    <>
      <ServicePageHero data={data} />
      <ServiceOverview data={data} />
      <ServiceProcess data={data} />
      <ServiceFeatures data={data} />
      <ServiceMetrics data={data} />
      <ServiceCTA data={data} />
    </>
  );
}
