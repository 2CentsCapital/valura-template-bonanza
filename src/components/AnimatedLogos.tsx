import { Fragment, useState, type CSSProperties } from 'react';
import { useMotionPaused } from '../motion';
import { IconChart, IconDiamond, IconGlobe, IconLandmark, IconRocket, IconTicket } from './icons';
import './AnimatedLogos.css';

// Shelf icons in place of the template's third-party logo placeholders. The
// staggered pulse and the sparkles run on CSS keyframes (transform and opacity
// only), so the footer "Pause animations" control stops them with everything else.
const SHELF_ICONS = [IconChart, IconGlobe, IconTicket, IconLandmark, IconRocket];
const ICON_SIZES = [22, 28, 34, 28, 22];

export default function AnimatedLogos() {
  const paused = useMotionPaused();

  return (
    <div className="animated-logos-container" aria-hidden="true">
      <div className="animated-logos-row">
        {SHELF_ICONS.map((Icon, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <span className="logo-separator">
                <IconDiamond size={10} strokeWidth={2.2} />
              </span>
            )}
            <div
              className={`logo-circle-wrapper circle-${i + 1}`}
              style={{ '--pulse-delay': `${i * 0.8}s` } as CSSProperties}
            >
              <Icon size={ICON_SIZES[i]} strokeWidth={1.6} />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="beam-line" />
      {!paused && <Sparkles />}
    </div>
  );
}

// Dots drift across the beam; the container is 120px wide and 160px tall.
function makeSparkles(count: number): CSSProperties[] {
  const px = (max: number) => `${Math.round(Math.random() * max)}px`;
  return Array.from(
    { length: count },
    () =>
      ({
        '--x0': px(120),
        '--y0': px(160),
        '--x1': px(120),
        '--y1': px(160),
        '--sparkle-opacity': (Math.random() * 0.5 + 0.5).toFixed(2),
        '--sparkle-duration': `${(Math.random() * 2 + 3).toFixed(2)}s`,
        '--sparkle-delay': `${(Math.random() * 2).toFixed(2)}s`,
      }) as CSSProperties
  );
}

function Sparkles() {
  const [sparkles] = useState(() => makeSparkles(15));
  return (
    <div className="sparkles-container">
      {sparkles.map((style, i) => (
        <span key={i} className="sparkle-dot" style={style} />
      ))}
    </div>
  );
}
