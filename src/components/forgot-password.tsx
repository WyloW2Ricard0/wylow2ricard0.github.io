import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export default function ForgotPassword( //fenetre de reinitialisation de mot de passe
  { open, handleClose }: ForgotPasswordProps
) {
  const navigate = useNavigate(); // Hook de navigation

  const handleSubmit = ( // Gestion de la soumission du formulaire
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    handleClose();
    navigate('/');
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
        sx: { backgroundImage: 'none' },
      }}
    >
      <DialogTitle>Réinitialiser votre mot de passe</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Entrez l&apos;adresse email de votre compte, et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </DialogContentText>
        <OutlinedInput
          autoFocus                   // Focus automatique sur le champ email
          required                    // Champ requis
          margin="dense"              // Marge dense
          id="email"                  // Identifiant du champ
          name="email"                // Nom du champ
          label="Adresse email"       // Étiquette du champ
          placeholder="Adresse email" // Texte d'espace réservé
          type="email"                // Type de champ email
          fullWidth                   // Prend toute la largeur disponible
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Annuler</Button>
        <Button variant="contained" type="submit">
          Continuer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
