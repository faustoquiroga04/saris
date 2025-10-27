import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="header">
        
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="SARIS São Paulo" />
          </Link>
        </div>

        {/* Nav Desktop */}
        <nav className="header__nav">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/experience" className="nav__link">The SARIS Experience</Link>
          <Link to="/technique" className="nav__link">The Technique</Link>
          <Link to="/faq" className="nav__link">FAQ</Link>
          <Link to="/waitlist" className="nav__link">Waitlist</Link>
        </nav>

        <Link to="/signup" className="nav__desktop-btn">
          <button className="nav__btn">Sign Up</button>
        </Link>

        {/* MOBILE */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </button>

      </header>

      {/* Menú Mobile */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>

        <nav className="mobile-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/experience" onClick={closeMenu}>The SARIS Experience</Link>
          <Link to="/technique" onClick={closeMenu}>The Technique</Link>
          <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          <Link to="/waitlist" onClick={closeMenu}>Waitlist</Link>
          <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
