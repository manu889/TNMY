import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Custom Tour Packages from Mysore | Build Your Itinerary",
  description: "Request a custom tour package from Mysore based on your dates, destinations and passenger count.",
  alternates: { canonical: "/tour-packages/custom-packages/" },
};

export default function CustomPackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Custom Packages", href: ROUTES.CUSTOM_PACKAGES },
        ]}
      />

      <section className="mt-6 overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-900/10">
        <div className="p-8 md:p-10">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
            Tell us what you want • We plan • You travel
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Custom Packages</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            Share your destinations, travel dates, passenger count and vehicle preference — we’ll suggest an itinerary and quote.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-lg font-bold text-slate-900">What to send us</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Pickup city and preferred pickup time</li>
                <li>Destinations (e.g., Coorg → Ooty → Kodaikanal)</li>
                <li>Travel dates and number of days</li>
                <li>Passengers + luggage details</li>
                <li>Vehicle preference (Sedan / SUV / Tempo Traveller)</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-lg font-bold text-slate-900">Faster quote</h2>
              <p className="mt-2 text-sm text-slate-600">Use WhatsApp for the quickest response. We’ll confirm availability and pricing.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
                >
                  WhatsApp for custom plan
                </a>
                <Link
                  href={ROUTES.BOOK_TAXI}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
                >
                  Book online
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-500">Prefer a call? Dial {BUSINESS_INFO.phoneDisplay}.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Browse ready-made options</h2>
        <p className="mt-2 text-slate-600">If you’re not sure where to start, pick a popular itinerary.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={ROUTES.ONE_DAY_TOURS} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-slate-900">One Day Tours</h3>
            <p className="mt-2 text-slate-600">Mysore sightseeing and nearby day trips.</p>
            <div className="mt-4 text-sm font-semibold text-blue-700">Explore →</div>
          </Link>
          <Link href={ROUTES.MULTI_DAY_TOURS} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-slate-900">Multi Day Tours</h3>
            <p className="mt-2 text-slate-600">Coorg, Ooty, Wayanad, Kodaikanal and more.</p>
            <div className="mt-4 text-sm font-semibold text-blue-700">Explore →</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
