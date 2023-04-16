import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Heading = styled('h2', {
  fontFamily: '$heading',
  lineHeight: '$base',
  fontWeight: '$medium',
  margin: 0,
  color: '$text-default',
  variants: {
    size: {
      sm: {
        fontSize: '$xl',
        '@phoneOnly': {
          fontSize: '$lg',
        },
      },
      md: {
        fontSize: '$2xl',
        '@phoneOnly': {
          fontSize: '$xl',
        },
      },
      lg: {
        fontSize: '$3xl',
        '@phoneOnly': {
          fontSize: '$2xl',
        },
      },
      xl: {
        fontSize: '$4xl',
        '@phoneOnly': {
          fontSize: '$3xl',
        },
      },
      '2xl': {
        fontSize: '$5xl',
        '@phoneOnly': {
          fontSize: '$4xl',
        },
      },
      '3xl': {
        fontSize: '$6xl',
        '@phoneOnly': {
          fontSize: '$5xl',
        },
      },
      '4xl': {
        fontSize: '$7xl',
        '@phoneOnly': {
          fontSize: '$6xl',
        },
      },
      '5xl': {
        fontSize: '$8xl',
        '@phoneOnly': {
          fontSize: '$7xl',
        },
      },
      '6xl': {
        fontSize: '$9xl',
        '@phoneOnly': {
          fontSize: '$8xl',
        },
      },
      '7xl': {
        fontSize: '$10xl',
        '@phoneOnly': {
          fontSize: '$9xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}
Heading.displayName = 'Heading'
