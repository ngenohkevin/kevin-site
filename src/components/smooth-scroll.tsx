"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
