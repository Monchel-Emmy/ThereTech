import  { useEffect, useState, useRef } from 'react';
import { Rocket, Smile, Calendar, Award, Target, Users } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '+', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { 
      number: 9, 
      label: 'Projects Completed', 
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      delay: 0
    },
    { 
      number: 15, 
      label: 'Happy Clients', 
      icon: Smile,
     color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-green-500/10',
      delay: 200
    },
    { 
      number: 4, 
      label: 'Years Experience', 
      icon: Calendar,
      color: 'from-blue-500 to-blue-600', 
      bgColor: 'bg-purple-500/10',
      delay: 400
    }
  ];

  const [animated, setAnimated] = useState(false);

  return (
    <section className="py-18 bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(59,130,246,0.08),transparent)]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-100/10 rounded-[100%] blur-[100px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm ">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mr-3 rounded-full"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Achievements</span>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-400 ml-3 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
            Delivering Excellence, <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Every Time</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our track record speaks for itself. We measure success by the lasting impact we create 
            for our clients through innovative solutions and unwavering commitment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                {/* Card Background Effect */}
                <div className={`absolute inset-0 ${stat.bgColor} rounded-3xl transform group-hover:scale-105 transition-transform duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1px] bg-white rounded-3xl"></div>
                </div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-blue-100/50 group-hover:border-blue-200/80">
                  <div className="relative z-10 text-center">
                    {/* Icon Container */}
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                    
                    {/* Animated Number */}
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                      <AnimatedCounter target={stat.number} suffix="+" duration={2000} />
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-700 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300 mb-4">
                      {stat.label}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animated ? `${(stat.number / 20) * 100}%` : '0%',
                          transitionDelay: `${stat.delay + 500}ms`
                        }}
                      ></div>
                    </div>
                    
                    {/* Decorative Dot */}
                    <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-16">
         
          </div>
        </div>

     
      
      {/* Floating Elements */}
      
      {/* Add custom animations to your CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Stats;