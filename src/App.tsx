import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/auth-context';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './libs/theme';

// Pages
import Applications from './pages/Applications';
import Blog from './pages/blog';
import CGV from './pages/website-terms-conditions';
import Dashboard from './pages/Dashboard';
import Enseignement from './pages/Enseignement';
import Home from './pages/Home';
import NotFound from './pages/not-found';
import Privacy from './pages/privacy-policy';
import SignSide from './pages/sign-side';

// Layout
import MainLayout from './layouts/main-layout';
import AuthLayout from './layouts/auth-layout';
import ProtectedLayout from './layouts/protected-layout';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.REACT_APP_BASENAME || ''}>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<CGV />} />
            </Route>

            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-side" element={<SignSide />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/enseignement" element={<Enseignement />} />
              <Route path="/applications" element={<Applications />} />
            </Route>

            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
