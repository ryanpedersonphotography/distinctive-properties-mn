import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h3 className="footer-title">Distinctive Properties of Minnesota</h3>
          <p className="footer-description">
            Professional real estate photography, videography, and aerial services 
            in the Brainerd Lakes Area and Central Minnesota.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services#photography">Real Estate Photography</Link></li>
            <li><Link to="/services#video">Video Production</Link></li>
            <li><Link to="/services#aerial">Aerial/Drone Services</Link></li>
            <li><Link to="/services#matterport">3D Matterport Tours</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              Central Minnesota / Brainerd Lakes Area
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:robert.pederson@gmail.com">robert.pederson@gmail.com</a>
            </p>
            <p>
              <FaPhone className="contact-icon" />
              <a href="tel:+1234567890">Call Us Today</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 Distinctive Properties of Minnesota. All rights reserved.</p>
          <p className="domain-note">distinctivepropertiesmn.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;