import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore Travel Guide | Places to Visit & Taxi Services",
  description: "Explore Mysore highlights and book local sightseeing and outstation taxis.",
  alternates: { canonical: "/destinations/mysore/" },
};

export default function DestinationMysorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Mysore", href: ROUTES.DEST_MYSORE }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Local sightseeing and easy access to popular outstation destinations.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href={ROUTES.MYSORE_ONE_DAY_TOUR} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors">
            One day tour
          </Link>
          <Link href={ROUTES.SIGHTSEEING_TAXI} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
            Sightseeing taxi
          </Link>
        </div>
      </div>
    </div>
  );
}
