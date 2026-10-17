import React from "react";
import { ServiceData } from "@/data/servicesData";

export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cortexgrid.com/#organization",
        "name": "Cortex Grid Consulting",
        "url": "https://cortexgrid.com",
        "logo": "https://cortexgrid.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/cortex-grid-consulting",
          "https://github.com/cortex-grid"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-800-555-0199",
            "contactType": "customer service",
            "areaServed": ["US", "CA", "GB", "EU"],
            "availableLanguage": ["en"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://cortexgrid.com/#professionalService",
        "name": "Cortex Grid Consulting",
        "image": "https://cortexgrid.com/og-image.png",
        "telephone": "+1-800-555-0199",
        "email": "advisory@cortexgrid.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 Innovation Way, Suite 400",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78701",
          "addressCountry": "US"
        },
        "priceRange": "$$$$",
        "openingHours": "Mo-Su 00:00-24:00",
        "description": "Enterprise IT Consulting & Cost-Effective AI Operations, multi-cloud migrations, FinOps, and sovereign RAG architectures."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceJsonLd: React.FC<{ service: ServiceData }> = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.shortTitle,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Cortex Grid Consulting",
      "url": "https://cortexgrid.com"
    },
    "description": service.description,
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.shortTitle} Capabilities`,
      "itemListElement": service.keyPillars.map((pillar, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": pillar.title,
          "description": pillar.description
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
