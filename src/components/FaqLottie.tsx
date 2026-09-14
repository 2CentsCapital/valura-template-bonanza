import { useEffect, useState } from 'react';
import { DotLottieReact, type DotLottieReactProps } from '@lottiefiles/dotlottie-react';
// Question-mark animation, recoloured to the Bonanza palette. No text layers.
import questionsAnimation from '../assets/lottie/questions.json?raw';

type Player = Parameters<NonNullable<DotLottieReactProps['dotLottieRefCallback']>>[0];

// Every layer has settled at full size by this frame, so it works as a still.
const STILL_FRAME = 30;

export default function FaqLottie() {
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [player, setPlayer] = useState<Player>(null);

  useEffect(() => {
    if (!player || !reduceMotion) return;
    const showStill = () => player.setFrame(STILL_FRAME);
    if (player.isLoaded) showStill();
    player.addEventListener('load', showStill);
    return () => player.removeEventListener('load', showStill);
  }, [player, reduceMotion]);

  return (
    <DotLottieReact
      data={questionsAnimation}
      autoplay={!reduceMotion}
      loop={!reduceMotion}
      renderConfig={{ freezeOnOffscreen: true }}
      dotLottieRefCallback={setPlayer}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
