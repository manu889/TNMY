import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Kodaikanal Travel Guide | Multi-Day Trips from Mysore",
  description: "Plan Kodaikanal tours from Mysore and request multi-day trip pricing.",
  alternates: { canonical: "/destinations/kodaikanal/" },
};

export default function DestinationKodaikanalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Destinations", href: ROUTES.DESTINATIONS },
          { label: "Kodaikanal", href: ROUTES.DEST_KODAIKANAL },
        ]}
      />

      {/* Hero Section */}
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Kodaikanal Multi-Day Tours</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Journey to the Princess of Hill Stations from Mysore with our taxi services. Explore misty valleys, pristine lakes, and pine forests in Tamil Nadu's beloved hill retreat with comfortable multi-day packages.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">370km</div>
            <div className="text-sm text-white/90 mt-1">From Mysore</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">7-8 Hours</div>
            <div className="text-sm text-white/90 mt-1">Drive Time</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹12,500</div>
            <div className="text-sm text-white/90 mt-1">Starting Fare</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">Apr-Jun</div>
            <div className="text-sm text-white/90 mt-1">Best Season</div>
          </div>
        </div>
      </div>

      {/* Top Attractions Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Top Places to Visit in Kodaikanal</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Our Mysore to Kodaikanal taxi packages include visits to all major attractions with flexible timing. Drivers wait at each location while you explore at your pace.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">🏞️</div>
            <h3 className="text-xl font-bold text-slate-900">Kodai Lake</h3>
            <p className="mt-2 text-slate-600">Man-made star-shaped lake spanning 60 acres is Kodaikanal's centerpiece. Enjoy pedal boating, cycling around the 5km perimeter, lakeside walks, horse rides, and stunning sunrise views with mist rolling over water.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">🚶</div>
            <h3 className="text-xl font-bold text-slate-900">Coaker's Walk</h3>
            <p className="mt-2 text-slate-600">1km pedestrian pathway along steep slopes offering panoramic views of valleys, waterfalls, and plains. Built in 1872, this narrow path is famous for cloud formations below you and telescope house for distant views on clear days.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl mb-4">🌲</div>
            <h3 className="text-xl font-bold text-slate-900">Bryant Park</h3>
            <p className="mt-2 text-slate-600">Botanical garden near Kodai Lake with 325 species of trees, shrubs, and cacti. Glasshouse with flowering plants, rose garden, eucalyptus groves, and annual flower shows in May. Perfect for picnics and nature photography.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">🌳</div>
            <h3 className="text-xl font-bold text-slate-900">Pine Forest</h3>
            <p className="mt-2 text-slate-600">Dense forest with towering pine trees creating mystical ambiance with filtered sunlight and misty atmosphere. Popular filming location, ideal for nature walks, photography sessions, and experiencing serene silence away from town crowds.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">⛰️</div>
            <h3 className="text-xl font-bold text-slate-900">Pillar Rocks</h3>
            <p className="mt-2 text-slate-600">Three massive granite boulders standing 122m high create dramatic vertical cliffs. Viewpoint offers breathtaking vistas of surrounding valleys and plains. Mini Garden below features variety of plants, waterfall views, and walking trails.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-2xl mb-4">💧</div>
            <h3 className="text-xl font-bold text-slate-900">Silver Cascade Falls</h3>
            <p className="mt-2 text-slate-600">65m waterfall cascading from cliff face along Kodai-Palani road. Fed by Kodai Lake overflow, most spectacular during monsoon and winter. Roadside attraction perfect for quick photo stop while traveling to/from Kodaikanal.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose Our Kodaikanal Taxi Service from Mysore</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Multi-Day Expertise</h3>
              <p className="mt-1 text-sm text-slate-600">Specialized in long-distance hill station tours with experienced drivers familiar with ghat roads, best viewpoints, and photo stops along the 370km route.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Combo Packages</h3>
              <p className="mt-1 text-sm text-slate-600">Combine Kodaikanal with Ooty, Coorg, or Munnar in multi-destination itineraries. We plan optimal routes covering maximum attractions while minimizing travel fatigue.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">Comfortable Vehicles</h3>
              <p className="mt-1 text-sm text-slate-600">Spacious SUVs and sedans ideal for long journeys with ample luggage space, reclining seats, music system, and working AC for comfort during 7-8 hour drives.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Flexible Itinerary</h3>
              <p className="mt-1 text-sm text-slate-600">Customize travel dates, route, and sightseeing stops. Stop for breakfast/lunch at recommended restaurants, visit en-route attractions, and adjust timings based on your preference.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">Driver Accommodation</h3>
              <p className="mt-1 text-sm text-slate-600">All packages include driver food and lodging allowance. No extra charges for driver expenses during multi-day stays. Drivers stay at separate budget accommodations.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">Transparent Pricing</h3>
              <p className="mt-1 text-sm text-slate-600">Fixed package rates with no hidden charges. Pricing includes fuel, tolls, parking, driver allowance, and interstate taxes. Pay only for your accommodation and entrance tickets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Guide Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kodaikanal Travel Guide from Mysore</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Best Time to Visit</h3>
            <p className="mt-3 text-slate-600">Kodaikanal's pleasant climate makes it popular year-round, but timing impacts your experience:</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>April to June (Peak Summer):</strong> Best season with clear skies, temperature 11-20°C, perfect for sightseeing. This is peak tourist season, so book accommodations early. Ideal for escaping south Indian summer heat.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>September to October (Post-Monsoon):</strong> Fresh greenery after rains, waterfalls at full flow, misty atmosphere, and fewer crowds. Temperature 8-17°C, occasional drizzles but mostly clear skies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>December to February (Winter):</strong> Coldest months (5-15°C), may experience frost in early mornings. Pack heavy woolens. Honeymoon season with romantic misty ambiance but limited outdoor activities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>July to August (Monsoon):</strong> Heavy rainfall, landslides possible on ghat roads. Many attractions remain closed. Not recommended unless you enjoy rain and can handle travel uncertainties.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Route Details</h3>
            <p className="mt-3 text-slate-600">The journey from Mysore to Kodaikanal covers 370km through scenic highways and ghat sections:</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Via Palani Route (Recommended):</strong> Mysore → Nanjangud → Chamarajanagar → Hasanur → Mettupalayam → Pollachi → Palani → Kodaikanal. Total 370km, 7-8 hours driving time with breaks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Road Conditions:</strong> Mostly 4-lane highway until Tamil Nadu border, then 2-lane roads. Final 40km from Palani to Kodai involves ghat section with 64 hairpin bends requiring experienced drivers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>En Route Stops:</strong> Breakfast at Nanjangud/Chamarajanagar, lunch at Pollachi/Palani, photo stop at Silver Cascade Falls (8km before Kodai), viewpoint breaks on ghat road.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Travel Tips:</strong> Start early (6-7 AM) to reach Kodai by afternoon, avoid night driving on ghats, carry motion sickness medicines if prone, keep snacks and water for kids.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Things to Do in Kodaikanal</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-xl">🚲</span>
                <span><strong>Cycling Around Lake:</strong> Rent bicycles and pedal the 5km loop around star-shaped Kodai Lake. Early morning rides offer misty atmosphere and fewer crowds. Tandem cycles available for couples.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-xl">🛶</span>
                <span><strong>Boating Activities:</strong> Try pedal boats, rowboats, or Kashmiri shikaras on Kodai Lake. Boating available 9 AM to 5:30 PM. Life jackets provided, ideal for families and couples seeking peaceful water time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-xl">🥾</span>
                <span><strong>Nature Treks:</strong> Dolphin's Nose trek offers 6.5km round trip with 1,000m sheer drop views. Vattakanal trek (5km) passes through pine forests. Green Valley View (Suicide Point) provides panoramic vistas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-xl">📸</span>
                <span><strong>Photography Tours:</strong> Pine Forest for misty atmospheric shots, Coaker's Walk for valley views, Pillar Rocks for dramatic cliffs, sunrise at Kodai Lake, cloud formations from viewpoints.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-xl">🍫</span>
                <span><strong>Homemade Chocolates:</strong> Shop for famous handmade chocolates at local stores around lake. Try unique flavors like karupatti (palm jaggery), eucalyptus, and marijuana leaf chocolates. Great souvenirs and gifts.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900">Recommended Itineraries</h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">2 Days / 1 Night (Kodaikanal Only)</h4>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 1:</strong> Depart Mysore early morning (6 AM), reach Kodai by 2 PM, check-in hotel, evening visit Kodai Lake and Coaker's Walk, dinner and overnight stay.</p>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 2:</strong> Morning sightseeing - Bryant Park, Pine Forest, Pillar Rocks, Green Valley View, Shembaganur Museum. Start return journey by 3 PM, reach Mysore by 10-11 PM.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">3 Days / 2 Nights (Extended Kodai)</h4>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 1:</strong> Travel to Kodai with en-route sightseeing at Palani Temple, evening lake activities and shopping.</p>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 2:</strong> Full day Kodai sightseeing covering all major attractions plus trekking/cycling activities. Explore nearby Berijam Lake (requires forest permit).</p>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 3:</strong> Visit morning attractions, shopping for chocolates and handicrafts, depart after lunch, return Mysore evening.</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="font-bold text-slate-900">5 Days / 4 Nights (Ooty + Kodaikanal)</h4>
                <p className="mt-2 text-sm text-slate-600"><strong>Day 1-2:</strong> Ooty sightseeing (Botanical Gardens, Lake, Doddabetta, Toy Train). <strong>Day 3:</strong> Travel Ooty to Kodai via Coimbatore (180km). <strong>Day 4:</strong> Kodai sightseeing. <strong>Day 5:</strong> Morning activities and return to Mysore. Total: ₹22,000-25,000 for sedan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Options Section */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Popular Kodaikanal Tour Packages from Mysore</h2>
        <p className="mt-4 text-lg text-white/90 max-w-3xl">Choose from our curated multi-day packages or customize your own itinerary. All packages include pickup/drop from Mysore, vehicle for entire duration, driver allowance, and flexibility to adjust sightseeing plans.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href={ROUTES.MYSORE_OOTY_KODAIKANAL} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <div className="text-sm font-semibold text-white/80 mb-2">MOST POPULAR</div>
            <h3 className="text-xl font-bold">Ooty + Kodaikanal Package</h3>
            <p className="mt-2 text-white/90 text-sm">5 Days / 4 Nights • Visit both hill stations in single trip</p>
            <div className="mt-4 text-2xl font-bold">₹22,000</div>
            <div className="text-sm text-white/80">Sedan (4 seater)</div>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              View Package Details →
            </div>
          </Link>
          
          <Link href={ROUTES.TOUR_PACKAGES} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <div className="text-sm font-semibold text-white/80 mb-2">QUICK GETAWAY</div>
            <h3 className="text-xl font-bold">Kodaikanal 2N/3D</h3>
            <p className="mt-2 text-white/90 text-sm">3 Days / 2 Nights • Focused Kodai exploration with leisure time</p>
            <div className="mt-4 text-2xl font-bold">₹15,000</div>
            <div className="text-sm text-white/80">Sedan (4 seater)</div>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              Explore Tours →
            </div>
          </Link>

          <Link href={ROUTES.CUSTOM_PACKAGES} className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-colors">
            <div className="text-sm font-semibold text-white/80 mb-2">CUSTOMIZE</div>
            <h3 className="text-xl font-bold">Build Your Package</h3>
            <p className="mt-2 text-white/90 text-sm">Custom duration • Add destinations like Munnar, Coorg, Wayanad</p>
            <div className="mt-4 text-2xl font-bold">Custom Quote</div>
            <div className="text-sm text-white/80">Based on itinerary</div>
            <div className="mt-4 inline-flex items-center text-sm font-semibold">
              Request Quote →
            </div>
          </Link>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Your Kodaikanal Trip from Mysore</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Contact our travel experts to plan your perfect Kodaikanal vacation. We'll help customize itineraries, suggest best routes, and provide honest advice on attractions worth your time.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book a Kodaikanal tour package from Mysore" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp for Quote
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ROUTES.MYSORE_OOTY_KODAIKANAL} className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            Ooty + Kodai Combo Package
          </Link>
          <Link href={ROUTES.BOOK_TAXI} className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            Online Booking Form
          </Link>
        </div>
      </div>
    </div>
  );
}
