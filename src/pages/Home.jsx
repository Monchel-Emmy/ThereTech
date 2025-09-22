

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
      
      <section className="py-16 bg-gray-50">
  <div className="container-custom">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
    
    {isLoading && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <ServiceSkeleton key={index} />
        ))}
      </div>
    )}
    
    {error && (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">❌ Failed to load services. Please try again later.</p>
      </div>
    )}
    
    {!isLoading && !error && transformedServices.length === 0 && (
      <div className="text-center py-12">
        <p className="text-gray-500">No services available at the moment.</p>
      </div>
    )}
    
    {!isLoading && !error && transformedServices.length > 0 && (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformedServices.map((service, index) => (
            <ServiceCard key={index} compact {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
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