import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApiQuery';
import { ServiceSkeleton } from '../components/SkeletonLoader';
import "../components/Notification.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading, error } = useServices();
  
  const featuredServices = (data?.services || []).slice(0, 3);

  const transformedServices = featuredServices.map(service => ({
    icon: service.icon || 'fas fa-cog',
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || 'blue',
    image: service.image || null
  }));

  return (
    <div className="home min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
    
      <div className="relative overflow-hidden">
        <Hero />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/5 pointer-events-none"></div>
      </div>
      
      
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white relative">
      
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-blue-50/80"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-blue-500 mr-4"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
              <div className="w-12 h-1 bg-blue-500 ml-4"></div>
            </div>
            <h2 className="text-3xl font-bold  mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional solutions tailored to your unique needs with cutting-edge technology and expert craftsmanship
            </p>
          </div>
          
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[...Array(3)].map((_, index) => (
                <ServiceSkeleton key={index} />
              ))}
            </div>
          )}
          
          {error && (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <p className="text-red-600 text-xl font-medium">Failed to load services</p>
              <p className="text-gray-500 mt-2">Please try again later</p>
            </div>
          )}
          
          {!isLoading && !error && transformedServices.length === 0 && (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">📋</span>
              </div>
              <p className="text-gray-700 text-xl font-medium">No services available</p>
              <p className="text-gray-500 mt-2">Check back soon for updates</p>
            </div>
          )}
          
          {!isLoading && !error && transformedServices.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {transformedServices.map((service, index) => (
                  <div key={index} className="transform hover:scale-105 transition-all duration-300">
                    <ServiceCard compact {...service} />
                  </div>
                ))}
              </div>
              <div className="text-center mt-16">
                <Link
                  to="/Services" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1"
                >
                  View All Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative">
        <Stats />
      </div>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-blue-900/0"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-8 h-1 bg-white/60 mr-3"></div>
              <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">Get Started</span>
              <div className="w-8 h-1 bg-white/60 ml-3"></div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Ready to <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Level Up</span> Your Project?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you're running a business, developing a new product, or working on your final-year project, 
              we're here to support your journey with expert solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/Contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 min-w-[200px] justify-center"
              >
                Get Started Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="/Services" 
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] justify-center"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-200 text-sm uppercase tracking-wider mb-4">Trusted by 500+ Companies</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-500"></div>
      </section>
    </div>
  );
};

export default Home;