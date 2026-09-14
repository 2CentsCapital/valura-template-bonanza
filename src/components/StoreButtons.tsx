import { APP_STORE_URL, PLAY_STORE_URL } from '../config';
import { IconSmartphone } from './icons';
import './StoreButtons.css';

type Props = {
  tone?: 'light' | 'dark';
};

export default function StoreButtons({ tone = 'light' }: Props) {
  return (
    <div className={`store-cta store-cta--${tone}`}>
      <p className="store-cta-label">Get the Valura.Ai app</p>
      <div className="store-cta-buttons">
        <a className="store-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <IconSmartphone size={22} />
          <span className="store-btn-text">
            <small>Download on the</small>
            <span>App Store</span>
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a className="store-btn" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          <IconSmartphone size={22} />
          <span className="store-btn-text">
            <small>Get it on</small>
            <span>Google Play</span>
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
