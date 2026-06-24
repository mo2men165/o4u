import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | O4U",
  description: `Privacy Policy for ${COMPANY_INFO.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-50 dark:bg-ink overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.06]" />
        <div className="absolute -top-20 left-1/4 w-[500px] h-[300px] rounded-full bg-primary-700/20 blur-[100px]" />
        <Container className="relative z-10 text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Legal
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink dark:text-white mt-3">
            Privacy Policy
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
              At {COMPANY_INFO.name}, we are committed to protecting your privacy
              and ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, and safeguard the data you
              provide when using our website and services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide through our contact
              forms, job application forms, and newsletter subscriptions, including
              your name, email address, phone number, and any messages you send us.
              We also automatically collect certain technical data such as your IP
              address, browser type, and browsing behavior through cookies and
              similar technologies to improve your experience on our website.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries,
              process job applications, improve our website and services, and
              communicate with you about our offerings. Your data helps us
              personalize your experience and ensure we deliver relevant content.
              We may also use aggregated, anonymized data for analytics and
              business intelligence purposes.
            </p>

            <h2>3. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your data with trusted service providers who
              assist us in operating our website, conducting our business, or
              servicing you, provided they agree to keep your information
              confidential. We may also disclose your information when required by
              law or to protect our rights and safety.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience, analyze
              site traffic, and understand user preferences. You can control cookie
              settings through your browser preferences. By continuing to use our
              website, you consent to the use of cookies in accordance with this
              policy. Essential cookies are required for core functionality, while
              analytics cookies help us understand how visitors interact with our
              site.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information, including SSL encryption, secure server
              infrastructure, and access controls. While no method of electronic
              transmission or storage is completely secure, we strive to use
              commercially reasonable means to protect your data and regularly
              review our security practices.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete the personal
              information we hold about you. You may also request that we restrict
              or cease processing your data. To exercise any of these rights,
              please contact us using the details provided below, and we will
              respond to your request within a reasonable timeframe.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
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
