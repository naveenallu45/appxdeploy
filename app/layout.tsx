import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/components/providers/app-providers";
import { StructuredData } from "@/components/seo/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appxdeploy.com"),
  applicationName: "AppxDeploy",
  authors: [{ name: "AppxDeploy", url: "https://appxdeploy.com" }],
  creator: "AppxDeploy",
  publisher: "AppxDeploy",
  category: "Software Agency",
  title: {
    default: "AppxDeploy | Modern Apps, Websites & Cloud Solutions",
    template: "%s | AppxDeploy",
  },
  description:
    "AppxDeploy helps startups and businesses scale with cutting-edge web, mobile, SEO, cloud, and marketing solutions.",
  keywords: [
    "AppxDeploy",
    "software agency",
    "website development",
    "mobile app development",
    "cloud deployment",
    "SEO optimization",
    "DevOps",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/favicon.png?v=5", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=5",
    apple: "/favicon.png?v=5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AppxDeploy | Modern Apps, Websites & Cloud Solutions",
    description:
      "Premium software agency for web, mobile, cloud, SEO, ads, UI/UX, and product delivery.",
    url: "https://appxdeploy.com",
    siteName: "AppxDeploy",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AppxDeploy modern apps, websites, and cloud solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppxDeploy",
    description: "Modern apps, websites, cloud solutions, SEO, and digital growth systems.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
        <StructuredData />
        <AppProviders>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
