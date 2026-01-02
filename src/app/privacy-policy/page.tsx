import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this website and booking inquiries.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy/" }]} />

      <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-700">
          This page is scaffolded. Add your privacy policy content here (data collected via forms/WhatsApp, cookies, analytics, retention and contact).
        </p>
        <p className="mt-4 text-sm text-slate-600">For bookings, use {ROUTES.BOOK_TAXI}.</p>
      </div>
    </div>
  );
}
