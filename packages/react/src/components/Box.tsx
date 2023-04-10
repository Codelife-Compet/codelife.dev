import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$background',
  color: '$text-default',
})
export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
