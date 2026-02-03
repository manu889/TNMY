import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taxi Services in Mysore | Travel Agency Mysore | MM Mysore Travels",
  description: "Leading taxi services in Mysore - Outstation cabs, local sightseeing, airport transfers, tour packages, corporate transport. Highly rated travel agency. Book 24/7.",
  keywords: [
    "top travels in mysore",
    "best travel agency mysore",
    "taxi services in mysore",
    "cabs in mysore",
    "travel agency in mysore",
    "travel agency mysore",
    "cab services mysore",
    "mysore taxi agency",
    "outstation taxi mysore",
    "mysore tour packages",
    "airport taxi mysore",
    "corporate cab service mysore",
    "tempo traveller mysore",
    "mysore sightseeing taxi"
  ],
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Taxi Services in Mysore - MM Mysore Travels",
    description: "Leading travel agency in Mysore with 11+ years experience. 4.9★ rated taxi services.",
    type: "website",
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: "Outstation Taxi",
      desc: "Comfortable intercity travel to Ooty, Coorg, Bangalore, Wayanad, and beyond. Well-maintained AC vehicles.",
      features: ["One-way & Round trip", "Transparent pricing", "Experienced drivers", "24/7 available"],
      price: "Starting from ₹13/km",
      link: ROUTES.OUTSTATION_TAXI
    },
    {
      title: "Local Sightseeing",
      desc: "Explore Mysore's palaces, temples, gardens at your own pace. Customizable itineraries available.",
      features: ["Full day packages", "Half day options", "Knowledgeable drivers", "All major attractions"],
      price: "Starting from ₹2,000/day",
      link: ROUTES.SIGHTSEEING_TAXI
    },
    {
      title: "Airport Transfer",
      desc: "Hassle-free pickup & drop for Bangalore, Mysore airports. On-time service guaranteed.",
      features: ["Real-time tracking", "Flight monitoring", "Meet & greet service", "24/7 availability"],
      price: "Starting from ₹2,800",
      link: ROUTES.AIRPORT_TRANSFER
    },
    {
      title: "Tempo Traveller",
      desc: "Spacious 12-17 seater vehicles for group travel, family tours, corporate outings.",
      features: ["Push-back seats", "AC facility", "Music system", "Large luggage space"],
      price: "₹20 - ₹24 per km",
      link: "/fleet/tempo-traveller/"
    },
    {
      title: "Tour Packages",
      desc: "Curated multi-day packages covering Karnataka's best destinations with accommodation.",
      features: ["All-inclusive packages", "Flexible itineraries", "Expert guides", "Hotel bookings"],
      price: "Package-based pricing",
      link: ROUTES.TOUR_PACKAGES
    },
    {
      title: "Corporate Cab Service",
      desc: "Reliable daily commute solutions for corporate employees. Monthly packages available.",
      features: ["Fixed monthly rates", "Dedicated vehicles", "Professional drivers", "Invoicing support"],
      price: "Custom monthly packages",
      link: ROUTES.CORPORATE_CAB
    }
  ];

  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Services", href: ROUTES.SERVICES }]} />
        
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-10 text-center text-white">
          <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm mb-4">
            Top Travels in Mysore • 11+ Years Experience • Highly Rated
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Leading Taxi Services in Mysore
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            MM Mysore Travels - Your trusted <strong className="text-white">travel agency in Mysore</strong> offering comprehensive <strong className="text-white">taxi services in Mysore</strong> and clean AC <strong className="text-white">cabs in Mysore</strong> for all your travel needs. Book outstation cabs, local tours, airport transfers, and more with 24/7 availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h2>
              <p className="text-slate-600 mb-5">
                {service.desc}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-sm">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-200 pt-4 mb-5">
                <p className="font-semibold text-slate-900">
                  {service.price}
                </p>
              </div>
              <Link
                href={service.link}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-lg mb-6 text-slate-200">
            Professional service • Transparent pricing • 24/7 availability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.BOOK_TAXI} className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold transition hover:bg-slate-100">
              Book Now
            </Link>
            <Link href={ROUTES.CONTACT} className="border border-white/20 hover:border-white/30 text-white px-8 py-3 rounded-lg font-bold transition">
              Contact Us
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
