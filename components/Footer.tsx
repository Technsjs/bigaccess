import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

const explore = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/partners", label: "Partners" },
  { href: "/#contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt={site.name}
              width={64}
              height={64}
              className="h-14 w-14 rounded-sm bg-white object-contain p-1"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em]">
                BIG <span className="gold-text">ACCESS</span>
              </p>
              <p className="mt-1 text-xs tracking-[0.14em] text-white/60">
                prime Ltd · RC {site.rc}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            Premium vehicle solutions (including import &amp; export) and real
            estate investment services — built on trust, professionalism, and
            excellence.
          </p>
          <div className="mt-6 flex gap-5 text-sm text-white/70">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              TikTok
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-light"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.22em] text-gold uppercase">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            {explore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.22em] text-gold uppercase">
            Contact
          </p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
            <p>
              <a
                href={`tel:${site.phoneE164}`}
                className="text-white transition-colors hover:text-gold-light"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-white transition-colors hover:text-gold-light"
              >
                {site.email}
              </a>
            </p>
            <p>{site.address.full}</p>
            <p className="text-white/55">
              {site.director} · {site.directorTitle}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. RC{" "}
            {site.rc}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
