import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore Ooty Kodaikanal Tour Package | Multi Day Trip",
  description: "Multi day tour package covering Mysore, Ooty and Kodaikanal. Request itinerary and pricing on WhatsApp.",
  alternates: { canonical: "/mysore-ooty-kodaikanal/" },
};

export default function MysoreOotyKodaikanalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Mysore Ooty Kodaikanal", href: ROUTES.MYSORE_OOTY_KODAIKANAL }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore – Ooty – Kodaikanal</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">A multi-day hill station itinerary with custom planning.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp for itinerary
          </a>
          <Link href={ROUTES.CUSTOM_PACKAGES} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
            Request custom package
          </Link>
        </div>
      </div>
    </div>
  );
}
