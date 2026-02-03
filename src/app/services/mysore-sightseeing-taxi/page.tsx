import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/constants/schema-templates";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore Sightseeing Taxi | Half-Day & Full-Day City Tour | Expert Guides",
  description:
    "Book Mysore sightseeing taxi for Palace, Chamundi Hills, Zoo, Brindavan Gardens. Half-day and full-day tours with professional drivers. Flexible itineraries.",
  keywords: [
    "mysore sightseeing taxi",
    "mysore local tour",
    "mysore palace tour",
    "chamundi hills taxi",
    "mysore city tour"
  ],
  alternates: { canonical: "/services/mysore-sightseeing-taxi/" },
};

const sightseeingServiceSchema = createServiceSchema({
  name: "Mysore Sightseeing Taxi Service",
  description: "Mysore city sightseeing taxi for Palace, Chamundi Hills, Zoo, Brindavan Gardens tours. Half-day and full-day packages with professional drivers and flexible itineraries.",
  serviceType: "Local Sightseeing Tour Service",
  areaServed: "Mysore, Karnataka, India",
  provider: "MM Mysore Travels",
  offers: {
    price: 1200,
    priceCurrency: "INR",
    description: "Half-day Mysore sightseeing tour (4 hours, 40 km)",
  },
  availableChannel: {
    availableLanguage: "en",
    serviceUrl: "https://travelmysore.com/services/mysore-sightseeing-taxi/",
    servicePhone: "+919611353434",
  },
});

export default function MysoreSightseeingTaxiPage() {
  const attractions = [
    { name: "Mysore Palace", time: "1-2 hours", desc: "Iconic royal palace" },
    { name: "Chamundi Hills", time: "1-2 hours", desc: "Scenic hilltop temple" },
    { name: "Sri Chamarajendra Zoo", time: "2-3 hours", desc: "Large wildlife zoo" },
    { name: "Brindavan Gardens", time: "1-2 hours", desc: "Beautiful fountain gardens" },
  ];

  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      halfDay: "₹1,200",
      fullDay: "₹2,000",
      desc: "Perfect for couples and small families"
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      halfDay: "₹1,600",
      fullDay: "₹2,800",
      desc: "Spacious for families and groups"
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      halfDay: "₹2,500",
      fullDay: "₹4,500",
      desc: "Large groups and corporate tours"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={sightseeingServiceSchema} />
      <Breadcrumbs
        items={[
          { label: "Services", href: ROUTES.SERVICES },
          { label: "Sightseeing Taxi", href: ROUTES.SIGHTSEEING_TAXI },
        ]}
      />

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-slate-50 p-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore Sightseeing Taxi</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Explore Mysore's iconic attractions with comfortable AC taxis and knowledgeable drivers. Perfect for families, tourists, and groups.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            WhatsApp for itinerary
          </a>
          <Link
            href={ROUTES.MYSORE_ONE_DAY_TOUR}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            View one day tour
          </Link>
        </div>
      </div>

      {/* Popular Attractions */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Popular Mysore Attractions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {attractions.map((attraction, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{attraction.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{attraction.desc}</p>
              <p className="mt-2 text-sm font-medium text-purple-600">Average time: {attraction.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Package Options */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Vehicle-Based Pricing</h2>
        <p className="mt-2 text-slate-600">Choose between half-day (4-5 hours, 40 km) or full-day (8-9 hours, 80 km) tours</p>
        <div className="mt-6 space-y-4">
          {vehiclePricing.map((vehicle, idx) => (
            <div key={idx} className="rounded-xl border-2 border-slate-200 bg-white p-6 hover:border-purple-300 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                  <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                  <p className="text-sm text-slate-500 mt-2">{vehicle.desc}</p>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-xs text-slate-500">Half-Day</p>
                    <p className="text-2xl font-bold text-purple-600">{vehicle.halfDay}</p>
                    <p className="text-xs text-slate-600">4-5 hours</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Full-Day</p>
                    <p className="text-2xl font-bold text-purple-600">{vehicle.fullDay}</p>
                    <p className="text-xs text-slate-600">8-9 hours</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">* Prices include AC vehicle, professional driver, fuel, and parking. Entry tickets to attractions not included.</p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Sightseeing Service?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-2xl">🚕</div>
            <div>
              <h3 className="font-semibold text-slate-900">Comfortable Vehicles</h3>
              <p className="mt-1 text-sm text-slate-600">Well-maintained AC cars perfect for city tours</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl">👨‍💼</div>
            <div>
              <h3 className="font-semibold text-slate-900">Knowledgeable Drivers</h3>
              <p className="mt-1 text-sm text-slate-600">Experienced drivers with local expertise</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="font-semibold text-slate-900">Flexible Itineraries</h3>
              <p className="mt-1 text-sm text-slate-600">Customize your tour based on interests</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-2xl">💰</div>
            <div>
              <h3 className="font-semibold text-slate-900">Transparent Pricing</h3>
              <p className="mt-1 text-sm text-slate-600">Fixed rates with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Can I customize my tour itinerary?</h3>
            <p className="mt-2 text-slate-600">Absolutely! We offer fully customizable tours. Let us know your preferences and we'll plan accordingly.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">What's the best time to visit Mysore attractions?</h3>
            <p className="mt-2 text-slate-600">Early morning (6-9 AM) is best to avoid crowds. Avoid midday heat. Evening is great for sunset at Chamundi Hills.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Do you provide child seats for babies?</h3>
            <p className="mt-2 text-slate-600">Yes, we can arrange child seats and boosters. Please request while booking.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
