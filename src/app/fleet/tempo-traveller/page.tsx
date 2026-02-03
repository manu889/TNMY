import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { createProductSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "Tempo Traveller in Mysore | Group Travel",
  description: "Tempo Traveller options in Mysore for group tours, weddings and multi-day trips.",
  alternates: { canonical: "/fleet/tempo-traveller/" },
};

const tempoProductSchema = createProductSchema({
  name: "Tempo Traveller Rental in Mysore",
  description: "Spacious 13-17 seater tempo traveller rental in Mysore. Perfect for group tours, corporate outings, family gatherings, and wedding events with luxury push-back seats.",
  category: "Vehicle Rental Service",
  brand: "MM Mysore Travels",
  offers: {
    price: 25,
    priceCurrency: "INR",
    description: "Per kilometer outstation rate",
  },
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 349,
  },
  features: [
    "13-17 Seater Capacity",
    "Push Back Reclining Seats",
    "Powerful AC System",
    "Entertainment System with LCD",
    "Large Luggage Space",
    "USB Charging Ports",
    "Professional Driver",
    "GPS Tracking",
  ],
});

export default function FleetTempoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={tempoProductSchema} />
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "Tempo Traveller", href: ROUTES.FLEET_TEMPO }]} />
      
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-700 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Tempo Traveller in Mysore</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Spacious 13-17 seater tempo travellers perfect for group tours, corporate outings, family gatherings, and wedding events. Travel together in comfort and style.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">13-17 Seater</div>
            <div className="text-sm text-white/90 mt-1">Capacity</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">Push Back Seats</div>
            <div className="text-sm text-white/90 mt-1">Luxury Seating</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹25/km</div>
            <div className="text-sm text-white/90 mt-1">Outstation Rate</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹5,500</div>
            <div className="text-sm text-white/90 mt-1">Local Package</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tempo Traveller Features</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Our fleet includes modern tempo travellers equipped with all amenities for comfortable group travel across Karnataka and neighboring states.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">💺</div>
            <h3 className="text-xl font-bold text-slate-900">Push Back Seats</h3>
            <p className="mt-2 text-slate-600">Luxury reclining seats with individual armrests. Adjustable backrests for maximum comfort during long journeys. Premium cushioning reduces fatigue on multi-day tours.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">❄️</div>
            <h3 className="text-xl font-bold text-slate-900">Powerful AC</h3>
            <p className="mt-2 text-slate-600">High-capacity air conditioning system covering entire cabin. Individual vents for each row ensure uniform cooling. Effective even in peak summer heat.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-slate-900">Entertainment System</h3>
            <p className="mt-2 text-slate-600">Music system with USB and Bluetooth connectivity. LCD screen for video entertainment on longer trips. Keep groups entertained throughout the journey.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-slate-900">Large Luggage Space</h3>
            <p className="mt-2 text-slate-600">Spacious luggage compartment at rear. Additional overhead racks for cabin bags. Can accommodate luggage for 15+ passengers on multi-day tours.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-2xl mb-4">🔌</div>
            <h3 className="text-xl font-bold text-slate-900">Charging Ports</h3>
            <p className="mt-2 text-slate-600">Multiple USB charging points throughout cabin. Keep phones, cameras, and devices charged. Essential for groups on sightseeing tours capturing memories.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-2xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-slate-900">Safety Features</h3>
            <p className="mt-2 text-slate-600">Fire extinguisher, first aid kit, and emergency exits. GPS tracking for real-time location monitoring. Comprehensive insurance coverage for passenger safety.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose Tempo Traveller</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Cost Effective for Groups</h3>
              <p className="mt-1 text-sm text-slate-600">Split costs among 13-17 people makes it economical per person. Much cheaper than booking multiple sedans or SUVs for group travel.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Travel Together</h3>
              <p className="mt-1 text-sm text-slate-600">Keep entire group together for better coordination. No risk of vehicles getting separated. Enjoy the journey as a team with shared experiences.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">Comfortable Seating</h3>
              <p className="mt-1 text-sm text-slate-600">Push back seats rival airline business class comfort. Everyone gets window or aisle seat for scenic views. No cramped middle seats like in smaller vehicles.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Experienced Drivers</h3>
              <p className="mt-1 text-sm text-slate-600">Drivers specially trained for handling larger vehicles. Skilled in navigating ghat roads and narrow hill station routes safely with passenger comfort.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">Flexible Stops</h3>
              <p className="mt-1 text-sm text-slate-600">Easy to accommodate group requests for photo stops, meal breaks, and restroom breaks. Driver coordinates with group leader for smooth travel.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">All-Weather Travel</h3>
              <p className="mt-1 text-sm text-slate-600">Sturdy build handles monsoon and winter conditions. High ground clearance for rough roads. Reliable in all seasons across different terrains.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ideal For</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-slate-900">Corporate Outings</h3>
            <p className="mt-2 text-slate-600">Team building trips, office picnics, and client entertainment events. Professional service with GST invoices and corporate billing options available.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center text-2xl mb-4">💒</div>
            <h3 className="text-xl font-bold text-slate-900">Wedding Functions</h3>
            <p className="mt-2 text-slate-600">Transport wedding guests from hotels to venues. Can be decorated for baraat processions. Perfect for moving family members to multiple ceremony locations.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">🏫</div>
            <h3 className="text-xl font-bold text-slate-900">School/College Trips</h3>
            <p className="mt-2 text-slate-600">Educational tours, sports team travel, and college fest participation. Safe and supervised travel for student groups with responsible drivers.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold text-slate-900">Extended Family Tours</h3>
            <p className="mt-2 text-slate-600">Reunions, pilgrimages, and multi-family vacations. Keep grandparents, parents, kids, and cousins together for memorable family bonding time.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">⛪</div>
            <h3 className="text-xl font-bold text-slate-900">Religious Tours</h3>
            <p className="mt-2 text-slate-600">Temple visits, pilgrimage circuits, and spiritual journeys. Tirupati packages, Dharmasthala tours, and Kerala temple tours with comfortable group travel.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-2xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-slate-900">Hill Station Tours</h3>
            <p className="mt-2 text-slate-600">Group packages to Coorg, Ooty, Wayanad, Kodaikanal, and Munnar. Experienced drivers navigate mountain roads safely with large vehicles.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-bold text-slate-900">Popular Routes with Tempo Traveller</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Mysore to Coorg:</span>
              <span className="text-slate-600"> 120km, ideal for group coffee plantation tours and waterfall visits</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Mysore to Ooty:</span>
              <span className="text-slate-600"> 125km through scenic ghats, popular for college and corporate trips</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Mysore to Wayanad:</span>
              <span className="text-slate-600"> 140km, perfect for wildlife safaris and adventure groups</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Mysore-Coorg-Wayanad:</span>
              <span className="text-slate-600"> 3-4 day multi-destination tour covering hills and forests</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Bangalore Airport Transfer:</span>
              <span className="text-slate-600"> 145km, convenient for large family groups traveling together</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-600 font-bold">•</span>
            <div>
              <span className="font-semibold text-slate-900">Tirupati from Mysore:</span>
              <span className="text-slate-600"> 500km overnight journey for pilgrimage groups</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Tempo Traveller in Mysore</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Perfect for group travel with comfort and affordability. Our tempo traveller service in Mysore ensures smooth coordination and memorable journeys.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white hover:bg-purple-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book a tempo traveller" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
}
