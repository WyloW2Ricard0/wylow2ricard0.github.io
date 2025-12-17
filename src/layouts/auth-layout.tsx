import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AuthLayout: React.FC = () => {
  const theme = useTheme();
  
  React.useEffect(() => {
    document.body.style.background = `radial-gradient(
      circle at center,
      ${theme.palette.primary.light} 0%,
      ${theme.palette.background.default} 100%
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
