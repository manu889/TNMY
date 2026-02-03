import { BUSINESS_INFO } from './business-info';

// LocalBusiness Schema (used on all pages)
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${BUSINESS_INFO.url}/#business`,
  "name": BUSINESS_INFO.name,
  "alternateName": BUSINESS_INFO.alternateName,
  "description": "Mysore's highly rated travel service offering taxi services, tour packages, and outstation cabs. 11+ years experience and trusted by thousands of customers.",
  
  "url": BUSINESS_INFO.url,
  "logo": {
    "@type": "ImageObject",
    "url": new URL("/favicon.ico", BUSINESS_INFO.url).toString()
  },
  
  "telephone": BUSINESS_INFO.phone,
  "email": BUSINESS_INFO.email,
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address.street,
    "addressLocality": BUSINESS_INFO.address.locality,
    "addressRegion": BUSINESS_INFO.address.region,
    "postalCode": BUSINESS_INFO.address.postalCode,
    "addressCountry": BUSINESS_INFO.address.countryCode
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS_INFO.geo.latitude,
    "longitude": BUSINESS_INFO.geo.longitude
  },
  
  "areaServed": [
    {
      "@type": "City",
      "name": "Mysuru"
    },
    {
      "@type": "State",
      "name": "Karnataka"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": BUSINESS_INFO.rating.value.toString(),
    "reviewCount": BUSINESS_INFO.rating.count.toString(),
    "bestRating": BUSINESS_INFO.rating.max.toString(),
    "worstRating": "1"
  },
  
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": BUSINESS_INFO.hours.days,
    "opens": BUSINESS_INFO.hours.open,
    "closes": BUSINESS_INFO.hours.close
  }],
  
  "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Bank Transfer",
  "priceRange": "₹₹",
  
  "sameAs": Object.values(BUSINESS_INFO.social)
};

// Organization Schema
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BUSINESS_INFO.url}/#organization`,
  "name": BUSINESS_INFO.name,
  "legalName": BUSINESS_INFO.legalName,
  "url": BUSINESS_INFO.url,
  "logo": {
    "@type": "ImageObject",
    "url": new URL("/favicon.ico", BUSINESS_INFO.url).toString()
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": BUSINESS_INFO.phone,
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
  }],
  "sameAs": Object.values(BUSINESS_INFO.social),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address.street,
    "addressLocality": BUSINESS_INFO.address.locality,
    "addressRegion": BUSINESS_INFO.address.region,
    "postalCode": BUSINESS_INFO.address.postalCode,
    "addressCountry": BUSINESS_INFO.address.countryCode
  }
};

// Website Schema
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BUSINESS_INFO.url}/#website`,
  "url": BUSINESS_INFO.url,
  "name": "Travels in Mysore",
  "description": "Book taxi services and tour packages in Mysore. 4.9★ rated travel service with 11+ years experience.",
  "publisher": {
    "@id": `${BUSINESS_INFO.url}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BUSINESS_INFO.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-IN"
};

// Helper Functions for Dynamic Schema Generation

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

interface TourPackageSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
  itinerary: Array<{
    name: string;
    description: string;
  }>;
  touristType?: string[];
  duration?: string;
}

export const createTourPackageSchema = ({
  name,
  description,
  url,
  image,
  offers,
  itinerary,
  touristType = ["Family", "Couple", "Friends"],
  duration
}: TourPackageSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": `${url}#trip`,
  "name": name,
  "description": description,
  "url": url,
  "image": image,
  "provider": {
    "@id": "https://travelmysore.com/#business"
  },
  "touristType": touristType,
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": itinerary.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": item.name,
        "description": item.description
      }
    }))
  },
  "offers": {
    "@type": "Offer",
    "price": offers.price,
    "priceCurrency": offers.priceCurrency,
    "availability": "https://schema.org/InStock",
    "url": url,
    "validFrom": new Date().toISOString().split('T')[0],
    "seller": {
      "@id": "https://travelmysore.com/#business"
    }
  },
  ...(duration && { "duration": duration })
});

export const createReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date?: string;
  route?: string;
}>) => reviews.map((review, index) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": `${BUSINESS_INFO.url}/#review-${index + 1}`,
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.url}/#business`
  },
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": 5,
    "worstRating": 1
  },
  "reviewBody": review.text,
  ...(review.date && { "datePublished": review.date }),
  ...(review.route && { "description": `Trip: ${review.route}` })
}));

export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  category: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability?: string;
  };
  features?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "brand": product.brand || BUSINESS_INFO.name,
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "price": product.offers.price,
    "priceCurrency": product.offers.priceCurrency || "INR",
    "availability": product.offers.availability || "https://schema.org/InStock",
    "seller": {
      "@id": `${BUSINESS_INFO.url}/#business`
    }
  },
  ...(product.features && {
    "additionalProperty": product.features.map(feature => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    }))
  })
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string[];
  offers?: {
    price: string;
    priceCurrency: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.serviceType,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@id": `${BUSINESS_INFO.url}/#business`
  },
  "areaServed": service.areaServed.map(area => ({
    "@type": "City",
    "name": area
  })),
  ...(service.offers && {
    "offers": {
      "@type": "Offer",
      "price": service.offers.price,
      "priceCurrency": service.offers.priceCurrency || "INR",
      "seller": {
        "@id": `${BUSINESS_INFO.url}/#business`
      }
    }
  }),
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": BUSINESS_INFO.url,
    "servicePhone": BUSINESS_INFO.phone
  }
});
