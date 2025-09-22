import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./logo";
import Button from "./button";

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
    <nav className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <Logo 
            onClick={closeMenu} 
            size="large" 
            showText={true} 
            className="flex-shrink-0 transition-transform hover:scale-105"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600  " 
                    : " hover:text-blue-600 "
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/Services" 
              className={({ isActive }) => 
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600" 
                    : " hover:text-blue-600"
                }`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/Projects" 
              className={({ isActive }) => 
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink 
            to="/About" 
            className={({ isActive }) => 
              `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/Contact" 
            className={({ isActive }) => 
              `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA Button with Enhanced Gradient */}
        <div className="hidden md:flex md:items-center">
          <button 
            type="button" 
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center hover:-translate-y-0.5 group"
            onClick={() => {
              navigate("/Contact");
              closeMenu();
            }}
          >
            Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
      <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-inner border-t border-gray-100">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
              isActive 
                ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                ? "text-blue-600 bg-blue-50 shadow-sm border border-blue-100" 
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
        <div className="pt-3 px-2">
          <Button
            type="button" 
            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:-translate-y-0.5 group"
            onClick={() => {
              navigate("/Contact");
              closeMenu();
            }}
          >
            Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;