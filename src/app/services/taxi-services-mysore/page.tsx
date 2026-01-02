import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Taxi Services in Mysore | Outstation, Local & Airport Transfers",
  description:
    "Professional taxi services in Mysore for local sightseeing, outstation trips and airport transfers. Clean vehicles, experienced drivers and transparent pricing.",
  alternates: { canonical: "/services/taxi-services-mysore/" },
};

export default function TaxiServicesMysorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Services", href: ROUTES.SERVICES }, { label: "Taxi Services", href: ROUTES.TAXI_SERVICES }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Taxi Services in Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Local trips, outstation rides, tours and airport transfers — get a quick quote on WhatsApp.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp booking
          </a>
          <Link
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{ title: "Outstation Taxi", href: ROUTES.OUTSTATION_TAXI }, { title: "Airport Transfer", href: ROUTES.AIRPORT_TRANSFER }, { title: "Sightseeing Taxi", href: ROUTES.SIGHTSEEING_TAXI }].map(
          (i) => (
            <Link key={i.href} href={i.href} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-slate-900">{i.title}</h2>
              <p className="mt-2 text-slate-600">View details and request a quote.</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
