import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { createProductSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Bus Rental in Mysore | Large Group Travel",
  description: "Bus rental options in Mysore for large group tours, school trips and corporate travel.",
  alternates: { canonical: "/fleet/bus/" },
};

const busProductSchema = createProductSchema({
  name: "Bus Rental Service in Mysore",
  description: "Large 30-45 seater bus rental in Mysore for corporate events, school trips, wedding guests, and mass transportation. AC and non-AC options available.",
  category: "Vehicle Rental Service",
  brand: "MM Mysore Travels",
  offers: {
    price: 35,
    priceCurrency: "INR",
    description: "Per kilometer outstation rate",
  },
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 349,
  },
  features: [
    "30-45 Seater Capacity",
    "AC and Non-AC Options",
    "Push Back Seats (AC Bus)",
    "Entertainment System",
    "Large Luggage Compartment",
    "Professional Driver",
    "Most Economical for Large Groups",
    "GPS Tracking and Insurance",
  ],
});

export default function FleetBusPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={busProductSchema} />
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Bus", href: ROUTES.FLEET_BUS }]} />
      
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-orange-600 to-red-700 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Bus Rental in Mysore</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Large 30-45 seater buses for corporate events, school trips, wedding guests, and mass transportation. Spacious, comfortable, and economical for big groups.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">30-45 Seater</div>
            <div className="text-sm text-white/90 mt-1">Capacity</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">AC/Non-AC</div>
            <div className="text-sm text-white/90 mt-1">Options Available</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹35/km</div>
            <div className="text-sm text-white/90 mt-1">Outstation Rate</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹8,000</div>
            <div className="text-sm text-white/90 mt-1">Local Package</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Bus Types Available</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Choose from different bus configurations based on your group size, budget, and comfort requirements for travels around Karnataka.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">AC Tourist Bus (35-45 Seater)</h3>
            <p className="mt-2 text-slate-600">Premium air-conditioned buses with comfortable push-back seats, entertainment systems, and spacious interiors. Ideal for outstation tours to hill stations, pilgrimages, and corporate events. Features include individual reading lights, overhead storage, and large windows for scenic views.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">AC Comfort</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Push Back Seats</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Music System</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Large Luggage</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">Non-AC Standard Bus (40-50 Seater)</h3>
            <p className="mt-2 text-slate-600">Budget-friendly option for local events, school trips, and short-distance group travel. Well-maintained with comfortable seating and good ventilation. Cost-effective solution for large groups where air conditioning is not essential. Suitable for winter months and cooler destinations.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Budget Friendly</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">High Capacity</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Good Ventilation</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-semibold">Reliable</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose Bus Rental Service</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Maximum Capacity</h3>
              <p className="mt-1 text-sm text-slate-600">Transport 30-45 people in single vehicle. Most economical per-person cost for large groups. Eliminates coordination hassles of multiple vehicles.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Cost Efficient</h3>
              <p className="mt-1 text-sm text-slate-600">Lowest per-person rate among all vehicle types. Significant savings compared to booking multiple cars or tempo travellers for same group size.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">Group Unity</h3>
              <p className="mt-1 text-sm text-slate-600">Entire group travels together for better bonding. Coordinate stops, meals, and activities easily. Perfect for team building and social events.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Professional Drivers</h3>
              <p className="mt-1 text-sm text-slate-600">Experienced drivers with commercial vehicle licenses. Specially trained for handling large buses on highways and city roads safely.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">Safety Standards</h3>
              <p className="mt-1 text-sm text-slate-600">Regular maintenance and safety inspections. First aid kits, fire extinguishers, and emergency exits. Comprehensive insurance for passenger protection.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">Luggage Capacity</h3>
              <p className="mt-1 text-sm text-slate-600">Massive luggage compartments underneath. Can accommodate bags for entire group on multi-day tours without space constraints.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ideal For</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-slate-900">Corporate Events</h3>
            <p className="mt-2 text-slate-600">Company annual days, team outings, conferences, and training programs. Transport entire department or multiple teams together with professional service.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">🏫</div>
            <h3 className="text-xl font-bold text-slate-900">School/College Trips</h3>
            <p className="mt-2 text-slate-600">Educational tours, industrial visits, sports events, and cultural competitions. Safe and supervised travel for student groups with responsible drivers.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center text-2xl mb-4">💒</div>
            <h3 className="text-xl font-bold text-slate-900">Wedding Transportation</h3>
            <p className="mt-2 text-slate-600">Transport wedding guests from hotels to venues, mandap to reception, airport pickups. Coordinate multiple trips for baraat and guest groups efficiently.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">⛪</div>
            <h3 className="text-xl font-bold text-slate-900">Religious Pilgrimages</h3>
            <p className="mt-2 text-slate-600">Temple tours, Tirupati darshan, Dharmasthala visits, and Kerala temple circuits. Comfortable travel for senior citizens and large family groups on spiritual journeys.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-slate-900">Community Events</h3>
            <p className="mt-2 text-slate-600">Association trips, club outings, residential society picnics, and social gatherings. Transport neighborhood groups for day trips and celebrations.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-2xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-slate-900">Multi-Day Tours</h3>
            <p className="mt-2 text-slate-600">Extended tour packages covering multiple destinations. Coorg-Wayanad circuits, Kerala tours, Goa trips, and customized multi-city itineraries for large groups.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-bold text-slate-900">Popular Routes with Bus Rental</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Mysore Local Sightseeing:</span>
              <span className="text-slate-600"> Full day covering Palace, Zoo, Gardens - ideal for school trips</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Tirupati Darshan:</span>
              <span className="text-slate-600"> 500km overnight journey for large pilgrimage groups</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Goa Beach Trip:</span>
              <span className="text-slate-600"> 560km multi-day tour for college groups and corporate teams</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Kerala Temple Circuit:</span>
              <span className="text-slate-600"> 4-5 day tours covering Guruvayoor, Sabarimala, and other temples</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Coorg-Wayanad Package:</span>
              <span className="text-slate-600"> 3-4 day hill station tour for corporate outings and associations</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-orange-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Wedding Guest Shuttles:</span>
              <span className="text-slate-600"> Multiple trips between hotels, venues, and airports</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
        <h2 className="text-2xl font-bold">Bus Booking Guidelines</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">📅 Advance Booking Required</h3>
            <p className="text-white/90 text-sm">Book buses at least 7-10 days in advance, especially during wedding season (Nov-Feb) and summer vacation months. Peak times require earlier booking.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">💰 Transparent Pricing</h3>
            <p className="text-white/90 text-sm">All-inclusive rates covering driver allowance, tolls, parking, and fuel. No hidden charges. Pay extra only for accommodation and passenger tickets at attractions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">🕒 Driver Rest Rules</h3>
            <p className="text-white/90 text-sm">Drivers get adequate rest breaks as per regulations. For overnight journeys or multi-day tours, driver accommodation included in package rate.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">📦 Luggage Management</h3>
            <p className="text-white/90 text-sm">Large undercarriage storage for suitcases. Label all bags for easy identification. Driver supervises loading/unloading at each stop for security.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Bus Rental in Mysore</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Perfect for large group transportation with maximum comfort and economy. Get instant quotes for your bus rental requirements in Mysore.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book a bus for group travel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
}
