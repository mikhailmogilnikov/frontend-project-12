/* eslint-disable functional/no-conditional-statement */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useValidateToken = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');

    const UNPROTECTED_ROUTES = ['/login', '/signup'];
    const isLocationUnprotected = UNPROTECTED_ROUTES.includes(
      location.pathname,
    );

    if (isLocationUnprotected && token) {
      navigate('/');
    } else if (!isLocationUnprotected && !token) {
      navigate('/login');
    }
  }, []);
};
