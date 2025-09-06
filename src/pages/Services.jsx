import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApi';
import { ServiceSkeleton } from '../components/SkeletonLoader';

const Services = () => {
  const { data, loading, error } = useServices();
  
  // Use API data only
  const allServices = data?.services || [];

  // Transform API data to match component props
  const transformedServices = allServices.map(service => ({
    icon: service.icon || 'fas fa-cog',
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || 'blue',
    image: service.image || null
  }));

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
          {loading && (
            <div className="services-grid">
              {[...Array(6)].map((_, index) => (
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