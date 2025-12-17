import { useAuth } from './auth-context';
import { useNavigationActions } from './use-navigation-actions';

/**
 * Hook qui combine les actions d'authentification avec la navigation
 */
export const useAuthWithActions = () => {
  const { user, signOut, loading } = useAuth();
  const { goHome } = useNavigationActions();

  const handleSignOut = async () => {
    try {
      await signOut();
      goHome();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return {
    user,
    loading,
    handleSignOut,
  };
};

export default useAuthWithActions;
