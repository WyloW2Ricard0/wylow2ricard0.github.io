
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { alpha, styled, } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { useNavigationActions } from '../hooks/use-navigation-actions';
import { useAuthWithActions } from '../hooks/use-auth-with-actions';
import Logo from '../components/Logo';


// Ajout d'un style global pour éviter que le header masque les titres de section lors du scroll
if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
        [id][data-section-label] {
            scroll-margin-top: 80px !important;
        }
    `;
    document.head.appendChild(style);
}

// Fonction utilitaire pour détecter dynamiquement les sections présentes dans la page
function usePageSections() {
        const [sections, setSections] = useState<{id: string, label: string}[]>([]);
        const location = useLocation();
        React.useEffect(() => {
                // Fonction pour rescanner le DOM
                const scanSections = () => {
                        const nodes = Array.from(document.querySelectorAll('[id][data-section-label]'));
                        setSections(nodes.map(node => ({
                                id: node.id,
                                label: node.getAttribute('data-section-label') || node.id
                        })));
                };
                scanSections();
                // Observer les mutations du DOM pour détecter l'ajout/retrait de sections dynamiquement
                const observer = new MutationObserver(scanSections);
                observer.observe(document.body, { childList: true, subtree: true });
                return () => observer.disconnect();
        }, [location]);
        return sections;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({           // Styles personnalisés pour la barre d'outils
  display: 'flex',                                                // Utiliser Flexbox
  alignItems: 'center',                                           // Centrer verticalement
  justifyContent: 'space-between',                                // Espacement entre les éléments
  flexShrink: 0,                                                  // Ne pas rétrécir
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,      // Bords arrondis
  backdropFilter: 'blur(24px)',                                   // Flou d'arrière-plan
  border: '1px solid',                                            // Bordure
  borderColor: theme.palette.divider,                             // Couleur de la bordure
  backgroundColor: alpha(theme.palette.background.default, 0.4),  // Couleur de fond avec transparence
  boxShadow: theme.shadows[1],                                    // Légère ombre
  padding: '8px 12px',                                            // Espacement interne
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { user, handleSignOut } = useAuthWithActions();
  const { goHome, goSignIn, goSignUp } = useNavigationActions();
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

    return (
        <AppBar
            id="header"
            position="fixed"    // Position fixe pour rester en haut
            enableColorOnDark   // Activer la couleur en mode sombre
            sx={{
                boxShadow: 0,                                       // Pas d'ombre
                bgcolor: 'transparent',                             // Fond transparent
                backgroundImage: 'none',                            // Pas d'image de fond
                m: 'calc(var(--template-frame-height, 0px) + 9px)', // Marge supérieure réduite
                scrollMarginTop: '80px',                            // Marge de défilement pour ancrage
            }}
        >
            <Container>
                <StyledToolbar
                    variant="dense"     // Variante dense pour une barre d'outils plus compacte
                    sx={{ padding: 0 }} // Pas de padding
                >
                    {/* Zone gauche : Logo + Accueil */}
                    <Button
                        startIcon={<Logo
                            alt="Logo"
                            src="/icons/logo_SP_contour_20250831.png"
                            dimension={0.125}
                        />}
                        variant="text"
                        color="primary"
                        size="medium"
                        onClick={goHome}
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Accueil
                    </Button>

                    {/* Zone centrale : Navigation sections responsive */}
                    <Box sx={{
                        flex: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        minWidth: 0,
                        overflow: 'auto'
                    }}>
                        <Breadcrumbs
                            sx={{
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                m: 0,
                                p: 0,
                            }}
                        >
                            {usePageSections().map(section => (
                                <Button
                                    key={section.id}
                                    variant="text"
                                    size="small"
                                    href={`#${section.id}`}
                                    sx={{ p: 0, m: 0 }}
                                >
                                    {section.label}
                                </Button>
                            ))}
                        </Breadcrumbs>
                    </Box>
                    {/* Drawer pour navigation sections sur mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton aria-label="Ouvrir la navigation" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box role="presentation" sx={{ p: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Divider sx={{ mb: 2 }} />
                                <Breadcrumbs
                                    sx={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    {usePageSections().map(section => (
                                        <Button
                                            key={section.id}
                                            variant="text"
                                            size="large"
                                            href={`#${section.id}`}
                                            sx={{ p: 1, m: 0, width: '100%', justifyContent: 'flex-start' }}
                                            onClick={toggleDrawer(false)}
                                        >
                                            {section.label}
                                        </Button>
                                    ))}
                                </Breadcrumbs>
                            </Box>
                        </Drawer>
                    </Box>

                    {/* Zone droite : Actions utilisateur */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {!user ? ( <>
                            <Button variant="text" size="small" onClick={goSignIn}>
                                Se connecter
                            </Button>
                            <Button variant="contained" size="small" onClick={goSignUp}>
                                S'inscrire
                            </Button>
                        </> ) : ( <>
                            <Button variant="text" size="small" onClick={handleSignOut}>
                                Se déconnecter
                            </Button>
                        </> )}
                        <IconButton size="small">
                            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
