// Import des polices de caractères
import '@fontsource/roboto-mono' // Roboto Mono pour le corps de texte
// Righteous pour les titres
import '@fontsource/righteous'

import { createTheme } from '@mui/material/styles'
import { theme_palette } from './palette'

const palette = theme_palette.palette
const NUM_BOLD = theme_palette.typography.fontWeightBold
const NUM_SIZE = '8px'

/** Thème typographique personnalisé */
export const theme_typography = createTheme({
  typography: {
    fontFamily: '"Roboto Mono"',
    h1: {
      color: palette.primary.main,
      fontWeight: NUM_BOLD, // titre principal en gras
      fontFamily: 'Righteous',
      fontSize: NUM_SIZE,
    },
    h2: {
      color: palette.secondary.main,
      fontWeight: NUM_BOLD,
      fontFamily: 'Righteous',
    },
    h3: {
      color: palette.text.primary,
      fontWeight: NUM_BOLD,
      fontFamily: 'Righteous',
    },
    h4: {
      color: palette.primary.main,
      fontFamily: 'Righteous',
    },
    h5: {
      color: palette.secondary.main,
      fontFamily: 'Righteous',
    },
    h6: {
      color: palette.text.primary,
      fontFamily: 'Righteous',
    },
    subtitle1: {
      color: palette.text.primary,
      textTransform: 'uppercase',
    },
    subtitle2: {
      color: palette.text.secondary,
      textTransform: 'uppercase',
    },
    body1: {
      color: palette.text.primary,
    },
    body2: {
      color: palette.text.secondary,
    },
    button: {
      textTransform: 'none',
    },
    caption: {
      color: palette.text.primary,
    },
    overline: {
      color: palette.text.primary,
      fontSize: '',
    },
  },
})
