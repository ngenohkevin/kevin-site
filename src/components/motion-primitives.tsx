"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ---------- Reveal: fade + rise on in-view ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  amount = 0.3,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- LineReveal: split heading into lines that rise in sequence ---------- */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className={cn("overflow-hidden", lineClassName)}>
          <motion.div
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* ---------- UnderlineDraw: gold underline drawing under a label ---------- */
export function UnderlineDraw({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
        style={{ originX: 0 }}
        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gold"
      />
    </span>
  );
}

/* ---------- CountUp: number counter animated on in-view ---------- */
export function CountUp({
  to,
  suffix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) mv.set(to);
  }, [isInView, mv, to]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v) + suffix;
    });
    return () => unsub();
  }, [rounded, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

/* ---------- Parallax: Y translate based on scroll within section ---------- */
export function Parallax({
  children,
  offset = 80,
  className,
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      whileInView={{ y: [-offset, offset] }}
      viewport={{ amount: 0 }}
      transition={{ ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
