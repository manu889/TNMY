import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "FAQs | Mysore Taxi & Tour Booking",
  description:
    "Answers to common questions about booking taxis, pricing, vehicles, pickup, and payments for Mysore taxi and tour services.",
  alternates: { canonical: "/faqs/" },
};

const faqs = [
  {
    q: "How do I book a taxi?",
    a: "You can book by WhatsApp, phone call, or online booking form. Share pickup, destination, date and passenger count.",
  },
  {
    q: "Do you provide one-way and round trips?",
    a: "Yes. We offer both one-way and round-trip options based on your route and schedule.",
  },
  {
    q: "Which vehicles are available?",
    a: "Sedan, SUV, Tempo Traveller and Bus options are available depending on passenger count and route.",
  },
  {
    q: "Are there any hidden charges?",
    a: "No. We confirm pricing clearly before the trip. Any tolls/parking/permit charges are communicated upfront as applicable.",
  },
];

export default function FAQsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "FAQs", href: ROUTES.FAQS }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Quick answers for pricing, booking, vehicle options and trip planning.
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

      <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-slate-200 pb-4 last:border-0">
              <h2 className="text-lg font-semibold text-slate-900">{f.q}</h2>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
