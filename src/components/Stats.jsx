import React from 'react';

const Stats = () => {
  const stats = [
    { number: '9+', label: 'Projects Completed', icon: '🚀' },
    { number: '15+', label: 'Happy Clients', icon: '😊' },
    { number: '4+', label: 'Years Experience', icon: '⭐' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-blue-400 mr-4"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Achievements</span>
            <div className="w-16 h-1 bg-blue-400 ml-4"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Delivering Excellence, <span className="text-blue-600">Every Time</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. We measure success by the impact we create for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50 hover:border-blue-200/80"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl text-white">{stat.icon}</span>
                </div>
                
                {/* Number */}
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-gray-700 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Decorative Dot */}
                <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:inset-full transition-all duration-1000 group-hover:duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-blue-100">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium">Growing strong with 100% client satisfaction</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-300/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-blue-500/40 rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default Stats;