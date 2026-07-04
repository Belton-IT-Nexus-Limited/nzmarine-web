import type { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type JoinRevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
};

/**
 * Mount-based opacity + translate reveal. Content is visible by default: with
 * reduced motion it renders the final state immediately with no transition, so
 * nothing is ever stuck at opacity:0 or hidden from assistive tech.
 */
export function JoinReveal({ children, delay = 0, className }: JoinRevealProps): ReactElement {
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
