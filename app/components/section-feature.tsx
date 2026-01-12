'use client'

import { Avatar, Card, Stack } from '@mui/material'
import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SectionHero from './section-hero'

export interface propItemFeature {
  icon_title: React.ReactNode //icons-material
  title: string
  description: string
  image_alt: string
  image_src: string
}

interface propSectionFeature {
  title?: string
  subtitle?: string
  items: propItemFeature[]
}

/** Mettre en avant les points forts avec une image */
export default function SectionFeature({
  title = '',
  subtitle = '',
  items = [],
}: propSectionFeature) {
  const [selectIndex, setSelectIndex] = useState(0)

  return (
    <>
      <SectionHero component="section" title={title} subtitle={subtitle} />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{ width: '100%' }}
        pb={4}
      >
        <Avatar
          variant="rounded"
          alt={items[selectIndex].image_alt}
          src={items[selectIndex].image_src}
          sx={{
            height: { xs: 0, sm: 250, md: 350, lg: 450 },
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
                description={item.description}
                icon_title={item.icon_title}
                text_outlined="Acceder"
                icon_outlined={<ArrowForwardIcon />}
              />
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  )
}
