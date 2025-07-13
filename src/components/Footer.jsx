import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ThereTech logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo-container">
            <img src={logo} alt="There Tech Ltd" className="footer-logo-image" />
            <div className="footer-logo-text">
              <h3 className="footer-logo">There Tech Ltd</h3>
              <p>Empowering the next generation of builders, problem-solvers, and tech leaders.</p>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/Services">IoT Solutions</Link></li>
            <li><Link to="/Services">Software Development</Link></li>
            <li><Link to="/Services">IT Consulting</Link></li>
            <li><Link to="/Services">Tech Mentorship</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Contact">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> theretech250@gmail.com</p>
            <p><i className="fab fa-whatsapp"></i> +250 782 419 365</p>
            <p><i className="fas fa-map-marker-alt"></i> Kigali, Rwanda</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 There Tech Ltd. All rights reserved.</p>
        <p>At There Tech, We don't just build projects, We create solutions that drive lasting impact.</p>
      </div>
    </footer>
  );
};

export default Footer; 