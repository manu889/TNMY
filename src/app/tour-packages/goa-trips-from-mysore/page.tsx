import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Goa Trips from Mysore | Starting from ₹18,000 | 3-5 Days Beach Package",
  description: "Book Goa trip from Mysore starting from ₹18,000 for 3-5 days. Explore beaches, nightlife, Portuguese heritage. Professional drivers, AC vehicles, flexible itinerary.",
  keywords: ["goa trip from mysore", "mysore to goa package", "goa beach tour", "3 day goa package", "coastal road trip"],
  alternates: { canonical: "/goa-trips-from-mysore/" },
};

const tourPackage = createTourPackageSchema({
  name: "Goa Trips from Mysore",
  description: "3-5 day beach vacation package from Mysore to Goa covering North and South Goa beaches, Portuguese heritage, nightlife, and water sports",
  url: BUSINESS_INFO.url + "/goa-trips-from-mysore/",
  image: BUSINESS_INFO.url + "/images/tours/Goa_Beach_Tour.jpg",
  offers: {
    price: "18000",
    priceCurrency: "INR"
  },
  duration: "P4D",
  itinerary: [
    { name: "North Goa Beaches", description: "Calangute, Baga, Anjuna, Vagator - popular beaches with water sports" },
    { name: "Old Goa Heritage", description: "Basilica of Bom Jesus, Se Cathedral, Portuguese architecture" },
    { name: "South Goa Beaches", description: "Colva, Palolem, Agonda - serene beaches with laid-back vibe" },
    { name: "Night Markets & Clubs", description: "Saturday Night Market, Tito's Lane, beach shacks" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Goa trip from Mysore cost?",
    answer: "Goa trip from Mysore starting from ₹18,000 for 3-5 days including vehicle, driver, and fuel. Accommodation and food are extra. Distance is 560 km one way, taking approximately 10-11 hours."
  },
  {
    question: "What is the best route from Mysore to Goa?",
    answer: "Best route: Mysore → Mangalore (via Hunsur, Hassan) → Goa (coastal route via NH66). Approximate 560 km, 10-11 hours drive. Alternatively, can go via Hubli route which is slightly faster."
  },
  {
    question: "Is accommodation included in the package?",
    answer: "No, accommodation is not included. We can help arrange beach resorts, hotels, or budget guesthouses. Goa accommodation ranges from ₹1,000-10,000 per night depending on location and season."
  },
  {
    question: "What is the best time to visit Goa from Mysore?",
    answer: "October to March is peak season with pleasant weather. Monsoon (June-September) offers lush greenery and lower prices. Summer (April-May) can be hot and humid."
  },
]);

export default function GoaTripsFromMysorePage() {
  const highlights = [
    { day: "Day 1", title: "Mysore to Goa", desc: "Early morning departure, drive through scenic route via Mangalore, reach Goa evening, check-in, beach walk" },
    { day: "Day 2", title: "North Goa Exploration", desc: "Fort Aguada, Calangute Beach, Baga Beach, water sports, Anjuna flea market (Wednesday), evening at Vagator" },
    { day: "Day 3", title: "Old Goa & Panjim", desc: "Basilica of Bom Jesus, Se Cathedral, Church of St. Francis, Panjim city walk, evening river cruise" },
    { day: "Day 4", title: "South Goa Beaches", desc: "Colva Beach, Benaulim, Palolem Beach, Cabo de Rama Fort, sunset at Agonda Beach" },
    { day: "Day 5", title: "Leisure & Return", desc: "Morning beach time, shopping, start return journey to Mysore or extend stay" },
  ];

  const inclusions = [
    "AC vehicle for round trip (Sedan/SUV/Tempo)",
    "Professional driver with accommodation",
    "Fuel for 1100+ km journey",
    "All tolls and parking fees",
    "Driver allowance and night charges",
    "GST and taxes"
  ];

  const exclusions = [
    "Hotel/Resort accommodation in Goa",
    "All meals and beverages",
    "Entry tickets to attractions",
    "Water sports activities (₹500-2000)",
    "River cruise charges (₹500-1000)",
    "Personal expenses and shopping"
  ];

  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      price: "₹18,000",
      perDay: "₹4,500/day"
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      price: "₹24,000",
      perDay: "₹6,000/day"
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      price: "₹36,000",
      perDay: "₹9,000/day"
    }
  ];

  const popularBeaches = [
    { name: "Calangute", type: "North Goa", vibe: "Busy, water sports, shops" },
    { name: "Baga", type: "North Goa", vibe: "Nightlife, clubs, restaurants" },
    { name: "Anjuna", type: "North Goa", vibe: "Flea market, hippie culture" },
    { name: "Vagator", type: "North Goa", vibe: "Cliffs, peaceful, sunset views" },
    { name: "Palolem", type: "South Goa", vibe: "Serene, crescent beach, shacks" },
    { name: "Agonda", type: "South Goa", vibe: "Quiet, pristine, relaxation" },
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Goa Trips", href: ROUTES.GOA_TRIPS }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Goa Trips from Mysore
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Escape to India's favorite beach destination! Experience 3-5 days of sun, sand, and sea with pristine beaches, Portuguese heritage, vibrant nightlife, and delicious seafood.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3-5 Days</div>
              <div className="text-sm font-semibold text-slate-600">Beach Holiday</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">560 km</div>
              <div className="text-sm font-semibold text-slate-600">One Way</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Starting from ₹18,000</div>
              <div className="text-sm font-semibold text-slate-600">Package Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Year Round</div>
              <div className="text-sm font-semibold text-slate-600">All Seasons</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              WhatsApp for Beach Package
            </a>
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Book Goa Trip
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Goa Beach Vacation</h2>
              <p className="text-slate-700 mb-4">
                Goa, India's smallest state and beach capital, offers the perfect blend of sun-soaked beaches, Portuguese colonial architecture, vibrant nightlife, and laid-back coastal charm. Located 560 km from Mysore, this 3-5 day trip takes you through scenic routes to one of India's most popular tourist destinations.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>North Goa</strong> is famous for its bustling beaches like Calangute and Baga, water sports activities, flea markets (especially Anjuna's Wednesday market), and legendary nightlife at Tito's Lane. The area attracts younger crowds and party enthusiasts with its beach clubs, shacks, and energetic atmosphere.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Old Goa and Panjim</strong> showcase 450 years of Portuguese heritage with UNESCO World Heritage churches, colorful Latin Quarter buildings, and charming riverside promenades. Visit the Basilica of Bom Jesus housing St. Francis Xavier's relics and Se Cathedral, Asia's largest church.
              </p>
              <p className="text-slate-700">
                <strong>South Goa</strong> offers a quieter, more relaxed experience with pristine beaches like Palolem, Agonda, and Colva. Perfect for those seeking tranquility, these beaches feature clean sands, beach shacks serving fresh seafood, and stunning sunset views with fewer crowds.
              </p>
            </div>

            {/* Popular Beaches */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Popular Beaches to Explore</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularBeaches.map((beach, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4">
                    <h3 className="text-lg font-bold text-slate-900">{beach.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{beach.type}</p>
                    <p className="text-sm text-slate-700 mt-2">{beach.vibe}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested 5-Day Itinerary</h2>
              <div className="space-y-6">
                {highlights.map((day, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-orange-200 last:border-transparent last:pb-0">
                    <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-orange-600"></div>
                    <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-2">{day.day}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                    <p className="text-slate-700">{day.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                * Flexible itinerary. Can extend to 6-7 days for more beach relaxation. Recommend staying in North or South Goa based on preferences.
              </p>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Pricing</h2>
              <p className="text-slate-600 mb-6">Vehicle options for 4-day Goa trip (includes round trip 1100+ km, driver, fuel, tolls)</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-orange-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Package</p>
                        <p className="text-3xl font-bold text-orange-600">{vehicle.price}</p>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.perDay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Prices for 4-day package. Add ₹4,500-9,000 per extra day. Goa accommodation ₹1,000-10,000 per night based on season and location.
              </p>
            </div>

            {/* What's Included */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Package Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
                    ✓ Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                    ✗ Not Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    {exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">How much does Goa trip from Mysore cost?</h3>
                  <p className="text-slate-700">Goa trip from Mysore starting from ₹18,000 for 3-5 days including vehicle, driver, and fuel. Accommodation and food are extra. Distance is 560 km one way, taking approximately 10-11 hours.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">What is the best route?</h3>
                  <p className="text-slate-700">Best route: Mysore → Mangalore (via Hunsur, Hassan) → Goa (coastal route via NH66). Approximate 560 km, 10-11 hours drive. Alternatively, can go via Hubli route which is slightly faster.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Is accommodation included?</h3>
                  <p className="text-slate-700">No, accommodation is not included. We can help arrange beach resorts, hotels, or budget guesthouses. Goa accommodation ranges from ₹1,000-10,000 per night depending on location and season.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Best time to visit?</h3>
                  <p className="text-slate-700">October to March is peak season with pleasant weather. Monsoon (June-September) offers lush greenery and lower prices. Summer (April-May) can be hot and humid.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book Beach Vacation</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Beaches & nightlife</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comfortable journey</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible itinerary</span>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-orange-700 hover:bg-orange-50 transition-colors"
              >
                WhatsApp: {BUSINESS_INFO.phone}
              </a>
              <Link
                href={ROUTES.BOOK_TAXI}
                className="mt-3 block w-full rounded-lg border-2 border-white px-6 py-3 text-center text-base font-semibold text-white hover:bg-orange-800 transition-colors"
              >
                Book Online
              </Link>
            </div>

            {/* Related Tours */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Other Multi-Day Tours</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_COORG_WAYANAD} className="block p-3 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Coorg Wayanad</div>
                  <div className="text-sm text-slate-600">3-4 Days • Starting from ₹16,500</div>
                </Link>
                <Link href={ROUTES.MYSORE_OOTY_COORG} className="block p-3 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Ooty Coorg</div>
                  <div className="text-sm text-slate-600">3-5 Days • Starting from ₹18,000</div>
                </Link>
                <Link href={ROUTES.CUSTOM_PACKAGES} className="block p-3 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="font-semibold text-slate-900">Custom Packages</div>
                  <div className="text-sm text-slate-600">Create Your Own</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
