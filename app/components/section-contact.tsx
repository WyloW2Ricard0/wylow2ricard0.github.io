import { Stack } from '@mui/material'

import FormContact from './form-contact'
import SectionHero, { propHero } from './section-hero'

export default function SectionContact({
  title = '',
  subtitle = '',
  description = '',
  text_button_contained = '',
  text_button_outlined = '',
  image = '',
}: propHero) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%' }}>
      <SectionHero
        component="contact"
        title={title}
        subtitle={subtitle}
        description={description}
        text_button_contained={text_button_contained}
        text_button_outlined={text_button_outlined}
        image={image}
      />
      <FormContact />
    </Stack>
  )
}
