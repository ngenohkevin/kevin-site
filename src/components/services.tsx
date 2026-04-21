"use client";

import { LineReveal, Reveal } from "./motion-primitives";

type Service = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  bestFor: string;
  price: string;
  priceFrom: boolean;
  timeline: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Landing / Portfolio Site",
    desc: "A clean, one-to-four-page site to establish your online presence.",
    bullets: [
      "Mobile-first custom design",
      "Contact form & social integration",
      "Deployed and ready to launch",
    ],
    bestFor: "Best for personal brands, podcasters, consultants, freelancers.",
    price: "30K",
    priceFrom: true,
    timeline: "1–2 weeks",
  },
  {
    num: "02",
    title: "Business Website",
    desc: "A multi-page site with a CMS so your team can edit content without touching code.",
    bullets: [
      "Up to 8 pages, fully responsive",
      "Editable CMS & content types",
      "SEO setup & Google indexing",
      "WhatsApp and contact integration",
    ],
    bestFor: "Best for SMEs, service businesses, NGOs, schools, churches.",
    price: "90K",
    priceFrom: true,
    timeline: "2–4 weeks",
  },
  {
    num: "03",
    title: "Content Platform",
    desc: "A full content-driven website for creators and media brands publishing regularly.",
    bullets: [
      "Custom CMS tailored to your content",
      "Categories, search, tagging, newsletter",
      "Analytics dashboard included",
      "SEO-optimized for growth",
    ],
    bestFor: "Best for media brands, creators, podcasters, thought leaders.",
    price: "200K",
    priceFrom: true,
    timeline: "4–6 weeks",
  },
  {
    num: "04",
    title: "E-commerce Store",
    desc: "A full online store with product management, cart, checkout, and payment integration.",
    bullets: [
      "Product catalog with variants & categories",
      "M-Pesa + card checkout",
      "Order management dashboard",
      "Customer accounts & order history",
    ],
    bestFor: "Best for retail brands, product businesses, boutiques.",
    price: "280K",
    priceFrom: true,
    timeline: "5–8 weeks",
  },
  {
    num: "05",
    title: "Custom Web App / Dashboard",
    desc: "Custom-built web applications — admin dashboards, internal tools, booking systems, SaaS products.",
    bullets: [
      "Scoped and quoted per project",
      "User accounts & permissions",
      "Custom business logic & workflows",
      "API integrations",
    ],
    bestFor: "Best for businesses with specific operational needs.",
    price: "400K",
    priceFrom: true,
    timeline: "Per project",
  },
  {
    num: "06",
    title: "Native Android App",
    desc: "Native mobile applications built in Kotlin — offline-first, fast, and published to the Play Store.",
    bullets: [
      "Modern Material 3 design",
      "Offline-first architecture",
      "Play Store publishing",
      "Example: Ledga M-Pesa tracker",
    ],
    bestFor: "Best for product businesses, startups, utilities.",
    price: "350K",
    priceFrom: true,
    timeline: "6–12 weeks",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream text-ink py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-6">
            02 — What I Build
          </div>
        </Reveal>

        <LineReveal
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance max-w-4xl"
          lines={[
            <span key={0}>
              Services &amp;{" "}
              <span className="italic text-gold-deep">packages.</span>
            </span>,
          ]}
        />

        <Reveal delay={0.1}>
          <p className="mt-6 text-ink-mute text-[15px] max-w-2xl leading-relaxed font-light">
            Every project is quoted individually based on scope. Prices below
            are starting points — a clear anchor so you know what to expect
            before we talk.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 border-t border-cream-line">
          {services.map((svc, i) => (
            <ServiceRow key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal amount={0.15}>
      <div
        className="group grid grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 border-b border-cream-line hover:bg-cream-soft transition-colors duration-500"
        style={{ transitionDelay: `${index * 0.02}s` }}
      >
        <div className="col-span-2 md:col-span-1 font-serif text-xl md:text-2xl text-gold-deep">
          {service.num}
        </div>

        <div className="col-span-10 md:col-span-7">
          <h3 className="font-serif text-2xl md:text-4xl leading-tight tracking-tightest text-ink mb-3">
            {service.title}
          </h3>
          <p className="text-ink-mute text-[14px] md:text-[15px] leading-relaxed mb-4 max-w-xl">
            {service.desc}
          </p>
          <ul className="space-y-1.5 mb-3">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-[13px] text-mute"
              >
                <span className="text-gold-deep mt-0.5">·</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-mute italic">{service.bestFor}</p>
        </div>

        <div className="col-span-12 md:col-span-4 flex md:justify-end items-start">
          <div className="text-left md:text-right">
            <div className="text-[9px] tracking-[0.22em] uppercase text-mute mb-1.5 font-medium">
              {service.priceFrom ? "From" : "Fixed"}
            </div>
            <div className="font-serif text-2xl md:text-3xl text-ink leading-none whitespace-nowrap">
              <span className="text-base text-gold-deep mr-1">KES</span>
              {service.price}
            </div>
            <div className="text-[11px] text-mute mt-2">
              {service.timeline}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
