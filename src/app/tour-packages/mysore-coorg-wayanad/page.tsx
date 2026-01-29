import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Mysore Coorg Wayanad Tour Package | Starting from ₹16,500 | 3-4 Days",
  description: "Book Mysore Coorg Wayanad tour package starting from ₹16,500 for 3-4 days. Explore coffee plantations, waterfalls, wildlife sanctuaries. Professional drivers, AC vehicles.",
  keywords: ["mysore coorg wayanad package", "coorg wayanad tour from mysore", "3 day tour package", "hill station tour"],
  alternates: { canonical: "/mysore-coorg-wayanad/" },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore Coorg Wayanad Tour Package",
  description: "Comprehensive 3-4 day tour covering Karnataka and Kerala's best hill stations with coffee estates, waterfalls, and wildlife",
  url: BUSINESS_INFO.url + "/mysore-coorg-wayanad/",
  image: BUSINESS_INFO.url + "/images/tours/Coorg_Wayanad_Tour.jpg",
  offers: {
    price: "16500",
    priceCurrency: "INR"
  },
  duration: "P4D",
  itinerary: [
    { name: "Coorg - Abbey Falls & Coffee Plantations", description: "Explore scenic waterfalls and aromatic coffee estates" },
    { name: "Wayanad - Edakkal Caves", description: "Ancient rock art and panoramic views" },
    { name: "Wayanad - Wildlife Safari", description: "Spot elephants and exotic birds" },
    { name: "Soochipara Falls", description: "Three-tier waterfall perfect for photography" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Mysore Coorg Wayanad tour package cost?",
    answer: "Mysore Coorg Wayanad tour package starting from ₹16,500 for 3-4 days including vehicle, driver, and fuel. Accommodation and food are extra. Pricing varies based on vehicle type and group size."
  },
  {
    question: "What is the best time to visit Coorg and Wayanad?",
    answer: "October to March is ideal for pleasant weather. Monsoon (June-September) offers lush greenery but may have heavy rains. Summer (April-May) can be warm."
  },
  {
    question: "Is accommodation included in the package?",
    answer: "No, accommodation is not included. We can help arrange hotels and homestays at your preferred budget. Package includes vehicle, driver, and fuel only."
  },
  {
    question: "Can the itinerary be customized?",
    answer: "Yes! This is a flexible multi-day tour. You can customize destinations, add extra days, or skip locations based on your preferences."
  },
]);

