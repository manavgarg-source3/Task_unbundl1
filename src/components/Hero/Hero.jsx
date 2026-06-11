import { useState } from 'react';
import './Hero.css';

function Hero() {
  const [formData, setFormData] = useState({
    teethGap: '',
    fullName: '',
    mobile: '',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please provide consent to proceed.');
      return;
    }
    alert(`Thank you, ${formData.fullName}! We'll contact you at ${formData.mobile} to book your free scan.`);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header" id="header">
        <div className="header__inner">
          <div className="header__logo">
            <span className="header__logo-text">whistle</span>
            <span className="header__logo-sub">AND SMILE</span>
          </div>
          <button className="header__phone-btn" aria-label="Call us">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Offer Banner */}
        <div className="header__banner">
          <p className="header__banner-text">
            Starting at <span className="header__banner-strike">₹69,999</span> ₹47,999. Hurry! Offer ends soon.
          </p>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        {/* Hero Top — Heading + Image */}
        <div className="hero__top">
          <div className="hero__top-inner">
            <div className="hero__text">
              <h1 className="hero__title">
                Invisible Aligners for a dream smile
              </h1>
              <p className="hero__subtitle">
                Book a Scan and avail a free<br />
                Orthodontist Consult <span className="hero__subtitle-highlight">worth ₹1500</span>
              </p>
            </div>
            <div className="hero__image">
              <img
                src="/images/hero-woman.png"
                alt="Smiling woman holding a clear aligner"
                className="hero__image-img"
              />
            </div>
          </div>
        </div>

        {/* Hero Form Section */}
        <div className="hero__form-section">
          <div className="hero__form-inner">
            <h2 className="hero__form-heading">
              Do you have Teeth Gaps or Crooked Teeth?
            </h2>

            <div className="hero__radio-group" role="radiogroup" aria-label="Teeth gap question">
              <label className={`hero__radio-label ${formData.teethGap === 'Yes' ? 'hero__radio-label--active' : ''}`}>
                <input
                  type="radio"
                  name="teethGap"
                  value="Yes"
                  checked={formData.teethGap === 'Yes'}
                  onChange={handleInputChange}
                  className="hero__radio-input"
                />
                <span className="hero__radio-circle"></span>
                Yes
              </label>
              <label className={`hero__radio-label ${formData.teethGap === 'No' ? 'hero__radio-label--active' : ''}`}>
                <input
                  type="radio"
                  name="teethGap"
                  value="No"
                  checked={formData.teethGap === 'No'}
                  onChange={handleInputChange}
                  className="hero__radio-input"
                />
                <span className="hero__radio-circle"></span>
                No
              </label>
            </div>

            <form className="hero__form" onSubmit={handleSubmit}>
              <div className="hero__form-row">
                <div className="hero__form-field">
                  <label htmlFor="fullName" className="hero__field-label">Full Name*</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Ajay Kumar"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="hero__input"
                    required
                  />
                </div>

                <div className="hero__form-field">
                  <label htmlFor="mobile" className="hero__field-label">Mobile number*</label>
                  <div className="hero__mobile-wrapper">
                    <span className="hero__country-code">+91</span>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      placeholder="Mobile number*"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="hero__input hero__input--mobile"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="hero__cta" id="book-scan-btn">
                  Book a Free Scan
                </button>
              </div>

              <div className="hero__consent">
                <label className="hero__consent-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="hero__consent-checkbox"
                  />
                  <span className="hero__consent-checkmark"></span>
                  <span className="hero__consent-text">
                    I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Clove Dental Card */}
        <div className="hero__clinic-section">
          <div className="hero__clinic-card">
            <div className="hero__clinic-content">
              <p className="hero__clinic-text">
                <strong>Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.</strong>
              </p>
            </div>
            <div className="hero__clinic-right">
              <img
                src="/images/clove-dental.png"
                alt="Clove Dental"
                className="hero__clinic-logo"
              />
              <button className="hero__clinic-find" type="button">
                Find Clinic
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
