import { useEffect, useState } from 'react';
import { DotLottieReact, type DotLottieReactProps } from '@lottiefiles/dotlottie-react';
// Question-mark animation, recoloured to the Bonanza palette. No text layers.
import questionsAnimation from '../assets/lottie/questions.json?raw';
import { useMotionPaused } from '../motion';

type Player = Parameters<NonNullable<DotLottieReactProps['dotLottieRefCallback']>>[0];
type LottieState = 'loading' | 'playing' | 'paused';

// Every layer has settled at full size by this frame, so it works as a still.
const STILL_FRAME = 30;

export default function FaqLottie() {
  const paused = useMotionPaused();
  const [player, setPlayer] = useState<Player>(null);
  const [state, setState] = useState<LottieState>('loading');

  // Plays for every visitor; "Pause animations" parks it on a settled frame.
  // freezeOnOffscreen stops rendering while it is out of view.
  useEffect(() => {
    if (!player) return;
    const apply = () => {
      if (!player.isLoaded) return;
      if (paused) {
        player.pause();
        player.setFrame(STILL_FRAME);
        setState('paused');
      } else {
        player.play();
        setState('playing');
      }
    };
    apply();
    player.addEventListener('load', apply);
    return () => player.removeEventListener('load', apply);
  }, [player, paused]);

  return (
    <div className="faq-lottie" data-lottie-state={state}>
      <DotLottieReact
        data={questionsAnimation}
        loop
        autoplay={false}
        renderConfig={{ freezeOnOffscreen: true }}
        dotLottieRefCallback={setPlayer}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
