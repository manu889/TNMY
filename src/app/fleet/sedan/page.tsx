import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { createProductSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Sedan Taxi in Mysore | 4 Seater",
  description: "Sedan taxi options in Mysore for local, outstation and airport transfers.",
  alternates: { canonical: "/fleet/sedan/" },
};

const sedanProductSchema = createProductSchema({
  name: "Sedan Taxi Service in Mysore",
  description: "Comfortable 4-seater sedan taxi service in Mysore. Choose from Dzire, Etios, or similar models for local trips, outstation travel, and airport transfers.",
  image: "/images/vehicles/Dzire.png",
  category: "Vehicle Rental Service",
  brand: "MM Mysore Travels",
  offers: {
    price: "13",
    priceCurrency: "INR",
  },
  features: [
    "4 Seater Capacity",
    "Air Conditioning",
    "Professional Driver",
    "Fuel Efficient (20+ kmpl)",
    "Spacious Boot",
    "Airport Transfer Service",
    "Outstation Travel",
    "Local Sightseeing Packages",
  ],
});

export default function FleetSedanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={sedanProductSchema} />
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Sedan", href: ROUTES.FLEET_SEDAN }]} />
      
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Sedan Taxi in Mysore</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Comfortable 4-seater sedans perfect for couples, business travelers, and small families. Choose from Dzire, Etios, or similar models for your Mysore travels.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">4 Seater</div>
            <div className="text-sm text-white/90 mt-1">Capacity</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">AC</div>
            <div className="text-sm text-white/90 mt-1">Climate Control</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹13/km</div>
            <div className="text-sm text-white/90 mt-1">Outstation Rate</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹1,800</div>
            <div className="text-sm text-white/90 mt-1">Local Package</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Available Sedan Models</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Our sedan fleet includes well-maintained vehicles from trusted brands, ensuring comfortable and safe travel for all your journeys.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">Maruti Dzire</h3>
            <p className="mt-2 text-slate-600">Most popular sedan choice with excellent fuel efficiency, spacious interiors, and smooth ride quality. Perfect for city travel and highway journeys. Features include comfortable seating, ample legroom, and air conditioning for all seasons.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">1.2L Petrol</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">22+ kmpl</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">Automatic Available</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">Toyota Etios</h3>
            <p className="mt-2 text-slate-600">Budget-friendly sedan with reliable performance and spacious cabin. Known for low maintenance costs and durability. Ideal for long-distance outstation trips with comfortable suspension and powerful engine for ghat road driving.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">1.5L Petrol</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">17+ kmpl</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">Spacious Boot</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose Sedan Taxi Service</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Cost Effective</h3>
              <p className="mt-1 text-sm text-slate-600">Most economical option for taxi services in Mysore. Lower per-kilometer rates compared to SUVs while maintaining comfort and safety standards.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Fuel Efficient</h3>
              <p className="mt-1 text-sm text-slate-600">Excellent mileage means lower trip costs. Our sedans deliver 20+ kmpl, making them perfect for long outstation journeys to Coorg, Ooty, or Wayanad.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">Easy Parking</h3>
              <p className="mt-1 text-sm text-slate-600">Compact size makes parking hassle-free at tourist spots, restaurants, and city centers. Navigate narrow streets and crowded areas with ease.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Professional Drivers</h3>
              <p className="mt-1 text-sm text-slate-600">Experienced chauffeurs with clean driving records. All drivers are verified, uniformed, and trained in customer service and safe driving practices.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">AC Comfort</h3>
              <p className="mt-1 text-sm text-slate-600">All sedans come with fully functional air conditioning. Stay comfortable in any weather, whether it's hot summer days or humid monsoon season.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">Luggage Space</h3>
              <p className="mt-1 text-sm text-slate-600">Adequate boot space for 2-3 large suitcases plus cabin bags. Perfect for airport transfers and multi-day tour packages with all your belongings.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ideal For</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">✈️</div>
            <h3 className="text-xl font-bold text-slate-900">Airport Transfers</h3>
            <p className="mt-2 text-slate-600">Comfortable rides to/from Bangalore airport. Fixed pricing with no surge charges. On-time pickups with flight tracking for arrivals.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-slate-900">Business Travel</h3>
            <p className="mt-2 text-slate-600">Professional service for corporate clients. Punctual pickups for meetings, conferences, and client visits. GST invoices available.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-slate-900">Couple Travel</h3>
            <p className="mt-2 text-slate-600">Perfect for romantic getaways to hill stations. Privacy, comfort, and flexibility to stop at scenic viewpoints along the way.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-slate-900">Local Sightseeing</h3>
            <p className="mt-2 text-slate-600">Half-day or full-day Mysore city tours. Visit Palace, Chamundi Hills, Brindavan Gardens, and other attractions in comfort.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-2xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-slate-900">Outstation Trips</h3>
            <p className="mt-2 text-slate-600">Single or multi-day journeys to Coorg, Ooty, Wayanad, Bangalore. Cost-effective rates with experienced drivers who know the routes.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-2xl mb-4">👨‍👩‍👦</div>
            <h3 className="text-xl font-bold text-slate-900">Small Families</h3>
            <p className="mt-2 text-slate-600">Parents with 1-2 children travel comfortably. Adequate space for child seats if required. Budget-friendly for family outings.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Your Sedan Taxi in Mysore</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Get instant quotes for local trips, outstation travel, or airport transfers. Our sedan taxi service in Mysore offers transparent pricing and reliable service.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book a sedan taxi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
}
