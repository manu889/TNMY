import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Ooty Travel Guide | Places, Weather & Taxi from Mysore",
  description: "Plan your Ooty trip and book Mysore to Ooty taxi with reliable drivers.",
  alternates: { canonical: "/destinations/ooty/" },
};

export default function DestinationOotyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Ooty", href: ROUTES.DEST_OOTY }]} />

      {/* Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-slate-50 p-8 md:p-12 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Mysore to Ooty Taxi Service</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Visit the Queen of Hill Stations with our reliable Mysore to Ooty taxi service. Experience tea gardens, botanical beauty, and scenic Nilgiri mountains with comfortable vehicles and professional drivers.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link 
            href={ROUTES.MYSORE_TO_OOTY} 
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Book Ooty Taxi Now
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
            <div className="text-slate-600">125 km from Mysore</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Travel Time</div>
            <div className="text-slate-600">3 - 3.5 hours</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Starting Fare</div>
            <div className="text-slate-600">₹6,500 onwards</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="font-semibold text-slate-900">Best Time</div>
            <div className="text-slate-600">Apr-Jun, Sep-Nov</div>
          </div>
        </div>
      </div>

      {/* Top Attractions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Tourist Attractions in Ooty</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Botanical Gardens", desc: "22-hectare garden with 650+ plant species, fossil tree trunk, and vibrant seasonal flower shows attracting nature enthusiasts." },
            { name: "Ooty Lake", desc: "Scenic 65-acre artificial lake offering paddle boating, rowboats, and motorboat rides with mountain backdrop views." },
            { name: "Doddabetta Peak", desc: "Highest point in Nilgiris at 2,637m with telescope house offering stunning 360-degree views of Tamil Nadu and Kerala." },
            { name: "Nilgiri Mountain Railway", desc: "UNESCO World Heritage toy train journey through tunnels, bridges, and tea estates - one of India's most scenic rail routes." },
            { name: "Tea Museum", desc: "Learn tea processing from plucking to packaging, taste fresh Nilgiri tea, and shop authentic loose leaf varieties." },
            { name: "Rose Garden", desc: "India's largest rose garden with 20,000 rose bushes, 2,800 varieties spread across 10 acres on hillside terraces." }
          ].map((place) => (
            <div key={place.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{place.name}</h3>
              <p className="text-slate-600">{place.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="mb-12 bg-sky-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Book Mysore to Ooty Cab with Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Mountain Road Experts", desc: "Skilled drivers experienced in navigating Ooty's 36 hairpin bends and steep hill roads safely" },
            { title: "Transparent Fare", desc: "Fixed rates with no hidden costs for fuel, tolls, driver allowance - know exact cost upfront" },
            { title: "Premium Vehicles", desc: "Clean, comfortable cars suitable for hill travel with music system and climate control" },
            { title: "Sightseeing Flexibility", desc: "Stop at viewpoints like Pykara Falls, tea estates en route, and customize Ooty local tour" },
            { title: "On-Time Service", desc: "Punctual pickups from Mysore hotels/homes ensuring you maximize Ooty sightseeing time" },
            { title: "Local Insights", desc: "Drivers suggest best photo spots, authentic restaurants, and hidden gems in Nilgiris" }
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
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ooty Travel Guide from Mysore</h2>
        <div className="prose prose-slate max-w-none bg-white rounded-xl border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Best Time to Visit Ooty</h3>
          <p className="text-slate-700 mb-4">
            April to June (summer) offers pleasant 15-25°C weather perfect for escaping heat. September to November (post-monsoon) features lush greenery and clear skies. December to February brings cold weather (5-15°C) ideal for experiencing winter charm. Avoid monsoon season (July-August) due to landslides and road closures.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Mysore to Ooty Route Information</h3>
          <p className="text-slate-700 mb-4">
            The 125 km journey takes 3-3.5 hours via Nanjangud and Bandipur. Route passes through Bandipur National Park (wildlife sightings possible), climbs through Masinagudi, and ascends via famous 36 hairpin bends. Spectacular views of Nilgiri mountains and valleys throughout.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Things to Do in Ooty</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
            <li>Ride Nilgiri Mountain Railway from Ooty to Coonoor for scenic journey</li>
            <li>Visit tea factories and learn about Nilgiri CTC tea processing methods</li>
            <li>Explore Emerald Lake, Avalanche Lake for serene nature experiences</li>
            <li>Shop for homemade chocolates, essential oils, and tea at local markets</li>
            <li>Trek to Lamb's Rock and Dolphin's Nose viewpoints near Coonoor</li>
            <li>Experience strawberry picking at local farms (December to March)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Ooty Local Food & Restaurants</h3>
          <p className="text-slate-700 mb-4">
            Must-try: Hot chocolate at King Star, homemade chocolates from multiple shops on Charring Cross, fresh varkey (local pastry), and Ooty vegetables. Popular restaurants include Earl's Secret, Nahar Sidewalk Cafe, and Shinkow's Chinese. Drivers can recommend best spots for authentic cuisine.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Nearby Places from Ooty</h3>
          <p className="text-slate-700 mb-4">
            Coonoor (19 km) - Sim's Park, Dolphin's Nose viewpoint. Kotagiri (28 km) - Catherine Falls, peaceful hill town. Pykara (20 km) - waterfall and dam. Mudumalai Wildlife Sanctuary (40 km) - elephant camps and safaris. Plan multi-day packages to cover Ooty and nearby attractions.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ooty Adventure Today</h2>
        <p className="text-lg mb-6 text-blue-50">
          Experience the beauty of Queen of Hills with our comfortable Mysore to Ooty taxi service. Professional drivers, well-maintained vehicles, transparent pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href={ROUTES.BOOK_TAXI} 
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-lg"
          >
            Book Ooty Taxi
          </Link>
          <a 
            href="tel:+919611353434" 
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors border-2 border-white"
          >
            Call: +91 96113 53434
          </a>
        </div>
      </section>
    </div>
  );
}
