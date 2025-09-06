import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApi';
import { ServiceSkeleton } from '../components/SkeletonLoader';

const Home = () => {
  const { data, loading, error } = useServices();
  
  // Use API data only
  const featuredServices = data?.services || [];

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
            <div className="services-grid">
              {[...Array(3)].map((_, index) => (
                <ServiceSkeleton key={index} />
              ))}
            </div>
          )}
          
          {error && (
            <div className="error-state">
              <p>❌ Failed to load services. Please try again later.</p>
            </div>
          )}
          
          {!loading && !error && transformedServices.length === 0 && (
            <div className="empty-state">
              <p>No services available at the moment.</p>
            </div>
          )}
          
          {!loading && !error && transformedServices.length > 0 && (
            <div className="services-grid">
              {transformedServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          )}
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