import { Avatar, Button, Stack, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Stack direction={'row'}>
      <Avatar sx={{ width: 150, height: 150 }} />
      <Stack direction={'column'}>
        <Typography variant="h2" align="center">
          Bienvenue sur mon site
        </Typography>
        <Typography variant="subtitle1" align="center">
          Découvrez mes projets et compétences
        </Typography>
        <Stack direction={'row'}>
          <Button variant="contained">En savoir plus</Button>
          <Button variant="outlined">Contactez-moi</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
