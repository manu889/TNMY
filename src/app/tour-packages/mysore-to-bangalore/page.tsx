import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { createTourPackageSchema, createFAQSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Mysore to Bangalore Taxi | Starting from ₹2,800 | One Way & Round Trip Cab Booking",
  description: "Book Mysore to Bangalore cab starting from ₹2,800. 150 km highway drive in 3 hours. Airport pickup, business travel, city tours. Professional drivers. 24/7 available.",
  keywords: ["mysore to bangalore taxi", "mysore to bangalore cab", "bangalore taxi from mysore", "mysore bangalore car rental"],
  alternates: { canonical: "/mysore-to-bangalore/" },
};

const tourPackage = createTourPackageSchema({
  name: "Mysore to Bangalore Taxi Service",
  description: "Fast and comfortable taxi journey from Mysore to Bangalore covering 150 km via NH275 highway",
  url: BUSINESS_INFO.url + "/mysore-to-bangalore/",
  image: BUSINESS_INFO.url + "/images/tours/Bangalore_Tour.jpg",
  offers: {
    price: "2800",
    priceCurrency: "INR"
  },
  duration: "P1D",
  itinerary: [
    { name: "Bangalore International Airport", description: "Airport transfers from Mysore" },
    { name: "Electronic City", description: "IT hub and corporate destinations" },
    { name: "City Center", description: "MG Road, Brigade Road, Commercial Street" },
    { name: "Railway Stations", description: "Krantivira Sangolli Rayanna Station, Yeshwantpur" },
  ]
});

const faqs = createFAQSchema([
  {
    question: "How much does Mysore to Bangalore taxi cost?",
    answer: "Mysore to Bangalore taxi starts at ₹2,800 for sedan (one way). The price includes fuel, tolls, and driver charges. SUV and larger vehicles available at competitive rates."
  },
  {
    question: "How far is Bangalore from Mysore?",
    answer: "Bangalore is approximately 150 km from Mysore. The journey takes around 3 hours by cab via NH275 highway."
  },
  {
    question: "Do you provide airport transfers from Mysore to Bangalore Airport?",
    answer: "Yes, we specialize in airport transfers. We monitor flight timings and ensure on-time pickup/drop at Kempegowda International Airport."
  },
  {
    question: "Can I book for same-day travel?",
    answer: "Yes, we accept same-day bookings based on availability. Contact us via WhatsApp for immediate confirmation."
  },
]);

