"use client";

import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { BookingForm } from "@/components/forms/BookingForm";
import { useState, useEffect } from "react";

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

function HeroImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "/images/tours/Mysore_Tour_Package.jpg",
    "/images/tours/Coorg_Tour_Package.jpg",
    "/images/tours/Ooty_Tour_Package.jpg",
    "/images/tours/Mysore.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Mysore travel destination ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/50" />
    </div>
  );
}



export default function Home() {
  const services = [
    {
      title: "Outstation Taxi",
      desc: "Coorg, Ooty, Wayanad, Bangalore and more with transparent pricing.",
      meta: "Starting from ₹11/km",
      href: ROUTES.OUTSTATION_TAXI,
    },
    {
      title: "Local Sightseeing",
      desc: "Half-day and full-day local packages with flexible stops.",
      meta: "City limits coverage",
      href: ROUTES.SIGHTSEEING_TAXI,
    },
    {
      title: "Airport Transfer",
      desc: "On-time pickup and drop to major airports with clear coordination.",
      meta: "Starting from ₹2,800",
      href: ROUTES.AIRPORT_TRANSFER,
    },
    {
      title: "Tour Packages",
      desc: "Curated itineraries with experienced drivers for family and group travel.",
      meta: "Customizable plans",
      href: ROUTES.TOUR_PACKAGES,
    },
    {
      title: "Corporate Cab",
      desc: "Reliable pickups for teams with professional drivers.",
      meta: "Monthly billing",
      href: ROUTES.CORPORATE_CAB,
    },
    {
      title: "Wedding Car Rental",
      desc: "Premium cars for events with on-time service.",
      meta: "Decor-ready",
      href: ROUTES.WEDDING_CAR,
    },
  ];

  const fleet = [
    { id: "sedan-dzire", name: "Sedan", href: ROUTES.FLEET_SEDAN, desc: "Comfortable 4 seater", image: "/images/vehicles/Dzire.png" },
    { id: "suv-ertiga", name: "SUV", href: ROUTES.FLEET_SUV, desc: "Family trips and luggage", image: "/images/vehicles/Ertiga.png" },
    { id: "suv-innova", name: "Innova", href: ROUTES.FLEET_SUV, desc: "7-seater premium comfort", image: "/images/vehicles/Innova.png" },
    { id: "sedan-etios", name: "Etios", href: ROUTES.FLEET_SEDAN, desc: "Budget-friendly sedan", image: "/images/vehicles/Etios.png" },
    { id: "tempo", name: "Tempo Traveller", href: ROUTES.FLEET_TEMPO, desc: "Group travel 13-17 seater", image: "/images/vehicles/Tempo-Traveller.png" },
    { id: "bus", name: "Bus", href: ROUTES.FLEET_BUS, desc: "Large groups 30+ seater", image: "/images/vehicles/Crysta.webp" },
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
    { name: "Coorg", image: "/images/tours/Coorg.jpg" },
    { name: "Ooty", image: "/images/tours/5.jpg" },
    { name: "Mysore", image: "/images/tours/Mysore_Tour_Package.jpg" },
    { name: "Wayanad", image: "/images/tours/6.jpg" },
    { name: "Bangalore", image: "/images/tours/7.jpg" },
    { name: "Kodaikanal", image: "/images/tours/8.jpg" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      route: "Mysore to Coorg",
      text: "Excellent service! The driver was professional and the car was spotlessly clean. Highly recommend for family trips.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      route: "Airport Transfer",
      text: "Very reliable and punctual. The booking process was smooth and the driver was courteous throughout the journey.",
      rating: 5,
    },
    {
      name: "Arun Patel",
      route: "Outstation - Bangalore",
      text: "Great value for money. Competitive rates and no hidden charges. Will definitely book again!",
      rating: 5,
    },
  ];

            return (
              <>
                <section className="relative overflow-hidden bg-slate-900 border-b border-slate-700 -mt-[72px] pt-[72px]">
                  <HeroImageSlider />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">
                      <div className="pt-2 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10">
                          Rated {BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max} • {BUSINESS_INFO.rating.count}+ reviews
                        </div>
                        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">Book trusted cabs from Mysore</h1>
                        <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-xl drop-shadow mx-auto">
                          Outstation, airport transfers, and local rentals with clean vehicles, experienced drivers, and transparent pricing.
                        </p>

                        <div className="mt-6 space-y-3 max-w-xl mx-auto">
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">Professional verified drivers with local expertise</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">Well-maintained vehicles sanitized before every trip</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">No hidden charges – transparent pricing guaranteed</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 text-white/95">
                            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium drop-shadow">24/7 customer support for booking changes</span>
                          </div>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold ring-1 ring-slate-900/10">
                          <span className="text-blue-700">₹11/km</span>
                          <span className="text-slate-700">starting outstation pricing</span>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                          <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                          >
                            Call {BUSINESS_INFO.phoneDisplay}
                          </a>
                          <a
                            href={BUSINESS_INFO.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                          >
                            WhatsApp
                          </a>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl mx-auto">
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
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Fleet of Cabs Available in Mysore</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Choose from sedans, SUVs, tempo travelers, and buses for your Mysore to Coorg, Ooty, and outstation trips. All vehicles are well-maintained, clean, and driven by professional drivers.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {fleet.map((v) => (
                        <Link key={v.id} href={v.href} className="block">
                          <div className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                            <div className="relative overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-900/10">
                              <div className="relative h-28">
                                <Image src={v.image} alt={v.name} fill className="object-contain p-3" />
                              </div>
                            </div>
                            <div className="mt-4 flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{v.name}</h3>
                                <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
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

                <section className="bg-slate-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        Popular Destinations
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Top Travel Destinations Near Mysore</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Book your cab to reach scenic hill stations and tourist attractions near Mysore. From coffee plantations in Coorg to mountain trails in Ooty and Wayanad, we'll get you there safely.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                      {destinations.map((dest) => (
                        <Link key={dest.name} href="#" className="group">
                          <div className="relative aspect-square rounded-full overflow-hidden ring-4 ring-slate-200 group-hover:ring-blue-400 transition-all">
                            <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
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
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-center text-slate-900">Choose the right cab service</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
                        Share your trip details and get a fast confirmation on WhatsApp.
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
                              <span className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm group-hover:bg-blue-700 transition-colors">
                                Explore
                              </span>
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
                        Curated Experiences
                      </div>
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Tour Packages from Mysore</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
                        Explore popular tour packages from Mysore including Coorg, Ooty, Wayanad, and Bangalore. One-day sightseeing tours and multi-day packages with experienced guides and comfortable transportation included.
                      </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {featuredPackages.map((p) => (
                        <Link key={p.href} href={p.href} className="block">
                          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                            <div className="relative h-44">
                              <Image src={p.image} alt={p.title} fill className="object-cover" />
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
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Customer testimonials</h2>
                      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
                        Real feedback from travelers who trusted us for their journeys.
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
                          <p className="text-slate-700 leading-relaxed text-base">"{t.text}"</p>
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
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 ring-1 ring-blue-200">
                        Why we're trusted
                      </div>
                      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">What Makes Us Different</h2>
                      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Years of experience, proven reliability, and genuine care for your journey.
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
                        <div key={idx} className="rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg" style={{ backgroundImage: `linear-gradient(135deg, var(--color-1), var(--color-2))` }}>
                          <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</div>
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
                      <h2 className="text-4xl md:text-5xl font-bold">Ready for your journey?</h2>
                      <p className="mt-4 text-lg text-slate-300">
                        Book instantly online, confirm on WhatsApp, or call us. We're here 24/7.
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
