import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cortexgrid.com";
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/roi-calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Service detail dynamic pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
