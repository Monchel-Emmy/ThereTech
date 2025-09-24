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
        street: '1 KN 78 St, Kigali',
        city: 'Kigali City',
        state: 'Kigali',
        zipCode: '00000',
        country: 'Rwanda'
      },
      phone: '+250 782 419 365',
      email: 'theretech250@gmail.com',
      website: 'https://theretech.rw'
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/company/there-tech-ltd',
      github: 'https://github.com/theretech',
      twitter: 'https://twitter.com/theretech'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="contact-hero bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to level up your business or project? Let's work together to bring your ideas to life with cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="contact-info-section">
              <ContactCard contactData={contactData} />
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+250 XXX XXX XXX"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    ></textarea>
                  </div>

                  {submitStatus.message && (
                    <div className={`submit-status p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                      submitStatus.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                      'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submitStatus.type === 'loading'}
                  >
                    {submitStatus.type === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions about our services</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className=" bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of projects do you work on?</h3>
              <p className="text-gray-600 leading-relaxed">
                We work on a wide range of projects including IoT solutions, custom software development, mobile apps, web applications, and student project support. No project is too small or too complex.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you work with students?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We specialize in helping students turn their academic projects into functional prototypes. We provide mentorship, technical guidance, and development support.
              </p>
            </div>
            <div className=" bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-600 leading-relaxed">
                Project timelines vary depending on complexity. Small projects can take 2-4 weeks, while larger applications may take 2-6 months. We always provide detailed timelines during our initial consultation.
              </p>
            </div>
            <div className=" bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we offer ongoing support and maintenance for all our projects. We believe in building long-term relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;