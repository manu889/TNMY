import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";
import { BookingForm } from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book Taxi in Mysore | Online Cab Booking | Best Rates Guaranteed",
  description: "Book your Mysore taxi online. Instant confirmation, transparent pricing, 24/7 service. Outstation cabs, local tours, airport transfers available.",
  keywords: ["book taxi mysore", "cab booking mysore", "online taxi booking", "mysore cab service"],
  alternates: { canonical: "/book-taxi/" },
};

export default function BookTaxiPage() {
  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Book Taxi", href: ROUTES.BOOK_TAXI }]} />
        
        <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-8 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Book Your Taxi in Mysore
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Instant confirmation • Best rates • 24/7 service • Professional drivers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm />
            
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-7 mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why book with us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "✓", title: "Instant Confirmation", desc: "Get booking confirmation within minutes via WhatsApp" },
                  { icon: "✓", title: "Best Price Guarantee", desc: "Transparent pricing with no hidden charges" },
                  { icon: "✓", title: "24/7 Availability", desc: "Book anytime, anywhere - we're always available" },
                  { icon: "✓", title: "Professional Drivers", desc: "Experienced, courteous, Karnataka Tourism approved" },
                  { icon: "✓", title: "Clean Vehicles", desc: "Well-maintained, sanitized AC cabs" },
                  { icon: "✓", title: "Flexible Cancellation", desc: "Easy cancellation policy with full refund" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl ring-1 ring-slate-900/5">
                    <span className="text-emerald-600 text-2xl font-bold">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-7 mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Booking process</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Fill the Form", desc: "Enter your travel details in the booking form above" },
                  { step: "2", title: "Submit via WhatsApp", desc: "Your booking details will be sent to us via WhatsApp" },
                  { step: "3", title: "Get Confirmation", desc: "We'll confirm your booking with cab & driver details" },
                  { step: "4", title: "Enjoy Your Ride", desc: "Driver will arrive on time for a comfortable journey" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Need help?</h3>
              <p className="text-slate-600 mb-5">
                Our customer support team is available 24/7 to assist you with your booking.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="block w-full bg-slate-700 hover:bg-slate-800 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Email
                </a>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-gray-900 mb-3">Popular Services</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: "Mysore to Coorg", href: ROUTES.MYSORE_TO_COORG },
                    { label: "Mysore to Ooty", href: ROUTES.MYSORE_TO_OOTY },
                    { label: "Mysore to Wayanad", href: ROUTES.MYSORE_TO_WAYANAD },
                    { label: "Mysore One Day Tour", href: ROUTES.MYSORE_ONE_DAY_TOUR },
                    { label: "All Services", href: ROUTES.SERVICES },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-blue-600 hover:underline">
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max}</div>
                  <p className="text-center text-sm text-slate-600 mt-1">
                  Based on {BUSINESS_INFO.rating.count}+ Google reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
