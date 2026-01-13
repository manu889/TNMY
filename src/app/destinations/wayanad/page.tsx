import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Wayanad Travel Guide | Waterfalls, Wildlife & Taxi from Mysore",
  description: "Plan your Wayanad trip and book Mysore to Wayanad taxi with transparent pricing.",
  alternates: { canonical: "/destinations/wayanad/" },
};

export default function DestinationWayanadPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Wayanad", href: ROUTES.DEST_WAYANAD }]}
      />

      {/* Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-slate-50 p-8 md:p-12 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore to Wayanad Taxi Service</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Experience Kerala's pristine hill station with our comfortable Mysore to Wayanad taxi service. Book professional drivers, transparent pricing, and enjoy scenic 140 km journey through Western Ghats.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link 
            href={ROUTES.MYSORE_TO_WAYANAD} 
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Book Wayanad Taxi Now
          </Link>
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Get Instant Quote
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Distance</div>
            <div className="text-slate-600">140 km from Mysore</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Travel Time</div>
            <div className="text-slate-600">3.5 - 4 hours</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Starting Fare</div>
            <div className="text-slate-600">₹5,800 onwards</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Best Time</div>
            <div className="text-slate-600">Oct to May</div>
          </div>
        </div>
      </div>

      {/* Top Attractions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Top Tourist Places in Wayanad</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Edakkal Caves", desc: "Ancient petroglyphs dating back to 6000 BC, offering historical insights and panoramic valley views." },
            { name: "Soochipara Falls", desc: "Three-tiered waterfall cascading from 200m height, perfect for swimming and rock climbing adventures." },
            { name: "Banasura Sagar Dam", desc: "India's largest earthen dam with scenic boat rides amidst lush green mountains and islands." },
            { name: "Chembra Peak", desc: "Highest peak in Wayanad at 2,100m with heart-shaped lake trek and breathtaking Western Ghats views." },
            { name: "Pookode Lake", desc: "Freshwater lake surrounded by evergreen forests, ideal for boating and nature walks." },
            { name: "Wayanad Wildlife Sanctuary", desc: "Home to elephants, tigers, leopards with jeep safaris through dense forests and bamboo groves." }
          ].map((place) => (
            <div key={place.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{place.name}</h3>
              <p className="text-slate-600">{place.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="mb-12 bg-blue-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Book Mysore to Wayanad Taxi with Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Experienced Drivers", desc: "Professional drivers familiar with Mysore-Wayanad hill routes and local attractions" },
            { title: "Transparent Pricing", desc: "No hidden charges. Clear fare breakdown before booking with flexible payment options" },
            { title: "Well-Maintained Vehicles", desc: "Clean, comfortable sedans and SUVs with AC, music system and safety features" },
            { title: "24/7 Availability", desc: "Round-the-clock taxi service from Mysore to Wayanad for your convenience" },
            { title: "Flexible Packages", desc: "One-way, round trip, and multi-day tour packages customized to your schedule" },
            { title: "Local Expertise", desc: "Drivers provide insights on best viewpoints, food stops, and lesser-known attractions" }
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Wayanad Travel Guide from Mysore</h2>
        <div className="prose prose-slate max-w-none bg-white rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Best Time to Visit Wayanad</h3>
          <p className="text-slate-700 mb-4">
            October to May offers pleasant weather (15-25°C) ideal for sightseeing and trekking. Monsoon (June-September) brings heavy rains and lush greenery but limited outdoor activities. Winter months are perfect for Mysore to Wayanad taxi trips.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Route & Travel Time</h3>
          <p className="text-slate-700 mb-4">
            The 140 km journey from Mysore to Wayanad takes approximately 3.5-4 hours via NH766. Route passes through Nanjangud, Gundlupet, and enters Kerala via Muthanga. Scenic highway with coffee estates, spice plantations and mountain views.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Things to Do in Wayanad</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
            <li>Trek to Chembra Peak and heart-shaped lake (guided treks available)</li>
            <li>Wildlife safari at Wayanad Wildlife Sanctuary (morning slots preferred)</li>
            <li>Explore ancient Edakkal Caves with prehistoric rock art</li>
            <li>Visit spice plantations and learn about cardamom, pepper cultivation</li>
            <li>Enjoy bamboo rafting and zipline at Kuruva Island</li>
            <li>Experience tribal culture and stay at heritage resorts</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Local Cuisine & Food Stops</h3>
          <p className="text-slate-700 mb-4">
            En route from Mysore to Wayanad, stop at Gundlupet for South Indian breakfast. In Wayanad, try authentic Kerala cuisine - appam with stew, Malabar biryani, karimeen fry, and traditional Wayanad coffee. Drivers can recommend popular restaurants and local eateries.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Wayanad?</h2>
        <p className="text-lg mb-6 text-blue-50">
          Book your Mysore to Wayanad taxi now for a comfortable and memorable hill station experience. Professional drivers, clean vehicles, transparent pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-lg"
          >
            Book Taxi Online
          </Link>
          <a 
            href="tel:+919611353434" 
            className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-8 py-3 text-base font-semibold text-white hover:bg-blue-900 transition-colors border-2 border-white"
          >
            Call +91 96113 53434
          </a>
        </div>
      </section>
    </div>
  );
}
