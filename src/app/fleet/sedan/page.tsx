import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Sedan Taxi in Mysore | 4 Seater",
  description: "Sedan taxi options in Mysore for local, outstation and airport transfers.",
  alternates: { canonical: "/fleet/sedan/" },
};

export default function FleetSedanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Sedan", href: ROUTES.FLEET_SEDAN }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Sedan</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Comfortable 4-seater option for couples and small families.</p>
      </div>
    </div>
  );
}
