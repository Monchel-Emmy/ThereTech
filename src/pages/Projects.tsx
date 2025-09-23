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
  Award
} from 'lucide-react';

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
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Target className="w-5 h-5 mr-3" />
              <span className="font-semibold text-sm uppercase tracking-widest">Our Portfolio</span>
            </div>
            
            <h1 className="text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Innovative
              </span>
              <br />
              <span className="text-white">Projects Gallery</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Discover how we've transformed ideas into digital solutions that drive success for businesses and students alike.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-100">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-700">Filter by:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-6 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'All' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-6 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status === 'All' ? 'All Statuses' : status}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[...Array(6)].map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
            </div>
          )}
          
          {error && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-red-100">
                <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h3>
                <p className="text-gray-600 mb-6">We're having trouble loading our projects.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!isLoading && !error && transformedProjects.length === 0 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="py-16 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100">
                <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Projects Found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            </div>
          )}

          {!isLoading && !error && transformedProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {transformedProjects.map((project) => (
                <div key={project.id} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                  {/* Project Image */}
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
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
              <Quote className="w-6 h-6 text-blue-600 ml-3" />
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-8 text-yellow-400" />
            
            <h2 className="text-5xl font-black mb-8 leading-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you're a business looking to innovate or a student with a great idea, we're here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/Contact" 
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
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

export default Projects;