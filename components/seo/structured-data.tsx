import { services } from "@/lib/site-data";

const baseUrl = "https://appxdeploy.com";

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "AppxDeploy",
        url: baseUrl,
        logo: `${baseUrl}/favicon.png`,
        email: "connect@appxdeploy.com",
        sameAs: ["https://linkedin.com", "https://github.com", "https://instagram.com", "https://x.com"],
        address: [
          {
            "@type": "PostalAddress",
            name: "Hyderabad Office",
            streetAddress: "T-Hub, Floor 2, Raidurgam",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            name: "Bengaluru Office",
            streetAddress: "WeWork Galaxy, Residency Road",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            name: "Chennai Office",
            streetAddress: "IIT Madras Research Park, Taramani",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "AppxDeploy",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#services`,
        name: "AppxDeploy Software Agency",
        url: baseUrl,
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: ["India", "Worldwide"],
        serviceType: services.map((service) => service.title),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be emitted as raw text for search crawlers.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
