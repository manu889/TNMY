'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-2xl">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-slate-900/10">
          <svg className="h-7 w-7 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10.3 3.3l-8.6 15a2 2 0 001.7 3h17.2a2 2 0 001.7-3l-8.6-15a2 2 0 00-3.4 0z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="text-base md:text-lg text-slate-600 mb-8">
          Please try again. If the issue persists, contact support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm hover:shadow"
          >
            Try again
          </button>
          <a
            href="/"
            className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Go home
          </a>
        </div>
        <div className="mt-12 p-6 bg-white rounded-2xl ring-1 ring-slate-900/10">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Need immediate help?</h2>
          <p className="text-slate-600 mb-5">Our team is available 24/7 to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919611353434"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Call now
            </a>
            <a
              href="https://wa.me/919611353434"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
