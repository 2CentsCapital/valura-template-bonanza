import { Fragment, useEffect, useRef, useState } from 'react';
import { animate, motion, useReducedMotion, type AnimationSequence } from 'framer-motion';
import { IconChart, IconDiamond, IconGlobe, IconLandmark, IconRocket, IconTicket } from './icons';
import './AnimatedLogos.css';

// Shelf icons in place of the template's third-party logo placeholders.
const SHELF_ICONS = [IconChart, IconGlobe, IconTicket, IconLandmark, IconRocket];
const ICON_SIZES = [22, 28, 34, 28, 22];

export default function AnimatedLogos() {
  const reduceMotion = useReducedMotion();
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (reduceMotion || !row) return;
    const circles = Array.from(row.querySelectorAll<HTMLElement>('.logo-circle-wrapper'));
    const sequence = circles.map((circle) => [
      circle,
      { scale: [1, 1.1, 1], y: [0, -4, 0] },
      { duration: 0.8 },
    ]) as AnimationSequence;
    const controls = animate(sequence, { repeat: Infinity, repeatDelay: 1 });
    return () => controls.stop();
  }, [reduceMotion]);

  return (
    <div className="animated-logos-container" aria-hidden="true">
      <div className="animated-logos-row" ref={rowRef}>
        {SHELF_ICONS.map((Icon, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <span className="logo-separator">
                <IconDiamond size={10} strokeWidth={2.2} />
              </span>
            )}
            <div className={`logo-circle-wrapper circle-${i + 1}`}>
              <Icon size={ICON_SIZES[i]} strokeWidth={1.6} />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="beam-line" />
      {!reduceMotion && <Sparkles />}
    </div>
  );
}

type Sparkle = {
  top: number;
  left: number;
  toTop: number;
  toLeft: number;
  opacity: number;
  duration: number;
  delay: number;
};

function makeSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    toTop: Math.random() * 100,
    toLeft: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 2,
  }));
}

function Sparkles() {
  const [sparkles] = useState(() => makeSparkles(15));
  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle, i) => (
        <motion.span
          key={i}
          className="sparkle-dot"
          style={{ top: `${sparkle.top}%`, left: `${sparkle.left}%` }}
          animate={{
            top: `${sparkle.toTop}%`,
            left: `${sparkle.toLeft}%`,
            opacity: [0, sparkle.opacity, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{ duration: sparkle.duration, repeat: Infinity, ease: 'linear', delay: sparkle.delay }}
        />
      ))}
    </div>
  );
}
