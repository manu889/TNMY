import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages from Mysore | Coorg, Ooty, Wayanad Tours | Travels in Mysore",
  description:
    "Best tour packages from Mysore to Coorg, Ooty, Wayanad, Kodaikanal, Bangalore, Goa. One-day tours starting ₹2,000, multi-day packages with experienced drivers. Curated itineraries for taxi services in Mysore. 4.9★ rated travel agency. Book travels in Mysore with transparent pricing and comfortable AC vehicles.",
  keywords: [
    "tour packages from mysore",
    "mysore tour packages",
    "travels in mysore packages",
    "mysore to coorg tour package",
    "mysore to ooty tour package",
    "mysore to wayanad package",
    "mysore one day tour",
    "multi day tours from mysore",
    "taxi services in mysore for tours",
    "mysore travel packages",
    "coorg ooty tour package from mysore",
    "mysore outstation tour packages",
    "mysore holiday packages",
    "south india tour packages from mysore",
    "mysore sightseeing packages"
  ],
  openGraph: {
    title: "Tour Packages from Mysore | Coorg, Ooty, Wayanad & More",
    description:
      "One-day tours and multi-day packages from Mysore. 4.9★ rated with experienced drivers and transparent pricing.",
    type: "website",
  },
  alternates: { canonical: "/tour-packages/" },
};

export default function TourPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
