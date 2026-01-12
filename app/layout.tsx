import { righteous, robotoMono } from './styles/fonts'
import type { Metadata, Viewport } from 'next'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme-global'
import Head from './head'

export const metadata: Metadata = {
  title: 'Wylow2Ricard0',
  description:
    'Professional portfolio website showcasing applications and courses',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${robotoMono.variable} ${righteous.variable}`}>
      <Head />
      <body className="layout-body">
        <ThemeProvider theme={theme}>
          {/* CssBaseline : reset CSS de base MUI */}
          <CssBaseline />
          {/* Contenu da página */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
