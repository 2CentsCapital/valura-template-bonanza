import { useEffect, useRef, useState } from 'react';
import { useMotionPaused } from '../motion';

type Props = {
  mp4: string;
  webm: string;
  poster: string;
  width: number;
  height: number;
  className?: string;
};

// Decorative muted loop. It plays for every visitor, including under reduced
// motion. Sources only load once the video is near the viewport; playback pauses
// offscreen, while the tab is hidden, and when "Pause animations" is on (the
// poster or the current frame then stays in place).
export default function LoopVideo({ mp4, webm, poster, width, height, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const paused = useMotionPaused();
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => document.visibilityState === 'visible');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setActive(true);
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setPageVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !active) return;
    if (inView && pageVisible && !paused) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active, inView, pageVisible, paused]);

  return (
    <video
      ref={videoRef}
      className={className}
      width={width}
      height={height}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      {active && (
        <>
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
        </>
      )}
    </video>
  );
}
