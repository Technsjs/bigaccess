import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { images, nigeriaFleet } from "@/lib/images";
import { site, whatsappUrl } from "@/lib/site";

const values = [
  {
    title: "Integrity",
    copy: "Every transaction is guided by honesty and accountability.",
  },
  {
    title: "Professionalism",
    copy: "Disciplined execution, clear communication, and premium delivery.",
  },
  {
    title: "Exceptional Service",
    copy: "We go beyond expectations to protect your time and outcomes.",
  },
  {
    title: "Outstanding Value",
    copy: "Intelligent sourcing and strategies that compound long-term returns.",
  },
];

const partners = [
  "Private investors",
  "Corporate organizations",
  "Vehicle suppliers",
  "Real estate developers",
  "Business associates",
];

const reasons = [
  {
    title: "Trusted approach",
    copy: "Relationships first — built on transparency and proven process.",
  },
  {
    title: "Premium market access",
    copy: "Entry into curated vehicle and property opportunities.",
  },
  {
    title: "Customer satisfaction",
    copy: "A client experience designed for confidence at every stage.",
  },
  {
    title: "Long-term relationships",
    copy: "Partnerships that grow with every successful delivery.",
  },
];

const proof = [
  {
    label: "Registered company",
    value: `RC ${site.rc}`,
  },
  {
    label: "Based in",
    value: "Ikirun, Osun State",
  },
  {
    label: "Led by",
    value: site.director,
  },
  {
    label: "Direct line",
    value: site.phone,
  },
];

const nextSteps = [
  {
    step: "01",
    title: "Reach out",
    copy: "Message us on WhatsApp or email with what you need — vehicle, property, or partnership.",
  },
  {
    step: "02",
    title: "Discovery call",
    copy: "We clarify budget, timeline, and goals so we can source the right opportunity.",
  },
  {
    step: "03",
    title: "Transparent proposal",
    copy: "You receive clear options, process steps, and next actions — no guesswork.",
  },
  {
    step: "04",
    title: "Delivery & follow-through",
    copy: "We execute with professionalism and stay available for long-term partnership.",
  },
];

