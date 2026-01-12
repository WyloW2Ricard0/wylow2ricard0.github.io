import { Button, Paper, Stack, TextField } from '@mui/material'
import Image from 'next/image'
import SectionHero from './section-hero'

/** Formulaire de contact minimal */

export default function FormContact() {
  return (
    <Paper elevation={24} sx={{ minWidth: { xs: '100%', md: 400 } }}>
      <Stack direction="column">
        <SectionHero
          component="div"
          title="Envoyez-moi un message"
          description="Remplissez le formulaire ci-dessous et je vous répondrai au plus vite."
          icon={
            <Image
              src="/logo_SP_contour_20250831.png"
              alt="Logo"
              width={40}
              height={40}
            />
          }
        />
        {/* Input email */}
        <TextField label="Votre email" fullWidth={true} />
        {/* Input subject */}
        <TextField label="Sujet" fullWidth={true} />
        {/* Input message */}
        <TextField
          label="Votre message"
          multiline={true}
          rows={4}
          fullWidth={true}
        />
        <Button variant="contained">Envoyer</Button>
      </Stack>
    </Paper>
  )
}
