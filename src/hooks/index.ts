// Auth hooks
export { useAuth } from './auth-context';
export { useProtectedRoute } from './use-protected-route';
export { useAuthWithActions } from './use-auth-with-actions';

// Navigation hooks
export { useNavigationActions } from './use-navigation-actions';

// Dialog hooks
export { useSignInDialog } from './use-sign-in-dialog';
export { useDialogActions } from './use-dialog-actions';

// Form hooks
export { useFormActions, type FormValidationResult } from './use-form-actions';

export default {
  useAuth: require('./auth-context').useAuth,
  useProtectedRoute: require('./use-protected-route').useProtectedRoute,
  useNavigationActions: require('./use-navigation-actions').useNavigationActions,
  useSignInDialog: require('./use-sign-in-dialog').useSignInDialog,
  useDialogActions: require('./use-dialog-actions').useDialogActions,
  useFormActions: require('./use-form-actions').useFormActions,
};