export default function Home() {
  return (
    <div id="top" className="bg-ivory text-ink">
      <Header />

      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="animate-slow-pan object-cover"
            sizes="100vw"
          />
          <div className="hero-sheen absolute inset-0" />
          <div className="noise absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <p className="animate-fade-in text-[0.7rem] tracking-[0.35em] text-gold-light uppercase">
              {site.motto}
            </p>

            <h1 className="animate-fade-up mt-5 font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.92] font-semibold tracking-tight">
              BIG <span className="gold-text">ACCESS</span>
              <span className="mt-2 block text-[0.42em] font-normal tracking-[0.18em] text-white/85">
                PRIME LTD
              </span>
            </h1>

            <p
              className="animate-fade-up mt-8 max-w-xl font-display text-2xl font-medium text-white/90 sm:text-3xl"
              style={{ animationDelay: "0.15s" }}
            >
              {site.tagline}
            </p>

            <p
              className="animate-fade-up mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
              style={{ animationDelay: "0.28s" }}
            >
              Strategic partnerships in premium vehicles, import &amp; export
              sourcing, real estate investment, and property services across
              Nigeria.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href={whatsappUrl(
                  "Hello BIG ACCESS PRIME LTD — I'd like to discuss an opportunity.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center bg-gold px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-light"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/vehicles"
                className="inline-flex min-h-12 items-center border border-white/35 px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-gold hover:text-gold-light"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {proof.map((item) => (
            <div key={item.label}>
              <p className="text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">
                {item.label}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-navy">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.12),transparent_70%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Company Profile
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              A trusted partner for premium markets
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              {site.name} is dedicated to exceptional services in the purchase,
              sale, sourcing, and management of premium vehicles — including
              import and export facilitation — as well as real estate and
              property investment solutions across Nigeria.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              We believe every transaction is an opportunity to build lasting
              relationships through trust, professionalism, transparency, and
              excellence.
            </p>
            <p className="mt-6 text-sm tracking-[0.08em] text-navy/70">
              Directed by {site.director} · Registered company RC {site.rc}
            </p>
          </Reveal>

          <Reveal
            delay={1}
            className="relative min-h-[22rem] overflow-hidden lg:min-h-[28rem]"
          >
            <Image
              src={images.aboutProperty.src}
              alt={images.aboutProperty.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-navy text-white">
        <div className="gold-rule" />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              What We Do
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Two premium verticals. One standard of excellence.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-2">
            <Reveal className="bg-navy-soft p-8 sm:p-12">
              <div className="relative mb-10 aspect-[16/10] overflow-hidden">
                <Image
                  src={images.mercedes.src}
                  alt={images.mercedes.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display text-3xl font-semibold gold-text">
                Premium Vehicle Services
              </h3>
              <ul className="mt-6 space-y-3 text-white/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Buying and selling of all types of vehicles
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Sourcing Benz, Camry, Hilux & more
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Import &amp; export vehicle facilitation
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Vehicle consultation and procurement
                </li>
              </ul>
              <Link
                href="/vehicles"
                className="mt-8 inline-flex text-[0.75rem] tracking-[0.16em] text-gold-light uppercase underline-offset-4 hover:underline"
              >
                View vehicle services →
              </Link>
            </Reveal>

            <Reveal delay={1} className="bg-navy-deep p-8 sm:p-12">
              <div className="relative mb-10 aspect-[16/10] overflow-hidden">
                <Image
                  src={images.aboutProperty.src}
                  alt={images.aboutProperty.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display text-3xl font-semibold gold-text">
                Real Estate & Property Investment
              </h3>
              <ul className="mt-6 space-y-3 text-white/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Land, bungalow, duplex &amp; lodge deals
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Flats, villas &amp; residential investment
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Property management &amp; commercial contracts
                </li>
              </ul>
              <Link
                href="/real-estate"
                className="mt-8 inline-flex text-[0.75rem] tracking-[0.16em] text-gold-light uppercase underline-offset-4 hover:underline"
              >
                View real estate services →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              Vehicles we commonly source
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Models Nigerians actually buy
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nigeriaFleet.map((car, i) => (
              <Reveal key={car.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={car.src}
                    alt={car.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 font-display text-xl font-semibold">
                  {car.label}
                </p>
                <p className="mt-1 text-sm text-white/65">{car.note}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              href="/vehicles"
              className="mt-10 inline-flex text-[0.75rem] tracking-[0.16em] text-gold-light uppercase underline-offset-4 hover:underline"
            >
              Explore all vehicle services →
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="vision" className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f6f9_0%,#e8edf4_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
                Our Vision
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
                To become a leading and trusted brand in automotive solutions
                and real estate investment.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
                Our Mission
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
                To provide reliable, professional, and transparent services that
                exceed client expectations.
              </h2>
            </Reveal>
          </div>

          <div className="gold-rule my-16" />

          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Core Values
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-navy">
              The principles behind every partnership
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="border-t border-navy/15 pt-6"
              >
                <p className="font-display text-2xl font-semibold text-navy">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {value.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="partnership"
        className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-28"
      >
        <div className="absolute inset-0">
          <Image
            src={images.partnership.src}
            alt={images.partnership.alt}
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              Partnership Opportunity
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for investors, suppliers, developers, and associates ready
              to grow together.
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {partners.map((item, i) => (
              <Reveal key={item} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <p className="border-l border-gold pl-4 text-lg text-white/85">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/partners"
              className="inline-flex text-[0.75rem] tracking-[0.16em] text-gold-light uppercase underline-offset-4 hover:underline"
            >
              Learn how partnerships work →
            </Link>
          </div>

          <div className="mt-20">
            <Reveal>
              <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                Why Partner With Us
              </p>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, i) => (
                <Reveal
                  key={reason.title}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  className="space-y-3"
                >
                  <span className="font-display text-3xl text-gold/80">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {reason.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
              Next Steps
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              A simple path from enquiry to delivery
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((item, i) => (
              <Reveal
                key={item.step}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="border-t border-navy/15 pt-6"
              >
                <p className="font-display text-3xl text-gold">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
              Let&apos;s Connect
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Together, let&apos;s drive value and build lasting relationships.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Whether you&apos;re exploring a vehicle opportunity, a property
              investment, or a strategic alliance — we&apos;re ready to begin
              the conversation.
            </p>
            <div className="mt-10 space-y-5 text-sm text-white/70">
              <p>
                <span className="block text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="mt-1 inline-block text-lg text-white transition-colors hover:text-gold-light"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="block text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-lg text-white transition-colors hover:text-gold-light"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="block text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                  Address
                </span>
                <span className="mt-1 block max-w-sm text-base text-white/85">
                  {site.address.full}
                </span>
              </p>
              <div className="flex flex-wrap gap-5 pt-2">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-[0.12em] text-gold-light uppercase transition-colors hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-[0.12em] text-gold-light uppercase transition-colors hover:text-white"
                >
                  TikTok
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
