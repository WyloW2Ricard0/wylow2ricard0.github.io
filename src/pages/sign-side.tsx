
import * as React from 'react';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useNavigationActions } from '../hooks/use-navigation-actions';
import SignCard from '../layouts/sign-card';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Card, Container, Stack } from '@mui/material';

const items = [
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Platforme gratuit',
    description:
      'Inscription gratuite et accès à plusieurs applications sans frais. Aucune carte bancaire requise pour commencer.',
  },
  {
    icon: <SecurityRoundedIcon />,
    title: 'Stabilité garantie',
    description:
      'Une plateforme stable et  avec les normes de sécurité. Vos données ne sont pas revendues !',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Interface intuitive',
    description:
      'Aucune courbe d\'apprentissage. Commencez immédiatement, même sans expérience technique.',
  },
  {
    icon: <EmojiEventsRoundedIcon />,
    title: 'Fonctionnalités avancées',
    description:
      'Tous les outils dont vous avez besoin. Des débutants aux experts, tout le monde y trouvera son compte.',
  },
];

const SignSide: React.FC<{ mode?: 'signin' | 'signup' }> = ({ mode: propMode }) => {
  const [searchParams] = useSearchParams();
  const mode = (searchParams.get('mode') as 'signin' | 'signup') || propMode || 'signup';
  const { goHome } = useNavigationActions();

  return (
    <Container
      id="signside"
      maxWidth="md"
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        <Button
          variant="text"
          startIcon={<ArrowBackRoundedIcon />}
          onClick={goHome}
          sx={{ width: 'fit-content' }}
        >
          Accueil
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4}}>
            <SignCard mode={mode} />
            <Stack >
                {items.map((item, index) => (
                    <Card
                        key={index}
                    >
                        {item.icon}
                        {item.title}
                        {item.description}
                    </Card>
                ))}
            </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SignSide;
