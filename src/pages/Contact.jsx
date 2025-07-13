import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactCard from '../components/ContactCard';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to level up your business or project? Let's work together!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <ContactCard />
            </div>
            <div className="contact-form-section">
              <Outlet />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What types of projects do you work on?</h3>
              <p>We work on a wide range of projects including IoT solutions, custom software development, mobile apps, web applications, and student project support. No project is too small or too complex.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with students?</h3>
              <p>Absolutely! We specialize in helping students turn their academic projects into functional prototypes. We provide mentorship, technical guidance, and development support.</p>
            </div>
            <div className="faq-item">
              <h3>What is your typical project timeline?</h3>
              <p>Project timelines vary depending on complexity. Small projects can take 2-4 weeks, while larger applications may take 2-6 months. We always provide detailed timelines during our initial consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes, we offer ongoing support and maintenance for all our projects. We believe in building long-term relationships with our clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
