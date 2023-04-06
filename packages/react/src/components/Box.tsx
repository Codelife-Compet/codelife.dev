import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
export const Box = styled('div', {
  padding: '$16',
  borderRadius: '$md',
  background: '$codelife-black-700',
  '&:hover ': {
    background: '$codelife-black-500',
  },
})
export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
