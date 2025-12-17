import React from 'react';
import { Box, Typography } from '@mui/material';

const Enseignement: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Enseignement
      </Typography>
      <Typography variant="body1" paragraph>
        Découvrez mes cours pratiques et guides concis sur diverses technologies. Chaque cours offre des tutorials détaillés et des exemples applicables.
      </Typography>
    </Box>
  );
};

export default Enseignement;
