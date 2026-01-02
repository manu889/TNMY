import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Tempo Traveller in Mysore | Group Travel",
  description: "Tempo Traveller options in Mysore for group tours, weddings and multi-day trips.",
  alternates: { canonical: "/fleet/tempo-traveller/" },
};

export default function FleetTempoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Tempo Traveller", href: ROUTES.FLEET_TEMPO }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Tempo Traveller</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Ideal for groups, tours and corporate travel.</p>
      </div>
    </div>
  );
}
