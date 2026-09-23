"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (used above the fold). */
  immediate?: boolean;
}

const visible = { opacity: 1, y: 0 };

/**
 * Subtle fade-and-rise reveal. Transform is dropped automatically for users
 * who prefer reduced motion (see MotionProvider).
 */
export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const trigger = immediate
    ? { animate: visible }
    : { whileInView: visible, viewport: { once: true, margin: "0px 0px -64px 0px" } };

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...trigger}
    >
      {children}
    </m.div>
  );
}
