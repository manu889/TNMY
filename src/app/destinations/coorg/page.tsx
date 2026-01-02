import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Coorg Travel Guide | Best Time, Places & Taxi from Mysore",
  description: "Plan your Coorg trip and book Mysore to Coorg taxi with transparent pricing.",
  alternates: { canonical: "/destinations/coorg/" },
};

export default function DestinationCoorgPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Coorg", href: ROUTES.DEST_COORG }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Coorg</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Coffee estates, waterfalls and hill views — popular weekend getaway.</p>
        <Link href={ROUTES.MYSORE_TO_COORG} className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors">
          Mysore to Coorg taxi
        </Link>
      </div>
    </div>
  );
}
