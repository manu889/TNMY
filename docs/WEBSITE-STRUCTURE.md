# MM Mysore Travels - Website Structure

## Root Directory Structure
```
MM/
├── docs/                              # Documentation files
│   ├── EXECUTIVE-SUMMARY.md
│   ├── IMPLEMENTATION-STARTER-FILES.md
│   ├── PHASE-1-EXISTING-SITE-ANALYSIS.md
│   ├── PHASE-2-COMPETITOR-ANALYSIS.md
│   ├── PHASE-3-NEXTJS-ARCHITECTURE.md
│   ├── PHASE-4-SCHEMA-TEMPLATES.md
│   ├── PHASE-5-PAGE-TEMPLATES.md
│   └── PHASE-6-7-MIGRATION-REDIRECT-PLAN.md
│
├── public/                            # Static assets
│   └── images/
│       ├── destinations/
│       ├── hero/
│       ├── tours/
│       └── vehicles/
│
├── src/                               # Source code
│   ├── app/                          # Next.js App Router pages
│   ├── components/                   # React components
│   └── lib/                          # Utilities and constants
│
├── eslint.config.mjs                 # ESLint configuration
├── next-env.d.ts                     # Next.js TypeScript declarations
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies
├── postcss.config.mjs                # PostCSS configuration
├── README.md                         # Project readme
└── tsconfig.json                     # TypeScript configuration
```

## Source Code Structure (src/)

### 1. App Directory (src/app/)
**Main Website Pages:**
- `page.tsx` - Homepage
- `layout.tsx` - Root layout
- `globals.css` - Global styles
- `error.tsx` - Error page
- `not-found.tsx` - 404 page
- `robots.ts` - Robots.txt generator
- `sitemap.ts` - Sitemap generator

#### A. Static Pages
```
src/app/
├── about/page.tsx                    # About MM Mysore Travels
├── blog/page.tsx                     # Blog listing
├── book-taxi/page.tsx                # Booking form page
├── contact/page.tsx                  # Contact information
├── faqs/page.tsx                     # Frequently asked questions
├── pricing/page.tsx                  # Pricing information
├── privacy-policy/page.tsx           # Privacy policy
├── reviews/page.tsx                  # Customer reviews
└── terms-conditions/page.tsx         # Terms and conditions
```

#### B. Destinations Section
```
src/app/destinations/
├── page.tsx                          # Destinations hub
├── bangalore/page.tsx                # Bangalore destination
├── coorg/page.tsx                    # Coorg destination
├── kodaikanal/page.tsx               # Kodaikanal destination
├── mysore/page.tsx                   # Mysore destination
├── ooty/page.tsx                     # Ooty destination
└── wayanad/page.tsx                  # Wayanad destination
```

#### C. Fleet Section
```
src/app/fleet/
├── page.tsx                          # Fleet overview
├── sedan/page.tsx                    # Sedan vehicles (4 seater)
├── suv/page.tsx                      # SUV vehicles (6-7 seater)
├── bus/page.tsx                      # Bus rentals
└── tempo-traveller/page.tsx          # Tempo Traveller (12-17 seater)
```

#### D. Services Section
```
src/app/services/
├── page.tsx                          # Services hub/overview
├── airport-transfer-mysore/          # Airport pickup/drop services
│   └── page.tsx                      # ✅ RECENTLY UPDATED (vehicle-based pricing)
├── corporate-cab-mysore/             # Corporate taxi services
│   └── page.tsx
├── mysore-sightseeing-taxi/          # Local sightseeing tours
│   └── page.tsx
├── outstation-taxi-mysore/           # Outstation cab services
│   └── page.tsx
├── taxi-services-mysore/             # General taxi services
│   └── page.tsx                      # ✅ RECENTLY UPDATED (full content added)
└── wedding-car-rental-mysore/        # Wedding car rentals
    └── page.tsx
```

