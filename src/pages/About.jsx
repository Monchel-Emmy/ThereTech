import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About There Tech Ltd</h1>
          <p className="hero-subtitle">Empowering the next generation of builders, problem-solvers, and tech leaders</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                There Tech Ltd is a Rwandan tech company on a mission to help people and businesses 
                level up through smart, modern and innovative solutions. We believe in making technology 
                accessible, practical, and impactful.
              </p>
              <p>
                Based in Kigali, Rwanda, we're committed to empowering the next generation of builders, 
                problem-solvers, and tech leaders who will shape the future of technology in Africa and beyond.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create cutting-edge solutions that solve real-world problems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and partnerships to achieve extraordinary results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>We're committed to nurturing talent and sharing knowledge with the next generation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Impact</h3>
              <p>We create solutions that drive lasting impact for our clients and communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Why Choose There Tech?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Local Expertise, Global Standards</h3>
              <p>Based in Rwanda, we understand local challenges while maintaining international quality standards.</p>
            </div>
            <div className="reason-card">
              <h3>End-to-End Solutions</h3>
              <p>From concept to deployment, we handle every aspect of your technology project.</p>
            </div>
            <div className="reason-card">
              <h3>Student-Friendly</h3>
              <p>We specialize in helping students turn their academic projects into functional prototypes.</p>
            </div>
            <div className="reason-card">
              <h3>Innovation Focus</h3>
              <p>We stay ahead of technology trends to provide cutting-edge solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Whether you're running a business, developing a new product, or working on your final-year project, we're here to support your journey.</p>
          <div className="cta-buttons">
            <a href="/Contact" className="btn btn-primary">Get In Touch</a>
            <a href="/Services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;