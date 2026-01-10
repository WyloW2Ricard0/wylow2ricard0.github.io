import { createTheme } from '@mui/material/styles'
import { theme_component } from './component'
import { theme_typography } from './typogrphy'
import { theme_palette } from './palette'

// Création du thème personnalisé
const theme = createTheme(theme_palette, theme_typography, theme_component)

export default theme
