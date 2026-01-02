"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { useState } from "react";

const tourPackages = [
  {
    name: "Mysore One Day Tour",
    href: ROUTES.MYSORE_ONE_DAY_TOUR,
    duration: "1 Day",
    distance: "80 km",
    price: "₹2,500",
    category: "one-day",
    destination: "mysore",
    description: "Complete Mysore city tour covering Palace, Chamundi Hills, Brindavan Gardens, St. Philomena's Church",
    highlights: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church"],
  },
  {
    name: "Mysore to Coorg",
    href: ROUTES.MYSORE_TO_COORG,
    duration: "1 Day",
    distance: "120 km",
    price: "₹4,500",
    category: "one-day",
    destination: "coorg",
    description: "Abbey Falls, Raja's Seat, Coffee Plantations, Omkareshwara Temple with scenic drive",
    highlights: ["Abbey Falls", "Raja's Seat", "Coffee Plantations", "Omkareshwara Temple"],
  },
  {
    name: "Mysore to Ooty",
    href: ROUTES.MYSORE_TO_OOTY,
    duration: "1 Day",
    distance: "125 km",
    price: "₹4,800",
    category: "one-day",
    destination: "ooty",
    description: "Queen of Hill Stations - Botanical Garden, Ooty Lake, Tea Gardens, scenic toy train",
    highlights: ["Botanical Garden", "Ooty Lake", "Tea Estates", "Doddabetta Peak"],
  },
  {
    name: "Mysore to Wayanad",
    href: ROUTES.MYSORE_TO_WAYANAD,
    duration: "1-2 Days",
    distance: "140 km",
    price: "₹5,200",
    category: "multi-day",
    destination: "wayanad",
    description: "Edakkal Caves, Soochipara Falls, wildlife sanctuaries, spice plantations",
    highlights: ["Edakkal Caves", "Soochipara Falls", "Wildlife Safari", "Spice Plantations"],
  },
  {
    name: "Mysore to Bangalore",
    href: ROUTES.MYSORE_TO_BANGALORE,
    duration: "1 Day",
    distance: "145 km",
    price: "₹3,800",
    category: "one-day",
    destination: "bangalore",
    description: "Comfortable transfer or day trip to Bangalore with sightseeing options",
    highlights: ["Lalbagh Garden", "Palace", "Vidhana Soudha", "ISKCON Temple"],
  },
  {
    name: "Mysore Coorg Wayanad",
    href: ROUTES.MYSORE_COORG_WAYANAD,
    duration: "3-4 Days",
    distance: "400 km",
    price: "₹15,000",
    category: "multi-day",
    destination: "multi",
    description: "Complete Karnataka-Kerala tour covering coffee estates, waterfalls, wildlife",
    highlights: ["Coorg Coffee Estates", "Wayanad Wildlife", "Waterfalls", "Hill Stations"],
  },
  {
    name: "Mysore Ooty Coorg",
    href: ROUTES.MYSORE_OOTY_COORG,
    duration: "3-5 Days",
    distance: "450 km",
    price: "₹16,500",
    category: "multi-day",
    destination: "multi",
    description: "Best of South India hill stations - tea gardens, coffee estates, scenic valleys",
    highlights: ["Ooty Tea Gardens", "Coorg Coffee", "Scenic Drives", "Hill Views"],
  },
  {
    name: "Mysore Ooty Kodaikanal",
    href: ROUTES.MYSORE_OOTY_KODAIKANAL,
    duration: "4-6 Days",
    distance: "550 km",
    price: "₹20,000",
    category: "multi-day",
    destination: "multi",
    description: "Extended hill station tour covering Tamil Nadu and Karnataka highlights",
    highlights: ["Ooty Gardens", "Kodaikanal Lake", "Valley Views", "Pine Forests"],
  },
  {
    name: "Goa Trips from Mysore",
    href: ROUTES.GOA_TRIPS,
    duration: "3-5 Days",
    distance: "560 km",
    price: "₹22,000",
    category: "multi-day",
    destination: "goa",
    description: "Beach paradise - North Goa, South Goa beaches, churches, nightlife, water sports",
    highlights: ["Beach Hopping", "Water Sports", "Portuguese Churches", "Night Markets"],
  },
  {
    name: "Tirupati Package",
    href: ROUTES.TIRUPATI_PACKAGE,
    duration: "1-2 Days",
    distance: "450 km",
    price: "₹12,000",
    category: "multi-day",
    destination: "tirupati",
    description: "Spiritual journey to Tirupati Balaji with comfortable travel and darshan arrangements",
    highlights: ["Tirupati Balaji Darshan", "Seven Hills", "Temple Visit", "Return Journey"],
  },
  {
    name: "Custom Tour Packages",
    href: ROUTES.CUSTOM_PACKAGES,
    duration: "Flexible",
    distance: "Custom",
    price: "On Request",
    category: "custom",
    destination: "custom",
    description: "Design your own itinerary - choose destinations, duration, and activities as per your preference",
    highlights: ["Personalized Itinerary", "Flexible Duration", "Custom Routes", "Special Requests"],
  },
];

