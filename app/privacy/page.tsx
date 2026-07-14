import type { Metadata } from "next";
import { InnerPage } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}. How we collect and use contact information submitted through our website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InnerPage>
      <article className="mx-auto max-w-3xl px-5 py-28 sm:px-8 lg:px-10">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold-deep uppercase">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate">Last updated: July 14, 2026</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-slate">
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Who we are
            </h2>
            <p className="mt-3">
              {site.name} (RC {site.rc}) operates this website. We are located
              at {site.address.full}. You can contact us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-navy underline-offset-2 hover:underline"
              >
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Information we collect
            </h2>
            <p className="mt-3">
              When you use our contact or partnership forms, we may collect your
              name, email address, partnership interest, and message content. If
              you contact us via WhatsApp, phone, email, Instagram, or TikTok,
              we also process the information you choose to share on those
              channels.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              How we use information
            </h2>
            <p className="mt-3">
              We use enquiry details to respond to your request, provide
              services, follow up on partnership opportunities, and improve how
              we communicate with clients. We do not sell your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Sharing
            </h2>
            <p className="mt-3">
              We may share information with trusted service providers only when
              necessary to operate our business (for example hosting providers),
              or when required by law. Any partners involved in a specific
              transaction will only receive information relevant to that
              engagement, with your awareness as part of the process.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Retention & security
            </h2>
            <p className="mt-3">
              We keep enquiry records for as long as needed to handle your
              request and maintain legitimate business records. We take
              reasonable steps to protect information from unauthorized access,
              though no method of transmission is fully secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Your choices
            </h2>
            <p className="mt-3">
              You may request updates or deletion of your contact details by
              emailing {site.email}. Social platforms (Instagram, TikTok,
              WhatsApp) have their own privacy policies that apply when you use
              those services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Updates
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. The latest
              version will always be available on this page.
            </p>
          </section>
        </div>
      </article>
    </InnerPage>
  );
}
