import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { createReviewSchema } from "@/lib/constants/schema-templates";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { BookingForm } from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  const services = [
    {
      title: "Outstation Taxi",
      desc: "Book outstation cabs from Mysore to Coorg, Ooty, Wayanad, Bangalore and more with transparent pricing.",
      meta: "Starting from ₹11/km",
      href: ROUTES.OUTSTATION_TAXI,
    },
    {
      title: "Local Sightseeing",
      desc: "Half-day and full-day Mysore sightseeing taxi packages with flexible stops.",
      meta: "City limits coverage",
      href: ROUTES.SIGHTSEEING_TAXI,
    },
    {
      title: "Airport Transfer",
      desc: "Mysore to Bangalore airport taxi with on-time pickup and clear coordination.",
      meta: "Starting from ₹1,800",
      href: ROUTES.AIRPORT_TRANSFER,
    },
    {
      title: "Tour Packages",
      desc: "Mysore tour packages by car with curated itineraries and experienced drivers.",
      meta: "Customizable plans",
      href: ROUTES.TOUR_PACKAGES,
    },
    {
      title: "Corporate Cab",
      desc: "Corporate cab service in Mysore with reliable pickups and professional drivers.",
      meta: "Monthly billing",
      href: ROUTES.CORPORATE_CAB,
    },
    {
      title: "Wedding Car Rental",
      desc: "Wedding car rental in Mysore with premium cars and on-time service.",
      meta: "Decor-ready",
      href: ROUTES.WEDDING_CAR,
    },
  ];

  const fleet = [
    { id: "sedan-dzire", name: "Dzire Sedan", href: ROUTES.FLEET_SEDAN, desc: "Comfortable 4 seater", image: "/images/vehicles/Dzire.png", price: "₹11/km" },
    { id: "suv-ertiga", name: "Ertiga SUV", href: ROUTES.FLEET_SUV, desc: "Family trips and luggage", image: "/images/vehicles/Ertiga.png", price: "₹15/km" },
    { id: "suv-innova", name: "Innova Crysta", href: ROUTES.FLEET_SUV, desc: "7-seater premium comfort", image: "/images/vehicles/Innova.png", price: "₹17/km" },
    { id: "sedan-etios", name: "Etios Sedan", href: ROUTES.FLEET_SEDAN, desc: "Budget-friendly sedan", image: "/images/vehicles/Etios.png", price: "₹12/km" },
    { id: "tempo", name: "Tempo Traveller", href: ROUTES.FLEET_TEMPO, desc: "Group travel 13-17 seater", image: "/images/vehicles/Tempo-Traveller.png", price: "₹18/km" },
    { id: "bus", name: "Tourist Bus", href: ROUTES.FLEET_BUS, desc: "Large groups 30+ seater", image: "/images/vehicles/Crysta.webp", price: "₹30/km" },
  ];

  const featuredPackages = [
    {
      title: "Mysore One Day Tour",
      href: ROUTES.MYSORE_ONE_DAY_TOUR,
      image: "/images/tours/Mysore_Tour_Package.jpg",
      meta: "City sightseeing",
    },
    {
      title: "Mysore to Coorg",
      href: ROUTES.MYSORE_TO_COORG,
      image: "/images/tours/Coorg_Tour_Package.jpg",
      meta: "1–2 days",
    },
    {
      title: "Mysore Ooty Coorg",
      href: ROUTES.MYSORE_OOTY_COORG,
      image: "/images/tours/Coorg.jpg",
      meta: "Multi-day",
    },
    {
      title: "Mysore to Ooty",
      href: ROUTES.MYSORE_TO_OOTY,
      image: "/images/tours/2.jpg",
      meta: "2–3 days",
    },
    {
      title: "Mysore to Bangalore",
      href: ROUTES.MYSORE_TO_BANGALORE,
      image: "/images/tours/3.jpg",
      meta: "1 day",
    },
    {
      title: "Mysore to Wayanad",
      href: ROUTES.MYSORE_TO_WAYANAD,
      image: "/images/tours/4.jpg",
      meta: "2–3 days",
    },
  ];

  const destinations = [
    { name: "Coorg", image: "/images/tours/Coorg.jpg", href: ROUTES.DEST_COORG },
    { name: "Ooty", image: "/images/tours/5.jpg", href: ROUTES.DEST_OOTY },
    { name: "Mysore", image: "/images/tours/Mysore_Tour_Package.jpg", href: ROUTES.DEST_MYSORE },
    { name: "Wayanad", image: "/images/tours/6.jpg", href: ROUTES.DEST_WAYANAD },
    { name: "Bangalore", image: "/images/tours/7.jpg", href: ROUTES.DEST_BANGALORE },
    { name: "Kodaikanal", image: "/images/tours/8.jpg", href: ROUTES.DEST_KODAIKANAL },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      route: "Mysore to Coorg",
      text: "Excellent service! The driver was professional and the car was spotlessly clean. Highly recommend for family trips.",
      rating: 5,
      image: "/images/Client Testimonial/Testimonial (1).jpeg",
      date: "2025-12-15",
    },
    {
      name: "Priya Sharma",
      route: "Airport Transfer",
      text: "Very reliable and punctual. The booking process was smooth and the driver was courteous throughout the journey.",
      rating: 5,
      image: "/images/Client Testimonial/Testimonial (2).jpeg",
      date: "2025-11-28",
    },
    {
      name: "Arun Patel",
      route: "Outstation - Bangalore",
      text: "Great value for money. Competitive rates and no hidden charges. Will definitely book again!",
      rating: 5,
      image: "/images/Client Testimonial/Testimonial (3).jpeg",
      date: "2025-12-05",
    },
  ];

  const testimonialImages = [
    "/images/Client Testimonial/Testimonial (1).jpeg",
    "/images/Client Testimonial/Testimonial (2).jpeg",
    "/images/Client Testimonial/Testimonial (4).jpeg",
    "/images/Client Testimonial/Testimonial (5).jpeg",
    "/images/Client Testimonial/Testimonial (6).jpeg",
    "/images/Client Testimonial/Testimonial (7).jpeg",
    "/images/Client Testimonial/Testimonial (8).jpeg",
    "/images/Client Testimonial/Testimonial (9).jpeg",
    "/images/Client Testimonial/Testimonial (10).jpeg",
    "/images/Client Testimonial/Testimonial (11).jpeg",
    "/images/Client Testimonial/Testimonial (12).jpeg",
    "/images/Client Testimonial/Testimonial (13).jpeg",
  ];

  const whatsappFor = (message: string) => {
    const phone = BUSINESS_INFO.whatsapp.replace(/\+/g, "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const popularRoutes = [
    {
      title: "Mysore to Coorg Taxi",
      subtitle: "Outstation cab for family trips & weekend getaways",
      meta: "~120 km • One-way & round trip",
      href: ROUTES.MYSORE_TO_COORG,
      wa: "Hi, I want a quote for Mysore to Coorg taxi. Please share rate and available vehicles.",
    },
    {
      title: "Mysore to Ooty Cab",
      subtitle: "Hill-station taxi with experienced ghat-road drivers",
      meta: "~125 km • 2–3 day plans",
      href: ROUTES.MYSORE_TO_OOTY,
      wa: "Hi, I want to book Mysore to Ooty cab. Please share itinerary options and total fare.",
    },
    {
      title: "Mysore to Wayanad Taxi",
      subtitle: "Outstation cab for resorts, wildlife & group travel",
      meta: "~140 km • Custom stops",
      href: ROUTES.MYSORE_TO_WAYANAD,
      wa: "Hi, I need Mysore to Wayanad taxi. Please share fare and vehicle options.",
    },
    {
      title: "Mysore to Bangalore Taxi",
      subtitle: "Intercity cab for business travel & airport connections",
      meta: "~145 km • Fast pickup",
      href: ROUTES.MYSORE_TO_BANGALORE,
      wa: "Hi, I want to book Mysore to Bangalore taxi. Please share one-way/round-trip price.",
    },
    {
      title: "Mysore Airport Transfer",
      subtitle: "Reliable Bangalore airport taxi from Mysore",
      meta: "On-time pickup • Flight-friendly",
      href: ROUTES.AIRPORT_TRANSFER,
      wa: "Hi, I need Mysore to Bangalore airport transfer. Pickup date/time is __ and passengers __.",
    },
    {
      title: "Mysore Local Sightseeing",
      subtitle: "Half-day & full-day local taxi packages",
      meta: "Palace • Zoo • Chamundi Hills",
      href: ROUTES.SIGHTSEEING_TAXI,
      wa: "Hi, I want Mysore local sightseeing taxi package. Please share half-day/full-day rates.",
    },
  ];

  const reviewSchemas = createReviewSchema(
    testimonials.map(t => ({
      author: t.name,
      rating: t.rating,
      text: t.text,
      date: t.date,
      route: t.route,
    }))
  );

            return (
              <>
                {reviewSchemas.map((schema, idx) => (
                  <JsonLd key={idx} data={schema} />
                ))}
                <section className="relative overflow-hidden bg-slate-900">
                  <HeroBackground />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">
                      <div className="pt-2 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10">
                          Travels in Mysore • Rated {BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max} • {BUSINESS_INFO.rating.count}+ reviews
                        </div>
                        <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">Travels in Mysore — Taxi Services in Mysore</h1>
                        <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed max-w-xl drop-shadow mx-auto">
                          Book Taxi Services in Mysore for outstation trips (Coorg, Ooty, Wayanad, Bangalore), Bangalore airport transfers, and Mysore local sightseeing packages with clean vehicles, verified drivers, and transparent pricing.
                        </p>

                        <div className="hidden md:block mt-6 space-y-3 max-w-xl mx-auto">
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">Instant cab booking in Mysore with verified drivers</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">Clean AC cabs for airport, outstation & local trips</span>
                          </div>
                          <div className="hidden md:flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">Fixed, transparent fares (no hidden charges)</span>
                          </div>
                          <div className="hidden md:flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">24/7 support on call & WhatsApp</span>
                          </div>
                        </div>

                        <div className="mt-5 hidden md:inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold ring-1 ring-slate-900/10">
                          <span className="text-blue-700">₹11/km</span>
                          <span className="text-slate-700">starting outstation pricing</span>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                          <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="hidden md:inline-flex items-center justify-center rounded-xl bg-[#FF7444] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#e85c2d] transition-colors"
                          >
                            Call {BUSINESS_INFO.phoneDisplay}
                          </a>
                          <a
                            href={BUSINESS_INFO.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                          >
                            WhatsApp
                          </a>
                        </div>

                        <div className="hidden md:grid mt-10 grid-cols-3 gap-3 max-w-xl mx-auto">
                          {[
                            { label: "Since", value: BUSINESS_INFO.founded },
                            { label: "Support", value: "24/7" },
                            { label: "Experience", value: BUSINESS_INFO.yearsExperience },
                          ].map((s) => (
                            <div key={s.label} className="rounded-xl bg-white p-4 text-center ring-1 ring-slate-900/10">
                              <div className="text-lg font-bold text-slate-900">{s.value}</div>
                              <div className="text-xs font-semibold text-slate-600 mt-1">{s.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full flex justify-center">
                        <BookingForm />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 ring-1 ring-slate-900/10">
                        Wide Range of Options
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Choose Your Cab in Mysore: Sedan, SUV, Tempo Traveller & Bus</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Book the right vehicle for your trip—sedan taxi for couples, SUV cabs for family outstation travel, tempo traveller rentals for groups, and tourist bus booking for events. Best for Mysore to Coorg/Ooty/Wayanad routes and Bangalore airport transfers.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {fleet.map((v) => (
                        <Link key={v.id} href={v.href} className="block">
                          <div className="group rounded-2xl border border-slate-200 bg-[#E5D9B6] p-6 hover:shadow-lg transition-shadow">
                            <div className="relative overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-900/10">
                              <div className="relative h-48">
                                <Image src={v.image} alt={`${v.name} taxi service in Mysore - ${v.desc} available for outstation trips and local sightseeing`} fill className="object-contain p-3" />
                              </div>
                            </div>
                            <div className="mt-4 flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{v.name}</h3>
                                <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
                                <p className="mt-2 text-lg font-bold text-[#FF7444] bg-slate-50 px-4 py-2 rounded-lg inline-block">{v.price}</p>
                              </div>
                              <span className="mt-0.5 inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-900/10">
                                View
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Testimonial Images Gallery */}
                <section className="bg-white py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-200">
                        Happy Customers
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Our Satisfied Customers</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
                        Real moments captured with our customers who trust MM Mysore Travels for their journeys.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {testimonialImages.map((img, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-square ring-1 ring-slate-900/10 hover:shadow-xl transition-all duration-300">
                          <Image 
                            src={img} 
                            alt={`Customer testimonial ${idx + 1} - MM Mysore Travels`} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-slate-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        Popular Destinations
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Popular Outstation Routes from Mysore</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Need an outstation cab from Mysore? Book comfortable taxi service to Coorg, Ooty, Wayanad, Bangalore, and Kodaikanal with experienced drivers, safe travel, and easy WhatsApp confirmation.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                      {destinations.map((dest) => (
                        <Link key={dest.name} href={dest.href} className="group">
                          <div className="relative aspect-square rounded-full overflow-hidden ring-4 ring-slate-200 group-hover:ring-blue-400 transition-all">
                            <Image src={dest.image} alt={`${dest.name} taxi service from Mysore - Travels in Mysore to ${dest.name}`} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                              <span className="text-white font-bold text-center px-2">{dest.name}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 ring-1 ring-slate-900/10">
                        Our Services
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-center text-slate-900">Taxi Services in Mysore (Outstation, Airport, Local & Corporate)</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
                        Share pickup, drop, date, and passengers—get an instant quote and quick confirmation on WhatsApp.
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className="block">
                          <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                              </div>
                              <div className="shrink-0 rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-900/10">
                                <CheckIcon className="w-5 h-5 text-emerald-600" />
                              </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between gap-3">
                              <span className="text-sm font-semibold text-slate-900">{s.meta}</span>
                              <span className="inline-flex items-center justify-center rounded-lg bg-[#FF7444] px-3 py-2 text-xs font-semibold text-white shadow-sm group-hover:bg-[#e85c2d] transition-colors">
                                Explore
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-200">
                        High-Intent Routes
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Popular Taxi Routes from Mysore</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Quick enquiries for the most-booked Mysore taxi routes from Travels in Mysore. Tap WhatsApp to get a rate, vehicle options, and availability in minutes.
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {popularRoutes.map((r) => (
                        <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <h3 className="text-xl font-bold text-slate-900">{r.title}</h3>
                              <p className="mt-2 text-sm text-slate-600">{r.subtitle}</p>
                              <div className="mt-4 inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
                                {r.meta}
                              </div>
                            </div>
                            <div className="shrink-0 rounded-xl bg-emerald-50 p-2.5 ring-1 ring-emerald-200">
                              <CheckIcon className="w-5 h-5 text-emerald-700" />
                            </div>
                          </div>

                          <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link
                              href={r.href}
                              className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                            >
                              View Details
                            </Link>
                            <a
                              href={whatsappFor(r.wa)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                            >
                              WhatsApp Enquiry
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-900/10">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">Need a custom route or multi-stop trip?</h3>
                      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                        Share your itinerary (pickup, drop, stops, date, time, passengers). We’ll recommend the best cab type and send a quick quote.
                      </p>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={whatsappFor("Hi, I need a quote for a taxi from Mysore. Pickup: __, Drop: __, Date/Time: __, Passengers: __, Trip type: one-way/round-trip.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
                        >
                          WhatsApp for Quote
                        </a>
                        <Link
                          href={ROUTES.BOOK_TAXI}
                          className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-100 transition-colors"
                        >
                          Book Online
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-slate-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        Curated Experiences
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Best Tour Packages from Mysore (Car with Driver)</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Explore Mysore tour packages by car including Coorg, Ooty, Wayanad, and Bangalore. Choose one-day sightseeing or multi-day itineraries with comfortable cabs, experienced drivers, and easy booking.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {featuredPackages.map((p) => (
                        <Link key={p.href} href={p.href} className="block">
                          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                            <div className="relative h-44">
                              <Image src={p.image} alt={`${p.title} tour package from Mysore - ${p.meta} trip with taxi services in Mysore`} fill className="object-cover" />
                              <div className="absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-slate-100">{p.meta}</div>
                                  <div className="mt-1 truncate text-lg font-bold text-white">{p.title}</div>
                                </div>
                                <span className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 ring-1 ring-slate-900/10">
                                  Explore
                                </span>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="text-sm text-slate-600">Includes driver, clean vehicle, and itinerary support.</div>
                              <div className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                                View details
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-slate-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        What our customers say
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Trusted Mysore Cab Service Reviews</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
                        Real feedback from customers who booked outstation taxis, airport transfers, and local sightseeing cabs.
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {testimonials.map((t, idx) => (
                        <div key={idx} className="rounded-2xl bg-white p-8 ring-1 ring-slate-900/10 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(t.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-lg">★</span>
                            ))}
                          </div>
                          <p className="text-slate-700 leading-relaxed text-base">&ldquo;{t.text}&rdquo;</p>
                          <div className="mt-6 pt-6 border-t border-slate-200">
                            <div className="font-semibold text-slate-900">{t.name}</div>
                            <div className="text-sm text-slate-600 mt-1">Trip: {t.route}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200 mb-4">
                        Trusted Tour Operator & Organizer in Mysore
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Leading Travels in Mysore for All Your Transportation Needs</h2>
                      <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
                        If you are looking to explore the lovely Mysore, <strong>Travels in Mysore</strong> has got your back. We offer comprehensive <strong>cab and tour packages in Mysore</strong> to ensure you have a seamless journey while you enjoy the city without any hiccups. Our <strong>cabs in Mysore</strong> are driven by professional drivers with extensive knowledge of the region. Through years of driving in these areas, they have explored and discovered hidden gems as well.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h3 className="text-2xl font-bold text-slate-900">Oldest & Most Renowned Travel Agency in Mysore</h3>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          As one of the <strong>oldest and most renowned travel agencies of Mysore</strong>, we at <strong>Travels in Mysore</strong> have continuously improved all our services to meet modern travel needs. We have a dedicated team for <strong>taxi services in Mysore</strong> that ensures all precautionary measures are followed for your safety and comfort.
                        </p>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          We carefully choose hotels with proper sanitization standards and lesser crowds. Our commitment is to offer the <strong>best tour packages and travel experiences in Mysore</strong> with complete peace of mind. With over {BUSINESS_INFO.yearsExperience} of experience, we have established ourselves as one of the top travels in Mysore, serving thousands of satisfied customers.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h3 className="text-2xl font-bold text-slate-900">Complete Taxi Services in Mysore</h3>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          As a full-service travel agency in Mysore, we provide taxi services for every occasion. Whether you need a quick airport transfer, a comfortable outstation cab to Coorg or Ooty, or a multi-day tour package exploring South India&apos;s hill stations, our travels in Mysore service has you covered. We operate 24/7 with transparent pricing starting at just ₹11/km for outstation trips.
                        </p>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          Our Mysore taxi service includes sedans for couples, SUVs for families, tempo travellers for groups, and buses for large gatherings. All vehicles come with <strong>experienced drivers</strong> who know the routes inside out and can guide you to hidden gems, ensuring safe, informative, and timely travel experiences.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h3 className="text-2xl font-bold text-slate-900">Popular Tour Packages from Mysore</h3>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          Our travel agency in Mysore specializes in curated tour packages that showcase the best of South India. The Mysore to Coorg tour package takes you through coffee plantations and waterfalls, while the Mysore to Ooty package lets you experience the Queen of Hill Stations with its tea gardens and scenic railways. Multi-day packages like Mysore-Ooty-Coorg combine multiple destinations for a comprehensive travel experience.
                        </p>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          For those seeking spiritual journeys, we offer Tirupati packages from Mysore. Adventure enthusiasts can book our Goa trips from Mysore covering beaches and nightlife. All tour packages include comfortable accommodation recommendations, driver allowances, and flexible itineraries tailored to your preferences through our travels in Mysore service.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <h3 className="text-2xl font-bold text-slate-900">Airport Transfer & Corporate Services</h3>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          Our airport taxi service from Mysore to Bangalore Kempegowda International Airport ensures punctual pickups with flight tracking technology. We understand the importance of timing for airport transfers and maintain a spotless record for on-time service. Early morning and late-night airport transfers are our specialty, with fixed pricing and no surge charges.
                        </p>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                          Corporate clients benefit from our dedicated taxi services in Mysore with priority booking, GST invoices, monthly billing cycles, and volume discounts. Our professional drivers maintain confidentiality and punctuality for business meetings, conferences, and client pickups. Wedding car rentals in Mysore are also available with decorated vehicles for your special occasions.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 p-10 text-white text-center">
                      <h3 className="text-3xl font-bold">Book the Best Travels in Mysore Today</h3>
                      <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
                        Experience the difference with Karnataka&apos;s most trusted travel agency. Our taxi services in Mysore combine reliability, comfort, and affordability. Whether it&apos;s a local trip or an outstation adventure, MM Mysore Travels is your perfect travel partner.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={ROUTES.BOOK_TAXI} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#FF7444] text-white font-bold text-lg hover:bg-[#e85c2d] transition-colors shadow-lg">
                          Book Taxi Now
                        </Link>
                        <Link href={ROUTES.TOUR_PACKAGES} className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
                          View Tour Packages
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        Why we&apos;re trusted
                      </div>
                      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">Why People Choose Our Mysore Taxi Service</h2>
                      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Reliable cab booking in Mysore with clean vehicles, verified drivers, and on-time pickups for airport, outstation, and local packages.
                      </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          number: "4.9",
                          label: "Average Rating",
                          desc: "Consistently praised for safety and professionalism.",
                          color: "from-yellow-400 to-orange-500",
                        },
                        {
                          number: BUSINESS_INFO.yearsExperience,
                          label: "Years of Service",
                          desc: "Trusted by thousands for reliable travel.",
                          color: "from-blue-400 to-blue-600",
                        },
                        {
                          number: "24/7",
                          label: "Always Available",
                          desc: "Round-the-clock support whenever you need us.",
                          color: "from-emerald-400 to-emerald-600",
                        },
                      ].map((stat, idx) => (
                        <div key={idx} className="rounded-2xl bg-linear-to-br p-8 text-white shadow-lg" style={{ backgroundImage: `linear-gradient(135deg, var(--color-1), var(--color-2))` }}>
                          <div className={`text-5xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</div>
                          <div className="mt-3 text-lg font-semibold text-slate-900">{stat.label}</div>
                          <p className="mt-2 text-slate-700 text-sm">{stat.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { title: "Expert Drivers", desc: "Verified, experienced, and courteous professionals dedicated to safe travel." },
                        { title: "Premium Vehicles", desc: "Well-maintained fleet with regular sanitization and modern comfort." },
                        { title: "Fixed Pricing", desc: "No surge charges, no hidden fees—transparent rates always." },
                        { title: "Quick Confirmation", desc: "Instant booking via app, phone, or WhatsApp in seconds." },
                        { title: "Real Support", desc: "Talk to real people 24/7 for help with changes or concerns." },
                        { title: "On-Time Guarantee", desc: "Punctual pickups and estimated arrivals you can rely on." },
                      ].map((item, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-blue-200 transition-all">
                          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                          <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="bg-slate-900 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                      <h2 className="text-4xl md:text-5xl font-bold">Ready to book your Mysore cab?</h2>
                      <p className="mt-4 text-lg text-slate-300">
                        Book instantly online, confirm your trip on WhatsApp, or call us for airport taxi, outstation cabs, and Mysore local packages. We&apos;re here 24/7.
                      </p>
                      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={ROUTES.BOOK_TAXI} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                          Book Online
                        </Link>
                        <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg">
                          WhatsApp Us
                        </a>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
                          Call {BUSINESS_INFO.phoneDisplay}
                        </a>
                      </div>
                    </div>

                  </div>
                </section>
              </>
            );
          }
