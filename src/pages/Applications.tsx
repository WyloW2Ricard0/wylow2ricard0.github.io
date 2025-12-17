import React from 'react';
import { Box, Typography } from '@mui/material';

const Applications: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Applications
      </Typography>
      <Typography variant="body1" paragraph>
        Discover my projects and applications built with modern technologies. Click on each application to learn more or try it out.
        Limites : quotas journaliers mail, restrictions anti-spam, etc. (voir la documentation officielle)
      </Typography>
    </Box>
  );
};

export default Applications;
