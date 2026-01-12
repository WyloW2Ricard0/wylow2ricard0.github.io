import { createTheme } from '@mui/material'
import { theme_typography } from './theme-typogrphy'

const palette = theme_typography.palette
const shadows = createTheme().shadows
const BORDER_RADIUS = 16
const MARGIN = 0
const PADDING = 8
const SPACING = 1

/** Thème des composants personnalisés */
export const theme_component = createTheme({
  palette: palette,
  typography: theme_typography.typography,
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: MARGIN * 2,
          padding: 0,
          boxShadow: shadows[12],
          // arrondir les images pour rounded
          variants: [
            {
              props: { variant: 'rounded' },
              style: {
                borderRadius: BORDER_RADIUS,
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      // rond au maximum pour les boutons
      styleOverrides: {
        root: {
          borderRadius: 9999,
          margin: MARGIN,
          //padding: 0,
          // modifier le props de chaque variant
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                boxShadow: shadows[6],
                backgroundColor: palette.primary.main,
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                borderColor: palette.secondary.main,
                boxShadow: shadows[6],
                color: palette.secondary.main,
              },
            },
            {
              props: { variant: 'text' },
              style: {
                boxShadow: shadows[0],
                //borderColor: palette.secondary.main,
                color: palette.text.secondary,
                //margin: 0,
                //padding: PADDING,
                // souligner le texte
                //textDecoration: 'underline',
              },
            },
          ],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: MARGIN,
          padding: PADDING,
          cursor: 'pointer',
          boxShadow: shadows[6],
          border: `2px solid`,
          borderColor: palette.primary.main,
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiContainer: {
      // maxWidth: { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' } ?
    },
    MuiGrid: {
      variants: [
        {
          props: { container: true },
          style: {
            margin: MARGIN,
            padding: PADDING,
          },
        },
        {
          props: { item: true },
          style: {
            margin: PADDING,
            padding: PADDING,
            border: `2px solid`,
            borderColor: palette.primary.main,
            boxShadow: shadows[6],
            borderRadius: BORDER_RADIUS,
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: MARGIN,
          padding: PADDING,
          borderRadius: BORDER_RADIUS,
          boxShadow: shadows[24],
        },
      },
    },
    MuiStack: {
      defaultProps: {
        // spacing par defaut pour les stacks
        spacing: SPACING,
        // alignement par defaut pour les stacks
        alignItems: 'center',
        justifyContent: 'center',
      },
      styleOverrides: {
        root: {
          margin: MARGIN,
          padding: PADDING,
          //boxShadow: shadows[24],
        },
      },
    },
  },
})
