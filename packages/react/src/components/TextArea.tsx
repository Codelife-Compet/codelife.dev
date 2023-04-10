import { ComponentProps } from 'react'
import { darkTheme, styled } from '../../styles'

export const TextArea = styled('textarea', {
  border: 0,
  display: 'flex',
  alignItems: 'baseline',
  gap: 8,
  backgroundColor: '$surface',
  color: '$text-default',
  fontFamily: '$body',

  fontSize: '$sm',
  resize: 'vertical',
  borderRadius: '$sm',

  minHeight: 88,
  width: '100%',
  padding: '$3 $4',
  opacity: 0.8,
  boxSizing: 'border-box',
  boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.2)',

  [`.${darkTheme} &`]: {
    boxShadow: 'none',
    border: '1px solid $codelife-black-700',
    '&:has(input:focus) ': {
      borderColor: '$codelife-primary-300',
    },
  },

  '&:focus ': {
    outline: 'none',
    opacity: 1,
  },
  '&:disabled ': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder ': {
    opacity: 0.9,
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>
