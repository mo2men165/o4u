"use client";

import { Button, Container } from "@/components/ui";

export default function DualCTA() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-elevated">
          {/* Left: Careers CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-200 to-primary-100 dark:bg-mesh-primary py-16 px-8 flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-[0.08]" />
            <h3 className="relative font-heading text-2xl md:text-3xl font-bold text-primary-900 dark:text-white">
              Looking for your next career?
            </h3>
            <p className="relative font-body text-primary-800/75 dark:text-white/75 mt-3 max-w-sm leading-relaxed">
              Join a team where your growth matters. Explore open positions
              and start your journey with us.
            </p>
            <div className="relative mt-8">
              <Button variant="secondary" href="/careers" size="lg">
                Browse Jobs
              </Button>
            </div>
          </div>

          {/* Right: Business CTA */}
          <div className="bg-white dark:bg-primary-900 py-16 px-8 flex flex-col items-center justify-center text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-ink dark:text-white">
              Ready to scale your business?
            </h3>
            <p className="font-body text-gray-600 dark:text-white/60 mt-3 max-w-sm leading-relaxed">
              Let us build a dedicated team tailored to your needs. Get a
              free consultation today.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/contact" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
