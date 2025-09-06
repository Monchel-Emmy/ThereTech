import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from './auth';

const RequireAdmin = () => {
  const location = useLocation();
  if (!isAdminAuthenticated()) {
    return <Navigate to="/Admin/Login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAdmin;