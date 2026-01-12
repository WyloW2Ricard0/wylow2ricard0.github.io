import { theme_palette } from './theme-palette'
import { createTheme } from '@mui/material/styles'

const PALETTE = theme_palette.palette
const SIZE = 8
const FONT_TITLE = 'Righteous'

/** Thème typographique personnalisé */
export const theme_typography = createTheme({
  palette: PALETTE,
  typography: {
    fontFamily: 'Roboto Mono',
    h1: {
      color: PALETTE.primary.main,
      fontWeight: 'bold',
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 6,
    },
    h2: {
      color: PALETTE.secondary.main,
      fontWeight: 'bold',
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 6,
    },
    h3: {
      color: PALETTE.text.primary,
      fontWeight: 'bold',
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 6,
    },
    h4: {
      color: PALETTE.primary.main,
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 3,
    },
    h5: {
      color: PALETTE.secondary.main,
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 3,
    },
    h6: {
      color: PALETTE.text.primary,
      fontFamily: FONT_TITLE,
      fontSize: SIZE * 3,
    },
    subtitle1: {
      color: PALETTE.text.primary,
      fontWeight: 'bold',
      fontSize: SIZE * 2,
      textTransform: 'uppercase',
    },
    subtitle2: {
      color: PALETTE.text.secondary,
      fontSize: SIZE * 2,
      textTransform: 'uppercase',
    },
    body1: {
      color: PALETTE.text.primary,
      fontSize: SIZE * 2,
    },
    body2: {
      color: PALETTE.text.secondary,
      fontSize: SIZE * 2,
    },
    button: {
      textTransform: 'none',
      fontSize: SIZE * 2,
    },
    caption: {
      color: PALETTE.text.primary,
      fontSize: SIZE * 2,
    },
    overline: {
      color: PALETTE.text.primary,
      fontSize: SIZE * 2,
    },
  },
})
