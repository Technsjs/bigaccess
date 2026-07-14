/** Central image URLs — swap anytime without hunting through pages. */
export const images = {
  /** Hero: modern Lagos — Civic Towers, Lekki (glass high-rise, not aged stock) */
  hero: {
    src: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern Civic Towers in Lekki, Lagos — premium Nigeria skyline",
  },
  aboutProperty: {
    src: "https://images.unsplash.com/photo-1749058388308-744fdc8991ed?auto=format&fit=crop&w=1600&q=80",
    alt: "Victoria Island, Lagos — contemporary waterfront skyline",
  },
  partnership: {
    src: "https://images.unsplash.com/photo-1749058388308-744fdc8991ed?auto=format&fit=crop&w=2200&q=80",
    alt: "Victoria Island, Lagos waterfront skyline",
  },
  realEstateHero: {
    src: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&w=2200&q=80",
    alt: "Modern high-rise towers in Lekki, Lagos, Nigeria",
  },
  commercialSkyline: {
    src: "https://images.unsplash.com/photo-1749058388308-744fdc8991ed?auto=format&fit=crop&w=1600&q=80",
    alt: "Contemporary Lagos waterfront skyline for property opportunities",
  },
  /** Property types we help clients buy, sell, or manage */
  land: {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Open land ready for development or investment",
    label: "Land",
    note: "Plots for residential, commercial, or investment use",
  },
  bungalow: {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern bungalow home exterior",
    label: "Bungalow",
    note: "Single-level homes for family living or rental",
  },
  duplex: {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    alt: "Contemporary duplex-style residence",
    label: "Duplex",
    note: "Two-level homes popular for owners and investors",
  },
  lodge: {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    alt: "Lodge and hospitality-style property",
    label: "Lodge",
    note: "Guest houses, lodges, and short-stay opportunities",
  },
  villa: {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium villa residence",
    label: "Villa / Estate home",
    note: "Higher-end homes for premium buyers",
  },
  apartment: {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    alt: "Residential apartment-style property",
    label: "Flat / Apartment",
    note: "Blocks and units for living or rental income",
  },
  /** Popular Nigeria-market vehicles */
  mercedes: {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
    alt: "Mercedes-Benz sedan — popular premium choice in Nigeria",
    label: "Mercedes-Benz",
    note: "Premium sedans clients trust",
  },
  camry: {
    src: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1600&q=80",
    alt: "Toyota Camry — reliable executive sedan popular in Nigeria",
    label: "Toyota Camry",
    note: "Everyday executive favourite",
  },
  hilux: {
    src: "https://images.unsplash.com/photo-1663641023872-00b4cfae9751?auto=format&fit=crop&w=1600&q=80",
    alt: "Toyota Hilux pickup — durable commercial vehicle popular in Nigeria",
    label: "Toyota Hilux",
    note: "Workhorse for business & fleet",
  },
  vehiclesHero: {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=80",
    alt: "Mercedes-Benz representing premium vehicle sourcing in Nigeria",
  },
} as const;

export const nigeriaFleet = [
  images.mercedes,
  images.camry,
  images.hilux,
] as const;

export const propertyTypes = [
  images.land,
  images.bungalow,
  images.duplex,
  images.lodge,
  images.villa,
  images.apartment,
] as const;