export default function MysoreToBangalorePage() {
  const vehiclePricing = [
    {
      type: "Sedan (4 Seater)",
      models: "Dzire, Etios",
      oneWay: "₹2,800",
      roundTrip: "₹5,200",
      features: ["4 passengers", "2-3 large bags", "AC comfort", "Fuel efficient"]
    },
    {
      type: "SUV (6-7 Seater)",
      models: "Innova, Ertiga",
      oneWay: "₹3,500",
      roundTrip: "₹6,500",
      features: ["6-7 passengers", "Large luggage space", "Premium comfort", "Family friendly"]
    },
    {
      type: "Tempo Traveller",
      models: "12-17 Seater",
      oneWay: "₹5,500",
      roundTrip: "₹10,500",
      features: ["12-17 passengers", "Push-back seats", "Group travel", "Ample luggage"]
    }
  ];

  return (
    <>
      <JsonLd data={tourPackage} />
      <JsonLd data={faqs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
          { label: "Mysore to Bangalore", href: ROUTES.MYSORE_TO_BANGALORE }
        ]} />
        
        {/* Header */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Mysore to Bangalore Taxi Service
          </h1>
          <p className="text-lg text-slate-700 mb-6 max-w-3xl">
            Fast, comfortable and reliable cab service between Mysore and Bangalore. Perfect for airport transfers, business travel, and city visits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">150 km</div>
              <div className="text-sm font-semibold text-slate-600">Distance</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">3 Hours</div>
              <div className="text-sm font-semibold text-slate-600">Duration</div>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
              <div className="text-2xl font-bold text-slate-900">₹2,800</div>
              <div className="text-sm font-semibold text-slate-600">Starting Price</div>
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
              WhatsApp booking
            </a>
            <Link
              href={ROUTES.BOOK_TAXI}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Book online
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Mysore to Bangalore Cab Service</h2>
              <p className="text-slate-700 mb-4">
                Travel between Karnataka's cultural capital Mysore and IT hub Bangalore with our reliable taxi service. 
                The 150 km journey via NH275 (Bangalore-Mysore Expressway) takes approximately 3 hours, offering smooth 
                highway driving and scenic views along the way.
              </p>
              <p className="text-slate-700 mb-4">
                Our Mysore to Bangalore cab service is perfect for airport transfers to Kempegowda International Airport, 
                business trips to Electronic City and IT parks, shopping excursions to Commercial Street and Brigade Road, 
                or visiting family and friends in the Garden City.
              </p>
              <p className="text-slate-700">
                With professional drivers who know the best routes, clean AC vehicles, and transparent pricing starting at 
                ₹2,800, we ensure a comfortable and hassle-free journey. Available 24/7 for your convenience.
              </p>
            </div>

            {/* Vehicle Pricing */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Vehicle Options & Pricing</h2>
              <p className="text-slate-600 mb-6">Choose the right vehicle for your group size and budget</p>
              <div className="space-y-4">
                {vehiclePricing.map((vehicle, idx) => (
                  <div key={idx} className="rounded-xl border-2 border-slate-200 p-6 hover:border-blue-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                        <p className="text-sm text-slate-600 mt-1">{vehicle.models}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {vehicle.features.map((feature, i) => (
                            <span key={i} className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="text-center">
                          <p className="text-xs text-slate-500 mb-1">One Way</p>
                          <p className="text-2xl font-bold text-blue-600">{vehicle.oneWay}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-slate-500 mb-1">Round Trip</p>
                          <p className="text-2xl font-bold text-emerald-600">{vehicle.roundTrip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                * Prices include fuel, tolls, driver charges, and taxes. No hidden costs.
              </p>
            </div>

            {/* Popular Drop Locations */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Popular Drop Locations in Bangalore</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900 mb-2">✈️ Airports</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Kempegowda International Airport (Devanahalli)</li>
                    <li>• HAL Airport (Old Airport)</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900 mb-2">🚉 Railway Stations</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Bangalore City Railway Station (Majestic)</li>
                    <li>• Yeshwantpur Junction</li>
                    <li>• Bangalore Cantonment</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900 mb-2">💼 IT Hubs & Corporate</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Electronic City (Phase 1 & 2)</li>
                    <li>• Whitefield Tech Parks</li>
                    <li>• Manyata Tech Park</li>
                    <li>• Outer Ring Road Companies</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900 mb-2">🏙️ City Areas</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Indiranagar, Koramangala</li>
                    <li>• MG Road, Brigade Road</li>
                    <li>• Jayanagar, BTM Layout</li>
                    <li>• Marathahalli, HSR Layout</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 mb-6 ring-1 ring-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Our Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "⚡", title: "Fast Highway Route", desc: "Via NH275 Bangalore-Mysore Expressway" },
                  { icon: "✓", title: "Transparent Pricing", desc: "Fixed rates with no hidden charges" },
                  { icon: "🚗", title: "Clean AC Vehicles", desc: "Well-maintained sedans and SUVs" },
                  { icon: "👨‍✈️", title: "Professional Drivers", desc: "Experienced drivers who know Bangalore well" },
                  { icon: "📱", title: "24/7 Availability", desc: "Book anytime for early flights or late arrivals" },
                  { icon: "✈️", title: "Airport Specialists", desc: "Flight tracking & meet-and-greet service" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bangalore Sightseeing Add-On */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Add Bangalore Sightseeing to Your Trip</h2>
              <p className="text-slate-600 mb-6">
                Extend your journey with a guided tour of Bangalore's top attractions. Perfect for those with time to explore the Garden City!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { name: "Nandi Hills", distance: "60 km from city", time: "2-3 hours", highlight: "Sunrise views, ancient temples, paragliding" },
                  { name: "Lalbagh Botanical Garden", distance: "City center", time: "1-2 hours", highlight: "240 acres of flora, glass house, flower shows" },
                  { name: "Bangalore Palace", distance: "City center", time: "1-2 hours", highlight: "Tudor-style architecture, royal artifacts" },
                  { name: "Cubbon Park", distance: "City center", time: "1 hour", highlight: "300 acres greenery, walking trails, museums" },
                  { name: "ISKCON Temple", distance: "7 km from center", time: "1 hour", highlight: "Modern temple, spiritual experience" },
                  { name: "Bannerghatta National Park", distance: "22 km", time: "3-4 hours", highlight: "Safari, zoo, butterfly park, boating" },
                  { name: "Tipu Sultan's Palace", distance: "City center", time: "1 hour", highlight: "Indo-Islamic architecture, historical significance" },
                  { name: "UB City Mall", distance: "City center", time: "2 hours", highlight: "Luxury shopping, dining, entertainment" },
                ].map((place, idx) => (
                  <div key={idx} className="rounded-lg border-2 border-slate-200 p-4 hover:border-blue-300 transition-colors">
                    <h3 className="font-bold text-slate-900 mb-2">{place.name}</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-600">📍 {place.distance}</p>
                      <p className="text-slate-600">⏱️ {place.time}</p>
                      <p className="text-blue-700 mt-2">{place.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-blue-50 p-4 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-3">Sightseeing Packages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">Half-Day City Tour</p>
                      <p className="text-sm text-slate-600">4-5 hours • 3-4 attractions</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">+₹1,500</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">Full-Day Bangalore Tour</p>
                      <p className="text-sm text-slate-600">8-9 hours • 6-8 attractions</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">+₹2,500</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">Nandi Hills Sunrise Trip</p>
                      <p className="text-sm text-slate-600">Early morning • 4-5 hours</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">+₹2,000</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-500">* Add-on prices in addition to transfer cost. Entry tickets not included.</p>
              </div>
            </div>

            {/* Popular Day Trips from Bangalore */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Popular Day Trips from Bangalore</h2>
              <p className="text-slate-600 mb-6">
                Planning to stay in Bangalore? Explore these exciting destinations within 150 km for a perfect day trip!
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    category: "Adventure & Trekking",
                    places: [
                      { name: "Nandi Hills", distance: "60 km", time: "1.5 hours", activity: "Sunrise trek, cycling, paragliding" },
                      { name: "Ramnagaram", distance: "50 km", time: "1 hour", activity: "Rock climbing, Sholay filming location" },
                      { name: "Anthargange Caves", distance: "70 km", time: "1.5 hours", activity: "Cave exploration, night trek" },
                      { name: "Savandurga Hills", distance: "60 km", time: "1.5 hours", activity: "Asia's largest monolith, trekking" },
                    ]
                  },
                  {
                    category: "Nature & Wildlife",
                    places: [
                      { name: "Bannerghatta National Park", distance: "22 km", time: "45 mins", activity: "Safari, zoo, butterfly park" },
                      { name: "Manchinbele Dam", distance: "40 km", time: "1 hour", activity: "Water sports, picnic spot, boating" },
                      { name: "Jayamangali Blackbuck Reserve", distance: "90 km", time: "2 hours", activity: "Wildlife photography, endangered species" },
                      { name: "BR Hills Wildlife Sanctuary", distance: "140 km", time: "3 hours", activity: "Western Ghats biodiversity, temple" },
                    ]
                  },
                  {
                    category: "Historical & Religious",
                    places: [
                      { name: "Lepakshi Temple", distance: "120 km", time: "2.5 hours", activity: "Hanging pillar, Nandi statue, murals" },
                      { name: "Shravanabelagola", distance: "145 km", time: "3 hours", activity: "58 ft Gomateshwara statue, Jain temples" },
                      { name: "Madhugiri Fort", distance: "100 km", time: "2 hours", activity: "2nd largest monolith, fort trekking" },
                      { name: "Devarayanadurga", distance: "70 km", time: "1.5 hours", activity: "Hill station, ancient temples, trekking" },
                    ]
                  },
                  {
                    category: "Waterfalls & Scenic Spots",
                    places: [
                      { name: "Shivanasamudra Falls", distance: "135 km", time: "2.5 hours", activity: "Twin waterfalls, power plant, scenic beauty" },
                      { name: "Hogenakkal Falls", distance: "145 km", time: "3 hours", activity: "Coracle rides, river bathing, fishing" },
                      { name: "Chunchi Falls", distance: "90 km", time: "2 hours", activity: "Trekking, natural pool, picnic spot" },
                      { name: "Mekedatu", distance: "100 km", time: "2 hours", activity: "Cauvery confluence, river gorge, trekking" },
                    ]
                  },
                ].map((category, idx) => (
                  <div key={idx} className="rounded-lg border-2 border-slate-200 p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">
                        {idx === 0 ? "🏔️" : idx === 1 ? "🦚" : idx === 2 ? "🏛️" : "💧"}
                      </span>
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.places.map((place, pidx) => (
                        <div key={pidx} className="rounded-md bg-slate-50 p-3">
                          <h4 className="font-semibold text-slate-900">{place.name}</h4>
                          <p className="text-xs text-slate-600 mt-1">📍 {place.distance} • ⏱️ {place.time}</p>
                          <p className="text-sm text-blue-700 mt-2">{place.activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4 border border-emerald-200">
                <h3 className="font-bold text-slate-900 mb-2">📞 Customize Your Bangalore Day Trip</h3>
                <p className="text-sm text-slate-700">
                  Want to visit any of these places? We can arrange a customized day trip from Bangalore with 
                  comfortable vehicles and experienced drivers. Contact us for personalized itinerary and pricing.
                </p>
              </div>
            </div>

            {/* Extended Tour Packages */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 mb-6 ring-1 ring-purple-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Multi-Day Bangalore Packages</h2>
              <p className="text-slate-600 mb-6">
                Combine your Mysore-Bangalore transfer with extended tours for a complete Karnataka experience
              </p>
              
              <div className="space-y-4">
                <div className="rounded-xl bg-white p-5 border-2 border-purple-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Mysore → Bangalore → Nandi Hills</h3>
                      <p className="text-sm text-slate-600 mt-1">2 Days • Sunrise Special</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">₹7,500</p>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Day 1: Mysore to Bangalore transfer + city sightseeing</li>
                    <li>• Day 2: Early morning Nandi Hills sunrise + return</li>
                    <li>• Includes: AC vehicle, driver, fuel, tolls</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-5 border-2 border-purple-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Mysore → Bangalore → Shivanasamudra</h3>
                      <p className="text-sm text-slate-600 mt-1">2 Days • Waterfall Experience</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">₹8,000</p>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Day 1: Mysore to Bangalore with shopping break</li>
                    <li>• Day 2: Bangalore to Shivanasamudra Falls + return</li>
                    <li>• Includes: Transportation, experienced driver</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-5 border-2 border-purple-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Complete Bangalore Explorer</h3>
                      <p className="text-sm text-slate-600 mt-1">3 Days • City + Nearby Attractions</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">₹12,000</p>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Day 1: Mysore to Bangalore + Airport/Hotel drop</li>
                    <li>• Day 2: Full-day Bangalore city tour (8 attractions)</li>
                    <li>• Day 3: Nandi Hills sunrise + Lepakshi temple + return</li>
                    <li>• Perfect for: First-time visitors, family trips</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-5 border-2 border-purple-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Weekend Adventure Package</h3>
                      <p className="text-sm text-slate-600 mt-1">3 Days • Nature & Adventure</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">₹13,500</p>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Day 1: Mysore to Bangalore via Srirangapatna</li>
                    <li>• Day 2: Bangalore → Anthargange caves → Nandi Hills</li>
                    <li>• Day 3: Savandurga trek + return to Mysore</li>
                    <li>• Ideal for: Adventure enthusiasts, trekking lovers</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-700 transition-colors"
                >
                  <span>💬</span>
                  Customize Your Package
                </a>
              </div>
            </div>

            {/* Route Information */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Route & Travel Tips</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">🛣️ Highway Details</h3>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-slate-700 mb-2"><strong>Route:</strong> Mysore → Srirangapatna → Mandya → Ramanagara → Bangalore</p>
                    <p className="text-slate-700 mb-2"><strong>Highway:</strong> NH275 (Bangalore-Mysore Expressway)</p>
                    <p className="text-slate-700 mb-2"><strong>Road Condition:</strong> Excellent 4-lane highway</p>
                    <p className="text-slate-700"><strong>Toll Plazas:</strong> 2 toll points (₹120-140 total)</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">🍽️ Rest Stops & Restaurants</h3>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="font-semibold text-slate-900">Kamat Upachar (Bidadi)</p>
                      <p className="text-sm text-slate-600">75 km from Mysore • South Indian food, clean restrooms</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="font-semibold text-slate-900">Vaibhav Hotel (Ramanagara)</p>
                      <p className="text-sm text-slate-600">90 km from Mysore • Popular breakfast spot</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="font-semibold text-slate-900">A2B Restaurant (Multiple locations)</p>
                      <p className="text-sm text-slate-600">Along highway • Vegetarian meals, snacks</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">⏰ Best Time to Travel</h3>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <ul className="space-y-2 text-slate-700">
                      <li><strong>Early Morning (5-7 AM):</strong> Best for airport flights, less traffic in Bangalore</li>
                      <li><strong>Mid-Morning (9-11 AM):</strong> Ideal for city sightseeing, shops open</li>
                      <li><strong>Evening (4-6 PM):</strong> Avoid 5-7 PM Bangalore traffic peak hours</li>
                      <li><strong>Night (After 9 PM):</strong> Empty roads, faster travel, 10% night surcharge</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">💡 Travel Tips</h3>
                  <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>✓ Book 2-3 hours before flight departure for airport transfers</li>
                      <li>✓ Carry cash for tolls and snacks (cards accepted at restaurants)</li>
                      <li>✓ Bangalore Electronic City adds 30-45 mins during peak hours</li>
                      <li>✓ Request pickup 15 mins early if traveling with kids/elderly</li>
                      <li>✓ Share flight details for airport pickups (we track delays)</li>
                      <li>✓ Best weather: October-March (pleasant), avoid July-August (heavy rain)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="rounded-2xl bg-white p-6 mb-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Price</h2>
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
                      <span>AC vehicle for entire journey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Professional driver charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Fuel charges (both ways for round trip)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Toll charges on highway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Driver allowance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>Parking fees at pickup/drop</span>
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
                    Not Included
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Entry tickets to attractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Food and beverages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Accommodation (for round trips)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Personal expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Additional stops beyond route</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Waiting charges beyond 30 mins</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">How much does Mysore to Bangalore taxi cost?</h3>
                  <p className="text-slate-700">Mysore to Bangalore taxi starts at ₹2,800 for sedan (one way). The price includes fuel, tolls, and driver charges. SUV and larger vehicles available at ₹3,500 and ₹5,500 respectively.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">How long does it take from Mysore to Bangalore?</h3>
                  <p className="text-slate-700">The journey takes approximately 3 hours via NH275 highway. Travel time may vary based on traffic conditions in Bangalore, especially during peak hours.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Do you provide airport transfers to Bangalore Airport?</h3>
                  <p className="text-slate-700">Yes, we specialize in airport transfers. We monitor flight timings and ensure on-time pickup/drop at Kempegowda International Airport. Share your flight details for better coordination.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Can I make stops along the way?</h3>
                  <p className="text-slate-700">Yes, you can request stops for breakfast, restroom breaks, or quick sightseeing. One 30-minute stop is complimentary. Additional waiting time may incur extra charges.</p>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">Is round trip cheaper than two one-way trips?</h3>
                  <p className="text-slate-700">Yes, round trip packages offer better value. Round trip in sedan costs ₹5,200 compared to ₹5,600 for two one-way trips. Contact us for customized multi-day packages.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">What if my flight is delayed?</h3>
                  <p className="text-slate-700">We track flights in real-time. Our drivers adjust timing automatically for delays. No extra charges for flight delays. Just share your flight number during booking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Booking Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book Your Cab Now</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Instant WhatsApp confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional verified drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clean & sanitized vehicles</span>
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

            {/* Related Routes */}
            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-900/10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Routes</h3>
              <div className="space-y-2">
                <Link href={ROUTES.MYSORE_TO_COORG} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Coorg</div>
                  <div className="text-sm text-slate-600">120 km • ₹4,500</div>
                </Link>
                <Link href={ROUTES.MYSORE_TO_OOTY} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Ooty</div>
                  <div className="text-sm text-slate-600">125 km • ₹4,800</div>
                </Link>
                <Link href={ROUTES.MYSORE_TO_WAYANAD} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Mysore to Wayanad</div>
                  <div className="text-sm text-slate-600">135 km • ₹5,000</div>
                </Link>
                <Link href={ROUTES.AIRPORT_TRANSFER} className="block p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="font-semibold text-slate-900">Airport Transfer Service</div>
                  <div className="text-sm text-slate-600">All airports</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
