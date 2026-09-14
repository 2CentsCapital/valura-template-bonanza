import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import questionsLottie from '../assets/icons/Questions.lottie';
import './FAQ.css';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: 1,
    question: "How do I start investing?",
    answer: "Getting started is simple. Open an investment account, complete your KYC, and begin exploring equities, mutual funds, IPOs, and more, all from one platform."
  },
  {
    id: 2,
    question: "Which investment products are available?",
    answer: "We offer stocks, mutual funds, IPOs, ETFs, global markets, wealth management, and research advisory services to suit every investor."
  },
  {
    id: 3,
    question: "Can I invest in global markets?",
    answer: "Yes, our platform provides access to international markets, allowing you to diversify your portfolio beyond India with expert research backing."
  },
  {
    id: 4,
    question: "Do you provide expert research?",
    answer: "Absolutely. Our team of experienced analysts publishes daily market updates, stock recommendations, sector research, and in-depth investment reports."
  },
  {
    id: 5,
    question: "Is my investment secure?",
    answer: "Yes. We are SEBI-registered, NSE & BSE members, and CDSL depository participant. All investments are held with full regulatory compliance and investor protection."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-wrapper" data-node-id="93:741">
      <div className="faq">
        
        {/* FAQ Left Block */}
        <div className="faq-left" data-node-id="93:742">
          <div className="faq-badge-container">
            <div className="badge" data-node-id="93:744">
              <span data-node-id="93:745">FAQ</span>
            </div>
          </div>
          <h2 className="faq-title" data-node-id="93:743">
            Frequently Asked Questions
          </h2>
          
          <button className="faq-cta-btn" data-node-id="93:746">
            <span data-node-id="93:752">Talk to us</span>
          </button>

          {/* Decorative Lottie animation */}
          <div className="faq-decor" data-node-id="93:758">
            <div className="faq-decor-bg" data-node-id="93:759" />
            <div className="faq-decor-lottie">
              <DotLottieReact 
                src={questionsLottie} 
                autoplay 
                loop 
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* FAQ Right Block (Accordion) */}
        <div className="faq-right" data-node-id="93:761">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`faq-accordion ${openId === item.id ? 'open' : ''}`}
            >
              <button 
                className="faq-trigger" 
                onClick={() => toggleAccordion(item.id)}
              >
                <h3 className="faq-question">{item.question}</h3>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-content">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
