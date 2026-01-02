# PHASE 3: SEO-FIRST NEXT.JS ARCHITECTURE

**Date**: December 31, 2025  
**Framework**: Next.js 15+ (App Router)  
**Target**: Zero SEO loss + Performance Excellence

---

## 1. PROJECT STRUCTURE

### **Complete Directory Architecture**

```
travelmysore-nextjs/
├── app/
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles
│   ├── not-found.tsx                 # Custom 404
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── book-taxi/
│   │   └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx                  # Services hub
│   │   ├── taxi-services-mysore/
│   │   │   └── page.tsx
│   │   ├── airport-transfer-mysore/
│   │   │   └── page.tsx
│   │   ├── outstation-taxi-mysore/
│   │   │   └── page.tsx
│   │   ├── mysore-sightseeing-taxi/
│   │   │   └── page.tsx
│   │   ├── corporate-cab-mysore/
│   │   │   └── page.tsx
│   │   └── wedding-car-rental-mysore/
│   │       └── page.tsx
│   │
│   ├── destinations/
│   │   ├── page.tsx                  # Destinations hub
│   │   ├── mysore/
│   │   │   └── page.tsx
│   │   ├── coorg/
│   │   │   └── page.tsx
│   │   ├── ooty/
│   │   │   └── page.tsx
│   │   ├── wayanad/
│   │   │   └── page.tsx
│   │   ├── bangalore/
│   │   │   └── page.tsx
│   │   └── kodaikanal/
│   │       └── page.tsx
│   │
│   ├── tour-packages/
│   │   ├── page.tsx                  # Packages hub
│   │   ├── one-day-tours/
│   │   │   ├── page.tsx
│   │   │   ├── mysore-city-tour/
│   │   │   │   └── page.tsx
│   │   │   ├── mysore-to-coorg/
│   │   │   │   └── page.tsx
│   │   │   ├── mysore-to-ooty/
│   │   │   │   └── page.tsx
│   │   │   └── mysore-to-wayanad/
│   │   │       └── page.tsx
│   │   │
│   │   ├── multi-day-tours/
│   │   │   ├── page.tsx
│   │   │   ├── mysore-coorg-wayanad/
│   │   │   │   └── page.tsx
│   │   │   ├── mysore-ooty-coorg/
│   │   │   │   └── page.tsx
│   │   │   ├── mysore-ooty-kodaikanal/
│   │   │   │   └── page.tsx
│   │   │   ├── goa-trips-from-mysore/
│   │   │   │   └── page.tsx
│   │   │   └── tirupati-package-from-mysore/
│   │   │       └── page.tsx
│   │   │
│   │   └── custom-packages/
│   │       └── page.tsx
│   │
│   ├── fleet/
│   │   ├── page.tsx                  # Fleet overview
│   │   ├── sedan/
│   │   │   └── page.tsx
│   │   ├── suv/
│   │   │   └── page.tsx
│   │   ├── tempo-traveller/
│   │   │   └── page.tsx
│   │   └── bus/
│   │       └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   ├── [slug]/
│   │   │   └── page.tsx              # Dynamic blog post
│   │   └── category/
│   │       └── [category]/
│   │           └── page.tsx
│   │
│   ├── pricing/
│   │   └── page.tsx
│   │
│   ├── reviews/
│   │   └── page.tsx
│   │
│   ├── faqs/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts              # Contact form API
│   │   ├── booking/
│   │   │   └── route.ts              # Booking API
│   │   └── sitemap/
│   │       └── route.ts
│   │
│   ├── sitemap.ts                    # Dynamic sitemap
│   └── robots.ts                     # Robots.txt
│
├── components/
│   ├── ui/                           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Form.tsx
│   │   └── Modal.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── seo/
│   │   ├── Breadcrumbs.tsx
│   │   ├── JsonLd.tsx                # Schema markup component
│   │   └── SocialShare.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   ├── TourPackages.tsx
│   │   └── WhyChooseUs.tsx
│   │
│   └── forms/
│       ├── ContactForm.tsx
│       ├── BookingForm.tsx
│       └── QuoteCalculator.tsx
│
├── lib/
│   ├── constants/
│   │   ├── routes.ts                 # All URL paths
│   │   ├── seo-config.ts             # SEO configurations
│   │   ├── schema-templates.ts       # JSON-LD templates
│   │   └── business-info.ts          # NAP + contact info
│   │
│   ├── utils/
│   │   ├── metadata-generator.ts     # Dynamic metadata
│   │   ├── schema-generator.ts       # Dynamic schema
│   │   ├── breadcrumb-generator.ts
│   │   └── seo-helpers.ts
│   │
│   └── data/
│       ├── packages.ts               # Tour package data
│       ├── destinations.ts           # Destination data
│       ├── vehicles.ts               # Fleet data
│       └── testimonials.ts           # Reviews data
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── destinations/
│   │   ├── vehicles/
│   │   ├── tours/
│   │   └── logos/
│   │
│   └── icons/
│       └── favicon.ico
│
├── styles/
│   └── theme.css
│
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS config
├── tsconfig.json                     # TypeScript config
└── package.json
```

