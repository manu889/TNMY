import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "One Day Tours from Mysore | Local Sightseeing & Day Trips",
  description: "Browse one day tour options from Mysore including city sightseeing and nearby destinations.",
  alternates: { canonical: "/tour-packages/one-day-tours/" },
};

export default function OneDayToursHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "One Day Tours", href: ROUTES.ONE_DAY_TOURS },
        ]}
      />

      <section className="mt-6 overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-900/10">
        <div className="p-8 md:p-10">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
            Half-day & full-day options • Private cab • Flexible timing
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">One Day Tours</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">Perfect for Mysore sightseeing and quick day trips with family.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get quote for one-day tour
            </Link>
            <Link
              href={ROUTES.TOUR_PACKAGES}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
            >
              View all tour packages
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Featured one-day tours</h2>
        <p className="mt-2 text-slate-600">Popular choices that can be covered comfortably in a day.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={ROUTES.MYSORE_ONE_DAY_TOUR}
            className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">Mysore One Day Tour</h3>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">Sightseeing</span>
            </div>
            <p className="mt-2 text-slate-600">Palace, Zoo, Chamundi Hills, Church, Brindavan Gardens.</p>
            <div className="mt-4 text-sm font-semibold text-blue-700">Explore →</div>
          </Link>
          <Link
            href={ROUTES.MYSORE_TO_BANGALORE}
            className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">Mysore to Bangalore</h3>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">Transfer</span>
            </div>
            <p className="mt-2 text-slate-600">Fast, comfortable intercity ride for business or leisure.</p>
            <div className="mt-4 text-sm font-semibold text-blue-700">Explore →</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
