import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/theretech.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={logo} 
                  alt="There Tech Ltd" 
                  className="w-12 h-12 rounded-xl bg-white/10 p-2 backdrop-blur-sm border border-blue-500/20" 
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                  There Tech Ltd
                </h3>
              </div>
              <p className="text-blue-100/80 leading-relaxed text-lg">
                Empowering the next generation of builders, problem-solvers, and tech leaders with innovative solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: 'fab fa-linkedin', color: 'hover:bg-blue-600' },
                  { icon: 'fab fa-twitter', color: 'hover:bg-sky-400' },
                  { icon: 'fab fa-github', color: 'hover:bg-gray-600' },
                  { icon: 'fab fa-whatsapp', color: 'hover:bg-green-500' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 ${social.color} group`}
                  >
                    <i className={`${social.icon} text-white/70 group-hover:text-white text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {['IoT Solutions', 'Software Development', 'IT Consulting', 'Tech Mentorship'].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/Services" 
                    className="text-blue-100/70 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                    <i className="fas fa-arrow-right text-xs ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/About' },
                { name: 'Projects', path: '/Projects' },
                { name: 'Contact', path: '/Contact' },
                { name: 'Careers', path: '/Contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="text-blue-100/70 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                    <i className="fas fa-arrow-right text-xs ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-400 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              {[
                { icon: 'fas fa-envelope', text: 'theretech250@gmail.com', link: 'mailto:theretech250@gmail.com' },
                { icon: 'fab fa-whatsapp', text: '+250 782 419 365', link: 'https://wa.me/250782419365' },
                { icon: 'fas fa-map-marker-alt', text: 'Kigali, Rwanda', link: '#' }
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link} 
                  className="flex items-center space-x-4 group transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                    <i className={`${contact.icon} text-blue-400 group-hover:text-blue-300`}></i>
                  </div>
                  <span className="text-blue-100/80 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <p className="text-blue-100/60 text-lg">
              &copy; 2025 There Tech Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="text-center lg:text-right max-w-2xl">
            <p className="text-blue-100/40 italic text-sm leading-relaxed">
              "At There Tech, we don't just build projects, we create solutions that drive lasting impact."
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 z-50 group"
      >
        <i className="fas fa-chevron-up text-white group-hover:text-blue-100 transition-colors duration-300"></i>
      </button>
    </footer>
  );
};

export default Footer;