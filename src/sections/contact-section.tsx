import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import ContactCard from '../layouts/contact-card';
import Logo from '../components/Logo';

const ContactSection: React.FC = () => {
  return (
    <Box
        id="contact"
        data-section-label="Contact"
        sx={{ scrollMarginTop: '80px' }}
        component="section"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        width="100%"
        m={4}
        gap={4}
    >
      <ContactCard />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: 520,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Logo
          dimension={0.75}
          alt="Contact Hero Image"
          src="/images/perso_kerbal.png"
          variant="circular"
        />
        <Typography variant='h3'>
            Qui suis-je ?
        </Typography>
        <Typography variant='subtitle2' whiteSpace="pre-line">
            {'Je suis RICHARD Wilfried Programmeur statisticien,\n\
            créateur d\'applications interactives'}
        </Typography>
        <Button
          variant="contained"
        >
            Prendre rendez-vous
        </Button>
        <Typography variant='body1' sx={{ whiteSpace: "pre-line" }}>
          {`Expert en statistiques, je suis convaincu qu'un projet réussi commence toujours par une analyse rigoureuse et des données fiables.`}
        </Typography>
        <Typography variant='body1' sx={{ whiteSpace: "pre-line" }}>
          {`J'imagine et développe des solutions numériques innovantes pour combler les manques, optimiser vos processus et transformer vos idées en résultats concrets.`}
        </Typography>
        <Typography variant='body1' sx={{ whiteSpace: "pre-line" }}>
            {'N\'hésitez pas à me contacter pour toute collaboration ou question.'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactSection;
