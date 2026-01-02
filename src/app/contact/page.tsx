import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Contact Us | Travels in Mysore | 24/7 Customer Support",
  description: `Contact ${BUSINESS_INFO.name} for taxi bookings. Call ${BUSINESS_INFO.phoneDisplay}, WhatsApp, or visit us in Mysuru. 24/7 support available.`,
  keywords: ["contact mysore taxi", "mysore cab contact", "taxi booking mysore"],
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[{ label: "Contact Us", href: ROUTES.CONTACT }]} />
        
        <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-8 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            We're here to help 24/7. Reach out for bookings, inquiries, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.1.7 3.3.8.5.1.8.5.8.9v3.5c0 .5-.4.9-.9.9C10.7 22 2 13.3 2 2.9c0-.5.4-.9.9-.9h3.5c.5 0 .9.3.9.8.1 1.2.4 2.3.8 3.3.2.4.1.9-.2 1.2l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 hover:underline text-lg">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-sm text-slate-600">Available 24/7 for bookings and support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 12c0 4.4-4 8-9 8-1.2 0-2.4-.2-3.5-.6L3 20l1.6-4.1C4.2 14.8 4 13.4 4 12c0-4.4 4-8 9-8s8 3.6 8 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline text-lg"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-sm text-slate-600">Quick response via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-purple-600 hover:underline text-lg break-all">
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-sm text-slate-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 21s7-5 7-11a7 7 0 10-14 0c0 6 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Office address</h3>
                  <p className="text-slate-700">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.region} {BUSINESS_INFO.address.postalCode}<br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Operating hours</h3>
                  <p className="text-slate-700 font-semibold">{BUSINESS_INFO.hours.display}</p>
                  <p className="text-sm text-slate-600">Open all days including holidays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick booking</h2>
            <p className="text-slate-600 mb-6">
              For immediate booking, use one of these quick contact methods:
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-6 rounded-lg font-bold transition-colors shadow-sm hover:shadow"
              >
                Call now: {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 px-6 rounded-lg font-bold transition-colors shadow-sm hover:shadow"
              >
                WhatsApp booking
              </a>
              <a
                href={ROUTES.BOOK_TAXI}
                className="block w-full bg-white hover:bg-slate-50 text-slate-900 text-center py-4 px-6 rounded-lg font-bold transition-colors ring-1 ring-slate-900/10 shadow-sm hover:shadow"
              >
                Online booking form
              </a>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/>
                  </svg>
                </a>
                <a href={BUSINESS_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-xl ring-1 ring-slate-900/5">
              <h3 className="font-bold text-slate-900 mb-2">Customer satisfaction</h3>
              <p className="text-2xl font-bold text-slate-900 mb-1">{BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max}</p>
              <p className="text-sm text-slate-600">Based on {BUSINESS_INFO.rating.count}+ reviews</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl ring-1 ring-slate-900/10 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently asked questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "How do I book a cab?", a: "Call us, WhatsApp, or use our online booking form. We confirm bookings instantly." },
              { q: "What are your payment options?", a: "Cash, UPI, cards accepted. Online payment options available." },
              { q: "Do you provide outstation services?", a: "Yes, we serve all major destinations like Coorg, Ooty, Wayanad, Bangalore, and more." },
              { q: "Are your drivers experienced?", a: "Yes, all drivers are Karnataka Tourism approved with 10+ years experience." },
              { q: "What's your cancellation policy?", a: "Free cancellation up to 2 hours before pickup. Contact us for details." },
              { q: "Do you offer airport transfers?", a: "Yes, we provide reliable airport pickup/drop for Bangalore and Mysore airports." },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl bg-slate-50 ring-1 ring-slate-900/5 p-5">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
