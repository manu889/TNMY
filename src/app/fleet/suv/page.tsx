import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "SUV Taxi in Mysore | 6-7 Seater",
  description: "SUV taxi options in Mysore for outstation trips and family travel.",
  alternates: { canonical: "/fleet/suv/" },
};

export default function FleetSuvPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "SUV", href: ROUTES.FLEET_SUV }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">SUV</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Spacious option for 6-7 passengers and luggage.</p>
      </div>
    </div>
  );
}
