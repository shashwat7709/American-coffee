'use client';

import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, SpringOptions, MotionValue } from 'framer-motion';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({ className = '', size = 200, springOptions }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0) as MotionValue<number>;
  const mouseY = useMotionValue(0) as MotionValue<number>;

  const xSpring = useSpring(mouseX, springOptions);
  const ySpring = useSpring(mouseY, springOptions);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX - size / 2;
    const yPos = mouseY - size / 2;

    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-full overflow-hidden rounded-lg"
    >
      <motion.div
        className={`pointer-events-none absolute inset-0 z-50 transition duration-300 group-hover:opacity-100 ${className}`}
        style={{
          background: `radial-gradient(${size}px circle at center, var(--spotlight-color), transparent)`,
          transform,
        }}
      />
    </motion.div>
  );
} 