import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import Logo from '../components/Logo';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="text.secondary" href={process.env.EXTERNAL_PORTFOLIO || '#'}>
        Wylow2Ricard0
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
        id="footer"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: { sm: 'center', md: 'left' },
            scrollMarginTop: '80px',
            my: 2,
        }}
    >
      <Box
        sx={{
          borderTop: '1px solid',   // Bordure supérieure
          borderColor: 'divider',   // Ligne de séparation
          pt: 2,                    // Padding en haut
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
              alignItems: 'center',
            }}>
              <Logo dimension={0.125} />
              <Typography variant="h6">
                STRUCTURARE AD PROFICERE
              </Typography>
            </Box>
            <Typography variant="body1">
              Restons en Contact !
            </Typography>
            <InputLabel htmlFor="email-newsletter">Subscribe for updates. No spams ever!</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
          }}
        >
          <Typography variant="body1">
            Legal
          </Typography>
          <Link variant="body2" href="/privacy">
            Privacy
          </Link>
          <Link  variant="body2" href="/terms">
            T&Cs
          </Link>
          <Link variant="body2" href="#contact">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          useFlexGap
          sx={{ justifyContent: 'left' }}
        >
          <IconButton
            component="a"             // Link to external portfolio URL
            target="_blank"           // Open in new tab
            rel="noopener noreferrer" // Security best practice
            href={process.env.EXTERNAL_GITHUB || '#'}
            size="small"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"             // Link to external portfolio URL
            target="_blank"           // Open in new tab
            rel="noopener noreferrer" // Security best practice
            href={process.env.EXTERNAL_TWITTER || '#'}
            size="small"
            aria-label="X"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"             // Link to external portfolio URL
            target="_blank"           // Open in new tab
            rel="noopener noreferrer" // Security best practice
            href={process.env.EXTERNAL_LINKEDIN || '#'}
            size="small"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