#### E. Tour Packages Section
```
src/app/tour-packages/
├── layout.tsx                        # Tour packages layout
├── page.tsx                          # Tour packages listing
├── TourPackagesClient.tsx            # Client-side tour logic
│
├── custom-packages/                  # Customized tour packages
│   └── page.tsx
├── goa-trips-from-mysore/            # Goa tour packages
│   └── page.tsx
├── multi-day-tours/                  # Multi-day tour packages
│   └── page.tsx
├── one-day-tours/                    # Single day tours
│   └── page.tsx
│
├── mysore-coorg-wayanad/             # 3-destination combo tour
│   └── page.tsx
├── mysore-one-day-tour/              # Mysore city tour
│   └── page.tsx
├── mysore-ooty-coorg/                # 3-destination tour
│   └── page.tsx
├── mysore-ooty-kodaikanal/           # 3-hill station tour
│   └── page.tsx
│
├── mysore-to-bangalore/              # ⚠️ MINIMAL CONTENT (needs expansion)
│   └── page.tsx
├── mysore-to-coorg/                  # Detailed Coorg tour
│   └── page.tsx
├── mysore-to-ooty/                   # Detailed Ooty tour
│   └── page.tsx
├── mysore-to-wayanad/                # Detailed Wayanad tour
│   └── page.tsx
│
└── tirupati-package-from-mysore/     # Tirupati pilgrimage tour
    └── page.tsx
```

### 2. Components Directory (src/components/)
```
src/components/
├── forms/
│   └── BookingForm.tsx               # Taxi booking form
│
├── layout/
│   ├── Header.tsx                    # Site header/navigation
│   ├── Footer.tsx                    # Site footer
│   └── MobileBottomBar.tsx           # Mobile bottom navigation
│
├── sections/                         # Homepage sections (empty)
│
├── seo/
│   ├── Breadcrumbs.tsx               # Breadcrumb navigation
│   └── JsonLd.tsx                    # Structured data component
│
└── ui/
    └── ScrollToTop.tsx               # Scroll to top button
```

### 3. Library Directory (src/lib/)
```
src/lib/
├── constants/
│   ├── business-info.ts              # Business contact info, hours, etc.
│   ├── routes.ts                     # Route constants (URLs)
│   └── schema-templates.ts           # Schema.org templates
│
├── data/                             # Data files (currently empty)
│
└── utils/                            # Utility functions (currently empty)
```

## Key Files by Purpose

### Configuration Files
- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - Code linting rules
- `postcss.config.mjs` - CSS processing
- `package.json` - Dependencies and scripts

### SEO & Meta Files
- `robots.ts` - Search engine crawler instructions
- `sitemap.ts` - XML sitemap generation
- `JsonLd.tsx` - Structured data (Schema.org)
- `metadata` objects in each page.tsx

### Business Logic
- `business-info.ts` - Company details
- `routes.ts` - URL constants
- `schema-templates.ts` - SEO schema generators

## Route Patterns

### Static Routes (Fixed URLs)
```
/ (homepage)
/about
/contact
/services
/fleet
/tour-packages
/destinations
/pricing
/faqs
/reviews
```

### Dynamic Routes (SEO-friendly slugs)
```
/services/[service-name]              # e.g., /services/airport-transfer-mysore
/fleet/[vehicle-type]                 # e.g., /fleet/sedan
/destinations/[destination]           # e.g., /destinations/coorg
/tour-packages/[package-name]         # e.g., /tour-packages/mysore-to-ooty
```

## Current Issues Identified

### Pages with Minimal Content (Need Expansion):
1. ⚠️ **mysore-to-bangalore** - Only header, no itinerary or details
2. Other tour packages may need content review

### Recently Fixed:
1. ✅ **airport-transfer-mysore** - Added vehicle-based pricing
2. ✅ **taxi-services-mysore** - Added comprehensive content

## Recommended Content Structure for Tour Package Pages

Based on well-implemented pages like `mysore-to-coorg`, each tour package should include:

1. **Hero Section** - Title, description, key stats (distance, duration, price, availability)
2. **About Section** - Destination overview
3. **Detailed Itinerary** - Timeline with attractions and activities
4. **Tour Highlights** - Key features in grid format
5. **What's Included/Excluded** - Package details
6. **Pricing Section** - Vehicle options with rates
7. **Best Time to Visit** - Seasonal recommendations
8. **Places to Visit** - Attraction details
9. **FAQ Section** - Common questions
10. **Booking CTA** - WhatsApp and online booking buttons
11. **Schema.org JSON-LD** - Tour package and FAQ structured data

---

**Last Updated:** January 29, 2026
**Total Pages:** ~50+ pages across all sections
