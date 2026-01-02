import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Goa Trips from Mysore | Multi Day Tour Package",
  description: "Plan a Goa trip from Mysore with comfortable vehicles and professional drivers. Request itinerary and pricing on WhatsApp.",
  alternates: { canonical: "/goa-trips-from-mysore/" },
};

export default function GoaTripsFromMysorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Goa Trips from Mysore", href: ROUTES.GOA_TRIPS }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Goa Trips from Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Custom multi-day Goa itineraries with flexible stops.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp for pricing
          </a>
          <Link href={ROUTES.MULTI_DAY_TOURS} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
            View multi day tours
          </Link>
        </div>
      </div>
    </div>
  );
}
