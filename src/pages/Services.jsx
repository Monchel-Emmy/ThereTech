import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const allServices = [
    {
      icon: 'fas fa-microchip',
      title: 'IoT Solutions',
      description: 'We design intelligent systems that connect devices, automate tasks, and boost efficiency. Our IoT solutions help businesses optimize operations and create smart environments.',
      features: [
        'Smart Home & Building Automation',
        'Industrial IoT & Manufacturing',
        'Sensor Networks & Data Collection',
        'Real-time Monitoring Systems',
        'Predictive Maintenance Solutions',
        'Energy Management Systems'
      ],
      color: 'blue'
    },
    {
      icon: 'fas fa-code',
      title: 'Software Development',
      description: 'From "just an idea" to fully functional apps, we create custom software solutions tailored to solve real world challenges. We build scalable, secure, and user-friendly applications.',
      features: [
        'Web Applications & E-commerce',
        'Mobile Apps (iOS & Android)',
        'Custom Business Software',
        'API Development & Integration',
        'Database Design & Management',
        'Cloud-based Solutions'
      ],
      color: 'green'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'IT Consulting',
      description: 'We offer expert advice to help your business stay ahead in this fast-paced digital world. Our strategic guidance ensures technology investments drive real business value.',
      features: [
        'Technology Strategy & Planning',
        'Digital Transformation',
        'System Architecture Design',
        'Security & Compliance',
        'Performance Optimization',
        'Technology Stack Selection'
      ],
      color: 'orange'
    },
    {
      icon: 'fas fa-users',
      title: 'Tech Mentorship & Student Support',
      description: 'We help young innovators by turning bold ideas into functional prototypes and successful academic projects. Our mentorship program nurtures the next generation of tech leaders.',
      features: [
        'Student Project Development',
        'Academic Project Support',
        'Prototype Development',
        'Career Guidance & Mentoring',
        'Technical Skills Training',
        'Innovation Workshops'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions to help your business grow and innovate</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We understand your needs, goals, and challenges to create the perfect solution.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We design a comprehensive strategy and roadmap for your project.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>We build your solution using modern technologies and best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Launch & Support</h3>
              <p>We deploy your solution and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help you achieve your technology goals.</p>
          <a href="/Contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default Services;