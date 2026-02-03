import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ROUTES } from "@/lib/constants/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { createProductSchema } from "@/lib/constants/schema-templates";

export const metadata: Metadata = {
  title: "SUV Taxi in Mysore | 6-7 Seater",
  description: "SUV taxi options in Mysore for outstation trips and family travel.",
  alternates: { canonical: "/fleet/suv/" },
};

const suvProductSchema = createProductSchema({
  name: "SUV Taxi Service in Mysore",
  description: "Spacious 6-7 seater SUV taxi service in Mysore. Premium Innova Crysta, Ertiga models for families, groups, and travelers with extra luggage.",
  category: "Vehicle Rental Service",
  brand: "MM Mysore Travels",
  offers: {
    price: 16,
    priceCurrency: "INR",
    description: "Per kilometer outstation rate",
  },
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 349,
  },
  features: [
    "6-7 Seater Capacity",
    "Premium Air Conditioning",
    "Professional Driver",
    "Captain Seats (Innova Crysta)",
    "Large Boot Space",
    "Powerful Diesel Engine",
    "Perfect for Families",
    "Outstation Travel Specialist",
  ],
});

export default function FleetSuvPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <JsonLd data={suvProductSchema} />
      <Breadcrumbs items={[{ label: "Fleet", href: ROUTES.FLEET }, { label: "SUV", href: ROUTES.FLEET_SUV }]} />
      
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-10 text-white shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">SUV Taxi in Mysore</h1>
        <p className="mt-4 text-xl text-white/95 max-w-3xl">Spacious 6-7 seater SUVs perfect for families, groups, and travelers with extra luggage. Choose from Innova Crysta, Ertiga, or similar premium models.</p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">6-7 Seater</div>
            <div className="text-sm text-white/90 mt-1">Capacity</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">Premium AC</div>
            <div className="text-sm text-white/90 mt-1">Climate Control</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹16/km</div>
            <div className="text-sm text-white/90 mt-1">Outstation Rate</div>
          </div>
          <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 text-center">
            <div className="text-2xl font-bold">₹2,800</div>
            <div className="text-sm text-white/90 mt-1">Local Package</div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Available SUV Models</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">Our premium SUV fleet features the most reliable and comfortable vehicles for family trips and group travel across Karnataka and beyond.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">Toyota Innova Crysta</h3>
            <p className="mt-2 text-slate-600">Premium 7-seater MPV known for exceptional comfort, powerful diesel engine, and superior ride quality. Features captain seats in middle row, ample legroom, large boot space, and best-in-class suspension perfect for long highway drives and ghat roads.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">2.4L Diesel</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">15+ kmpl</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">Captain Seats</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">Premium Interiors</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">Maruti Ertiga</h3>
            <p className="mt-2 text-slate-600">Versatile 7-seater with excellent fuel efficiency and comfortable seating. Spacious interiors with flexible seat configurations, good ground clearance for rough roads, and reliable petrol engine. Budget-friendly SUV option for family trips without compromising on comfort.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">1.5L Petrol</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">19+ kmpl</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">Spacious Boot</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">CNG Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-slate-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Why Choose SUV Taxi Service</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">1</div>
            <div>
              <h3 className="font-bold text-slate-900">Extra Space</h3>
              <p className="mt-1 text-sm text-slate-600">Generous seating for 6-7 passengers with comfort. Third row suitable for adults on long journeys. More headroom and legroom than sedans.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">2</div>
            <div>
              <h3 className="font-bold text-slate-900">Large Luggage Capacity</h3>
              <p className="mt-1 text-sm text-slate-600">Massive boot space for multiple suitcases, strollers, and shopping bags. Perfect for multi-day tours with plenty of baggage.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">3</div>
            <div>
              <h3 className="font-bold text-slate-900">Superior Comfort</h3>
              <p className="mt-1 text-sm text-slate-600">Premium suspension system absorbs bumps smoothly. Reclining seats with adjustable headrests. Captain seats in select models for luxury travel.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">4</div>
            <div>
              <h3 className="font-bold text-slate-900">Powerful Engine</h3>
              <p className="mt-1 text-sm text-slate-600">Strong engines handle ghat roads effortlessly. Smooth acceleration for highway overtaking. Reliable performance in all terrains and weather conditions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">5</div>
            <div>
              <h3 className="font-bold text-slate-900">Safety Features</h3>
              <p className="mt-1 text-sm text-slate-600">ABS, airbags, and sturdy build quality. Higher seating position provides better road visibility. Safer for families traveling with children and elderly.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">6</div>
            <div>
              <h3 className="font-bold text-slate-900">Premium Experience</h3>
              <p className="mt-1 text-sm text-slate-600">Better interiors with quality materials. Entertainment systems with USB charging ports. Enhanced AC cooling reaching all rows efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ideal For</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-2xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold text-slate-900">Family Trips</h3>
            <p className="mt-2 text-slate-600">Perfect for families with 4-6 members including children and elderly. Comfortable journey for everyone with ample space for belongings.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-slate-900">Group Travel</h3>
            <p className="mt-2 text-slate-600">Ideal for friend groups and colleagues traveling together. Split costs and enjoy the journey as a team to Coorg, Ooty, or Wayanad.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl mb-4">🎒</div>
            <h3 className="text-xl font-bold text-slate-900">Multi-Day Tours</h3>
            <p className="mt-2 text-slate-600">Essential for 3-5 day packages with multiple destinations. Store luggage securely while visiting attractions without worry.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-2xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-slate-900">Hill Station Trips</h3>
            <p className="mt-2 text-slate-600">Powerful engines and sturdy build handle winding ghat roads safely. Comfortable ride on 36 hairpin bends to Ooty or Kodaikanal route.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-2xl mb-4">✈️</div>
            <h3 className="text-xl font-bold text-slate-900">Airport Transfers</h3>
            <p className="mt-2 text-slate-600">Spacious for groups heading to Bangalore airport. Easily fits 6 passengers with luggage for domestic or international flights.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center text-2xl mb-4">💒</div>
            <h3 className="text-xl font-bold text-slate-900">Wedding Events</h3>
            <p className="mt-2 text-slate-600">Transport bride/groom side family members in style. Can be decorated for wedding processions and guest pickups from hotels.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center rounded-3xl bg-slate-900 p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Your SUV Taxi in Mysore</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Experience premium comfort for family trips and group travel. Our SUV taxi service in Mysore offers spacious vehicles with professional drivers.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919611353434" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 transition-colors">
            Call +91 96113 53434
          </a>
          <a href="https://wa.me/919611353434?text=Hi, I want to book an SUV taxi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </div>
  );
}
