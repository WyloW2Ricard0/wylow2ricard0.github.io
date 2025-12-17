import React, { useState, ReactNode } from 'react';
import { Box, Container, Typography, Button, Card } from '@mui/material';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigationActions } from '../hooks/use-navigation-actions';

// Interface pour les items
export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  link: () => void;
}

// Props du composant
interface FeaturesProps {
  items?: FeatureItem[];
  title?: string;
  subtitle?: string;
}

// Composant Features réutilisable
export default function Features( {
  items: itemsProp, title = 'Les Trois Piliers',
  subtitle = 'Cliquez sur chaque carte pour avoir une visualisation et découvrir plus de détails sur les piliers.'
}: FeaturesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { goDashboard, goApplications, goCours } = useNavigationActions();

  // Items par défaut si aucun n'est fourni
  const defaultItems: FeatureItem[] = [
    {
      icon: <ViewQuiltRoundedIcon />,
      title: 'Tableau de bord',
      description: 'Profiter d\'un espace centralisé pour visualiser toutes vos données en un seul endroit.',
      image: 'url("https://images.unsplash.com/photo-1561816273-56c6232d3990?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      link: goDashboard,
    },
    {
      icon: <EdgesensorHighRoundedIcon />,
      title: 'Applications professionnelles',
      description: 'Utilisez-les directement sur le site avec de nouvelles fonctionnalités opérationnelles.',
      image: 'url("https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      link: goApplications,
    },
    {
      icon: <DevicesRoundedIcon />,
      title: 'Gestion de contenu',
      description: 'Guides concis pour maîtriser rapidement les méthodes d\'application.',
      image: 'url("https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?w=600&h=500&fit=crop&q=80")',
      link: goCours,
    },
  ];

  const items = itemsProp || defaultItems;
  const feature = items[selectedIndex];

  return (
    <Container
        id="features"
        data-section-label="Piliers"
        component="section"
        sx={{ m: 4, scrollMarginTop: '80px',}}
    >
      {/* Titre et description */}
      <Box textAlign="center">
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {subtitle}
        </Typography>
      </Box>

      {/* Layout 2 colonnes : fonctionnalités + image */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' } , gap: 4}}>
        {/* Colonne gauche : liste des fonctionnalités */}
        <Box sx={{ flex: 0.6 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr' } , gap: 2 }}>
            {items.map((item, index) => (
              <Button
                key={index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  p: 2,
                  border: selectedIndex === index ? '2px solid' : '1px solid',
                  borderColor: selectedIndex === index ? 'primary.main' : 'divider',
                  borderRadius: 1,
                  textAlign: 'left',
                  textTransform: 'none',
                  backgroundColor: selectedIndex === index ? 'action.selected' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Box>
                  <Box flexDirection="row" alignItems="center" display="flex">
                    {item.icon}
                    <Typography variant="h6">
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ textTransform: 'none' }}
                      onClick={item.link}
                    >
                      Accéder
                    </Button>
                  </Box>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>

        {/* Colonne droite : image de la fonctionnalité */}
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            backgroundPosition:'center',
            backgroundImage:'var(--feature-image)'
          }}
          style={{
            '--feature-image': feature.image,
          } as React.CSSProperties}
        />
      </Box>
    </Container>
  );
}
