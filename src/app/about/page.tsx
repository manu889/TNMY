import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "About MM Mysore Travels | Leading Travel Agency & Taxi Service in Mysore Since 2015",
  description: "Discover why MM Mysore Travels is the most trusted travel agency and taxi service in Mysore. 11+ years experience, 10,000+ happy customers. Book travels in Mysore today!",
  keywords: [
    "top travels in mysore",
    "best travel agency mysore",
    "travels in mysore",
    "travel agency in mysore",
    "travel agency mysore",
    "taxi services in mysore",
    "cabs in mysore",
    "mysore travels",
    "taxi service mysore",
    "mysore taxi agency",
    "best travels in mysore",
    "mysore tour operators",
    "mysore outstation taxi",
    "mm mysore travels"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MM Mysore Travels - Premier Travel Agency in Mysore",
    description: "11+ years of trusted taxi services & tour packages in Mysore. Highly rated travel service.",
    type: "website",
  }
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs items={[{ label: "About Us", href: ROUTES.ABOUT }]} />
          
          {/* Hero Section */}
          <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premier Travel Agency & Taxi Services in Mysore
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Your Trusted Partner for Travels in Mysore Since {BUSINESS_INFO.founded} | 11+ Years Excellence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">{BUSINESS_INFO.rating.value}/5</span>
                <span className="text-blue-100">({BUSINESS_INFO.rating.count}+ Reviews)</span>
              </div>
              <div className="text-blue-100">|</div>
              <div className="font-semibold">10,000+ Happy Travelers</div>
              <div className="text-blue-100">|</div>
              <div className="font-semibold">24/7 Service</div>
            </div>
          </div>

          {/* Who We Are - SEO Optimized */}
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are - Leading Travels in Mysore</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="mb-4">
                <strong>MM Mysore Travels</strong> is the most trusted <strong>travel agency in Mysore</strong> and leading provider of <strong>taxi services in Mysore</strong>. Established in {BUSINESS_INFO.founded}, we have been serving travelers for over {BUSINESS_INFO.yearsExperience} years with exceptional dedication and reliability.
              </p>
              <p className="mb-4">
                As a trusted travel operator, we specialize in providing comprehensive <strong>taxi services in Mysore</strong> including outstation cabs, airport transfers, local sightseeing, corporate transportation, and customized tour packages to Coorg, Ooty, Wayanad, Kodaikanal, and other popular destinations.
              </p>
              <p className="mb-4">
                Our commitment to quality has made us one of the <strong>best travels in Mysore</strong>, earning a remarkable <strong>★{BUSINESS_INFO.rating.value} out of 5 rating</strong> from over <strong>{BUSINESS_INFO.rating.count} satisfied customers</strong>. When you search for &quot;<strong>travels in Mysore</strong>&quot; or &quot;<strong>taxi service Mysore</strong>&quot;, you&apos;re looking for the reliability, safety, and professionalism that MM Mysore Travels delivers every single day.
              </p>
              <p className="mb-4">
                Many customers discover us while searching for &quot;<strong>best travel agency Mysore</strong>&quot;, &quot;<strong>top travels in Mysore</strong>&quot; or reliable &quot;<strong>cabs in Mysore</strong>&quot; for airport, local, and outstation trips.
              </p>
            </div>
          </div>

          {/* Why Choose MM Mysore Travels */}
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Why MM Mysore Travels is the Best Choice for Taxi Services in Mysore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚗",
                  title: "Largest Fleet in Mysore",
                  desc: "From economy sedans to luxury SUVs and tempo travellers - we have the perfect vehicle for every journey and budget."
                },
                {
                  icon: "👨‍✈️",
                  title: "Expert Local Drivers",
                  desc: "Professional, courteous drivers with deep knowledge of Mysore, Karnataka routes, and tourist destinations."
                },
                {
                  icon: "💰",
                  title: "Transparent Pricing",
                  desc: "Clear upfront quotes with no hidden charges. Best rates for outstation taxi services in Mysore."
                },
                {
                  icon: "🌟",
                  title: "4.9★ Customer Rating",
                  desc: "Consistently rated as the best travel agency in Mysore by hundreds of satisfied travelers."
                },
                {
                  icon: "🏆",
                  title: "Tourism Dept Approved",
                  desc: "Professional travel operator with certified and verified drivers."
                },
                {
                  icon: "⏰",
                  title: "24/7 Availability",
                  desc: "Round-the-clock booking and customer support for emergency travel and last-minute trips."
                },
                {
                  icon: "🧼",
                  title: "Clean & Sanitized Vehicles",
                  desc: "All vehicles regularly cleaned, sanitized and maintained to highest hygiene standards."
                },
                {
                  icon: "📱",
                  title: "Easy Online Booking",
                  desc: "Book taxi services in Mysore instantly via website, WhatsApp or phone call."
                },
                {
                  icon: "🎯",
                  title: "On-Time Guarantee",
                  desc: "Punctual pickups and drop-offs. Your schedule is our priority."
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services - SEO Optimized */}
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Taxi Services in Mysore</h2>
            <p className="text-slate-700 mb-6">
              As a full-service <strong>travel agency in Mysore</strong>, we offer complete transportation solutions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Outstation Taxi Services</h3>
                    <p className="text-slate-600">
                      Book <strong>outstation taxi from Mysore</strong> to Coorg, Ooty, Wayanad, Bangalore, Kodaikanal, Goa, and all major destinations. Starting at ₹11/km.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Mysore Local Sightseeing</h3>
                    <p className="text-slate-600">
                      Half-day and full-day <strong>Mysore city taxi service</strong> covering Mysore Palace, Chamundi Hills, Brindavan Gardens, and all major attractions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Airport Transfer Service</h3>
                    <p className="text-slate-600">
                      Reliable <strong>airport taxi service in Mysore</strong> for Bangalore, Coimbatore, Mangalore airports. On-time pickups guaranteed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tour Packages from Mysore</h3>
                    <p className="text-slate-600">
                      Customized <strong>Mysore tour packages</strong> including 1-day trips, multi-day tours, honeymoon packages, and family vacation plans.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Cab Service</h3>
                    <p className="text-slate-600">
                      Professional <strong>corporate taxi service in Mysore</strong> for business travel, employee transport, and corporate events.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Wedding Car Rental</h3>
                    <p className="text-slate-600">
                      Premium <strong>wedding car rental in Mysore</strong> with decorated vehicles and professional chauffeurs for your special day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{BUSINESS_INFO.rating.value}/5</div>
                <div className="text-lg font-semibold mb-2">Customer Rating</div>
                <div className="text-slate-300 text-sm">Based on {BUSINESS_INFO.rating.count}+ verified reviews</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{BUSINESS_INFO.yearsExperience}</div>
                <div className="text-lg font-semibold mb-2">Years of Excellence</div>
                <div className="text-slate-300 text-sm">Trusted by thousands since {BUSINESS_INFO.founded}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Always Available</div>
                <div className="text-slate-300 text-sm">Round-the-clock booking & support</div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/5 p-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Experience the Best Travels in Mysore
            </h2>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Book your taxi service in Mysore today and discover why we&apos;re the most trusted travel agency with 10,000+ happy customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={ROUTES.BOOK_TAXI}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Book Taxi Online
              </Link>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
              >
                WhatsApp: {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
