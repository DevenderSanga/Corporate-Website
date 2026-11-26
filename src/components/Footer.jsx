
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter
} from "react-icons/fi";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">RK</span>
              <span>
                <strong>R.K CONSULTANTS</strong>
                <small>Digital Marketing Agency</small>
              </span>
            </Link>

            <p>
              Helping businesses build their digital presence through
              strategy, creativity and thoughtful digital solutions.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <Link to="/services">Digital Marketing</Link>
            <Link to="/services">SEO</Link>
            <Link to="/services">Social Media Marketing</Link>
            <Link to="/services">Branding & Design</Link>
            <Link to="/services">Website Development</Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact-column">
            <h3>Contact Us</h3>

            <div className="footer-contact-item">
              <FiMail />
              <a href="mailto:info@rkconsultants.com">
                info@rkconsultants.com
              </a>
            </div>

            <div className="footer-contact-item">
              <FiPhone />
              <span>Phone number to be added</span>
            </div>

            <div className="footer-contact-item">
              <FiMapPin />
              <span>Location details to be added</span>
            </div>

            <Link to="/contact" className="footer-contact-link">
              Get in Touch <FiArrowUpRight />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} R.K CONSULTANTS. All rights reserved.
          </p>

          <div>
            <Link to="/contact">Contact</Link>
            <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
