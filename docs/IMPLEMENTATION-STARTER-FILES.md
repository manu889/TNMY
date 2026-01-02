# IMPLEMENTATION STARTER FILES

This document provides ready-to-use code snippets to immediately begin development.

---

## 1. PROJECT INITIALIZATION

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest travelmysore-nextjs --typescript --tailwind --app --eslint

cd travelmysore-nextjs

# Install additional dependencies
npm install @tailwindcss/typography @tailwindcss/forms
npm install --save-dev @types/node
```

---

## 2. KEY CONFIGURATION FILES

### **next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  compress: true,
  swcMinify: true,
  
  // 301 Redirects
  async redirects() {
    return [
      {
        source: '/get-taxi/',
        destination: '/book-taxi/',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

### **lib/constants/business-info.ts**

```typescript
export const BUSINESS_INFO = {
  name: 'MM Mysore Travels',
  legalName: 'MM Mysore Travels',
  alternateName: 'Travels in Mysore',
  
  // Contact
  phone: '+919611353434',
  phoneDisplay: '+91 96113 53434',
  email: 'mmmysoretravels@gmail.com',
  whatsapp: '+919611353434',
  
  // Address
  address: {
    street: '#562 1st Floor, 7th Cross, Veene Sheshanna Rd, Subbarayanakere',
    locality: 'Mysuru',
    region: 'Karnataka',
    postalCode: '570024',
    country: 'India',
    countryCode: 'IN'
  },
  
  // Coordinates
  geo: {
    latitude: 12.3022,
    longitude: 76.6397
  },
  
  // Social
  social: {
    facebook: 'https://www.facebook.com/mmysoretravels',
    instagram: 'https://www.instagram.com/mmysoretravels',
    twitter: 'https://twitter.com/mmysoretravels',
    linkedin: 'https://www.linkedin.com/company/mm-mysore-travels',
    youtube: 'https://www.youtube.com/@mmysoretravels'
  },
  
  // Business
  founded: '2009',
  rating: {
    value: 4.9,
    count: 349,
    max: 5
  },
  
  // Hours
  hours: {
    open: '00:00',
    close: '23:59',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
} as const;
```

---

### **lib/constants/routes.ts**

```typescript
export const ROUTES = {
  // Core
  HOME: '/',
  ABOUT: '/about/',
  CONTACT: '/contact/',
  BOOK_TAXI: '/book-taxi/',
  SERVICES: '/services/',
  
  // Services
  TAXI_SERVICES: '/services/taxi-services-mysore/',
  AIRPORT_TRANSFER: '/services/airport-transfer-mysore/',
  OUTSTATION_TAXI: '/services/outstation-taxi-mysore/',
  SIGHTSEEING: '/services/mysore-sightseeing-taxi/',
  
  // One-Day Tours (CRITICAL - Preserve exactly)
  MYSORE_TO_COORG: '/mysore-to-coorg/',
  MYSORE_TO_OOTY: '/mysore-to-ooty/',
  MYSORE_TO_WAYANAD: '/mysore-to-wayanad/',
  MYSORE_TO_BANGALORE: '/mysore-to-bangalore/',
  MYSORE_ONE_DAY: '/mysore-one-day-tour/',
  
  // Multi-Day Packages
  MYSORE_COORG_WAYANAD: '/mysore-coorg-wayanad/',
  MYSORE_OOTY_COORG: '/mysore-ooty-coorg/',
  MYSORE_OOTY_KODAIKANAL: '/mysore-ooty-kodaikanal/',
  GOA_TRIPS: '/goa-trips-from-mysore/',
  TIRUPATI: '/tirupati-package-from-mysore/',
  
  // Destinations
  DEST_MYSORE: '/destinations/mysore/',
  DEST_COORG: '/destinations/coorg/',
  DEST_OOTY: '/destinations/ooty/',
  DEST_WAYANAD: '/destinations/wayanad/',
  
  // Other
  PRICING: '/pricing/',
  REVIEWS: '/reviews/',
  FAQS: '/faqs/',
  BLOG: '/blog/',
  FLEET: '/fleet/',
} as const;
```

---

## 3. REUSABLE COMPONENTS

### **components/seo/JsonLd.tsx**

```typescript
interface JsonLdProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0)
      }}
    />
  );
}
```

---

### **components/seo/Breadcrumbs.tsx**

```typescript
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
        className="flex items-center space-x-2 text-sm text-gray-600"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="hover:text-blue-600"
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
            <span className="mx-2">/</span>
            {index === items.length - 1 ? (
              <span itemProp="name" className="text-gray-900 font-medium">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} itemProp="item" className="hover:text-blue-600">
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

---

### **components/layout/Header.tsx**

```typescript
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants/business-info';
import { ROUTES } from '@/lib/constants/routes';

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              📞 {BUSINESS_INFO.phoneDisplay}
            </a>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-gray-600 hover:text-gray-800"
            >
              ✉️ {BUSINESS_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-700 font-medium">
              {BUSINESS_INFO.rating.value}★ ({BUSINESS_INFO.rating.count}+ Reviews)
            </span>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <Link href={ROUTES.HOME} className="text-2xl font-bold text-blue-600">
              Travels in Mysore
            </Link>
            
            <ul className="hidden md:flex items-center space-x-6">
              <li><Link href={ROUTES.HOME} className="hover:text-blue-600">Home</Link></li>
              <li><Link href={ROUTES.ABOUT} className="hover:text-blue-600">About</Link></li>
              <li><Link href={ROUTES.SERVICES} className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/tour-packages" className="hover:text-blue-600">Tour Packages</Link></li>
              <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
              <li><Link href={ROUTES.BLOG} className="hover:text-blue-600">Blog</Link></li>
              <li><Link href={ROUTES.CONTACT} className="hover:text-blue-600">Contact</Link></li>
              <li>
                <Link 
                  href={ROUTES.BOOK_TAXI} 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
```

---

## 4. SAMPLE PAGE IMPLEMENTATION

### **app/mysore-to-coorg/page.tsx**

```typescript
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LOCAL_BUSINESS_SCHEMA } from '@/lib/constants/schema-templates';
import { ROUTES } from '@/lib/constants/routes';
import { BUSINESS_INFO } from '@/lib/constants/business-info';
import Image from 'next/image';

// Metadata
export const metadata: Metadata = {
  title: 'Mysore to Coorg Taxi | One Day Tour Package ₹4,500 | Book Now',
  description: 'Book Mysore to Coorg taxi for one day tour. Comfortable AC cabs, professional drivers, transparent pricing. Visit Abbey Falls, Raja\'s Seat, coffee estates. Call +91 96113 53434',
  keywords: [
    'mysore to coorg taxi',
    'mysore coorg one day trip',
    'mysore to coorg cab fare',
    'coorg tour from mysore'
  ],
  alternates: {
    canonical: `https://travelmysore.com${ROUTES.MYSORE_TO_COORG}`
  },
  openGraph: {
    title: 'Mysore to Coorg Taxi | One Day Tour ₹4,500',
    description: 'Book comfortable taxi from Mysore to Coorg. Professional drivers, transparent pricing. 4.9★ rated service.',
    url: `https://travelmysore.com${ROUTES.MYSORE_TO_COORG}`,
    images: ['/images/tours/mysore-coorg.jpg'],
  }
};

