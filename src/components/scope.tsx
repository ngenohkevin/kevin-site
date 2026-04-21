"use client";

import { LineReveal, Reveal } from "./motion-primitives";

const included = [
  "Custom design — no templates",
  "Responsive across phones, tablets & laptops",
  "Full source code ownership",
  "One round of revisions per milestone",
  "Launch & deployment",
  "30-day post-launch bug fixes",
  "Basic SEO setup",
  "Mobile-friendly by default",
  "Performance optimization",
];

const extras = [
  "Stock or custom photography",
  "Copywriting & content creation",
  "Paid advertising campaigns",
  "Third-party subscriptions",
  "Domain renewals after year 1",
  "Social media management",
  "Ongoing content updates",
  "Advanced SEO campaigns",
  "Custom illustrations or video",
];

export function Scope() {
  return (
    <section
      id="scope"
      className="relative bg-cream text-ink py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-6">
            04 — Scope & Expectations
          </div>
        </Reveal>

        <LineReveal
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance mb-3"
          lines={[
            <span key={0}>
              What you <span className="italic text-gold-deep">get.</span>
            </span>,
          ]}
        />

        <Reveal delay={0.1}>
          <p className="text-ink-mute text-[15px] max-w-xl leading-relaxed font-light">
            Clear expectations from day one. Here&apos;s what&apos;s always
            included in every project, and what&apos;s available as an add-on
            if you need it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-16 md:mt-20">
          <div>
            <Reveal>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold pb-4 mb-4 border-b border-cream-line">
                Always Included
              </div>
            </Reveal>
            <ul>
              {included.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <li className="flex items-start gap-4 py-2.5 text-[14px] text-ink-mute">
                    <span className="text-gold-deep mt-0.5 font-semibold">
                      ✓
                    </span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <div className="text-[10px] tracking-[0.25em] uppercase text-mute font-semibold pb-4 mb-4 border-b border-cream-line">
                Available as Add-ons
              </div>
            </Reveal>
            <ul>
              {extras.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <li className="flex items-start gap-4 py-2.5 text-[14px] text-ink-mute">
                    <span className="text-mute-soft mt-0.5 font-semibold">
                      +
                    </span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20 pt-10 border-t border-cream-line grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-2 font-semibold">
                Payment Terms
              </div>
              <p className="text-[13px] text-mute leading-relaxed">
                50% to start, 50% on delivery. Larger projects billed in milestones.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-2 font-semibold">
                Payment Methods
              </div>
              <p className="text-[13px] text-mute leading-relaxed">
                M-Pesa · Bank transfer · International wire for diaspora clients.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-2 font-semibold">
                Ownership
              </div>
              <p className="text-[13px] text-mute leading-relaxed">
                You own everything we build. Source code, design, content — all yours.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
