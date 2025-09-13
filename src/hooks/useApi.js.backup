import { useState, useEffect } from 'react';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://there-tech-backend.onrender.com/api';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
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

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };

  return { data, loading, error, refetch };
};

// Specific hooks for common API calls
export const useServices = () => {
  return useApi('/services');
};

export const useProjects = () => {
  return useApi('/projects');
};

export const useFeaturedProjects = () => {
  return useApi('/projects/featured');
};

export const useAbout = () => {
  return useApi('/about');
};

export const useContact = () => {
  return useApi('/contact');
};

export const useHealth = () => {
  return useApi('/health');
}; 