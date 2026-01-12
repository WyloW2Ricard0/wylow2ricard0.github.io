import {
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SectionHero from './section-hero'
import SendIcon from '@mui/icons-material/Send'

/** Pied de page du site web */

export default function SectionFooter() {
  return (
    <Stack direction={'column'}>
      <Stack
        direction={'row'}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction={'column'} alignItems={'flex-start'}>
          {/* Footer content goes here */}
          <SectionHero
            component="div"
            icon_title={'📬'}
            title="Abonnez-vous aux newsletters."
            description="Pas de spam, jamais !"
          />

          <Stack direction={'row'}>
            <TextField label="Votre email" size="small" />
            <IconButton>
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Stack direction={'column'} spacing={0}>
          <Typography variant="subtitle1">Legal</Typography>
          <Button variant="text" size="small">
            Privacy
          </Button>
          <Button variant="text" size="small">
            T&Cs
          </Button>
          <Button variant="text" size="small">
            Contact
          </Button>
        </Stack>
      </Stack>
      <Divider sx={{ width: '100%' }} />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        p={0}
        sx={{ width: '100%', justifyContent: 'space-between' }}
      >
        <Typography variant="caption">
          Copyright © Wylow2Ricard0 {new Date().getFullYear()}
        </Typography>
        {/* Social media icons or links can be added here */}
        <Stack direction={'row'} m={0} p={0}>
          {/* GITHUB ICON */}
          <IconButton size="small">
            <GitHubIcon />
          </IconButton>
          {/* X ICON */}
          <IconButton size="small">
            <XIcon />
          </IconButton>
          {/* LINKEDIN ICON */}
          <IconButton size="small">
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
