"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react";
import { Container } from "@/components/ui";
import ApplicationForm from "@/components/careers/ApplicationForm";
import type { Job } from "@/lib/jobs";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get("jobId");

  const [job, setJob] = useState<Job | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!jobId) {
      router.replace("/careers");
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ""}/api/jobs/${jobId}`)
      .then((r) => {
        if (!r.ok) { setNotFound(true); return null; }
        return r.json() as Promise<Job>;
      })
      .then((data) => { if (data) setJob(data); })
      .catch(() => setNotFound(true));
  }, [jobId, router]);

  if (notFound) {
    return (
      <div className="bg-white dark:bg-primary-900 min-h-screen pt-28 pb-28 flex items-center justify-center">
        <div className="text-center">
          <p className="font-heading text-ink/50 dark:text-white/50 text-base mb-4">Position not found.</p>
          <Link
            href="/careers#positions"
            className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-primary-500 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Open Roles
          </Link>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="bg-white dark:bg-primary-900 min-h-screen pt-28 pb-28 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    );
  }

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

          <ApplicationForm preselectedPosition={job.title} embedded />
        </div>
      </Container>
    </div>
  );
}
