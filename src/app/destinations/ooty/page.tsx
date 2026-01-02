import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Ooty Travel Guide | Places, Weather & Taxi from Mysore",
  description: "Plan your Ooty trip and book Mysore to Ooty taxi with reliable drivers.",
  alternates: { canonical: "/destinations/ooty/" },
};

export default function DestinationOotyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Ooty", href: ROUTES.DEST_OOTY }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Ooty</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Nilgiri hills, tea gardens and scenic viewpoints.</p>
        <Link href={ROUTES.MYSORE_TO_OOTY} className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors">
          Mysore to Ooty taxi
        </Link>
      </div>
    </div>
  );
}
