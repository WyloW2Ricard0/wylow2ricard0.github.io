import { Grid } from '@mui/material'
import SectionHero from './section-hero'

export const ITEMS_HIGHLIGHT = [
  {
    icon: null,
    title: 'Mise en avant 1',
    description: 'Description de la mise en avant 1',
  },
  {
    icon: null,
    title: 'Mise en avant 2',
    description: 'Description de la mise en avant 2',
  },
  {
    icon: null,
    title: 'Mise en avant 2',
    description: 'Description de la mise en avant 2',
  },
  {
    icon: null,
    title: 'Mise en avant 2',
    description: 'Description de la mise en avant 2',
  },
  {
    icon: null,
    title: 'Mise en avant 2',
    description: 'Description de la mise en avant 2',
  },
  {
    icon: null,
    title: 'Mise en avant 2',
    description: 'Description de la mise en avant 2',
  },
]

interface propHighlight {
  title?: string
  subtitle?: string
  items?: typeof ITEMS_HIGHLIGHT
}

export default function SectionHighlight({
  title = 'Points forts',
  subtitle = "Ceci est une section mise en avant pour attirer l'attention des utilisateurs sur un contenu spécifique.",
  items = ITEMS_HIGHLIGHT,
}: propHighlight) {
  return (
    <>
      <SectionHero component="Highlight" title={title} subtitle={subtitle} />
      <Grid container>
        {/* Contenu mis en avant */}
        {items.map((item, index) => (
          // repartition equilibrée des items
          <Grid item key={index}
            xs={12} sm={6} md={4} lg={4} xl={4}
          >
            <SectionHero
              component="div"
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
