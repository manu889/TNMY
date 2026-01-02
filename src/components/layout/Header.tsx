"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FocusEvent, type RefObject } from "react";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { ROUTES } from "@/lib/constants/routes";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomeTop = isHome && !isScrolled;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "tour" | "destinations" | "services">(null);
  const tourMenuRef = useRef<HTMLDivElement | null>(null);
  const destinationsMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return;
    }

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: ROUTES.HOME },
      { label: "About", href: ROUTES.ABOUT },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    []
  );
  const primaryNavLinks = navLinks.slice(0, 2);
  const contactNavLink = navLinks.find((link) => link.label === "Contact") ?? null;
  const mobileNavOrder = useMemo(
    () => [
      { label: "Home", href: ROUTES.HOME },
      { label: "About", href: ROUTES.ABOUT },
      { label: "Services", href: ROUTES.SERVICES },
      { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
      { label: "Destinations", href: ROUTES.DESTINATIONS },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    []
  );

  const tourMenu = useMemo(
    () => ({
      primary: [
        { label: "All Tour Packages", href: ROUTES.TOUR_PACKAGES, description: "Browse all categories" },
        { label: "One Day Tours", href: ROUTES.ONE_DAY_TOURS, description: "Local sightseeing & day trips" },
        { label: "Multi Day Tours", href: ROUTES.MULTI_DAY_TOURS, description: "Coorg, Ooty, Wayanad & more" },
        { label: "Custom Packages", href: ROUTES.CUSTOM_PACKAGES, description: "Build your own itinerary" },
      ],
      featured: [
        { label: "Mysore One Day Tour", href: ROUTES.MYSORE_ONE_DAY_TOUR },
        { label: "Mysore Ooty Coorg", href: ROUTES.MYSORE_OOTY_COORG },
        { label: "Mysore Ooty Kodaikanal", href: ROUTES.MYSORE_OOTY_KODAIKANAL },
        { label: "Tirupati Package", href: ROUTES.TIRUPATI_PACKAGE },
      ],
    }),
    []
  );

  const destinationsMenu = useMemo(
    () => ({
      all: [
        { label: "Mysore", href: ROUTES.DEST_MYSORE },
        { label: "Coorg", href: ROUTES.DEST_COORG },
        { label: "Ooty", href: ROUTES.DEST_OOTY },
        { label: "Wayanad", href: ROUTES.DEST_WAYANAD },
        { label: "Bangalore", href: ROUTES.DEST_BANGALORE },
        { label: "Kodaikanal", href: ROUTES.DEST_KODAIKANAL },
      ],
    }),
    []
  );

  const servicesMenu = useMemo(
    () => ({
      core: [
        { label: "Outstation Taxi", href: ROUTES.OUTSTATION_TAXI, description: "Transparent outstation pricing" },
        { label: "Local Sightseeing", href: ROUTES.SIGHTSEEING_TAXI, description: "Explore Mysore and surrounding cities" },
        { label: "Airport Transfer", href: ROUTES.AIRPORT_TRANSFER, description: "On-time pickup to/from airports" },
      ],
      extra: [
        { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
        { label: "Corporate Cab", href: ROUTES.CORPORATE_CAB },
        { label: "Wedding Car Rental", href: ROUTES.WEDDING_CAR },
      ],
    }),
    []
  );

  function closeDesktopMenuOnBlur(e: FocusEvent<HTMLElement>, menuRef: RefObject<HTMLDivElement | null>) {
    const next = e.relatedTarget as Node | null;
    if (next && menuRef.current?.contains(next)) return;
    setOpenDesktopMenu(null);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isHomeTop
          ? "bg-transparent border-transparent"
          : "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={ROUTES.HOME}
              className={`text-lg sm:text-xl font-bold tracking-tight shrink-0 ${
                isHomeTop ? "text-white drop-shadow-lg" : "text-slate-900"
              }`}
            >
              Travels in Mysore
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname === link.href
                      ? isHomeTop
                        ? "text-white bg-white/30 shadow-md"
                        : "text-blue-700 bg-blue-50"
                      : isHomeTop
                        ? "text-white hover:text-white hover:bg-white/20 drop-shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services mega menu */}
              <div
                ref={servicesMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("services")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("services")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, servicesMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.SERVICES}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.SERVICES)
                      ? isHomeTop
                        ? "text-white bg-white/30 shadow-md"
                        : "text-blue-700 bg-blue-50"
                      : isHomeTop
                        ? "text-white hover:text-white hover:bg-white/20 drop-shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "services"}
                >
                  Services
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "services" && (
                  <div
                    className="absolute left-1/2 top-full mt-2 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 shadow-xl"
                    role="menu"
                    aria-label="Services"
                    onMouseEnter={() => setOpenDesktopMenu("services")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Core services</div>
                        <div className="mt-2 grid gap-2">
                          {servicesMenu.core.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                              <div className="mt-0.5 text-xs text-slate-600">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1 rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Additional offerings</div>
                        <div className="mt-2 grid gap-2">
                          {servicesMenu.extra.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                              <div className="mt-0.5 text-xs text-slate-600">Discover more</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tour Packages mega menu */}
              <div
                ref={tourMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("tour")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("tour")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, tourMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.TOUR_PACKAGES}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.TOUR_PACKAGES)
                      ? isHomeTop
                        ? "text-white bg-white/30 shadow-md"
                        : "text-blue-700 bg-blue-50"
                      : isHomeTop
                        ? "text-white hover:text-white hover:bg-white/20 drop-shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "tour"}
                >
                  Tour Packages
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "tour" && (
                  <div
                    className="absolute left-1/2 top-full mt-2 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Tour Packages"
                    onMouseEnter={() => setOpenDesktopMenu("tour")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-7 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Browse</div>
                        <div className="mt-2 grid gap-2">
                          {tourMenu.primary.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                              <div className="mt-0.5 text-xs text-slate-600">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-5 rounded-xl bg-white p-4 ring-1 ring-slate-900/10">
                        <div className="text-xs font-semibold tracking-wide text-slate-500">Featured</div>
                        <div className="mt-2 grid gap-2">
                          {tourMenu.featured.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                              role="menuitem"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                              <div className="mt-0.5 text-xs text-slate-600">View details & request quote</div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3">
                          <Link
                            href={ROUTES.BOOK_TAXI}
                            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                            onClick={() => setOpenDesktopMenu(null)}
                          >
                            Get a quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Destinations mega menu */}
              <div
                ref={destinationsMenuRef}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu("destinations")}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocusCapture={() => setOpenDesktopMenu("destinations")}
                onBlurCapture={(e) => closeDesktopMenuOnBlur(e, destinationsMenuRef)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDesktopMenu(null);
                }}
              >
                <Link
                  href={ROUTES.DESTINATIONS}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname?.startsWith(ROUTES.DESTINATIONS)
                      ? isHomeTop
                        ? "text-white bg-white/30 shadow-md"
                        : "text-blue-700 bg-blue-50"
                      : isHomeTop
                        ? "text-white hover:text-white hover:bg-white/20 drop-shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "destinations"}
                >
                  Destinations
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {openDesktopMenu === "destinations" && (
                  <div
                    className="absolute left-1/2 top-full mt-2 w-[min(560px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-white p-4 ring-1 ring-slate-900/10 shadow-lg"
                    role="menu"
                    aria-label="Destinations"
                    onMouseEnter={() => setOpenDesktopMenu("destinations")}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-900/10">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-semibold tracking-wide text-slate-500">Popular destinations</div>
                          <div className="mt-1 text-sm font-semibold text-slate-900">Plan your route from Mysore</div>
                        </div>
                        <Link
                          href={ROUTES.DESTINATIONS}
                          className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                          onClick={() => setOpenDesktopMenu(null)}
                          role="menuitem"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {destinationsMenu.all.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors"
                            role="menuitem"
                            onClick={() => setOpenDesktopMenu(null)}
                          >
                            <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                            <div className="mt-0.5 text-xs text-slate-600">Explore details & options</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {contactNavLink && (
                <Link
                  href={contactNavLink.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    pathname === contactNavLink.href
                      ? isHomeTop
                        ? "text-white bg-white/30 shadow-md"
                        : "text-blue-700 bg-blue-50"
                      : isHomeTop
                        ? "text-white hover:text-white hover:bg-white/20 drop-shadow"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {contactNavLink.label}
                </Link>
              )}
            </div>

            <Link
              href={ROUTES.BOOK_TAXI}
              className="hidden lg:inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`lg:hidden inline-flex items-center justify-center rounded-lg border p-2 transition-colors shrink-0 ${
                isHomeTop
                  ? "border-white/60 bg-white/20 text-white hover:bg-white/30 shadow-md"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="grid gap-1">
                {mobileNavOrder.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      pathname?.startsWith(link.href) ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
