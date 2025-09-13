import { useQuery } from '@tanstack/react-query';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://there-tech-backend.onrender.com/api';

// Generic API fetch function
const fetchApi = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Query keys for better caching
export const queryKeys = {
  services: ['services'],
  projects: ['projects'],
  featuredProjects: ['projects', 'featured'],
  about: ['about'],
  contact: ['contact'],
  health: ['health'],
};

// Generic useApi hook with TanStack Query
export const useApi = (endpoint, options = {}) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchApi(endpoint, options),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    ...options,
  });
};

// Specific hooks for common API calls with optimized caching
export const useServices = () => {
  return useQuery({
    queryKey: queryKeys.services,
    queryFn: () => fetchApi('/services'),
    staleTime: 10 * 60 * 1000, // 10 minutes - services don't change often
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: () => fetchApi('/projects'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
};

export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: queryKeys.featuredProjects,
    queryFn: () => fetchApi('/projects/featured'),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useAbout = () => {
  return useQuery({
    queryKey: queryKeys.about,
    queryFn: () => fetchApi('/about'),
    staleTime: 15 * 60 * 1000, // 15 minutes - about page rarely changes
    gcTime: 60 * 60 * 1000, // 1 hour
  });
};

export const useContact = () => {
  return useQuery({
    queryKey: queryKeys.contact,
    queryFn: () => fetchApi('/contact'),
    staleTime: 15 * 60 * 1000, // 15 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  });
};

export const useHealth = () => {
  return useQuery({
    queryKey: queryKeys.health,
    queryFn: () => fetchApi('/health'),
    staleTime: 30 * 1000, // 30 seconds - health checks should be frequent
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
  });
};
