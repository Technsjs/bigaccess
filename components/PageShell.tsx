import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden text-white sm:min-h-[62vh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/40" />
        <div className="noise absolute inset-0 opacity-30" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:min-h-[62vh] sm:px-8 sm:pb-16 lg:px-10">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold-light uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}

type InnerPageProps = {
  children: ReactNode;
};

export function InnerPage({ children }: InnerPageProps) {
  return (
    <div className="bg-ivory text-ink">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function CtaBand({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-white/70">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center bg-gold px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-light"
          >
            Contact Us
          </Link>
          <Link
            href="/partners"
            className="inline-flex min-h-12 items-center border border-white/35 px-7 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-gold hover:text-gold-light"
          >
            Partnership
          </Link>
        </div>
      </div>
    </section>
  );
}
