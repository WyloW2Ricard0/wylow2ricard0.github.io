import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth-context';

/**
 * Hook personnalisé pour gérer la navigation basée sur l'authentification
 * Redirige vers /dashboard si l'utilisateur est connecté, sinon vers /signin
 */
export const useAuthNavigation = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const navigateToAuthenticatedPage = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signin');
    }
  };

  return { navigateToAuthenticatedPage };
};
