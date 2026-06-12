import { useState, useEffect } from 'react';
import './FAQ.css';

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openId, setOpenId] = useState(null);

  
  const fetchFAQs = async (resetLoading = true) => {
    if (resetLoading) {
      setLoading(true);
      setError(null);
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const mappedFaqs = data.map((item) => ({
        id: item.id,
        question: item.title.charAt(0).toUpperCase() + item.title.slice(1) + '?', 
        answer: item.body.charAt(0).toUpperCase() + item.body.slice(1) + '.'
      }));

      setFaqs(mappedFaqs);
    } catch (err) {
      setError(err.message || 'Failed to load FAQs from the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs(false);
  }, []);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };



  const renderSkeleton = () => (
    <div className="faq__list" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="faq__item faq__item--skeleton">
          <div className="faq__skeleton-question">
            <div className="faq__skeleton-text"></div>
            <div className="faq__skeleton-icon"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderError = () => (
    <div className="faq__error-state">
      <p className="faq__error-text">{error}</p>
      <button onClick={fetchFAQs} className="faq__retry-btn">
        Try Again
      </button>
    </div>
  );

  return (
    <section className="faq" id="faq">
      <div className="faq__header">
        <h2 className="faq__title">
          <span className="faq__title-highlight">Got Questions?</span> We’ve got answers
        </h2>
      </div>

      <div className="faq__container">
        {loading && renderSkeleton()}
        {error && !loading && renderError()}
        
        {!loading && !error && (
          <div className="faq__list" role="region" aria-label="Frequently Asked Questions">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="faq__item">
                  <button
                    className="faq__question"
                    onClick={() => toggleFAQ(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span className="faq__question-text">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? (
                        // Minus Icon
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        // Plus Icon
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  <div
                    className={`faq__answer-wrapper ${isOpen ? 'open' : ''}`}
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
        )}
      </div>
    </section>
  );
}

export default FAQ;