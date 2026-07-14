import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, InnerPage, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnership Opportunities",
  description:
    "Partner with BIG ACCESS PRIME LTD as a private investor, corporate organization, vehicle supplier, real estate developer, or business associate.",
  alternates: { canonical: "/partners" },
};

const audiences = [
  {
    title: "Private investors",
    copy: "Access curated vehicle and property opportunities with a partner focused on transparency and long-term value.",
  },
  {
    title: "Corporate organizations",
    copy: "Collaborate on fleet needs, commercial property, or structured service arrangements.",
  },
  {
    title: "Vehicle suppliers",
    copy: "Connect inventory with serious buyers through a relationship-led sales and sourcing channel.",
  },
  {
    title: "Real estate developers",
    copy: "Bring projects and land opportunities to qualified partners seeking premium market entry.",
  },
  {
    title: "Business associates",
    copy: "Grow together through referrals, joint deals, and aligned professional networks.",
  },
];

const why = [
  "Trusted, relationship-first approach",
  "Access to premium vehicle and property markets",
  "Customer satisfaction as an operating standard",
  "Transparent processes from enquiry to close",
  "Commitment to long-term partnerships",
];

export default function PartnersPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Partnership"
        title="Grow with a partner built on trust"
        lead="We welcome private investors, corporates, suppliers, developers, and associates who share our standard of professionalism."
        image={images.partnership.src}
        imageAlt={images.partnership.alt}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Who we partner with
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy">
              Opportunities across both of our markets
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item, i) => (
              <Reveal
                key={item.title}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="border-t border-navy/15 pt-6"
              >
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                Why partner with {site.shortName}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                A clearer way to unlock premium deals
              </h2>
              <ul className="mt-8 space-y-4">
                {why.map((item) => (
                  <li key={item} className="flex gap-3 text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={1} className="border border-white/15 p-8 sm:p-10">
              <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                Start today
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                Tell us how you want to work together
              </h3>
              <p className="mt-4 text-white/70">
                Share your profile, inventory, capital interest, or project —
                and we&apos;ll outline a practical next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl(
                    "Hello BIG ACCESS PRIME LTD — I'd like to explore a partnership.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center bg-gold px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-light"
                >
                  WhatsApp Us
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center border border-white/35 px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-gold hover:text-gold-light"
                >
                  Contact Form
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's build lasting value together"
        copy={`${site.name} — RC ${site.rc}. Directed by ${site.director}.`}
      />
    </InnerPage>
  );
}
