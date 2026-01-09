import { Container, Typography, Button, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Portfolio WyloW2Ricard0
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Bienvenue sur mon portfolio Next.js
        </Typography>
        <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
          En savoir plus
        </Button>
      </Box>
    </Container>
  )
}
