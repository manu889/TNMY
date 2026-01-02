import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Wedding Car Rental in Mysore | Guest Pickup & Event Transport | Customized Fleet",
  description:
    "Wedding car rental in Mysore for guests, venue transfers and event schedules. Sedan, SUV, Tempo Traveller options. Professional coordinated transport for weddings.",
  keywords: [
    "wedding car rental mysore",
    "wedding car service",
    "guest pickup for wedding",
    "wedding transportation mysore"
  ],
  alternates: { canonical: "/services/wedding-car-rental-mysore/" },
};

export default function WeddingCarRentalMysorePage() {
  const vehicles = [
    { type: "Sedan", capacity: "4-5 passengers", best: "Individual guests & couples" },
    { type: "SUV", capacity: "6-7 passengers", best: "Small families & groups" },
    { type: "Tempo Traveller", capacity: "14-17 passengers", best: "Large groups & families" },
    { type: "Mini Bus", capacity: "20-25 passengers", best: "Full wedding delegation" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Services", href: ROUTES.SERVICES }, { label: "Wedding Car Rental", href: ROUTES.WEDDING_CAR }]} />

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-rose-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Wedding Car Rental in Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Comprehensive wedding transportation solutions with coordinated fleet service. Seamless pickups, drops, and venue transfers for your special day.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp for availability
          </a>
          <Link
            href={ROUTES.FLEET}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            View fleet options
          </Link>
        </div>
      </div>

      {/* Vehicle Options */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Vehicle Options for Your Wedding</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle, idx) => (
            <div key={idx} className="rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
              <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
              <p className="mt-2 text-lg font-semibold text-rose-600">{vehicle.capacity}</p>
              <p className="mt-2 text-sm text-slate-600">Best for: {vehicle.best}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding Services */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900">Our Wedding Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Guest Coordination</h3>
            <p className="mt-2 text-slate-600">Manage pickups from airport, hotels and residences</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Venue Transfers</h3>
            <p className="mt-2 text-slate-600">Seamless transport between multiple venues</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Timeline Management</h3>
            <p className="mt-2 text-slate-600">Coordinated schedule with event planners</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Professional Drivers</h3>
            <p className="mt-2 text-slate-600">Courteous, well-trained drivers for special events</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Fleet Availability</h3>
            <p className="mt-2 text-slate-600">Multiple vehicles for large wedding parties</p>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10">
            <h3 className="text-lg font-bold text-slate-900">✓ Multi-Day Packages</h3>
            <p className="mt-2 text-slate-600">Pre-wedding, wedding and post-wedding transport</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-8">
        <h2 className="text-3xl font-bold text-slate-900">Wedding Packages & Pricing</h2>
        <p className="mt-2 text-slate-600">Custom packages based on guest count and itinerary</p>
        <div className="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-200">
          <p className="text-slate-700"><strong>Contact us for personalized quotes based on:</strong></p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• Number of guests and vehicles needed</li>
            <li>• Duration of event (1-3 days)</li>
            <li>• Pickup and drop locations</li>
            <li>• Special requirements or preferences</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Wedding Transportation FAQs</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">How far in advance should we book?</h3>
            <p className="mt-2 text-slate-600">We recommend booking 1-2 months in advance for weddings. This ensures availability and proper coordination with your event planner.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Can you handle changes to the schedule?</h3>
            <p className="mt-2 text-slate-600">Absolutely! We understand weddings can have last-minute changes. Our team stays flexible and communicates regularly to adapt to your needs.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Do you offer decorated vehicles?</h3>
            <p className="mt-2 text-slate-600">Yes! We can coordinate with decorators or provide beautifully adorned vehicles for special occasions. Contact us for custom decoration options.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">What about overnight/waiting charges?</h3>
            <p className="mt-2 text-slate-600">We offer flexible packages for multi-day events with reasonable waiting charges. Custom quotes available based on your wedding itinerary.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
