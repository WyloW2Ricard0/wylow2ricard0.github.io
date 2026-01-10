import { Container, Divider } from '@mui/material'
import Hero from '../sections/hero'

export default function Home() {
  return (
    <Container sx={{
      maxWidth: { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }
    }}>
      <Hero />
      <Divider />
    </Container>
  )
}
