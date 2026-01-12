import { Button, Stack, Typography, TypographyProps } from '@mui/material'

export interface propHero {
  component?: 'title' | 'section' | 'div'
  icon_title?: React.ReactNode
  title?: string
  subtitle?: string | React.ReactNode
  description?: string | React.ReactNode
  text_contained?: string
  icon_contained?: React.ReactNode
  text_outlined?: string
  icon_outlined?: React.ReactNode
  image?: React.ReactNode
}

export default function SectionHero({
  component = 'title',
  icon_title = '',
  title = '',
  subtitle = '',
  description = '',
  text_contained = '',
  text_outlined = '',
  icon_contained = '',
  icon_outlined = '',
  image = '',
}: propHero) {
  let title_variant: TypographyProps['variant']
  let subtitle_variant: TypographyProps['variant']
  let description_variant: TypographyProps['variant']
  let justifyContent_variant: 'flex-start' | 'center' | 'flex-end'
  let size_button_variant: 'small' | 'medium' | 'large'
  let size_space_variant: number

  if (component === 'title') {
    title_variant = 'h1'
    subtitle_variant = 'subtitle1'
    description_variant = 'body1'
    justifyContent_variant = 'center'
    size_button_variant = 'large'
    size_space_variant = 2
  } else if (component === 'div') {
    title_variant = 'h4'
    subtitle_variant = 'subtitle2'
    description_variant = 'body2'
    justifyContent_variant = 'flex-end'
    size_button_variant = 'small'
    size_space_variant = 0
  } else {
    title_variant = 'h2'
    subtitle_variant = 'subtitle2'
    description_variant = 'body1'
    justifyContent_variant = 'center'
    size_button_variant = 'medium'
    size_space_variant = 1
  }

  return (
    <Stack
      direction={'column'}
      component={`hero-${component}` as React.ElementType}
      p={size_space_variant}
      spacing={size_space_variant}
      sx={{ width: '100%', justifyContent: 'flex-start' }}
    >
      <Stack direction={'row'} p={size_space_variant}>
        {image}
        <Stack
          direction={'column'}
          p={size_space_variant}
          spacing={size_space_variant}
        >
          <Typography
            variant={title_variant}
            align="center"
            display="flex"
            alignItems="center" //justifyContent='center'
            gap={1}
          >
            {icon_title}
            {title}
          </Typography>
          {subtitle !== '' && (
            <Typography variant={subtitle_variant} align="center">
              {subtitle}
            </Typography>
          )}
          {text_contained !== '' && (
            <Button
              variant="contained"
              size={size_button_variant}
              endIcon={icon_contained}
            >
              {text_contained}
            </Button>
          )}
        </Stack>
      </Stack>
      {description !== '' && (
        <Stack
          direction={'row'}
          p={size_space_variant}
          sx={{ width: '100%', justifyContent: 'flex-start' }}
        >
          <Typography variant={description_variant} align="left">
            {description}
          </Typography>
        </Stack>
      )}
      {text_outlined !== '' && (
        <Stack
          direction={'row'}
          p={size_space_variant}
          sx={{ width: '100%', justifyContent: justifyContent_variant }}
        >
          <Button
            variant="outlined"
            size={size_button_variant}
            endIcon={icon_outlined}
          >
            {text_outlined}
          </Button>
        </Stack>
      )}
    </Stack>
  )
}
