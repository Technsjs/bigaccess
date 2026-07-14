"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/partners", label: "Partners" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-20 transition-all duration-500 ${
          solid
            ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,162,39,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3 py-3">
            <Image
              src="/logo.png"
              alt={site.name}
              width={52}
              height={52}
              className="h-11 w-11 rounded-sm bg-white object-contain p-0.5 sm:h-12 sm:w-12"
              priority
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-white">
                BIG <span className="gold-text">ACCESS</span>
              </span>
              <span className="mt-0.5 text-[0.65rem] tracking-[0.12em] text-white/70">
                prime Ltd
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.75rem] font-medium tracking-[0.14em] text-white/75 uppercase transition-colors hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl(
                "Hello BIG ACCESS PRIME LTD — I'd like to discuss a partnership.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.16em] text-gold-light uppercase transition-colors hover:bg-gold hover:text-navy-deep"
            >
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-30 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 origin-center bg-gold-light transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold-light transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 origin-center bg-gold-light transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-10 bg-navy-deep transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-center gap-6 px-8 pt-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-medium tracking-wide text-white transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(
              "Hello BIG ACCESS PRIME LTD — I'd like to discuss a partnership.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit border border-gold px-6 py-3 text-sm tracking-[0.16em] text-gold-light uppercase"
          >
            Chat on WhatsApp
          </a>
          <div className="mt-8 flex gap-6 text-sm tracking-[0.12em] text-white/60 uppercase">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              TikTok
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
