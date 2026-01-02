import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Bus Rental in Mysore | Large Group Travel",
  description: "Bus rental options in Mysore for large group tours, school trips and corporate travel.",
  alternates: { canonical: "/fleet/bus/" },
};

export default function FleetBusPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Bus", href: ROUTES.FLEET_BUS }]} />
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Bus</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Best for large groups and event travel coordination.</p>
      </div>
    </div>
  );
}
