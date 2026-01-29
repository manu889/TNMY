import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Mysore Ooty Kodaikanal Tour Package | Starting from ₹22,000 | 4-6 Days",
  description: "Book Mysore Ooty Kodaikanal tour package starting from ₹22,000 for 4-6 days. Explore Nilgiris and Palani hills, tea estates, lakes, waterfalls. Premium hill station circuit.",
  keywords: ["mysore ooty kodaikanal package", "tamil nadu hill stations tour", "nilgiris tour", "5 day hill station tour"],
  alternates: { canonical: "/mysore-ooty-kodaikanal/" },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore Ooty Kodaikanal Tour Package",
  description: "Extended 4-6 day tour covering Karnataka and Tamil Nadu's premier hill stations - from Nilgiris to Palani Hills",
  url: BUSINESS_INFO.url + "/mysore-ooty-kodaikanal/",
  image: BUSINESS_INFO.url + "/images/tours/Ooty_Kodaikanal_Tour.jpg",
  offers: {
    price: "22000",
    priceCurrency: "INR"
  },
  duration: "P5D",
  itinerary: [
    { name: "Ooty - Queen of Nilgiris", description: "Botanical Gardens, Ooty Lake, tea estates, toy train" },
    { name: "Coonoor & Pykara", description: "Sim's Park, waterfalls, tea factory visits" },
    { name: "Kodaikanal - Princess of Hills", description: "Kodai Lake, Bryant Park, viewpoints" },
    { name: "Kodaikanal Exploration", description: "Coaker's Walk, Pillar Rocks, waterfalls, valleys" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Mysore Ooty Kodaikanal tour package cost?",
    answer: "Mysore Ooty Kodaikanal tour package starting from ₹22,000 for 4-6 days including vehicle, driver, and fuel. Accommodation and food are extra. This is an extended tour covering over 600 km."
  },
  {
    question: "What is the distance between Ooty and Kodaikanal?",
    answer: "Ooty to Kodaikanal is approximately 260 km and takes 6-7 hours through scenic mountain roads. We recommend an early morning start and optional lunch stop at Palani or Dindigul."
  },
  {
    question: "How many days are needed for this tour?",
    answer: "Minimum 4 days required. Ideal duration is 5 days (2 nights Ooty, 2 nights Kodaikanal) for a comfortable pace. Can extend to 6 days to include more attractions."
  },
  {
    question: "Is this tour suitable for senior citizens?",
    answer: "Yes, but keep in mind this is an extended tour with long driving hours. The route includes mountain roads. AC vehicles with rest stops are provided for comfort."
  },
]);

