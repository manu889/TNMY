import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Multi Day Tours from Mysore | Coorg, Ooty, Wayanad, Kodaikanal",
  description: "Multi day tour packages from Mysore with flexible itineraries and reliable drivers.",
  alternates: { canonical: "/tour-packages/multi-day-tours/" },
};

export default function MultiDayToursHubPage() {
  const packages = [
    { label: "Mysore Coorg Wayanad", href: ROUTES.MYSORE_COORG_WAYANAD },
    { label: "Mysore Ooty Coorg", href: ROUTES.MYSORE_OOTY_COORG },
    { label: "Mysore Ooty Kodaikanal", href: ROUTES.MYSORE_OOTY_KODAIKANAL },
    { label: "Goa trips from Mysore", href: ROUTES.GOA_TRIPS },
    { label: "Tirupati package from Mysore", href: ROUTES.TIRUPATI_PACKAGE },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Multi Day Tours", href: ROUTES.MULTI_DAY_TOURS },
        ]}
      />

      <section className="mt-6 overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-900/10">
        <div className="p-8 md:p-10">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
            2–6 days • Hill stations & multi-city routes • Private cab
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Multi Day Tours</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            Curated itineraries and flexible routing from Mysore — ideal for families and groups travelling to Coorg, Ooty, Wayanad, Kodaikanal and more.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get quote for multi-day tour
            </Link>
            <Link
              href={ROUTES.CUSTOM_PACKAGES}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
            >
              Customize itinerary
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Popular multi-day packages</h2>
        <p className="mt-2 text-slate-600">Pick a classic circuit or choose custom routing.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-slate-900">{p.label}</h3>
              <p className="mt-2 text-slate-600">View itinerary and request pricing.</p>
              <div className="mt-4 text-sm font-semibold text-blue-700">Explore →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
