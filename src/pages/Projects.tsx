import React, { useState } from 'react';
import { useProjects } from '../hooks/useApi';
import { ProjectSkeleton } from '../components/SkeletonLoader';

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
  const { data, loading, error } = useProjects();
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

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Discover how we've helped businesses and students achieve their technology goals</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          {/* Filters */}
          <div className="projects-filters">
            <div className="filter-group">
              <label htmlFor="category-filter">Category:</label>
              <select 
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="status-filter">Status:</label>
              <select 
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && (
            <div className="projects-grid">
              {[...Array(6)].map((_, index) => (
                <ProjectSkeleton key={index} />
              ))}
            </div>
          )}
          
          {error && (
            <div className="error-state">
              <p>❌ Failed to load projects. Please try again later.</p>
            </div>
          )}

          {!loading && !error && transformedProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects available at the moment.</p>
            </div>
          )}

          {!loading && !error && transformedProjects.length > 0 && (
            <div className="projects-grid">
              {transformedProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">
                    <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category.toUpperCase()}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.client && (
                    <div className="project-details">
                      <span><strong>Client:</strong> {project.client}</span>
                      {project.duration && <span><strong>Duration:</strong> {project.duration}</span>}
                      {project.teamSize && <span><strong>Team:</strong> {project.teamSize} members</span>}
                    </div>
                  )}
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"There Tech transformed our business with their IoT solution. The smart monitoring system has increased our efficiency by 40%."</p>
              </div>
              <div className="testimonial-author">
                <h4>John Doe</h4>
                <span>CEO, TechCorp Rwanda</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The team helped me turn my final year project into a working prototype. Their mentorship was invaluable to my academic success."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <span>Computer Science Student</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Professional, reliable, and innovative. There Tech delivered our e-commerce platform on time and exceeded our expectations."</p>
              </div>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <span>Founder, RwandanMart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Whether you're a business looking to innovate or a student with a great idea, we're here to help you succeed.</p>
          <div className="cta-buttons">
            <a href="/Contact" className="btn btn-primary">Get Started</a>
            <a href="/Services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;