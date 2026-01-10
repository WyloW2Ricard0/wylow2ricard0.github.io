import {
  Avatar,
  Button,
  Stack,
  Typography,
  TypographyProps,
} from '@mui/material'

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
  subtitle?: string
  description?: string
  text_button_contained?: string
  text_button_oulined?: string
  text_image?: string
  src_image?: string
  size_image?: number
}

export default function SectionHero({
  component = 'page',
  icon = '',
  title = '',
  subtitle = '',
  description = '',
  align_stack_buttons = 'center',
  text_button_contained = '',
  text_button_oulined = '',
  text_image = '',
  src_image = '',
  size_image = 150,
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
      direction={'row'}
      component={component as any}
      sx={{
        m: src_image !== '' ? 2 : 0,
        p: src_image !== '' ? 2 : 0,
      }}
    >
      {src_image !== '' && (
        <Avatar
          alt={text_image}
          src={src_image}
          sx={{ width: size_image, height: size_image }}
        />
      )}
      <Stack direction={'column'}>
        <Typography variant={variant_title} align="center">
          {icon} {title}
        </Typography>
        {subtitle !== '' && (
          <Typography variant={variant_subtitle} align="center">
            {subtitle}
          </Typography>
        )}
        {description !== '' && (
          <Typography variant={variant_description} align="center">
            {description}
          </Typography>
        )}
        {text_button_contained !== '' && text_button_oulined !== '' && (
          <Stack direction={'row'} justifyContent={align_stack_buttons}>
            {text_button_contained !== '' && (
              <Button variant="contained">{text_button_contained}</Button>
            )}
            {text_button_oulined !== '' && (
              <Button variant="outlined">{text_button_oulined}</Button>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
