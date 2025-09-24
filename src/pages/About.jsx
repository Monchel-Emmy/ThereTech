import React from 'react';
import { useAbout } from '../hooks/useApiQuery';
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
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Code2,
  GraduationCap
} from 'lucide-react';

const About = () => {
  const { data, isLoading, error } = useAbout();

  // Use API data with fallbacks
  const aboutData = data?.about || {
    companyName: 'There Tech',
    tagline: 'Empowering the next generation of builders, problem-solvers, and tech leaders',
    mainDescription: 'There Tech Ltd is a Rwandan tech company on a mission to help people and businesses level up through smart, modern and innovative solutions.',
    mission: 'Based in Kigali, Rwanda, we\'re committed to empowering the next generation of builders, problem-solvers, and tech leaders who will shape the future of technology in Africa and beyond.',
    stats: {
      yearsExperience: 5,
      projectsCompleted: 25,
      clientsServed: 15
    }
  };
  
  const valuesList = data?.about?.values || [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative thinking to deliver exceptional solutions.",
      icon: "Zap"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards.",
      icon: "Star"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "Users"
    },
    {
      title: "Integrity",
      description: "We maintain transparency, honesty, and ethical practices in everything we do.",
      icon: "Shield"
    }
  ];

  const teamList = data?.about?.team || [
    {
      name: "Jean Jacques Mugisha",
      role: "Lead Developer & Founder",
      bio: "Full-stack developer with expertise in IoT, web technologies, and system architecture.",
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "jean@theretech.com"
      }
    },
    {
      name: "Michael ITWITAHO",
      role: "Project Manager",
      bio: "Experienced in managing complex projects and ensuring timely delivery with quality.",
      socialLinks: {
        linkedin: "#",
        email: "michael@theretech.com"
      }
    }
  ];

  const visionText = data?.about?.vision || 'To be the leading technology partner for innovative businesses worldwide, recognized for our technical excellence, creative solutions, and unwavering commitment to client success.';

  // Icon mapping
  const iconMap = {
    Target, Eye, Star, Users, Calendar, Rocket, Lightbulb, Heart, Shield, Zap
  };

  const getInitials = (name = '') => name.trim().split(/\s+/).map(w => w[0]?.toUpperCase() || '').slice(0,2).join('');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Target className="w-5 h-5 mr-3" />
              <span className="font-semibold text-sm uppercase tracking-widest">Our Story</span>
            </div>
            
            <h1 className="text-7xl font-black mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{aboutData.companyName}</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              {aboutData.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission Text */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-600 rounded-full opacity-20"></div>
                
                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-blue-100/50">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                    <Target className="w-4 h-4 mr-2" />
                    Our Mission
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {aboutData.mainDescription}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {aboutData.mission}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { number: aboutData.stats.yearsExperience, label: 'Years Experience', icon: Calendar, color: 'from-blue-500 to-blue-600' },
                  { number: aboutData.stats.projectsCompleted, label: 'Projects Completed', icon: Rocket, color: 'from-purple-500 to-purple-600' },
                  { number: aboutData.stats.clientsServed, label: 'Happy Clients', icon: Users, color: 'from-green-500 to-green-600' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}+</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Vision</span>
              <Eye className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-blue-100/50">
              <p className="text-2xl font-light text-gray-700 leading-relaxed italic">
                "{visionText}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-100">
                <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h3>
                <p className="text-gray-600">We're having trouble loading our information. Please try again later.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Values</span>
              <Star className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {valuesList.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Star;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-blue-100/50">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Meet Our Team</span>
              <Users className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              The Minds Behind <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">The Magic</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamList.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
                
                <div className="relative z-10 p-8">
                  {/* Avatar */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                        {getInitials(member.name)}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                         className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                         className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.socialLinks?.email && (
                      <a href={`mailto:${member.socialLinks.email}`} 
                         className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-400" />
            
            <h2 className="text-5xl font-black mb-8 leading-tight">
              Ready to Work <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Together?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you're running a business, developing a new product, or working on your final-year project, 
              we're here to support your journey with expert solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/Contact" 
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/Services" 
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;