import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Bangalore Travel | Mysore to Bangalore Taxi Booking",
  description: "Book Mysore to Bangalore taxi with reliable drivers and clear pricing.",
  alternates: { canonical: "/destinations/bangalore/" },
};

export default function DestinationBangalorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Bangalore", href: ROUTES.DEST_BANGALORE }]}
      />

      {/* Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-slate-50 p-8 md:p-12 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore to Bangalore Taxi Service</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Travel comfortably between Mysore and India's Silicon Valley with our premium taxi service. Fast, reliable transfers with professional drivers on well-maintained NH275 highway.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link 
            href={ROUTES.MYSORE_TO_BANGALORE} 
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Book Bangalore Taxi
          </Link>
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Get Instant Quote
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Distance</div>
            <div className="text-slate-600">145 km from Mysore</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Travel Time</div>
            <div className="text-slate-600">2.5 - 3 hours</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Starting Fare</div>
            <div className="text-slate-600">₹3,500 onwards</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Highway</div>
            <div className="text-slate-600">NH275 - 4 lane</div>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Bangalore Transfer Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "Airport Transfers", 
              desc: "Direct pickup/drop from Bangalore Airport (Kempegowda International) to Mysore. On-time service, flight tracking, meet & greet.",
              icon: "✈️"
            },
            { 
              title: "City-to-City Transfer", 
              desc: "Door-to-door service from any location in Mysore to Bangalore residential areas, hotels, or offices with luggage assistance.",
              icon: "🚗"
            },
            { 
              title: "Bangalore Day Trip", 
              desc: "Full-day Bangalore sightseeing from Mysore covering Lalbagh, Palace, ISKCON temple, shopping malls with driver waiting.",
              icon: "🏛️"
            },
            { 
              title: "Corporate Travel", 
              desc: "Professional business travel service for meetings, conferences in Bangalore tech parks with invoice facilities.",
              icon: "💼"
            }
          ].map((service) => (
            <div key={service.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12 bg-purple-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Mysore-Bangalore Taxi?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Highway Experts", desc: "Experienced drivers familiar with NH275 route, traffic patterns, and fastest routes to Bangalore areas" },
            { title: "Fixed Pricing", desc: "Transparent one-way and round-trip rates with no surge pricing or hidden toll charges" },
            { title: "24/7 Service", desc: "Round-the-clock availability for early morning flights, late night returns, emergency trips" },
            { title: "Well-Maintained Cars", desc: "Regular service sedans and SUVs with GPS, clean interiors, and entertainment systems" },
            { title: "Flexible Stops", desc: "Free stops at Srirangapatna, Mandya, or Ramanagara en route without extra charges" },
            { title: "Corporate Billing", desc: "GST invoices, monthly billing options for corporate clients with volume discounts" }
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Mysore to Bangalore Travel Guide</h2>
        <div className="prose prose-slate max-w-none bg-white rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Route & Travel Time</h3>
          <p className="text-slate-700 mb-4">
            The 145 km journey via NH275 (Mysore-Bangalore Highway) takes 2.5-3 hours depending on traffic. Well-maintained 4-lane highway passes through Srirangapatna, Mandya, Channapatna, and Ramanagara. Avoid peak Bangalore traffic (8-10 AM, 6-8 PM) for faster commute.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Places to Visit in Bangalore</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
            <li>Lalbagh Botanical Garden - 240-acre garden with glasshouse and rare plant species</li>
            <li>Bangalore Palace - Tudor-style architecture inspired by Windsor Castle</li>
            <li>ISKCON Temple - Magnificent Krishna temple with spiritual ambiance</li>
            <li>Vidhana Soudha - Iconic government building, evening illumination spectacular</li>
            <li>Cubbon Park - 300-acre green lung in city center, perfect for walks</li>
            <li>MG Road & Brigade Road - Shopping, dining, nightlife hubs</li>
            <li>Innovative Film City - Entertainment park with theme rides and museums</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Bangalore Airport Transfer</h3>
          <p className="text-slate-700 mb-4">
            Kempegowda International Airport is 180 km from Mysore (3.5-4 hours via NH275 and NICE Road). Book airport taxis in advance for domestic/international flights. Drivers track flight status and wait in arrival area with name board.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">En Route Attractions</h3>
          <p className="text-slate-700 mb-4">
            <strong>Srirangapatna:</strong> Tipu Sultan's capital with fort, Ranganathaswamy temple (15 min stop).<br/>
            <strong>Mandya:</strong> Sugar city with KRS Dam nearby for extended tours.<br/>
            <strong>Channapatna:</strong> Famous for wooden toys - shop authentic lacquerware.<br/>
            <strong>Ramanagara:</strong> Iconic Sholay film location with rock climbing facilities.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Travel Tips</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
            <li>Book early morning (6-7 AM) departures to avoid Bangalore traffic congestion</li>
            <li>Highway has multiple dining options - Kamat, A2B restaurants en route</li>
            <li>Carry valid ID for security checks at Bangalore entry points during events</li>
            <li>Plan round-trip bookings for better rates and guaranteed return availability</li>
          </ul>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick & Comfortable Bangalore Transfers</h2>
        <p className="text-lg mb-6 text-purple-50">
          Book Mysore to Bangalore taxi for hassle-free travel. Professional service, transparent pricing, comfortable vehicles for all occasions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-purple-600 hover:bg-purple-50 transition-colors shadow-lg"
          >
            Book Now
          </Link>
          <a 
            href="tel:+919611353434" 
            className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3 text-base font-semibold text-white hover:bg-purple-800 transition-colors border-2 border-white"
          >
            Call: +91 96113 53434
          </a>
        </div>
      </section>
    </div>
  );
}