export default function MysoreCoorgWayanadPage() {
  const highlights = [
    { day: "Day 1", title: "Mysore to Coorg", desc: "Abbey Falls, Raja's Seat, Madikeri Fort, Coffee plantation tour" },
    { day: "Day 2", title: "Coorg to Wayanad", desc: "Golden Temple, Dubare Elephant Camp, drive through ghats" },
    { day: "Day 3", title: "Wayanad Exploration", desc: "Edakkal Caves, Soochipara Falls, Pookode Lake, Spice plantation" },
    { day: "Day 4", title: "Wayanad to Mysore", desc: "Wildlife Sanctuary visit, return journey with scenic stops" },
  ];

  const inclusions = [
    "AC vehicle for entire tour (Sedan/SUV/Tempo based on group)",
    "Professional driver with accommodation",
    "Fuel charges for entire trip",
    "All tolls and parking fees",
    "Driver allowance and charges",
    "GST and taxes"
  ];

  const exclusions = [
    "Hotel/Homestay accommodation",
    "Food and beverages",
    "Entry tickets to attractions",
    "Personal expenses",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ];

  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      price: "₹16,500",
      perDay: "₹4,200/day"
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      price: "₹22,000",
      perDay: "₹5,500/day"
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      price: "₹32,000",
      perDay: "₹8,000/day"
    }
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Mysore Coorg Wayanad", href: ROUTES.MYSORE_COORG_WAYANAD }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore Coorg Wayanad Tour Package
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Experience the best of Karnataka and Kerala in 3-4 days. Explore coffee plantations, misty waterfalls, and wildlife sanctuaries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3-4 Days</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">400 km</div>
              <div className="text-sm font-semibold text-slate-600">Total Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Starting from ₹16,500</div>
              <div className="text-sm font-semibold text-slate-600">Package Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Flexible</div>
              <div className="text-sm font-semibold text-slate-600">Customizable</div>
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
              Book Package
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Tour</h2>
              <p className="text-slate-700 mb-4">
                The Mysore-Coorg-Wayanad circuit is one of South India's most popular multi-day tours, combining the 
                cultural heritage of Mysore with the coffee-scented hills of Coorg and the wildlife-rich forests of 
                Wayanad. This 3-4 day journey takes you through diverse landscapes, from cascading waterfalls to 
                aromatic spice plantations.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Coorg (Kodagu)</strong>, known as the "Scotland of India," welcomes you with sprawling coffee 
                estates, misty hills, and stunning waterfalls like Abbey Falls. Walk through aromatic plantations, visit 
                historical sites, and enjoy the cool mountain air.
              </p>
              <p className="text-slate-700">
                <strong>Wayanad</strong>, Kerala's green paradise, offers pristine natural beauty with ancient caves, 
                wildlife sanctuaries, and spectacular waterfalls. Spot elephants in their natural habitat, explore 
                prehistoric rock art at Edakkal Caves, and relax by serene lakes.
              </p>
            </div>

            {/* Day-wise Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested 4-Day Itinerary</h2>
              <div className="space-y-6">
                {highlights.map((day, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-green-200 last:border-transparent last:pb-0">
                    <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-green-600"></div>
                    <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-2">{day.day}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                    <p className="text-slate-700">{day.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                * Itinerary is flexible and can be customized. You can add or remove destinations, extend days, or adjust timings.
              </p>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Pricing</h2>
              <p className="text-slate-600 mb-6">Vehicle options for 3-4 day tour (prices include vehicle, driver, fuel, tolls)</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-green-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Package</p>
                        <p className="text-3xl font-bold text-green-600">{vehicle.price}</p>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.perDay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Prices are for vehicle, driver, fuel, tolls, and parking. Accommodation and food not included.
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
                  <h3 className="font-bold text-slate-900 mb-2">How much does Mysore Coorg Wayanad tour package cost?</h3>
                  <p className="text-slate-700">Mysore Coorg Wayanad tour package starting from ₹16,500 for 3-4 days including vehicle, driver, and fuel. Accommodation and food are extra. Pricing varies based on vehicle type and group size.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">What is the best time to visit?</h3>
                  <p className="text-slate-700">October to March is ideal for pleasant weather. Monsoon (June-September) offers lush greenery but may have heavy rains. Summer (April-May) can be warm.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Is accommodation included?</h3>
                  <p className="text-slate-700">No, accommodation is not included. We can help arrange hotels and homestays at your preferred budget. Package includes vehicle, driver, and fuel only.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Can the itinerary be customized?</h3>
                  <p className="text-slate-700">Yes! This is a flexible multi-day tour. You can customize destinations, add extra days, or skip locations based on your preferences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book This Package</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible customization</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional drivers</span>
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
                className="block w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                WhatsApp: {BUSINESS_INFO.phone}
              </a>
              <Link
                href={ROUTES.BOOK_TAXI}
                className="mt-3 block w-full rounded-lg border-2 border-white px-6 py-3 text-center text-base font-semibold text-white hover:bg-emerald-800 transition-colors"
              >
                Book Online
              </Link>
            </div>

            {/* Related Tours */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Tours</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_TO_COORG} className="block p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Coorg</div>
                  <div className="text-sm text-slate-600">1 Day • Starting from ₹4,500</div>
                </Link>
                <Link href={ROUTES.MYSORE_TO_WAYANAD} className="block p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Wayanad</div>
                  <div className="text-sm text-slate-600">1-2 Days • Starting from ₹5,000</div>
                </Link>
                <Link href={ROUTES.MYSORE_OOTY_COORG} className="block p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Ooty Coorg</div>
                  <div className="text-sm text-slate-600">3-5 Days • Starting from ₹18,000</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
