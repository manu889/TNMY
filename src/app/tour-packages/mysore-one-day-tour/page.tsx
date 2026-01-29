import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore One Day Tour Package | Local Sightseeing | Palace, Zoo, Gardens",
  description: "Book Mysore one day tour starting from ₹1,500. Visit Mysore Palace, Chamundi Hills, Zoo, Brindavan Gardens. Professional guide & driver. AC cabs available.",
  keywords: ["mysore one day tour", "mysore local sightseeing", "mysore city tour", "mysore tourist places"],
  alternates: { canonical: "/mysore-one-day-tour/" },
};

export default function MysoreOneDayTourPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Mysore One Day Tour", href: ROUTES.MYSORE_ONE_DAY_TOUR }]} />
        
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore One Day Tour Package
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Explore the Cultural Capital of Karnataka in a single day
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">8-10 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">7+ Places</div>
              <div className="text-sm font-semibold text-slate-600">Attractions</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹1,500</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">AC Cab</div>
              <div className="text-sm font-semibold text-slate-600">Comfort</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Tour Itinerary</h2>
              <div className="space-y-4">
                {[
                  { time: "8:00 AM", place: "Pickup from Hotel", desc: "Start your Mysore exploration" },
                  { time: "8:30 AM", place: "Mysore Palace", desc: "Indo-Saracenic architecture marvel, 1.5 hours" },
                  { time: "10:30 AM", place: "Chamundi Hills Temple", desc: "1000 steps climb or drive, panoramic views" },
                  { time: "12:00 PM", place: "St. Philomena's Church", desc: "Neo-Gothic architecture, 30 mins" },
                  { time: "1:00 PM", place: "Lunch Break", desc: "Local restaurant (own expense)" },
                  { time: "2:30 PM", place: "Mysore Zoo", desc: "One of India's oldest zoos, 1.5 hours" },
                  { time: "4:30 PM", place: "Brindavan Gardens", desc: "Musical fountain (evening), 2 hours" },
                  { time: "7:00 PM", place: "Drop at Hotel", desc: "End of tour" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-l-2 border-slate-200 pl-4">
                    <div className="font-bold text-slate-900 min-w-[80px]">{item.time}</div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{item.place}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing Details</h2>
              <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Vehicle Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Capacity</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Sedan (AC)</td>
                    <td className="px-4 py-3 text-slate-700">4 Passengers</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹2,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">SUV (AC)</td>
                    <td className="px-4 py-3 text-slate-700">6-7 Passengers</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹2,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Tempo Traveller</td>
                    <td className="px-4 py-3 text-slate-700">12-14 Passengers</td>
                    <td className="px-4 py-3 font-bold text-slate-900">₹4,000</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                *Price includes AC cab, driver charges, fuel. Entry tickets not included.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h2>
              <ul className="space-y-2">
                {[
                  "AC cab for entire tour",
                  "Professional driver",
                  "Fuel charges",
                  "Parking fees",
                  "Driver allowance",
                  "Pick-up and drop from hotel/railway station",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold text-slate-900 mt-6 mb-3">Not Included</h3>
              <ul className="space-y-2">
                {[
                  "Entry tickets to monuments",
                  "Lunch and meals",
                  "Guide charges (available on request)",
                  "Personal expenses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Book Mysore Tour</h3>
              <div className="space-y-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors">
                  Call now
                </a>
                <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors">
                  WhatsApp
                </a>
                <Link href={ROUTES.BOOK_TAXI} className="block w-full bg-white hover:bg-slate-50 text-slate-900 text-center py-3 px-4 rounded-lg font-bold transition-colors ring-1 ring-slate-900/10">
                  Book online
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-slate-900 mb-3">Important Info</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Palace closed on Sundays & public holidays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Carry ID proof for Zoo entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Camera charges extra at palace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Musical fountain at 7 PM</span>
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
