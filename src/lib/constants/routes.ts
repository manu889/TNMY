export const ROUTES = {
  // Core Pages
  HOME: '/',
  ABOUT: '/about/',
  CONTACT: '/contact/',
  BOOK_TAXI: '/book-taxi/',
  SERVICES: '/services/',
  PRICING: '/pricing/',
  REVIEWS: '/reviews/',
  FAQS: '/faqs/',
  
  // Services (New Pages)
  TAXI_SERVICES: '/services/taxi-services-mysore/',
  AIRPORT_TRANSFER: '/services/airport-transfer-mysore/',
  OUTSTATION_TAXI: '/services/outstation-taxi-mysore/',
  SIGHTSEEING_TAXI: '/services/mysore-sightseeing-taxi/',
  CORPORATE_CAB: '/services/corporate-cab-mysore/',
  WEDDING_CAR: '/services/wedding-car-rental-mysore/',
  
  // One-Day Tours (CRITICAL - Preserved URLs)
  MYSORE_TO_COORG: '/tour-packages/mysore-to-coorg/',
  MYSORE_TO_OOTY: '/tour-packages/mysore-to-ooty/',
  MYSORE_TO_WAYANAD: '/tour-packages/mysore-to-wayanad/',
  MYSORE_TO_BANGALORE: '/tour-packages/mysore-to-bangalore/',
  MYSORE_ONE_DAY_TOUR: '/tour-packages/mysore-one-day-tour/',
  
  // Multi-Day Packages (CRITICAL - Preserved URLs)
  MYSORE_COORG_WAYANAD: '/tour-packages/mysore-coorg-wayanad/',
  MYSORE_OOTY_COORG: '/tour-packages/mysore-ooty-coorg/',
  MYSORE_OOTY_KODAIKANAL: '/tour-packages/mysore-ooty-kodaikanal/',
  GOA_TRIPS: '/tour-packages/goa-trips-from-mysore/',
  TIRUPATI_PACKAGE: '/tour-packages/tirupati-package-from-mysore/',
  
  // Tour Package Hubs
  TOUR_PACKAGES: '/tour-packages/',
  ONE_DAY_TOURS: '/tour-packages/one-day-tours/',
  MULTI_DAY_TOURS: '/tour-packages/multi-day-tours/',
  CUSTOM_PACKAGES: '/tour-packages/custom-packages/',
  
  // Destinations
  DESTINATIONS: '/destinations/',
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
  
  // Blog
  BLOG: '/blog/',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[RouteKey];
