import type { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
};

/**
 * Opacity + translate enter on mount. When the visitor prefers reduced motion
 * the final state renders with no transition, so content is always visible and
 * nothing is ever stuck at opacity:0.
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1], delay }} // slop-scan-ignore: single opacity+translate enter
    >
      {children}
    </motion.div>
  );
}
