import ServiceCard from "../components/ServiceCard";
import { useServices } from "../hooks/useApiQuery";
import { ServiceSkeleton } from "../components/SkeletonLoader";
import {
  Zap,
  ArrowRight,
  Search,
  Map,
  Code,
  Rocket,
  Lightbulb,
  Circle,
  Hexagon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { data, isLoading, error } = useServices();

  const allServices = data?.services || [];

  const transformedServices = allServices.map((service) => ({
    icon: service.icon || "Code",
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || "blue",
    image: service.image || null,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Hero Section with Abstract Background */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-300 to-indigo-400">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Transformative Technology Services
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
              We don't just build solutions—we craft experiences that redefine
              what's possible in the digital landscape.
            </p>

            <div className="flex justify-center space-x-6">
              <Link
                to="#services"
                className="group relative overflow-hidden px-8 py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center">
                  Start Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 animate-float">
          <Hexagon className="w-8 h-8 text-blue-300/40" />
        </div>
        <div className="absolute top-20 right-20 animate-float delay-1000">
          <Circle className="w-6 h-6 text-purple-300/30" />
        </div>
      </section>

      <section  className="py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-blue-500 mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Our Expertise
              </span>
              <div className="w-12 h-1 bg-blue-500 ml-4"></div>
            </div>

            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Service Spectrum
            </h2>
          </div>

          {/* Services Timeline Layout */}
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="space-y-20">
                {[...Array(4)].map((_, index) => (
                  <ServiceSkeleton key={index} />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl mb-6">
                  <Zap className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  Connection Error
                </h3>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Retry Connection
                </button>
              </div>
            ) : transformedServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl mb-6">
                  <Lightbulb className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  New Services Coming Soon
                </h3>
              </div>
            ) : (
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200"></div>

                {transformedServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    layout="timeline"
                    index={index}
                    
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Flow Section - UPDATED */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-8 h-1 bg-blue-500 mr-3"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                Workflow
              </span>
              <div className="w-8 h-1 bg-blue-500 ml-3"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Creative Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined approach to delivering exceptional results
            </p>
          </div>

          {/* Animated Process Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Search,
                  title: "Discover",
                  desc: "Deep dive into your vision",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Map,
                  title: "Plan",
                  desc: "Strategic roadmap creation",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Code,
                  title: "Create",
                  desc: "Innovative development",
                  color: "from-indigo-500 to-blue-600",
                },
                {
                  icon: Rocket,
                  title: "Launch",
                  desc: "Seamless deployment",
                  color: "from-blue-500 to-indigo-600",
                },
              ].map((step, index) => (
                <div key={index} className="group relative">
                  {/* Connecting Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-3/4 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500 z-0"></div>
                  )}

                  <div className="relative z-10 text-center group">
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-tight px-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="flex items-center justify-between mb-4 px-4">
              <span className="text-xs font-medium text-blue-600">
                Discovery
              </span>
              <span className="text-xs font-medium text-indigo-600">
                Planning
              </span>
              <span className="text-xs font-medium text-blue-600">
                Development
              </span>
              <span className="text-xs font-medium text-indigo-600">
                Launch
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 mb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's collaborate to bring your vision to life with our expert
              services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
