
import { createTheme } from '@mui/material/styles';

// Définir d'abord la palette
const baseTheme = createTheme({
  palette: {
    primary: {
      light: 'hsla(210, 80%, 70%, 1.00)',   // Bleu clair
      main: 'hsla(210, 80%, 50%, 1.00)',    // Bleu principal
      dark: 'hsla(210, 80%, 45%, 1.00)',    // Bleu foncé
    },
    secondary: {
      light: 'hsla(340, 100%, 70%, 1.00)',  // Rose clair
      main: 'hsla(340, 100%, 50%, 1.00)',   // Rose principal
      dark: 'hsla(340, 100%, 45%, 1.00)',   // Rose foncé
    },
    text: {
      primary: 'hsla(0, 0%, 0%, 1.00)',     // Noir pur
      secondary: 'hsla(0, 0%, 40%, 1.00)',  // Gris
    },
  },
});

// Utilise les presets Material Design 2 de MUI
export const typoTheme = createTheme({
  palette: baseTheme.palette,
  typography: {
    fontFamily: "Roboto Mono",
    // marge globale pour tous les variants
    allVariants: { margin: `${baseTheme.spacing(1)}` },
    // Heading variants - pour les titres de sections
    // h1: titre principal de la page
    h1: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // h2: titre de section majeure
    h2: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // h3: titre de sous-section
    h3: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // h4: titre de sous-section mineure
    h4: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // h5: titre petit
    h5: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // h6: titre très petit
    h6: { fontFamily: 'Righteous', color: baseTheme.palette.primary.main },
    // Subtitle variants - pour les sous-titres
    // subtitle1: sous-titre principal
    subtitle1: {textTransform: 'uppercase', color: baseTheme.palette.text.primary },
    // subtitle2: sous-titre secondaire
    subtitle2: {textTransform: 'uppercase', color: baseTheme.palette.text.secondary },
    // Body variants - pour le contenu texte
    // body1: contenu principal (par défaut)
    body1: { color: baseTheme.palette.text.primary },
    // body2: contenu secondaire ou petits textes
    body2: { color: baseTheme.palette.text.secondary },
    // Button: pour les labels de boutons
    button: { },
    // Caption: pour les petits textes d'aide ou descriptions
    caption: { },
    // Overline: pour les petits textes en majuscules
    overline: { }
  },
});

// Thème principal combinant palette et typographie
export const theme = createTheme({
  palette: baseTheme.palette,
  typography: typoTheme.typography,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...typoTheme.typography.body2,
        },
      },
    },
  },
});
