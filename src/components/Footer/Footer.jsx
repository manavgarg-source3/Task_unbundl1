import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        

        <div className="footer__top-wrapper">
         
          <div className="footer__column footer__column--quick-links">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__list footer__list--quick">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#book-scan" className="footer__link">Book a Free Scan</a></li>
              <li><a href="#how-it-works" className="footer__link">How it Works</a></li>
              <li><a href="#range-aligners" className="footer__link">Range of Aligners</a></li>
              <li><a href="#aligners-vs-braces" className="footer__link">Aligners vs Braces</a></li>
              <li><a href="#faqs" className="footer__link">FAQs</a></li>
            </ul>
          </div>

        
          <div className="footer__column footer__column--contact">
            <h3 className="footer__title">Get in Touch Now!</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <a href="tel:01169328350" className="footer__link footer__link--icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  011-6932-8350
                </a>
              </li>
              <li>
                <a href="mailto:support@whistle.in" className="footer__link footer__link--icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__icon">
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                    <path d="M2 4l10 9 10-9" />
                  </svg>
                  support@whistle.in
                </a>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="footer__column footer__column--social">
          <h3 className="footer__title">Follow us on</h3>
          <div className="footer__socials">
            <a href="#instagram" aria-label="Instagram" className="footer__social-link">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className="footer__social-link">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#x" aria-label="X (Twitter)" className="footer__social-link">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        
        <div className="footer__column footer__column--legal">
          <ul className="footer__list footer__list--legal">
            <li><a href="#privacy" className="footer__link">Privacy Policy</a></li>
            <li><a href="#terms" className="footer__link">Terms of Service</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;