import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Taxi Pricing in Mysore | Transparent Rates | Sedan, SUV, Tempo Traveller",
  description:
    "View transparent taxi pricing in Mysore for outstation trips, local sightseeing and airport transfers. Get an instant quote on WhatsApp.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Pricing", href: ROUTES.PRICING }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Pricing</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Transparent pricing with no hidden charges. Share your pickup, destination and date for an exact quote.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp for quote
          </a>
          <Link
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
          <h2 className="text-xl font-bold text-slate-900">Outstation</h2>
          <p className="mt-2 text-slate-600">Coorg, Ooty, Wayanad, Bangalore and more.</p>
          <p className="mt-4 text-sm text-slate-700">
            Final fare depends on distance, trip type (one-way/round-trip), start time, and vehicle.
          </p>
          <Link href={ROUTES.OUTSTATION_TAXI} className="mt-5 inline-flex text-blue-700 font-semibold hover:text-blue-800">
            View outstation service
          </Link>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
          <h2 className="text-xl font-bold text-slate-900">Local sightseeing</h2>
          <p className="mt-2 text-slate-600">Half-day and full-day city tours.</p>
          <p className="mt-4 text-sm text-slate-700">Packages can include driver, fuel and parking as applicable.</p>
          <Link href={ROUTES.SIGHTSEEING_TAXI} className="mt-5 inline-flex text-blue-700 font-semibold hover:text-blue-800">
            View sightseeing service
          </Link>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
          <h2 className="text-xl font-bold text-slate-900">Airport transfers</h2>
          <p className="mt-2 text-slate-600">On-time pickup and drop with coordination.</p>
          <p className="mt-4 text-sm text-slate-700">Share flight details and pickup time for confirmation.</p>
          <Link href={ROUTES.AIRPORT_TRANSFER} className="mt-5 inline-flex text-blue-700 font-semibold hover:text-blue-800">
            View airport transfer
          </Link>
        </div>
      </div>
    </div>
  );
}
