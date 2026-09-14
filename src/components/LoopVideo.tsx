import { useEffect, useRef, useState } from 'react';

type Props = {
  mp4: string;
  webm: string;
  poster: string;
  width: number;
  height: number;
  className?: string;
};

// Decorative muted loop. Sources only load once the video is near the viewport,
// playback pauses offscreen, and visitors who prefer reduced motion only ever
// see the poster frame.
export default function LoopVideo({ mp4, webm, poster, width, height, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
    const video = videoRef.current;
    if (!video || !active) return;
    if (inView) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active, inView]);

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
