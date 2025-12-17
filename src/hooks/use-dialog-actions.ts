import * as React from 'react';

/**
 * Hook pour gérer l'état d'ouverture/fermeture d'un dialogue
 */
export const useDialogActions = () => {
  const [open, setOpen] = React.useState(false);

  return {
    open,
    setOpen,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    toggleDialog: () => setOpen(!open),
  };
};

export default useDialogActions;
