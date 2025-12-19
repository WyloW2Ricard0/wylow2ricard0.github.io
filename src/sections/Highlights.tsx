
import { Box, Button, Card, Container, Grid, Paper, Typography } from '@mui/material';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Stack moderne',
    description:
      'Respect des standards web W3C et Material-UI pour accessibilité et interopérabilité.',
  }, {
    icon: <ConstructionRoundedIcon />,
    title: 'Architecture standardisée',
    description:
      'React 18, TypeScript et Supabase pour une architecture solide et scalable.',
  }, {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Responsive & intuitif',
    description:
      'Design adapté au mobile/tablette/desktop pour une expérience utilisateur fluide.',
  }, {
    icon: <QueryStatsRoundedIcon />,
    title: 'Centralisation',
    description:
      'Un site unique pour accéder à toutes les applications et ressources nécessaires.',
  }, {
    icon: <SupportAgentRoundedIcon />,
    title: 'À votre écoute',
    description:
      'Vos retours et suggestions sont essentiels pour améliorer continuellement la plateforme et vous offrir la meilleure expérience',
  }, {
    icon: <SecurityRoundedIcon />,
    title: 'Sécurité des données',
    description:
      'Vos données personnelles sont protégées et chiffrées. Elles ne sont jamais revendues ou partagées avec des tiers.',
  },
];

export default function Highlights() {
    return (
      <Container
        id="highlights"
        data-section-label="Avantages"
        sx={{ py: 4 }}
      >
        <Box textAlign="center">
          <Typography variant="h4" >
            Les Avantages
          </Typography>
          <Typography variant="subtitle2" >
            Une plateforme construite pour vous offrir une expérience fiable, sécurisée et intuitive. Explorez comment chaque élément a été pensé pour votre succès.
          </Typography>
          <Button href="/blog" variant="contained">
            Accéder au blog
          </Button>
        </Box>

        <Grid
            container
            spacing={2}
            justifyContent="center"
        >
            {items.map((item, index) => (
                <Paper
                    key={index}
                    sx={{
                        maxWidth: 330,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        color="primary.main"
                    >
                        {item.icon}
                        <Typography variant='h6'>{item.title}</Typography>
                    </Box>
                    {item.description}
                </Paper>
            ))}
        </Grid>

      </Container>
    );
}
