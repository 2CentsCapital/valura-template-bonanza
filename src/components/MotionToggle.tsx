import { setMotionPaused, useMotionPaused } from '../motion';
import { IconPause, IconPlay } from './icons';

// WCAG 2.2.2: one control stops every moving element on the page (marquee,
// floating cards, shader background, globe loop and the FAQ animation). The
// choice is remembered across visits.
export default function MotionToggle() {
  const paused = useMotionPaused();

  return (
    <button
      type="button"
      className="motion-toggle"
      data-testid="motion-toggle"
      onClick={() => setMotionPaused(!paused)}
    >
      {paused ? <IconPlay size={16} strokeWidth={2} /> : <IconPause size={16} strokeWidth={2} />}
      <span>{paused ? 'Play animations' : 'Pause animations'}</span>
    </button>
  );
}
