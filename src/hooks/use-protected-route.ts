import { useAuth } from './auth-context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Hook pour protéger les routes qui nécessitent une authentification
 */
export const useProtectedRoute = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/sign-side', { replace: true });
    }
  }, [user, loading, navigate]);

  return { user, loading };
};

export default useProtectedRoute;
