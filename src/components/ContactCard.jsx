import React from 'react';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h3>Get In Touch</h3>
        <p>Ready to level up your business or project? Let's work together!</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:theretech250@gmail.com">theretech250@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/250782419365">+250 782 419 365</a>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Location</h4>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>
        
        <div className="social-links">
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
    </div>
  );
};

export default ContactCard; 