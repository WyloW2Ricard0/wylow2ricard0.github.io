import { Grid } from '@mui/material'
import SectionHero from './section-hero'

export interface propItemHighlight {
  icon: React.ReactNode | null
  title: string
  description: string
}

interface propHighlight {
  title?: string
  subtitle?: string
  text_button_oulined?: string
  items?: propItemHighlight[]
}

export default function SectionHighlight({
  title = '',
  subtitle = '',
  text_button_oulined = '',
  items = [],
}: propHighlight) {
  return (
    <>
      <SectionHero
        component="highlight"
        title={title}
        subtitle={subtitle}
        text_button_outlined={text_button_oulined}
      />
      <Grid container justifyContent={'center'}>
        {/* Contenu mis en avant */}
        {items.map((item, index) => (
          // repartition equilibrée des items
          <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
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
