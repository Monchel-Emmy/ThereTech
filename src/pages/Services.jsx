import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApiQuery';
import { ServiceSkeleton } from '../components/SkeletonLoader';
import { 
  Target, 
  Zap, 
  Users, 
  ArrowRight,
  Search,
  Map,
  Code,
  Rocket,
  Phone,
  CheckCircle,
  Lightbulb,
  Calendar
} from 'lucide-react';

const Services = () => {
  const { data, isLoading, error } = useServices();
  
  const allServices = data?.services || [];

  const transformedServices = allServices.map(service => ({
    icon: service.icon || 'Code',
    title: service.name || service.title,
    description: service.description,
    features: service.features || [],
    color: service.color || 'blue',
    image: service.image || null
  }));

  const processSteps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We deeply understand your needs, goals, and challenges to create the perfect solution.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Map,
      number: '02',
      title: 'Strategic Planning',
      description: 'We design a comprehensive strategy and roadmap tailored to your project requirements.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Code,
      number: '03',
      title: 'Development & Implementation',
      description: 'We build your solution using modern technologies and industry best practices.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance services.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm uppercase tracking-widest">Our Expertise</span>
            </div>
            
            <h1 className="text-6xl font-black mb-6 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Technology Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Empowering your business with cutting-edge technology solutions designed to drive growth, 
              enhance efficiency, and foster innovation in today's digital landscape.
            </p>
            
            {/* Stats Bar */}
            <div className="flex justify-center items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Technologies</div>
              </div>
              <div className="w-px h-8 bg-blue-400/50"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
              <div className="w-px h-8 bg-blue-400/50"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-blue-500 mr-4 rounded-full"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Offer</span>
              <div className="w-12 h-1 bg-blue-500 ml-4 rounded-full"></div>
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end technology solutions that transform 
              your ideas into powerful digital experiences.
            </p>
          </div>

          {/* Services Content */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[...Array(6)].map((_, index) => (
                <ServiceSkeleton key={index} />
              ))}
            </div>
          )}
          
          {error && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-100">
                <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h3>
                <p className="text-gray-600 mb-6">We're having trouble loading our services. Please check your connection.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Try Again
                </button>
              </div>
            </div>
          )}
          
          {!isLoading && !error && transformedServices.length === 0 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100">
                <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
                <p className="text-gray-600">We're preparing something amazing for you. Check back soon!</p>
              </div>
            </div>
          )}
          
          {!isLoading && !error && transformedServices.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {transformedServices.map((service, index) => (
                <div key={index} className="group">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_20%,rgba(59,130,246,0.03)_20%,rgba(59,130,246,0.03)_80%,transparent_80%)]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-blue-500 mr-4 rounded-full"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Methodology</span>
              <div className="w-12 h-1 bg-blue-500 ml-4 rounded-full"></div>
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Work</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven process ensures that every project is delivered on time, within budget, 
              and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group relative">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-100 transform -translate-y-1/2 z-0"></div>
                  )}
                  
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-blue-100/50 group-hover:border-blue-200/80">
                    {/* Number Badge */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <span className="text-white font-black text-2xl">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 mr-3" />
              <span className="font-semibold uppercase tracking-widest text-sm text-blue-200">Get Started</span>
            </div>
            
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Business?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals and drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/Contact" 
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-3" />
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/Projects" 
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-200">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-200">No Obligation Quote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-200">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;