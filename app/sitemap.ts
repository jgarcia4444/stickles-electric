
import { MetadataRoute } from "next";
import services from "@/app/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stickleselectric.com";

  const serviceSlugs = Object.keys(services);

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...servicePages,
  ];
}