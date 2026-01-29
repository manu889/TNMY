import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore to Coorg Taxi | Starting from ₹4,500 | One Way & Round Trip Cab Booking",
  description: "Book Mysore to Coorg cab starting from ₹4,500. 120 km scenic drive through coffee plantations. Visit Abbey Falls, Raja's Seat, Dubare. Professional drivers. 24/7 available.",
  keywords: ["mysore to coorg taxi", "mysore to coorg cab", "coorg taxi from mysore", "mysore coorg car rental"],
  alternates: {
    canonical: "/mysore-to-coorg/",
  },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore to Coorg Taxi Service",
  description: "Scenic taxi journey from Mysore to Coorg covering 120 km through coffee plantations and hills",
  url: BUSINESS_INFO.url + "/mysore-to-coorg/",
  image: BUSINESS_INFO.url + "/images/tours/Coorg_Tour_Package.jpg",
  offers: {
    price: "4500",
    priceCurrency: "INR"
  },
  duration: "P1D",
  itinerary: [
    { name: "Abbey Falls", description: "Stunning waterfall amidst coffee plantations" },
    { name: "Raja's Seat", description: "Sunset point with panoramic valley views" },
    { name: "Dubare Elephant Camp", description: "Interact with elephants and river activities" },
    { name: "Coffee Plantations", description: "Tour through aromatic coffee estates" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Mysore to Coorg taxi cost?",
    answer: "Mysore to Coorg taxi starting from ₹4,500 for sedan (one way). Round trip packages are available. SUV and Tempo Traveller options also available at competitive rates."
  },
  {
    question: "How far is Coorg from Mysore?",
    answer: "Coorg is approximately 120 km from Mysore. The journey takes around 3 hours by cab through scenic routes."
  },
  {
    question: "What are the must-visit places in Coorg?",
    answer: "Top attractions include Abbey Falls, Raja's Seat, Dubare Elephant Camp, Omkareshwara Temple, Talacauvery, and coffee plantations."
  },
  {
    question: "Do you provide round trip services?",
    answer: "Yes, we provide both one-way and round trip cab services from Mysore to Coorg with flexible packages."
  },
]);

