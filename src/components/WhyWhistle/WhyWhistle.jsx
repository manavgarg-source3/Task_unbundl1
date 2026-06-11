import { useState, useEffect } from 'react';
import './WhyWhistle.css';

function WhyWhistle() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/products?limit=4');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const transformedCards = data.products.map((product) => ({
        id: product.id,
        image: product.thumbnail,
        title: product.title,
        description: product.description,
        category: product.category,
        rating: product.rating,
      }));
      setCards(transformedCards);
    } catch (err) {
      setError(err.message || 'Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderSkeleton = () => (
    <div className="why-whistle__grid">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="why-whistle__card why-whistle__card--skeleton">
          <div className="skeleton why-whistle__skeleton-img"></div>
          <div className="why-whistle__card-body">
            <div className="skeleton why-whistle__skeleton-title"></div>
            <div className="skeleton why-whistle__skeleton-text"></div>
            <div className="skeleton why-whistle__skeleton-text why-whistle__skeleton-text--short"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderError = () => (
    <div className="error-state">
      <div className="why-whistle__error-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" stroke="#EF4444" strokeWidth="2" fill="rgba(239,68,68,0.1)"/>
          <path d="M24 16v10M24 30v2" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      <p>Oops! Something went wrong while loading content.</p>
      <p className="why-whistle__error-detail">{error}</p>
      <button onClick={fetchProducts} className="why-whistle__retry-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8a6 6 0 1 1 1.5 3.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 12V8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Try Again
      </button>
    </div>
  );

  return (
    <section className="why-whistle section" id="why-whistle">
      <div className="container">
        <div className="why-whistle__header">
          <span className="why-whistle__tag">Discover</span>
          <h2 className="section-title">
            Why <span className="why-whistle__title-highlight">Whistle</span>?
          </h2>
          <p className="section-subtitle">
            Explore what makes Whistle Aligners the preferred choice for thousands of happy smiles across India.
          </p>
        </div>

        {loading && renderSkeleton()}
        {error && !loading && renderError()}
        {!loading && !error && (
          <div className="why-whistle__grid">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="why-whistle__card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="why-whistle__card-image-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="why-whistle__card-image"
                    loading="lazy"
                  />
                  <div className="why-whistle__card-category">{card.category}</div>
                </div>
                <div className="why-whistle__card-body">
                  <h3 className="why-whistle__card-title">{card.title}</h3>
                  <p className="why-whistle__card-description">{card.description}</p>
                  <div className="why-whistle__card-footer">
                    <div className="why-whistle__card-rating">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{card.rating.toFixed(1)}</span>
                    </div>
                    <a href="#hero" className="why-whistle__card-link">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyWhistle;
