import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo-white.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header__logo">
        <NavLink className="logo" to="/">
          <img src={logo} alt="SARIS São Paulo" />
        </NavLink>
      </div>

      <nav className={`header__nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav__link" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/experience" className="nav__link" onClick={() => setIsOpen(false)}>The SARIS Experience</NavLink>
        <NavLink to="/technique" className="nav__link" onClick={() => setIsOpen(false)}>The Technique</NavLink>
        <NavLink to="/faq" className="nav__link" onClick={() => setIsOpen(false)}>FAQ</NavLink>
        <NavLink to="/waitlist" className="nav__link" onClick={() => setIsOpen(false)}>Waitlist</NavLink>
      </nav>

      <div className="header__right">
        <NavLink to="/waitlist">
          <button className="btn nav__btn">Sign Up</button>
        </NavLink>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;