export default function MysoreToCoorgPage() {
  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Mysore to Coorg", href: ROUTES.MYSORE_TO_COORG }]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore to Coorg Taxi Service
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Experience the Scotland of India with our comfortable cab service
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">120 km</div>
              <div className="text-sm font-semibold text-slate-600">Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹4,500</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm font-semibold text-slate-600">Available</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Coorg</h2>
              <p className="text-slate-700 mb-4">
                Coorg, also known as Kodagu, is a picturesque hill station in Karnataka famous for its coffee plantations, 
                misty hills, and lush greenery. Located 120 km from Mysore, Coorg is often called the "Scotland of India" 
                for its breathtaking landscapes and pleasant weather throughout the year.
              </p>
              <p className="text-slate-700 mb-4">
                Our Mysore to Coorg taxi service offers comfortable and affordable transportation to explore this beautiful 
                destination. With professional drivers who know the best routes and attractions, your journey will be safe, 
                comfortable, and memorable.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Detailed Day Itinerary</h2>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">06:00 AM - 07:00 AM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Departure from Mysore</h3>
                  <p className="text-slate-700">
                    Pickup from your location in Mysore (hotel, home, railway station). Begin your scenic journey to Coorg through NH275, 
                    passing through Hunsur and Periyapatna. Enjoy breakfast enroute at local restaurants (on your own).
                  </p>
                </div>

                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">09:30 AM - 10:30 AM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Abbey Falls Visit</h3>
                  <p className="text-slate-700">
                    First stop at the breathtaking Abbey Falls cascading from 70 feet height. Walk through coffee plantations 
                    to reach the falls viewpoint. Perfect spot for photography and enjoying the natural beauty. 
                    Spend about 1 hour exploring the area.
                  </p>
                </div>

                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">11:00 AM - 12:00 PM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Raja's Seat & Gardens</h3>
                  <p className="text-slate-700">
                    Visit the famous Raja's Seat viewpoint where Kodagu kings enjoyed sunsets. Beautiful garden with seasonal 
                    flowers, musical fountain, and panoramic views of the misty Coorg valley. Walk through the well-maintained 
                    garden and enjoy refreshments at the small cafe.
                  </p>
                </div>

                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">12:30 PM - 01:30 PM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Lunch Break</h3>
                  <p className="text-slate-700">
                    Enjoy authentic Coorg cuisine at a recommended local restaurant. Try specialties like Pandi Curry (pork curry), 
                    Kadambuttu (rice dumplings), and Bamboo Shoot Curry. Our driver will guide you to the best restaurants.
                  </p>
                </div>

                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">02:00 PM - 03:30 PM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Coffee Plantation Tour</h3>
                  <p className="text-slate-700">
                    Guided tour through aromatic coffee estates. Learn about coffee cultivation, processing, and roasting. 
                    Walk through pepper vines, cardamom plantations, and vanilla gardens. Purchase fresh coffee and spices 
                    at estate prices.
                  </p>
                </div>

                <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">04:00 PM - 05:00 PM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Omkareshwara Temple</h3>
                  <p className="text-slate-700">
                    Visit the 19th-century Omkareshwara Temple featuring unique blend of Islamic and Gothic architecture. 
                    Peaceful surroundings with a large pond. Learn about the interesting history and legends.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">05:30 PM - 08:30 PM</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Return to Mysore</h3>
                  <p className="text-slate-700">
                    Begin return journey to Mysore. Drop at your preferred location (hotel, home, railway station). 
                    Reach Mysore by 8:30 PM approximately, depending on traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* Tour Highlights */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 mb-6 ring-1 ring-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "✨ Abbey Falls - 70 feet cascading waterfall",
                  "🌄 Raja's Seat - Panoramic valley views",
                  "☕ Coffee Plantation Tour with tasting",
                  "🛕 Omkareshwara Temple architecture",
                  "🏞️ Scenic drive through coffee estates",
                  "📸 Multiple photo opportunities",
                  "🍽️ Authentic Coorg cuisine experience",
                  "🚗 Comfortable AC cab with expert driver"
                ].map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="text-lg">{highlight.split(" ")[0]}</div>
                    <div className="text-slate-700 font-medium">{highlight.substring(highlight.indexOf(" ") + 1)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included/Excluded */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included & Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>AC Cab for entire journey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Professional driver charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Fuel & toll charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Driver allowance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Parking fees at attractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>All applicable taxes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Excluded
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Entry fees to attractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Food & beverages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Guide charges (if required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Personal expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Adventure activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Accommodation (for multi-day)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing & Vehicle Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Vehicle Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Capacity</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">One Way</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Round Trip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-slate-700">Sedan (Swift Dzire/Etios)</td>
                      <td className="px-4 py-3 text-slate-700">4 Seats</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹4,500</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹7,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-700">SUV (Innova/Ertiga)</td>
                      <td className="px-4 py-3 text-slate-700">6-7 Seats</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹5,500</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹9,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-700">Tempo Traveller</td>
                      <td className="px-4 py-3 text-slate-700">12-17 Seats</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹8,500</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹14,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                *Prices include driver charges, fuel, and toll. No hidden charges.
              </p>
            </div>

            {/* Enquiry Form */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 mb-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Ready to Book Your Coorg Tour?</h2>
              <p className="text-slate-300 text-center mb-6">Get instant quote or call us now for immediate booking</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quick Contact */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact Us Directly</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <div className="text-sm text-slate-300">Call Now</div>
                        <div className="font-bold">{BUSINESS_INFO.phoneDisplay}</div>
                      </div>
                    </a>
                    <a
                      href={BUSINESS_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <div>
                        <div className="text-sm">WhatsApp Chat</div>
                        <div className="font-bold">{BUSINESS_INFO.phoneDisplay}</div>
                      </div>
                    </a>
                    <Link
                      href={ROUTES.BOOK_TAXI}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-sm text-slate-300">Book Online</div>
                        <div className="font-bold">Instant Confirmation</div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Quick Info */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Why Book With Us?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Instant Booking Confirmation</div>
                        <div className="text-slate-300">Get confirmed booking within minutes via WhatsApp or SMS</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Flexible Cancellation</div>
                        <div className="text-slate-300">Free cancellation up to 24 hours before travel date</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Best Price Guarantee</div>
                        <div className="text-slate-300">Competitive rates with no hidden charges or extra fees</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">24/7 Customer Support</div>
                        <div className="text-slate-300">Round-the-clock assistance for any queries or emergencies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h2>
              <div className="space-y-4">
                {faqs.mainEntity.map((faq: any, i: number) => (
                  <div key={i} className="border-b border-slate-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                    <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Tours */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore More Karnataka Tours</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Mysore to Ooty",
                    distance: "125 km",
                    price: "₹4,800",
                    highlights: "Tea Gardens, Botanical Garden, Ooty Lake",
                    href: ROUTES.MYSORE_TO_OOTY
                  },
                  {
                    name: "Mysore to Wayanad",
                    distance: "140 km",
                    price: "₹5,200",
                    highlights: "Edakkal Caves, Soochipara Falls, Wildlife",
                    href: ROUTES.MYSORE_TO_WAYANAD
                  },
                  {
                    name: "Mysore One Day Tour",
                    distance: "80 km",
                    price: "₹2,500",
                    highlights: "Palace, Chamundi Hills, Brindavan Gardens",
                    href: ROUTES.MYSORE_ONE_DAY_TOUR
                  }
                ].map((tour, i) => (
                  <Link
                    key={i}
                    href={tour.href}
                    className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2">{tour.name}</h3>
                    <div className="space-y-1 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{tour.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold text-slate-900">{tour.price}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">{tour.highlights}</p>
                    <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href={ROUTES.TOUR_PACKAGES}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
                >
                  View All Tour Packages
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Book Your Coorg Trip</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Call now
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  WhatsApp
                </a>
                <Link
                  href={ROUTES.BOOK_TAXI}
                  className="block w-full bg-white hover:bg-slate-50 text-slate-900 text-center py-3 px-4 rounded-lg font-bold transition-colors ring-1 ring-slate-900/10"
                >
                  Book online
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-slate-900 mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Professional drivers with local knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Well-maintained, clean AC vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Transparent pricing, no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Flexible pickup & drop locations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
