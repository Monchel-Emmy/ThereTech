import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useApiQuery';
import { ServiceSkeleton } from '../components/SkeletonLoader';
import { 

  Zap, 
   
  ArrowRight,
  Search,
  Map,
  Code,
  Rocket,

  Lightbulb,
  
  Sparkles,
  Users,
  Circle,
  Hexagon,
  User
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section with Abstract Background */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Animated Title */}
            <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
              <span className="font-semibold text-sm uppercase tracking-widest">Innovative Solutions</span>
            </div>
            
            <h1 className="text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Transformative
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
              We don't just build solutions—we craft experiences that redefine what's possible 
              in the digital landscape.
            </p>
            
            {/* Animated CTA */}
            <div className="flex justify-center space-x-6">
              <a href="#services" className="group relative overflow-hidden px-8 py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </a>
              
              <a href="/contact" className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center">
                  Start Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
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

      {/* Services Showcase - Non-Card Layout */}
      <section id="services" className="py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
              <User className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            
            
            <h2 className="text-6xl font-black text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Service Spectrum
              </span>
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
                <h3 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h3>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">New Services Coming Soon</h3>
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

      {/* Process Flow Section */}
      <section className="py-32 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Creative Process</span>
            </h2>
          </div>

          {/* Animated Process Flow */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Search, title: "Discover", desc: "Deep dive into your vision" },
                { icon: Map, title: "Plan", desc: "Strategic roadmap creation" },
                { icon: Code, title: "Create", desc: "Innovative development" },
                { icon: Rocket, title: "Launch", desc: "Seamless deployment" }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Abstract Design */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[size:10px_10px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-400 animate-pulse" />
            
            <h2 className="text-5xl font-black mb-8 leading-tight">
              Ready to Create Something{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Let's transform your ideas into digital masterpieces that stand the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <Rocket className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;