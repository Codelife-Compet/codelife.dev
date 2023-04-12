import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$background',
  color: '$text-default',
  '@light': {
    boxShadow: '8px 10px 13px -6px rgba(0, 0, 0, 0.61)',
  },
  variants: {
    elevation: {
      0: {
        backgroundColor: '$background',
        zIndex: 0,
      },
      1: {
        backgroundColor: '$surface',
        zIndex: 10,
      },
      2: {
        backgroundColor: '$paper',
        zIndex: 20,
      },
    },
  },
  defaultVariants: {
    elevation: 0,
  },
})
export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
Box.displayName = 'Box'
