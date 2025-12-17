import { useNavigate } from 'react-router-dom';

/**
 * Hook pour gérer toutes les actions de navigation
 */
export const useNavigationActions = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate('/'),
    goDashboard: () => navigate('/dashboard'),
    goApplications: () => navigate('/applications'),
    goCours: () => navigate('/enseignement'),
    goContact: () => navigate('/contact'),
    goSignUp: () => navigate('/sign-side'),
    goSignIn: () => navigate('/sign-side?mode=signin'),
    navigate: (path: string) => navigate(path),
  };
};

export default useNavigationActions;
