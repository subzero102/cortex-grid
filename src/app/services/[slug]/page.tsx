import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { ServiceJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Cortex Grid Consulting"
    };
  }

  const title = `${service.title} | Cortex Grid Consulting - Cloud & AI Operations`;
  const description = service.description;

  return {
    title,
    description,
    keywords: [
      service.shortTitle,
      service.badge,
      "AI workflow consulting",
      "cost-effective enterprise AI",
      "cloud migration",
      "IT consulting services",
      "Cortex Grid"
    ],
    openGraph: {
      title,
      description,
      url: `https://cortexgrid.com/services/${service.slug}`,
      siteName: "Cortex Grid Consulting",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceJsonLd service={service} />
      <ServiceDetailTemplate service={service} />
    </main>
  );
}