// Tour Package Schema
const TOUR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Mysore to Coorg One Day Tour Package",
  "description": "Experience the best of Coorg in a single day from Mysore. Visit Abbey Falls, Raja's Seat, Golden Temple, and coffee plantations.",
  "url": `https://travelmysore.com${ROUTES.MYSORE_TO_COORG}`,
  "provider": {
    "@id": "https://travelmysore.com/#business"
  },
  "offers": {
    "@type": "Offer",
    "price": "4500",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristAttraction",
          "name": "Abbey Falls",
          "description": "Waterfall surrounded by coffee plantations"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristAttraction",
          "name": "Raja's Seat",
          "description": "Scenic viewpoint with panoramic valley views"
        }
      }
    ]
  }
};

// FAQ Schema
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the distance from Mysore to Coorg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The distance from Mysore to Coorg is approximately 120 kilometers, taking about 3-3.5 hours by car."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Mysore to Coorg taxi cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A one-day Mysore to Coorg taxi package costs approximately ₹4,500-₹5,800 depending on vehicle type."
      }
    }
  ]
};

export default function MysoreToCooorgPage() {
  return (
    <>
      {/* Schema Markup */}
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      <JsonLd data={TOUR_SCHEMA} />
      <JsonLd data={FAQ_SCHEMA} />
      
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Tour Packages', href: '/tour-packages' },
              { label: 'One Day Tours', href: '/tour-packages/one-day-tours' },
              { label: 'Mysore to Coorg', href: ROUTES.MYSORE_TO_COORG }
            ]}
          />
        </div>
        
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <Image
            src="/images/tours/coorg-hero.jpg"
            alt="Mysore to Coorg Taxi Tour - Abbey Falls and Coffee Plantations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">
                Mysore to Coorg Taxi | One Day Tour Package ₹4,500
              </h1>
              <p className="text-xl mb-6">
                Explore Scotland of India with Professional Drivers & Comfortable Cabs
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                  📞 Call Now: {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Explore the "Scotland of India" with Our Mysore to Coorg One Day Tour</h2>
            
            <p>
              Planning a day trip from Mysore to Coorg? Experience the breathtaking beauty 
              of Karnataka's coffee capital with our comfortable and affordable taxi service. 
              Located just 120 km from Mysore, Coorg (Madikeri) offers stunning waterfalls, 
              lush coffee plantations, ancient temples, and scenic viewpoints – perfect for 
              a memorable one-day excursion.
            </p>
            
            {/* Add more content sections here */}
            
            <h2>Why Choose MM Mysore Travels?</h2>
            <ul>
              <li>🏆 #1 Rated Service (4.9★ from 349+ Reviews)</li>
              <li>🚗 Well-Maintained Fleet (Sedans, SUVs, Tempo Travellers)</li>
              <li>👨‍✈️ Professional Drivers with Local Knowledge</li>
              <li>💰 Transparent Pricing - No Hidden Charges</li>
              <li>📞 24/7 Customer Support</li>
            </ul>
            
            {/* FAQ Section */}
            <h2>Frequently Asked Questions</h2>
            
            <h3>What is the distance from Mysore to Coorg?</h3>
            <p>
              The distance from Mysore to Coorg (Madikeri) is approximately 120 kilometers. 
              The journey takes about 3-3.5 hours by car, depending on traffic and road conditions.
            </p>
            
            <h3>How much does a Mysore to Coorg taxi cost?</h3>
            <p>
              A one-day Mysore to Coorg taxi package costs approximately ₹4,500 for a sedan 
              (4-seater), ₹5,800 for an SUV (6-7 seater), and ₹8,500 for a tempo traveller. 
              This includes driver charges, fuel, parking, and tolls but excludes entry fees and meals.
            </p>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Coorg?</h2>
            <p className="text-xl mb-6">
              Book your Mysore to Coorg taxi now and experience the beauty of Karnataka's coffee country
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100"
            >
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
```

---

## 5. DEPLOYMENT TO VERCEL

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## NEXT STEPS

1. ✅ Review all 7 strategy documents in your workspace
2. ✅ Use these starter files to begin development
3. ✅ Follow the timeline in EXECUTIVE-SUMMARY.md
4. ✅ Implement pages one-by-one using templates from PHASE-5
5. ✅ Test thoroughly before launch
6. ✅ Follow migration checklist from PHASE-6-7

---

**All files ready for immediate implementation with Copilot Pro assistance!**
