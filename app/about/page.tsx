import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/about-content";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AppxDeploy, a premium software agency helping startups and businesses build apps, websites, cloud solutions, SEO systems, and digital growth platforms.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CtaSection />
    </>
  );
}
