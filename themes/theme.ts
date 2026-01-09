import { createTheme } from '@mui/material/styles'

// Création du thème personnalisé
const theme = createTheme({
  palette: {
    // contraste couleurs AA
    contrastThreshold: 4.5,
  },
})

export default theme