export default function MysoreOotyKodaikanalPage() {
  const highlights = [
    { day: "Day 1", title: "Mysore to Ooty", desc: "Drive through Bandipur (86 km), check-in, evening at Ooty Lake and boat club" },
    { day: "Day 2", title: "Ooty Full Day", desc: "Botanical Gardens, Rose Garden, Doddabetta Peak, Tea Museum, toy train ride" },
    { day: "Day 3", title: "Ooty to Kodaikanal", desc: "Morning in Coonoor, scenic 260 km drive to Kodaikanal through Palani Hills" },
    { day: "Day 4", title: "Kodaikanal Sightseeing", desc: "Kodai Lake, Bryant Park, Coaker's Walk, Pillar Rocks, Green Valley View" },
    { day: "Day 5", title: "Kodaikanal & Return", desc: "Bear Shola Falls, Silver Cascade, drive back to Mysore via Dindigul (320 km)" },
  ];

  const inclusions = [
    "AC vehicle for entire tour (Sedan/SUV/Tempo)",
    "Professional experienced driver",
    "Driver accommodation and allowance",
    "Fuel for complete journey (600+ km)",
    "All tolls and parking charges",
    "GST and taxes"
  ];

  const exclusions = [
    "Hotel accommodation (we can arrange)",
    "All meals and beverages",
    "Entry tickets to attractions",
    "Toy train tickets (₹300-1000)",
    "Boating charges at lakes",
    "Personal expenses and tips"
  ];

  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      price: "₹19,500",
      perDay: "₹4,875/day"
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      price: "₹26,000",
      perDay: "₹6,500/day"
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      price: "₹37,000",
      perDay: "₹9,250/day"
    }
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Mysore Ooty Kodaikanal", href: ROUTES.MYSORE_OOTY_KODAIKANAL }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-blue-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore Ooty Kodaikanal Tour Package
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Experience the grandest hill station circuit of South India. This 4-6 day journey takes you from the Nilgiri Hills to the Palani Hills, covering two of Tamil Nadu's most spectacular destinations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">4-6 Days</div>
              <div className="text-sm font-semibold text-slate-600">Extended Tour</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">600+ km</div>
              <div className="text-sm font-semibold text-slate-600">Circuit Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Starting from ₹22,000</div>
              <div className="text-sm font-semibold text-slate-600">Package Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Premium</div>
              <div className="text-sm font-semibold text-slate-600">Tour Category</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              WhatsApp for Itinerary
            </a>
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Book This Package
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Extended Tour</h2>
              <p className="text-slate-700 mb-4">
                The Mysore-Ooty-Kodaikanal circuit is the ultimate hill station experience in South India, combining two distinct mountain ranges - the Nilgiris and the Palani Hills. This extended tour requires 4-6 days and covers over 600 km through some of the most scenic landscapes in Karnataka and Tamil Nadu.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Ooty (Udhagamandalam)</strong> at 2,240 meters elevation offers colonial charm, expansive tea estates, and the UNESCO Heritage toy train. Explore the magnificent Botanical Gardens spanning 55 acres, enjoy boating at Ooty Lake, and witness panoramic views from Doddabetta Peak.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Coonoor</strong>, located between Ooty and the plains, features historic tea estates, Sim's Park with rare plant species, and spectacular viewpoints like Lamb's Rock offering views extending 30-40 km.
              </p>
              <p className="text-slate-700">
                <strong>Kodaikanal</strong>, the "Princess of Hill Stations" at 2,133 meters in the Palani Hills, presents a different character with its pine forests, waterfalls, and dramatic valleys. The star-shaped Kodai Lake, Coaker's Walk along cliff edges, and Pillar Rocks rising 400 feet create unforgettable memories.
              </p>
            </div>

            {/* Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested 5-Day Itinerary</h2>
              <div className="space-y-6">
                {highlights.map((day, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-purple-200 last:border-transparent last:pb-0">
                    <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-2">{day.day}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                    <p className="text-slate-700">{day.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                * Itinerary is customizable. Can adjust to 4 days (skip some attractions) or extend to 6 days for relaxed exploration.
              </p>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Pricing</h2>
              <p className="text-slate-600 mb-6">Vehicle options for 4-day tour (prices include vehicle, driver, fuel, tolls for 600+ km)</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-purple-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Package</p>
                        <p className="text-3xl font-bold text-purple-600">{vehicle.price}</p>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.perDay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Extended tour pricing. Add ₹5,500-10,500 per extra day. Accommodation ₹2,000-5,000 per night in hill stations.
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
                  <h3 className="font-bold text-slate-900 mb-2">How much does Mysore Ooty Kodaikanal tour package cost?</h3>
                  <p className="text-slate-700">Mysore Ooty Kodaikanal tour package starting from ₹22,000 for 4-6 days including vehicle, driver, and fuel. Accommodation and food are extra. This is an extended tour covering over 600 km.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">What is the distance between Ooty and Kodaikanal?</h3>
                  <p className="text-slate-700">Ooty to Kodaikanal is approximately 260 km and takes 6-7 hours through scenic mountain roads. We recommend an early morning start and optional lunch stop at Palani or Dindigul.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">How many days are needed?</h3>
                  <p className="text-slate-700">Minimum 4 days required. Ideal duration is 5 days (2 nights Ooty, 2 nights Kodaikanal) for a comfortable pace. Can extend to 6 days to include more attractions.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Is this tour suitable for senior citizens?</h3>
                  <p className="text-slate-700">Yes, but keep in mind this is an extended tour with long driving hours. The route includes mountain roads. AC vehicles with rest stops are provided for comfort.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book Extended Tour</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4-6 days premium tour</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>600+ km covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert hill drivers</span>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
              >
                WhatsApp: {BUSINESS_INFO.phone}
              </a>
              <Link
                href={ROUTES.BOOK_TAXI}
                className="mt-3 block w-full rounded-lg border-2 border-white px-6 py-3 text-center text-base font-semibold text-white hover:bg-purple-800 transition-colors"
              >
                Book Online
              </Link>
            </div>

            {/* Related Tours */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Tours</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_TO_OOTY} className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Ooty</div>
                  <div className="text-sm text-slate-600">1-2 Days • Starting from ₹4,800</div>
                </Link>
                <Link href={ROUTES.MYSORE_OOTY_COORG} className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Ooty Coorg</div>
                  <div className="text-sm text-slate-600">3-5 Days • Starting from ₹18,000</div>
                </Link>
                <Link href={ROUTES.CUSTOM_PACKAGES} className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                  <div className="font-semibold text-slate-900">Custom Packages</div>
                  <div className="text-sm text-slate-600">Design Your Own Tour</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
