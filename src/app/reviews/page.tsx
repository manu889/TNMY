import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Best Taxi Service in Mysore | 4.9★ Rated | MM Mysore Travels",
  description:
    "Read 349+ customer reviews for MM Mysore Travels. Rated 4.9/5 stars by travelers for taxi services in Mysore, outstation trips to Coorg, Ooty, Wayanad. Verified testimonials from satisfied customers. Professional drivers, clean vehicles, transparent pricing. Book with confidence. Trusted travel agency in Mysore since 2015.",
  keywords: [
    "top travels in mysore",
    "best travel agency mysore",
    "cabs in mysore",
    "mysore taxi reviews",
    "mysore travels testimonials",
    "taxi service mysore customer feedback",
    "best taxi service mysore reviews",
    "mysore outstation taxi ratings",
    "mm mysore travels reviews",
    "trusted taxi service mysore",
    "mysore travel agency reviews",
    "taxi services in mysore ratings",
    "mysore tour package reviews"
  ],
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Reviews", href: ROUTES.REVIEWS }]} />

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Reviews</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Rated {BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max} with {BUSINESS_INFO.rating.count}+ reviews.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp booking
          </a>
          <Link
            href={ROUTES.CONTACT}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
        <h2 className="text-2xl font-bold text-slate-900">What customers say</h2>
        <p className="mt-2 text-slate-600">
          This page is scaffolded. Add your top Google review highlights here (name, rating, short quote, date).
        </p>
      </div>
    </div>
  );
}
