import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bigaccessprimeltd.com"),
  title: {
    default: `${site.name} | Premium Vehicles & Real Estate`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "BIG ACCESS PRIME LTD",
    "premium vehicles Nigeria",
    "real estate investment Osun",
    "property management Ikirun",
    "land and property sales",
    "vehicle sourcing",
    "vehicle import export Nigeria",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/logo.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "color-scheme": "light only",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full light`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}
