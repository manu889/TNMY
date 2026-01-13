import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Fleet | Sedan, SUV & Bus",
  description: "Browse our fleet options for taxi bookings in Mysore: Sedan, SUV and Bus.",
  alternates: { canonical: "/fleet/" },
};

export default function FleetHubPage() {
  const fleet = [
    { label: "Sedan", href: ROUTES.FLEET_SEDAN },
    { label: "SUV", href: ROUTES.FLEET_SUV },
    { label: "Bus", href: ROUTES.FLEET_BUS },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Fleet</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">Choose a vehicle based on passenger count and trip type.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((v) => (
          <Link key={v.href} href={v.href} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-slate-900">{v.label}</h2>
            <p className="mt-2 text-slate-600">View details and best use cases.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
