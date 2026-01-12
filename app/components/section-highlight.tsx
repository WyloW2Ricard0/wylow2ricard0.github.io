import { Grid } from '@mui/material'
import SectionHero from './section-hero'

export interface propItemHighlight {
  icon_title: React.ReactNode | null
  title: string
  description: string
}

interface propHighlight {
  title?: string
  subtitle?: string | React.ReactNode
  text_outlined?: string
  items?: propItemHighlight[]
}

export default function SectionHighlight({
  title = '',
  subtitle = '',
  text_outlined = '',
  items = [],
}: propHighlight) {
  return (
    <>
      <SectionHero
        component="section"
        title={title}
        subtitle={subtitle}
        text_outlined={text_outlined}
      />
      <Grid container justifyContent={'center'} mb={2}>
        {/* Contenu mis en avant */}
        {items.map((item, index) => (
          // repartition equilibrée des items
          <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
            <SectionHero
              component="div"
              icon_title={item.icon_title}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
