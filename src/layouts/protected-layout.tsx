import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Dialog, DialogContent } from '@mui/material';
import Footer from '../sections/Footer';
import SignCard from './sign-card';
import { useAuth } from '../hooks/auth-context';

const ProtectedLayout: React.FC = () => {
  const { user, loading } = useAuth();
  const [signInOpen, setSignInOpen] = React.useState(!user && !loading);

  React.useEffect(() => {
    // Ouvrir le dialog si l'utilisateur n'est pas connecté
    if (!loading && !user) {
      setSignInOpen(true);
    } else {
      setSignInOpen(false);
    }
  }, [user, loading]);

  const handleSignInClose = () => {
    // Fermer le dialog uniquement si l'utilisateur est connecté
    if (user) {
      setSignInOpen(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
        <Outlet />
        <Footer />

      {/* Dialog de connexion pour utilisateurs non authentifiés */}
      <Dialog
        open={signInOpen && !user}
        onClose={handleSignInClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <SignCard mode="signin" onClose={handleSignInClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProtectedLayout;
