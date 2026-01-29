import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Airport Transfer from Mysore | Reliable Pickup & Drop | On-Time Service",
  description:
    "Book airport transfers from Mysore with on-time pickup, clean vehicles and flight-aware coordination. Safe rides to/from Bangalore International Airport.",
  keywords: [
    "airport transfer mysore",
    "airport pickup mysore",
    "airport drop mysore",
    "bangalore airport taxi from mysore",
    "airport transportation mysore"
  ],
  alternates: { canonical: "/services/airport-transfer-mysore/" },
};

export default function AirportTransferMysorePage() {
  const features = [
    { icon: "✓", title: "Flight-Aware Timing", desc: "Real-time flight tracking and smart timing" },
    { icon: "✓", title: "Professional Drivers", desc: "Courteous drivers with airport experience" },
    { icon: "✓", title: "Clean Vehicles", desc: "Well-maintained AC cars" },
    { icon: "✓", title: "Fixed Pricing", desc: "No surge pricing for airport transfers" },
    { icon: "✓", title: "24/7 Service", desc: "Available for all flight times" },
    { icon: "✓", title: "Easy Coordination", desc: "Simple WhatsApp-based booking" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Services", href: ROUTES.SERVICES },
          { label: "Airport Transfer", href: ROUTES.AIRPORT_TRANSFER },
        ]}
      />

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Airport Transfer from Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Hassle-free airport pickups and drop-offs with on-time service, flight tracking, and professional drivers. Perfect for business and leisure travelers.
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
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Airport Transfer Service?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900">Airport Transfer Pricing</h2>
        <p className="mt-2 text-slate-600">Vehicle-based pricing for Bangalore Airport transfers from Mysore</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Sedan (4 Seater)</div>
              <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Most Popular</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-sm text-slate-500">Starting from</span>
              <span className="text-3xl font-bold text-blue-600">₹2,800</span>
            </div>
            <div className="mt-1 text-sm text-slate-600">One-way • Dzire, Etios</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>4 passengers + luggage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>AC comfort</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Fuel efficient</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">SUV (6-7 Seater)</div>
              <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">Family</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-sm text-slate-500">Starting from</span>
              <span className="text-3xl font-bold text-emerald-600">₹3,500</span>
            </div>
            <div className="mt-1 text-sm text-slate-600">One-way • Innova, Ertiga</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>6-7 passengers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Large luggage space</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Extra comfort</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-slate-600">Tempo Traveller</div>
              <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">Groups</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-sm text-slate-500">Starting from</span>
              <span className="text-3xl font-bold text-purple-600">₹5,500</span>
            </div>
            <div className="mt-1 text-sm text-slate-600">One-way • 12-17 seater</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>12-17 passengers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Push-back seats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Group travel</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-500 text-center">
          * Prices for Mysore to Bangalore Airport one-way trip. Round trip and multi-destination packages available. Contact for exact quote.
        </p>
      </div>

      {/* How it Works */}
      <div className="mt-12 rounded-2xl bg-white p-8 ring-1 ring-slate-900/10">
        <h2 className="text-3xl font-bold text-slate-900">How Our Airport Transfer Works</h2>
        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">1</div>
            <div>
              <h3 className="font-semibold text-slate-900">Share Your Flight Details</h3>
              <p className="mt-1 text-slate-600">Send us your flight number and pickup location on WhatsApp</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">2</div>
            <div>
              <h3 className="font-semibold text-slate-900">Get Instant Confirmation</h3>
              <p className="mt-1 text-slate-600">We confirm availability and send you driver details</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">3</div>
            <div>
              <h3 className="font-semibold text-slate-900">Real-Time Flight Tracking</h3>
              <p className="mt-1 text-slate-600">We monitor your flight and adjust timing automatically</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">4</div>
            <div>
              <h3 className="font-semibold text-slate-900">On-Time Pickup</h3>
              <p className="mt-1 text-slate-600">Driver meets you at the terminal on time with a welcome board</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">How early should I book?</h3>
            <p className="mt-2 text-slate-600">We recommend booking at least 2-3 days in advance for airport transfers. However, same-day bookings are available based on availability.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Do you track flights?</h3>
            <p className="mt-2 text-slate-600">Yes! Share your flight number and we automatically track it. Our driver will adjust timing if there are delays.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">What if my flight is delayed?</h3>
            <p className="mt-2 text-slate-600">No worries! We monitor your flight in real-time and adjust our driver's timing. No extra charges for delays.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
