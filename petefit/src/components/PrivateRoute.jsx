import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>로딩중</div>;
  }

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;