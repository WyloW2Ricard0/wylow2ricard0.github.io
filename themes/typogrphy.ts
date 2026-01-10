// Import des polices de caractères
import '@fontsource/roboto-mono'
// Righteous pour les titres
import '@fontsource/righteous'

import { createTheme } from '@mui/material/styles'
import { palette_theme } from './palette'

const palette = palette_theme.palette

export const typography_theme = createTheme(
  {
    typography: {
      fontFamily: 'Roboto Mono, monospace',
      h1: {
        color: palette.primary.main,
        fontWeight: 'bold',
        fontFamily: 'Righteous, monospace',
      },
      h2: {
        color: palette.secondary.main,
        fontWeight: 'bold',
        fontFamily: 'Righteous, monospace',
      },
      h3: {
        color: palette.text.primary,
        fontWeight: 'bold',
        fontFamily: 'Righteous, monospace',
      },
      h4: {
        color: palette.primary.main,
        fontFamily: 'Righteous, monospace',
      },
      h5: {
        color: palette.secondary.main,
        fontFamily: 'Righteous, monospace',
      },
      h6: {
        color: palette.text.primary,
        fontFamily: 'Righteous, monospace',
      },
      subtitle1: {
        color: palette.text.primary,
        textTransform: 'uppercase',
      },
      subtitle2: {
        color: palette.text.secondary,
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
      },
    },
  },
  palette_theme
)
