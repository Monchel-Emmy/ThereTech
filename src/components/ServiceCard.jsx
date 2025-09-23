import React from 'react';
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Circle,
  Hexagon
} from 'lucide-react';

const iconMap = {
  'Code': Code,
  'Cloud': Cloud,
  'Database': Database,
  'Smartphone': Smartphone,
  'Zap': Zap,
  'Shield': Shield,
  'fas fa-cog': Code,
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  color, 
  image, 
  compact = false,
  layout = 'default',
  index = 0 
}) => {
  const IconComponent = iconMap[icon] || Code;
  
  const colorConfigs = {
    blue: { gradient: 'from-blue-500 to-blue-600', light: 'blue-100' },
    green: { gradient: 'from-green-500 to-green-600', light: 'green-100' },
    purple: { gradient: 'from-purple-500 to-purple-600', light: 'purple-100' },
    orange: { gradient: 'from-orange-500 to-orange-600', light: 'orange-100' },
    red: { gradient: 'from-red-500 to-red-600', light: 'red-100' },
  };

  const config = colorConfigs[color] || colorConfigs.blue;

  if (layout === 'timeline') {
    return (
      <div className={`group relative flex items-center mb-32 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}>
        {/* Content */}
        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
          <div className="relative">
            {/* Decorative Element */}
            <div className={`absolute top-1/2 transform -translate-y-1/2 ${
              index % 2 === 0 ? '-right-4' : '-left-4'
            } w-8 h-8 bg-gradient-to-br ${config.gradient} rounded-full flex items-center justify-center z-20`}>
              <Circle className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            
            {/* Content Card */}
            <div className={`relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-700 hover:scale-105 ${
              index % 2 === 0 ? 'hover:translate-x-4' : 'hover:-translate-x-4'
            }`}>
              <div className={`inline-flex items-center px-4 py-2 bg-${config.light} rounded-full mb-4 ${
                index % 2 === 0 ? 'float-right' : 'float-left'
              }`}>
                {image ? (
                  <img src={image} alt={title} className="w-6 h-6 rounded-full mr-2" />
                ) : (
                  <IconComponent className="w-5 h-5 text-gray-700 mr-2" />
                )}
                <span className="text-sm font-semibold text-gray-700">Service {index + 1}</span>
              </div>
              
              <h3 className="text-3xl font-black text-gray-900 mb-4 clear-both">{title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
              
              {features && features.length > 0 && (
                <div className="space-y-2">
                  {features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <button className={`mt-6 inline-flex items-center font-semibold text-${color}-600 hover:text-${color}-700 transition-colors ${
                index % 2 === 0 ? 'float-right' : 'float-left'
              }`}>
                Explore More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white transform group-hover:scale-110 transition-all duration-500">
              {image ? (
                <img src={image} alt={title} className="w-10 h-10 rounded-lg" />
              ) : (
                <IconComponent className="w-10 h-10 bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl transform rotate-12 -z-10 opacity-20 group-hover:rotate-45 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Spacer */}
        <div className="w-1/2"></div>
      </div>
    );
  }

  // Default floating panel design (non-card)
  return (
    <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100/50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_30%,#000,transparent_50%)]"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Icon with Floating Effect */}
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {image ? (
              <img src={image} alt={title} className="w-8 h-8 rounded-lg" />
            ) : (
              <IconComponent className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Features as Tags */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
        
        {/* Animated CTA */}
        <button className="group/btn inline-flex items-center font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
          <span className="relative overflow-hidden">
            Discover More
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/btn:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="w-5 h-5 ml-3 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
      
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default ServiceCard;