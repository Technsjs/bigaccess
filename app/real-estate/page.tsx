import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, InnerPage, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { images, propertyTypes } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Estate & Property Services",
  description:
    "Land, bungalow, duplex, lodge, villa, and apartment opportunities — plus property management and commercial contracts with BIG ACCESS PRIME LTD.",
  alternates: { canonical: "/real-estate" },
};

const offerings = [
  {
    title: "Land sales & acquisition",
    copy: "Source or sell residential and commercial plots with guided due diligence and clear communication.",
  },
  {
    title: "Homes — bungalow, duplex & more",
    copy: "Buy or sell bungalows, duplexes, flats, villas, and estate homes for living or investment.",
  },
  {
    title: "Lodges & hospitality assets",
    copy: "Support for lodges, guest houses, and short-stay properties seeking buyers, sellers, or partners.",
  },
  {
    title: "Management & commercial contracts",
    copy: "Property management plus general contracts and commercial management for growing portfolios.",
  },
];

export default function RealEstatePage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Real Estate & Property"
        title="Land, homes, lodges — opportunities that fit Nigeria"
        lead="From bare land to bungalows, duplexes, lodges, and commercial assets — we help partners buy, sell, and manage with clarity."
        image={images.realEstateHero.src}
        imageAlt={images.realEstateHero.alt}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Property types
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy">
              Not only high-rises — the properties people actually need
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate">
              Whether you want a plot to build on, a family bungalow, a duplex
              for rental income, or a lodge for hospitality — we work across
              the categories that matter.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((item, i) => (
              <Reveal key={item.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {item.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
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

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
            <Image
              src={images.land.src}
              alt={images.land.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={1} className="order-1 lg:order-2">
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              Why clients choose us
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Nigerian market. Professional process.
            </h2>
            <ul className="mt-8 space-y-4 text-white/75">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Land, homes, and lodges — not only commercial towers
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
        title="Looking for land, a bungalow, duplex, or lodge?"
        copy="Tell us what you’re aiming for — buy, sell, or manage — and we’ll guide the next step."
      />
    </InnerPage>
  );
}
