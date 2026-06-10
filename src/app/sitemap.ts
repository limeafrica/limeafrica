import type { MetadataRoute } from "next";
import { workItems } from "@/content/work";
import { absoluteUrl, staticRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  const portfolioEntries: MetadataRoute.Sitemap = workItems.map((project) => ({
    url: absoluteUrl(`/portfolio/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...portfolioEntries];
}
