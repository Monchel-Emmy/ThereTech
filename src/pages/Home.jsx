import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ServiceCard from "../components/ServiceCard";
import { useServices } from "../hooks/useApiQuery";
import { ServiceSkeleton } from "../components/SkeletonLoader";
import "../components/Notification.css";
import { Link } from "react-router-dom";
import SEO from "../components/seo";


const Home = () => {
  const { data, isLoading, error } = useServices();

  const featuredServices = (data?.services || []).slice(0, 3);

  const transformedServices = featuredServices.map((service) => ({
    icon: service.icon || "fas fa-cog",
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || "blue",
    image: service.image || null,
  }));

  return (
    <>
    <SEO title="ThereTech||Home Page"/>
    <div className=" min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
     

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
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Our Services
              </span>
              <div className="w-12 h-1 bg-blue-500 ml-4"></div>
            </div>
            <h2 className="text-3xl font-bold  mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional solutions tailored to your unique needs
              with cutting-edge technology and expert craftsmanship
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
              <p className="text-red-600 text-xl font-medium">
                Failed to load services
              </p>
              <p className="text-gray-500 mt-2">Please try again later</p>
            </div>
          )}

          {!isLoading && !error && transformedServices.length === 0 && (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">📋</span>
              </div>
              <p className="text-gray-700 text-xl font-medium">
                No services available
              </p>
              <p className="text-gray-500 mt-2">Check back soon for updates</p>
            </div>
          )}

          {!isLoading && !error && transformedServices.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {transformedServices.map((service, index) => (
                  <div
                    key={index}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
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
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
    </div>
    </>
  );
};

export default Home;
