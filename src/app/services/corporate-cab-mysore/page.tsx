import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/constants/schema-templates";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Corporate Cab Service in Mysore | Professional Business Travel Solutions",
  description:
    "Corporate cab service in Mysore for office travel, executive transport, meetings, airport pickups and guest transfers. Professional drivers, clean vehicles, bulk billing.",
  keywords: [
    "corporate cab mysore",
    "corporate taxi service",
    "executive car rental mysore",
    "business travel mysore"
  ],
  alternates: { canonical: "/services/corporate-cab-mysore/" },
};

const corporateServiceSchema = createServiceSchema({
  name: "Corporate Cab Service in Mysore",
  description: "Professional corporate transportation for executives, business travel, guest pickups, and corporate events. Verified drivers, premium vehicles, and dedicated support for your business needs.",
  serviceType: "Corporate Transportation Service",
  areaServed: ["Mysore", "Karnataka", "India"],
  offers: {
    price: "2000",
    priceCurrency: "INR",
  },
});

export default function CorporateCabMysorePage() {
  const features = [
    { title: "Professional Drivers", desc: "Verified, courteous drivers trained in corporate etiquette" },
    { title: "Premium Vehicles", desc: "Well-maintained, clean AC cars with comfortable seating" },
    { title: "Punctuality Guarantee", desc: "On-time arrivals for all business commitments" },
    { title: "Bulk Billing", desc: "Corporate accounts with monthly billing and invoicing" },
    { title: "24/7 Availability", desc: "Round-the-clock service for urgent travel" },
    { title: "Confidentiality", desc: "Discreet and professional service for executives" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={corporateServiceSchema} />
      <Breadcrumbs items={[{ label: "Services", href: ROUTES.SERVICES }, { label: "Corporate Cab", href: ROUTES.CORPORATE_CAB }]} />

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Corporate Cab Service in Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Professional corporate transportation for executives, business travel, guest pickups, and corporate events. Dedicated support for your business needs.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp for corporate booking
          </a>
          <Link
            href={ROUTES.CONTACT}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Contact corporate team
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Why Choose Us for Corporate Travel?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Solutions */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900">Corporate Solutions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-xl font-bold text-slate-900">Monthly Account</h3>
            <div className="mt-2 space-y-2 text-sm text-slate-600">
              <p>✓ Dedicated account manager</p>
              <p>✓ Monthly billing & invoicing</p>
              <p>✓ Flexible payment terms</p>
              <p>✓ Priority booking</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-xl font-bold text-slate-900">Executive Transport</h3>
            <div className="mt-2 space-y-2 text-sm text-slate-600">
              <p>✓ Premium vehicle options</p>
              <p>✓ Executive drivers</p>
              <p>✓ Real-time tracking</p>
              <p>✓ Meeting coordination</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Corporate Travel FAQs</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Can we set up a corporate account?</h3>
            <p className="mt-2 text-slate-600">Yes! We offer customized corporate accounts with monthly billing, dedicated managers, and priority service.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">What are your minimum booking requirements?</h3>
            <p className="mt-2 text-slate-600">We work with companies of all sizes. No minimum booking requirement. Contact our corporate team for custom packages.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Do you offer late-night/early morning travel?</h3>
            <p className="mt-2 text-slate-600">Absolutely! Our 24/7 service is perfect for early morning airport pickups and late-night executive travel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
