import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
            sx={{ m: 4, scrollMarginTop: '80px' }}
        >
        <Box textAlign="center">
            <Typography variant="h4" >
                Les Avantages
            </Typography>
            <Typography variant="subtitle2" >
                Une plateforme construite pour vous offrir une expérience fiable, sécurisée et intuitive. Explorez comment chaque élément a été pensé pour votre succès.
            </Typography>
        </Box>
            <Grid container spacing={2} mt={1}>
                {items.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Stack
                            component={Card}
                            p={2}
                            sx={{ height: '100%' }}
                        >
                            <Box flexDirection="row" alignItems="center" display="flex"  color="primary.main">
                                {item.icon}
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
