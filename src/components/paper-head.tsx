import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Logo from './Logo';

export interface PaperheadProps {
  content?: ReactNode;
}

// Gabarit simple de papier à en-tête réutilisable
export default function Paperhead({
  content,
}: PaperheadProps) {
  return (
    <Paper sx={{
      alignSelf: 'center', // centrer verticalement
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 600,
      minWidth: 400,
      padding: 4,
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <Logo dimension={0.125}/>
        <Typography
          variant="h6"
        >
          Structurare Ad Proficere
        </Typography>
      </Box>
      {content}
    </Paper>
  );
}
