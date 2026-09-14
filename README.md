# Bonanza powered by Valura.Ai: landing page

The co-branded landing page for **Bonanza powered by Valura.Ai**: global investing for Bonanza
investors through Valura India IFSC Limited, an IFSCA-regulated broker-dealer at GIFT City. The page
covers US stocks and ETFs, USD income and pre-IPO, funded in rupees under the RBI Liberalised
Remittance Scheme (LRS).

Built with React 19, Vite 8 and TypeScript, with plain CSS per component. This repo started from
the Bonanza landing template and keeps its layout, motion and visual language, re-themed to the
Bonanza brand book.

## Content sources

| What | Source |
| --- | --- |
| Section copy, FAQ questions and answers, CTA labels | The live landing at https://bonanza-app.valura.ai (repo `2CentsCapital/Valura-Bonanza`, `web/`, commit `295f391`). Carried section by section and edited only for compliance, brand and layout. |
| Valura facts | Cobrand Studio metrics and legal data: 90+ global markets, 100,000+ instruments, 4,000+ US stocks and ETFs, fractional investing from $1, LRS limit of $250,000 per financial year, Valura India IFSC Limited (GIFT SEZ, GIFT City, Gandhinagar, Gujarat 382355), pre-IPO minimum ticket $10,000. |
| Bonanza facts | Studio partner record (in business since 1994; Bonanza Portfolio (IFSC) Private Limited, IFSCA Broker Dealer INZ000220432) and the live landing (SEBI stock broker on NSE, BSE and MCX; depository participant with CDSL and NSDL; PMS and research). |
| Brand | Bonanza Brand Guidelines v1.0 (Aug 2024): Poppins, palette, outlined icons, favicon icon, trademark attribution, network figure of 1,700+ outlets across 600+ cities. |
| Joint lockup | The approved joint artwork used on the live landing (`bonanza-joint.png`), trimmed and resized only. |

## Section map

| Live landing section | Component |
| --- | --- |
| Header and navigation | `src/components/Header.tsx` |
| Hero, credentials strip, stats | `src/components/Hero.tsx` |
| Why global, why now | `src/components/Features.tsx` |
| What you can hold (six shelves) | `src/components/Products.tsx` with `AnimatedLogos.tsx` |
| Research-led, not noise-led | `src/components/Research.tsx` |
| Quote band | `src/components/CTASection.tsx` |
| How it works | `src/components/AppFeatures.tsx` |
| Trust and regulation | `src/components/Trust.tsx` |
| FAQ | `src/components/FAQ.tsx` with `FaqLottie.tsx` |
| Open your global desk (lead form, app download) | `src/components/Integrations.tsx`, `LeadForm.tsx`, `StoreButtons.tsx` |
| Footer and legal | `src/components/Footer.tsx` |

Links, store URLs and the Web3Forms key and subject live in `src/config.ts`.

## Brand and compliance rules applied

- Poppins only (400, 500, 600, 700 and italics, from Google Fonts). No tick, cross or arrow
  characters in text; icons are outlined inline SVGs in `src/components/icons.tsx`.
- Palette: royal blue `#2D57A6`, jade `#29A672`, goldenrod `#F19B19`, midnight blue `#1B223C`,
  powder blue `#DFE9F2`, red `#F55F6A`. No pure black, no white text on light grounds, no coloured
  text on coloured grounds.
- The approved joint lockup appears once, in the header, at the brand book's 80px web minimum on a
  single white ground. The footer uses the worded name. The favicon is the Bonanza icon from the
  brand kit.
- No guaranteed, assured or protected returns, no return or yield figures, no superlatives, no
  competitor or private company names. Mock screens are captioned "Illustrative only. Not investment
  advice." The market-risk line sits in the footer.

## Run locally

Requires Node 20.19+ (or 22.12+).

```bash
npm ci
npm run dev       # http://localhost:5173
npm run lint      # oxlint
npm run build     # type-check, then production build into dist/
npm run preview   # serve dist/ locally
```

