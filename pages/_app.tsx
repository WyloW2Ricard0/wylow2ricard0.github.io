import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../themes/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline : reset CSS de base MUI */}
      <CssBaseline />
      {/* Composant de la page en cours */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
