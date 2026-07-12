import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">vamshitha.dev</span>
          <p className="footer__tagline">// built with React, styled by hand.</p>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/vamshithaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/vamshithaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:vamshitharp@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>

        <Link to="hero" smooth duration={500} className="footer__top" aria-label="Back to top">
          <FiArrowUp size={16} />
        </Link>
      </div>

      <div className="footer__bottom">
        <p>© {year} Vamshitha R Poojary. All rights reserved.</p>
      </div>
    </footer>
  );
}