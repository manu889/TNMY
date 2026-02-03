import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_INFO } from "@/lib/constants/business-info";
import { 
  LOCAL_BUSINESS_SCHEMA, 
  ORGANIZATION_SCHEMA, 
  WEBSITE_SCHEMA 
} from "@/lib/constants/schema-templates";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travels in Mysore | Travel Agency Mysore | Taxi Services Mysore | MM Mysore Travels",
    template: "%s | MM Mysore Travels",
  },
  description: "Leading travels in Mysore ★ Highly rated travel agency ★ Book taxi services in Mysore & cabs in Mysore, outstation cabs, tour packages to Coorg, Ooty, Wayanad ★ 11+ years experience ★ 24/7 service ★ Call +91 96113 53434",
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
    "mysore tour packages",
    "mysore outstation taxi",
    "best travels in mysore",
    "mysore taxi agency",
    "mysore to coorg taxi",
    "mysore to ooty cab",
    "mysore one day tour",
    "airport taxi mysore",
    "car rental mysore",
    "mysore sightseeing cab",
    "cab services mysore",
    "mysore tour operators",
    "tempo traveller mysore",
    "corporate cab service mysore"
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  metadataBase: new URL(BUSINESS_INFO.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_INFO.url,
    siteName: "Travels in Mysore",
    title: "Travels in Mysore | Best Taxi Services & Tour Packages",
    description: "4.9 rated Mysore travels. Book taxis, tour packages to Coorg, Ooty, Wayanad. 11+ years trusted service.",
    images: [
      {
        url: "/images/hero/hero-bg1.png",
        alt: "Travels in Mysore - Best Taxi & Tour Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travels in Mysore | Best Taxi Services & Tour Packages",
    description: "4.9 rated Mysore travels. Book taxis, tour packages. 11+ years trusted service.",
    images: ["/images/hero/hero-bg1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MM Mysore Travels" />
        
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Global Schemas - Always present on every page */}
        <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 overflow-x-hidden">
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0 pt-[106px]">{children}</main>
        <Footer />
        <MobileBottomBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
