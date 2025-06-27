import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Distinctive Properties</span>
          <span className="logo-subtext">of Minnesota</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/video" className="nav-link" onClick={closeMenu}>
              Video
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/matterport" className="nav-link" onClick={closeMenu}>
              3D Tours
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>
              Book Now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;