export const site = {
  name: "BIG ACCESS PRIME LTD",
  shortName: "BIG ACCESS",
  tagline: "Driven by Trust, Delivered with Excellence",
  motto: "Access · Opportunity · Excellence",
  rc: "9588168",
  director: "Olalere Saheed Olalekan",
  directorTitle: "Director",
  email: "bigaccessprimeltd@gmail.com",
  phone: "+234 814 542 1506",
  phoneE164: "+2348145421506",
  whatsapp: "2348145421506",
  address: {
    line1: "Ikirun Express Road",
    line2: "Beside Okanlawon Filling Station",
    city: "Ikirun, Osun State",
    country: "Nigeria",
    full: "Ikirun Express Road, Beside Okanlawon Filling Station, Ikirun, Osun State, Nigeria",
  },
  social: {
    instagram: "https://www.instagram.com/bigaccessprimeltd",
    instagramHandle: "@bigaccessprimeltd",
    tiktok: "https://www.tiktok.com/@big.access.prime",
    tiktokHandle: "@big.access.prime",
  },
  description:
    "Premium vehicle solutions, real estate investment, land & property sales, and property management services in Nigeria.",
} as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
