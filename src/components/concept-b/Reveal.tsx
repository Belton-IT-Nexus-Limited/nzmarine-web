import type { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
};

/**
 * Opacity + translate reveal on mount. Honours prefers-reduced-motion by
 * rendering the final state with no transition, so nothing animates and nothing
 * is hidden from assistive tech or full-page screenshot tooling.
 */
export function Reveal({ children, delay = 0, className }: RevealProps): ReactElement {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1], delay }} // slop-scan-ignore: single opacity+translate enter on mount
    >
      {children}
    </motion.div>
  );
}
