import { darkTheme, styled } from '../../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: 8,
  width: '100%',
  borderRadius: '$sm',
  padding: '$3 $4',
  boxSizing: 'border-box',
  opacity: 0.7,
  backgroundColor: '$surface',
  boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.2)',

  [`.${darkTheme} &`]: {
    boxShadow: 'none',
    border: '2px solid transparent',
    '&:has(input:focus) ': {
      borderColor: '$codelife-primary-900',
    },
  },
  '&:has(input:focus) ': {
    borderColor: '$codelife-primary-300',
    opacity: 1,
  },
  '&:has(input:disabled) ': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$body',
  fontSize: '$sm',
  color: '$text-additional',
  fontWeight: '$regular',
})
export const Input = styled('input', {
  fontFamily: '$body',
  fontSize: '$sm',
  color: '$text-default',
  width: '100%',
  background: 'transparent',
  border: 0,
  '&:focus ': {
    outline: 'none',
  },
  '&:disabled ': {
    cursor: 'not-allowed',
  },
  '&:placeholder ': {
    color: '$text-additional',
  },
})
