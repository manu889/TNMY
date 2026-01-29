import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Taxi Services in Mysore | Outstation, Local & Airport Transfers",
  description:
    "Professional taxi services in Mysore for local sightseeing, outstation trips and airport transfers. Clean vehicles, experienced drivers and transparent pricing. Book cabs in Mysore in minutes.",
  keywords: [
    "taxi services in mysore",
    "cabs in mysore",
    "travels in mysore",
    "travel agency in mysore",
    "travel agency mysore",
    "outstation taxi mysore",
    "airport taxi mysore",
    "mysore sightseeing taxi"
  ],
  alternates: { canonical: "/services/taxi-services-mysore/" },
};

export default function TaxiServicesMysorePage() {
  const services = [
    {
      title: "Outstation Taxi",
      icon: "🚗",
      desc: "Comfortable rides to Coorg, Ooty, Wayanad, Bangalore and other destinations.",
      features: ["Transparent pricing at ₹13-16/km", "One-way & Round trip options", "Professional drivers", "Well-maintained AC vehicles"],
      price: "Starting from ₹13/km",
      href: ROUTES.OUTSTATION_TAXI
    },
    {
      title: "Airport Transfer",
      icon: "✈️",
      desc: "Reliable pickups and drops for Bangalore Airport with flight tracking.",
      features: ["Starting from ₹2,800", "Real-time flight monitoring", "Meet & greet service", "Fixed pricing - no surge"],
      price: "Starting from ₹2,800",
      href: ROUTES.AIRPORT_TRANSFER
    },
    {
      title: "Local Sightseeing",
      icon: "🏛️",
      desc: "Explore Mysore Palace, Chamundi Hills, Zoo, and other attractions.",
      features: ["Half-day & full-day packages", "Knowledgeable drivers", "Flexible itineraries", "All major attractions covered"],
      price: "Starting from ₹800/half-day",
      href: ROUTES.SIGHTSEEING_TAXI
    }
  ];

  const features = [
    { icon: "✓", title: "24/7 Availability", desc: "Book anytime, any day of the week" },
    { icon: "✓", title: "Professional Drivers", desc: "Experienced, courteous and verified drivers" },
    { icon: "✓", title: "Clean AC Vehicles", desc: "Well-maintained and sanitized cabs" },
    { icon: "✓", title: "Transparent Pricing", desc: "No hidden charges or surge pricing" },
    { icon: "✓", title: "Quick Response", desc: "Fast confirmation via WhatsApp" },
    { icon: "✓", title: "Flexible Booking", desc: "Hourly, daily or multi-day rentals" },
  ];

  const vehicleTypes = [
    { type: "Sedan (4 Seater)", models: "Dzire, Etios", rate: "₹13/km", localRate: "₹1,800/day" },
    { type: "SUV (6-7 Seater)", models: "Innova, Ertiga", rate: "₹16/km", localRate: "₹2,800/day" },
    { type: "Tempo Traveller", models: "12-17 Seater", rate: "₹20-24/km", localRate: "₹4,500/day" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Services", href: ROUTES.SERVICES }, { label: "Taxi Services", href: ROUTES.TAXI_SERVICES }]} />

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Taxi Services in Mysore</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Professional taxi services in Mysore for all your travel needs - local trips, outstation rides, tours and airport transfers. Quick quotes via WhatsApp. Book your ride today!
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
            href={ROUTES.BOOK_TAXI}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Book online
          </Link>
        </div>
      </div>

      {/* Main Services */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Our Taxi Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.desc}</p>
              <div className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <p key={i} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm font-semibold text-blue-600">{service.price}</p>
              </div>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why Choose MM Mysore Travels</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Pricing */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Vehicle Options & Pricing</h2>
        <p className="mt-2 text-slate-600">Choose from our fleet based on passenger count and trip type</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicleTypes.map((vehicle, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">{vehicle.type}</h3>
              <p className="mt-1 text-sm text-slate-600">{vehicle.models}</p>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-xs text-slate-500">Outstation Rate</p>
                  <p className="text-xl font-bold text-blue-600">{vehicle.rate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Local Full Day</p>
                  <p className="text-lg font-semibold text-slate-900">{vehicle.localRate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">How do I book a taxi in Mysore?</h3>
            <p className="mt-2 text-slate-600">You can book via WhatsApp for instant confirmation, call us directly, or use our online booking form. We respond within minutes.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">What are your taxi rates in Mysore?</h3>
            <p className="mt-2 text-slate-600">Outstation taxis start at ₹13/km for sedans. Local sightseeing packages start at ₹800 for half-day. Airport transfers from ₹2,800. Contact us for exact quotes.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Are your cabs clean and well-maintained?</h3>
            <p className="mt-2 text-slate-600">Yes! All our vehicles are regularly serviced, sanitized, and come with working AC. We maintain high standards for passenger comfort and safety.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Can I book for same-day travel?</h3>
            <p className="mt-2 text-slate-600">Yes, subject to availability. Contact us on WhatsApp and we'll do our best to arrange a vehicle for you on short notice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
