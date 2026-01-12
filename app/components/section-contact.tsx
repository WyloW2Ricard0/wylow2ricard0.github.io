import { Stack } from '@mui/material'

import FormContact from './form-contact'
import SectionHero, { propHero } from './section-hero'

export default function SectionContact({
  title = '',
  subtitle = '',
  description = '',
  text_contained = '',
  text_outlined = '',
  image = '',
}: propHero) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: '100%' }}
      pb={4}
      pt={4}
    >
      <SectionHero
        component="section"
        title={title}
        subtitle={subtitle}
        description={description}
        text_contained={text_contained}
        text_outlined={text_outlined}
        image={image}
      />
      <FormContact />
    </Stack>
  )
}
