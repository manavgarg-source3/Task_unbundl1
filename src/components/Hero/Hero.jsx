import { useState } from 'react';
import './Hero.css';

function Hero() {
  const [formData, setFormData] = useState({
    teethGap: '',
    fullName: '',
    mobile: '',
    consent: false,
  });
  
  const [showPopup, setShowPopup] = useState(false);

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
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({ teethGap: '', fullName: '', mobile: '', consent: false });
  };

  
  const marqueeContent = (
    <>
      <span>Our inaugural launch benefit</span>
      <span><strong>Free teeth scan</strong> worth ₹500</span>
      <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
      <span>Our inaugural launch benefit</span>
      <span><strong>Free teeth scan</strong> worth ₹500</span>
      <span><strong>Free orthodontic consultation</strong> worth ₹1500</span>
    </>
  );

  return (
    <>
  
      <header className="header" id="header">
        <div className="header__inner">
          <div className="header__logo-container">
            <div className="header__logo-top">
              <span className="header__logo-text">whistle</span>
              <span className="header__logo-tm">TM</span>
            </div>
            <span className="header__logo-sub">AND SMILE</span>
          </div>
          
          <button className="header__phone-btn" aria-label="Call us">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.384 17.752a2.108 2.108 0 0 1-.522 2.296c-.736.745-1.748 1.25-2.775 1.341-3.524.314-7.514-1.396-10.707-4.588C4.187 13.61 2.478 9.62 2.791 6.096c.092-1.026.596-2.038 1.34-2.775a2.108 2.108 0 0 1 2.297-.521c.883.336 1.636 1.054 2.146 1.86l1.246 1.972c.484.767.545 1.748.163 2.569l-1.127 2.41c1.233 2.137 3.018 3.921 5.155 5.154l2.41-1.126c.821-.383 1.802-.322 2.57.162l1.972 1.246c.806.51 1.524 1.263 1.86 2.146z" fill="white"/>
              <path d="M15.5 3.5a8.5 8.5 0 0 1 5 5M15.5 7.5a4.5 4.5 0 0 1 1 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
  
        <div className="header__banner">
          <p className="header__banner-text">
            Starting at <span className="header__banner-strike">Rs 69,999</span> Rs 47,999. Hurry! Offer ends soon.
          </p>
        </div>
      </header>


      <section className="hero" id="hero">
        <div className="hero__top">
          <div className="hero__top-inner">
            <div className="hero__text">
              <h1 className="hero__title">
                Invisible Aligners for a dream smile
              </h1>
              <p className="hero__subtitle">
                Book a Scan and avail a free<br className="desktop-break" />
                Orthodontist Consult <span className="hero__subtitle-highlight">worth ₹1500</span>
              </p>
            </div>
            <div className="hero__image">
              <img
                src="/images/image.png"
                alt="Smiling woman holding a clear aligner"
                className="hero__image-img"
              />
            </div>
          </div>
        </div>

    
        <div className="hero__form-section">
          <div className="hero__form-inner">
            <h2 className="hero__form-heading">
              Do you have Teeth Gaps or Crooked Teeth?
            </h2>

            <div className="hero__radio-group" role="radiogroup" aria-label="Teeth gap question">
              <label className="hero__radio-label">
                <input
                  type="radio"
                  name="teethGap"
                  value="Yes"
                  checked={formData.teethGap === 'Yes'}
                  onChange={handleInputChange}
                  className="hero__radio-input"
                />
                <span className={`hero__radio-circle ${formData.teethGap === 'Yes' ? 'active' : ''}`}></span>
                Yes
              </label>
              <label className="hero__radio-label">
                <input
                  type="radio"
                  name="teethGap"
                  value="No"
                  checked={formData.teethGap === 'No'}
                  onChange={handleInputChange}
                  className="hero__radio-input"
                />
                <span className={`hero__radio-circle ${formData.teethGap === 'No' ? 'active' : ''}`}></span>
                No
              </label>
            </div>

            <form className="hero__form" onSubmit={handleSubmit}>
              <div className="hero__form-field hero__field-name">
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

              <div className="hero__form-field hero__field-mobile">
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

              <button type="submit" className="hero__cta" id="book-scan-btn">
                Book a Free Scan
              </button>
            </form>
          </div>
        </div>

        
        <div className="hero__clinic-section">
          <div className="hero__clinic-card">
            <div className="hero__clinic-content">
              <p className="hero__clinic-text">
                Book a Free 3D Teeth Scan and Orthodontist Consult in a<br />
                Clove Dental Clinic near you.
              </p>
            </div>
            <div className="hero__clinic-right">
              <img
                src="/images/clove.png"
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


      <div className="launch-marquee">
        <div className="launch-marquee__track">
         
          <div className="launch-marquee__content">{marqueeContent}</div>
          <div className="launch-marquee__content">{marqueeContent}</div>
        </div>
      </div>


      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="popup-title">Scan Booked Successfully!</h3>
            <p className="popup-text">
              Thank you, <strong>{formData.fullName}</strong>. Your free scan and Orthodontist consult have been confirmed.
            </p>
            <p className="popup-text">
              Our team will call you shortly at <strong>+91 {formData.mobile}</strong> with further details.
            </p>
            <button onClick={closePopup} className="popup-close-btn">
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;