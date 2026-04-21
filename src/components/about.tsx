"use client";

import { LineReveal, Reveal, CountUp } from "./motion-primitives";

const specialties = [
  "Modern, mobile-first websites",
  "Custom content platforms & CMS",
  "E-commerce with M-Pesa & card checkout",
  "Dashboards and internal tools",
  "Native Android applications",
  "Hosting, deployment & long-term support",
];

export function About() {
  return (
    <section
      id="about"
      className="relative bg-cream text-ink py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* section header */}
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-6">
            01 — Who I Am
          </div>
        </Reveal>

        <LineReveal
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest mb-16 md:mb-20 text-balance max-w-5xl"
          lines={[
            <span key={0}>Building for the web</span>,
            <span key={1}>
              <span className="italic text-gold-deep">since 2020.</span>
            </span>,
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* bio */}
          <div className="md:col-span-7 space-y-5 text-ink-mute text-[15px] md:text-base leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                I&apos;m Kevin Ngenoh, a web and software developer based in Eldoret,
                Kenya. For the last five years, I&apos;ve helped clients turn ideas
                into products — websites, content platforms, online stores,
                dashboards, and mobile apps that actually work and actually ship.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                My work spans the full stack: Next.js and React on the frontend,
                Go and Node on the backend, Kotlin for native Android, and
                self-managed infrastructure for hosting and deployment. I care
                about fast sites, clean design, and code that doesn&apos;t break
                six months later.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                I take a small number of projects at a time. Every client gets
                focused attention, a build they&apos;re proud to share, and a
                partner who still picks up the phone after launch.
              </p>
            </Reveal>
          </div>

          {/* stats */}
          <div className="md:col-span-5 space-y-4">
            <Stat delay={0.1} value={5} suffix="+" label="Years Building" />
            <Stat delay={0.2} value={20} suffix="+" label="Products Shipped" />
            <Stat delay={0.3} value={100} suffix="%" label="Custom Built" />
          </div>
        </div>

        {/* specialties */}
        <div className="mt-20 md:mt-24 pt-10 border-t border-cream-line">
          <Reveal>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-8">
              What I Specialize In
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {specialties.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-4 py-4 border-b border-cream-line text-ink text-[15px]">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="text-gold-deep shrink-0">
                    <path
                      d="M11 1L15 5L11 9M15 5H0"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="square"
                    />
                  </svg>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="bg-white border border-cream-line p-6 md:p-7">
        <div className="font-serif text-4xl md:text-5xl text-gold-deep leading-none mb-2">
          <CountUp to={value} suffix={suffix} duration={2} />
        </div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-mute font-medium">
          {label}
        </div>
      </div>
    </Reveal>
  );
}
