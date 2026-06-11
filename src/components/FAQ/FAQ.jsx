import { useState } from 'react';
import faqData from '../../data/faq.json';
import './FAQ.css';

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__header">
          <span className="faq__tag">Support</span>
          <h2 className="section-title">
            Got Questions? <span className="faq__title-highlight">We've got answers.</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about clear aligners and your smile transformation journey.
          </p>
        </div>

        <div className="faq__list" role="region" aria-label="Frequently Asked Questions">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleFAQ(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="faq__question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="faq__question-text">{item.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`faq__icon-svg ${isOpen ? 'faq__icon-svg--open' : ''}`}
                    >
                      <path
                        d="M10 4V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="faq__icon-vertical"
                      />
                      <path
                        d="M4 10H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq__answer-wrapper"
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="faq__cta-wrapper">
          <div className="faq__cta-card">
            <div className="faq__cta-content">
              <h3 className="faq__cta-title">Still have questions?</h3>
              <p className="faq__cta-text">
                Our team is ready to help you start your smile journey. Book a free consultation today.
              </p>
            </div>
            <a href="#hero" className="faq__cta-btn">
              Book Free Consultation
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
