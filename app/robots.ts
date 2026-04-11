import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${siteConfig.url}sitemap.xml`,
    host: siteConfig.url,
  };
}
