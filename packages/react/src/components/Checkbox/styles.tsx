import { styled, keyframes } from '../../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  lineHeight: 'unset',
  borderRadius: '$sm',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  backgroundColor: '$surface',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.2)',
  transition: 'all 275ms',
  '&[data-state="checked"]': {
    backgroundColor: '$paper',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $codelife-primary-500',
  },
})
export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$codelife-primary-500',
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
