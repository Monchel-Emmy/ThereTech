import React from 'react';
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Icon mapping for Lucide icons
const iconMap = {
  'Code': Code,
  'Cloud': Cloud,
  'Database': Database,
  'Smartphone': Smartphone,
  'Zap': Zap,
  'Shield': Shield,
  'fas fa-cog': Code, // Fallback for old FontAwesome icons
};

const ServiceCard = ({ icon, title, description, features, color, image, compact = false }) => {
  const IconComponent = iconMap[icon] || Code;
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
  };

  const gradient = colorClasses[color] || 'from-blue-500 to-blue-600';

  return (
    <div className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100/80 overflow-hidden ${
      compact ? 'p-6' : 'p-8'
    }`}>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <div className="absolute inset-[1px] bg-white rounded-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon/Image */}
        <div className="flex items-start justify-between mb-6">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-16 h-16 rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          )}
          
          {!compact && (
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" />
          )}
        </div>
        
        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-3 ${
          compact ? 'text-xl' : 'text-2xl'
        }`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-gray-600 leading-relaxed mb-4 ${
          compact ? 'text-sm' : 'text-base'
        }`}>
          {compact ? description?.slice(0, 120) + (description && description.length > 120 ? '…' : '') : description}
        </p>
        
        {/* Features */}
        {!compact && features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
            {features.length > 4 && (
              <li className="text-sm text-blue-600 font-medium">
                +{features.length - 4} more features
              </li>
            )}
          </ul>
        )}
        
        {/* Learn More Button */}
        {!compact && (
          <button className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
      
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default ServiceCard;