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
        "logo": "https://cortexgrid.com/images/cortex-grid-website-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/cortex-grid-consulting",
          "https://github.com/cortex-grid"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+971585507745",
            "contactType": "customer service",
            "areaServed": ["Global", "US", "CA", "GB", "EU", "IN"],
            "availableLanguage": ["en"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://cortexgrid.com/#professionalService",
        "name": "Cortex Grid Consulting",
        "image": "https://cortexgrid.com/og-image.png",
        "telephone": "+971585507745",
        "email": "alliances@cortexgridconsulting.com",
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
