import { APP_STORE_URL, PLAY_STORE_URL } from '../config';
import { IconSmartphone } from './icons';
import './StoreButtons.css';

type Props = {
  tone?: 'light' | 'dark';
};

const STORES = [
  { key: 'app-store', url: APP_STORE_URL, lead: 'Download on the', name: 'App Store' },
  { key: 'google-play', url: PLAY_STORE_URL, lead: 'Get it on', name: 'Google Play' },
];

// A store without a live Bonanza listing shows a "Coming soon" badge rather
// than a link, so nobody is sent to a different app.
export default function StoreButtons({ tone = 'light' }: Props) {
  const anyLive = STORES.some((store) => store.url);
  return (
    <div className={`store-cta store-cta--${tone}`}>
      <p className="store-cta-label">{anyLive ? 'Get the app' : 'Mobile app coming soon'}</p>
      <div className="store-cta-buttons">
        {STORES.map((store) =>
          store.url ? (
            <a key={store.key} className="store-btn" href={store.url} target="_blank" rel="noopener noreferrer">
              <IconSmartphone size={22} />
              <span className="store-btn-text">
                <small>{store.lead}</small>
                <span>{store.name}</span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span key={store.key} className="store-btn store-btn--soon">
              <IconSmartphone size={22} />
              <span className="store-btn-text">
                <small>Coming soon on</small>
                <span>{store.name}</span>
              </span>
            </span>
          ),
        )}
      </div>
    </div>
  );
}
