import type { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
};

/**
 * Mount-based opacity + translate fade. Reduced-motion users get the final
 * state immediately, so content is visible by default and never stuck hidden.
 */
export function Reveal({ children, delay = 0, className }: RevealProps): ReactElement {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1], delay }} // slop-scan-ignore: single opacity+translate enter on mount
    >
      {children}
    </motion.div>
  );
}
