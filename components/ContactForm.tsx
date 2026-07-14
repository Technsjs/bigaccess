"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = `Hello BIG ACCESS PRIME LTD\n\nName: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-white/55 uppercase">
            Full name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-white/55 uppercase">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-white/55 uppercase">
          Partnership interest
        </span>
        <select
          name="interest"
          className="w-full border border-white/15 bg-navy-deep px-4 py-3 text-white outline-none transition focus:border-gold"
          defaultValue="Premium Vehicles"
        >
          <option>Premium Vehicles</option>
          <option>Import / Export</option>
          <option>Real Estate Investment</option>
          <option>Property Services</option>
          <option>Strategic Partnership</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-[0.7rem] tracking-[0.16em] text-white/55 uppercase">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold"
          placeholder="Tell us about your opportunity..."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center bg-gold px-8 py-3 text-[0.75rem] font-semibold tracking-[0.18em] text-navy-deep uppercase transition-colors hover:bg-gold-light"
        >
          {sent ? "Opening WhatsApp…" : "Send via WhatsApp"}
        </button>
        <a
          href={`mailto:${site.email}`}
          className="text-sm text-white/65 underline-offset-4 transition-colors hover:text-gold-light hover:underline"
        >
          Or email {site.email}
        </a>
      </div>
    </form>
  );
}
