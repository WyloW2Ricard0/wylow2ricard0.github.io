import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ForgotPassword from '../components/forgot-password';
import Paperhead from '../components/paper-head';

interface SignCardProps {
  mode?: 'signin' | 'signup';
  onClose?: () => void;
}

export default function SignCard({ mode = 'signin', onClose }: SignCardProps) {
  const [currentMode, setCurrentMode] = React.useState<'signin' | 'signup'>(mode);
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {// Ouvrir la boîte de dialogue
    setOpen(true);
  };

  const handleClose = () => {// Fermer la boîte de dialogue
    setOpen(false);
  };

  const handleModeChange = (newMode: 'signin' | 'signup') => {
    setCurrentMode(newMode);
    // Si basculer vers signup, rediriger vers sign-side
    if (newMode === 'signup') {
      if (onClose) onClose(); // Fermer le dialogue si fourni
      navigate('/sign-side');
    }
  };

  const handleSubmit = async (// Gestion de la soumission du formulaire
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    
    if (emailError || passwordError) {
      return;
    }
    
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    
    try {
      // À implémenter avec votre logique d'authentification
      console.log({
        email,
        password,
      });
      
      // Si connexion réussie, rediriger vers le dashboard
      if (currentMode === 'signin') {
        if (onClose) onClose(); // Fermer le dialogue si fourni
        navigate('/dashboard');
      } else {
        // Pour l'inscription, rediriger vers sign-side ou dashboard selon votre logique
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    }
  };

  const validateInputs = () => {// Validation des champs email et mot de passe
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {// Validation de l'email
      setEmailError(true);
      setEmailErrorMessage('Veuillez entrer une adresse email valide.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {// Validation du mot de passe
      setPasswordError(true);
      setPasswordErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (currentMode === 'signup') {
      const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;
      if (!confirmPassword.value || confirmPassword.value !== password.value) {
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMessage('Les mots de passe ne correspondent pas.');
        isValid = false;
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordErrorMessage('');
      }
    }

    return isValid;
  };

  return (
    <Paperhead
      content={[
        <Typography
          key="title"
          variant="h4"
          textAlign="center" // centrer le texte
          my={2} // marge verticale
        >
          {currentMode === 'signin' ? 'Se connecter' : "S'inscrire"}
        </Typography>,
        <Box
          key="form"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="votre@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              {currentMode === 'signin' && (
                <Link
                  component="button"
                  type="button"
                  onClick={handleClickOpen}
                  variant="body2"
                  sx={{ alignSelf: 'baseline' }}
                >
                  Mot de passe oublié?
                </Link>
              )}
            </Box>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete={currentMode === 'signin' ? 'current-password' : 'new-password'}
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          {currentMode === 'signup' && (
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirmer le mot de passe</FormLabel>
              <TextField
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                name="confirmPassword"
                placeholder="••••••"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                required
                fullWidth
                variant="outlined"
                color={confirmPasswordError ? 'error' : 'primary'}
              />
            </FormControl>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={currentMode === 'signin' ? 'Se souvenir de moi' : 'Accepter les conditions'}
          />
          <ForgotPassword open={open} handleClose={handleClose} />
          <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
            {currentMode === 'signin' ? 'Se connecter' : "S'inscrire"}
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            {currentMode === 'signin' ? (
              <>
                Vous n&apos;avez pas de compte?{' '}
                <Link 
                  component="button"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleModeChange('signup');
                  }}
                  variant="body2"
                >
                  S&apos;inscrire
                </Link>
              </>
            ) : (
              <>
                Vous avez déjà un compte?{' '}
                <Link 
                  component="button"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentMode('signin');
                  }}
                  variant="body2"
                >
                  Se connecter
                </Link>
              </>
            )}
          </Typography>
        </Box>,
      ]}
    />
  );
}