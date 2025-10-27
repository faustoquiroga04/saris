import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__top">
        <div className="footer__left">
          <img src={logo} alt="SARIS São Paulo" className="footer__logo" />
          <p className="footer__follow">Follow us on:</p>
          <div className="footer__socials">
            <span className="social__icon"><img src="https://framerusercontent.com/images/cGnXMN3RHYvM6awzQQEhr0nFVbA.svg?width=18&height=18" alt="" /></span>
          </div>
        </div>

        <div className="footer__right">
          <h3 className="footer__title">Quick Links</h3>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/experience" className="footer__link">The SARIS Experience</Link>
          <Link to="/technique" className="footer__link">The Technique</Link>
          <Link to="/faq" className="footer__link">FAQ</Link>
          <Link to="/waitlist" className="footer__link">Join the Waitlist</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <h3 className="footer__title">CONFIDENCE, RESTORED.™</h3>
        <p className="footer__text">
          We want you to feel powerful, youthful, and completely yourself again.
          Empowered, enlightened, and ready for anything. We’re here to guide you
          through the process of transformation, from the outside, in.
        </p>
        <p className="footer__text">
          It’s time to feel proud of your appearance and emboldened in your reality.
          SARIS Sao Paulo will take you there. Follow us on our socials to stay
          up-to-date on all that’s happening.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
