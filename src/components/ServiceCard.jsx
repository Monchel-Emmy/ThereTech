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
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  Code: Code,
  Cloud: Cloud,
  Database: Database,
  Smartphone: Smartphone,
  Zap: Zap,
  Shield: Shield,
};

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  color,
  image,
  layout = "default",
  index = 0,
}) => {
  const IconComponent = iconMap[icon] || Code;

  const colorConfigs = {
    blue: { gradient: "from-blue-500 to-blue-600", light: "blue-100", text: "text-blue-500" },
    green: { gradient: "from-indigo-500 to-blue-600", light: "blue-100", text: "text-indigo-500" },
    purple: { gradient: "from-blue-500 to-indigo-600", light: "indigo-100", text: "text-blue-500" },
    orange: { gradient: "from-blue-500 to-indigo-600", light: "indigo-100", text: "text-indigo-500" },
    red: { gradient: "from-indigo-500 to-blue-600", light: "blue-100", text: "text-blue-500" },
  };

  const config = colorConfigs[color] || colorConfigs.blue;

  if (layout === "timeline") {
    return (
      <div
        className={`group relative flex flex-col md:flex-row items-center mb-24 md:mb-32 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Content Section */}
        <div
          className={`w-full md:w-1/2 ${
            index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
          } mb-8 md:mb-0`}
        >
          <div className="relative">
            {/* Timeline Circle */}
            <div
              className={`absolute top-0 md:top-1/2 transform md:-translate-y-1/2 
                ${index % 2 === 0 ? "left-4 md:-right-4" : "right-4 md:-left-4"} 
                w-8 h-8 bg-gradient-to-br ${
                  config.gradient
                } rounded-full flex items-center justify-center z-20 shadow-md`}
            >
              <Circle className="w-4 h-4 text-white" fill="currentColor" />
            </div>

            {/* Content Card */}
            <div
              className={`relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all duration-700 hover:scale-[1.02] ${
                index % 2 === 0 ? "hover:translate-x-2" : "hover:-translate-x-2"
              }`}
            >
              <div className={`inline-flex items-center px-4 py-2 bg-${config.light} rounded-full mb-4 `}>
                <IconComponent className={`w-5 h-5 ${config.text} mr-2`} /> {/* Used config.text here */}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 clear-both leading-tight">
                {title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                {description}
              </p>

              {features && features.length > 0 && (
                <div className="space-y-2 mb-6">
                  {features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" /> {/* Changed to green */}
                      <span className="text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/Projects"
                className={`inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold transition-colors text-sm md:text-base`}
              >
                Explore More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Central Icon - More prominent and responsive */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 z-10 mx-auto md:mx-0 -mt-12 md:mt-0"> {/* Adjusted margin for stacking */}
          <div className="relative">
            <div className={`w-full h-full bg-gradient-to-br from-white to-${color}-100 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white transform group-hover:scale-110 transition-all duration-500`}>
              {image ? (
                <img src={image} alt={title} className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover" />
              ) : (
                <IconComponent className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent`} />
              )}
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-3xl transform rotate-12 -z-10 opacity-30 group-hover:rotate-[20deg] group-hover:opacity-50 transition-transform duration-500`}></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-white/20 via-white/50 to-white/20 rounded-3xl blur-md opacity-50"></div> {/* Subtle glow effect */}
          </div>
        </div>

        {/* Spacer for timeline layout */}
        <div className="hidden md:block w-1/2"></div>
      </div>
    );
  }

  // Default floating panel design (non-card)
  return (
    <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 overflow-hidden h-full flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_30%,#000,transparent_50%)]"></div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-100 via-white/50 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[1.5px] bg-white rounded-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Icon with Floating Effect */}
        <div className="relative inline-block mb-6 flex-shrink-0">
          <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 group-hover:rotate-6 transition-all duration-500`}>
            {image ? (
              <img src={image} alt={title} className="w-7 h-7 md:w-8 md:h-8 rounded-lg object-cover" />
            ) : (
              <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
            )}
          </div>
          <div className={`absolute -inset-3 bg-gradient-to-br from-${color}-500/20 to-${color}-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-tight flex-shrink-0">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-grow">
          {description}
        </p>

        {/* Features as Tags */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
            {features.slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className={`px-3 py-1 bg-gradient-to-r from-${color}-50 to-${color}-100 text-gray-700 rounded-full text-xs md:text-sm font-medium border border-${color}-100`}
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default ServiceCard;