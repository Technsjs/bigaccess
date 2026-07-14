import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, InnerPage, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { images, nigeriaFleet } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium Vehicle Services",
  description:
    "Buy, sell, and source Mercedes-Benz, Toyota Camry, Hilux and more with BIG ACCESS PRIME LTD. Vehicle consultation and procurement across Nigeria.",
  alternates: { canonical: "/vehicles" },
};

const offerings = [
  {
    title: "Vehicle acquisition & sales",
    copy: "We support clients buying or selling passenger, luxury, and commercial vehicles with clear pricing and guided negotiation.",
  },
  {
    title: "Sourcing & procurement",
    copy: "Need a Benz, Camry, Hilux, or another model? We source through trusted channels and present options that fit your brief.",
  },
  {
    title: "Consultation",
    copy: "From budget planning to condition checks and paperwork guidance — we help you decide with confidence before you commit.",
  },
];

const process = [
  "Share your requirements, budget, and timeline",
  "Receive curated options with transparent notes",
  "Inspect, negotiate, and confirm terms",
  "Complete documentation and take delivery",
];

export default function VehiclesPage() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Premium Vehicle Services"
        title="Benz, Camry, Hilux — and more you can trust"
        lead="Buying, selling, sourcing, and procurement for the vehicles Nigerians actually drive — delivered with professionalism and clarity."
        image={images.vehiclesHero.src}
        imageAlt={images.vehiclesHero.alt}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Popular in Nigeria
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy">
              Market-ready vehicles we help you access
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate">
              From executive sedans to durable pickups — we focus on models with
              strong demand, resale value, and everyday usefulness.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {nigeriaFleet.map((car, i) => (
              <Reveal key={car.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
                  {car.label}
                </h3>
                <p className="mt-2 text-sm text-slate">{car.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              What we offer
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy">
              End-to-end automotive support
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
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
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              A clear process from brief to delivery
            </h2>
            <ol className="mt-8 space-y-4">
              {process.map((step, i) => (
                <li key={step} className="flex gap-4 text-white/80">
                  <span className="font-display text-xl text-gold">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={1} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.camry.src}
              alt={images.camry.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Who it&apos;s for
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy">
              Individuals, fleets, and business partners
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              Whether you need a personal Camry or Benz, a Hilux for operations,
              or supply partnerships for inventory — {site.name} provides a
              trusted path into the market.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to source or sell a vehicle?"
        copy="Send your brief on WhatsApp — we’ll respond with next steps."
      />
    </InnerPage>
  );
}
