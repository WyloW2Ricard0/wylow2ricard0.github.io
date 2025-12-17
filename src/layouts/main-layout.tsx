import React from 'react';

import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Header from '../sections/Header';
import Footer from '../sections/Footer';

const MainLayout: React.FC = () => {
  const theme = useTheme();

  React.useEffect(() => {
    document.body.style.background = `linear-gradient(  
      135deg,
      ${theme.palette.primary.light} 0%,
      ${theme.palette.background.default} 50%
    )`;
    document.body.style.minHeight = '100vh';
    
    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, [theme]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          pt: 9,
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
