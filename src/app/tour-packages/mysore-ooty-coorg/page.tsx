import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Mysore Ooty Coorg Tour Package | Starting from ₹18,000 | 3-5 Days",
  description: "Book Mysore Ooty Coorg tour package starting from ₹18,000 for 3-5 days. Explore hill stations, tea gardens, coffee estates. Professional drivers, AC vehicles, flexible itinerary.",
  keywords: ["mysore ooty coorg package", "ooty coorg tour from mysore", "hill station tour", "3 day tour package"],
  alternates: { canonical: "/mysore-ooty-coorg/" },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore Ooty Coorg Tour Package",
  description: "Comprehensive 3-5 day tour covering South India's most beautiful hill stations - tea gardens, coffee plantations, waterfalls, and scenic valleys",
  url: BUSINESS_INFO.url + "/mysore-ooty-coorg/",
  image: BUSINESS_INFO.url + "/images/tours/Ooty_Coorg_Tour.jpg",
  offers: {
    price: "18000",
    priceCurrency: "INR"
  },
  duration: "P4D",
  itinerary: [
    { name: "Ooty - Queen of Hill Stations", description: "Botanical Gardens, Ooty Lake, Doddabetta Peak, toy train ride" },
    { name: "Coonoor & Tea Estates", description: "Sim's Park, tea factory visit, dolphin's nose viewpoint" },
    { name: "Coorg - Scotland of India", description: "Abbey Falls, Raja's Seat, coffee plantation tours" },
    { name: "Madikeri & Golden Temple", description: "Madikeri Fort, Tibetan Golden Temple, scenic landscapes" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Mysore Ooty Coorg tour package cost?",
    answer: "Mysore Ooty Coorg tour package starting from ₹18,000 for 3-5 days including vehicle, driver, and fuel. Accommodation and food are extra. Final price depends on vehicle type, number of days, and group size."
  },
  {
    question: "What is the best route for Mysore Ooty Coorg tour?",
    answer: "Most common route: Mysore → Ooty (86 km) → Coonoor → Coorg (165 km) → Mysore (120 km). Can be reversed or customized. We recommend spending 2 nights in Ooty area and 1-2 nights in Coorg."
  },
  {
    question: "Is accommodation included in the package?",
    answer: "No, accommodation is not included. We can help arrange hotels, resorts, or homestays at your preferred budget. Hill station hotels range from ₹1,500 to ₹5,000 per night depending on category."
  },
  {
    question: "Can I customize the number of days?",
    answer: "Yes! This is a flexible package. Minimum 3 days recommended to cover all three places comfortably. Can extend to 5-6 days for a more relaxed pace with additional sightseeing."
  },
]);

