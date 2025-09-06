import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApi';

const Home = () => {
  const { data, loading, error } = useServices();
  
  // Fallback data if API fails
  const fallbackServices = [
    {
      icon: 'fas fa-microchip',
      title: 'IoT Solutions',
      description: 'Design intelligent systems that connect devices, automate tasks, and boost efficiency.',
      features: ['Smart Home Systems', 'Industrial IoT', 'Sensor Networks', 'Data Analytics'],
      color: 'blue'
    },
    {
      icon: 'fas fa-code',
      title: 'Software Development',
      description: 'From "just an idea" to fully functional apps, we create custom software solutions.',
      features: ['Web Applications', 'Mobile Apps', 'Custom Software', 'API Development'],
      color: 'green'
    },
    {
      icon: 'fas fa-users',
      title: 'Tech Mentorship',
      description: 'We help young innovators by turning bold ideas into functional prototypes.',
      features: ['Student Projects', 'Academic Support', 'Prototype Development', 'Career Guidance'],
      color: 'purple'
    }
  ];

  // Use API data if available, otherwise fallback
  const featuredServices = data?.services || fallbackServices;

  // Transform API data to match component props
  const transformedServices = featuredServices.map(service => ({
    icon: service.icon || 'fas fa-cog',
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || 'blue',
    image: service.image || null
  }));

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-services">
        <div className="container">
          <h2 className="section-title">What We Bring to the Table</h2>
          
          {loading && (
            <div className="loading-state">
              <p>Loading services...</p>
            </div>
          )}
          
          {error && (
            <div className="error-state">
              <p>⚠️ Using fallback data (API error: {error})</p>
            </div>
          )}
          
          <div className="services-grid">
            {transformedServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <Stats />
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Level Up?</h2>
          <p>Whether you're running a business, developing a new product, or working on your final-year project, we're here to support your journey.</p>
          <div className="cta-buttons">
            <a href="/Contact" className="btn btn-primary">Get Started</a>
            <a href="/Services" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;