---

## 2. URL STRUCTURE & ROUTING STRATEGY

### **🔴 CRITICAL: Preserved URLs (1:1 Mapping)**

```typescript
// lib/constants/routes.ts

export const PRESERVED_URLS = {
  // Homepage
  HOME: '/',
  
  // Core pages
  ABOUT: '/about/',
  CONTACT: '/contact/',
  SERVICES: '/services/',
  
  // One-day tours (CRITICAL - these rank)
  MYSORE_TO_COORG: '/mysore-to-coorg/',
  MYSORE_TO_OOTY: '/mysore-to-ooty/',
  MYSORE_TO_WAYANAD: '/mysore-to-wayanad/',
  MYSORE_ONE_DAY_TOUR: '/mysore-one-day-tour/',
  MYSORE_TO_BANGALORE: '/mysore-to-bangalore/',
  
  // Multi-day packages (CRITICAL)
  MYSORE_COORG_WAYANAD: '/mysore-coorg-wayanad/',
  MYSORE_OOTY_COORG: '/mysore-ooty-coorg/',
  MYSORE_OOTY_KODAIKANAL: '/mysore-ooty-kodaikanal/',
  GOA_TRIPS: '/goa-trips-from-mysore/',
  TIRUPATI_PACKAGE: '/tirupati-package-from-mysore/',
  
  // Booking
  BOOK_TAXI: '/book-taxi/', // Renamed from /get-taxi/
} as const;
```

### **🟢 New URLs (Expansion)**

```typescript
export const NEW_URLS = {
  // Service pages
  TAXI_SERVICES: '/services/taxi-services-mysore/',
  AIRPORT_TRANSFER: '/services/airport-transfer-mysore/',
  OUTSTATION_TAXI: '/services/outstation-taxi-mysore/',
  SIGHTSEEING_TAXI: '/services/mysore-sightseeing-taxi/',
  CORPORATE_CAB: '/services/corporate-cab-mysore/',
  WEDDING_CAR: '/services/wedding-car-rental-mysore/',
  
  // Destination guides
  DEST_MYSORE: '/destinations/mysore/',
  DEST_COORG: '/destinations/coorg/',
  DEST_OOTY: '/destinations/ooty/',
  DEST_WAYANAD: '/destinations/wayanad/',
  DEST_BANGALORE: '/destinations/bangalore/',
  DEST_KODAIKANAL: '/destinations/kodaikanal/',
  
  // Fleet
  FLEET: '/fleet/',
  FLEET_SEDAN: '/fleet/sedan/',
  FLEET_SUV: '/fleet/suv/',
  FLEET_TEMPO: '/fleet/tempo-traveller/',
  FLEET_BUS: '/fleet/bus/',
  
  // Other
  PRICING: '/pricing/',
  REVIEWS: '/reviews/',
  FAQS: '/faqs/',
  BLOG: '/blog/',
} as const;
```

---

## 3. METADATA CONFIGURATION

### **Root Layout Metadata** (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants/business-info';

export const metadata: Metadata = {
  metadataBase: new URL('https://travelmysore.com'),
  
  // Default metadata (fallback for pages without specific metadata)
  title: {
    default: 'Travels in Mysore | MM Mysore Travels - #1 Taxi Service & Tour Packages',
    template: '%s | Travels in Mysore' // For child pages
  },
  
  description: 'Mysore\'s #1 rated travel service (4.9★ from 349+ reviews). Book taxi services, tour packages, and outstation cabs. 15+ years experience. Professional drivers. Transparent pricing. Call +91 96113 53434',
  
  keywords: [
    'travels in mysore',
    'mysore taxi service',
    'mysore tour packages',
    'outstation taxi mysore',
    'mysore to coorg taxi',
    'mysore sightseeing cab',
    'airport taxi mysore',
    'tempo traveller mysore',
    'MM Mysore Travels'
  ],
  
  authors: [{ name: 'MM Mysore Travels' }],
  
  creator: 'MM Mysore Travels',
  publisher: 'MM Mysore Travels',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://travelmysore.com',
    siteName: 'Travels in Mysore',
    title: 'Travels in Mysore | MM Mysore Travels - #1 Taxi & Tour Packages',
    description: 'Mysore\'s #1 rated travel service with 4.9★ rating. Book taxi services, tour packages, outstation cabs. 15+ years experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Travels in Mysore - MM Mysore Travels'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Travels in Mysore | #1 Taxi Service & Tour Packages',
    description: 'Book taxi services and tour packages in Mysore. 4.9★ rated. 15+ years experience. Call +91 96113 53434',
    images: ['/images/twitter-image.jpg'],
  },
  
  // Verification codes
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Additional
  alternates: {
    canonical: 'https://travelmysore.com',
  },
  
  category: 'Travel & Tourism',
};
```

---

### **Dynamic Page Metadata Generator**

```typescript
// lib/utils/metadata-generator.ts

