import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, InnerPage, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate & Property Services",
  description:
    "Residential and commercial property investment, land and property sales, real estate management, and commercial contracts with BIG ACCESS PRIME LTD.",
  alternates: { canonical: "/real-estate" },
};

const offerings = [
  {
    title: "Residential investment",
    copy: "Identify and acquire residential properties aligned with your goals — whether for living, rental income, or long-term value.",
  },
  {
    title: "Land & property sales",
    copy: "Buy or sell land and built assets with guided due diligence, transparent communication, and professional coordination.",
  },
  {
    title: "Real estate management",
    copy: "Property oversight and management support designed to protect asset performance and tenant relationships.",
  },
  {
    title: "Commercial opportunities",
    copy: "Commercial property opportunities plus general contracts and commercial management for businesses ready to expand.",
  },
];

export default function RealEstatePage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Real Estate & Property"
        title="Property opportunities built on trust"
        lead="From land and residential investment to commercial management — we help partners access and manage property with clarity."
        image={images.realEstateHero.src}
        imageAlt={images.realEstateHero.alt}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Our services
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy">
              Full-spectrum property solutions
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate">
              Serving clients from our base in {site.address.city}, with reach
              for serious investment and development conversations.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {offerings.map((item, i) => (
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

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
            <Image
              src={images.commercialSkyline.src}
              alt={images.commercialSkyline.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={1} className="order-1 lg:order-2">
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Why clients choose us
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
              Local presence. Professional process.
            </h2>
            <ul className="mt-8 space-y-4 text-slate">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Transparent sourcing and acquisition support
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Attention to documentation and client confidence
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Long-term relationship mindset beyond a single deal
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Looking for land, property, or management support?"
        copy="Tell us what you’re aiming for — investment, sale, or management — and we’ll guide the next step."
      />
    </InnerPage>
  );
}
