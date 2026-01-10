import { Button, Paper, Stack, TextField } from '@mui/material'
import SectionHero from './section-hero'

/** Formulaire de contact minimal */

export default function FormContact() {
  return (
    <Paper elevation={24}>
      <Stack direction="column">
        <SectionHero component="div" title="Contactez-moi" />
        {/* Input email */}
        <TextField label="Votre email" fullWidth={true} />
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