export default function MysoreOotyCoorgPage() {
  const highlights = [
    { day: "Day 1", title: "Mysore to Ooty", desc: "Drive through Bandipur Forest, check-in to hotel, evening at Ooty Lake and local market" },
    { day: "Day 2", title: "Ooty Sightseeing", desc: "Botanical Gardens, Doddabetta Peak, Rose Garden, Tea Museum, optional toy train ride" },
    { day: "Day 3", title: "Ooty to Coorg via Coonoor", desc: "Sim's Park, Lamb's Rock, Dolphin's Nose, tea factory, drive to Coorg through scenic ghats" },
    { day: "Day 4", title: "Coorg Exploration", desc: "Abbey Falls, Raja's Seat, Madikeri Fort, coffee plantation tour with tasting session" },
    { day: "Day 5", title: "Coorg to Mysore", desc: "Golden Temple, Dubare Elephant Camp (optional), return to Mysore with scenic stops" },
  ];

  const inclusions = [
    "AC vehicle for entire tour (Sedan/SUV/Tempo based on group)",
    "Professional driver with accommodation",
    "Fuel charges for entire trip",
    "All tolls and parking fees",
    "Driver bata and night charges",
    "GST and taxes"
  ];

  const exclusions = [
    "Hotel/Resort accommodation",
    "Breakfast, lunch, dinner",
    "Entry tickets to attractions",
    "Toy train tickets (₹300-1000)",
    "Personal expenses and shopping",
    "Anything not mentioned in inclusions"
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

  const destinations = [
    { name: "Ooty", attractions: "Botanical Gardens • Ooty Lake • Doddabetta • Rose Garden • Tea Museum" },
    { name: "Coonoor", attractions: "Sim's Park • Lamb's Rock • Dolphin's Nose • Tea Factory • Highfield Tea Estate" },
    { name: "Coorg", attractions: "Abbey Falls • Raja's Seat • Madikeri Fort • Coffee Estates • Golden Temple" },
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Mysore Ooty Coorg", href: ROUTES.MYSORE_OOTY_COORG }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-green-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore Ooty Coorg Tour Package
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Experience South India's finest hill stations in one comprehensive tour. From Ooty's tea gardens to Coorg's coffee estates, this 3-5 day journey offers breathtaking landscapes and cool mountain air.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3-5 Days</div>
              <div className="text-sm font-semibold text-slate-600">Flexible Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">450 km</div>
              <div className="text-sm font-semibold text-slate-600">Circuit Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Starting from ₹18,000</div>
              <div className="text-sm font-semibold text-slate-600">Package Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Year Round</div>
              <div className="text-sm font-semibold text-slate-600">Availability</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              WhatsApp for Detailed Itinerary
            </a>
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Book Package Now
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Hill Station Circuit</h2>
              <p className="text-slate-700 mb-4">
                The Mysore-Ooty-Coorg circuit combines three of South India's most spectacular hill stations in one memorable 
                journey. This tour takes you from the colonial charm of Ooty to the coffee-scented valleys of Coorg, offering 
                diverse experiences across Karnataka and Tamil Nadu.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Ooty (Udhagamandalam)</strong>, nestled in the Nilgiri Hills at 2,240 meters, is known for its pleasant 
                climate, sprawling tea gardens, and the famous toy train. Visit the magnificent Botanical Gardens, enjoy boating 
                at Ooty Lake, and catch panoramic views from Doddabetta Peak, the highest point in the Nilgiris.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Coonoor</strong>, a charming hill town enroute, offers pristine tea estates, historic Sim's Park, and 
                spectacular viewpoints like Lamb's Rock and Dolphin's Nose. The toy train journey between Ooty and Coonoor is 
                a UNESCO World Heritage experience.
              </p>
              <p className="text-slate-700">
                <strong>Coorg (Kodagu)</strong> welcomes you with rolling coffee plantations, mist-covered hills, and stunning 
                waterfalls. Explore Abbey Falls, watch sunset at Raja's Seat, tour aromatic coffee estates, and visit the golden-domed 
                Tibetan monastery at Bylakuppe.
              </p>
            </div>

            {/* Destinations */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Destinations</h2>
              <div className="space-y-4">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-5">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.name}</h3>
                    <p className="text-slate-600 text-sm">{dest.attractions}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-wise Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested 5-Day Itinerary</h2>
              <div className="space-y-6">
                {highlights.map((day, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-transparent last:pb-0">
                    <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-2">{day.day}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                    <p className="text-slate-700">{day.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                * Itinerary is fully customizable. Can be adjusted to 3 days (skipping Coonoor) or extended to 6 days for a relaxed pace.
              </p>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Pricing</h2>
              <p className="text-slate-600 mb-6">Vehicle options for 4-day tour (prices include vehicle, driver, fuel, tolls)</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-blue-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Package</p>
                        <p className="text-3xl font-bold text-blue-600">{vehicle.price}</p>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.perDay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Prices shown are for 4 days. Add ₹4,500-9,000 per extra day depending on vehicle. Accommodation not included.
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
                  <h3 className="font-bold text-slate-900 mb-2">How much does Mysore Ooty Coorg tour package cost?</h3>
                  <p className="text-slate-700">Mysore Ooty Coorg tour package starting from ₹18,000 for 3-5 days including vehicle, driver, and fuel. Accommodation and food are extra. Final price depends on vehicle type, number of days, and group size.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">What is the best route?</h3>
                  <p className="text-slate-700">Most common route: Mysore → Ooty (86 km) → Coonoor → Coorg (165 km) → Mysore (120 km). Can be reversed or customized. We recommend 2 nights in Ooty area and 1-2 nights in Coorg.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Is accommodation included?</h3>
                  <p className="text-slate-700">No, accommodation is not included. We can help arrange hotels, resorts, or homestays at your preferred budget. Hill station hotels range from ₹1,500 to ₹5,000 per night depending on category.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Can I customize the number of days?</h3>
                  <p className="text-slate-700">Yes! This is a flexible package. Minimum 3 days recommended to cover all three places comfortably. Can extend to 5-6 days for a more relaxed pace with additional sightseeing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book This Package</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>3-5 days flexible</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clean AC vehicles</span>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                WhatsApp: {BUSINESS_INFO.phone}
              </a>
              <Link
                href={ROUTES.BOOK_TAXI}
                className="mt-3 block w-full rounded-lg border-2 border-white px-6 py-3 text-center text-base font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Book Online
              </Link>
            </div>

            {/* Related Tours */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Tours</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_TO_OOTY} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Ooty</div>
                  <div className="text-sm text-slate-600">1-2 Days • Starting from ₹4,800</div>
                </Link>
                <Link href={ROUTES.MYSORE_TO_COORG} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Coorg</div>
                  <div className="text-sm text-slate-600">1 Day • Starting from ₹4,500</div>
                </Link>
                <Link href={ROUTES.MYSORE_OOTY_KODAIKANAL} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Ooty Kodaikanal</div>
                  <div className="text-sm text-slate-600">4-6 Days • Starting from ₹22,000</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
