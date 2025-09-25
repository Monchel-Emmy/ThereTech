
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from "../assets/images/theretech.png"

const Logo = ({ 
  to = "/", 
  onClick = () => {}, 
  className = "", 
  showText = true, 
  size = "medium",
  withBackground = false 
}) => {
 
  const sizeClasses = {
    small: "h-8",
    medium: "h-12",
    large: "h-22"
  };


  const textSizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl"
  };

  return (
    <NavLink
      to={to}
      className={`flex items-center ${withBackground ? 'p-2 rounded-lg bg-gray-50 dark:bg-gray-800' : ''} ${className}`}
      onClick={onClick}
    >
      <img 
        src={logo}
        alt="There Tech Ltd" 
        className={`${sizeClasses[size]} w-auto transition-all duration-300 hover:scale-105`} 
      />
      {showText && (
        <span className={`ml-3 font-bold text-gray-800 dark:text-white ${textSizeClasses[size]}`}>
          There Tech
        </span>
      )}
    </NavLink>
  );
};

Logo.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  showText: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  withBackground: PropTypes.bool
};

export default Logo;