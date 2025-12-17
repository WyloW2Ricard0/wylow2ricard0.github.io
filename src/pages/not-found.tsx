import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigationActions } from '../hooks/use-navigation-actions';

const NotFound: React.FC = () => {
  const { goHome } = useNavigationActions();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" paragraph>
        Page Not Found
      </Typography>
      <Typography variant="subtitle1" paragraph color="textSecondary">
        The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" onClick={goHome}>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
