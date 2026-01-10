import { createTheme } from '@mui/material'
import { typography_theme } from './typogrphy'

const palette = typography_theme.palette

export const component_theme = createTheme(
  {
    components: {
      MuiButton: {
        // rond au maximum pour les boutons
        styleOverrides: {
          root: {
            borderRadius: 9999,
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
      MuiContainer: {
        // maxWidth: { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' } ?
      },
      MuiStack: {
        defaultProps: {
          // spacing par defaut pour les stacks
          spacing: 2,
          // alignement par defaut pour les stacks
          alignItems: 'center',
          justifyContent: 'center',
        },
        styleOverrides: {
          root: {
            // marge et padding par defaut pour les stacks
            margin: '8px',
            padding: '8px',
          },
        },
      },
    },
  },
  typography_theme
)
