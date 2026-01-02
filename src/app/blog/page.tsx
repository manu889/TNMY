import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Blog | Mysore Taxi Routes, Travel Tips & Itineraries",
  description: "Travel tips, route guides and itineraries for Mysore, Coorg, Ooty, Wayanad and more.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Blog", href: ROUTES.BLOG }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Blog</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Guides and tips for planning outstation trips, one-day tours, and family travel.
        </p>
        <Link
          href={ROUTES.CONTACT}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
        >
          Suggest a topic
        </Link>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <p className="text-slate-600">This blog hub is scaffolded. Add posts under this route when ready.</p>
      </div>
    </div>
  );
}