## Deploy

```bash
docker build -t bonanza-valura-landing .
docker run --rm -p 8080:80 bonanza-valura-landing   # http://localhost:8080
```

The Dockerfile builds with `node:20-alpine` and serves `dist/` from `nginx:alpine` on port 80.
`nginx.conf` adds the SPA fallback, gzip, a one-year cache for fingerprinted `/assets`, a short
cache for favicons and the social image, and `no-cache` for `index.html`. The container
healthcheck calls `http://127.0.0.1/`.

`index.html` sets the canonical URL, `og:url` and `og:image` to `https://bonanza-app.valura.ai/`,
the current landing host. Update them if the page moves to another hostname. Open-account and
log-in links go to `https://bonanza.valura.ai/auth`.

## Media and performance notes

- Images are WebP, sized for twice their rendered size. Below-the-fold media is lazy-loaded.
- The globe in "Why global" is a muted MP4/WebM loop with a poster. It only loads near the
  viewport, pauses offscreen, and shows the poster to visitors who prefer reduced motion.
- The hero WebGL background starts when the browser is idle, pauses offscreen and draws a single
  still frame under reduced motion.
- The FAQ animation uses `@lottiefiles/dotlottie-react`. It is lazy-loaded on layouts 1025px and
  wider when the FAQ approaches the viewport. The player downloads its WASM runtime from jsDelivr
  (unpkg as fallback). If a content security policy blocks those hosts, self-host
  `dotlottie-player.wasm` and call `setWasmUrl` before rendering.

## Needs sign-off

Bonanza marketing approval runs on a three working day SLA. Before publishing, confirm:

1. "30 years, twin-regulated" and "Twin-regulated. Single trail." framing (Bonanza under SEBI,
   Valura.Ai under IFSCA).
2. Historical framing kept from the live page: "in past decades a dollar leg has often steadied
   Indian portfolios through rupee cycles" and "Historically, a modest global leg has improved
   drawdown behaviour..." (the "Currency & cycle hedge" tag now reads "Currency diversification").
3. "plus 200+ low-cost theme funds" and the "200+ ETFs" tag, which are not in the Valura metrics.
4. Named listed companies in "Why global" (Apple, NVIDIA, Microsoft, Alphabet, Meta, Tesla) and the
   NVDA example card in the hero.
5. Availability of the UK and Hong Kong equities and the global funds and REITs shelves.
6. Service claims from the live page: reporting alongside the Bonanza portfolio, the consolidated
   INR and USD tax statement, onshore-linked custody, "Live in under ten minutes" and "Open in 3
   minutes", a response within one business day, and "We never sell your data".
7. Fee statements in the FAQ (zero account-opening fee, flat per-trade commission, transparent FX,
   no hidden custody charges).
8. The research notes attributed to "the Valura research desk", which have no published documents
   behind them.
9. The network figure of 1,700+ outlets across 600+ cities from the brand book (the live page said
   1,900+ and 560+), and whether it needs an as-of date.
10. Display of Bonanza Portfolio (IFSC) Private Limited's IFSCA registration (INZ000220432) and its
    role in this offer.
11. The copyright holder line (the brand book prefers "Bonanza Portfolio Ltd.") and whether a
    grievance officer block is required in the footer.
12. Bonanza's mandatory disclaimer and risk wording, still pending in the partner intake; the page
    uses the standard market-risk line.
13. Compliance rewrites of live copy: "Earn in dollars while you wait" became "Seek income in
    dollars", the quote now says "hold one corner of your portfolio in dollars", and the promise of
    "a personalised allocation sketch" was removed from the lead form copy.
14. Licences for the template imagery (3D globe and portfolio renders, stock photos) supplied with
    the designer template. The portfolio-analysis mock screen has its figures blurred.
15. The unsourced statistic kept from the live page: "Eight of the ten largest companies on earth
    trade outside India".
