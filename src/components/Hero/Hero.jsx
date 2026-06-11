import { useState } from 'react';
import './Hero.css';

function Hero() {
  const [formData, setFormData] = useState({
    teethGap: '',
    name: '',
    mobile: '',
  });

  const [selectedClinic, setSelectedClinic] = useState('Indiranagar');

  const clinics = ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you at ${formData.mobile} for a free scan at our ${selectedClinic} clinic.`);
  };

  return (
    <section className="hero" id="hero">
      {/* Top Navigation Bar */}
      <nav className="hero__nav">
        <div className="container hero__nav-inner">
          <div className="hero__logo">
            <img src="/images/whistle-logo.png" alt="Whistle Aligners" className="hero__logo-img" />
          </div>
          <div className="hero__nav-links">
            <a href="#results" className="hero__nav-link">Results</a>
            <a href="#why-whistle" className="hero__nav-link">Why Whistle</a>
            <a href="#faq" className="hero__nav-link">FAQ</a>
            <a href="#hero" className="hero__nav-cta">Book Free Scan</a>
          </div>
          <button className="hero__menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero__content">
        <div className="container hero__grid">
          {/* Left — Text + Form */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-icon">✨</span>
              <span>Rated 4.9/5 by 10,000+ happy smiles</span>
            </div>

            <h1 className="hero__title">
              Invisible Aligners for a <span className="hero__title-highlight">dream smile</span>
            </h1>

            <p className="hero__subtitle">
              Get the smile you've always wanted with our clear, comfortable, and affordable aligners. Designed by orthodontists, delivered to your door.
            </p>

            {/* Star Rating */}
            <div className="hero__rating">
              <div className="hero__stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="hero__star" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="hero__rating-text">4.9 • 10,000+ reviews</span>
            </div>

            {/* Form */}
            <form className="hero__form" onSubmit={handleSubmit}>
              <div className="hero__form-group">
                <label className="hero__form-label">
                  Do you have a gap in your front teeth?
                </label>
                <div className="hero__radio-group" role="radiogroup" aria-label="Teeth gap question">
                  {['Yes', 'No', 'Not sure'].map((option) => (
                    <label key={option} className={`hero__radio-label ${formData.teethGap === option ? 'hero__radio-label--active' : ''}`}>
                      <input
                        type="radio"
                        name="teethGap"
                        value={option}
                        checked={formData.teethGap === option}
                        onChange={handleInputChange}
                        className="hero__radio-input"
                      />
                      <span className="hero__radio-custom"></span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="hero__form-row">
                <div className="hero__form-group">
                  <label htmlFor="hero-name" className="hero__form-label">Your Name</label>
                  <input
                    id="hero-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="hero__input"
                    required
                  />
                </div>

                <div className="hero__form-group">
                  <label htmlFor="hero-mobile" className="hero__form-label">Mobile Number</label>
                  <div className="hero__mobile-input">
                    <span className="hero__country-code">
                      <span className="hero__flag">🇮🇳</span>
                      +91
                    </span>
                    <input
                      id="hero-mobile"
                      type="tel"
                      name="mobile"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="hero__input hero__input--mobile"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="hero__cta" id="book-scan-btn">
                Book a Free Scan
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Right — Doctor Image + Clinic Card */}
          <div className="hero__right">
            <div className="hero__image-wrapper">
              <img
                src="/images/hero-doctor.png"
                alt="Dr. Sharma — Whistle Aligners orthodontist"
                className="hero__doctor-img"
              />

              {/* Clinic Selection Floating Card */}
              <div className="hero__clinic-card">
                <div className="hero__clinic-header">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.243 1 3 3.243 3 6c0 4.125 5 9 5 9s5-4.875 5-9c0-2.757-2.243-5-5-5z" stroke="#7C3AED" strokeWidth="1.5" fill="none"/>
                    <circle cx="8" cy="6" r="1.5" fill="#7C3AED"/>
                  </svg>
                  <span className="hero__clinic-title">Select Clinic</span>
                </div>
                <div className="hero__clinic-options">
                  {clinics.map((clinic) => (
                    <button
                      key={clinic}
                      className={`hero__clinic-btn ${selectedClinic === clinic ? 'hero__clinic-btn--active' : ''}`}
                      onClick={() => setSelectedClinic(clinic)}
                      type="button"
                    >
                      {clinic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Floating Badge */}
              <div className="hero__stats-badge">
                <div className="hero__stats-item">
                  <span className="hero__stats-number">50K+</span>
                  <span className="hero__stats-label">Happy Smiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="hero__trust-bar">
        <div className="container hero__trust-inner">
          <div className="hero__trust-item">
            <span className="hero__trust-icon">🏥</span>
            <div>
              <strong>100+ Clinics</strong>
              <span>Pan India presence</span>
            </div>
          </div>
          <div className="hero__trust-item">
            <span className="hero__trust-icon">👨‍⚕️</span>
            <div>
              <strong>Expert Orthodontists</strong>
              <span>Certified professionals</span>
            </div>
          </div>
          <div className="hero__trust-item">
            <span className="hero__trust-icon">⭐</span>
            <div>
              <strong>4.9/5 Rating</strong>
              <span>10,000+ reviews</span>
            </div>
          </div>
          <div className="hero__trust-item">
            <span className="hero__trust-icon">💰</span>
            <div>
              <strong>Easy EMI</strong>
              <span>Starting ₹3,000/mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
