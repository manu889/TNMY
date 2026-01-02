export const BUSINESS_INFO = {
  name: 'MM Mysore Travels',
  legalName: 'MM Mysore Travels',
  alternateName: 'Travels in Mysore',
  url: 'https://travelmysore.com',
  
  // Contact
  phone: '+919611353434',
  phoneDisplay: '+91 96113 53434',
  email: 'mmmysoretravels@gmail.com',
  whatsapp: '+919611353434',
  whatsappLink: 'https://wa.me/919611353434',
  
  // Address
  address: {
    street: '#562 1st Floor, 7th Cross, Veene Sheshanna Rd, Subbarayanakere',
    locality: 'Mysuru',
    region: 'Karnataka',
    postalCode: '570024',
    country: 'India',
    countryCode: 'IN'
  },
  
  // Coordinates (for maps)
  geo: {
    latitude: 12.3022,
    longitude: 76.6397
  },
  
  // Social Media
  social: {
    facebook: 'https://www.facebook.com/mmysoretravels',
    instagram: 'https://www.instagram.com/mmysoretravels',
    twitter: 'https://twitter.com/mmysoretravels',
    linkedin: 'https://www.linkedin.com/company/mm-mysore-travels',
    youtube: 'https://www.youtube.com/@mmysoretravels'
  },
  
  // Business Info
  founded: '2009',
  yearsExperience: '15+',
  
  // Reviews
  rating: {
    value: 4.9,
    count: 349,
    max: 5
  },
  
  // Operating Hours
  hours: {
    open: '00:00',
    close: '23:59',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    display: '24/7 Available'
  },
  
  // Services
  services: [
    'Taxi Services in Mysore',
    'Airport Transfer',
    'Outstation Taxi',
    'Tour Packages',
    'One Day Tours',
    'Multi-Day Tours',
    'Wedding Car Rental',
    'Corporate Cab Service'
  ],
  
  // Certifications
  certifications: [
    'Karnataka Tourism Department Approved',
    'Professional Tour Guide Badges'
  ]
} as const;
