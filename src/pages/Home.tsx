import React from 'react';

import {Container} from '@mui/material';
import Divider from '@mui/material/Divider';

import ContactSection from '../sections/contact-section';
import Hero from '../sections/Heros';
import Highlights from '../sections/Highlights';
import Features from '../sections/Features';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <Container>
      <Hero image={<Logo
        alt="Hero Image"
        src="/images/logo_SP_text_20250831.png"
        dimension={0.25}
        variant='rounded'
      />} />
      <Divider />
      <Features />
      <Divider />
      <ContactSection />
      <Divider />
      <Highlights />
    </Container>
  );
};

export default Home;
