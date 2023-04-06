import { ComponentProps } from 'react'
import { styled } from '../../styles'
export const Button = styled('button', {
  fontFamily: '$body',
  backgroundColor: '$lilac-dark',
  color: '$gray100',
  border: 0,
  borderRadius: '$md',
  fontWeight: '$bold',
  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$xl',
        padding: '$2 $4',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})
export type ButtonProps = ComponentProps<typeof Button>
