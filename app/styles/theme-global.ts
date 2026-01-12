'use client'

import { createTheme } from '@mui/material/styles'
import { theme_component } from './theme-component'
import { theme_typography } from './theme-typogrphy'
import { theme_palette } from './theme-palette'

/** fusion du thème personnalisé */
const theme = createTheme(theme_palette, theme_typography, theme_component)

export default theme
