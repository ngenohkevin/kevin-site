"use client";

import { LineReveal, Reveal } from "./motion-primitives";

const addons = [
  ["Domain registration & setup", "KES 3,500"],
  ["Hosting setup (VPS)", "KES 15,000 one-time"],
  ["Monthly maintenance & support", "KES 10,000 – 25,000/mo"],
  ["SEO package — keywords, on-page, tracking", "From KES 40,000"],
  ["CMS training session (1 hour)", "KES 5,000"],
  ["Logo & brand identity", "From KES 20,000"],
  ["Rush delivery (faster than quoted)", "+30%"],
];

const steps = [
  {
    num: "1",
    title: "Discovery Call",
    desc: "Free 30-minute call to talk through your idea, goals, and budget.",
  },
  {
    num: "2",
    title: "Proposal & Quote",
    desc: "Within 48 hours, a clear scope, timeline, and fixed quote.",
  },
  {
    num: "3",
    title: "50% Deposit",
    desc: "Approve the proposal, send the deposit, and I block time for your project.",
  },
  {
    num: "4",
    title: "Design & Build",
    desc: "Progress shared at milestones. One round of revisions included at each stage.",
  },
  {
    num: "5",
    title: "Launch",
    desc: "Deploy, train you on the CMS, and hand over everything — code included.",
  },
  {
    num: "6",
    title: "30 Days Support",
    desc: "Bugs and small tweaks after launch are on me. Retainer after that if needed.",
  },
];

export function Extras() {
  return (
    <section
      id="extras"
      className="relative bg-cream-soft text-ink py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Add-ons */}
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-6">
            03 — Add-Ons & Extras
          </div>
        </Reveal>

        <LineReveal
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance mb-3"
          lines={[
            <span key={0}>
              The <span className="italic text-gold-deep">extras.</span>
            </span>,
          ]}
        />

        <Reveal delay={0.1}>
          <p className="text-ink-mute text-[15px] max-w-xl leading-relaxed font-light">
            Optional services that can be added to any project, before or after launch.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {addons.map(([name, price], i) => (
            <Reveal key={name} delay={i * 0.04}>
              <div className="flex justify-between items-baseline py-4 md:py-5 border-b border-cream-line">
                <span className="text-[14px] md:text-[15px] text-ink">{name}</span>
                <span className="text-[14px] md:text-[15px] text-gold-deep font-medium whitespace-nowrap ml-4">
                  {price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-6">
              How We Work
            </div>
          </Reveal>

          <LineReveal
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance mb-12 md:mb-16"
            lines={[
              <span key={0}>
                My <span className="italic text-gold-deep">process.</span>
              </span>,
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.07}>
                <div className="bg-white border border-cream-line p-6 md:p-7 h-full">
                  <div className="font-serif text-4xl md:text-5xl text-gold leading-none mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-semibold text-ink mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-mute leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
