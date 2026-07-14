import type { Metadata } from "next";
import { InnerPage } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${site.name} website and related service enquiries.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <InnerPage>
      <article className="mx-auto max-w-3xl px-5 py-28 sm:px-8 lg:px-10">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-slate">Last updated: July 14, 2026</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-slate">
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Agreement
            </h2>
            <p className="mt-3">
              By using this website, you agree to these Terms of Use. If you do
              not agree, please do not use the site. This website is operated by{" "}
              {site.name} (RC {site.rc}).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Services information
            </h2>
            <p className="mt-3">
              Content on this website describes our premium vehicle, real
              estate, and partnership services. Information is for general
              guidance and does not constitute a binding offer, valuation, or
              legal advice. Any engagement is confirmed separately through
              direct communication and agreed terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Enquiries & communications
            </h2>
            <p className="mt-3">
              When you contact us by form, WhatsApp, phone, or email, you
              confirm that the details you provide are accurate to the best of
              your knowledge. We may respond using the channel you used or other
              contact details you supply.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Intellectual property
            </h2>
            <p className="mt-3">
              The {site.name} name, logo, and website content are protected.
              You may not copy, redistribute, or use our branding without prior
              written permission, except for personal reference or legitimate
              enquiry about our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Third-party links
            </h2>
            <p className="mt-3">
              Links to Instagram, TikTok, WhatsApp, or other platforms are
              provided for convenience. We are not responsible for the content
              or practices of those third-party services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {site.name} is not liable
              for indirect or consequential losses arising from use of this
              website. Vehicle and property transactions depend on separate
              agreements, inspections, and applicable Nigerian laws.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the Federal Republic of
              Nigeria. Disputes will be handled under that jurisdiction unless
              otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these Terms:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-navy underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
              , {site.phone}, or visit us at {site.address.full}.
            </p>
          </section>
        </div>
      </article>
    </InnerPage>
  );
}
