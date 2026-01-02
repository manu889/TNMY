import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-2xl">
        <div className="text-8xl font-bold text-slate-900 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-base md:text-lg text-slate-600 mb-8">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ROUTES.HOME}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm hover:shadow"
          >
            Go home
          </Link>
          <Link
            href={ROUTES.CONTACT}
            className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Contact us
          </Link>
        </div>
        <div className="mt-12 p-6 bg-white rounded-2xl ring-1 ring-slate-900/10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Popular pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { label: "Mysore to Coorg", href: ROUTES.MYSORE_TO_COORG },
              { label: "Mysore to Ooty", href: ROUTES.MYSORE_TO_OOTY },
              { label: "Our Services", href: ROUTES.SERVICES },
              { label: "Tour Packages", href: ROUTES.TOUR_PACKAGES },
              { label: "Book Now", href: ROUTES.BOOK_TAXI },
              { label: "About Us", href: ROUTES.ABOUT },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
