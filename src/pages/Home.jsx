

import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApiQuery';
import { ServiceSkeleton } from '../components/SkeletonLoader';
//notifications

import "../components/Notification.css";

const Home = () => {

 
  

  const { data, isLoading, error } = useServices();
  
  // Use API data only
  const featuredServices = (data?.services || []).slice(0, 3);

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
          <h2>What We Do</h2>
          
          {isLoading && (
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
          
          {!isLoading && !error && transformedServices.length === 0 && (
            <div className="empty-state">
              <p>No services available at the moment.</p>
            </div>
          )}
          
          {!isLoading && !error && transformedServices.length > 0 && (
            <>
              <div className="services-grid">
                {transformedServices.map((service, index) => (
                  <ServiceCard key={index} compact {...service} />
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a href="/Services" className="btn btn-secondary">View all services</a>
              </div>
            </>
          )}
        </div>
      </section>
      
      <Stats />
      
      <section >
        <div >
          <h2>Ready to Level Up?</h2>
          <p>Whether you're running a business, developing a new product, or working on your final-year project, we're here to support your journey.</p>
          <div>
            <a href="/Contact" >Get Started</a>
            <a href="/Services">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;