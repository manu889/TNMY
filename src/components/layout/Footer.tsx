"use client";

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants/business-info';
import { ROUTES } from '@/lib/constants/routes';
import { useEffect, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [raiseWhatsApp, setRaiseWhatsApp] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaiseWhatsApp(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Travels in Mysore</h3>
            <p className="text-sm mb-4 text-slate-300/90">
              Trusted taxi and tour service in Mysuru. Rated {BUSINESS_INFO.rating.value}/{BUSINESS_INFO.rating.max} with {BUSINESS_INFO.rating.count}+ reviews.
            </p>
            <div className="flex space-x-3">
              <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" 
                 className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/>
                </svg>
              </a>
              <a href={BUSINESS_INFO.social.youtube} target="_blank" rel="noopener noreferrer" 
                 className="hover:text-red-400 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.SERVICES} className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href={ROUTES.TOUR_PACKAGES} className="hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link href={ROUTES.PRICING} className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href={ROUTES.REVIEWS} className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href={ROUTES.BLOG} className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href={ROUTES.CONTACT} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Popular Tours</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.MYSORE_TO_COORG} className="hover:text-white transition-colors">Mysore to Coorg</Link></li>
              <li><Link href={ROUTES.MYSORE_TO_OOTY} className="hover:text-white transition-colors">Mysore to Ooty</Link></li>
              <li><Link href={ROUTES.MYSORE_TO_WAYANAD} className="hover:text-white transition-colors">Mysore to Wayanad</Link></li>
              <li><Link href={ROUTES.MYSORE_ONE_DAY_TOUR} className="hover:text-white transition-colors">Mysore One Day Tour</Link></li>
              <li><Link href={ROUTES.MYSORE_COORG_WAYANAD} className="hover:text-white transition-colors">Mysore Coorg Wayanad</Link></li>
              <li><Link href={ROUTES.MYSORE_OOTY_COORG} className="hover:text-white transition-colors">Mysore Ooty Coorg</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="text-slate-300/90">
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.region} {BUSINESS_INFO.address.postalCode}
              </li>
              <li>
                <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-white ml-2">Privacy Policy</Link> | 
            <Link href="/terms-conditions" className="hover:text-white ml-2">Terms & Conditions</Link>
          </p>
          <p className="mt-2 text-slate-400">
            Serving Mysuru and Karnataka since {BUSINESS_INFO.founded}
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Designed & Developed by{' '}
            <a 
              href="https://hffglobal.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              HFF Global
            </a>
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-all z-50 ring-1 ring-white/10 ${raiseWhatsApp ? "bottom-24" : "bottom-6"}`}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}
