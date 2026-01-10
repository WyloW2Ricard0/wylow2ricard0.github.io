import { Avatar, Card, Stack } from '@mui/material'
import { useState } from 'react'
import SectionHero from './section-hero'

interface propItemFeature {
  icon: React.ReactNode
  title: string
  description: string
  image_alt: string
  image_src: string
}

export const ITEMS_FEATURES: propItemFeature[] = [
  {
    icon: <span>🚀</span>,
    title: 'Performance',
    description:
      'Des performances optimales pour une expérience utilisateur fluide.',
    image_alt: 'Performance Image',
    image_src: '/images/performance.png',
  },
  {
    icon: <span>🔒</span>,
    title: 'Sécurité',
    description: 'Des mesures de sécurité robustes pour protéger vos données.',
    image_alt: 'Security Image',
    image_src: '/images/security.png',
  },
  {
    icon: <span>⚙️</span>,
    title: 'Personnalisation',
    description:
      'Des options de personnalisation pour répondre à vos besoins spécifiques.',
    image_alt: 'Customization Image',
    image_src: '/images/customization.png',
  },
]

interface propSectionFeature {
  title?: string
  subtitle?: string
  items: propItemFeature[]
}

/** Mettre en avant les points forts avec une image */
export default function SectionFeature({
  title = 'Points forts',
  subtitle = 'Voici quelques-uns de mes atouts majeurs',
  items = ITEMS_FEATURES,
}: propSectionFeature) {
  const [selectIndex, setSelectIndex] = useState(0)

  return (
    <>
      <SectionHero component="Feature" title={title} subtitle={subtitle} />
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%' }}>
        <Avatar
          variant="rounded"
          alt={items[selectIndex].image_alt}
          src={items[selectIndex].image_src}
          sx={{
            height: { xs: 0, sm: 250, md: 350 },
            width: { xs: 0, sm: 'calc(600px - 8px * 14)', md: '50%' },
          }}
        />
        <Stack direction={'column'} alignItems="center">
          {items.map((item, index) => (
            <Card
              key={index}
              // selectionner l'index de l'item
              onClick={() => setSelectIndex(index)}
              sx={{
                borderColor:
                  // sinon pas de modification
                  index === selectIndex ? 'secondary.main' : 'primary.main',
                width: '100%',
              }}
            >
              <SectionHero
                component="div"
                title={item.title}
                subtitle=""
                description={item.description}
                icon={item.icon}
                align_stack_buttons='flex-end'
                text_button_oulined='Acceder'
              />
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  )
}
