import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/theretech.png";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <NavLink to="/" className="nav-logo" onClick={closeMenu}>
            <img src={logo} alt="There Tech Ltd" className="logo-image" />
          
          </NavLink>
        </div>

        {/* Mobile Menu Close Button */}
        {isMenuOpen && (
          <button 
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        )}

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Services" className="nav-link" onClick={closeMenu}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link" onClick={closeMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
          </li>
        </div>

        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-cta"
            onClick={() => {
              navigate("/Contact");
              closeMenu();
            }}
          >
            Get Started
          </button>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;