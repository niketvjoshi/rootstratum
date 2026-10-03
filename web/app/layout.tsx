import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter    = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });
const mono     = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rootstratum.com"),
  title: {
    default: "RootStratum — DevOps, Cloud & AIOps Consulting | India & Global",
    template: "%s | RootStratum",
  },
  description:
    "Senior DevOps, DevSecOps, Platform Engineering & AIOps consultants. We help startups and scaleups ship faster, cut cloud costs 30–60%, and build production-grade infrastructure on AWS, GCP & Azure.",
  keywords: [
    "DevOps consulting India",
    "Cloud migration services",
    "DevSecOps consulting",
    "Platform engineering",
    "Kubernetes consulting",
    "AIOps services",
    "FinOps cloud cost optimisation",
    "AWS DevOps consultant",
    "SRE as a service",
    "CI/CD pipeline setup",
    "infrastructure as code",
    "Terraform consulting",
    "cloud architecture India",
  ],
  authors: [{ name: "Niket Joshi", url: "https://www.linkedin.com/in/niket-joshi-03b3a524/" }],
  creator: "RootStratum",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rootstratum.com",
    siteName: "RootStratum",
    title: "RootStratum — DevOps, Cloud & AIOps Consulting",
    description:
      "Senior DevOps & Platform Engineering consultants. Ship faster, cut cloud costs 30–60%, and build infrastructure that doesn't break. India & global.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RootStratum — DevOps & Cloud Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RootStratum — DevOps, Cloud & AIOps Consulting",
    description:
      "Senior DevOps & Platform Engineering consultants. Ship faster, cut cloud costs 30–60%.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rootstratum.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const nrConfig = `window.NREUM||(NREUM={});NREUM.init={browser_consent_mode:{enabled:false},privacy:{cookies_enabled:true},session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:false,mask_input_options:{}},distributed_tracing:{enabled:true},performance:{capture_measures:true},ajax:{deny_list:["bam.nr-data.net"],capture_payloads:'none'}};NREUM.loader_config={accountID:"8378955",trustKey:"8378955",agentID:"1589267627",licenseKey:"NRJS-29af7a6ded9d6ccbf00",applicationID:"1589267627"};NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-29af7a6ded9d6ccbf00",applicationID:"1589267627",sa:1};`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rootstratum.com/#organization",
      name: "RootStratum",
      url: "https://rootstratum.com",
      logo: "https://rootstratum.com/logo.svg",
      email: "sales@rootstratum.com",
      founder: {
        "@type": "Person",
        name: "Niket Joshi",
        jobTitle: "CEO & Founder",
        sameAs: "https://www.linkedin.com/in/niket-joshi-03b3a524/",
      },
      sameAs: ["https://www.linkedin.com/company/rootstratum"],
      description:
        "Senior DevOps, DevSecOps, Platform Engineering and AIOps consultants helping startups and enterprises ship faster and operate production-grade infrastructure at scale.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rootstratum.com/#service",
      name: "RootStratum",
      url: "https://rootstratum.com",
      image: "https://rootstratum.com/og-image.png",
      priceRange: "$$",
      areaServed: ["IN", "SG", "US", "GB", "AU"],
      knowsAbout: [
        "DevOps",
        "DevSecOps",
        "Cloud Architecture",
        "Kubernetes",
        "Platform Engineering",
        "AIOps",
        "FinOps",
        "AWS",
        "GCP",
        "Azure",
        "Terraform",
        "CI/CD",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cloud & DevOps Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps Engineering" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevSecOps" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Architecture & Migration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Platform Engineering" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AIOps (OCCRA)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "FinOps & Cost Optimisation" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://rootstratum.com/#website",
      url: "https://rootstratum.com",
      name: "RootStratum",
      publisher: { "@id": "https://rootstratum.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: nrConfig }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://js-agent.newrelic.com/nr-loader-spa-1.320.1.min.js" />
        {children}
      </body>
    </html>
  );
}
