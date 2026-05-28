import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceGrid } from "@/components/sections/service-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AppxDeploy services including website development, mobile apps, SEO, ads, cloud deployment, UI/UX, e-commerce, APIs, DevOps, and support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-36 dark:bg-slate-950">
        <div className="mesh-gradient absolute inset-0 opacity-80" />
        <Reveal className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Software, cloud, and growth services built for modern teams"
            description="Choose a focused service or bring us in as a full-stack delivery partner across strategy, design, development, cloud, marketing, and support."
          />
        </Reveal>
      </section>
      <ServiceGrid showHeading={false} />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
