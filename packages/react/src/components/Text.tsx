import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Text = styled('p', {
  fontFamily: '$body',
  lineHeight: '$base',
  color: '$text-default',
  margin: 0,
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        '@phoneOnly': {
          fontSize: '$xxs',
        },
      },
      sm: {
        fontSize: '$sm',
        '@phoneOnly': {
          fontSize: '$xs',
        },
      },
      md: {
        fontSize: '$md',
        '@phoneOnly': {
          fontSize: '$sm',
        },
      },
      lg: {
        fontSize: '$lg',
        '@phoneOnly': {
          fontSize: '$md',
        },
      },
      xl: {
        fontSize: '$xl',
        '@phoneOnly': {
          fontSize: '$lg',
        },
      },
      '2xl': {
        fontSize: '$2xl',
        '@phoneOnly': {
          fontSize: '$xl',
        },
      },
      '4xl': {
        fontSize: '$4xl',
        '@phoneOnly': {
          fontSize: '$2xl',
        },
      },
      '5xl': {
        fontSize: '$5xl',
        '@phoneOnly': {
          fontSize: '$3xl',
        },
      },
      '6xl': {
        fontSize: '$6xl',
        '@phoneOnly': {
          fontSize: '$4xl',
        },
      },
      '7xl': {
        fontSize: '$7xl',
        '@phoneOnly': {
          fontSize: '$5xl',
        },
      },
      '8xl': {
        fontSize: '$8xl',
        '@phoneOnly': {
          fontSize: '$6xl',
        },
      },
      '9xl': {
        fontSize: '$9xl',
        '@phoneOnly': {
          fontSize: '$7xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
Text.displayName = 'Text'
