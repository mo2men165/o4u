import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | O4U",
  description: `Terms of Service for ${COMPANY_INFO.name}. Read our terms and conditions for using our website and services.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-50 dark:bg-ink overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[300px] rounded-full bg-primary-700/20 blur-[100px]" />
        <Container className="relative z-10 text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Legal
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink dark:text-white mt-3">
            Terms of Service
          </h1>
          <p className="font-body text-ink/50 dark:text-white/50 mt-3 text-base">
            Last updated: April 1, 2026
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-accent dark:bg-ink">
        <Container className="max-w-3xl">
          <article className="prose prose-lg dark:prose-invert mx-auto prose-headings:font-heading prose-p:font-body prose-a:text-primary-500 dark:prose-a:text-primary-300">
            <p>
              Welcome to {COMPANY_INFO.name}. By accessing and using our website,
              you agree to be bound by the following terms and conditions. Please
              read them carefully before using our services.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {COMPANY_INFO.name} website, you
              acknowledge that you have read, understood, and agree to be bound by
              these Terms of Service. If you do not agree with any part of these
              terms, you must discontinue use of our website immediately. We
              reserve the right to modify these terms at any time, and your
              continued use of the site constitutes acceptance of any changes.
            </p>

            <h2>2. Use of Website</h2>
            <p>
              You agree to use this website for lawful purposes only and in a
              manner that does not infringe upon the rights of others or restrict
              their use of the site. You may not use our website to transmit any
              harmful, threatening, or offensive material, or to engage in any
              activity that could damage, disable, or impair our services or
              infrastructure.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images,
              and software, is the property of {COMPANY_INFO.name} and is
              protected by applicable intellectual property laws. You may not
              reproduce, distribute, modify, or create derivative works from any
              content without our prior written consent. The {COMPANY_INFO.name}{" "}
              name and logo are registered trademarks and may not be used without
              authorization.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              {COMPANY_INFO.name} shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of or
              inability to use our website or services. We provide our website and
              its content on an &ldquo;as is&rdquo; basis without warranties of
              any kind, either express or implied. Your use of the website is at
              your own risk.
            </p>

            <h2>5. Job Applications</h2>
            <p>
              By submitting a job application through our website, you confirm that
              all information provided is accurate and complete. We reserve the
              right to verify any information submitted and to reject applications
              that contain false or misleading information. Submission of an
              application does not guarantee employment, and all hiring decisions
              are made at the sole discretion of {COMPANY_INFO.name}.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites that are not
              owned or controlled by {COMPANY_INFO.name}. We are not responsible
              for the content, privacy policies, or practices of any third-party
              sites. We encourage you to review the terms and privacy policies of
              any external websites you visit through links on our site.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the Arab Republic of Egypt. Any disputes
              arising from or relating to these terms shall be subject to the
              exclusive jurisdiction of the courts of Cairo, Egypt. If any
              provision of these terms is found to be unenforceable, the remaining
              provisions shall continue in full force and effect.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a href={`mailto:${COMPANY_INFO.email}`}>
                {COMPANY_INFO.email}
              </a>{" "}
              or visit us at {COMPANY_INFO.address}.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
