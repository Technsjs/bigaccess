import type { MetadataRoute } from "next";

const base = "https://bigaccessprimeltd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/vehicles",
    "/real-estate",
    "/partners",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
