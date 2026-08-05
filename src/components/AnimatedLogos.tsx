import { useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import './AnimatedLogos.css';

import frame1 from '../assets/logos/Frame 1618872941.png';
import frame2 from '../assets/logos/Frame 1618872942.png';
import frame3 from '../assets/logos/Frame 1618872943.png';
import frame4 from '../assets/logos/Frame 1618872945.png';
import frame5 from '../assets/logos/Frame 1618872946.png';

export default function AnimatedLogos() {
  useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    
    // Create the exact staggered sequence
    const sequence: any = [
      [".circle-1", { scale, transform }, { duration: 0.8 }],
      [".circle-2", { scale, transform }, { duration: 0.8 }],
      [".circle-3", { scale, transform }, { duration: 0.8 }],
      [".circle-4", { scale, transform }, { duration: 0.8 }],
      [".circle-5", { scale, transform }, { duration: 0.8 }],
    ];

    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="animated-logos-container">
      <div className="animated-logos-row">
        <div className="logo-circle-wrapper circle-1">
          <img src={frame1} alt="Logo 1" />
        </div>
        <span className="logo-separator">❖</span>
        
        <div className="logo-circle-wrapper circle-2">
          <img src={frame2} alt="Logo 2" />
        </div>
        <span className="logo-separator">❖</span>
        
        <div className="logo-circle-wrapper circle-3">
          <img src={frame3} alt="Logo 3" />
        </div>
        <span className="logo-separator">❖</span>
        
        <div className="logo-circle-wrapper circle-4">
          <img src={frame4} alt="Logo 4" />
        </div>
        <span className="logo-separator">❖</span>
        
        <div className="logo-circle-wrapper circle-5">
          <img src={frame5} alt="Logo 5" />
        </div>
      </div>

      <div className="beam-line" />
      <Sparkles />
    </div>
  );
}

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random() * 0.5 + 0.5;
  const random = () => Math.random();
  
  return (
    <div className="sparkles-container">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove() * 10}px)`,
            left: `calc(${random() * 100}% + ${randomMove() * 10}px)`,
            opacity: [0, randomOpacity(), 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 3,
            repeat: Infinity,
            ease: "linear",
            delay: random() * 2,
          }}
          style={{
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
          }}
          className="sparkle-dot"
        />
      ))}
    </div>
  );
};
