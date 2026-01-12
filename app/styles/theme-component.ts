import { createTheme } from '@mui/material'
import { theme_typography } from './theme-typogrphy'

const palette = theme_typography.palette
const shadows = createTheme().shadows
const BORDER_RADIUS = 16
const MARGIN = 8
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
          boxShadow: shadows[6],
          // modifier le props de chaque variant
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: palette.primary.main,
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                borderColor: palette.secondary.main,
                color: palette.secondary.main,
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
            spacing: SPACING,
          },
        },
        {
          props: { item: true },
          style: {
            margin: MARGIN,
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
          margin: 0,
          padding: 0,
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
