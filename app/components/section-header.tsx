'use client'

import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  alpha,
  useTheme,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'

export interface propItemSection {
  title: string
  href?: string
}

/** En-tête du site web */
export default function SectionHeader({
  items = [],
}: {
  items: propItemSection[]
}) {
  const theme = useTheme()
  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const appBarHeight = 64 // Adjust based on your AppBar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - appBarHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        padding: 0,
        marginTop: 1,
        backgroundColor: alpha(theme.palette.background.default, 0.9),
        borderRadius: 99,
        border: '2px solid',
        borderColor: 'primary.main',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          padding: 0,
          justifyContent: 'space-between',
        }}
      >
        {/* Header content can be added here */}
        <IconButton size="small">
          <HomeIcon />
        </IconButton>
        <ButtonGroup variant="text">
          {/* button de navigation des composants */}
          {items.map((item, index) => (
            <Button
              key={index}
              href={item.href || '#'}
              onClick={e => {
                e.preventDefault()
                handleClick(item.href || '#')
              }}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
        <IconButton size="small">
          <LoginIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
