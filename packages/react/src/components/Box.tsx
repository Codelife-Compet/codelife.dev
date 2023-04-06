import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
})
export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
