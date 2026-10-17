import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cortexgridconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cortex Grid Consulting | Future-Ready IT & Cost-Effective AI Operations",
    template: "%s | Cortex Grid Consulting"
  },
  description:
    "Helping mid-market and enterprise organizations modernize IT infrastructure, optimize multi-cloud expenditure, and scale production AI workflows with predictable token economics and zero IP leakage.",
  keywords: [
    "AI workflow consulting",
    "cost-effective enterprise AI",
    "cloud migration",
    "Office 365 setup",
    "IT consulting services",
    "token optimization",
    "semantic caching",
    "FinOps",
    "sovereign RAG",
    "managed IT services",
    "vCIO advisory"
  ],
  authors: [{ name: "Cortex Grid Consulting" }],
  creator: "Cortex Grid Consulting LLC",
  publisher: "Cortex Grid Consulting LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cortexgrid.com",
    siteName: "Cortex Grid Consulting",
    title: "Cortex Grid Consulting | Future-Ready IT & Cost-Effective AI Operations",
    description:
      "Modernize IT infrastructure, optimize multi-cloud expenditure, and operationalize generative AI workflows with predictable token economics and zero IP leakage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cortex Grid Consulting - Future-Ready IT & AI Operations"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Grid Consulting | Future-Ready IT & Cost-Effective AI Operations",
    description:
      "Enterprise IT architecture, sovereign RAG, multi-cloud FinOps, and 24/7 managed support.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#141413] flex flex-col font-sans antialiased selection:bg-[#D97757]/20 selection:text-[#C75D3C]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#141413] focus:text-[#FAF8F5] focus:rounded-lg focus:font-bold focus:shadow-xl"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
