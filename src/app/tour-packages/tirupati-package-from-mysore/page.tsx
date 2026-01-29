import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Tirupati Package from Mysore | Starting from ₹15,000 | 1-2 Days Temple Tour",
  description: "Book Tirupati package from Mysore starting from ₹15,000 for 1-2 days. Lord Venkateswara Temple darshan, professional drivers, AC vehicles, flexible timing. VIP darshan arrangements available.",
  keywords: ["tirupati package from mysore", "mysore to tirupati", "tirupati darshan", "balaji temple tour", "tirumala package"],
  alternates: { canonical: "/tirupati-package-from-mysore/" },
};

const tourPackage = createTourPackageSchema({
  name: "Tirupati Package from Mysore",
  description: "1-2 day pilgrimage package from Mysore to Tirupati covering Lord Venkateswara Temple darshan with comfortable travel arrangements",
  url: BUSINESS_INFO.url + "/tirupati-package-from-mysore/",
  image: BUSINESS_INFO.url + "/images/tours/Tirupati_Temple_Tour.jpg",
  offers: {
    price: "15000",
    priceCurrency: "INR"
  },
  duration: "P2D",
  itinerary: [
    { name: "Mysore to Tirupati", description: "450 km journey through scenic routes, early morning departure" },
    { name: "Temple Darshan", description: "Lord Venkateswara Temple visit with proper planning and timing" },
    { name: "Tirumala Sightseeing", description: "Optional visits to nearby temples and viewpoints" },
    { name: "Return Journey", description: "Comfortable drive back to Mysore with rest stops" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Tirupati package from Mysore cost?",
    answer: "Tirupati package from Mysore starting from ₹15,000 for 1-2 days including vehicle, driver, and fuel. Accommodation not included. Distance is 450 km one way, approximately 8-9 hours drive."
  },
  {
    question: "What is the best time for Tirupati darshan?",
    answer: "Early morning (4-6 AM) or late evening (8-10 PM) have shorter wait times. Weekdays are less crowded than weekends. Special entry darshan (₹300) or VIP darshan (₹500) available to save time."
  },
  {
    question: "Can you arrange darshan tickets?",
    answer: "Yes, we can guide you on booking darshan tickets online or help arrange special entry/VIP darshan tickets based on availability. Advance booking recommended for weekends and festivals."
  },
  {
    question: "Is accommodation included in the package?",
    answer: "No, accommodation is not included. We can help arrange rooms in Tirupati or Tirumala. Options range from TTD guesthouses (₹500-1500) to private hotels (₹1500-5000 per night)."
  },
]);

export default function TirupatiPackageFromMysorePage() {
  const highlights = [
    { day: "Day 1", title: "Mysore to Tirupati", desc: "Early morning 4 AM departure, breakfast stop at Kolar/Chittoor, reach Tirupati by afternoon, check-in, evening at Kapila Theertham or ISKCON temple" },
    { day: "Day 2", title: "Temple Darshan & Return", desc: "Early morning temple darshan (pre-booked tickets), visit Sri Padmavathi Temple, lunch, start return journey to Mysore" },
  ];

  const inclusions = [
    "AC vehicle for round trip (Sedan/SUV/Tempo)",
    "Professional experienced driver",
    "Driver accommodation and allowance",
    "Fuel for 900 km journey",
    "All tolls and parking fees",
    "GST and taxes"
  ];

  const exclusions = [
    "Hotel accommodation in Tirupati/Tirumala",
    "All meals and prasadam",
    "Darshan tickets (₹0-500 per person)",
    "Donations at temple",
    "Laddu prasadam purchase (₹50-100)",
    "Personal expenses"
  ];

  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      price: "₹12,500",
      perDay: "₹6,250/day"
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      price: "₹16,500",
      perDay: "₹8,250/day"
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      price: "₹24,000",
      perDay: "₹12,000/day"
    }
  ];

  const darshanOptions = [
    { type: "Free Darshan", time: "4-8 hours wait", cost: "Free", desc: "Standard queue, longest wait" },
    { type: "Special Entry", time: "2-3 hours wait", cost: "₹300", desc: "Faster queue, recommended for most" },
    { type: "₹500 Seva", time: "1-2 hours wait", cost: "₹500", desc: "Quick darshan with good view" },
    { type: "Divya Darshan", time: "30-60 min wait", cost: "₹1000+", desc: "VIP darshan, shortest wait" },
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Tirupati Package", href: ROUTES.TIRUPATI_PACKAGE }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-red-50 to-orange-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Tirupati Package from Mysore
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Experience divine blessings at Lord Venkateswara Temple, Tirumala. Comfortable 1-2 day pilgrimage package with professional drivers and flexible darshan timing arrangements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">1-2 Days</div>
              <div className="text-sm font-semibold text-slate-600">Pilgrimage Tour</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">450 km</div>
              <div className="text-sm font-semibold text-slate-600">One Way Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">Starting from ₹15,000</div>
              <div className="text-sm font-semibold text-slate-600">Package Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm font-semibold text-slate-600">Available</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              WhatsApp for Booking
            </a>
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Book Temple Package
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Tirupati Pilgrimage</h2>
              <p className="text-slate-700 mb-4">
                Tirupati, home to the Sri Venkateswara Temple (also known as Tirumala Temple or Balaji Temple), is one of the world's most visited religious sites, attracting 50,000-100,000 pilgrims daily. Located 450 km from Mysore in Andhra Pradesh's Chittoor district, this sacred destination can be comfortably covered in a 1-2 day trip.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>The Temple</strong> is situated atop Tirumala hills at 853 meters elevation, accessed via scenic ghat roads with numerous hairpin bends. The presiding deity Lord Venkateswara (Balaji, Srinivasa) is believed to be a form of Vishnu who descended to earth to save humanity. The temple's Dravidian architecture, gopurams, and spiritual atmosphere create an unforgettable experience.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Darshan Planning</strong> is crucial as wait times can range from 2-12 hours depending on the day and type of ticket. We recommend booking special entry darshan (₹300) or Divya Darshan tickets online in advance. Early morning (4-6 AM) or late evening (8-10 PM) typically have shorter queues.
              </p>
              <p className="text-slate-700">
                <strong>Other Attractions</strong> include Sri Padmavathi Temple in Tiruchanur (consort of Lord Venkateswara), Kapila Theertham waterfall temple, ISKCON temple, and Sri Govindarajaswami Temple. The famous Tirupati Laddu prasadam is a must-try, available at temple counters.
              </p>
            </div>

            {/* Darshan Options */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Darshan Options & Wait Times</h2>
              <div className="space-y-4">
                {darshanOptions.map((option, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-4 hover:border-red-200 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{option.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{option.desc}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">{option.cost}</p>
                        <p className="text-sm text-slate-600">{option.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Wait times are approximate and vary by day/season. Advance online booking recommended for all paid darshans.
              </p>
            </div>

            {/* Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Suggested 2-Day Itinerary</h2>
              <div className="space-y-6">
                {highlights.map((day, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-red-200 last:border-transparent last:pb-0">
                    <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-red-600"></div>
                    <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-2">{day.day}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h3>
                    <p className="text-slate-700">{day.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                * Can be completed in 1 day (same day return) with early morning start. 2 days recommended for comfortable darshan experience.
              </p>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Package Pricing</h2>
              <p className="text-slate-600 mb-6">Vehicle options for 2-day package (includes round trip 900 km, driver, fuel, tolls)</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-red-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Package</p>
                        <p className="text-3xl font-bold text-red-600">{vehicle.price}</p>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.perDay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Prices for 2-day package. Same day return possible with slight reduction. Accommodation ₹500-5,000 per night.
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
                  <h3 className="font-bold text-slate-900 mb-2">How much does Tirupati package from Mysore cost?</h3>
                  <p className="text-slate-700">Tirupati package from Mysore starting from ₹15,000 for 1-2 days including vehicle, driver, and fuel. Accommodation not included. Distance is 450 km one way, approximately 8-9 hours drive.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">What is the best time for darshan?</h3>
                  <p className="text-slate-700">Early morning (4-6 AM) or late evening (8-10 PM) have shorter wait times. Weekdays are less crowded than weekends. Special entry darshan (₹300) or VIP darshan (₹500) available to save time.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Can you arrange darshan tickets?</h3>
                  <p className="text-slate-700">Yes, we can guide you on booking darshan tickets online or help arrange special entry/VIP darshan tickets based on availability. Advance booking recommended for weekends and festivals.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Is accommodation included?</h3>
                  <p className="text-slate-700">No, accommodation is not included. We can help arrange rooms in Tirupati or Tirumala. Options range from TTD guesthouses (₹500-1500) to private hotels (₹1500-5000 per night).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book Temple Tour</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Darshan assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experienced drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible timing</span>
                </div>
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-red-700 hover:bg-red-50 transition-colors"
              >
                WhatsApp: {BUSINESS_INFO.phone}
              </a>
              <Link
                href={ROUTES.BOOK_TAXI}
                className="mt-3 block w-full rounded-lg border-2 border-white px-6 py-3 text-center text-base font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Book Online
              </Link>
            </div>

            {/* Tips */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Important Tips</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Book darshan tickets online 3-7 days in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Carry photo ID proof for all pilgrims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Traditional dress code recommended (dhoti/saree)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Mobile phones not allowed inside temple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Buy Laddu prasadam from official counters only</span>
                </li>
              </ul>
            </div>

            {/* Related */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Other Packages</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_TO_BANGALORE} className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Bangalore</div>
                  <div className="text-sm text-slate-600">Drop/Transfer • Starting from ₹2,800</div>
                </Link>
                <Link href={ROUTES.MYSORE_COORG_WAYANAD} className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore Coorg Wayanad</div>
                  <div className="text-sm text-slate-600">3-4 Days • Starting from ₹16,500</div>
                </Link>
                <Link href={ROUTES.CUSTOM_PACKAGES} className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="font-semibold text-slate-900">Custom Packages</div>
                  <div className="text-sm text-slate-600">Build Your Tour</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
