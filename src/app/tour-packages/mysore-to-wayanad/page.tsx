import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore to Wayanad Taxi | Starting from ₹5,000 | Kerala Hill Station Cab Booking",
  description: "Book Mysore to Wayanad taxi starting from ₹5,000. 130 km scenic drive to Kerala's green paradise. Visit waterfalls, wildlife, tea estates. 24/7 service.",
  keywords: ["mysore to wayanad taxi", "mysore to wayanad cab", "wayanad taxi from mysore"],
  alternates: { canonical: "/mysore-to-wayanad/" },
};

export default function MysoreToWayanadPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Mysore to Wayanad", href: ROUTES.MYSORE_TO_WAYANAD }]} />
        
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore to Wayanad Taxi Service
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Explore Kerala's green paradise with comfortable cab service
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">130 km</div>
              <div className="text-sm font-semibold text-slate-600">Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3.5 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹5,000</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm font-semibold text-slate-600">Available</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Wayanad</h2>
              <p className="text-slate-700 mb-4">
                Wayanad, a picturesque hill district in Kerala, is known for its misty mountains, lush forests, 
                tea and coffee plantations, and rich wildlife. Located 130 km from Mysore, Wayanad offers a perfect 
                blend of adventure and tranquility with its waterfalls, trekking trails, and wildlife sanctuaries.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Attractions</h2>
              <div className="space-y-4">
                {[
                  { name: "Edakkal Caves", desc: "Ancient rock carvings dating back 6000 years" },
                  { name: "Soochipara Falls", desc: "Three-tier waterfall perfect for trekking" },
                  { name: "Banasura Dam", desc: "Largest earth dam in India with boating" },
                  { name: "Wildlife Sanctuary", desc: "Spot elephants, deer, and exotic birds" },
                  { name: "Chembra Peak", desc: "Highest peak with heart-shaped lake" },
                ].map((place, i) => (
                  <div key={i} className="border-l-2 border-slate-200 pl-4">
                    <h3 className="font-bold text-lg text-slate-900">{place.name}</h3>
                    <p className="text-slate-600">{place.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Vehicle</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">One Way</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Round Trip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-slate-700">Sedan (4 Seater)</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹5,000</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹8,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-700">SUV (6-7 Seater)</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹6,000</td>
                      <td className="px-4 py-3 font-bold text-slate-900">₹10,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Wayanad Cab</h3>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