import { Metadata } from 'next';

interface PageMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonicalPath,
  ogImage = '/images/og-image.jpg',
  noIndex = false
}: PageMetadataParams): Metadata {
  const canonical = `https://travelmysore.com${canonicalPath}`;
  
  return {
    title,
    description,
    keywords,
    
    alternates: {
      canonical
    },
    
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    },
    
    robots: {
      index: !noIndex,
      follow: !noIndex
    }
  };
}
```

---

### **Example: Service Page Metadata**

```typescript
// app/mysore-to-coorg/page.tsx

import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata-generator';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mysore to Coorg Taxi | One Day Tour Package ₹4,500 | Book Now',
  description: 'Book Mysore to Coorg taxi for one day tour. Comfortable AC cabs, professional drivers, transparent pricing. Visit Abbey Falls, Raja\'s Seat, coffee estates. Call +91 96113 53434 for instant booking.',
  keywords: [
    'mysore to coorg taxi',
    'mysore coorg one day trip',
    'mysore to coorg cab fare',
    'mysore to madikeri taxi',
    'coorg tour from mysore',
    'one day coorg trip from mysore'
  ],
  canonicalPath: '/mysore-to-coorg/',
  ogImage: '/images/tours/mysore-coorg-og.jpg'
});

export default function MysoreToCooorgPage() {
  // Page component
}
```

---

## 4. RENDERING STRATEGIES

### **Page Type → Rendering Method**

| Page Type | Strategy | Reason | Revalidation |
|-----------|----------|--------|--------------|
| **Homepage** | ISR | Dynamic content, updated weekly | 3600s (1 hour) |
| **Service Pages** | SSG | Static, SEO-critical | Build time |
| **Destination Guides** | SSG | Static, comprehensive | Build time |
| **Tour Packages** | ISR | Pricing may change | 7200s (2 hours) |
| **Blog Posts** | SSG | Static content | Build time |
| **Blog Listing** | ISR | New posts added | 3600s |
| **Contact Page** | SSG | Static form | Build time |
| **Booking Page** | SSR | Real-time availability | Server-side |
| **Fleet Pages** | SSG | Vehicle info static | Build time |
| **Pricing Page** | ISR | Pricing updates | 7200s |
| **Reviews** | ISR | New reviews added | 3600s |

---

### **Implementation Examples**

#### **Static Generation (SSG)**

```typescript
// app/destinations/coorg/page.tsx

import { Metadata } from 'next';

// This page will be statically generated at build time
export const metadata: Metadata = {
  title: 'Coorg Travel Guide 2026 | Best Places, Hotels, Itinerary from Mysore',
  description: 'Complete Coorg travel guide with top attractions, best hotels, food guide, and sample itineraries. Plan your perfect Coorg trip from Mysore with expert tips.',
};

export default function CoorgPage() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

#### **Incremental Static Regeneration (ISR)**

```typescript
// app/tour-packages/one-day-tours/mysore-to-coorg/page.tsx

export const revalidate = 7200; // Revalidate every 2 hours

export default async function MysoreToCooorgTourPage() {
  // Fetch latest pricing data (will be cached for 2 hours)
  const packageData = await getPackageData('mysore-to-coorg');
  
  return (
    <div>
      {/* Render with latest data */}
    </div>
  );
}
```

#### **Server-Side Rendering (SSR)**

```typescript
// app/book-taxi/page.tsx

export const dynamic = 'force-dynamic'; // Force SSR

export default async function BookTaxiPage() {
  // Real-time data on every request
  const availability = await checkVehicleAvailability();
  
  return (
    <div>
      {/* Booking form with real-time data */}
    </div>
  );
}
```

---

## 5. IMAGE OPTIMIZATION

### **Next.js Image Configuration**

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression
  compress: true,
  
  // Production optimizations
  swcMinify: true,
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### **Image Component Usage**

```typescript
// components/sections/Hero.tsx

import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero/mysore-palace.jpg"
        alt="Mysore Palace - Travels in Mysore Tour Packages"
        fill
        priority // Load immediately for LCP
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
```

---

