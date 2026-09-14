import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { IconChevronDown } from './icons';
import './FAQ.css';

// The dotLottie player (and its WASM runtime) only loads when the decorative
// animation is about to be seen, and only on layouts that show it.
const FaqLottie = lazy(() => import('./FaqLottie'));

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How is this different from a self-serve US-stocks app?',
    answer:
      "It isn't a fintech bolted onto a brokerage. It's your Bonanza relationship, the same markets expertise and research, with a regulated global rail added underneath. One view, one tax pack, one conversation.",
  },
  {
    question: 'Is it legal for an Indian resident to invest abroad this way?',
    answer:
      "Yes. Rupees move under RBI's Liberalised Remittance Scheme (LRS) to an IFSCA-regulated broker-dealer at GIFT IFSC, the government-sanctioned route for resident Indians to access permitted global products. Resident Indians can invest up to $250,000 abroad each financial year under LRS.",
  },
  {
    question: 'How do I open an account?',
    answer:
      'Select Open account, complete digital KYC with your PAN and Aadhaar, then fund your account in rupees under LRS. You can also get started in the Valura.Ai app on iOS and Android.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Zero account-opening fee. A flat per-trade commission on US equities (fractional or whole). Transparent FX on inward remittance. Product-level fees on structured notes and funds are disclosed in their term sheets. No hidden custody charges. The full schedule of fees and charges is disclosed at onboarding.',
  },
  {
    question: 'Does TCS apply to my remittance?',
    answer:
      'Tax Collected at Source (TCS) may apply to LRS remittances under prevailing income-tax rules, depending on the amount and purpose of the remittance. TCS is not a separate tax: it can be adjusted against your income-tax liability when you file your return. Please consult your tax advisor.',
  },
  {
    question: 'How is tax handled?',
    answer:
      "You receive one consolidated INR + USD statement at year-end with realised gains, dividends, TDS and a foreign-tax-credit schedule, designed to drop straight into your CA's workflow alongside your domestic Bonanza portfolio.",
  },
  {
    question: 'Where are my investments held?',
    answer:
      'Your global account is with Valura India IFSC Limited, an IFSCA-regulated broker-dealer at GIFT City. Custody arrangements for each product are set out in the account documents you receive at onboarding; please read them carefully before investing.',
  },
  {
    question: 'What is the minimum to start?',
    answer:
      'Fractional US equities start from $1. Structured income notes and pre-IPO allocations carry higher minimums (pre-IPO tickets start at $10,000) and are subject to investor eligibility. You can begin small and scale as your allocation grows.',
  },
  {
    question: 'What happens to my dollars if I want to bring them home?',
    answer:
      "USD balances are repatriable on request, against documented LRS limits. Outward FX, settlement and reporting are handled by the IFSC broker-dealer; you'll get a single statement showing realised gains in both currencies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showLottie, setShowLottie] = useState(false);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const decor = decorRef.current;
    if (!decor || !('IntersectionObserver' in window)) return;
    const wide = window.matchMedia('(min-width: 1025px)');
    let observer: IntersectionObserver | null = null;
    const watch = () => {
      if (!wide.matches || observer) return;
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShowLottie(true);
            observer?.disconnect();
          }
        },
        { rootMargin: '300px 0px' }
      );
      observer.observe(decor);
    };
    watch();
    wide.addEventListener('change', watch);
    return () => {
      observer?.disconnect();
      wide.removeEventListener('change', watch);
    };
  }, []);

  return (
    <section id="faq" className="faq-wrapper" aria-labelledby="faq-title">
      <div className="faq container">
        <div className="faq-left">
          <div className="faq-badge-container">
            <p className="badge">FAQ</p>
          </div>
          <h2 id="faq-title" className="section-title faq-title">
            Questions a <span className="accent">Bonanza investor</span> actually asks.
          </h2>
          <a className="btn btn-secondary faq-cta-btn" href="#open">
            Talk to a specialist
          </a>

          <div className="faq-decor" ref={decorRef} aria-hidden="true">
            <div className="faq-decor-bg" />
            <div className="faq-decor-lottie">
              {showLottie && (
                <Suspense fallback={null}>
                  <FaqLottie />
                </Suspense>
              )}
            </div>
          </div>
        </div>

        <div className="faq-right">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className={`faq-accordion ${isOpen ? 'open' : ''}`}>
                <h3 className="faq-question-heading">
                  <button
                    id={`faq-question-${i}`}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    data-testid="faq-toggle"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="faq-question">{item.question}</span>
                    <IconChevronDown className="faq-icon" size={22} />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="faq-content"
                  inert={!isOpen}
                >
                  <div className="faq-content-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
