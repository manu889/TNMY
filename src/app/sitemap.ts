import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths: string[] = [
    ROUTES.HOME,
    ROUTES.ABOUT,
    ROUTES.SERVICES,
    ROUTES.BOOK_TAXI,
    ROUTES.CONTACT,
    ROUTES.PRICING,
    ROUTES.REVIEWS,
    ROUTES.FAQS,
    ROUTES.BLOG,

    ROUTES.TOUR_PACKAGES,
    ROUTES.ONE_DAY_TOURS,
    ROUTES.MULTI_DAY_TOURS,
    ROUTES.CUSTOM_PACKAGES,

    ROUTES.DESTINATIONS,
    ROUTES.DEST_MYSORE,
    ROUTES.DEST_COORG,
    ROUTES.DEST_OOTY,
    ROUTES.DEST_WAYANAD,
    ROUTES.DEST_BANGALORE,
    ROUTES.DEST_KODAIKANAL,

    ROUTES.FLEET,
    ROUTES.FLEET_SEDAN,
    ROUTES.FLEET_SUV,
    ROUTES.FLEET_TEMPO,
    ROUTES.FLEET_BUS,

    ROUTES.TAXI_SERVICES,
    ROUTES.AIRPORT_TRANSFER,
    ROUTES.OUTSTATION_TAXI,
    ROUTES.SIGHTSEEING_TAXI,
    ROUTES.CORPORATE_CAB,
    ROUTES.WEDDING_CAR,

    ROUTES.MYSORE_TO_COORG,
    ROUTES.MYSORE_TO_OOTY,
    ROUTES.MYSORE_TO_WAYANAD,
    ROUTES.MYSORE_TO_BANGALORE,
    ROUTES.MYSORE_ONE_DAY_TOUR,
    ROUTES.MYSORE_COORG_WAYANAD,
    ROUTES.MYSORE_OOTY_COORG,
    ROUTES.MYSORE_OOTY_KODAIKANAL,
    ROUTES.GOA_TRIPS,
    ROUTES.TIRUPATI_PACKAGE,

    "/privacy-policy/",
    "/terms-conditions/",
  ];

  const uniquePaths = Array.from(new Set(paths));

  return uniquePaths.map((path) => ({
    url: new URL(path, BUSINESS_INFO.url).toString(),
    lastModified: now,
  }));
}
