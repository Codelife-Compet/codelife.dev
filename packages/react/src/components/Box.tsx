import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  background: '$codelife-black-900',
})
export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
