import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react";
import { getJobs, getJobById } from "@/lib/jobs";
import { Container } from "@/components/ui";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const revalidate = 60;

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({ jobId: job.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  const { jobId } = await params;
  const job = await getJobById(jobId);
  if (!job) return {};
  return {
    title: `Apply for ${job.title} | O4U`,
    description: job.shortDescription,
  };
}

export default async function ApplyPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = await getJobById(jobId);
  if (!job) notFound();

  return (
    <div className="bg-white dark:bg-primary-900 min-h-screen pt-28 pb-28">
      <Container>
        <Link
          href="/careers#positions"
          className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-ink/50 dark:text-white/50 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Open Roles
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Job header */}
          <div className="rounded-2xl border border-gray-200 dark:border-primary-700/50 bg-white dark:bg-primary-800 shadow-soft dark:shadow-none p-8 md:p-10 mb-10">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Open Position
            </span>
            <h1
              className="font-heading font-bold text-ink dark:text-white mt-3 mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-heading text-xs font-semibold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full">
                {job.department}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-ink/50 dark:text-white/50">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-ink/50 dark:text-white/50">
                <MapPin className="w-3.5 h-3.5" />
                Cairo, Egypt
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-ink/50 dark:text-white/50">
                <Briefcase className="w-3.5 h-3.5" />
                On-site
              </span>
            </div>

            <div className="h-px bg-gray-100 dark:bg-primary-700/50 mb-6" />

            <h2 className="font-heading text-sm font-semibold text-ink/70 dark:text-white/70 uppercase tracking-widest mb-3">
              About this Role
            </h2>
            <p className="font-body text-ink/60 dark:text-white/60 text-sm leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Application form */}
          <ApplicationForm preselectedPosition={job.title} embedded />
        </div>
      </Container>
    </div>
  );
}
