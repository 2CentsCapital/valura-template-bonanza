import type { CSSProperties } from 'react';
import './RollingNumber.css';

// Count-up for the stats. Each digit is a column that rolls up to its final
// value with transform only, so the animation never shifts layout. Poppins has
// no tabular figures, so every column is sized by an invisible copy of its final
// digit and the result reads exactly like plain text. Screen readers get the
// final value once, as text.
const STRIP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type Props = {
  value: string;
  delay?: number;
};

export default function RollingNumber({ value, delay = 0 }: Props) {
  let digitIndex = 0;

  return (
    <>
      <span className="odo" data-count="pending" aria-hidden="true">
        {Array.from(value).map((char, i) => {
          if (!/\d/.test(char)) {
            return (
              <span key={i} className="odo-char">
                {char}
              </span>
            );
          }
          const target = 10 + Number(char);
          const style = {
            '--odo-to': `${(-target / STRIP.length) * 100}%`,
            '--odo-delay': `${delay + digitIndex * 70}ms`,
          } as CSSProperties;
          digitIndex += 1;
          return (
            <span key={i} className="odo-col">
              <span className="odo-sizer">{char}</span>
              <span className="odo-strip" style={style}>
                {STRIP.map((digit, k) => (
                  <span key={k}>{digit}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
