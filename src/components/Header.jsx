import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink className="logo" to="/">
          <img src={logo} alt="SARIS São Paulo" />
        </NavLink>
      </div>

      <nav className="header__nav">
        <NavLink to="/" className="nav__link">Home</NavLink>
        <NavLink to="/experience" className="nav__link">The SARIS Experience</NavLink>
        <NavLink to="/technique" className="nav__link">The Technique</NavLink>
        <NavLink to="/faq" className="nav__link">FAQ</NavLink>
        <NavLink to="/waitlist" className="nav__link">Waitlist</NavLink>
      </nav>
      <NavLink to="/waitlist">
        <button className="btn nav__btn">Sign Up</button>
      </NavLink>
    </header>
  );
};

export default Header;
