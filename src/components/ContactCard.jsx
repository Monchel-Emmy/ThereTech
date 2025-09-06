import React from 'react';

const ContactCard = ({ contactData }) => {
  if (!contactData) {
    return (
      <div className="contact-card">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Ready to level up your business or project? Let's work together!</p>
          <p>Loading contact information...</p>
        </div>
      </div>
    );
  }

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
              <a href={`mailto:${contactData.companyInfo.email}`}>
                {contactData.companyInfo.email}
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <a href={`tel:${contactData.companyInfo.phone}`}>
                {contactData.companyInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Location</h4>
              <p>
                {contactData.companyInfo.address.street}<br />
                {contactData.companyInfo.address.city}, {contactData.companyInfo.address.state} {contactData.companyInfo.address.zipCode}<br />
                {contactData.companyInfo.address.country}
              </p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Office Hours</h4>
              <div className="office-hours">
                <p><strong>Mon-Fri:</strong> {contactData.officeHours.monday}</p>
                <p><strong>Saturday:</strong> {contactData.officeHours.saturday}</p>
                <p><strong>Sunday:</strong> {contactData.officeHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          {contactData.socialMedia.linkedin && (
            <a href={contactData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {contactData.socialMedia.twitter && (
            <a href={contactData.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {contactData.socialMedia.github && (
            <a href={contactData.socialMedia.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
          )}
          {contactData.socialMedia.facebook && (
            <a href={contactData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
          )}
          {contactData.socialMedia.instagram && (
            <a href={contactData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard; 