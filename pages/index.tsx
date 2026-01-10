import { Container, Divider } from '@mui/material'
import SectionFeature, { ITEMS_FEATURES } from '../components/section-feature'
import SectionHero from '../components/section-hero'
import SectionContact from '../components/section-contact'
import SectionHighlight from '../components/section-highlight'

export default function PageHome() {
  return (
    <Container
      sx={{
        maxWidth: { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      }}
    >
      <SectionHero
        component="page"
        title="Bienvenue sur mon site"
        subtitle="Découvrez mes projets et compétences"
        align_stack_buttons="center"
        text_button_contained="En savoir plus"
        text_button_oulined="Contactez-moi"
        text_image="Image principale"
        src_image="/images/hero-image.png"
        size_image={150}
      />
      <Divider />
      <SectionFeature items={ITEMS_FEATURES} />
      <Divider />
      <SectionContact />
      <Divider />
      <SectionHighlight />
    </Container>
  )
}
