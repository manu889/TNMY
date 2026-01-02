import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for taxi and tour bookings.",
  alternates: { canonical: "/terms-conditions/" },
};

export default function TermsConditionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-conditions/" }]} />

      <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Terms & Conditions</h1>
        <p className="mt-4 text-slate-700">
          This page is scaffolded. Add booking, cancellation, payment, waiting time, toll/parking and liability terms here.
        </p>
      </div>
    </div>
  );
}
