import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'about.js' },
  { id: 'skills', label: 'skills.js' },
  { id: 'projects', label: 'projects.js' },
  { id: 'experience', label: 'experience.js' },
  { id: 'contact', label: 'contact.js' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link
          to="hero"
          smooth
          duration={500}
          className="navbar__logo"
        >
          <span className="navbar__dot" />
          vamshitha.dev
        </Link>

        <ul className="navbar__tabs">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="navbar__tab--active"
                className="navbar__tab"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="navbar__mobile">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="navbar__tab"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}