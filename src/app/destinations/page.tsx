import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Destinations from Mysore | Coorg, Ooty, Wayanad, Bangalore",
  description: "Explore destinations served from Mysore with route info, travel time, and booking options.",
  alternates: { canonical: "/destinations/" },
};

export default function DestinationsHubPage() {
  const destinations = [
    { label: "Mysore", href: ROUTES.DEST_MYSORE },
    { label: "Coorg", href: ROUTES.DEST_COORG },
    { label: "Ooty", href: ROUTES.DEST_OOTY },
    { label: "Wayanad", href: ROUTES.DEST_WAYANAD },
    { label: "Bangalore", href: ROUTES.DEST_BANGALORE },
    { label: "Kodaikanal", href: ROUTES.DEST_KODAIKANAL },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Destinations</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Explore popular routes and trip ideas from Mysore.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <Link key={d.href} href={d.href} className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-slate-900">{d.label}</h2>
            <p className="mt-2 text-slate-600">View highlights and routes.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
