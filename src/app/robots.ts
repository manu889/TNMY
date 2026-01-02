import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/constants/business-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", BUSINESS_INFO.url).toString(),
  };
}
