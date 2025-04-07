import type { MetadataRoute } from "next"
import { baseUrl } from "./seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["en", "es"]
  const pages = ["", "/about", "/contact", "/privacy", "/terms-of-service"]

  const routes = languages.flatMap((lang) =>
    pages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : ("weekly" as "daily" | "weekly"),
      priority: page === "" ? 1 : 0.8,
    })),
  )

  return routes
}