export function TourPackagesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDestination, setSelectedDestination] = useState<string>("all");

  const filteredPackages = tourPackages.filter((pkg) => {
    if (selectedCategory !== "all" && pkg.category !== selectedCategory) return false;
    if (
      selectedDestination !== "all" &&
      pkg.destination !== selectedDestination &&
      pkg.destination !== "multi" &&
      pkg.destination !== "custom"
    )
      return false;
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Tour Packages", href: ROUTES.TOUR_PACKAGES }]} />

        {/* Hero Section */}
        <section className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
              15+ Curated Tours • Private Cabs • Expert Drivers
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Tour Packages from Mysore</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              Explore Karnataka and beyond with our carefully crafted tour packages. From one-day getaways to multi-day adventures, we
              offer the perfect travel experience with comfortable vehicles and knowledgeable drivers.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href={ROUTES.BOOK_TAXI}
                className="inline-flex items-center justify-center rounded-xl bg-white text-blue-600 px-6 py-3 text-base font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Book Your Tour Now
              </Link>
              <Link
                href={ROUTES.CUSTOM_PACKAGES}
                className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-6 py-3 text-base font-bold ring-2 ring-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Create Custom Package
              </Link>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Filter Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Tour Duration</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "all", label: "All Tours" },
                    { value: "one-day", label: "One Day" },
                    { value: "multi-day", label: "Multi-Day" },
                    { value: "custom", label: "Custom" },
                  ].map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        selectedCategory === cat.value
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Destination</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "all", label: "All Destinations" },
                    { value: "mysore", label: "Mysore" },
                    { value: "coorg", label: "Coorg" },
                    { value: "ooty", label: "Ooty" },
                    { value: "wayanad", label: "Wayanad" },
                    { value: "goa", label: "Goa" },
                    { value: "tirupati", label: "Tirupati" },
                  ].map((dest) => (
                    <button
                      key={dest.value}
                      onClick={() => setSelectedDestination(dest.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        selectedDestination === dest.value
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {dest.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing <span className="font-bold text-slate-900">{filteredPackages.length}</span> tour package
                {filteredPackages.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </section>

        {/* Tour Grid */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className="group bg-white rounded-2xl ring-1 ring-slate-900/5 hover:ring-blue-400 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tour.name}</h3>
                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-600/20">
                      {tour.duration}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{tour.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-600">{tour.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold text-slate-900">{tour.price}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {tour.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 3 && (
                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">+{tour.highlights.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    View Details & Book
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No tours found</h3>
              <p className="text-slate-600 mb-4">Try adjusting your filters to see more results</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedDestination("all");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Why Choose Us */}
        <section className="mt-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Book Tour Packages with MM Mysore Travels?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "All-Inclusive Pricing",
                  desc: "No hidden costs - fuel, tolls, driver charges included",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  ),
                  title: "Expert Local Guides",
                  desc: "Drivers with 10+ years experience and destination knowledge",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "Flexible Itineraries",
                  desc: "Customize stops, timings, and activities as per your needs",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  title: "24/7 Support",
                  desc: "Round-the-clock assistance during your entire journey",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Can't Find Your Perfect Tour?</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Let us create a custom itinerary just for you. Tell us your preferences, and we'll plan the perfect trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ROUTES.CUSTOM_PACKAGES}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Create Custom Package
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-slate-900 text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
