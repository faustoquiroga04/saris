import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="header__logo">
        <NavLink className="logo" to="/">
          <img
            src="https://framerusercontent.com/images/AzmMpDsaJrnWT09OnC8qqxVBIk.png?width=2854&height=1316"
            alt="SARIS São Paulo"
          />
        </NavLink>
      </div>

      <nav className={`header__nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav__link" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/saris-experience" className="nav__link" onClick={() => setIsOpen(false)}>The SARIS Experience</NavLink>
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
