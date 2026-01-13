import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Mysore Travel Guide | Places to Visit & Taxi Services",
  description: "Explore Mysore highlights and book local sightseeing and outstation taxis.",
  alternates: { canonical: "/destinations/mysore/" },
};

export default function DestinationMysorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Destinations", href: ROUTES.DESTINATIONS }, { label: "Mysore", href: ROUTES.DEST_MYSORE }]} />

      {/* Hero Section */}
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Mysore Local Sightseeing</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Explore the City of Palaces with our professional taxi services in Mysore. Discover heritage monuments, royal gardens, and cultural landmarks with experienced local drivers.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">Within City</div>
            <div className="text-sm text-white/90 mt-1">Local Coverage</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">4/8/12 Hours</div>
            <div className="text-sm text-white/90 mt-1">Flexible Packages</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹1,800</div>
            <div className="text-sm text-white/90 mt-1">Starting Price</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">Year-Round</div>
            <div className="text-sm text-white/90 mt-1">Best Time</div>
          </div>
        </div>
      </div>

      {/* Top Attractions Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Top Places to Visit in Mysore</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Our Mysore sightseeing taxi covers all major tourist attractions with flexible timing and experienced drivers who know the best routes and photo spots.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-2xl mb-4">🏰</div>
            <h3 className="text-xl font-bold text-slate-900">Mysore Palace</h3>
            <p className="mt-2 text-slate-600">The magnificent Indo-Saracenic palace is India's most visited monument after the Taj Mahal. Marvel at the intricate architecture, durbar halls, and evening illumination with 100,000 light bulbs every Sunday and festival days.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">⛰️</div>
            <h3 className="text-xl font-bold text-slate-900">Chamundi Hills</h3>
            <p className="mt-2 text-slate-600">Climb 1,000 steps or drive up to the hilltop Chamundeshwari Temple at 1,000m altitude. Enjoy panoramic views of Mysore city, visit the 5m tall Nandi statue carved from single granite, and capture stunning sunrise and sunset photos.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl mb-4">🌳</div>
            <h3 className="text-xl font-bold text-slate-900">Brindavan Gardens</h3>
            <p className="mt-2 text-slate-600">The terraced gardens below KRS Dam feature musical fountain shows in the evening (7-8 PM), symmetrical design, colorful flower beds, and boating facilities. Best visited during sunset for the fountain spectacle synchronized to music.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">⛪</div>
            <h3 className="text-xl font-bold text-slate-900">St. Philomena's Church</h3>
            <p className="mt-2 text-slate-600">One of Asia's tallest churches, this Neo-Gothic masterpiece features twin spires reaching 175 feet, stained glass windows depicting Biblical scenes, and a crypt containing the statue of St. Philomena. Architecture inspired by Cologne Cathedral.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">🦁</div>
            <h3 className="text-xl font-bold text-slate-900">Mysore Zoo</h3>
            <p className="mt-2 text-slate-600">Sri Chamarajendra Zoological Gardens, one of India's oldest and best-maintained zoos, houses over 1,500 animals including white tigers, African elephants, gorillas, and rare species. Well-planned exhibits with natural habitats spanning 157 acres.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-slate-900">Jaganmohan Palace</h3>
            <p className="mt-2 text-slate-600">Art gallery housing priceless paintings by Raja Ravi Varma, musical instruments collection, and antique artifacts. The palace served as royal residence before Mysore Palace was built and now showcases cultural heritage spanning centuries.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose Our Mysore Taxi Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Local Expert Drivers</h3>
              <p className="mt-1 text-sm text-slate-600">Our drivers are Mysore natives who know every corner of the city, best photo spots at each attraction, and optimal visiting times to avoid crowds.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Flexible Packages</h3>
              <p className="mt-1 text-sm text-slate-600">Choose 4-hour (40km), 8-hour (80km), or 12-hour (120km) packages. Customize your itinerary based on interests - skip places or add nearby attractions within package limits.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">All-Inclusive Pricing</h3>
              <p className="mt-1 text-sm text-slate-600">No hidden charges. Package rates include driver allowance, parking fees, and fuel within city limits. Pay only for entrance tickets to monuments.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Clean AC Vehicles</h3>
              <p className="mt-1 text-sm text-slate-600">Well-maintained sedans and SUVs with working air conditioning, comfortable seating, and ample luggage space. Sanitized before every trip for your safety.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">Hotel Pickup & Drop</h3>
              <p className="mt-1 text-sm text-slate-600">Convenient pickup from your hotel, railway station, or any location in Mysore. Drop back at the same or different location within city limits at no extra cost.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">Quick Booking</h3>
              <p className="mt-1 text-sm text-slate-600">Book via phone or WhatsApp with instant confirmation. Same-day bookings available based on vehicle availability. No advance payment required for local packages.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Guide Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mysore Sightseeing Travel Guide</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Best Time to Visit</h3>
            <p className="mt-3 text-slate-600">Mysore enjoys pleasant weather year-round, making it suitable for sightseeing in any season:</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>October to March:</strong> Best season with cool weather (15-28°C), perfect for outdoor exploration. Dasara festival in September/October is the peak attraction with grand celebrations, illuminated palace, and cultural programs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>April to June:</strong> Summer months (25-35°C), but manageable for sightseeing. Visit early morning or evening to avoid afternoon heat. Museums and indoor attractions are comfortable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>July to September:</strong> Monsoon season with moderate rainfall. Brindavan Gardens and parks are lush green. Carry umbrellas but most attractions remain open.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Suggested Itineraries</h3>
            <p className="mt-3 text-slate-600">Optimize your Mysore sightseeing based on available time:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">4-Hour Package (Half Day)</h4>
                <p className="mt-2 text-sm text-slate-600">Mysore Palace → Chamundi Hills → Nandi Statue → St. Philomena's Church. Ideal for travelers with limited time or those continuing to outstation destinations.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">8-Hour Package (Full Day)</h4>
                <p className="mt-2 text-sm text-slate-600">Mysore Palace → Chamundi Hills → St. Philomena's Church → Mysore Zoo → Jaganmohan Palace → Railway Museum → Karanji Lake → Shopping at Devaraja Market. Complete city tour covering major attractions.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">12-Hour Package (Extended)</h4>
                <p className="mt-2 text-sm text-slate-600">Full city tour + Brindavan Gardens (25km) + Srirangapatna (18km) including Tipu Sultan's Summer Palace, Ranganathaswamy Temple, and Gumbaz. Return by evening for Palace illumination viewing.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Things to Do in Mysore</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 text-xl">🎭</span>
                <span><strong>Attend Dasara Festival:</strong> Experience India's grandest celebration during September/October with royal processions, cultural programs, illuminated palace, and Jumbo Savari elephant parade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 text-xl">🛍️</span>
                <span><strong>Shopping at Devaraja Market:</strong> Explore the historic bazaar for Mysore silk sarees, sandalwood products, jasmine flowers, traditional artwork, spices, and local handicrafts at wholesale prices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 text-xl">🍲</span>
                <span><strong>Food Tasting:</strong> Try authentic Mysore masala dosa, Mysore pak sweet, bisi bele bath, ragi mudde, and filter coffee at iconic restaurants like Mylari, Hotel RRR, and Vinayaka Mylari.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 text-xl">📸</span>
                <span><strong>Photography Tour:</strong> Capture palace illumination, sunrise from Chamundi Hills, heritage buildings architecture, Brindavan fountain show, and colorful Devaraja Market scenes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 text-xl">🎨</span>
                <span><strong>Art & Culture:</strong> Visit Jaganmohan Art Gallery for Raja Ravi Varma paintings, Folk Museum for traditional artifacts, Sand Sculpture Museum, and attend Bharatanatyam performances at cultural centers.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Nearby Day Trips from Mysore</h3>
            <p className="mt-3 text-slate-600">Extend your trip with these nearby destinations (can be covered in extended packages):</p>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Srirangapatna (18km):</strong> Historical capital of Tipu Sultan with fort, Ranganathaswamy Temple, Gumbaz mausoleum, Daria Daulat Palace, and Colonel Bailey's Dungeon. Add 2-3 hours to itinerary.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Ranganathittu Bird Sanctuary (18km):</strong> Boat rides through wetlands spotting painted storks, spoonbills, ibis, and crocodiles. Best from November to June during bird nesting season.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Talakadu (50km):</strong> Ancient temple town with sand dunes, Panchalinga Darshana temples, and Kaveri River views. Mysterious buried temples and unique desert-like landscape in Karnataka.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Balmuri & Edmuri Falls (16km):</strong> Small waterfalls on Kaveri River, perfect for children's picnic and water play. Popular weekend getaway from July to November when water flow is good.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Outstation Gateway Section */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Mysore: Gateway to South India Hill Stations</h2>
        <p className="mt-4 text-lg text-white/90 max-w-3xl">After exploring Mysore, continue your journey to nearby tourist destinations with our outstation taxi services. We offer comfortable inter-city travel to all major hill stations and attractions around Karnataka and Kerala.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href={ROUTES.DEST_COORG} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-bold">Mysore to Coorg</h3>
            <p className="mt-2 text-white/90 text-sm">120km • 2.5-3 hours • Coffee plantations and waterfalls</p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              Explore Coorg →
            </div>
          </Link>
          <Link href={ROUTES.DEST_OOTY} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-bold">Mysore to Ooty</h3>
            <p className="mt-2 text-white/90 text-sm">125km • 3-3.5 hours • Queen of Hill Stations</p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              Explore Ooty →
            </div>
          </Link>
          <Link href={ROUTES.DEST_WAYANAD} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-bold">Mysore to Wayanad</h3>
            <p className="mt-2 text-white/90 text-sm">140km • 3.5-4 hours • Wildlife and hill trails</p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              Explore Wayanad →
            </div>
          </Link>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Your Mysore Sightseeing Taxi Now</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Call or WhatsApp for instant booking confirmation. Our team is available 24/7 to assist with your travel plans and customize itineraries based on your interests.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book a Mysore sightseeing taxi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ROUTES.MYSORE_ONE_DAY_TOUR} className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            View One Day Tour Package
          </Link>
          <Link href={ROUTES.BOOK_TAXI} className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            Online Booking Form
          </Link>
        </div>
      </div>
    </div>
  );
}
