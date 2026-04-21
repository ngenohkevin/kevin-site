"use client";

import { LineReveal, Reveal } from "./motion-primitives";

const contacts = [
  { label: "WhatsApp", value: "+254 799 228 645", href: "https://wa.me/254799228645" },
  { label: "Email", value: "ngenohkevin19@gmail.com", href: "mailto:ngenohkevin19@gmail.com" },
  { label: "GitHub", value: "github.com/ngenohkevin", href: "https://github.com/ngenohkevin" },
  { label: "Based In", value: "Eldoret, Kenya" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-cream py-24 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,163,104,0.10) 0%, rgba(201,163,104,0) 60%)",
        }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,163,104,0.08) 0%, rgba(201,163,104,0) 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold mb-8">
            Let&apos;s Talk
          </div>
        </Reveal>

        <LineReveal
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-balance mb-8 md:mb-10 max-w-4xl"
          lines={[
            <span key={0}>Ready to build</span>,
            <span key={1}>
              <span className="italic text-gold">something real?</span>
            </span>,
          ]}
        />

        <Reveal delay={0.2}>
          <p className="text-cream/70 text-base md:text-lg max-w-2xl leading-relaxed font-light mb-12 md:mb-20">
            If you&apos;ve got a project in mind — a website, a store, an app,
            or something custom — I&apos;d love to hear about it. Reach out and
            we&apos;ll set up a free discovery call.
          </p>
        </Reveal>

        {/* CTA row */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-3 mb-16 md:mb-24">
            <a
              href="https://wa.me/254799228645"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gold text-ink font-medium text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Message on WhatsApp
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M13 1L17 5L13 9M17 5H0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
            <a
              href="mailto:ngenohkevin19@gmail.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-3 px-7 py-4 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors text-sm tracking-wide"
            >
              Send an email
            </a>
            <a
              href="/rate-card.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors text-sm tracking-wide"
            >
              Download rate card (PDF)
            </a>
          </div>
        </Reveal>

        {/* contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.05}>
              <div className="border-t border-cream/10 pt-5">
                <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2 font-semibold">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl text-cream hover:text-gold transition-colors inline-block"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-lg md:text-xl text-cream">
                    {c.value}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* footer */}
        <Reveal delay={0.4}>
          <div className="mt-16 md:mt-24 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[9px] tracking-[0.22em] uppercase text-mute-soft">
              Rates valid through Dec 2026 · Subject to annual revision
            </div>
            <div className="text-[9px] tracking-[0.22em] uppercase text-gold font-semibold">
              Kevin Ngenoh · 2026
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
