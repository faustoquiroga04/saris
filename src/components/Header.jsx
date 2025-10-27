import { Link } from "react-router-dom";
import "../styles/header.css"
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo}  alt="SARIS São Paulo" />
      </div>
      <nav className="header__nav">
        <Link to="/" className="nav__link">Home</Link>
        <Link to="/experience" className="nav__link">The SARIS Experience</Link>
        <Link to="/technique" className="nav__link">The Technique</Link>
        <Link to="/faq" className="nav__link">FAQ</Link>
        <Link to="/waitlist" className="nav__link">Waitlist</Link>
      </nav>
      <button className="nav__btn">Sign Up</button>
    </header>

  );
};

export default Header;