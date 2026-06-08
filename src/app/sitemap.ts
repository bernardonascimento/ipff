import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/agenda", "/50-anos"];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
