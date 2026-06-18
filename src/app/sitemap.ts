import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kwak-yejun-portfolio.vercel.app",
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
