import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AppxDeploy to start a software project, website, mobile app, cloud deployment, SEO campaign, or digital growth initiative.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
