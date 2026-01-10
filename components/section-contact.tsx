import { Stack } from '@mui/material'

import FormContact from './form-contact'
import SectionHero, { propHero } from './section-hero'

export default function SectionContact({
  title = 'Bienvenue sur mon site',
  subtitle = 'Découvrez mes projets et compétences',
  text_button_contained = 'En savoir plus',
  text_button_oulined = 'Contactez-moi',
  text_image = 'Image principale',
  src_image = '/images/hero-image.png',
  size_image = 100,
}: propHero) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%' }}>
      <SectionHero
        component="Contact"
        title={title}
        subtitle={subtitle}
        text_button_contained={text_button_contained}
        text_button_oulined={text_button_oulined}
        text_image={text_image}
        src_image={src_image}
        size_image={size_image}
      />
      <FormContact />
    </Stack>
  )
}
