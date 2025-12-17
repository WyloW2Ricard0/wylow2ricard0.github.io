/**
 * Hook pour gérer les validations de formulaire
 */

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const useFormActions = () => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  };

  const validateForm = (data: Record<string, any>): FormValidationResult => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (!data.email) {
      errors.email = 'Email requis';
      isValid = false;
    } else if (!validateEmail(data.email)) {
      errors.email = 'Email invalide';
      isValid = false;
    }

    if (!data.password) {
      errors.password = 'Mot de passe requis';
      isValid = false;
    } else if (!validatePassword(data.password)) {
      errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      isValid = false;
    }

    if (data.confirmPassword !== undefined) {
      if (!validatePasswordMatch(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Les mots de passe ne correspondent pas';
        isValid = false;
      }
    }

    return { isValid, errors };
  };

  return {
    validateEmail,
    validatePassword,
    validatePasswordMatch,
    validateForm,
  };
};

export default useFormActions;
