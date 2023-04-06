import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Heading = styled('h2', {
  fontFamily: '$body',
  lineHeight: '$base',
  margin: 0,
  color: '$codelife-gray-100',
  variants: {
    fontfamily: {
      body: { fontFamily: '$body' },
      heading: { fontFamily: '$heading' },
    },
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
    fontfamily: 'body',
  },
})
export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}
