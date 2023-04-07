import { styled } from '../../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: 8,
  width: '100%',
  borderRadius: '$sm',
  padding: '$3 $4',
  boxSizing: 'border-box',
  backgroundColor: '$codelife-black-500',
  border: '1px solid $codelife-black-700',
  '&:has(input:focus) ': {
    borderColor: '$codelife-primary-300',
  },
  '&:has(input:disabled) ': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$body',
  fontSize: '$sm',
  color: '$codelife-gray-400',
  fontWeight: '$regular',
})
export const Input = styled('input', {
  fontFamily: '$body',
  fontSize: '$sm',
  color: '$codelife-gray-100',
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
    color: '$codelife-gray-400',
  },
})
