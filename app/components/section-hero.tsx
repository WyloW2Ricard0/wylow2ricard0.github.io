import { Button, Stack, Typography, TypographyProps } from '@mui/material'

export interface propHero {
  component?: 'page' | 'div' | string
  icon?: React.ReactNode
  align_stack_buttons?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  title?: string
  subtitle?: string | React.ReactNode
  description?: string | React.ReactNode
  text_button_contained?: string
  text_button_outlined?: string
  image?: React.ReactNode
}

export default function SectionHero({
  component = 'page',
  icon = '',
  title = '',
  subtitle = '',
  description = '',
  align_stack_buttons = 'center',
  text_button_contained = '',
  text_button_outlined = '',
  image = '',
}: propHero) {
  let variant_title: TypographyProps['variant']
  let variant_subtitle: TypographyProps['variant']
  let variant_description: TypographyProps['variant']

  if (component === 'page') {
    variant_title = 'h1'
    variant_subtitle = 'subtitle1'
    variant_description = 'body1'
  } else if (component === 'div') {
    variant_title = 'h4'
    variant_subtitle = 'subtitle2'
    variant_description = 'body2'
  } else {
    variant_title = 'h2'
    variant_subtitle = 'subtitle2'
    variant_description = 'body1'
  }

  return (
    <Stack
      direction={'column'}
      component={component as React.ElementType}
      //sx={{ m: 0, p: 0, }}
    >
      <Stack
        direction={'row'}
        sx={{
          m: image ? 2 : 0,
          p: image ? 2 : 0,
        }}
      >
        {image}
        <Stack
          direction={'column'}
          //sx={{ m: 0, p: 0, }}
        >
          <Typography
            variant={variant_title}
            align="center"
            display="flex"
            alignItems="center" //justifyContent='center'
            gap={1}
          >
            {icon}
            {title}
          </Typography>
          {subtitle !== '' && (
            <Typography variant={variant_subtitle} align="center">
              {subtitle}
            </Typography>
          )}
        </Stack>
      </Stack>
      {description !== '' && (
        <Typography variant={variant_description} align="left">
          {description}
        </Typography>
      )}
      {(text_button_contained !== '' || text_button_outlined !== '') && (
        <Stack direction={'row'} sx={{ justifyContent: align_stack_buttons }}>
          {text_button_contained !== '' && (
            <Button variant="contained">{text_button_contained}</Button>
          )}
          {text_button_outlined !== '' && (
            <Button variant="outlined">{text_button_outlined}</Button>
          )}
        </Stack>
      )}
    </Stack>
  )
}
