import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import SignCard from '../layouts/sign-card';
import { useDialogActions } from './use-dialog-actions';

/**
 * Hook pour gérer le dialogue de connexion (sign-in) avec SignCard
 */
export const useSignInDialog = () => {
  const { open, openDialog, closeDialog } = useDialogActions();

  const SignInDialogComponent = () => (
    <Dialog 
      open={open} 
      onClose={closeDialog}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Connexion</DialogTitle>
      <DialogContent>
        <SignCard mode="signin" onClose={closeDialog} />
      </DialogContent>
    </Dialog>
  );

  return {
    open,
    openSignInDialog: openDialog,
    closeSignInDialog: closeDialog,
    SignInDialogComponent,
  };
};

export default useSignInDialog;
