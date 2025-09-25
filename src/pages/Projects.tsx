import React, { useState } from 'react';
import { useProjects } from '../hooks/useApiQuery';
import { ProjectSkeleton } from '../components/SkeletonLoader';
import { 
  Filter, 
  Github, 
  ExternalLink, 
  Users, 
  Calendar,
  Building,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Zap,
  Lightbulb,
  Hexagon,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  _id?: string;
  id?: number;
  title: string;
  category: string;
  description: string;
  shortDescription?: string;
  technologies: string[];
  image?: string;
  status: string;
  client?: string;
  duration?: string;
  teamSize?: number;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
}

const Projects = () => {
  const { data, isLoading, error } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Use API data only
  const allProjects: Project[] = (data as any)?.projects || [];

  // Filter projects based on selection
  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  // Get unique categories and statuses for filters
  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];
  const statuses = ['All', ...Array.from(new Set(allProjects.map(p => p.status)))];

  // Transform API data to match component props
  const transformedProjects = filteredProjects.map(project => ({
    id: project._id || project.id || Math.random().toString(),
    title: project.title,
    category: project.category,
    description: project.shortDescription || project.description,
    technologies: project.technologies || [],
    image: project.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    status: project.status,
    client: project.client,
    duration: project.duration,
    teamSize: project.teamSize,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    features: project.features || []
  }));

  const testimonials = [
    {
      quote: "The team helped me turn my final year project into a working prototype. Their mentorship was invaluable to my academic success.",
      author: "Mugisha Jean Jacques",
      role: "Computer Science Student",
      rating: 5
    },
    {
      quote: "Professional, reliable, and innovative. There Tech delivered our Rwadiscount platform on time and exceeded our expectations.",
      author: "Michael ITWITAHO",
      role: "Founder, Rwadiscount",
      rating: 5
    },
    {
      quote: "There Tech Helped me during my masters degree project which was smart parking System",
      author: "Emmanuel Niyonkuru",
      role: "Masters Graduate from University of Kigali",
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'from-green-500 to-green-600';
      case 'in progress': return 'from-blue-500 to-blue-600';
      case 'planned': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-300 to-indigo-400">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Target className="w-5 h-5 mr-3" />
              <span className="font-semibold text-sm uppercase tracking-widest">Our Portfolio</span>
            </div>
            
            <h1 className="text-5xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Innovative Projects Gallery
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
              Discover how we've transformed ideas into digital solutions that drive success for businesses and students alike.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 px-4">
              <Link to="/Projects" className="group relative overflow-hidden px-8 py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>
              
              <Link to="/contact" className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center">
                  Start Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 animate-float">
          <Hexagon className="w-8 h-8 text-blue-300/40" />
        </div>
        <div className="absolute top-20 right-20 animate-float delay-1000">
          <Circle className="w-6 h-6 text-purple-300/30" />
        </div>
      </section>

      {/* Projects Content */}
      <section id="projects" className="py-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-blue-500 mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Work</span>
              <div className="w-12 h-1 bg-blue-500 ml-4"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Project Portfolio
            </h2>
          </div>


          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <ProjectSkeleton key={index} />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl mb-6">
                  <Zap className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h3>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Retry Connection
                </button>
              </div>
            ) : transformedProjects.length === 0 ? (
              <div className="text-center py-20">
              
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transformedProjects.map((project) => (
                  <div key={project.id} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    {/* Project Image */}4
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-sm font-semibold rounded-full backdrop-blur-sm`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center space-x-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                      {/* Project Details */}
                      {project.client && (
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Building className="w-4 h-4 mr-2" />
                            <span><strong>Client:</strong> {project.client}</span>
                          </div>
                          {project.duration && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span><strong>Duration:</strong> {project.duration}</span>
                            </div>
                          )}
                          {project.teamSize && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span><strong>Team:</strong> {project.teamSize} members</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-white to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                      <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-8 h-1 bg-blue-500 mr-3"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Testimonials</span>
              <div className="w-8 h-1 bg-blue-500 ml-3"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from students and businesses we've helped succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <span className="text-gray-600 text-sm">{testimonial.role}</span>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-50 to-purple-50 rounded-tl-3xl opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

 
      
    </div>
  );
};

export default Projects;