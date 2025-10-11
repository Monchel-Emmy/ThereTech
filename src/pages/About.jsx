import React from "react";
import { useAbout } from "../hooks/useApiQuery";
import {
  Target,
  Eye,
  Star,
  Users,
  Calendar,
  Rocket,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Linkedin,
  Github,
  Mail,
  Award,
  ArrowRight,
  Sparkles,
  Hexagon,
  Circle,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { baseUrl } from "../config";


const About = () => {
  const { data, isLoading, error } = useAbout();

  // Use API data with fallbacks
  const aboutData = data?.about || {
    companyName: "There Tech",
    tagline:
      "Empowering the next generation of builders, problem-solvers, and tech leaders",
    mainDescription:
      "There Tech Ltd is a Rwandan tech company on a mission to help people and businesses level up through smart, modern and innovative solutions.",
    mission:
      "Based in Kigali, Rwanda, we're committed to empowering the next generation of builders, problem-solvers, and tech leaders who will shape the future of technology in Africa and beyond.",
    stats: {
      yearsExperience: 5,
      projectsCompleted: 25,
      clientsServed: 15,
    },
  };

  const valuesList = data?.about?.values || [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative thinking to deliver exceptional solutions.",
      icon: "Zap",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring the highest quality standards.",
      icon: "Star",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "Users",
    },
    {
      title: "Integrity",
      description:
        "We maintain transparency, honesty, and ethical practices in everything we do.",
      icon: "Shield",
    },
  ];

  const teamList = [
    {
      name: "Tuyisenge Emmanuel",
      role: "CEO",
      bio: "Leading the company with vision and strategic direction, driving innovation and growth.",
      image: null,
    },
    {
      name: "Gasasira Flex",
      role: "CTO",
      bio: "Overseeing technology strategy and development, ensuring technical excellence and innovation.",
      image: null,
    },
    {
      name: "Michael ITWITAHO",
      role: "Project Manager",
      bio: "Experienced in managing complex projects and ensuring timely delivery with quality.",
    },
  ];

  const visionText =
    data?.about?.vision ||
    "To be the leading technology partner for innovative businesses worldwide, recognized for our technical excellence, creative solutions, and unwavering commitment to client success.";

  // Icon mapping
  const iconMap = {
    Target,
    Eye,
    Star,
    Users,
    Calendar,
    Rocket,
    Lightbulb,
    Heart,
    Shield,
    Zap,
  };

  const getInitials = (name = "") =>
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0]?.toUpperCase() || "")
      .slice(0, 2)
      .join("");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      <Meta
        title="About Us | There Tech Ltd"
        description="Learn more about our mission, vision, and team on the About page."
        keywords="About us, Company info, Team, Mission"
        url={`${baseUrl}/About`}
      />

      {/* Enhanced Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-300 to-indigo-400">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-48 h-48 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 md:h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <Target className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0" />
              <span className="font-semibold text-xs md:text-sm uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                About {aboutData.companyName}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-12 px-2 sm:px-4">
              {aboutData.tagline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 lg:gap-6 px-4">
              <Link
                to="/About"
                className="group relative overflow-hidden w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[180px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center text-sm md:text-base lg:text-lg">
                  Learn More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>

              <Link
                to="/contact"
                className="group w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[180px] text-center"
              >
                <span className="flex items-center justify-center text-sm md:text-base lg:text-lg">
                  Contact Us
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-4 md:bottom-10 md:left-10 animate-float">
          <Hexagon className="w-6 h-6 md:w-8 md:h-8 text-blue-300/40" />
        </div>
        <div className="absolute top-8 right-4 md:top-20 md:right-20 animate-float delay-1000">
          <Circle className="w-5 h-5 md:w-6 md:h-6 text-blue-300/30" />
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section id="mission" className="py-12 md:py-16 lg:py-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                Our Purpose
              </span>
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 ml-3 md:ml-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl  font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Mission
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Mission Text */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-blue-100/50">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                    {aboutData.mainDescription}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {aboutData.mission}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    number: aboutData.stats.yearsExperience,
                    label: "Years Experience",
                    icon: Calendar,
                    color: "from-blue-500 to-indigo-600",
                  },
                  {
                    number: aboutData.stats.projectsCompleted,
                    label: "Projects Completed",
                    icon: Rocket,
                    color: "from-indigo-500 to-blue-600",
                  },
                  {
                    number: aboutData.stats.clientsServed,
                    label: "Happy Clients",
                    icon: Users,
                    color: "from-blue-500 to-indigo-600",
                  },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group text-center bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2"
                    >
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4`}
                      >
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                        {stat.number}+
                      </div>
                      <div className="text-gray-600 font-medium text-xs md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center py-12 md:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl md:rounded-3xl mb-4 md:mb-6">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-3 md:mb-4">
                Connection Error
              </h3>
              <button
                onClick={() => window.location.reload()}
                className="px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Retry Connection
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Vision Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-xs md:text-sm">
                Our Vision
              </span>
              <div className="w-8 h-0.5 bg-blue-500 ml-3 md:ml-4"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Looking Towards the{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-blue-100/50 text-center">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-200 mx-auto mb-4 md:mb-6" />
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 leading-relaxed italic">
                "{visionText}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-12 md:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                Our Values
              </span>
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 ml-3 md:ml-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl  font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {valuesList.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Star;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-blue-100/50 h-full">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                Our Team
              </span>
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 ml-3 md:ml-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving innovation and excellence at There Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {teamList.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10 p-4 md:p-6">
                  {/* Avatar and Info */}
                  <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
                        {getInitials(member.name)}
                      </div>
                      <p className="text-blue-600 text-sm font-medium">Photo Space</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">
                        {member.name}
                      </h3>
                      <span className="inline-block px-2 md:px-3 py-1 bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold rounded-full">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 rounded md:rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 rounded md:rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 rounded md:rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl md:rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto text-center text-white">
            {[
              {
                number: aboutData.stats.yearsExperience,
                label: "Years Experience",
                icon: Calendar,
              },
              {
                number: aboutData.stats.projectsCompleted,
                label: "Projects Completed",
                icon: Rocket,
              },
              {
                number: aboutData.stats.clientsServed,
                label: "Happy Clients",
                icon: Users,
              },
              { number: "100%", label: "Success Rate", icon: Award },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group p-3 md:p-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-semibold text-xs md:text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

  
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-6 md:mb-8 text-blue-600" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Ready to Work{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Together?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              Whether you're running a business, developing a new product, or
              working on your final-year project, we're here to support your
              journey with expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 text-sm md:text-base"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 text-sm md:text-base"
              >
                Our Services
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
