import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../../styles'
export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  borderRadius: '$full',
  position: 'relative',
  backgroundColor: '$paper',
  boxShadow: '0 2px 5px rgba(0,0,0,0.67)',
  '&:focus': { opacity: 0.95 },
  variants: {
    variant: {
      primary: {
        '&[data-state="checked"]': { backgroundColor: '$codelife-primary-500' },
      },
      secondary: {
        '&[data-state="checked"]': {
          backgroundColor: '$codelife-secondary-500',
        },
      },
      tertiary: {
        '&[data-state="checked"]': {
          backgroundColor: '$codelife-tertiary-500',
        },
      },
    },
    size: {
      sm: {
        width: '$8',
        height: '$4',
      },
      md: {
        width: '$12',
        height: '$6',
      },
      lg: {
        width: '$14',
        height: '$8',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  backgroundColor: '$background',
  borderRadius: '9999px',
  transition: 'transform 275ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    backgroundColor: '$surface',
  },
  variants: {
    size: {
      sm: {
        width: '$3',
        height: '$3',
        '&[data-state="checked"]': {
          $$translate: `$space$4`,
          transform: 'translateX($$translate)',
        },
      },
      md: {
        width: '$5',
        height: '$5',
        '&[data-state="checked"]': {
          $$translate: '$space$6',
          transform: 'translateX($$translate)',
        },
      },
      lg: {
        width: '$7',
        height: '$7',
        '&[data-state="checked"]': {
          $$translate: '$space$6',
          transform: 'translateX($$translate)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
