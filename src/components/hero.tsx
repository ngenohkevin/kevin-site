"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] bg-ink text-cream overflow-hidden"
    >
      {/* top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-mute-soft font-medium">
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-gold" />
          Kevin Ngenoh · Developer
        </div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-mute-soft font-medium">
          Est. 2020
        </div>
      </div>

      {/* hero */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 px-6 md:px-10 pt-20 md:pt-28 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold mb-6 md:mb-8"
        >
          Rate Card · Portfolio
        </motion.div>

        <h1 className="font-serif font-normal leading-[0.92] tracking-tightest text-cream">
          {["Websites,", "web apps &", "mobile apps."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.25 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {i === 2 ? (
                  <span className="italic text-gold">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="overflow-hidden mt-8 md:mt-10 max-w-xl">
          <motion.p
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-cream/70 font-light leading-relaxed"
          >
            Modern, fast, and reliable digital products — built end-to-end for
            brands, creators, and businesses ready to grow online.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-gold text-ink font-medium text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            Start a project
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="transition-transform group-hover:translate-x-1">
              <path
                d="M13 1L17 5L13 9M17 5H0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a
            href="/rate-card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors text-sm tracking-wide"
          >
            Download rate card
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1V10M7 10L3 6M7 10L11 6M1 13H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* bottom meta */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-8 md:pb-10">
        <div className="border-t border-cream/10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetaItem label="Email" value="ngenohkevin19@gmail.com" />
          <MetaItem label="WhatsApp" value="+254 799 228 645" />
          <MetaItem label="GitHub" value="github.com/ngenohkevin" />
          <MetaItem label="Edition" value="2026" gold />
        </div>
      </div>

      {/* ambient glow */}
      <div
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,163,104,0.12) 0%, rgba(201,163,104,0) 60%)",
        }}
      />
    </section>
  );
}

function MetaItem({
  label,
  value,
  gold,
}: {
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.25em] uppercase text-mute-soft mb-1.5 font-medium">
        {label}
      </div>
      <div
        className={`text-xs md:text-sm truncate ${gold ? "text-gold" : "text-cream"}`}
      >
        {value}
      </div>
    </div>
  );
}
