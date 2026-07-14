/** Central image URLs — swap anytime without hunting through pages. */
export const images = {
  /** Hero: brand atmosphere (vehicles + property), not one exotic car */
  hero: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern city skyline representing opportunity in vehicles and real estate",
  },
  aboutProperty: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern residence representing property investment",
  },
  partnership: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=80",
    alt: "Architectural interior reflecting premium standards",
  },
  realEstateHero: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80",
    alt: "Contemporary home exterior for real estate services",
  },
  commercialSkyline: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    alt: "Commercial skyline for property opportunities",
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
