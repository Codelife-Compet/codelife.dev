import { ComponentProps } from 'react'
import { styled } from '../../styles'

export const TextArea = styled('textarea', {
  display: 'flex',
  alignItems: 'baseline',
  gap: 8,

  backgroundColor: '$codelife-black-500',
  color: '$codelife-gray-100',
  fontFamily: '$body',

  fontSize: '$sm',
  resize: 'vertical',
  borderRadius: '$sm',

  minHeight: 88,
  width: '100%',
  padding: '$3 $4',

  boxSizing: 'border-box',
  border: '1px solid $codelife-black-700',

  '&:focus ': {
    outline: 'none',
    borderColor: '$codelife-primary-300',
  },
  '&:disabled ': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder ': {
    color: '$codelife-gray-400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>
