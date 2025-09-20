import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./logo";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         
          <Logo 
            onClick={closeMenu} 
            size="large" 
            showText={true} 
            className="flex-shrink-0"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/Services" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/Projects" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/About" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/Contact" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center">
            <button 
              type="button" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
              onClick={() => {
                navigate("/Contact");
                closeMenu();
              }}
            >
              Get Started <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white dark:bg-gray-900 shadow-inner border-t border-gray-100 dark:border-gray-800">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/Services" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/Projects" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/About" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/Contact" 
            className={({ isActive }) => 
              `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="pt-4 px-2">
            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              onClick={() => {
                navigate("/Contact");
                closeMenu();
              }}
            >
              Get Started <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;