## 6. DYNAMIC SITEMAP GENERATION

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next';
import { PRESERVED_URLS, NEW_URLS } from '@/lib/constants/routes';
import { getAllBlogPosts } from '@/lib/data/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://travelmysore.com';
  
  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Service pages (high priority)
    {
      url: `${baseUrl}${PRESERVED_URLS.MYSORE_TO_COORG}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}${PRESERVED_URLS.MYSORE_TO_OOTY}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}${PRESERVED_URLS.MYSORE_ONE_DAY_TOUR}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add all service pages...
    {
      url: `${baseUrl}${NEW_URLS.DEST_COORG}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... more pages
  ];
  
  // Dynamic blog posts
  const blogPosts = await getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  return [...staticPages, ...blogPages];
}
```

---

## 7. ROBOTS.TXT CONFIGURATION

```typescript
// app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://travelmysore.com/sitemap.xml',
  };
}
```

---

## 8. BREADCRUMB NAVIGATION

```typescript
// components/seo/Breadcrumbs.tsx

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center space-x-2 text-sm"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="text-blue-600 hover:underline"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {items.map((item, index) => (
          <li
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <span className="mx-2 text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span
                itemProp="name"
                className="text-gray-700 font-medium"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                itemProp="item"
                className="text-blue-600 hover:underline"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**Usage:**

```typescript
// app/mysore-to-coorg/page.tsx

import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export default function MysoreToCooorgPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'One Day Tours', href: '/tour-packages/one-day-tours' },
          { label: 'Mysore to Coorg', href: '/mysore-to-coorg' },
        ]}
      />
      {/* Rest of page */}
    </div>
  );
}
```

---

## 9. PERFORMANCE OPTIMIZATIONS

### **Core Web Vitals Targets**

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | • Priority loading for hero images<br>• Font optimization<br>• SSG/ISR for static content |
| **FID** (First Input Delay) | < 100ms | • Minimal JavaScript<br>• Code splitting<br>• Lazy loading |
| **CLS** (Cumulative Layout Shift) | < 0.1 | • Defined image dimensions<br>• Reserved space for ads<br>• Stable font loading |
| **INP** (Interaction to Next Paint) | < 200ms | • Optimized event handlers<br>• Debounced inputs |
| **TTFB** (Time to First Byte) | < 600ms | • Edge deployment (Vercel)<br>• CDN for assets |

### **Font Optimization**

```typescript
// app/layout.tsx

import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### **Code Splitting**

```typescript
// Dynamic imports for heavy components

import dynamic from 'next/dynamic';

// Load map component only when needed
const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  loading: () => <p>Loading map...</p>,
  ssr: false, // Don't render on server
});

// Load reviews lazily
const ReviewsSection = dynamic(() => import('@/components/sections/Reviews'), {
  loading: () => <div>Loading reviews...</div>,
});
```

---

## 10. ANALYTICS & TRACKING

### **Google Analytics 4 Setup**

```typescript
// lib/analytics/gtag.ts

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

```typescript
// app/layout.tsx

import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/analytics/gtag';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
```

### **Event Tracking Examples**

```typescript
// components/forms/BookingForm.tsx

import { event } from '@/lib/analytics/gtag';

export function BookingForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track booking form submission
    event({
      action: 'submit',
      category: 'Booking',
      label: 'Booking Form Submitted',
    });
    
    // Submit form...
  };
  
  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}
```

---

## 11. SECURITY HEADERS

```javascript
// next.config.js

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 12. DEPLOYMENT STRATEGY

### **Vercel Deployment (Recommended)**

**Why Vercel:**
- ✅ Zero-config Next.js deployment
- ✅ Global Edge Network (low latency)
- ✅ Automatic HTTPS
- ✅ Preview deployments for testing
- ✅ Excellent Core Web Vitals scores
- ✅ Image optimization included

**Configuration:**

```json
// vercel.json
{
  "version": 2,
  "regions": ["sin1", "bom1"],
  "build": {
    "env": {
      "NEXT_PUBLIC_GA_ID": "@ga-tracking-id"
    }
  },
  "env": {
    "DATABASE_URL": "@database-url"
  }
}
```

### **Alternative: Cloudflare Pages**

For even better performance in India, consider Cloudflare Pages with their India PoPs.

---

## CONCLUSION

This architecture provides:

✅ **Zero SEO Loss**: Preserved URLs, improved technical SEO  
✅ **Superior Performance**: <2.5s LCP, perfect Core Web Vitals  
✅ **Scalability**: Easy to add new pages/features  
✅ **Maintainability**: Clean structure, TypeScript safety  
✅ **Future-Proof**: Latest Next.js features, ready for growth  

---

**Next Document**: PHASE-4-SCHEMA-TEMPLATES.md
