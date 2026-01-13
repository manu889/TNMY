import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Coorg Travel Guide | Best Time, Places & Taxi from Mysore",
  description: "Plan your Coorg trip and book Mysore to Coorg taxi with transparent pricing.",
  alternates: { canonical: "/destinations/coorg/" },
};

export default function DestinationCoorgPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Coorg", href: ROUTES.DEST_COORG }]} />

      {/* Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50 to-slate-50 p-8 md:p-12 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore to Coorg Taxi Service</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Discover Scotland of India with our premium Mysore to Coorg taxi service. Enjoy comfortable rides through coffee estates, misty hills, and cascading waterfalls with professional drivers and transparent pricing.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link 
            href={ROUTES.MYSORE_TO_COORG} 
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Book Coorg Taxi Now
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
            <div className="text-slate-600">120 km from Mysore</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Travel Time</div>
            <div className="text-slate-600">2.5 - 3 hours</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Starting Fare</div>
            <div className="text-slate-600">₹5,500 onwards</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Best Time</div>
            <div className="text-slate-600">Oct to Mar</div>
          </div>
        </div>
      </div>

      {/* Top Attractions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Must-Visit Places in Coorg</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Abbey Falls", desc: "Stunning waterfall amidst coffee plantations with hanging bridge and misty atmosphere, perfect for photography." },
            { name: "Raja's Seat", desc: "Scenic sunset viewpoint offering panoramic views of valley, mountains, and musical fountain in evening." },
            { name: "Dubare Elephant Camp", desc: "Interactive elephant experiences - bathing, feeding elephants in natural riverside setting with mahout guidance." },
            { name: "Talacauvery", desc: "Sacred birthplace of River Kaveri with temple, mountain views, and tranquil spiritual ambiance." },
            { name: "Madikeri Fort", desc: "Historical fort with palace, museum showcasing Kodava culture, and panoramic town views from ramparts." },
            { name: "Golden Temple Bylakuppe", desc: "Largest Tibetan settlement in India with magnificent monasteries, golden Buddha statues, prayer flags." }
          ].map((place) => (
            <div key={place.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{place.name}</h3>
              <p className="text-slate-600">{place.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="mb-12 bg-amber-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Mysore to Coorg Taxi Service?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Hill Route Experts", desc: "Experienced drivers well-versed with Coorg's winding hill roads and weather conditions" },
            { title: "All-Inclusive Pricing", desc: "Transparent fares covering fuel, tolls, parking with no surprise charges at trip end" },
            { title: "Comfortable Vehicles", desc: "Well-maintained sedans and SUVs perfect for hilly terrain with AC and entertainment" },
            { title: "Flexible Itineraries", desc: "Customize your Coorg sightseeing with stops at coffee estates and viewpoints" },
            { title: "Safety First", desc: "Regular vehicle maintenance, GPS tracking, verified drivers for secure hill travel" },
            { title: "Local Knowledge", desc: "Drivers recommend authentic Coorgi restaurants, hidden waterfalls, and photo spots" }
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
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Coorg Travel Guide from Mysore</h2>
        <div className="prose prose-slate max-w-none bg-white rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Best Season to Visit Coorg</h3>
          <p className="text-slate-700 mb-4">
            October to March is ideal with pleasant weather (15-28°C) perfect for sightseeing and trekking. Monsoon (June-September) transforms Coorg into lush green paradise with full-flowing waterfalls. Winter brings coffee blossom fragrance filling the valleys.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Mysore to Coorg Route Details</h3>
          <p className="text-slate-700 mb-4">
            The 120 km scenic route via Kushalnagar takes 2.5-3 hours. Journey passes through Hunsur, crosses River Kaveri at Kushalnagar, and climbs through coffee plantations. Well-maintained roads with breathtaking Western Ghats views throughout.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Top Activities in Coorg</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
            <li>Visit coffee plantations and learn bean-to-cup process with guided tours</li>
            <li>River rafting in Barapole River (October to January, moderate difficulty)</li>
            <li>Trekking to Tadiandamol Peak - highest point in Coorg at 1,748m</li>
            <li>Explore spice markets for cardamom, pepper, vanilla, and oranges</li>
            <li>Wildlife spotting at Nagarhole National Park with jeep safaris</li>
            <li>Experience Coorgi culture at local homes with traditional Pandi curry</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Coorg Cuisine & Must-Try Dishes</h3>
          <p className="text-slate-700 mb-4">
            Authentic Coorgi cuisine includes Pandi Curry (pork curry), Bamboo Shoot Curry, Kadumbuttu (rice dumplings), and Noolputtu (string hoppers). Don't miss fresh Coorg coffee and homemade wine. Drivers can guide you to family-run restaurants serving traditional meals.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Shopping in Coorg</h3>
          <p className="text-slate-700 mb-4">
            Buy authentic Coorg coffee (Arabica and Robusta beans), spices, homemade chocolates, honey, and Coorg oranges. Visit local markets in Madikeri for best prices. Taxi drivers can take you to authentic plantations for direct purchases.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Coffee Paradise with Us</h2>
        <p className="text-lg mb-6 text-amber-50">
          Book your Mysore to Coorg taxi for a memorable getaway. Comfortable vehicles, experienced drivers, flexible packages, and best rates guaranteed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-600 hover:bg-amber-50 transition-colors shadow-lg"
          >
            Book Coorg Taxi
          </Link>
          <a 
            href="tel:+919611353434" 
            className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-8 py-3 text-base font-semibold text-white hover:bg-amber-800 transition-colors border-2 border-white"
          >
            Call Now: +91 96113 53434
          </a>
        </div>
      </section>
    </div>
  );
}
