import type { MetadataRoute } from "next";
import { getBusinessSites } from "@/data/sites";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://smartbarrio-marketing.vercel.app";
  const root = base.replace(/\/$/, "");
  return [{ url: root, lastModified: new Date() }, ...getBusinessSites().map((site) => ({ url: `${root}/demo/${site.slug}`, lastModified: new Date() }))];
}
