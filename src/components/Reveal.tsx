import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, easeOutExpo } from '../lib/motion';

type Dir = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const variantMap = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

export function Reveal({
  children,
  dir = 'up',
  delay = 0,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div
      ref={ref}
      variants={variantMap[dir]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  dir = 'up',
}: {
  children: ReactNode;
  className?: string;
  dir?: Dir;
}) {
  return (
    <motion.div variants={variantMap[dir]} className={className}>
      {children}
    </motion.div>
  );
}

export { easeOutExpo };
