import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import { useContact } from '../hooks/useApiQuery';

const Contact = () => {
  const { data, isLoading, error } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    budget: 'not-sure',
    timeline: 'not-sure'
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Fallback data if API fails
  const fallbackContact = {
    companyInfo: {
      name: 'There-Tech',
      address: {
        street: '123 Tech Street',
        city: 'Tech City',
        state: 'TC',
        zipCode: '12345',
        country: 'USA'
      },
      phone: '+1 (555) 123-4567',
      email: 'info@there-tech.com',
      website: 'https://there-tech.com'
    },
    socialMedia: {
      linkedin: 'https://linkedin.com/company/there-tech',
      github: 'https://github.com/there-tech',
      twitter: 'https://twitter.com/there-tech'
    },
    officeHours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  };

  // Use API data if available, otherwise fallback
  const contactData = data?.contact || fallbackContact;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://there-tech-backend.onrender.com/api'}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service: '',
          budget: 'not-sure',
          timeline: 'not-sure'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' });
      console.log(error);
    }
  };

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
              <ContactCard contactData={contactData} />
            </div>
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Apps</option>
                      <option value="iot-solutions">IoT Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="student-support">Student Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="not-sure">Not sure</option>
                      <option value="under-200k">Under 200,000 FRW</option>
                      <option value="200k-400k">200,001 FRW - 400,000 FRW</option>
                      <option value="400k-700k">400,001 FRW - 700,000 FRW</option>
                      <option value="700k-1000M">700,001 FRW- 1,000,000 FRW</option>
                      <option value="1M+">1,000,000+ FRW</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="not-sure">Not sure</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project, goals, and how we can help..."
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button type="submit" className="btn btn-primary" disabled={submitStatus.type === 'loading'}>
                  {submitStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
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
