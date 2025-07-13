import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Home IoT System',
      category: 'IoT Solutions',
      description: 'Complete home automation system with smart sensors, mobile app control, and energy monitoring.',
      technologies: ['Arduino', 'ESP32', 'React Native', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'Software Development',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Student Project Management System',
      category: 'Tech Mentorship',
      description: 'Platform for students to manage academic projects, track progress, and collaborate with mentors.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Industrial IoT Dashboard',
      category: 'IoT Solutions',
      description: 'Real-time monitoring dashboard for manufacturing equipment with predictive maintenance alerts.',
      technologies: ['React', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      category: 'Software Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'AI-Powered Chatbot',
      category: 'Software Development',
      description: 'Intelligent customer service chatbot with natural language processing and sentiment analysis.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'Redis'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop',
      status: 'In Progress'
    }
  ];

  const categories = ['All', 'IoT Solutions', 'Software Development', 'Tech Mentorship'];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Discover how we've helped businesses and students achieve their technology goals</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">
                    <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"There Tech transformed our business with their IoT solution. The smart monitoring system has increased our efficiency by 40%."</p>
              </div>
              <div className="testimonial-author">
                <h4>John Doe</h4>
                <span>CEO, TechCorp Rwanda</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The team helped me turn my final year project into a working prototype. Their mentorship was invaluable to my academic success."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <span>Computer Science Student</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Professional, reliable, and innovative. There Tech delivered our e-commerce platform on time and exceeded our expectations."</p>
              </div>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <span>Founder, RwandanMart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Whether you're a business looking to innovate or a student with a great idea, we're here to help you succeed.</p>
          <div className="cta-buttons">
            <a href="/Contact" className="btn btn-primary">Get Started</a>
            <a href="/Services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;