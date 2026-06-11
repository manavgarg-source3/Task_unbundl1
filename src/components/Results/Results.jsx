import { useState } from 'react';
import resultsData from '../../data/results.json';
import './Results.css';

function Results() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="results section" id="results">
      <div className="container">
        <div className="results__header">
          <span className="results__tag">Transformations</span>
          <h2 className="section-title">
            Results You'll <span className="results__title-highlight">Love</span>
          </h2>
          <p className="section-subtitle">
            See the incredible smile transformations achieved by our patients with Whistle Aligners.
          </p>
        </div>

        <div className="results__grid">
          {resultsData.map((result) => (
            <div
              key={result.id}
              className={`results__card ${activeCard === result.id ? 'results__card--active' : ''}`}
              onMouseEnter={() => setActiveCard(result.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="results__image-container">
                <img
                  src={result.image}
                  alt={`${result.treatmentType} — Before and after smile transformation`}
                  className="results__image"
                  loading="lazy"
                />
                <div className="results__image-overlay">
                  <div className="results__labels">
                    <span className="results__label results__label--before">Before</span>
                    <span className="results__label results__label--after">After</span>
                  </div>
                </div>
              </div>
              <div className="results__info">
                <div className="results__info-top">
                  <h3 className="results__treatment">{result.treatmentType}</h3>
                  <span className="results__duration">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M7 4v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {result.duration}
                  </span>
                </div>
                <p className="results__description">{result.description}</p>
                <div className="results__patient">
                  <div className="results__avatar">
                    {result.patientName.charAt(0)}
                  </div>
                  <span className="results__patient-name">{result.patientName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="results__cta-wrapper">
          <a href="#hero" className="results__cta">
            Start Your Transformation
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Results;
