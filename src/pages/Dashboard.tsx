import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to your personalized dashboard. Here you can manage your profile and access all your content.
      </Typography>
    </Box>
  );
};

export default Dashboard;
