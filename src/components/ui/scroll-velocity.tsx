'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollVelocityRowProps {
  children: string;
  baseVelocity: number;
  direction?: 1 | -1;
  className?: string;
}

export const ScrollVelocityRow = ({
  children,
  baseVelocity = 100,
  direction = 1,
  className,
}: ScrollVelocityRowProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy * direction);
  });

  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex flex-nowrap py-2", className)}>
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap uppercase text-5xl md:text-8xl font-black italic tracking-tighter" 
        style={{ x }}
      >
        <span className="mr-8">{children} </span>
        <span className="mr-8">{children} </span>
        <span className="mr-8">{children} </span>
        <span className="mr-8">{children} </span>
      </motion.div>
    </div>
  );
};

interface ScrollVelocityContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollVelocityContainer = ({
  children,
  className,
}: ScrollVelocityContainerProps) => {
  return (
    <section className={cn("relative z-10 py-8 md:py-12 overflow-hidden bg-background", className)}>
      {children}
    </section>
  );
};
